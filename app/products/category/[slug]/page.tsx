import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ProductListingClient } from "@/components/sections/products/ProductListingClient";
import { CTABand } from "@/components/sections/CTABand";
import { getAllProducts } from "@/lib/content/products";
import { ProductCategory } from "@/lib/content/products/types";

function titleFromSlug(slug: string) {
  return slug.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}

function categorySlug(category: string) {
  return category.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
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
  const products = getAllProducts().filter((product) => categorySlug(product.category) === slug);
  const displayName = products[0]?.category ?? categoryName as ProductCategory;
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pakoshaft.com" },
      { "@type": "ListItem", "position": 2, "name": "Products", "item": "https://pakoshaft.com/products" },
      { "@type": "ListItem", "position": 3, "name": displayName, "item": `https://pakoshaft.com/products/category/${slug}` }
    ]
  };
  
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <section className="bg-navy py-16 md:py-24 text-white">
        <Container>
          <div className="flex items-center gap-2 text-sm font-medium text-oxide mb-4">
            <span>Home</span>
            <span>&rarr;</span>
            <span>Products</span>
            <span>&rarr;</span>
            <span className="text-white">{displayName}</span>
          </div>
          <h1 className="font-display text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl mb-6">
            {displayName}
          </h1>
          <p className="max-w-2xl text-lg text-white/80">
            Precision engineered {displayName.toLowerCase()} manufactured in
            stainless steel, duplex, super duplex, Nitronic 50, EN-series steels
            and customer-specified materials.
          </p>
        </Container>
      </section>

      <ProductListingClient initialProducts={products} />
      
      <CTABand />
    </>
  );
}
