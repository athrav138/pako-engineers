import fs from "fs";
import path from "path";

const mapping = {
  "/images/company/factory-building-exterior.avif": "Images.assets.factoryBuildingExterior.src",
  "/images/company/factory-building-exterior-thumb.avif": "Images.assets.factoryBuildingExteriorThumb.src",
  "/images/company/factory-entrance-signage-thumb.avif": "Images.assets.factoryEntranceSignageThumb.src",
  "/images/company/pako-engineers-building-signage-thumb.avif": "Images.assets.pakoEngineersBuildingSignageThumb.src",
  "/images/hero/cnc-turning-hero.png": "Images.assets.cncTurningHero.src",
  "/images/logos/pako-engineers-logo.png": "Images.assets.logo.src",
  "/images/machines/cnc-operator-machine-control-thumb.avif": "Images.assets.cncOperatorMachineControlThumb.src",
  "/images/machines/cylindrical-grinding-machine.avif": "Images.assets.cylindricalGrindingMachine.src",
  "/images/machines/heavy-duty-engine-lathe.avif": "Images.assets.heavyDutyEngineLathe.src",
  "/images/machines/heavy-duty-lathe-bed.avif": "Images.assets.heavyDutyLatheBed.src",
  "/images/machines/legacy-lathe-inspection.avif": "Images.assets.legacyLatheInspection.src",
  "/images/machines/legacy-lathe-inspection-thumb.avif": "Images.assets.legacyLatheInspectionThumb.src",
  "/images/machines/long-bed-turning-lathe.avif": "Images.assets.longBedTurningLathe.src",
  "/images/machines/long-bed-turning-lathe-thumb.avif": "Images.assets.longBedTurningLatheThumb.src",
  "/images/machines/long-shaft-machining-lathe.avif": "Images.assets.longShaftMachiningLathe.src",
  "/images/machines/machine-operator-lathe-thumb.avif": "Images.assets.machineOperatorLatheThumb.src",
  "/images/machines/shaft-machining-lathe.avif": "Images.assets.shaftMachiningLathe.src",
  "/images/machines/surface-grinding-machine.jpg": "Images.assets.surfaceGrindingMachine.src",
  "/images/manufacturing/modern-factory-floor-overview.png": "Images.assets.modernFactoryFloorOverview.src",
  "/images/products/machined-circular-flange.avif": "Images.assets.machinedCircularFlange.src",
  "/images/products/machined-flange-component.jpg": "Images.assets.machinedFlangeComponent.src",
  "/images/products/machined-sleeve-components.avif": "Images.assets.machinedSleeveComponents.src",
  "/images/products/precision-pump-shafts-lineup.avif": "Images.assets.precisionPumpShaftsLineup.src",
  "/images/products/pump-shafts-and-sleeves.png": "Images.assets.pumpShaftsAndSleeves.src",
  "/images/projects/large-pump-rotor-assembly.avif": "Images.assets.largePumpRotorAssembly.src",
  "/images/projects/large-pump-rotor-assembly-thumb.avif": "Images.assets.largePumpRotorAssemblyThumb.src",
  "/images/projects/vertical-pump-assembly.jpg": "Images.assets.verticalPumpAssembly.src",
  "/images/projects/vertical-pump-assembly-thumb.avif": "Images.assets.verticalPumpAssemblyThumb.src",
  "/images/quality/precision-quality-inspection.png": "Images.assets.precisionQualityInspection.src",
};

const walk = (dir) => {
  const result = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) result.push(...walk(full));
    else if (/\.(ts|tsx)$/.test(entry.name) && full.replaceAll("\\", "/") !== "lib/images.ts") result.push(full);
  }
  return result;
};

const addImport = (source, needsAbsolute) => {
  if (source.includes("@/lib/images")) {
    if (needsAbsolute) {
      return source.replace(
        'import { Images } from "@/lib/images";',
        'import { Images, absoluteImageUrl } from "@/lib/images";',
      );
    }
    return source;
  }

  const importLine = `import { Images${needsAbsolute ? ", absoluteImageUrl" : ""} } from "@/lib/images";`;
  const lines = source.split("\n");
  let index = 0;
  while (index < lines.length && (lines[index].startsWith("import ") || lines[index].trim() === "")) index += 1;
  lines.splice(index, 0, importLine);
  return lines.join("\n");
};

const toAsset = (constant) => constant.replace(/\.src$/, "");

const changed = [];
for (const file of [...walk("app"), ...walk("components"), ...walk("lib")]) {
  let source = fs.readFileSync(file, "utf8");
  if (!source.includes("/images/")) continue;

  const original = source;
  for (const [imagePath, constant] of Object.entries(mapping)) {
    source = source.replaceAll(`src="${imagePath}"`, `src={${constant}}`);
    source = source.replaceAll(`backgroundImage="${imagePath}"`, `backgroundImage={${constant}}`);
    source = source.replaceAll(`image: "${imagePath}"`, `image: ${constant}`);
    source = source.replaceAll(`url: "${imagePath}"`, `url: ${constant}`);
    source = source.replaceAll(`"${imagePath}"`, constant);
    source = source.replaceAll(`"https://pakoshaft.com${imagePath}"`, `absoluteImageUrl(${toAsset(constant)})`);
  }

  if (source !== original) {
    source = addImport(source, source.includes("absoluteImageUrl("));
    fs.writeFileSync(file, source);
    changed.push(file);
  }
}

console.log(changed.join("\n"));
