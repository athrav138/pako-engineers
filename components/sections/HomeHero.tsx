"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Award, Globe, Users } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

const EASE = [0.16, 1, 0.3, 1] as const;

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: EASE, delay },
  },
});

const STATS = [
  { icon: ShieldCheck, title: "ISO 9001:2015", desc: "Certified Company" },
  { icon: Award, title: "30+ Years", desc: "Experience" },
  { icon: Globe, title: "12+ Countries", desc: "Global Exports" },
  { icon: Users, title: "500+", desc: "Happy Clients" },
];

export function HomeHero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section
      className="relative flex min-h-[100vh] flex-col overflow-hidden bg-[#0A1B2E]"
      aria-label="Hero - Pako Engineers"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-machining.png"
          alt="CNC precision machining at Pako Engineers factory"
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, #0A1B2E 0%, #0A1B2E 35%, rgba(10,27,46,0.85) 50%, rgba(10,27,46,0.4) 70%, rgba(10,27,46,0.25) 100%)",
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#0A1B2E] via-[#0A1B2E]/80 to-transparent" />
      </div>

      <Container className="relative z-10 flex flex-1 items-center pb-0 pt-[160px] lg:pt-[180px]">
        <div className="w-full max-w-[680px] lg:w-[55%]">
          <motion.div
            variants={fadeUp(0.1)}
            initial="hidden"
            animate={mounted ? "visible" : "hidden"}
            className="mb-5"
          >
            <p className="text-[16px] font-normal italic tracking-wide text-white/90 md:text-[18px]">
              Pako Engineers
            </p>
            <div className="mt-2 h-[3px] w-[50px] rounded-full bg-[#1E5FAA]" />
          </motion.div>

          <motion.h1
            variants={fadeUp(0.2)}
            initial="hidden"
            animate={mounted ? "visible" : "hidden"}
            className="mb-6 font-display leading-[0.95] tracking-tight"
            style={{ fontSize: "clamp(3.5rem, 7vw + 0.5rem, 7rem)" }}
          >
            <span className="block font-extrabold text-white">PAKO</span>
            <span className="block font-extrabold text-[#3B82F6]">ENGINEERS</span>
          </motion.h1>

          <motion.p
            variants={fadeUp(0.35)}
            initial="hidden"
            animate={mounted ? "visible" : "hidden"}
            className="mb-10 text-[15px] font-bold uppercase leading-[1.5] tracking-[0.08em] text-white md:text-[18px] lg:text-[20px]"
          >
            Manufacture &amp; Exporter of
            <br />
            Precision Machined Components &amp;
            <br />
            Pump Assemblies
          </motion.p>

          <motion.div
            variants={fadeUp(0.5)}
            initial="hidden"
            animate={mounted ? "visible" : "hidden"}
            className="flex flex-col gap-4 sm:flex-row sm:gap-5"
          >
            <Button
              href="/products"
              size="lg"
              className="h-auto rounded-full bg-[#1565C0] px-8 py-4 text-[13px] font-bold uppercase tracking-[0.1em] text-white shadow-lg transition-all hover:bg-[#1256A8]"
            >
              Explore Products
              <ArrowRight size={16} className="ml-2" />
            </Button>
            <Button
              href="/request-quote"
              size="lg"
              variant="outline"
              className="h-auto rounded-full border-2 border-white/40 px-8 py-4 text-[13px] font-bold uppercase tracking-[0.1em] text-white transition-all hover:bg-white/10"
            >
              Request Quote
              <ArrowRight size={16} className="ml-2" />
            </Button>
          </motion.div>
        </div>
      </Container>

      <div className="relative z-10 mt-auto w-full">
        <Container>
          <motion.div
            variants={fadeUp(0.7)}
            initial="hidden"
            animate={mounted ? "visible" : "hidden"}
            className="flex flex-col items-center justify-between gap-6 border-t border-white/15 py-8 md:flex-row md:gap-0 lg:py-10"
          >
            {STATS.map((stat, i) => (
              <div key={stat.title} className="flex items-center gap-0 md:flex-1">
                {i > 0 && (
                  <div className="mr-6 hidden h-12 w-px shrink-0 bg-white/20 md:block" />
                )}
                <div className="flex items-center gap-4">
                  <stat.icon
                    size={36}
                    strokeWidth={1.2}
                    className="shrink-0 text-white/80"
                  />
                  <div>
                    <p className="text-[15px] font-bold leading-tight text-white lg:text-[16px]">
                      {stat.title}
                    </p>
                    <p className="mt-0.5 text-[12px] text-white/60 lg:text-[13px]">
                      {stat.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </Container>
      </div>
    </section>
  );
}
