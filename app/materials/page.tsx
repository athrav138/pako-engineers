import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { MaterialsSection } from "@/components/sections/MaterialsSection";
import { CTABand } from "@/components/sections/CTABand";

export const metadata: Metadata = {
  title: "Premium Materials | Pako Engineers",
  description: "Specialized in machining Stainless Steel, Super Duplex, Monel, Nitronic 50, and other high-performance alloys for critical engineering applications.",
  alternates: { canonical: "/materials" },
};

export default function MaterialsPage() {
  return (
    <>
      <section className="bg-navy py-16 md:py-24 text-white">
        <Container>
          <div className="flex items-center gap-2 text-sm font-medium text-oxide mb-4">
            <span>Home</span>
            <span>&rarr;</span>
            <span className="text-white">Materials</span>
          </div>
          <h1 className="font-display text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl mb-6">
            Premium Materials For Critical Applications
          </h1>
          <p className="max-w-3xl text-lg text-white/80">
            We specialize in machining complex exotic materials, ensuring optimal tool life and surface finish without compromising metallurgical integrity.
          </p>
        </Container>
      </section>

      {/* Grid of Materials */}
      <MaterialsSection />

      <section className="bg-background-light py-20 lg:py-32">
        <Container>
          <div className="rounded-2xl border border-line bg-white p-12 text-center shadow-raised">
             <h2 className="font-display text-3xl font-bold text-navy mb-4">Need specific material properties?</h2>
             <p className="text-lg text-ink-muted mb-8 max-w-2xl mx-auto">
               Share your drawing, material grade or application requirement and our team will confirm suitable material properties and machining feasibility.
             </p>
             <a href="/request-quote" className="inline-flex h-12 items-center justify-center rounded-md bg-navy px-8 font-medium text-white transition-colors hover:bg-oxide">
               Request Material Support
             </a>
          </div>
        </Container>
      </section>

      <CTABand />
    </>
  );
}
