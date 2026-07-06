"use client";

import { motion } from "framer-motion";
import { Search, ShieldCheck, FileCheck, CheckCircle2, Factory } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { inHouseTesting, outsourcedTesting } from "@/lib/content/company";

const FACILITIES = [
  {
    name: "Hardness Testing",
    purpose: "Ensure material strength and wear resistance.",
    icon: ShieldCheck,
    desc: "Rockwell and Brinell hardness testing for precise metallurgical compliance."
  },
  {
    name: "Dye Penetrant Test (DPT)",
    purpose: "Detect surface-breaking defects.",
    icon: Search,
    desc: "Non-destructive testing for micro-cracks on critical pump components."
  },
  {
    name: "Positive Material ID (PMI)",
    purpose: "Verify alloy composition through outsourced testing.",
    icon: FileCheck,
    desc: "Listed in the profile as an outsourced test facility for material verification."
  },
  {
    name: "Dimensional Inspection",
    purpose: "Verify tight tolerances.",
    icon: CheckCircle2,
    desc: "Calipers, micrometers and gauges are available for production inspection."
  },
  {
    name: "Surface Finish Measurement",
    purpose: "Ensure optimal sealing and friction.",
    icon: Factory,
    desc: "Roughness testers for confirming Ra values down to 0.2 microns."
  }
];

export function TestingFacilities() {
  return (
    <section className="bg-navy py-20 lg:py-32 text-white">
      <Container>
        <div className="mb-16 md:w-2/3 lg:w-1/2">
          <p className="mb-4 font-mono text-sm font-semibold uppercase tracking-wider text-oxide">
            In-House Laboratory
          </p>
          <h2 className="mb-6 font-display text-3xl font-bold tracking-tight md:text-4xl">
            Advanced Testing Facilities
          </h2>
          <p className="text-lg leading-relaxed text-white/70">
            In-house checks include {inHouseTesting.join(", ")}. Outsourced
            support includes {outsourcedTesting.join(", ")}.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {FACILITIES.map((facility, i) => (
            <motion.div
              key={facility.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group overflow-hidden rounded-xl border border-white/10 bg-white/5 p-8 backdrop-blur transition-colors hover:bg-white/10"
            >
              <facility.icon size={36} className="mb-6 text-oxide" strokeWidth={1.5} />
              <h3 className="mb-2 font-display text-xl font-bold">{facility.name}</h3>
              <p className="mb-4 font-mono text-xs font-semibold text-white/50 uppercase tracking-wide">{facility.purpose}</p>
              <p className="text-sm leading-relaxed text-white/70">{facility.desc}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
