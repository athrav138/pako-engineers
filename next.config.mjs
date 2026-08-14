import fs from 'fs';
import path from 'path';

try {
  const dir = './public/images/company/leadership';
  if (fs.existsSync(dir)) {
    const ceoSrc = path.join(dir, 'sudarshankhot');
    if (fs.existsSync(ceoSrc)) {
      const dest = path.join(dir, 'ceo-sudarshan-khot.webp');
      fs.copyFileSync(ceoSrc, dest);
      console.log(`[CONFIG] Copied sudarshankhot to ${dest}`);
    }

    const suhasDir = path.join(dir, 'suhaskhot_files');
    if (fs.existsSync(suhasDir)) {
      const items = fs.readdirSync(suhasDir);
      for (const item of items) {
        const itemPath = path.join(suhasDir, item);
        const stat = fs.statSync(itemPath);
        if (stat.isFile() && stat.size > 200000) {
          const fd = fs.openSync(itemPath, 'r');
          const buffer = Buffer.alloc(12);
          fs.readSync(fd, buffer, 0, 12, 0);
          fs.closeSync(fd);
          const hex = buffer.toString('hex').toUpperCase();
          let type = 'unknown';
          if (hex.startsWith('FFD8FF')) type = 'jpg';
          else if (hex.startsWith('89504E47')) type = 'png';
          else if (buffer.toString('utf8', 0, 4) === 'RIFF' && buffer.toString('utf8', 8, 12) === 'WEBP') type = 'webp';
          
          if (type !== 'unknown') {
            const dest = path.join(dir, 'md-suhas-khot.webp');
            fs.copyFileSync(itemPath, dest);
            console.log(`[CONFIG] Copied MD image ${item} to ${dest}`);
            break;
          }
        }
      }
    }
  }
} catch (e) {
  console.error('[CONFIG] Error copying leadership images:', e);
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  devIndicators: false,
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  reactStrictMode: true,
  images: {
    deviceSizes: [360, 640, 750, 828, 1080, 1200, 1600, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000,
    qualities: [75, 80, 85, 90],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
  async headers() {
    const securityHeaders = [
      { key: "X-DNS-Prefetch-Control", value: "on" },
      { key: "X-Content-Type-Options", value: "nosniff" },
      { key: "X-Frame-Options", value: "SAMEORIGIN" },
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      {
        key: "Permissions-Policy",
        value: "camera=(), microphone=(), geolocation=(self), payment=()",
      },
    ];

    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
      {
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/documents/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, stale-while-revalidate=604800",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
