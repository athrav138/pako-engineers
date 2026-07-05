import Image from "next/image";
import { Button } from "@/components/ui/Button";
import type { ProductSpec } from "@/lib/content/products";

export function ProductSpecCard({ product }: { product: ProductSpec }) {
  return (
    <article
      id={product.slug}
      className="scroll-mt-24 overflow-hidden rounded-lg border border-line bg-white shadow-card"
    >
      <div className="grid md:grid-cols-[0.85fr_1.15fr]">
        <div className="relative min-h-64 bg-navy">
          <Image
            src={product.image}
            alt={`${product.name} manufactured by Pako Engineers`}
            fill
            sizes="(min-width: 768px) 38vw, 100vw"
            className="object-cover"
          />
        </div>

        <div className="grid gap-8 p-8 md:grid-cols-[1.1fr_0.9fr] md:p-10">
          <div>
            <h3 className="font-display text-2xl font-bold text-navy">{product.name}</h3>
            <p className="mt-3 text-base leading-relaxed text-muted">{product.summary}</p>
            <Button
              href={`/request-quote?product=${encodeURIComponent(product.name)}`}
              size="sm"
              className="mt-6"
            >
              Request Quote
            </Button>
          </div>

          <dl className="grid grid-cols-1 gap-4 border-t border-line pt-6 md:border-l md:border-t-0 md:pl-8 md:pt-0">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-muted">
                Material
              </dt>
              <dd className="mt-1 text-sm text-ink">{product.materials}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-muted">
                Size Range
              </dt>
              <dd className="mt-1 text-sm text-ink">{product.sizeRange}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-muted">
                Surface Finish
              </dt>
              <dd className="mt-1 text-sm text-ink">{product.finish}</dd>
            </div>
          </dl>
        </div>
      </div>
    </article>
  );
}
