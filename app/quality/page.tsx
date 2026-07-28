import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { TestingFacilities } from "@/components/sections/TestingFacilities";
import { QualityAssurance as QAOverview } from "@/components/sections/QualityAssurance";
import { CTABand } from "@/components/sections/CTABand";
import { RelatedPages } from "@/components/sections/RelatedPages";
import { FileDown, Search, ShieldAlert, BarChart, ArrowRight, CheckCircle2, Factory } from "lucide-react";

import { Images } from "@/lib/images";
export const metadata: Metadata = {
  title: "Quality Assurance & Testing | Pako Engineers – ISO 9001:2015",
  description: "Explore our rigorous quality control processes, NDT testing facilities, dimensional inspection capabilities, and ISO 9001:2015 zero-defect philosophy.",
  alternates: { canonical: "/quality" },
  openGraph: {
    title: "Pako Engineers – Quality Assurance & Testing",
    description: "Zero-defect manufacturing philosophy backed by a three-tier inspection process and advanced testing facilities.",
    url: "https://pakoshaft.com/quality",
    type: "website",
  },
};

export default function QualityPage() {
  const processes = [
    { icon: Search, title: "Incoming Inspection", desc: "Verification of raw materials against Mill Test Certificates (MTC). Chemical and physical analysis verification via NABL accredited partner labs before any material enters the shop floor." },
    { icon: BarChart, title: "In-Process Inspection", desc: "First-off inspection and periodic stage inspection by dedicated QA engineers using calibrated micrometers, bore gauges, and surface roughness testers to ensure critical tolerances are maintained." },
    { icon: ShieldAlert, title: "Final Inspection & NDT", desc: "100% dimensional check and visual inspection before dispatch. Dye Penetrant Testing (DPT) and Ultrasonic Testing (UT) to guarantee defect-free components for critical applications." }
  ];

  const correctiveActions = [
    "Root Cause Analysis (RCA) using 5-Why and Ishikawa diagrams",
    "Corrective and Preventive Action (CAPA) implementation",
    "Regular internal audits and management reviews",
    "Continuous operator training and skill matrix updating",
  ];

  return (
    <>
      <PageHero
        eyebrow="Quality Assurance"
        title="Zero-Defect Manufacturing Philosophy"
        description="Quality is embedded at every stage of the manufacturing process ensuring complete traceability and dimensional accuracy for every component we export."
        backgroundImage={Images.assets.precisionQualityInspection.src}
      >
         <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <Button href="#manual" variant="glass">
            <FileDown size={16} className="mr-2" /> Download Quality Manual
          </Button>
          <Button href="/certifications" className="bg-oxide hover:bg-[#E64A19] text-white">
            View ISO Certificate <ArrowRight size={16} className="ml-2" />
          </Button>
        </div>
      </PageHero>

      <Breadcrumb items={[{ label: "Company", href: "/about" }, { label: "Quality Assurance", href: "/quality" }]} />

      {/* ═══ QA OVERVIEW ═══ */}
      <QAOverview />

      {/* ═══ THREE-TIER INSPECTION ═══ */}
      <section className="py-20 bg-background-light border-y border-line">
        <Container>
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <p className="mb-4 font-mono text-sm font-semibold uppercase tracking-wider text-oxide">Inspection Process</p>
            <h2 className="font-display text-3xl font-bold text-navy mb-4 md:text-4xl">Three-Tier Inspection Matrix</h2>
            <p className="text-lg text-ink-muted leading-relaxed">To maintain our status as a trusted OEM supplier, every batch undergoes a strict quality control matrix to ensure absolute compliance with drawing specifications.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {processes.map((proc, i) => (
              <div key={i} className="bg-white p-8 rounded-xl border border-line shadow-sm hover:shadow-raised hover:border-oxide/30 transition-all group">
                <proc.icon size={40} className="text-navy mb-6 transition-transform group-hover:scale-110 group-hover:text-oxide" strokeWidth={1.2} />
                <h3 className="font-display text-xl font-bold text-navy mb-3">{proc.title}</h3>
                <p className="text-sm text-ink-muted leading-relaxed">{proc.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ═══ TESTING FACILITIES ═══ */}
      <TestingFacilities />

      {/* ═══ TRACEABILITY & CAPA ═══ */}
      <section className="bg-white py-20 lg:py-28">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="mb-4 font-mono text-sm font-semibold uppercase tracking-wider text-oxide">Documentation</p>
              <h2 className="font-display text-3xl font-bold text-navy mb-6">Traceability & Compliance</h2>
              <p className="text-lg text-ink-muted leading-relaxed mb-6">
                We understand that documentation is as critical as the physical component, especially for Oil & Gas and Power sectors. Every part is laser-marked with a unique batch code or heat number. Material composition and mechanical properties can be traced back to the original steel mill.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-navy font-medium"><div className="w-2 h-2 rounded-full bg-oxide" /> Material Test Reports (MTR) EN 10204 3.1</li>
                <li className="flex items-center gap-3 text-navy font-medium"><div className="w-2 h-2 rounded-full bg-oxide" /> Comprehensive Dimensional Inspection Charts</li>
                <li className="flex items-center gap-3 text-navy font-medium"><div className="w-2 h-2 rounded-full bg-oxide" /> NDT Reports (DPT / UT / Radiography)</li>
                <li className="flex items-center gap-3 text-navy font-medium"><div className="w-2 h-2 rounded-full bg-oxide" /> Heat Treatment Time-Temperature Charts</li>
              </ul>
            </div>
            
            <div className="bg-surface border border-line rounded-2xl p-8 lg:p-10 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <Factory className="text-oxide" size={28} />
                <h3 className="font-display text-2xl font-bold text-navy">Continuous Improvement</h3>
              </div>
              <p className="text-ink-muted leading-relaxed mb-6">
                Our QMS is built on the principle of continuous improvement. We actively monitor rejection rates, customer feedback, and process capabilities to drive our CAPA initiatives:
              </p>
              <ul className="space-y-3">
                {correctiveActions.map((action, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="text-success shrink-0 mt-0.5" size={18} />
                    <span className="text-sm font-medium text-navy">{action}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* ═══ DOWNLOAD MANUAL ═══ */}
      <section id="manual" className="bg-navy py-20 text-white">
        <Container>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 lg:p-16 text-center backdrop-blur-sm max-w-4xl mx-auto">
            <FileDown size={48} className="mx-auto text-oxide mb-6" />
            <h2 className="font-display text-3xl font-bold mb-4">Download Quality Manual</h2>
            <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
              Review our comprehensive Quality Management System (QMS) guidelines, standard operating procedures, and calibration schedules.
            </p>
            <button className="bg-white text-navy hover:bg-slate-100 font-bold py-4 px-8 rounded-md inline-flex items-center gap-2 transition-colors">
              <FileDown size={20} /> Get Quality Manual (PDF)
            </button>
          </div>
        </Container>
      </section>

      <CTABand 
        title="Customer Satisfaction is our Priority"
        description="We stand by the quality of every component we ship. Partner with us for reliable, zero-defect manufacturing."
      />
      <RelatedPages />
    </>
  );
}
