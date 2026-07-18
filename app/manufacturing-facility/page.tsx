import type { Metadata } from "next";
import Image from "next/image";
import { ArrowDown, CheckCircle2, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { CapabilitiesSection } from "@/components/sections/CapabilitiesSection";
import { MachineryGallery } from "@/components/sections/MachineryGallery";
import { StatsSection } from "@/components/sections/StatsSection";
import { CTABand } from "@/components/sections/CTABand";
import { RelatedPages } from "@/components/sections/RelatedPages";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { company } from "@/lib/content/company";

export const metadata: Metadata = {
  title: "Manufacturing Facility & Process | Pako Engineers – CNC Machining Experts",
  description: "End-to-end precision manufacturing process: from raw material verification through CNC turning, grinding, NDT, assembly, and export packaging.",
  alternates: { canonical: "/manufacturing-facility" },
  openGraph: {
    title: "Pako Engineers – Manufacturing Process & Machine Fleet",
    description: "Step-by-step overview of our CNC machining workflow, machinery capabilities, and quality checkpoints.",
    url: "https://pakoshaft.com/manufacturing-facility",
    type: "website",
  },
};

export default function ManufacturingFacilityPage() {
  const processSteps = [
    {
      step: "01",
      title: "Raw Material Procurement",
      desc: "Sourcing premium-grade forgings and castings in SS304, SS316, Duplex, Super Duplex, Monel, and EN-series steels. Every heat comes with Mill Test Certificates verified against EN 10204 3.1 requirements.",
      quality: "Incoming chemical and physical property verification",
      machines: "Material testing lab, spectroscopy (outsourced)",
      image: "/images/pako-engineers-inampatta-sangli-246b4xbmg4.avif",
    },
    {
      step: "02",
      title: "Cutting & Rough Machining",
      desc: "Band saw cutting to rough dimensions followed by initial turning to establish base diameters and relieve internal stress from the forging process.",
      quality: "Dimensional check at rough stage using calipers and gauges",
      machines: "Heavy-duty band saws, conventional lathes",
      image: "/images/pako-engineers-inampatta-sangli-8cm88vo30j.avif",
    },
    {
      step: "03",
      title: "CNC Turning & Milling",
      desc: "High-precision multi-axis CNC turning and VMC machining to achieve critical geometries, key-ways, splines, threads, and bearing fits with tolerances down to 5 microns.",
      quality: "First-off inspection and periodic in-process checking",
      machines: "CNC lathes (up to 1500mm dia), VMC machining centres",
      image: "/images/hero-machining.png",
    },
    {
      step: "04",
      title: "Heat Treatment",
      desc: "Stress relieving, hardening, tempering, and normalizing — outsourced to certified heat treatment partners with calibrated furnace control and documented time-temperature profiles.",
      quality: "Post-treatment hardness verification (Rockwell/Brinell)",
      machines: "Outsourced certified heat treatment facilities",
      image: "/images/pako-engineers-inampatta-sangli-industrial-equipment-manufacturers-xay5ra4b6r.avif",
    },
    {
      step: "05",
      title: "Precision Grinding",
      desc: "Cylindrical and internal grinding achieving surface finishes down to Ra 0.2 microns. Vibration-damped flooring ensures absolute stability for sub-micron tolerance requirements.",
      quality: "Surface roughness measurement, roundness check",
      machines: "CNC cylindrical grinders, internal grinders",
      image: "/images/pako-engineers-inampatta-sangli-xas6rn507h.avif",
    },
    {
      step: "06",
      title: "Wire-Cut EDM & Key-Way",
      desc: "Wire-cut EDM for complex spline profiles, irregular key-ways, and exotic alloy machining where conventional cutting tools cannot achieve the required geometry.",
      quality: "Profile verification against drawing coordinates",
      machines: "NXG EZEECUT Wire-Cut Machine, VMC key-way",
      image: "/images/pako-engineers-inampatta-sangli-dxlc3e8p9c.webp",
    },
    {
      step: "07",
      title: "NDT & Final Inspection",
      desc: "100% dimensional verification followed by non-destructive testing: Dye Penetrant Testing (DPT), Ultrasonic Testing (UT), PMI, and Radiography as required by the client specification.",
      quality: "Complete documentation package with MTR, DPT, and dimensional reports",
      machines: "DPT kits, hardness testers, surface roughness testers, calipers, micrometers",
      image: "/images/quality-inspection.png",
    },
    {
      step: "08",
      title: "Assembly & Balancing",
      desc: "Static balancing, rotor assembly, and pump sub-assembly build-up in a clean, dust-free environment with calibrated torque tooling and alignment equipment.",
      quality: "Balance grade verification, assembly torque records",
      machines: "Static balancing machine, assembly fixtures",
      image: "/images/pako-engineers-inampatta-sangli-oa1cwygurt.avif",
    },
    {
      step: "09",
      title: "Export Packaging & Dispatch",
      desc: "Anti-rust VCI coating, foam protection, bubble wrapping, and fumigated wooden crating for safe global transit by sea, air, or land. Full packing lists and commercial documentation prepared in-house.",
      quality: "Final visual inspection before packing, packing list verification",
      machines: "Dedicated packing zone with fumigation certificate",
      image: "/images/pako-engineers-inampatta-sangli-t3bhte14qa.avif",
    },
  ];

  return (
    <>
      <PageHero
        eyebrow="Manufacturing Facility"
        title="End-to-End Precision Engineering Workflow"
        description="Our manufacturing process is engineered for complete traceability, repeatability, and micrometer accuracy at every stage — from raw forging to export packaging."
        backgroundImage="/images/hero-machining.png"
      >
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <Button href="/infrastructure" variant="glass">
            View Infrastructure <ArrowRight size={16} className="ml-2" />
          </Button>
          <Button href="/request-quote" className="bg-oxide hover:bg-[#E64A19] text-white">
            Get a Manufacturing Quote
          </Button>
        </div>
      </PageHero>

      <Breadcrumb items={[{ label: "Company", href: "/about" }, { label: "Manufacturing Facility", href: "/manufacturing-facility" }]} />

      {/* ═══ CAPABILITIES OVERVIEW ═══ */}
      <CapabilitiesSection />

      {/* ═══ STATS ═══ */}
      <StatsSection
        stats={[
          { value: 9, label: "Production Steps" },
          { value: 1500, suffix: "mm", label: "Max Diameter" },
          { value: 14000, suffix: "mm", label: "Max Length" },
          { value: 5, label: "Micron Tolerance" },
        ]}
      />

      {/* ═══ PRODUCTION PROCESS FLOW ═══ */}
      <section className="py-20 lg:py-28 bg-white">
        <Container>
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <p className="mb-4 font-mono text-sm font-semibold uppercase tracking-wider text-oxide">Production Workflow</p>
            <h2 className="font-display text-3xl font-bold text-navy mb-4 md:text-4xl">The Manufacturing Process</h2>
            <p className="text-lg text-ink-muted leading-relaxed">
              Every component passes through a documented, ISO 9001:2015-compliant workflow with quality checkpoints at every stage.
            </p>
          </div>

          <div className="space-y-8 max-w-5xl mx-auto">
            {processSteps.map((step, i) => (
              <div key={step.step} className="group">
                <div className={`flex flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-sm transition-all hover:shadow-raised ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}>
                  {/* Image */}
                  <div className="relative w-full lg:w-2/5 aspect-video lg:aspect-auto overflow-hidden bg-surface min-h-[240px]">
                    <Image
                      src={step.image}
                      alt={`Step ${step.step}: ${step.title} at Pako Engineers`}
                      fill
                      sizes="(min-width: 1024px) 40vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-navy/50 to-transparent lg:bg-gradient-to-t" />
                    <div className="absolute top-5 left-5 z-10">
                      <span className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-oxide text-white font-mono text-sm font-bold shadow-lg">{step.step}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col justify-center p-8 lg:p-10">
                    <h3 className="mb-4 font-display text-2xl font-bold text-navy">{step.title}</h3>
                    <p className="mb-6 text-ink-muted leading-relaxed">{step.desc}</p>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="text-oxide shrink-0 mt-0.5" size={16} />
                        <span><strong className="text-navy">Quality Check:</strong> <span className="text-ink-muted">{step.quality}</span></span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="text-oxide shrink-0 mt-0.5" size={16} />
                        <span><strong className="text-navy">Equipment:</strong> <span className="text-ink-muted">{step.machines}</span></span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Arrow connector */}
                {i < processSteps.length - 1 && (
                  <div className="flex justify-center py-2">
                    <ArrowDown size={24} className="text-line" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ═══ MACHINERY GALLERY ═══ */}
      <MachineryGallery />

      <CTABand
        title="Have a drawing ready for manufacturing?"
        description="Upload your specifications and receive a detailed manufacturing proposal with lead time and pricing within 24 hours."
      />
      <RelatedPages />
    </>
  );
}
