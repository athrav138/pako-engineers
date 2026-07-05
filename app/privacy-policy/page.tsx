import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { company } from "@/lib/content/company";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Pako Engineers website enquiries.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy Policy"
        title="How enquiry information is handled"
        description="This website collects only the information needed to respond to business enquiries and RFQs."
      />
      <section className="py-20 md:py-28">
        <Container className="prose max-w-3xl text-sm leading-relaxed text-muted">
          <p>
            Pako Engineers uses contact, company, country, product, material, quantity, message and uploaded drawing information to evaluate enquiries and respond to potential customers.
          </p>
          <p>
            Uploaded drawings and specifications are treated as business enquiry material and are used for capability review, quotation and follow-up communication.
          </p>
          <p>
            To request correction or deletion of enquiry information, contact{" "}
            <a href={`mailto:${company.contact.email}`}>{company.contact.email}</a>.
          </p>
        </Container>
      </section>
    </>
  );
}
