import type { Metadata } from "next";
import { CompanyHero } from "@/components/sections/CompanyHero";
import { TimelineSection } from "@/components/sections/TimelineSection";
import { AboutSplit } from "@/components/sections/AboutSplit";
import { MissionVision } from "@/components/sections/MissionVision";
import { CoreValues } from "@/components/sections/CoreValues";
import { StatsBand } from "@/components/sections/StatsBand";
import { LeadershipSection } from "@/components/sections/LeadershipSection";
import { InfrastructureSection } from "@/components/sections/InfrastructureSection";
import { ExportMarkets } from "@/components/sections/ExportMarkets";
import { CTABand } from "@/components/sections/CTABand";

export const metadata: Metadata = {
  title: "Company Overview | Pako Engineers",
  description: "Learn about Pako Engineers, a premier manufacturer of precision machined components and pump assemblies with over 30 years of global export experience.",
  alternates: { canonical: "/company" },
};

const breadcrumbsSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://pakoshaft.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Company",
      "item": "https://pakoshaft.com/company"
    }
  ]
};

export default function CompanyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsSchema) }}
      />
      <CompanyHero />
      <TimelineSection />
      <AboutSplit />
      <MissionVision />
      <CoreValues />
      <StatsBand />
      <LeadershipSection />
      <InfrastructureSection />
      <ExportMarkets />
      <CTABand />
    </>
  );
}
