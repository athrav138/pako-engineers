"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function ProductHero() {
  return (
    <section className="relative flex min-h-[60vh] items-center overflow-hidden bg-navy">
      <div className="absolute inset-0 z-0">
        <div className="h-full w-full bg-[url('/images/hero-machining.png')] bg-cover bg-center opacity-45" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-transparent" />
      </div>

      <Container className="relative z-10 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 text-sm font-medium text-oxide mb-6"
        >
          <span>Home</span>
          <span>&rarr;</span>
          <span className="text-white">Products</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-6 max-w-4xl font-display text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl"
        >
          Precision Engineered Products
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-10 max-w-2xl text-lg text-white/80"
        >
          Shafts, sleeves, couplings, pump parts, impellers, rings, lock nuts,
          retainer rings, Thordon bearings and gears manufactured to drawings,
          QAP and customer quality requirements.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap gap-4"
        >
          <Button href="#categories" size="lg">
            Explore Products
            <ArrowRight size={18} className="ml-2" />
          </Button>
          <Button href="/request-quote" variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 hover:text-white">
            Request Quote
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
