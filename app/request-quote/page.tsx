import type { Metadata } from "next";
import { MultiStepRFQ } from "@/components/forms/MultiStepRFQ";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Request for Quotation | Pako Engineers",
  description: "Submit your drawing and requirements for a precision manufacturing quotation. We respond within 24 hours.",
  alternates: { canonical: "/request-quote" },
};

export default function RequestQuotePage() {
  return (
    <>
      <section className="bg-navy py-16 text-white md:py-24 lg:py-32">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 font-display text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Request for Quotation
            </h1>
            <p className="text-lg text-white/80">
              Submit your technical requirements and drawings. Our engineering team will review your specifications and provide a detailed manufacturing proposal within 24 hours.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-background-light py-20 lg:py-32">
        <Container>
          <div className="mx-auto max-w-4xl">
            <MultiStepRFQ />
          </div>
        </Container>
      </section>
    </>
  );
}
