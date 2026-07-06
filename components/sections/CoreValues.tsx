"use client";

import { motion } from "framer-motion";
import { Shield, Target, Lightbulb, Users, HeartHandshake, Zap, Leaf } from "lucide-react";
import { Container } from "@/components/ui/Container";

const CORE_VALUES = [
  { icon: Shield, title: "Integrity", desc: "Honesty and transparency in every transaction." },
  { icon: Target, title: "Quality", desc: "Zero-defect manufacturing philosophy." },
  { icon: Lightbulb, title: "Innovation", desc: "Continuous improvement in machining technology." },
  { icon: HeartHandshake, title: "Commitment", desc: "Delivering on our promises, every single time." },
  { icon: Users, title: "Customer Focus", desc: "Tailored solutions for specific OEM requirements." },
  { icon: Zap, title: "Engineering Excellence", desc: "Pushing the boundaries of precision." },
  { icon: Leaf, title: "Sustainability", desc: "Responsible production and resource management." }
];

export function CoreValues() {
  return (
    <section className="bg-background-light py-20 lg:py-32">
      <Container>
        <div className="mb-16 text-center">
          <p className="mb-4 font-mono text-sm font-semibold uppercase tracking-wider text-oxide">
            Guiding Principles
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-navy md:text-4xl">
            Our Core Values
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {CORE_VALUES.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`group flex flex-col items-center text-center rounded-xl border border-line bg-white p-8 transition-all hover:-translate-y-1 hover:shadow-raised ${i === 6 ? "lg:col-start-2 lg:col-span-2" : ""}`}
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-navy/5 text-navy transition-colors group-hover:bg-navy group-hover:text-white">
                <value.icon size={28} strokeWidth={1.5} />
              </div>
              <h3 className="mb-3 font-display text-lg font-bold text-navy">{value.title}</h3>
              <p className="text-sm leading-relaxed text-ink-muted">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
