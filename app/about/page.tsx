import type { Metadata } from "next";
import { Users, Award, MapPin } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTABand } from "@/components/sections/CTABand";
import { company } from "@/lib/content/company";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Founded in 1994 and ISO 9001:2015 certified, Pako Engineers is a precision machining manufacturer based in Sangli, Maharashtra, India.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Pako Engineers"
        title={`Three decades of precision machining, based in Sangli`}
        description={`Founded in ${company.founded}, Pako Engineers has grown into a ${company.certification}-certified manufacturer trusted by pump OEMs across 12 export markets.`}
      />

      <section className="py-20 md:py-28">
        <Container>
          <div className="grid gap-16 md:grid-cols-2">
            <div>
              <SectionHeading eyebrow="Our Story" title="Founded on precision, built for export" />
              <p className="mt-6 text-base leading-relaxed text-muted">
                Pako Engineers was established in {company.founded} in Sangli,
                Maharashtra, with a focus on precision-machined shafts, sleeves,
                couplings and pump components. Over three decades, the company
                has built the in-house testing, grinding and CNC turning
                capability required to serve pump manufacturers and industrial
                OEMs across Asia, Europe, the Middle East and North America.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted">
                The company is certified to {company.certification} and
                operates from its facility at {company.address.full}, supported
                by a team of {company.workforce.total} across engineering,
                quality control, production and skilled machining.
              </p>
            </div>

            <div className="rounded-lg border border-line bg-surface p-8">
              <h3 className="flex items-center gap-2 font-display text-lg font-semibold text-navy">
                <Users size={20} className="text-oxide" /> Leadership
              </h3>
              <ul className="mt-4 space-y-4">
                {company.leadership.map((person) => (
                  <li key={person.name} className="border-b border-line pb-4 last:border-0 last:pb-0">
                    <p className="font-medium text-ink">{person.name}</p>
                    <p className="text-sm text-muted">{person.role}</p>
                  </li>
                ))}
              </ul>

              <h3 className="mt-8 flex items-center gap-2 font-display text-lg font-semibold text-navy">
                <Award size={20} className="text-oxide" /> Certification
              </h3>
              <p className="mt-2 text-sm text-muted">{company.certification}</p>

              <h3 className="mt-8 flex items-center gap-2 font-display text-lg font-semibold text-navy">
                <MapPin size={20} className="text-oxide" /> Facility
              </h3>
              <p className="mt-2 text-sm text-muted">{company.address.full}</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-line bg-surface py-20 md:py-28">
        <Container>
          <SectionHeading
            eyebrow="Our Team"
            title="A 47-person team spanning engineering to skilled machining"
            description="Organised across engineering, quality control, production programming, and skilled and semi-skilled machining roles."
          />
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {company.workforce.breakdown.map((item) => (
              <div key={item.role} className="rounded-lg border border-line bg-white p-5 text-center">
                <p className="font-mono text-3xl font-bold text-navy">{item.count}</p>
                <p className="mt-1 text-xs font-medium uppercase tracking-wide text-muted">
                  {item.role}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTABand />
    </>
  );
}
