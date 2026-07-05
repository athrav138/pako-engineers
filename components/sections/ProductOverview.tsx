import Link from "next/link";
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

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((product) => (
            <Link
              key={product.slug}
              href={`/products#${product.slug}`}
              className="group flex flex-col justify-between rounded-lg border border-line bg-white p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-raised"
            >
              <div>
                <h3 className="font-display text-lg font-semibold text-navy">
                  {product.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {product.summary}
                </p>
              </div>
              <div className="mt-6 flex items-center gap-1 text-sm font-medium text-oxide">
                View specifications
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
