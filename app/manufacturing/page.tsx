import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import { CapabilitiesSection } from "@/components/sections/CapabilitiesSection";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { InfrastructureSection } from "@/components/sections/InfrastructureSection";
import { CompanyVideo } from "@/components/sections/CompanyVideo";
import { CTABand } from "@/components/sections/CTABand";

export const metadata: Metadata = {
  title: "Manufacturing & Infrastructure | Pako Engineers",
  description: "State-of-the-art manufacturing facilities delivering precision machined components with global quality standards.",
  alternates: { canonical: "/manufacturing" },
};

export default function ManufacturingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-navy">
        <div className="absolute inset-0 z-0">
          <div className="h-full w-full bg-[url('/images/hero/cnc-turning-hero.png')] bg-cover bg-center opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-transparent" />
        </div>

        <Container className="relative z-10 py-20">
          <div className="flex items-center gap-2 text-sm font-medium text-oxide mb-6">
            <span>Home</span>
            <span>&rarr;</span>
            <span className="text-white">Manufacturing</span>
          </div>

          <h1 className="mb-6 max-w-4xl font-display text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            Engineering Precision Through Advanced Manufacturing
          </h1>

          <p className="mb-10 max-w-2xl text-lg text-white/80">
            Machining, grinding, CNC lathe, wire-cut, key-way and in-house
            assembly capabilities for shafts, sleeves, couplings, lock nuts,
            pump parts, retainer rings, Thordon bearings and gears.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button href="#capabilities" size="lg">
              Explore Capabilities
              <ArrowRight size={18} className="ml-2" />
            </Button>
            <Button href="/request-quote" variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 hover:text-white">
              Request Quote
            </Button>
          </div>
        </Container>
      </section>

      {/* Manufacturing Capabilities */}
      <div id="capabilities">
        <CapabilitiesSection />
      </div>

      {/* Production Process Timeline */}
      <ProcessTimeline />

      {/* Infrastructure */}
      <InfrastructureSection />

      {/* Factory Tour */}
      <CompanyVideo />

      {/* Call To Action */}
      <CTABand />
    </>
  );
}
