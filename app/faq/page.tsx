import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { CTABand } from "@/components/sections/CTABand";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about Pako Engineers products, materials, capacity and RFQ process.",
  alternates: { canonical: "/faq" },
};

const faqs = [
  {
    question: "What does Pako Engineers manufacture?",
    answer:
      "Pako Engineers manufactures and exports shafts, sleeves, couplings, lock nuts, pump parts, accessories, retainer rings, Thordon bearing components and gears as per customer requirements.",
  },
  {
    question: "Which materials are handled?",
    answer:
      "The verified profile lists stainless steel, duplex, super duplex, Nitronic 50, EN-series steels, K-Monel 400/500, and bush materials including gunmetal, Feroform F363, neoprene rubber, RG12 and Thordon.",
  },
  {
    question: "What is the maximum machining capacity?",
    answer:
      "Turning capacity is listed as 50 mm to 1500 mm diameter up to 14,000 mm length. Grinding capacity is listed as 50 mm to 800 mm diameter up to 6,500 mm length.",
  },
  {
    question: "Is Pako Engineers certified?",
    answer: "Yes. The supplied company profile and website specification identify Pako Engineers as ISO 9001:2015 certified.",
  },
  {
    question: "Which files can be attached to an RFQ?",
    answer: "The RFQ form accepts PDF, DWG, JPG and PNG files up to 10MB.",
  },
];

export default function FAQPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Answers for procurement and technical buyers"
        description="Quick reference for capabilities, materials, certification and quote submission."
      />
      <section className="py-20 md:py-28">
        <Container className="space-y-4">
          {faqs.map((faq) => (
            <details key={faq.question} className="rounded-lg border border-line bg-white p-6 shadow-card">
              <summary className="cursor-pointer font-display text-lg font-semibold text-navy">
                {faq.question}
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted">{faq.answer}</p>
            </details>
          ))}
        </Container>
      </section>
      <CTABand />
    </>
  );
}
