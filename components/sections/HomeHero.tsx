"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { HeroCanvas } from "@/components/ui/HeroCanvas";
import { company } from "@/lib/content/company";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-navy">
      <Image
        src="/images/hero-machining.png"
        alt="Precision machining facility at Pako Engineers"
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-35"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/92 to-navy/55" />

      <Container className="relative grid min-h-[calc(100vh-5rem)] items-center gap-12 py-20 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-sm font-semibold uppercase tracking-wide text-white"
          >
            <ShieldCheck size={16} className="text-oxide" />
            Established {company.founded} | {company.certification} Certified
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="max-w-4xl font-display text-4xl font-bold leading-[1.08] tracking-tight text-white md:text-6xl"
          >
            Precision-engineered shafts and pump components for global OEMs.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-white/78"
          >
            Pako Engineers manufactures and exports shafts, sleeves, couplings,
            lock nuts and pump parts in stainless steel, duplex, super duplex
            and Nitronic 50, with turning capacity up to 1500 mm diameter and
            14 metres length.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Button href="/request-quote" size="lg">
              Request a Quote
              <ArrowRight size={18} />
            </Button>
            <Button
              href="/products"
              variant="ghost"
              size="lg"
              className="border border-white/30 text-white hover:bg-white/10"
            >
              View Products
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="hidden relative lg:block min-h-[600px] w-full"
        >
          <HeroCanvas />
        </motion.div>
      </Container>
    </section>
  );
}
