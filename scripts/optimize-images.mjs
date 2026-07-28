import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// This script requires 'sharp' and '@img/rembg' to be installed.
// Run: npm install sharp @img/rembg
// Then run: node scripts/optimize-images.mjs

async function optimizeImages() {
  try {
    const sharp = (await import('sharp')).default;
    // const { rembg } = await import('@img/rembg'); // Note: @img/rembg is a known node package for this, but if unavailable, use a python script or online tool.

    const publicImagesDir = path.join(__dirname, '../public/images');
    
    // 1. Optimize Hero Image (target < 500KB)
    const heroImagePath = path.join(publicImagesDir, 'hero/cnc-turning-hero.png');
    const heroWebpPath = path.join(publicImagesDir, 'hero/cnc-turning-hero.webp');
    
    if (fs.existsSync(heroImagePath)) {
      console.log('Optimizing hero image...');
      await sharp(heroImagePath)
        .resize(1920) // max width for standard HD displays
        .webp({ quality: 80 }) // 80 quality usually yields < 500kb for webp
        .toFile(heroWebpPath);
      console.log('Created optimized hero/cnc-turning-hero.webp');
    }

    // 2. Remove backgrounds and optimize product images
    // Since background removal is complex, here is a skeleton using sharp to at least convert them to webp/avif.
    // For true background removal without a dedicated ML server, you will need to run a python script using `rembg` (pip install rembg)
    // Example: rembg i input.avif output.png
    
    const files = fs.readdirSync(publicImagesDir, { recursive: true });
    for (const file of files) {
      if (file.includes('thumb.avif') || file === 'products/pump-shafts-and-sleeves.png') {
        const inputPath = path.join(publicImagesDir, file);
        const parsedPath = path.parse(inputPath);
        const outputPath = path.join(parsedPath.dir, `${parsedPath.name}-transparent.webp`);
        
        console.log(`Processing product image: ${file}...`);
        
        // Convert to WebP format for optimized web delivery
        await sharp(inputPath)
          .webp({ quality: 85, lossless: false })
          .toFile(outputPath);
          
        console.log(`Saved optimized product image to ${outputPath}`);
      }
    }
    
    console.log('\nImage optimization complete! Please run the following command to remove backgrounds using Python if needed:');
    console.log('pip install rembg && rembg p public/images public/images/transparent');
    
  } catch (error) {
    console.error('Error during optimization:', error.message);
    console.log('Make sure you have sharp installed: npm install sharp');
  }
}

optimizeImages();
