"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

const NEWS_ITEMS = [
  {
    id: 1,
    title: "Pako Engineers expands CNC turning capacity with new 14m lathe.",
    category: "Company Update",
    date: "Aug 15, 2026",
    excerpt: "To meet the growing demand from global pump manufacturers, we have successfully installed a new 14-meter CNC lathe capable of turning shafts up to 1500mm in diameter.",
    image: "/images/pako-engineers-inampatta-sangli-2gplhuh9m7-250.avif",
  },
  {
    id: 2,
    title: "Achieving Zero-Defect Manufacturing in Super Duplex Machining",
    category: "Technical Article",
    date: "Jul 22, 2026",
    excerpt: "Machining super duplex stainless steel presents unique challenges. Learn how our engineering team optimizes tooling and feeds to maintain tight tolerances.",
    image: "/images/pako-engineers-inampatta-sangli-b3nj3sm4d3-250.avif",
  },
  {
    id: 3,
    title: "Pako Engineers awarded 'Best Exporter 2026' by Engineering Council",
    category: "Awards",
    date: "Jun 10, 2026",
    excerpt: "We are proud to announce that Pako Engineers has been recognized for its outstanding contribution to India's engineering export growth.",
    image: "/images/pako-engineers-inampatta-sangli-6aohn6oy1s-250.avif",
  },
];

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
              News & Technical Insights
            </h2>
          </div>
          <Button href="/news" variant="outline" className="w-fit">
            View All News
          </Button>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {NEWS_ITEMS.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group flex flex-col overflow-hidden rounded-xl border border-line bg-white transition-all hover:border-navy/20 hover:shadow-raised"
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
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
