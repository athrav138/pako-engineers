"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import {
  Droplet, Factory, Flame, Anchor, Truck, Zap, Cog, HardHat,
} from "lucide-react";

const INDUSTRIES = [
  { name: "Oil & Gas", icon: Flame, desc: "Corrosion-resistant components for refineries and offshore platforms." },
  { name: "Marine", icon: Anchor, desc: "Duplex steel propeller shafts and maritime engine components." },
  { name: "Power Generation", icon: Zap, desc: "Turbine components and cooling system parts for thermal plants." },
  { name: "Agriculture", icon: Truck, desc: "Heavy-duty shafts for agricultural machinery and irrigation pumps." },
  { name: "Chemical Processing", icon: Factory, desc: "Acid-resistant pump components in super duplex and Monel alloys." },
  { name: "Mining", icon: HardHat, desc: "Wear-resistant parts for extreme extraction environments." },
  { name: "Water & Wastewater", icon: Droplet, desc: "Impellers, shafts, and wear rings for high-pressure fluid handling." },
  { name: "Heavy Engineering", icon: Cog, desc: "Custom industrial gearboxes and hydraulic cylinders." },
];

export function IndustriesServed() {
  return (
    <section className="bg-background-light py-20 lg:py-32">
      <Container>
        <div className="mb-16 text-center">
          <p className="mb-4 font-mono text-sm font-semibold uppercase tracking-wider text-oxide">
            Global Applications
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-navy md:text-4xl">
            Industries We Serve
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {INDUSTRIES.map((industry, i) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-xl border border-line bg-white p-8 transition-all hover:-translate-y-1 hover:border-oxide/30 hover:shadow-raised"
            >
              <industry.icon size={40} strokeWidth={1.2} className="mb-6 text-navy transition-colors group-hover:text-oxide" />
              <h3 className="mb-3 font-display text-xl font-bold text-navy">{industry.name}</h3>
              <p className="text-sm leading-relaxed text-ink-muted">{industry.desc}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
