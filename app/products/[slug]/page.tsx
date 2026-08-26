import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight, Cog, Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { CTABand } from "@/components/sections/CTABand";
import { RelatedProductsCarousel } from "@/components/sections/products/RelatedProductsCarousel";
import {
  ProductGallery,
  ProductSpecs,
} from "@/components/sections/products/ProductDetailComponents";
import { getProductBySlug, getAllProducts } from "@/lib/content/products";

export function generateStaticParams() {
  return getAllProducts().map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product Not Found | Pako Engineers",
    };
  }

  return {
    title: `${product.name} | Pako Engineers`,
    description: product.summary,
    alternates: { canonical: `/products/${product.slug}` },
    openGraph: {
      title: `${product.name} - Precision Manufacturing`,
      description: product.summary,
      url: `https://pakoshaft.com/products/${product.slug}`,
      type: "article",
      images: [{ url: product.image, width: 1200, height: 630 }],
    },
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();
  
  const productSchema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": product.name,
    "image": `https://pakoshaft.com${product.image}`,
    "description": product.summary,
    "brand": {
      "@type": "Brand",
      "name": "Pako Engineers"
    },
    "category": product.category,
    "manufacturer": {
      "@type": "Organization",
      "name": "Pako Engineers"
    },
    "additionalProperty": product.specifications?.map((spec) => ({
      "@type": "PropertyValue",
      "name": spec.label,
      "value": spec.value
    })) || []
  };

  const faqSchema = product.faqs && product.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": product.faqs.map((faq: any) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : null;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pakoshaft.com" },
      { "@type": "ListItem", "position": 2, "name": "Products", "item": "https://pakoshaft.com/products" },
      { "@type": "ListItem", "position": 3, "name": product.name, "item": `https://pakoshaft.com/products/${product.slug}` }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      
      <div className="bg-background-light pt-32 pb-8 border-b border-line">
        <Container>
          <Breadcrumb items={[
            { label: "Products", href: "/products" },
            { label: product.name, href: `/products/${product.slug}` }
          ]} />
        </Container>
      </div>

      {/* ═════ PRODUCT HERO & GALLERY ═════ */}
      <section className="bg-white py-20 lg:py-28">
        <Container className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          
          <div className="flex flex-col">
             <ProductGallery images={product.gallery} name={product.name} />
          </div>

          <div className="flex flex-col justify-center">
            <div className="mb-4 inline-block">
              <span className="rounded-sm bg-navy px-3 py-1 text-xs font-bold uppercase tracking-widest text-white shadow-sm">
                {product.category}
              </span>
            </div>

            <h1 className="mb-6 font-display text-4xl font-bold text-navy md:text-5xl">
              {product.name}
            </h1>

            <p className="mb-8 text-lg font-medium leading-relaxed text-ink-muted">
              {product.summary}
            </p>

            <div className="bg-surface border border-line rounded-xl p-6 mb-8 text-sm leading-relaxed text-ink">
               <h3 className="font-bold text-navy mb-3 flex items-center gap-2"><Cog size={18} className="text-oxide"/> Engineering Overview</h3>
               {product.overview}
            </div>

            <div className="flex flex-wrap gap-4 pt-4 border-t border-line">
              <Button href={`/request-quote?product=${product.slug}`} size="lg" className="bg-oxide hover:bg-[#E64A19] text-white">
                Request a Quote <ArrowRight size={18} className="ml-2" />
              </Button>
              <Button href="/contact" variant="outline" size="lg" className="border-line text-navy hover:border-oxide bg-white">
                <Mail size={18} className="mr-2" /> Contact Engineering
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* ═════ SPECIFICATIONS & MATERIALS ═════ */}
      <section className="bg-background-light py-20 border-t border-line">
        <Container>
          <div className="max-w-4xl">
            {/* Left Col: Specs & Drawings */}
            <div>
              <p className="mb-4 font-mono text-sm font-semibold uppercase tracking-wider text-oxide">Product Details</p>
              <h2 className="font-display text-3xl font-bold text-navy mb-6">Basic Specifications</h2>
              <p className="text-ink-muted leading-relaxed mb-8">Manufactured to customer drawings and inspected for critical dimensions before dispatch.</p>
              <ProductSpecs product={product} />
            </div>
          </div>
        </Container>
      </section>

      {/* ═════ RELATED PRODUCTS ═════ */}
      <RelatedProductsCarousel currentSlug={product.slug} relatedSlugs={product.relatedProducts} />

      <CTABand 
        title={`Looking to manufacture ${product.name.toLowerCase()}?`}
        description="We offer competitive lead times, complete material traceability, and uncompromised precision for OEMs."
      />
    </>
  );
}
