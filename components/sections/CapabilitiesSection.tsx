"use client";

import { useState, useEffect, useCallback } from "react";
import { Images } from "@/lib/images";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X, CheckCircle2, Ruler, Wrench, ShieldCheck, Layers, FileText } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

type CapabilitySpec = {
  id: string;
  title: string;
  description: string;
  capacity: string;
  image: string;
  details: {
    dimensions: string;
    tolerances: string;
    machines: string[];
    components: string[];
    materials: string[];
    qualityChecks: string[];
  };
};

const CAPABILITIES: CapabilitySpec[] = [
  {
    id: "turning",
    title: "CNC Turning & Machining",
    description: "Shaft, flange and concrete shaft machining supported by massive CNC lathe capacity for long precision components.",
    capacity: "50 mm - 1500 mm dia., up to 8,000 mm length",
    image: Images.assets.cncTurningHero.src,
    details: {
      dimensions: "50 mm – 1500 mm Outer Diameter, 0.5 m – 8.0 m Length (CNC Lathes up to 10,000 mm length capacity)",
      tolerances: "Sub-micron accuracy down to 10 – 50 microns depending on component profile",
      machines: [
        "Heavy-Duty CNC Lathes (10,000 mm bed capacity)",
        "Multi-Axis CNC Turning Centers",
        "Conventional Heavy Turning Lathes",
        "VMC Precision Threading & Key-Way Units",
      ],
      components: [
        "Pump Shafts & Impeller Shafts",
        "Flange & Concrete Pump Shafts",
        "Heavy Shaft Sleeves & Couplings",
        "Precision Lock Nuts & Threaded Parts",
      ],
      materials: [
        "Stainless Steel (SS304, SS316, 410, 410T)",
        "Duplex & Super Duplex Steels",
        "Nitronic 50 & K-Monel 400/500",
        "EN-Series Structural Alloy Steels",
      ],
      qualityChecks: [
        "100% Dimensional & Run-Out Inspection",
        "Thread Pitch & Profile Gauge Verification",
        "Raw Material Mill Test Certificate (EN 10204 3.1 Traceability)",
      ],
    },
  },
  {
    id: "grinding",
    title: "Cylindrical Grinding",
    description: "High-precision grinding capability for shafts, sleeves, couplings and bushes with extensive internal and outer diameter support.",
    capacity: "50 mm - 800 mm dia., up to 6,500 mm length",
    image: Images.assets.precisionQualityInspection.src,
    details: {
      dimensions: "Outer Diameter: 50 mm – 800 mm up to 6,500 mm length; Internal Diameter: 50 mm – 500 mm up to 1,000 mm length",
      tolerances: "Micro-smooth surface finish down to Ra 0.2 microns with strict roundness control",
      machines: [
        "CNC Cylindrical Grinding Machines",
        "Internal Diameter Bore Grinders",
        "Heavy-Duty Shaft Journal Polishers",
      ],
      components: [
        "Pump Shaft Journal & Bearing Seats",
        "Precision Pump Sleeves & Bushes",
        "High-Speed Shaft Couplings",
        "Thordon & Gunmetal Bearing Surfaces",
      ],
      materials: [
        "All Stainless Steel Grades",
        "Hardened Tool & Alloy Steels",
        "Gunmetal, RG12 & Feroform F363",
        "Neoprene & Thordon Composite Bushes",
      ],
      qualityChecks: [
        "Surface Roughness Tester (Ra Profile Measurement)",
        "Cylindricity, Concentricity & Roundness Verification",
        "Air Gauge & Micrometer Inspection Records",
      ],
    },
  },
  {
    id: "assembly",
    title: "Assembly & Inspection",
    description: "In-house assembly plus internal key-way, VMC key-way and wire-cut support for pump assemblies, followed by rigorous quality inspection.",
    capacity: "Internal key-way up to 1,200 mm",
    image: Images.assets.modernFactoryFloorOverview.src,
    details: {
      dimensions: "Internal Key-Way Slotting up to 1,200 mm length; Wire-Cut EDM for complex spline profiles",
      tolerances: "Precision Keyway Alignment & ISO Dynamic Balancing Grade Verification",
      machines: [
        "NXG EZEECUT Wire-Cut EDM Unit",
        "VMC Key-Way Slotting Equipment",
        "Static & Dynamic Balancing Machine",
        "Hydraulic Press & Clean Assembly Bay",
      ],
      components: [
        "Complete Pump Rotor Sub-Assemblies",
        "Balanced Impellers & Lock Rings",
        "Retainer Rings & Bearing Shells",
        "Custom Splines & Multi-Key Couplings",
      ],
      materials: [
        "Stainless Steels, Duplex & Monel Alloys",
        "Rubber, Bronze & Polymer Bearings",
        "Cast Iron & Cast Steel Housings",
      ],
      qualityChecks: [
        "In-House Hardness Testing (Rockwell / Brinell)",
        "Dye Penetrant Testing (DPT) & Hydro-Pressure Check",
        "Dynamic Rotor Balance Grade Certification",
        "NDT Radiography & Ultrasonic Inspection (Outsourced Certified)",
      ],
    },
  },
];

