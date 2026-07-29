import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { MachineryGallery } from "@/components/sections/MachineryGallery";
import { CTABand } from "@/components/sections/CTABand";

export const metadata: Metadata = {
  title: "Advanced Machinery & Equipment | Pako Engineers",
  description: "Explore our fleet of world-class CNC turning, milling, and grinding machines capable of handling large-scale precision components.",
  alternates: { canonical: "/machines" },
};

export default function MachinesPage() {
  return (
    <>
      <section className="bg-navy py-16 md:py-24 text-white">
        <Container>
          <div className="flex items-center gap-2 text-sm font-medium text-oxide mb-4">
            <span>Home</span>
            <span>&rarr;</span>
            <span>Manufacturing</span>
            <span>&rarr;</span>
            <span className="text-white">Machinery</span>
          </div>
          <h1 className="font-display text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl mb-6">
            Machinery & Equipment
          </h1>
          <p className="max-w-3xl text-lg text-white/80">
            From 10-meter heavy-duty CNC lathes to 5-axis vertical machining centers, our equipment list ensures we can handle the most demanding tolerances and complex geometries in the industry.
          </p>
        </Container>
      </section>

      <MachineryGallery />

      <CTABand />
    </>
  );
}
