"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import {
  ShieldCheck,
  Layers,
  Gem,
  ThermometerSnowflake,
  Droplets,
  Cog,
} from "lucide-react";

const MATERIALS = [
  {
    name: "Stainless Steel",
    grades: "SS 304, 316, 316L, 410, 420",
    desc: "Excellent corrosion resistance and durability for general industrial and fluid applications.",
    icon: ShieldCheck,
    color: "bg-sky-50 text-sky-700 border-sky-100",
    dot: "bg-sky-500",
  },
  {
    name: "Duplex Steel",
    grades: "UNS S31803 / S32205",
    desc: "High yield strength and stress corrosion cracking resistance for harsh environments.",
    icon: Layers,
    color: "bg-indigo-50 text-indigo-700 border-indigo-100",
    dot: "bg-indigo-500",
  },
  {
    name: "Super Duplex",
    grades: "UNS S32750 / S32760",
    desc: "Superior pitting and crevice corrosion resistance for offshore and marine applications.",
    icon: Gem,
    color: "bg-violet-50 text-violet-700 border-violet-100",
    dot: "bg-violet-500",
  },
  {
    name: "Nitronic",
    grades: "Nitronic 50 / 60",
    desc: "Exceptional galling resistance and strength at extreme high and cryogenic temperatures.",
    icon: ThermometerSnowflake,
    color: "bg-amber-50 text-amber-700 border-amber-100",
    dot: "bg-amber-500",
  },
  {
    name: "Monel",
    grades: "Monel 400, K500",
    desc: "Nickel-copper alloy highly resistant to sea water and chemical processing.",
    icon: Droplets,
    color: "bg-emerald-50 text-emerald-700 border-emerald-100",
    dot: "bg-emerald-500",
  },
  {
    name: "Alloy Steel",
    grades: "EN Series, 4140, 4340",
    desc: "High toughness and wear resistance for heavy machinery and structural shafts.",
    icon: Cog,
    color: "bg-rose-50 text-rose-700 border-rose-100",
    dot: "bg-rose-500",
  },
];

export function MaterialsSection() {
  return (
    <section className="bg-slate-50 py-20 lg:py-32">
      <Container>
        {/* Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-oxide">
            Metallurgical Expertise
          </p>
          <h2 className="mb-5 font-display text-3xl font-bold tracking-tight text-navy md:text-4xl lg:text-[2.6rem]">
            Precision Machined in Premium Alloys
          </h2>
          <p className="text-base leading-relaxed text-slate-500 md:text-lg">
            We specialize in machining complex exotic materials, ensuring optimal
            tool life and surface finish without compromising metallurgical
            integrity.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {MATERIALS.map((mat, i) => {
            const Icon = mat.icon;
            return (
              <motion.div
                key={mat.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg"
              >
                {/* Top accent bar */}
                <div className={`absolute left-0 top-0 h-1 w-full ${mat.dot}`} />

                {/* Icon */}
                <div
                  className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl border ${mat.color} transition-transform duration-300 group-hover:scale-110`}
                >
                  <Icon size={22} strokeWidth={1.8} />
                </div>

                {/* Content */}
                <h3 className="mb-1.5 font-display text-lg font-bold text-navy">
                  {mat.name}
                </h3>
                <p className="mb-3 font-mono text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                  {mat.grades}
                </p>
                <p className="text-sm leading-relaxed text-slate-500">
                  {mat.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
