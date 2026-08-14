import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { FileText, AlertCircle, CheckCircle, Scale } from "lucide-react";
import { company } from "@/lib/content/company";

export const metadata: Metadata = {
  title: "Terms & Conditions | Pako Engineers",
  description: "Terms and conditions for using the Pako Engineers website and submitting business enquiries.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Terms & Conditions"
        title="Website Usage Terms"
        description="Please read these terms carefully before using our website or submitting business enquiries."
      />
      <section className="py-20 md:py-28">
        <Container className="max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <div className="bg-surface border border-line rounded-xl p-8 mb-12">
              <p className="text-ink leading-relaxed mb-4">
                <strong>Last Updated:</strong> August 2025
              </p>
              <p className="text-ink leading-relaxed">
                These Terms and Conditions govern your use of the Pako Engineers website and the submission of business enquiries, RFQs, and contact forms. By accessing our website or submitting information, you agree to these terms.
              </p>
            </div>

            <div className="space-y-12">
              <section>
                <h2 className="flex items-center gap-3 text-2xl font-bold text-navy mb-6">
                  <FileText className="text-oxide" size={28} />
                  Information Accuracy
                </h2>
                <div className="bg-white border border-line rounded-lg p-6">
                  <p className="text-ink mb-4">
                    Website content, including product specifications, capacity ranges, and technical details, is based on supplied company documentation and is intended for general business evaluation purposes only.
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-ink">
                    <li>Final technical suitability is confirmed during quotation</li>
                    <li>Tolerances and inspection requirements are specified in formal quotations</li>
                    <li>Delivery timelines are confirmed based on current production capacity</li>
                    <li>Commercial terms are agreed upon in writing before order confirmation</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="flex items-center gap-3 text-2xl font-bold text-navy mb-6">
                  <AlertCircle className="text-oxide" size={28} />
                  Intellectual Property
                </h2>
                <div className="bg-white border border-line rounded-lg p-6">
                  <p className="text-ink mb-4">
                    All content on this website, including text, images, technical drawings, and specifications, is the property of Pako Engineers or our partners and is protected by intellectual property laws.
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-ink">
                    <li>Client names shown as business references from supplied profile material</li>
                    <li>Logo and testimonial usage subject to written permission from each company</li>
                    <li>Technical drawings and specifications remain confidential</li>
                    <li>Unauthorized reproduction or distribution is prohibited</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="flex items-center gap-3 text-2xl font-bold text-navy mb-6">
                  <CheckCircle className="text-oxide" size={28} />
                  Enquiry Submissions
                </h2>
                <div className="bg-white border border-line rounded-lg p-6">
                  <p className="text-ink mb-4">
                    When you submit enquiries or RFQs through our website:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-ink">
                    <li>You agree to provide accurate and complete information</li>
                    <li>Submitted drawings and specifications are treated as confidential business material</li>
                    <li>We use information solely for capability review, quotation, and follow-up communication</li>
                    <li>You authorize us to contact you regarding your enquiry</li>
                    <li>No binding contract is created until formal order confirmation</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="flex items-center gap-3 text-2xl font-bold text-navy mb-6">
                  <Scale className="text-oxide" size={28} />
                  Limitation of Liability
                </h2>
                <div className="bg-white border border-line rounded-lg p-6">
                  <p className="text-ink mb-4">
                    Pako Engineers shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use of this website or the information contained herein.
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-ink">
                    <li>Technical specifications are subject to change without notice</li>
                    <li>We reserve the right to modify website content at any time</li>
                    <li>Product availability is subject to current production capacity</li>
                    <li>All business transactions are governed by formal contracts</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="flex items-center gap-3 text-2xl font-bold text-navy mb-6">
                  <FileText className="text-oxide" size={28} />
                  Governing Law
                </h2>
                <div className="bg-white border border-line rounded-lg p-6">
                  <p className="text-ink">
                    These terms and conditions are governed by the laws of India. Any disputes arising from the use of this website shall be subject to the exclusive jurisdiction of the courts in Sangli, Maharashtra, India.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="flex items-center gap-3 text-2xl font-bold text-navy mb-6">
                  <CheckCircle className="text-oxide" size={28} />
                  Contact Information
                </h2>
                <div className="bg-surface border border-line rounded-lg p-6">
                  <p className="text-ink mb-4">
                    For questions about these terms and conditions, please contact us:
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
