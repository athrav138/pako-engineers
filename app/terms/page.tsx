import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms of use for the Pako Engineers website.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Terms"
        title="Website terms"
        description="Product details and capacity ranges are provided for buyer evaluation and are confirmed during quotation."
      />
      <section className="py-20 md:py-28">
        <Container className="max-w-3xl space-y-4 text-sm leading-relaxed text-muted">
          <p>
            Website content is based on supplied company documents and is intended for general business evaluation. Final technical suitability, tolerances, inspection requirements, delivery timelines and commercial terms are confirmed in writing during quotation.
          </p>
          <p>
            Client names are shown as business references from supplied profile material. Logo and testimonial usage remains subject to written permission from each company.
          </p>
        </Container>
      </section>
    </>
  );
}