export function CapabilitiesSection() {
  const [activeSpec, setActiveSpec] = useState<CapabilitySpec | null>(null);

  const handleClose = useCallback(() => {
    setActiveSpec(null);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };
    if (activeSpec) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeSpec, handleClose]);

  return (
    <section className="bg-white py-20 lg:py-32 relative">
      <Container>
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="mb-4 font-mono text-sm font-semibold uppercase tracking-wider text-oxide">
              Manufacturing Capabilities
            </p>
            <h2 className="font-display text-3xl font-bold tracking-tight text-navy md:text-4xl lg:text-5xl">
              Profile-verified capacity for precision pump components.
            </h2>
          </div>
          <Button href="/capabilities" variant="outline" className="w-fit">
            View All Capabilities
          </Button>
        </div>

        <div className="flex flex-col gap-8">
          {CAPABILITIES.map((cap, i) => (
            <motion.div
              key={cap.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-sm transition-all hover:shadow-raised md:flex-row"
            >
              <div className="relative w-full md:w-2/5 aspect-video md:aspect-auto overflow-hidden bg-surface">
                <Image
                  src={cap.image}
                  alt={cap.title}
                  fill
                  sizes="(min-width: 768px) 40vw, 100vw"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-8 md:p-10 justify-center">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-navy/5 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-navy w-fit">
                  {cap.capacity}
                </div>
                <h3 className="mb-4 font-display text-2xl font-bold text-navy lg:text-3xl">
                  {cap.title}
                </h3>
                <p className="mb-8 leading-relaxed text-ink-muted text-lg">
                  {cap.description}
                </p>

                <div className="mt-auto flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => setActiveSpec(cap)}
                    type="button"
                    className="inline-flex items-center font-semibold text-oxide hover:text-oxide-dark transition-colors cursor-pointer group/btn"
                    aria-label={`View technical specifications for ${cap.title}`}
                  >
                    View Specifications
                    <ArrowRight size={18} className="ml-2 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                  <Link
                    href={`/capabilities#${cap.id}`}
                    className="text-xs font-medium text-ink-muted hover:text-navy underline transition-colors"
                  >
                    Full details page &rarr;
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>

      {/* ═══ INTERACTIVE SPECIFICATIONS MODAL ═══ */}
      <AnimatePresence>
        {activeSpec && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
              className="fixed inset-0 bg-navy/80 backdrop-blur-sm"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-4xl max-h-[90vh] flex flex-col rounded-2xl border border-line bg-white shadow-2xl overflow-hidden z-10 my-auto"
            >
              {/* Header */}
              <div className="flex items-start justify-between border-b border-line bg-surface p-6 sm:p-8">
                <div>
                  <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-oxide/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-oxide">
                    {activeSpec.capacity}
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-navy">
                    {activeSpec.title} — Technical Specifications
                  </h3>
                </div>
                <button
                  onClick={handleClose}
                  type="button"
                  className="rounded-full p-2 text-ink-muted hover:bg-white hover:text-navy transition-colors focus:outline-none focus:ring-2 focus:ring-oxide"
                  aria-label="Close modal"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Modal Scrollable Content */}
              <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8">
                {/* Overview & Quick Info */}
                <div className="grid gap-6 md:grid-cols-2 bg-navy/5 p-6 rounded-xl border border-navy/10">
                  <div className="flex items-start gap-3">
                    <Ruler className="text-oxide shrink-0 mt-1" size={22} />
                    <div>
                      <h4 className="font-display font-bold text-navy text-sm uppercase tracking-wide">Machining Range & Capacity</h4>
                      <p className="mt-1 text-sm text-ink-muted leading-relaxed">{activeSpec.details.dimensions}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="text-oxide shrink-0 mt-1" size={22} />
                    <div>
                      <h4 className="font-display font-bold text-navy text-sm uppercase tracking-wide">Achievable Tolerances</h4>
                      <p className="mt-1 text-sm text-ink-muted leading-relaxed">{activeSpec.details.tolerances}</p>
                    </div>
                  </div>
                </div>

                {/* Specs Grid */}
                <div className="grid gap-6 md:grid-cols-2">
                  {/* Machinery Fleet */}
                  <div className="rounded-xl border border-line p-6 bg-white shadow-sm">
                    <h4 className="flex items-center gap-2 font-display text-lg font-bold text-navy mb-4">
                      <Wrench size={20} className="text-oxide" /> Equipment & Machinery
                    </h4>
                    <ul className="space-y-2.5">
                      {activeSpec.details.machines.map((m) => (
                        <li key={m} className="flex items-start gap-2.5 text-sm text-ink-muted">
                          <CheckCircle2 size={16} className="text-oxide shrink-0 mt-0.5" />
                          <span>{m}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Components Handled */}
                  <div className="rounded-xl border border-line p-6 bg-white shadow-sm">
                    <h4 className="flex items-center gap-2 font-display text-lg font-bold text-navy mb-4">
                      <Layers size={20} className="text-oxide" /> Typical Components
                    </h4>
                    <ul className="space-y-2.5">
                      {activeSpec.details.components.map((c) => (
                        <li key={c} className="flex items-start gap-2.5 text-sm text-ink-muted">
                          <CheckCircle2 size={16} className="text-oxide shrink-0 mt-0.5" />
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Materials */}
                  <div className="rounded-xl border border-line p-6 bg-white shadow-sm">
                    <h4 className="flex items-center gap-2 font-display text-lg font-bold text-navy mb-4">
                      <FileText size={20} className="text-oxide" /> Materials Handled
                    </h4>
                    <ul className="space-y-2.5">
                      {activeSpec.details.materials.map((mat) => (
                        <li key={mat} className="flex items-start gap-2.5 text-sm text-ink-muted">
                          <CheckCircle2 size={16} className="text-oxide shrink-0 mt-0.5" />
                          <span>{mat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Quality Checkpoints */}
                  <div className="rounded-xl border border-line p-6 bg-white shadow-sm">
                    <h4 className="flex items-center gap-2 font-display text-lg font-bold text-navy mb-4">
                      <ShieldCheck size={20} className="text-oxide" /> Quality Checkpoints
                    </h4>
                    <ul className="space-y-2.5">
                      {activeSpec.details.qualityChecks.map((q) => (
                        <li key={q} className="flex items-start gap-2.5 text-sm text-ink-muted">
                          <CheckCircle2 size={16} className="text-oxide shrink-0 mt-0.5" />
                          <span>{q}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-line bg-surface p-6">
                <p className="text-xs text-ink-muted text-center sm:text-left">
                  Need custom tolerance or drawing verification? Our engineering team responds within 24 hours.
                </p>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <Button
                    href={`/request-quote?service=${activeSpec.id}`}
                    className="w-full sm:w-auto bg-oxide hover:bg-[#E64A19] text-white"
                  >
                    Request Quote for Spec
                  </Button>
                  <Button
                    href="/capabilities"
                    variant="outline"
                    className="w-full sm:w-auto"
                    onClick={handleClose}
                  >
                    View All Specs Page
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

