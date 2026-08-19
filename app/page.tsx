import type { Metadata } from "next";
import { HomeHero } from "@/components/sections/HomeHero";
import { AboutSplit } from "@/components/sections/AboutSplit";
import { LeadershipSection } from "@/components/sections/LeadershipSection";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { CapabilitiesSection } from "@/components/sections/CapabilitiesSection";
import { ProductOverview } from "@/components/sections/ProductOverview";

import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { MaterialsSection } from "@/components/sections/MaterialsSection";
import { QualityAssurance } from "@/components/sections/QualityAssurance";
import { InfrastructureSection } from "@/components/sections/InfrastructureSection";
import { ExportMarkets } from "@/components/sections/ExportMarkets";
import { ClientStrip } from "@/components/sections/ClientStrip";
import { GalleryMasonry } from "@/components/sections/GalleryMasonry";
import { CompanyVideo } from "@/components/sections/CompanyVideo";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { NewsSection } from "@/components/sections/NewsSection";
import { CTABand } from "@/components/sections/CTABand";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Pako Engineers | Precision Machining & Export Manufacturer",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <AboutSplit />
      <LeadershipSection />
      <WhyChooseUs />
      <CapabilitiesSection />
      <ProductOverview />

      <ProcessTimeline />
      <MaterialsSection />
      <QualityAssurance />
      <InfrastructureSection />
      <ExportMarkets />
      <ClientStrip />
      <GalleryMasonry />
      <CompanyVideo />
      <TestimonialsSection />
      <NewsSection />
      <CTABand />
      <ContactSection />
    </>
  );
}
