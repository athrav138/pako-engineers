import type { Metadata } from "next";
import { MultiStepRFQ } from "@/components/forms/MultiStepRFQ";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";

import { Images } from "@/lib/images";
export const metadata: Metadata = {
  title: "Request for Quotation | Pako Engineers",
  description: "Submit your drawing and requirements for a precision manufacturing quotation. We respond within 24 hours.",
  alternates: { canonical: "/request-quote" },
  openGraph: {
    images: [{ url: Images.assets.precisionQualityInspection.src, width: 1200, height: 630 }],
  },
};

export default function RequestQuotePage() {
  return (
    <>
      <PageHero
        eyebrow="RFQ"
        title="Request for Quotation"
        description="Submit your technical requirements and drawings. Our engineering team will review your specifications and provide a detailed manufacturing proposal within 24 hours."
        backgroundImage={Images.assets.precisionQualityInspection.src}
      />

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
