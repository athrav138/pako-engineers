import type { Metadata } from "next";
import { HomeHero } from "@/components/sections/HomeHero";
import { StatsBand } from "@/components/sections/StatsBand";
import { ProductOverview } from "@/components/sections/ProductOverview";
import { ClientStrip } from "@/components/sections/ClientStrip";
import { ExportMarkets } from "@/components/sections/ExportMarkets";
import { CTABand } from "@/components/sections/CTABand";
import { AboutSplit } from "@/components/sections/AboutSplit";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { QualityAssurance } from "@/components/sections/QualityAssurance";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Pako Engineers | Precision Machining & Export Manufacturer",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <StatsBand />
      <AboutSplit />
      <WhyChooseUs />
      <ProductOverview />
      <ProcessTimeline />
      <QualityAssurance />
      <ExportMarkets />
      <ClientStrip />
      <CTABand />
      <ContactSection />
    </>
  );
}
