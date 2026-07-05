import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { VerifiedGrid } from "@/components/sections/VerifiedGrid";
import { CTABand } from "@/components/sections/CTABand";
import { industries } from "@/lib/content/company";

export const metadata: Metadata = {
  title: "Industries Served",
  description: "Industries served by Pako Engineers precision machined components.",
  alternates: { canonical: "/industries" },
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Precision components for demanding industrial buyers"
        description="The supplied profile and website specification identify pump OEMs, oil and gas, marine, power and rotating equipment buyers as key fit sectors."
      />
      <section className="py-20 md:py-28">
        <VerifiedGrid items={industries} />
      </section>
      <CTABand />
    </>
  );
}
