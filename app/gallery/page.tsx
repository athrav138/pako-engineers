import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { CTABand } from "@/components/sections/CTABand";
import { MasonryGallery } from "@/components/sections/gallery/MasonryGallery";

export const metadata: Metadata = {
  title: "Media Gallery & Factory Tour | Pako Engineers",
  description: "Explore our state-of-the-art manufacturing plant, CNC machines, quality inspection labs, and precision machined components.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      <section className="bg-navy py-16 md:py-24 text-white">
        <Container>
          <div className="flex items-center gap-2 text-sm font-medium text-oxide mb-4">
            <span>Home</span>
            <span>&rarr;</span>
            <span className="text-white">Gallery</span>
          </div>
          <h1 className="font-display text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl mb-6 max-w-4xl">
            Inside Pako Engineers
          </h1>
          <p className="max-w-2xl text-lg text-white/80">
            Take a visual tour of our 40,000 sq.ft facility, showcasing our advanced heavy-duty CNC machining centers and metallurgical testing laboratories.
          </p>
        </Container>
      </section>

      <MasonryGallery />

      <CTABand />
    </>
  );
}
