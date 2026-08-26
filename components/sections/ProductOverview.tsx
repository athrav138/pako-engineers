import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getAllProducts } from "@/lib/content/products";

export function ProductOverview() {
  const products = getAllProducts();

  return (
    <section className="py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="What We Manufacture"
          title="Precision products machined to OEM specification"
          description="A neatly sorted catalogue of shafts, sleeves, couplings, rings, rollers, gears, and pump components manufactured from certified materials."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <Link
              key={product.slug}
              href={`/products/${product.slug}`}
              className="group flex flex-col overflow-hidden rounded-lg border border-line bg-white shadow-card transition-all hover:-translate-y-1 hover:shadow-raised"
            >
              <div className="relative h-48 w-full overflow-hidden bg-white p-4 group-hover:bg-slate-50 transition-colors">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  className="object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col flex-1 p-6">
                <p className="mb-2 font-mono text-[11px] font-semibold uppercase tracking-wider text-oxide">
                  {product.category}
                </p>
                <h3 className="font-display text-lg font-semibold text-navy">
                  {product.name}
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-ink-muted line-clamp-2">
                  {product.summary}
                </p>
                <div className="mt-auto pt-6 flex items-center gap-1 text-[13px] font-bold uppercase tracking-wider text-orange">
                  Price On Request
                  <ArrowUpRight
                    size={16}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
