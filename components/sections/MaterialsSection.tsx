"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";

const MATERIALS = [
  {
    name: "Stainless Steel",
    grades: "SS 304, 316, 316L, 410, 420",
    desc: "Excellent corrosion resistance and durability for general industrial and fluid applications.",
  },
  {
    name: "Duplex Steel",
    grades: "UNS S31803 / S32205",
    desc: "High yield strength and stress corrosion cracking resistance for harsh environments.",
  },
  {
    name: "Super Duplex",
    grades: "UNS S32750 / S32760",
    desc: "Superior pitting and crevice corrosion resistance for offshore and marine applications.",
  },
  {
    name: "Nitronic",
    grades: "Nitronic 50 / 60",
    desc: "Exceptional galling resistance and strength at extreme high and cryogenic temperatures.",
  },
  {
    name: "Monel",
    grades: "Monel 400, K500",
    desc: "Nickel-copper alloy highly resistant to sea water and chemical processing.",
  },
  {
    name: "Alloy Steel",
    grades: "EN Series, 4140, 4340",
    desc: "High toughness and wear resistance for heavy machinery and structural shafts.",
  },
];

export function MaterialsSection() {
  return (
    <section className="bg-navy py-20 text-white lg:py-32">
      <Container>
        <div className="mb-16 md:w-2/3 lg:w-1/2">
          <p className="mb-4 font-mono text-sm font-semibold uppercase tracking-wider text-oxide">
            Metallurgical Expertise
          </p>
          <h2 className="mb-6 font-display text-3xl font-bold tracking-tight md:text-4xl">
            Precision Machined in Premium Alloys
          </h2>
          <p className="text-lg leading-relaxed text-white/70">
            We specialize in machining complex exotic materials, ensuring optimal tool life and surface finish without compromising metallurgical integrity.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {MATERIALS.map((mat, i) => (
            <motion.div
              key={mat.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group overflow-hidden rounded-xl border border-white/10 bg-white/5 p-8 backdrop-blur transition-colors hover:bg-white/10"
            >
              <h3 className="mb-1 font-display text-xl font-bold">{mat.name}</h3>
              <p className="mb-4 font-mono text-xs font-semibold text-oxide">{mat.grades}</p>
              <p className="text-sm leading-relaxed text-white/60">{mat.desc}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
