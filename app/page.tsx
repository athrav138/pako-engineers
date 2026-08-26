import type { Metadata } from "next";
import { HomeHero } from "@/components/sections/HomeHero";
import { AboutSplit } from "@/components/sections/AboutSplit";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { ClientStrip } from "@/components/sections/ClientStrip";
import { CTABand } from "@/components/sections/CTABand";
import { ContactSection } from "@/components/sections/ContactSection";
import { LeadershipSection } from "@/components/sections/LeadershipSection";
import { ProductOverview } from "@/components/sections/ProductOverview";

export const metadata: Metadata = {
  title: "Pako Engineers | Precision Machining & Export Manufacturer",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <AboutSplit />
      <ProductOverview />
      <LeadershipSection variant="large" />
      <ProcessTimeline />
      <ClientStrip />
      <CTABand />
      <ContactSection />
    </>
  );
}
