import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { Cookie, Shield, Settings, CheckCircle } from "lucide-react";
import { company } from "@/lib/content/company";

export const metadata: Metadata = {
  title: "Cookie Policy | Pako Engineers",
  description: "Learn how Pako Engineers uses cookies and similar technologies on our website.",
  alternates: { canonical: "/cookie-policy" },
};

export default function CookiePolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Cookie Policy"
        title="How We Use Cookies"
        description="This policy explains how Pako Engineers uses cookies and similar technologies to enhance your browsing experience."
      />
      <section className="py-20 md:py-28">
        <Container className="max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <div className="bg-surface border border-line rounded-xl p-8 mb-12">
              <p className="text-ink leading-relaxed mb-4">
                <strong>Last Updated:</strong> August 2025
              </p>
              <p className="text-ink leading-relaxed">
                This Cookie Policy explains how Pako Engineers uses cookies and similar technologies on our website. By continuing to browse our site, you consent to our use of cookies in accordance with this policy.
              </p>
            </div>

            <div className="space-y-12">
              <section>
                <h2 className="flex items-center gap-3 text-2xl font-bold text-navy mb-6">
                  <Cookie className="text-oxide" size={28} />
                  What Are Cookies?
                </h2>
                <div className="bg-white border border-line rounded-lg p-6">
                  <p className="text-ink mb-4">
                    Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better experience by:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-ink">
                    <li>Remembering your preferences and settings</li>
                    <li>Understanding how you use our website</li>
                    <li>Improving our website performance and functionality</li>
                    <li>Providing personalized content and recommendations</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="flex items-center gap-3 text-2xl font-bold text-navy mb-6">
                  <Settings className="text-oxide" size={28} />
                  Types of Cookies We Use
                </h2>
                <div className="space-y-4">
                  <div className="bg-white border border-line rounded-lg p-6">
                    <h3 className="font-semibold text-navy mb-3">Essential Cookies</h3>
                    <p className="text-ink">
                      These cookies are necessary for the website to function properly. They enable basic functionality such as page navigation, access to secure areas, and form submissions. Without these cookies, the website cannot operate correctly.
                    </p>
                  </div>
                  <div className="bg-white border border-line rounded-lg p-6">
                    <h3 className="font-semibold text-navy mb-3">Analytics Cookies</h3>
                    <p className="text-ink">
                      These cookies help us understand how visitors interact with our website by collecting information about pages visited, time spent on pages, and error messages. This helps us improve the performance and user experience of our website.
                    </p>
                  </div>
                  <div className="bg-white border border-line rounded-lg p-6">
                    <h3 className="font-semibold text-navy mb-3">Functional Cookies</h3>
                    <p className="text-ink">
                      These cookies allow our website to remember choices you make and provide enhanced features, such as remembering your form data or language preferences.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="flex items-center gap-3 text-2xl font-bold text-navy mb-6">
                  <Shield className="text-oxide" size={28} />
                  How We Use Cookies
                </h2>
                <div className="bg-white border border-line rounded-lg p-6">
                  <p className="text-ink mb-4">We use cookies for the following purposes:</p>
                  <ul className="list-disc pl-6 space-y-2 text-ink">
                    <li><strong>Website Functionality:</strong> To ensure the website works correctly and efficiently</li>
                    <li><strong>Analytics:</strong> To analyze website traffic and usage patterns</li>
                    <li><strong>Form Submissions:</strong> To remember form data during multi-step processes</li>
                    <li><strong>Security:</strong> To detect and prevent fraudulent activity</li>
                    <li><strong>Preferences:</strong> To remember your settings and preferences</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="flex items-center gap-3 text-2xl font-bold text-navy mb-6">
                  <CheckCircle className="text-oxide" size={28} />
                  Managing Cookies
                </h2>
                <div className="bg-white border border-line rounded-lg p-6">
                  <p className="text-ink mb-4">
                    You have the right to decide whether to accept or reject cookies. You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website, though your access to some functionality and areas may be restricted.
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-ink">
                    <li>Most web browsers allow you to control cookies through their settings</li>
                    <li>You can delete existing cookies from your device at any time</li>
                    <li>Disabling cookies may affect the functionality of our website</li>
                    <li>Our website may not work properly without essential cookies</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="flex items-center gap-3 text-2xl font-bold text-navy mb-6">
                  <Cookie className="text-oxide" size={28} />
                  Third-Party Cookies
                </h2>
                <div className="bg-white border border-line rounded-lg p-6">
                  <p className="text-ink mb-4">
                    We may use third-party services that set cookies on your device. These third-party services include:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-ink">
                    <li><strong>Analytics Services:</strong> For website performance analysis</li>
                    <li><strong>Payment Processors:</strong> For secure payment processing (if applicable)</li>
                    <li><strong>Email Services:</strong> For form submission handling</li>
                  </ul>
                  <p className="text-ink mt-4">
                    These third parties have their own privacy policies and we encourage you to review them.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="flex items-center gap-3 text-2xl font-bold text-navy mb-6">
                  <Shield className="text-oxide" size={28} />
                  Updates to This Policy
                </h2>
                <div className="bg-white border border-line rounded-lg p-6">
                  <p className="text-ink">
                    We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We encourage you to review this policy periodically to stay informed about how we use cookies.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="flex items-center gap-3 text-2xl font-bold text-navy mb-6">
                  <CheckCircle className="text-oxide" size={28} />
                  Contact Us
                </h2>
                <div className="bg-surface border border-line rounded-lg p-6">
                  <p className="text-ink mb-4">
                    If you have any questions about our use of cookies, please contact us:
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