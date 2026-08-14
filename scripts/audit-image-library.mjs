import crypto from "node:crypto";
import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const publicImagesDir = path.join(root, "public", "images");
const outputDir = path.join(root, "docs", "image-audit");
const codeDirs = ["app", "components", "lib", "scripts", "config"].map((dir) => path.join(root, dir));
const imageExtensions = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif", ".svg", ".wdp"]);

async function exists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walk(fullPath)));
    } else if (imageExtensions.has(path.extname(entry.name).toLowerCase())) {
      files.push(fullPath);
    }
  }
  return files;
}

async function readTextFiles(dir) {
  if (!(await exists(dir))) return [];
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await readTextFiles(fullPath)));
    } else if (/\.(tsx?|jsx?|mjs|cjs|css|json|md)$/.test(entry.name)) {
      files.push(fullPath);
    }
  }
  return files;
}

function publicPath(filePath) {
  return `/${path.relative(path.join(root, "public"), filePath).replaceAll(path.sep, "/")}`;
}

function ratio(width, height) {
  if (!width || !height) return "";
  return `${(width / height).toFixed(2)}:1`;
}

function sectionForPath(publicSrc) {
  const lower = publicSrc.toLowerCase();
  if (lower.includes("/logos/")) return "Logo/branding";
  if (lower.includes("/leadership/") || lower.includes("/emp/") || lower.includes("ceo") || lower.includes("md")) return "Leadership";
  if (lower.includes("/hero/")) return "Hero";
  if (lower.includes("/company/")) return "Company/About";
  if (lower.includes("/manufacturing/")) return "Manufacturing";
  if (lower.includes("/machines/") || lower.includes("machine photos")) return "Machinery";
  if (lower.includes("/products/")) return "Products";
  if (lower.includes("/projects/")) return "Projects";
  if (lower.includes("/quality/")) return "Quality";
  if (lower.includes("/gallery/")) return "Gallery";
  return "Unclassified";
}

async function getReferences() {
  const refs = new Map();
  const textFiles = (await Promise.all(codeDirs.map(readTextFiles))).flat();
  for (const file of textFiles) {
    const text = await fs.readFile(file, "utf8");
    const matches = text.match(/\/images\/[^"'`) }\]]+/g) ?? [];
    for (const match of matches) {
      const clean = match.replace(/[.,;:]$/, "");
      if (!refs.has(clean)) refs.set(clean, []);
      refs.get(clean).push(path.relative(root, file).replaceAll(path.sep, "/"));
    }
  }
  return refs;
}

async function makeContactSheet(items, name) {
  const cells = [];
  const cellWidth = 220;
  const cellHeight = 190;
  const columns = 4;
  const labelHeight = 42;

  for (const item of items) {
    try {
      const thumb = await sharp(item.fullPath)
        .rotate()
        .resize({ width: cellWidth, height: cellHeight - labelHeight, fit: "inside", withoutEnlargement: true })
        .flatten({ background: "#f5f5f5" })
        .jpeg({ quality: 80 })
        .toBuffer();
      cells.push({ input: thumb, item });
    } catch {
      // Unsupported files such as WDP are still included in the JSON audit.
    }
  }

  if (!cells.length) return;
  const rows = Math.ceil(cells.length / columns);
  const svgText = cells.map(({ item }, index) => {
    const x = (index % columns) * cellWidth;
    const y = Math.floor(index / columns) * cellHeight;
    const label = `${item.index}. ${item.relativePath}`.replaceAll("&", "&amp;").replaceAll("<", "&lt;");
    return `<text x="${x + 8}" y="${y + cellHeight - 24}" font-family="Arial" font-size="11" fill="#111">${label}</text><text x="${x + 8}" y="${y + cellHeight - 9}" font-family="Arial" font-size="10" fill="#555">${item.width || "?"}x${item.height || "?"} | ${Math.round(item.size / 1024)} KB</text>`;
  }).join("");

  const composites = cells.map(({ input }, index) => ({
    input,
    left: (index % columns) * cellWidth,
    top: Math.floor(index / columns) * cellHeight,
  }));
  composites.push({
    input: Buffer.from(`<svg width="${columns * cellWidth}" height="${rows * cellHeight}">${svgText}</svg>`),
    left: 0,
    top: 0,
  });

  await sharp({
    create: {
      width: columns * cellWidth,
      height: rows * cellHeight,
      channels: 3,
      background: "#ffffff",
    },
  }).composite(composites).png().toFile(path.join(outputDir, `${name}.png`));
}

await fs.mkdir(outputDir, { recursive: true });
const refs = await getReferences();
const files = await walk(publicImagesDir);
const items = [];

for (const [index, fullPath] of files.entries()) {
  const buffer = await fs.readFile(fullPath);
  const src = publicPath(fullPath);
  let metadata = {};
  let phash = "";
  try {
    metadata = await sharp(buffer).metadata();
    const raw = await sharp(buffer).rotate().resize(8, 8, { fit: "fill" }).greyscale().raw().toBuffer();
    const avg = raw.reduce((sum, value) => sum + value, 0) / raw.length;
    phash = [...raw].map((value) => (value >= avg ? "1" : "0")).join("");
  } catch {
    metadata = {};
  }
  items.push({
    index: index + 1,
    relativePath: path.relative(publicImagesDir, fullPath).replaceAll(path.sep, "/"),
    publicPath: src,
    fullPath,
    extension: path.extname(fullPath).toLowerCase(),
    size: buffer.length,
    width: metadata.width ?? null,
    height: metadata.height ?? null,
    aspectRatio: ratio(metadata.width, metadata.height),
    format: metadata.format ?? "unsupported",
    hash: crypto.createHash("sha256").update(buffer).digest("hex"),
    perceptualHash: phash,
    usedBy: refs.get(src) ?? [],
    section: sectionForPath(src),
  });
}

const exactDuplicates = Object.values(Object.groupBy(items, (item) => item.hash)).filter((group) => group.length > 1);
const nearDuplicates = Object.values(Object.groupBy(items.filter((item) => item.perceptualHash), (item) => item.perceptualHash)).filter((group) => group.length > 1);

await fs.writeFile(path.join(outputDir, "image-inventory.json"), JSON.stringify({ total: items.length, exactDuplicates, nearDuplicates, items }, null, 2));
await fs.writeFile(
  path.join(outputDir, "image-inventory.csv"),
  ["index,relativePath,extension,size,width,height,aspectRatio,format,section,usedByCount", ...items.map((item) => [
    item.index,
    `"${item.relativePath}"`,
    item.extension,
    item.size,
    item.width ?? "",
    item.height ?? "",
    item.aspectRatio,
    item.format,
    `"${item.section}"`,
    item.usedBy.length,
  ].join(","))].join("\n"),
);

const groups = Object.groupBy(items, (item) => item.section.replaceAll("/", "-").replaceAll(" ", "-").toLowerCase());
for (const [name, group] of Object.entries(groups)) {
  await makeContactSheet(group, `contact-sheet-${name}`);
}

console.log(`Audited ${items.length} images.`);
console.log(`Exact duplicate groups: ${exactDuplicates.length}`);
console.log(`Near duplicate groups: ${nearDuplicates.length}`);
console.log(`Output: ${path.relative(root, outputDir)}`);
