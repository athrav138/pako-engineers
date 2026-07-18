import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight, FileDown, Cog, Mail, FileText } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { CTABand } from "@/components/sections/CTABand";
import { RelatedProductsCarousel } from "@/components/sections/products/RelatedProductsCarousel";
import { 
  ProductGallery, 
  ProductDrawing,
  ProductSpecs, 
  ProductFeatures, 
  ProductMaterials,
  ProductWorkflow,
  ProductQuality,
  ProductApplications, 
  ProductFaq 
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
  const primaryDownload = product.downloads[0];

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
    "additionalProperty": product.specifications.map((spec) => ({
      "@type": "PropertyValue",
      "name": spec.label,
      "value": spec.value
    }))
  };

  const faqSchema = product.faqs && product.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": product.faqs.map(faq => ({
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
              {primaryDownload && (
                <Button href={primaryDownload.url} variant="outline" size="lg" className="border-line text-navy hover:border-oxide bg-white">
                  <FileText size={18} className="mr-2" /> Download Catalogue
                </Button>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* ═════ SPECIFICATIONS & MATERIALS ═════ */}
      <section className="bg-background-light py-20 border-t border-line">
        <Container>
          <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr]">
            {/* Left Col: Specs & Drawings */}
            <div>
              <p className="mb-4 font-mono text-sm font-semibold uppercase tracking-wider text-oxide">Engineering Details</p>
              <h2 className="font-display text-3xl font-bold text-navy mb-6">Technical Specifications</h2>
              <p className="text-ink-muted leading-relaxed mb-8">Manufactured strictly to OEM drawings, QAP (Quality Assurance Plan), and international material standards.</p>
              
              <ProductSpecs product={product} />

              <div className="mt-12">
                 <ProductDrawing product={product} />
              </div>
            </div>

            {/* Right Col: Materials */}
            <div>
              <p className="mb-4 font-mono text-sm font-semibold uppercase tracking-wider text-oxide">Metallurgy</p>
              <h2 className="font-display text-3xl font-bold text-navy mb-6">Available Materials</h2>
              <p className="text-ink-muted leading-relaxed">We source certified raw materials with complete 3.1 traceability to ensure component integrity in extreme environments.</p>
              <ProductMaterials materials={product.detailedMaterials} />
            </div>
          </div>
        </Container>
      </section>

      {/* ═════ MANUFACTURING WORKFLOW & FEATURES ═════ */}
      <section className="bg-white py-20 lg:py-28 border-t border-line">
        <Container>
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <p className="mb-4 font-mono text-sm font-semibold uppercase tracking-wider text-oxide">Production</p>
              <h2 className="font-display text-3xl font-bold text-navy mb-6">Manufacturing Process</h2>
              <p className="text-ink-muted leading-relaxed mb-8">Every {product.name.toLowerCase()} follows a strict, documented routing plan from raw material to dispatch.</p>
              <ProductWorkflow workflow={product.manufacturingWorkflow} />
            </div>

            <div>
               <p className="mb-4 font-mono text-sm font-semibold uppercase tracking-wider text-oxide">Key Advantages</p>
               <h2 className="font-display text-3xl font-bold text-navy mb-6">Features & Benefits</h2>
               <ProductFeatures features={product.features} />

               <div className="mt-16">
                  <h3 className="font-display text-2xl font-bold text-navy mb-6">Quality Assurance Plan</h3>
                  <p className="text-ink-muted leading-relaxed mb-8">100% inspection is performed at critical checkpoints. Components are delivered with full documentation.</p>
                  <ProductQuality qa={product.qualityAssurance} />
               </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ═════ APPLICATIONS ═════ */}
      <section className="bg-navy py-20 lg:py-28 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-white/5" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px', opacity: 0.05 }} />
        <Container className="relative z-10">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="font-display text-3xl font-bold mb-4">Industries & Applications</h2>
            <p className="text-white/70">Our {product.name.toLowerCase()} are trusted by leading equipment manufacturers across heavy industries globally.</p>
          </div>
          <ProductApplications apps={product.industries} />
        </Container>
      </section>

      {/* ═════ DOWNLOADS & FAQ ═════ */}
      {(product.downloads.length > 0 || product.faqs.length > 0) && (
        <section className="bg-white py-20 lg:py-28">
          <Container>
            <div className="grid gap-16 lg:grid-cols-2">
              {/* FAQ */}
              {product.faqs.length > 0 && (
                <div>
                  <p className="mb-4 font-mono text-sm font-semibold uppercase tracking-wider text-oxide">Support</p>
                  <h2 className="font-display text-3xl font-bold text-navy mb-6">Frequently Asked Questions</h2>
                  <ProductFaq faqs={product.faqs} />
                </div>
              )}
              
              {/* DOWNLOADS */}
              {product.downloads.length > 0 && (
                <div>
                  <p className="mb-4 font-mono text-sm font-semibold uppercase tracking-wider text-oxide">Resources</p>
                  <h2 className="font-display text-3xl font-bold text-navy mb-6">Technical Downloads</h2>
                  <div className="space-y-4 mt-8">
                    {product.downloads.map((dl, i) => (
                      <a key={i} href={dl.url} className="group flex items-center justify-between p-6 border border-line rounded-xl bg-surface hover:border-oxide/50 hover:bg-white shadow-sm transition-all">
                        <div className="flex items-center gap-4">
                          <div className="bg-white border border-line p-3 rounded shadow-sm group-hover:border-oxide/30 transition-colors">
                            <FileDown size={24} className="text-oxide" />
                          </div>
                          <div>
                            <h4 className="font-bold text-navy group-hover:text-oxide transition-colors">{dl.title}</h4>
                            <p className="text-xs text-ink-muted uppercase tracking-wider font-semibold mt-1">{dl.type} • {dl.size}</p>
                          </div>
                        </div>
                        <ArrowRight size={20} className="text-slate-300 group-hover:text-oxide group-hover:-translate-x-1 transition-all" />
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </Container>
        </section>
      )}

      {/* ═════ RELATED PRODUCTS ═════ */}
      <RelatedProductsCarousel currentSlug={product.slug} relatedSlugs={product.relatedProducts} />

      <CTABand 
        title={`Looking to manufacture ${product.name.toLowerCase()}?`}
        description="We offer competitive lead times, complete material traceability, and uncompromised precision for OEMs."
      />
    </>
  );
}
