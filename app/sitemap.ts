import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

import { getAllProducts } from "@/lib/content/products";
import { getProjectPages } from "@/lib/content/projects";

const staticRoutes = [
  "",
  "/about",
  "/company-profile",
  "/our-story",
  "/infrastructure",
  "/manufacturing-facility",
  "/products",
  "/projects",
  "/services",
  "/capabilities",
  "/quality",
  "/certifications",
  "/clients",
  "/gallery",
  "/videos",
  "/machines",
  "/careers",
  "/csr",
  "/export-markets",
  "/materials",
  "/contact",
  "/request-quote",
  "/faq",
  "/privacy-policy",
  "/terms",
  "/cookie-policy",
  "/search",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const productRoutes = getAllProducts().map((p) => `/products/${p.slug}`);
  const projectRoutes = getProjectPages().map((p) => `/projects/${p.slug}`);

  const allRoutes = [...staticRoutes, ...productRoutes, ...projectRoutes];

  return allRoutes.map((route) => {
    const isHome = route === "";
    const isHighPriority =
      route === "/contact" ||
      route === "/request-quote" ||
      route.startsWith("/products/");

    return {
      url: `${SITE_URL}${route}`,
      lastModified: new Date(),
      changeFrequency: isHome ? "weekly" : "monthly",
      priority: isHome ? 1.0 : isHighPriority ? 0.9 : 0.7,
    };
  });
}
