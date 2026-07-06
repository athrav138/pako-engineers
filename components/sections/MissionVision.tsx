"use client";

import { motion } from "framer-motion";
import { Eye, Target } from "lucide-react";
import { Container } from "@/components/ui/Container";

export function MissionVision() {
  return (
    <section className="bg-navy py-20 lg:py-32 text-white">
      <Container className="grid gap-10 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-10 backdrop-blur transition-colors hover:bg-white/10"
        >
          <div className="absolute -right-10 -top-10 opacity-10 transition-transform duration-700 group-hover:scale-110">
            <Target size={200} strokeWidth={0.5} />
          </div>
          <Target size={40} className="mb-6 text-oxide" />
          <h2 className="mb-4 font-display text-3xl font-bold tracking-tight">Our Mission</h2>
          <p className="relative z-10 text-lg leading-relaxed text-white/70">
            To provide world-class precision machining solutions that empower global engineering industries. We strive for zero-defect manufacturing, ensuring every component we produce delivers exceptional reliability and performance for our clients.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-10 backdrop-blur transition-colors hover:bg-white/10"
        >
          <div className="absolute -right-10 -top-10 opacity-10 transition-transform duration-700 group-hover:scale-110">
            <Eye size={200} strokeWidth={0.5} />
          </div>
          <Eye size={40} className="mb-6 text-oxide" />
          <h2 className="mb-4 font-display text-3xl font-bold tracking-tight">Our Vision</h2>
          <p className="relative z-10 text-lg leading-relaxed text-white/70">
            To be recognized globally as the most trusted manufacturing partner for precision components. We envision continuous technological advancement, expanding our capabilities to set new benchmarks in engineering excellence and sustainable production.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
