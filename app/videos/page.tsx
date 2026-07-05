import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { CTABand } from "@/components/sections/CTABand";

export const metadata: Metadata = {
  title: "Videos",
  description: "Video information for Pako Engineers manufacturing and product capability.",
  alternates: { canonical: "/videos" },
};

export default function VideosPage() {
  return (
    <>
      <PageHero
        eyebrow="Videos"
        title="Manufacturing video library"
        description="No standalone video files were supplied in the project folder. The page is ready to host verified facility and process videos when provided by Pako Engineers."
      />
      <section className="py-20 md:py-28">
        <Container>
          <div className="rounded-lg border border-line bg-surface p-8 text-sm leading-relaxed text-muted">
            The uploaded assets include profile and specification documents plus still images; no video files were present. For deployment, add verified shop-floor, machine-operation and inspection videos to this section.
          </div>
        </Container>
      </section>
      <CTABand />
    </>
  );
}
