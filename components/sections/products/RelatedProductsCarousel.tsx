"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight, Eye } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { products } from "@/lib/content/products";

export function RelatedProductsCarousel({ currentSlug, relatedSlugs }: { currentSlug?: string; relatedSlugs?: string[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const inViewRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(inViewRef, { once: true, margin: "-50px" });

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -350 : 350;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-background-light py-20 lg:py-32" ref={inViewRef}>
      <Container>
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="font-display text-3xl font-bold text-navy md:text-4xl">
              Related Products
            </h2>
            <p className="mt-4 text-ink-muted">Customers who viewed this also explored these components.</p>
          </div>
          <div className="hidden gap-2 md:flex">
            <button 
              onClick={() => scroll('left')}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-line bg-white text-navy transition-colors hover:bg-surface hover:text-oxide"
              aria-label="Scroll Left"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-line bg-white text-navy transition-colors hover:bg-surface hover:text-oxide"
              aria-label="Scroll Right"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide md:gap-8"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {(relatedSlugs?.length
            ? relatedSlugs
                .map((slug) => products.find((product) => product.slug === slug))
                .filter((product): product is (typeof products)[number] => Boolean(product))
            : products.filter((product) => product.slug !== currentSlug).slice(0, 6)
          ).map((product, i) => (
            <motion.div
              key={product.slug}
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group min-w-[280px] max-w-[320px] flex-1 shrink-0 snap-start flex-col overflow-hidden rounded-xl border border-line bg-white shadow-sm transition-all hover:shadow-raised md:min-w-[320px]"
            >
              <div className="relative aspect-square overflow-hidden bg-surface">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(min-width: 768px) 320px, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-navy/60 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                  <Button href={`/products/${product.slug}`} variant="outline" className="border-white text-white hover:bg-white hover:text-navy">
                    <Eye size={18} className="mr-2" />
                    View Product
                  </Button>
                </div>
              </div>
              <div className="flex flex-col p-6">
                <span className="mb-2 text-xs font-semibold uppercase tracking-wider text-oxide">{product.category}</span>
                <Link href={`/products/${product.slug}`}>
                  <h3 className="mb-2 font-display text-lg font-bold text-navy hover:text-oxide transition-colors">{product.name}</h3>
                </Link>
                <p className="text-sm text-ink-muted line-clamp-2">{product.summary}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
