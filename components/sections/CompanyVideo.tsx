"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { Container } from "@/components/ui/Container";

export function CompanyVideo() {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-navy py-20 lg:py-32">
      <div className="absolute inset-0 z-0">
        <div className="h-full w-full bg-[url('/images/factory-floor.png')] bg-cover bg-center opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-navy/30" />
      </div>

      <Container className="relative z-10 flex flex-col items-center text-center text-white">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <button className="group mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-oxide text-white shadow-raised transition-transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-oxide/50">
            <Play size={36} className="ml-2 fill-current transition-transform group-hover:scale-110" />
          </button>
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6 max-w-3xl font-display text-4xl font-bold tracking-tight md:text-5xl"
        >
          See Our Manufacturing Excellence in Action
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-2xl text-lg text-white/80"
        >
          See the capability areas highlighted in the February 2026 company
          profile: machining, grinding, CNC lathe, wire-cut, in-house assembly
          and inspection support for export components.
        </motion.p>
      </Container>
    </section>
  );
}
