import type { Metadata } from "next";
import Image from "next/image";
import { Calendar } from "lucide-react";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { CTABand } from "@/components/sections/CTABand";
import { newsItems } from "@/lib/content/news";
import { Images } from "@/lib/images";

export const metadata: Metadata = {
  title: "News & Technical Insights | Pako Engineers",
  description:
    "Company updates and technical insights from Pako Engineers covering CNC machining, precision manufacturing and export component capability.",
  alternates: { canonical: "/news" },
};

export default function NewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Latest Updates"
        title="News & Technical Insights"
        description="Company updates, technical notes and manufacturing capability highlights from Pako Engineers."
        backgroundImage={Images.assets.largePumpRotorAssembly.src}
      />
      <Breadcrumb items={[{ label: "News", href: "/news" }]} />

      <section className="bg-white py-16 lg:py-24">
        <Container>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {newsItems.map((item) => (
              <article key={item.id} className="overflow-hidden rounded-xl border border-line bg-white shadow-card">
                <div className="relative h-52 bg-surface">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-oxide px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
                    {item.category}
                  </span>
                </div>
                <div className="p-6">
                  <div className="mb-4 flex items-center gap-2 text-sm text-ink-muted">
                    <Calendar size={15} />
                    {item.date}
                  </div>
                  <h2 className="font-display text-xl font-bold leading-snug text-navy">{item.title}</h2>
                  <p className="mt-4 text-sm leading-relaxed text-ink-muted">{item.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <CTABand />
    </>
  );
}
