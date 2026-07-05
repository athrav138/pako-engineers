import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

const routes = [
  "",
  "/about",
  "/company-profile",
  "/our-story",
  "/infrastructure",
  "/manufacturing",
  "/manufacturing-facility",
  "/products",
  "/services",
  "/industries",
  "/industries-served",
  "/capabilities",
  "/quality",
  "/certifications",
  "/clients",
  "/gallery",
  "/videos",
  "/machines",
  "/downloads",
  "/career",
  "/csr",
  "/export-markets",
  "/contact",
  "/request-quote",
  "/faq",
  "/privacy-policy",
  "/terms",
  "/search",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/contact" || route === "/request-quote" ? 0.9 : 0.7,
  }));
}
