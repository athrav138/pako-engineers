import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { VerifiedGrid } from "@/components/sections/VerifiedGrid";
import { CTABand } from "@/components/sections/CTABand";
import { equipment } from "@/lib/content/company";

export const metadata: Metadata = {
  title: "Machines",
  description: "Machine and equipment list for Pako Engineers.",
  alternates: { canonical: "/machines" },
};

export default function MachinesPage() {
  return (
    <>
      <PageHero
        eyebrow="Machines"
        title="Equipment supporting precision machining capacity"
        description="The February 2026 profile identifies wire-cut, CNC grinding, CNC lathe and VMC key-way equipment as part of the manufacturing setup."
      />
      <section className="py-20 md:py-28">
        <VerifiedGrid items={equipment} columns="md:grid-cols-2" />
      </section>
      <CTABand />
    </>
  );
}
