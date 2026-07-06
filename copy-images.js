const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'images');
const destDir = path.join(__dirname, 'public', 'images', 'real');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

try {
  const files = fs.readdirSync(srcDir);
  let count = 0;
  
  files.forEach(file => {
    const srcFile = path.join(srcDir, file);
    const destFile = path.join(destDir, file);
    
    // Only copy files
    if (fs.statSync(srcFile).isFile()) {
      fs.copyFileSync(srcFile, destFile);
      console.log(`Copied: ${file}`);
      count++;
    }
  });
  
  console.log(`\nSuccess! Copied ${count} images to public/images/real/`);
} catch (err) {
  console.error("Error copying images:", err);
}
