import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ProductListing } from "@/components/sections/products/ProductListing";
import { CTABand } from "@/components/sections/CTABand";

function titleFromSlug(slug: string) {
  return slug.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const categoryName = titleFromSlug(slug);
  return {
    title: `${categoryName} | Precision Products | Pako Engineers`,
    description: `Explore our range of precision-machined ${categoryName.toLowerCase()} manufactured for global OEMs.`,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const categoryName = titleFromSlug(slug);
  
  return (
    <>
      <section className="bg-navy py-16 md:py-24 text-white">
        <Container>
          <div className="flex items-center gap-2 text-sm font-medium text-oxide mb-4">
            <span>Home</span>
            <span>&rarr;</span>
            <span>Products</span>
            <span>&rarr;</span>
            <span className="text-white">{categoryName}</span>
          </div>
          <h1 className="font-display text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl mb-6">
            {categoryName}
          </h1>
          <p className="max-w-2xl text-lg text-white/80">
            Precision engineered {categoryName.toLowerCase()} manufactured in
            stainless steel, duplex, super duplex, Nitronic 50, EN-series steels
            and customer-specified materials.
          </p>
        </Container>
      </section>

      <ProductListing />
      
      <CTABand />
    </>
  );
}
