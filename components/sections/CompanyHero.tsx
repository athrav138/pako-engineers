"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { company } from "@/lib/content/company";

export function CompanyHero() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-navy">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/pako-engineers-inampatta-sangli-2gplhuh9m7-250.avif"
          alt="Pako Engineers manufacturing facility exterior"
          fill
          sizes="100vw"
          priority
          className="object-cover opacity-45"
        />
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
          <span className="text-white">Company</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-6 max-w-4xl font-display text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl"
        >
          Engineering Excellence Since {company.founded}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-10 max-w-2xl text-lg text-white/80"
        >
          Manufacturer and exporter of precision machined components and pump
          assemblies, certified to {company.certification} and serving OEM
          customers across {company.exportCountries.length} export markets.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap gap-4"
        >
          <Button href="/manufacturing" size="lg">
            Explore Manufacturing
            <ArrowRight size={18} className="ml-2" />
          </Button>
          <Button href="/contact" variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 hover:text-white">
            Contact Team
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
