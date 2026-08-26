import type { Metadata } from "next";
import { Cog, Ruler } from "lucide-react";
import { CapabilitiesSection } from "@/components/sections/CapabilitiesSection";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTABand } from "@/components/sections/CTABand";
import { machiningCapacity, equipment, materials, bushMaterials } from "@/lib/content/company";

export const metadata: Metadata = {
  title: "Manufacturing Capabilities",
  description:
    "Turning up to 500 mm diameter and 6 metres length, grinding, CNC lathe and custom gear manufacturing at Pako Engineers, Sangli.",
  alternates: { canonical: "/capabilities" },
};

export default function CapabilitiesPage() {
  return (
    <>
      <CapabilitiesSection pageMode />

      <section className="py-20 md:py-28">
        <Container>
          <SectionHeading
            eyebrow="Machining Capacity"
            title="Process ranges"
            description="Capacity figures below cover the primary machining and grinding processes used across our product range."
          />

          <div className="mt-10 overflow-hidden rounded-lg border border-line">
            <table className="w-full border-collapse text-left text-sm">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="px-6 py-4 font-semibold">Process</th>
                  <th className="px-6 py-4 font-semibold">Capacity</th>
                </tr>
              </thead>
              <tbody>
                {machiningCapacity.map((row, i) => (
                  <tr
                    key={row.process}
                    className={i % 2 === 0 ? "bg-white" : "bg-surface"}
                  >
                    <td className="px-6 py-4 font-medium text-ink">{row.process}</td>
                    <td className="px-6 py-4 text-muted">{row.range}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      <section className="border-t border-line bg-surface py-20 md:py-28">
        <Container className="grid gap-12 md:grid-cols-2">
          <div>
            <h3 className="flex items-center gap-2 font-display text-xl font-semibold text-navy">
              <Cog size={22} className="text-oxide" /> Equipment
            </h3>
            <ul className="mt-5 space-y-3">
              {equipment.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-ink">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-oxide" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-relaxed text-muted">
              Custom gears are manufactured to moderate ranges as per customer
              requirement, for integration into broader rotating assemblies.
            </p>
          </div>

          <div>
            <h3 className="flex items-center gap-2 font-display text-xl font-semibold text-navy">
              <Ruler size={22} className="text-oxide" /> Materials of Construction
            </h3>
            <ul className="mt-5 space-y-3">
              {materials.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-ink">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-oxide" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-xs font-semibold uppercase tracking-wide text-muted">
              Bush &amp; bearing materials
            </p>
            <p className="mt-2 text-sm text-muted">{bushMaterials.join(", ")}</p>
          </div>
        </Container>
      </section>

      <CTABand />
    </>
  );
}
