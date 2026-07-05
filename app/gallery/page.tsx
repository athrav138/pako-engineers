import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { CTABand } from "@/components/sections/CTABand";
import { galleryItems } from "@/lib/content/company";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photographs of the Pako Engineers shop floor, machining equipment, finished components and inspection workflow.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Inside the Pako Engineers facility"
        description="Shop floor, finished components, infrastructure and inspection imagery used across the site."
      />

      <section className="py-20 md:py-28">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2">
            {galleryItems.map((item) => (
              <figure key={item.title} className="overflow-hidden rounded-lg border border-line bg-white shadow-card">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="flex items-center justify-between gap-4 p-5">
                  <span className="font-display text-lg font-semibold text-navy">{item.title}</span>
                  <span className="text-xs font-semibold uppercase tracking-wide text-muted">{item.category}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </section>

      <CTABand />
    </>
  );
}
