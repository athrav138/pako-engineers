import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { CTABand } from "@/components/sections/CTABand";
import { ProductListingClient } from "@/components/sections/products/ProductListingClient";
import { getAllProducts } from "@/lib/content/products";

export const metadata: Metadata = {
  title: "Precision Products Catalogue | Pako Engineers",
  description: "Browse our complete catalog of precision engineered pump shafts, sleeves, impellers, couplings, and custom OEM components.",
  alternates: { canonical: "/products" },
  openGraph: {
    title: "Pako Engineers – Precision Products Catalogue",
    description: "Explore high-quality machined components designed for global OEMs in the Oil & Gas, Power, and Marine sectors.",
    url: "https://pakoshaft.com/products",
    type: "website",
  },
};

export default function ProductsPage() {
  const products = getAllProducts();

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Precision Products Catalogue",
    "description": "Catalog of precision engineered pump shafts, sleeves, impellers, couplings, and custom components.",
    "url": "https://pakoshaft.com/products",
    "publisher": {
      "@type": "Organization",
      "name": "Pako Engineers",
      "logo": "https://pakoshaft.com/images/logo.png"
    },
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": products.map((product, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "url": `https://pakoshaft.com/products/${product.slug}`,
        "name": product.name
      }))
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <PageHero
        eyebrow="Product Catalogue"
        title="Precision Engineered Components"
        description="Our comprehensive range of high-precision machined components, manufactured to exact OEM specifications and international standards."
        backgroundImage="/images/product-shafts.png"
      />
      <Breadcrumb items={[{ label: "Products", href: "/products" }]} />
      
      <ProductListingClient initialProducts={products} />

      <CTABand 
        title="Need a Custom Component?"
        description="Upload your engineering drawings and specifications. Our technical team will provide a manufacturing capability assessment and quote."
      />
    </>
  );
}
