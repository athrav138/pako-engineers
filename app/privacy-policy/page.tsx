import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { company } from "@/lib/content/company";
import { Shield, Lock, Eye, Database, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Pako Engineers",
  description: "Learn how Pako Engineers protects your personal information and handles your business enquiries securely.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy Policy"
        title="Your Privacy Matters"
        description="We are committed to protecting your personal information and handling your business enquiries with the highest security standards."
      />
      <section className="py-20 md:py-28">
        <Container className="max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <div className="bg-surface border border-line rounded-xl p-8 mb-12">
              <p className="text-ink leading-relaxed mb-4">
                <strong>Last Updated:</strong> August 2025
              </p>
              <p className="text-ink leading-relaxed">
                This Privacy Policy explains how Pako Engineers collects, uses, and protects the information you provide through our website when submitting business enquiries, RFQs, or contacting our sales team.
              </p>
            </div>

            <div className="space-y-12">
              <section>
                <h2 className="flex items-center gap-3 text-2xl font-bold text-navy mb-6">
                  <Database className="text-oxide" size={28} />
                  Information We Collect
                </h2>
                <div className="bg-white border border-line rounded-lg p-6">
                  <h3 className="font-semibold text-navy mb-4">Contact Form Enquiries</h3>
                  <ul className="list-disc pl-6 space-y-2 text-ink">
                    <li>Name and contact information</li>
                    <li>Email address and phone number</li>
                    <li>Company name and country</li>
                    <li>Subject and message content</li>
                  </ul>
                </div>
                <div className="bg-white border border-line rounded-lg p-6 mt-4">
                  <h3 className="font-semibold text-navy mb-4">RFQ (Request for Quotation) Submissions</h3>
                  <ul className="list-disc pl-6 space-y-2 text-ink">
                    <li>Company and contact person details</li>
                    <li>Product specifications and requirements</li>
                    <li>Material grades and quantities</li>
                    <li>Technical drawings and specifications</li>
                    <li>Delivery requirements and project details</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="flex items-center gap-3 text-2xl font-bold text-navy mb-6">
                  <Eye className="text-oxide" size={28} />
                  How We Use Your Information
                </h2>
                <div className="bg-white border border-line rounded-lg p-6">
                  <p className="text-ink mb-4">We use the information you provide to:</p>
                  <ul className="list-disc pl-6 space-y-2 text-ink">
                    <li>Process and respond to your business enquiries</li>
                    <li>Prepare accurate quotations based on your specifications</li>
                    <li>Communicate about your project requirements</li>
                    <li>Provide technical assistance and product recommendations</li>
                    <li>Improve our services and customer experience</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="flex items-center gap-3 text-2xl font-bold text-navy mb-6">
                  <Lock className="text-oxide" size={28} />
                  Data Security
                </h2>
                <div className="bg-white border border-line rounded-lg p-6">
                  <p className="text-ink mb-4">We implement appropriate security measures to protect your information:</p>
                  <ul className="list-disc pl-6 space-y-2 text-ink">
                    <li>Secure HTTPS encryption for all data transmission</li>
                    <li>Protected database storage for enquiry records</li>
                    <li>Access controls and authentication systems</li>
                    <li>Regular security audits and updates</li>
                    <li>Safe handling of technical drawings and specifications</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="flex items-center gap-3 text-2xl font-bold text-navy mb-6">
                  <Mail className="text-oxide" size={28} />
                  Your Rights
                </h2>
                <div className="bg-white border border-line rounded-lg p-6">
                  <p className="text-ink mb-4">You have the right to:</p>
                  <ul className="list-disc pl-6 space-y-2 text-ink">
                    <li>Access the personal information we hold about you</li>
                    <li>Request correction of inaccurate information</li>
                    <li>Request deletion of your enquiry data</li>
                    <li>Opt-out of future communications</li>
                    <li>Withdraw consent at any time</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="flex items-center gap-3 text-2xl font-bold text-navy mb-6">
                  <Shield className="text-oxide" size={28} />
                  Contact Us
                </h2>
                <div className="bg-surface border border-line rounded-lg p-6">
                  <p className="text-ink mb-4">
                    For any privacy-related questions or to exercise your rights, please contact us:
                  </p>
                  <div className="space-y-2">
                    <p className="text-ink">
                      <strong>Email:</strong>{" "}
                      <a href={`mailto:${company.contact.email}`} className="text-oxide hover:underline">
                        {company.contact.email}
                      </a>
                    </p>
                    <p className="text-ink">
                      <strong>Phone:</strong>{" "}
                      <a href={`tel:${company.contact.phone}`} className="text-oxide hover:underline">
                        {company.contact.phone}
                      </a>
                    </p>
                    <p className="text-ink">
                      <strong>Address:</strong> {company.address.full}
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
