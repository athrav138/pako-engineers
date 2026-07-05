import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { company } from "@/lib/content/company";

export const metadata: Metadata = {
  title: "Career",
  description: "Career information for Pako Engineers, Sangli.",
  alternates: { canonical: "/career" },
};

export default function CareerPage() {
  return (
    <>
      <PageHero
        eyebrow="Career"
        title="Build precision manufacturing capability in Sangli"
        description={`Pako Engineers operates with a ${company.workforce.total}-person team across engineering, quality, programming, skilled machining, semi-skilled machining and support roles.`}
      />
      <section className="py-20 md:py-28">
        <Container>
          <div className="rounded-lg border border-line bg-white p-8 shadow-card">
            <h2 className="font-display text-2xl font-semibold text-navy">Current hiring information</h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted">
              The supplied project documents do not list specific open positions. Candidates with experience in machining, grinding, CNC programming, quality control or industrial manufacturing can contact Pako Engineers directly with their profile.
            </p>
            <a href={`mailto:${company.contact.email}`} className="mt-6 inline-flex rounded bg-oxide px-5 py-3 text-sm font-semibold text-white hover:bg-oxide-dark">
              Email your profile
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
