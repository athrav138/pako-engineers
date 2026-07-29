"use client";

import { motion } from "framer-motion";
import { Drill, Layers, Circle, Cog, Wrench } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { products } from "@/lib/content/products";

const CATEGORIES = [
  { name: "Precision Shafts", icon: Drill, desc: "Pump shafts from 50 mm to 1500 mm diameter and up to 8 mtr (8000 mm) length." },
  { name: "Sleeves & Bushes", icon: Circle, desc: "Sleeves from 50 mm to 400 mm diameter and 0.1 mtr to 1 mtr length." },
  { name: "Pump Components", icon: Cog, desc: "Pump parts and accessories customized to customer requirements." },
  { name: "Couplings", icon: Layers, desc: "Couplings from 50 mm to 400 mm diameter and 0.1 mtr to 1 mtr length." },
  { name: "Lock Nuts", icon: Wrench, desc: "Metric threaded lock nuts from 30 mm to 750 mm diameter." },
  { name: "Bearings & Rings", icon: Circle, desc: "Retainer rings and Thordon bearing components." },
];

export function CategoryGrid() {
  return (
    <section id="categories" className="bg-background-light py-20 lg:py-32">
      <Container>
        <div className="mb-12">
          <h2 className="font-display text-3xl font-bold tracking-tight text-navy md:text-4xl">
            Product Categories
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative cursor-pointer overflow-hidden rounded-xl border border-line bg-white p-8 transition-all hover:-translate-y-1 hover:border-oxide hover:shadow-raised"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-navy/5 text-navy transition-colors group-hover:bg-navy group-hover:text-white">
                <cat.icon size={28} strokeWidth={1.5} />
              </div>
              <h3 className="mb-2 font-display text-xl font-bold text-navy transition-colors group-hover:text-oxide">{cat.name}</h3>
              <p className="mb-4 text-sm leading-relaxed text-ink-muted">{cat.desc}</p>
              <p className="text-xs font-semibold uppercase tracking-wider text-oxide">
                {products.filter((product) => product.category === cat.name).length || 1} Product Lines
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
