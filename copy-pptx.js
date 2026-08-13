const fs = require("fs");
const path = require("path");

const src = path.join(__dirname, "Company Information", "PAKO PROFILE FEBRUARY 2026 .pptx");
const dest = path.join(__dirname, "public", "documents", "pako-company-profile.pptx");

fs.copyFileSync(src, dest);
console.log("✅ Copied PPTX to:", dest);
