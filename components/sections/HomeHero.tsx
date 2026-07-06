"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Award, Globe, Users } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

/* ─── Motion ────────────────────────────────────────────── */
const EASE = [0.16, 1, 0.3, 1] as const;

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: EASE, delay },
  },
});

/* ─── Stats Data ────────────────────────────────────────── */
const STATS = [
  { icon: ShieldCheck, title: "ISO 9001:2015", desc: "Certified Company" },
  { icon: Award, title: "30+ Years", desc: "Experience" },
  { icon: Globe, title: "30+ Countries", desc: "Global Exports" },
  { icon: Users, title: "500+", desc: "Happy Clients" },
];

/* ─── Component ─────────────────────────────────────────── */
export function HomeHero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section
      className="relative overflow-hidden bg-[#0A1B2E] min-h-[100vh] flex flex-col"
      aria-label="Hero – Pako Engineers"
    >
      {/* ── Background Image ── */}
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
        {/* Left-to-right gradient: solid navy on left, transparent on right to reveal image */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, #0A1B2E 0%, #0A1B2E 35%, rgba(10,27,46,0.85) 50%, rgba(10,27,46,0.4) 70%, rgba(10,27,46,0.25) 100%)",
          }}
        />
        {/* Bottom fade for stats band */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#0A1B2E] via-[#0A1B2E]/80 to-transparent" />
      </div>

      {/* ── Main Content ── */}
      <Container className="relative z-10 flex flex-1 items-center pt-[160px] pb-0 lg:pt-[180px]">
        <div className="w-full lg:w-[55%] max-w-[680px]">
          {/* Small company name with underline */}
          <motion.div
            variants={fadeUp(0.1)}
            initial="hidden"
            animate={mounted ? "visible" : "hidden"}
            className="mb-5"
          >
            <p className="text-[16px] md:text-[18px] text-white/90 font-normal italic tracking-wide">
              Pako Engineers
            </p>
            <div className="mt-2 h-[3px] w-[50px] bg-[#1E5FAA] rounded-full" />
          </motion.div>

          {/* ── PAKO ENGINEERS – Massive Title ── */}
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

          {/* ── Tagline ── */}
          <motion.p
            variants={fadeUp(0.35)}
            initial="hidden"
            animate={mounted ? "visible" : "hidden"}
            className="mb-10 text-[15px] md:text-[18px] lg:text-[20px] font-bold uppercase tracking-[0.08em] leading-[1.5] text-white"
          >
            Manufacture &amp; Exporter of
            <br />
            Precision Machined Components &amp;
            <br />
            Pump Assemblies
          </motion.p>

          {/* ── CTA Buttons ── */}
          <motion.div
            variants={fadeUp(0.5)}
            initial="hidden"
            animate={mounted ? "visible" : "hidden"}
            className="flex flex-col gap-4 sm:flex-row sm:gap-5"
          >
            <Button
              href="/products"
              size="lg"
              className="bg-[#1565C0] hover:bg-[#1256A8] text-white font-bold text-[13px] uppercase tracking-[0.1em] px-8 py-4 h-auto rounded-full shadow-lg transition-all"
            >
              Explore Products
              <ArrowRight size={16} className="ml-2" />
            </Button>
            <Button
              href="/request-quote"
              size="lg"
              variant="outline"
              className="border-2 border-white/40 text-white font-bold text-[13px] uppercase tracking-[0.1em] px-8 py-4 h-auto rounded-full hover:bg-white/10 transition-all"
            >
              Request Quote
              <ArrowRight size={16} className="ml-2" />
            </Button>
          </motion.div>
        </div>
      </Container>

      {/* ── Bottom Stats Band ── */}
      <div className="relative z-10 mt-auto w-full">
        <Container>
          <motion.div
            variants={fadeUp(0.7)}
            initial="hidden"
            animate={mounted ? "visible" : "hidden"}
            className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0 border-t border-white/15 py-8 lg:py-10"
          >
            {STATS.map((stat, i) => (
              <div key={stat.title} className="flex items-center gap-0 md:flex-1">
                {/* Vertical divider (not on first item) */}
                {i > 0 && (
                  <div className="hidden md:block w-px h-12 bg-white/20 mr-6 shrink-0" />
                )}
                <div className="flex items-center gap-4">
                  <stat.icon
                    size={36}
                    strokeWidth={1.2}
                    className="text-white/80 shrink-0"
                  />
                  <div>
                    <p className="text-[15px] lg:text-[16px] font-bold text-white leading-tight">
                      {stat.title}
                    </p>
                    <p className="text-[12px] lg:text-[13px] text-white/60 mt-0.5">
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
