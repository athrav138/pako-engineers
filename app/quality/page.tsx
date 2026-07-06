import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { TestingFacilities } from "@/components/sections/TestingFacilities";
import { CTABand } from "@/components/sections/CTABand";
import { QualityAssurance as QAOverview } from "@/components/sections/QualityAssurance";

export const metadata: Metadata = {
  title: "Quality Assurance & Testing | Pako Engineers",
  description: "Explore our rigorous quality control processes, testing facilities, and ISO 9001:2015 certifications.",
  alternates: { canonical: "/quality" },
};

export default function QualityPage() {
  return (
    <>
      <section className="bg-navy py-16 md:py-24 text-white">
        <Container>
          <div className="flex items-center gap-2 text-sm font-medium text-oxide mb-4">
            <span>Home</span>
            <span>&rarr;</span>
            <span className="text-white">Quality Assurance</span>
          </div>
          <h1 className="font-display text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl mb-6">
            Quality Without Compromise
          </h1>
          <p className="max-w-3xl text-lg text-white/80">
            At Pako Engineers, quality is embedded at every stage of the manufacturing process. Our zero-defect philosophy ensures complete traceability and dimensional accuracy for every component we export.
          </p>
        </Container>
      </section>

      {/* ISO Certifications and Workflow (QAOverview reused) */}
      <QAOverview />

      <TestingFacilities />

      <section className="bg-background-light py-20 lg:py-32">
        <Container>
          <div className="mb-12">
             <h2 className="font-display text-3xl font-bold tracking-tight text-navy mb-4">
              Certifications & Documentation
            </h2>
            <p className="text-ink-muted">All our products are shipped with complete material test reports (MTR) and dimensional inspection charts.</p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-line bg-white p-8">
               <h3 className="text-xl font-bold text-navy mb-4">ISO 9001:2015 Certified</h3>
               <p className="text-ink-muted mb-6">Our quality management system is certified to international standards, ensuring consistent processes from raw material procurement to final dispatch.</p>
               <a href="/contact" className="text-sm font-medium text-oxide hover:underline">Request certification details</a>
            </div>
            <div className="rounded-xl border border-line bg-white p-8">
               <h3 className="text-xl font-bold text-navy mb-4">Traceability</h3>
               <p className="text-ink-muted mb-6">Every component is laser-marked with a unique batch code. Heat numbers and material composition can be traced back to the original steel mill.</p>
               <button className="text-sm font-medium text-oxide hover:underline">View Sample Inspection Report</button>
            </div>
          </div>
        </Container>
      </section>

      <CTABand />
    </>
  );
}
