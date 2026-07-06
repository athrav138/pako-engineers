import type { Metadata } from "next";
import { ProductHero } from "@/components/sections/products/ProductHero";
import { CategoryGrid } from "@/components/sections/products/CategoryGrid";
import { ProductListing } from "@/components/sections/products/ProductListing";
import { CTABand } from "@/components/sections/CTABand";

export const metadata: Metadata = {
  title: "Precision Products | Pako Engineers",
  description: "Explore our range of precision-engineered shafts, sleeves, couplings, and pump parts manufactured with advanced CNC technology.",
  alternates: { canonical: "/products" },
};

const breadcrumbsSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://pakoshaft.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Products",
      "item": "https://pakoshaft.com/products"
    }
  ]
};

export default function ProductsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsSchema) }}
      />
      <ProductHero />
      <CategoryGrid />
      <ProductListing />
      <CTABand />
    </>
  );
}
