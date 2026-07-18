import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { products } from "@/lib/content/products";

export function ProductOverview() {
  const featured = products.slice(0, 4);

  return (
    <section className="py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="What We Manufacture"
          title="Component families machined to OEM specification"
          description="Every part is machined and finished in-house, in corrosion-resistant alloys selected for rotating equipment and pump applications."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.slice(0, 4).map((product) => (
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
                  className="object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col flex-1 p-6">
                <h3 className="font-display text-lg font-semibold text-navy">
                  {product.name}
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-ink-muted line-clamp-3">
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
