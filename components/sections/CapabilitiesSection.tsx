"use client";

import { motion } from "framer-motion";
import { ArrowRight, Drill, Settings, Wrench } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

const CAPABILITIES = [
  {
    id: "turning",
    title: "CNC Turning & Machining",
    description: "Shaft, flange and concrete shaft machining supported by massive CNC lathe capacity for long precision components. Tolerances down to 5 microns.",
    capacity: "50 mm - 1500 mm dia., up to 14,000 mm length",
    image: "/images/real/pako-engineers-inampatta-sangli-x12lilcicd.avif",
  },
  {
    id: "grinding",
    title: "Cylindrical Grinding",
    description: "High-precision grinding capability for shafts, sleeves, couplings and bushes with extensive internal and outer diameter support.",
    capacity: "50 mm - 800 mm dia., up to 6,500 mm length",
    image: "/images/real/pako-engineers-inampatta-sangli-ysalyd9hy4.avif",
  },
  {
    id: "assembly",
    title: "Assembly & Inspection",
    description: "In-house assembly plus internal key-way, VMC key-way and wire-cut support for pump assemblies, followed by rigorous quality inspection.",
    capacity: "Internal key-way up to 1,200 mm",
    image: "/images/real/pako-engineers-inampatta-sangli-vrr3lt0pff.avif",
  },
];

export function CapabilitiesSection() {
  return (
    <section className="bg-white py-20 lg:py-32">
      <Container>
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="mb-4 font-mono text-sm font-semibold uppercase tracking-wider text-oxide">
              Manufacturing Capabilities
            </p>
            <h2 className="font-display text-3xl font-bold tracking-tight text-navy md:text-4xl lg:text-5xl">
              Profile-verified capacity for precision pump components.
            </h2>
          </div>
          <Button href="/capabilities" variant="outline" className="w-fit">
            View All Capabilities
          </Button>
        </div>

        <div className="flex flex-col gap-8">
          {CAPABILITIES.map((cap, i) => (
            <motion.div
              key={cap.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-sm transition-all hover:shadow-raised md:flex-row"
            >
              <div className="relative w-full md:w-2/5 aspect-video md:aspect-auto overflow-hidden bg-surface">
                <img 
                  src={cap.image} 
                  alt={cap.title} 
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-1 flex-col p-8 md:p-10 justify-center">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-navy/5 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-navy w-fit">
                  {cap.capacity}
                </div>
                <h3 className="mb-4 font-display text-2xl font-bold text-navy lg:text-3xl">
                  {cap.title}
                </h3>
                <p className="mb-8 leading-relaxed text-ink-muted text-lg">
                  {cap.description}
                </p>
                <div className="mt-auto flex items-center font-medium text-oxide transition-colors group-hover:text-oxide-dark">
                  View Specifications
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
