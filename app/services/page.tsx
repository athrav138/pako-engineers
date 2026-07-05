import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { VerifiedGrid } from "@/components/sections/VerifiedGrid";
import { CTABand } from "@/components/sections/CTABand";
import { services } from "@/lib/content/company";

export const metadata: Metadata = {
  title: "Services",
  description: "Machining, grinding, wire-cut, key-way and custom gear services from Pako Engineers.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Manufacturing services for precision rotating components"
        description="Pako Engineers supports customer drawings through turning, grinding, CNC machining, wire-cut work, key-way machining and custom gear manufacturing."
      />
      <section className="py-20 md:py-28">
        <VerifiedGrid items={services} />
      </section>
      <CTABand />
    </>
  );
}
