import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, Share2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { CTABand } from "@/components/sections/CTABand";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { RelatedProductsCarousel } from "@/components/sections/products/RelatedProductsCarousel";
import { getProductBySlug, products } from "@/lib/content/products";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
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

  return (
    <>
      <section className="bg-background-light py-20 lg:py-32">
        <Container className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="relative aspect-square overflow-hidden rounded-2xl border border-line bg-white shadow-sm">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${product.image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/10 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="font-mono text-sm font-semibold uppercase tracking-wider text-oxide">
                {product.category}
              </span>
              <p className="mt-2 font-display text-2xl font-bold text-white">
                Made to drawing and QAP
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div className="mb-4 flex items-center gap-3 text-sm font-semibold uppercase tracking-wider text-oxide">
              <span>{product.category}</span>
              <span className="h-1 w-1 rounded-full bg-line" />
              <span>{product.finish}</span>
            </div>

            <h1 className="mb-6 font-display text-3xl font-bold text-navy md:text-5xl">
              {product.name}
            </h1>

            <p className="mb-8 text-lg leading-relaxed text-ink-muted">
              {product.summary}
            </p>

            <ul className="mb-10 space-y-4">
              {[
                "Manufactured to customer drawing",
                "Material and dimensional inspection support",
                "In-house DPT, hardness and surface checks",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-ink">
                  <CheckCircle2 className="text-success" size={20} />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4">
              <Button href={`/request-quote?product=${encodeURIComponent(product.name)}`} size="lg">
                Request Quote
                <ArrowRight size={18} className="ml-2" />
              </Button>
              <Button
                href="/contact"
                variant="outline"
                size="lg"
                className="border-line text-navy hover:border-oxide"
              >
                Contact Team
              </Button>
              <button
                type="button"
                className="flex h-12 w-12 items-center justify-center rounded-md border border-line bg-white text-navy transition-colors hover:bg-surface"
                aria-label="Share product"
              >
                <Share2 size={18} />
              </button>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 lg:py-32">
        <Container>
          <div className="mb-12">
            <h2 className="font-display text-3xl font-bold text-navy">
              Technical Specifications
            </h2>
          </div>
          <div className="overflow-hidden rounded-xl border border-line">
            <table className="w-full text-left text-sm text-ink">
              <tbody className="divide-y divide-line">
                <tr className="bg-surface/50">
                  <th className="w-1/3 px-6 py-4 font-medium text-navy">
                    Standard Materials
                  </th>
                  <td className="px-6 py-4">{product.materials}</td>
                </tr>
                <tr>
                  <th className="px-6 py-4 font-medium text-navy">
                    Capacity / Size Range
                  </th>
                  <td className="px-6 py-4">{product.sizeRange}</td>
                </tr>
                <tr className="bg-surface/50">
                  <th className="px-6 py-4 font-medium text-navy">Finish</th>
                  <td className="px-6 py-4">{product.finish}</td>
                </tr>
                <tr>
                  <th className="px-6 py-4 font-medium text-navy">
                    Quality Checks
                  </th>
                  <td className="px-6 py-4">
                    Hardness testing, surface check, DPT and dimensional inspection
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      <ProcessTimeline />
      <RelatedProductsCarousel />
      <CTABand />
    </>
  );
}
