const fs = require('fs');
const path = require('path');

const renames = [
  { old: 'Retainer ing, Throdan Bearing.png', new: 'retainer-ring-thordon-bearing.png' },
  { old: 'SHAFT PHOTO 2.png', new: 'shaft-photo-2.png' },
  { old: 'SHAFT PHOTO.png', new: 'shaft-photo.png' },
  { old: 'SHAFT.png', new: 'shaft.png' },
  { old: 'SUpport Roller Final.png', new: 'support-roller-final.png' },
  { old: 'Shaft in white.png', new: 'shaft-in-white.png' },
  { old: 'Shop.png', new: 'shop.png' },
  { old: 'Sleev, muffe coupling, bushes.png', new: 'sleeve-muff-coupling-bushes.png' },
  { old: 'Sleev, mufful coupling, bush.png', new: 'sleeve-muff-coupling-bush.png' },
  { old: 'Spacial Grade Matarial.png', new: 'special-grade-material.png' },
  { old: 'Spacial Shaft.png', new: 'special-shaft.png' },
  { old: 'Support roller asambley.png', new: 'support-roller-assembly.png' },
  { old: 'Thordon bearing.png', new: 'thordon-bearing.png' },
  { old: 'Wire Cuting Machine.png', new: 'wire-cutting-machine.png' },
  { old: 'Product.png', new: 'product-precision.png' }
];

const productsDir = path.join(__dirname, 'public', 'images', 'products');

renames.forEach(({ old: oldName, new: newName }) => {
  const oldPath = path.join(productsDir, oldName);
  const newPath = path.join(productsDir, newName);
  
  if (fs.existsSync(oldPath)) {
    fs.renameSync(oldPath, newPath);
    console.log(`Renamed: ${oldName} -> ${newName}`);
  } else {
    console.log(`Skipped: ${oldName} not found (already renamed?)`);
  }
});

// Also copy the uploaded logo
const uploadedLogo = "C:\\Users\\Atharva Suryawanshi\\.gemini\\antigravity\\brain\\5f29bfac-c469-40f1-b151-8f158d97c71a\\.user_uploaded\\media_1787480697244.png";
const targetLogo = path.join(__dirname, 'public', 'images', 'logos', 'pako-engineers-logo.png');

if (fs.existsSync(uploadedLogo)) {
  fs.copyFileSync(uploadedLogo, targetLogo);
  console.log('Successfully copied the new logo into public/images/logos!');
} else {
  console.log('Could not find the uploaded logo to copy.');
}
