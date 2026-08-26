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
  async redirects() {
    return [
      { source: "/about", destination: "/company", permanent: true },
      { source: "/company-profile", destination: "/company", permanent: true },
      { source: "/our-story", destination: "/company", permanent: true },
      { source: "/infrastructure", destination: "/manufacturing", permanent: true },
      { source: "/machines", destination: "/manufacturing", permanent: true },
      { source: "/manufacturing-facility", destination: "/manufacturing", permanent: true },
      { source: "/materials", destination: "/manufacturing", permanent: true },
      { source: "/capabilities", destination: "/manufacturing", permanent: true },
      { source: "/certifications", destination: "/quality", permanent: true },
      { source: "/industries", destination: "/services", permanent: true },
      { source: "/industries-served", destination: "/services", permanent: true },
      { source: "/export-markets", destination: "/services", permanent: true },
      { source: "/clients", destination: "/projects", permanent: true },
      { source: "/admin", destination: "/", permanent: true },
    ];
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
