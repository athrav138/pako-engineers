import Image from "next/image";
import { ArrowRight, Calendar } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { newsItems } from "@/lib/content/news";

export function NewsSection() {
  return (
    <section className="bg-white py-20 lg:py-32">
      <Container>
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="mb-4 font-mono text-sm font-semibold uppercase tracking-wider text-oxide">
              Latest Updates
            </p>
            <h2 className="font-display text-3xl font-bold tracking-tight text-navy md:text-4xl">
              News &amp; Technical Insights
            </h2>
          </div>
          <Button href="/news" variant="outline" className="w-fit">
            View All News
          </Button>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {newsItems.map((item, i) => (
            <div
              key={item.id}
              className="group flex flex-col overflow-hidden rounded-xl border border-line bg-white transition-all motion-safe:opacity-0 motion-safe:animate-fade-up hover:border-navy/20 hover:shadow-raised"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {/* News thumbnail image */}
              <div className="relative h-48 w-full overflow-hidden bg-surface">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <span className="absolute top-4 left-4 rounded-full bg-oxide px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow-sm">
                  {item.category}
                </span>
              </div>

              <div className="flex flex-col flex-1 p-8">
                <div className="mb-4 flex items-center gap-1.5 text-sm text-ink-muted">
                  <Calendar size={14} />
                  {item.date}
                </div>
                <h3 className="mb-4 font-display text-xl font-bold leading-snug text-navy transition-colors group-hover:text-oxide">
                  {item.title}
                </h3>
                <p className="mb-8 text-ink-muted leading-relaxed line-clamp-3">
                  {item.excerpt}
                </p>
                <div className="mt-auto flex items-center font-medium text-navy transition-colors group-hover:text-oxide">
                  Read Article
                  <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
