import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { VerifiedGrid } from "@/components/sections/VerifiedGrid";
import { CTABand } from "@/components/sections/CTABand";
import { services } from "@/lib/content/company";

import { Images } from "@/lib/images";
export const metadata: Metadata = {
  title: "Services",
  description: "Machining, grinding, wire-cut, key-way and custom gear services from Pako Engineers.",
  alternates: { canonical: "/services" },
  openGraph: {
    images: [{ url: Images.assets.shaftMachiningLathe.src, width: 1200, height: 630 }],
  },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Manufacturing services for precision rotating components"
        description="Pako Engineers supports customer drawings through turning, grinding, CNC machining, wire-cut work, key-way machining and custom gear manufacturing."
        backgroundImage={Images.assets.shaftMachiningLathe.src}
      />
      <section className="py-20 md:py-28">
        <VerifiedGrid items={services} />
      </section>
      <CTABand />
    </>
  );
}
