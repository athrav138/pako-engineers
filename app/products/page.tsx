import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { ProductSpecCard } from "@/components/products/ProductSpecCard";
import { CTABand } from "@/components/sections/CTABand";
import { products } from "@/lib/content/products";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Precision-machined shafts, sleeves, couplings, lock nuts, pump parts and gears in stainless steel, duplex, super duplex and Nitronic 50.",
  alternates: { canonical: "/products" },
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: products.map((product, index) => ({
    "@type": "Product",
    position: index + 1,
    name: product.name,
    description: product.summary,
    material: product.materials,
  })),
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="Precision components, machined to specification"
        description="Every product family below is available in stainless steel, duplex, super duplex and Nitronic 50, with size ranges and finish tolerances confirmed at enquiry."
      />

      <section className="py-20 md:py-28">
        <Container className="flex flex-col gap-6">
          {products.map((product) => (
            <ProductSpecCard key={product.slug} product={product} />
          ))}
        </Container>
      </section>

      <CTABand
        title="Don't see the exact component listed?"
        description="Pump parts and accessories are customised to customer drawing — send your specification for a capability confirmation."
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
    </>
  );
}
