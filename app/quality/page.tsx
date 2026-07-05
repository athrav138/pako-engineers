import type { Metadata } from "next";
import { ShieldCheck, FlaskConical, Gauge } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { CTABand } from "@/components/sections/CTABand";
import { company, inHouseTesting, outsourcedTesting } from "@/lib/content/company";

export const metadata: Metadata = {
  title: "Quality & Testing",
  description:
    "ISO 9001:2015-certified quality system with in-house hardness, surface and dye-penetrant testing, plus outsourced ultrasonic, metallurgical, radiography and PMI testing.",
  alternates: { canonical: "/quality" },
};

export default function QualityPage() {
  return (
    <>
      <PageHero
        eyebrow="Quality & Testing"
        title="Certified quality, verified at every stage"
        description={`Pako Engineers is certified to ${company.certification} and maintains both in-house and outsourced testing to confirm every component meets specification before dispatch.`}
      />

      <section className="py-20 md:py-28">
        <Container>
          <div className="mb-14 flex flex-col items-start gap-4 rounded-lg border border-line bg-surface p-8 sm:flex-row sm:items-center">
            <ShieldCheck size={40} className="shrink-0 text-oxide" />
            <div>
              <h3 className="font-display text-lg font-semibold text-navy">
                {company.certification} Certified
              </h3>
              <p className="mt-1 text-sm text-muted">
                Our quality management system is independently certified to
                ISO 9001:2015, covering manufacturing, inspection and export
                processes.
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <Card>
              <div className="flex items-center gap-2">
                <FlaskConical size={22} className="text-oxide" />
                <CardTitle>In-House Testing</CardTitle>
              </div>
              <ul className="mt-4 space-y-3">
                {inHouseTesting.map((test) => (
                  <li key={test} className="flex items-start gap-2 text-sm text-ink">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-oxide" />
                    {test}
                  </li>
                ))}
              </ul>
              <CardDescription>
                Performed on-site by our quality control team as part of every
                production run.
              </CardDescription>
            </Card>

            <Card>
              <div className="flex items-center gap-2">
                <Gauge size={22} className="text-oxide" />
                <CardTitle>Outsourced Testing</CardTitle>
              </div>
              <ul className="mt-4 space-y-3">
                {outsourcedTesting.map((test) => (
                  <li key={test} className="flex items-start gap-2 text-sm text-ink">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-oxide" />
                    {test}
                  </li>
                ))}
              </ul>
              <CardDescription>
                Conducted through accredited third-party laboratories for
                specifications requiring independent certification.
              </CardDescription>
            </Card>
          </div>

          <p className="mt-10 max-w-2xl text-sm leading-relaxed text-muted">
            Our production department is equipped with the measuring
            instrumentation required to verify dimensional accuracy throughout
            manufacturing, including calipers, micrometers and gauges.
          </p>
        </Container>
      </section>

      <CTABand
        title="Need a specific test certificate with your order?"
        description="Let us know your inspection and certification requirements when you submit your enquiry."
      />
    </>
  );
}
