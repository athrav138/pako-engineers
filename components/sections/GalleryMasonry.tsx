"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Maximize2 } from "lucide-react";

// Placeholder sizes for masonry effect
const GALLERY_ITEMS = [
  { id: 1, span: "col-span-1 row-span-1", category: "Factory" },
  { id: 2, span: "col-span-1 row-span-2 md:col-span-2", category: "Machinery" },
  { id: 3, span: "col-span-1 row-span-1", category: "Inspection" },
  { id: 4, span: "col-span-1 row-span-2 md:col-span-2", category: "Products" },
  { id: 5, span: "col-span-1 row-span-1", category: "Assembly" },
  { id: 6, span: "col-span-1 row-span-1 md:col-span-2", category: "Team" },
];

export function GalleryMasonry() {
  return (
    <section className="bg-background-light py-20 lg:py-32">
      <Container>
        <div className="mb-12 text-center">
          <p className="mb-4 font-mono text-sm font-semibold uppercase tracking-wider text-oxide">
            Inside Pako
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-navy md:text-4xl">
            Our Manufacturing Facility
          </h2>
        </div>

        <div className="grid auto-rows-[240px] grid-cols-2 gap-4 md:grid-cols-4 lg:gap-6">
          {GALLERY_ITEMS.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group relative overflow-hidden rounded-xl bg-navy ${item.span}`}
            >
              {/* Fallback abstract representation for gallery */}
              <div className="absolute inset-0 bg-gradient-to-br from-navy to-steel opacity-80" />
              <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-20 mix-blend-overlay" />
              
              <div className="absolute inset-0 flex items-center justify-center text-white/20 transition-transform duration-700 group-hover:scale-110">
                <span className="font-display text-2xl font-bold tracking-widest">{item.category}</span>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-navy/60 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                <button className="flex h-12 w-12 items-center justify-center rounded-full bg-oxide text-white shadow-raised transition-transform hover:scale-110">
                  <Maximize2 size={20} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
