import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  const log: string[] = [];
  try {
    const dir = 'd:/Project List/pako-engineers/public/images/company/leadership';

    function getMagicBytes(filePath: string) {
      const fd = fs.openSync(filePath, 'r');
      const buffer = Buffer.alloc(12);
      fs.readSync(fd, buffer, 0, 12, 0);
      fs.closeSync(fd);
      return buffer;
    }

    function detectType(buffer: Buffer) {
      const hex = buffer.toString('hex').toUpperCase();
      if (hex.startsWith('FFD8FF')) return 'jpg';
      if (hex.startsWith('89504E47')) return 'png';
      if (buffer.toString('utf8', 0, 4) === 'RIFF' && buffer.toString('utf8', 8, 12) === 'WEBP') return 'webp';
      return 'unknown';
    }

    // Identify CEO image
    const ceoSrc = path.join(dir, 'sudarshankhot');
    if (fs.existsSync(ceoSrc)) {
      const magic = getMagicBytes(ceoSrc);
      const type = detectType(magic);
      const dest = path.join(dir, `ceo-sudarshan-khot.${type === 'unknown' ? 'webp' : type}`);
      fs.copyFileSync(ceoSrc, dest);
      log.push(`Copied CEO image from sudarshankhot to ${path.basename(dest)} (type: ${type})`);
    } else {
      log.push('sudarshankhot file not found');
    }

    // Identify MD image from suhaskhot_files
    const suhasDir = path.join(dir, 'suhaskhot_files');
    if (fs.existsSync(suhasDir)) {
      const items = fs.readdirSync(suhasDir);
      for (const item of items) {
        const itemPath = path.join(suhasDir, item);
        const stat = fs.statSync(itemPath);
        if (stat.isFile() && stat.size > 200000) { // files larger than 200KB
          const magic = getMagicBytes(itemPath);
          const type = detectType(magic);
          if (type !== 'unknown') {
            const dest = path.join(dir, `md-suhas-khot.${type}`);
            fs.copyFileSync(itemPath, dest);
            log.push(`Copied MD image from suhaskhot_files/${item} to ${path.basename(dest)} (type: ${type}, size: ${stat.size})`);
            break; // copy the first match
          }
        }
      }
    } else {
      log.push('suhaskhot_files folder not found');
    }
  } catch (err: any) {
    log.push(`Error: ${err.message}`);
  }

  return NextResponse.json({ log });
}
