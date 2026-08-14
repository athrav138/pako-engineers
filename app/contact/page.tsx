import type { Metadata } from "next";
import { MapPin, Phone, Mail, MessageCircle, Clock } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/forms/ContactForm";
import { company } from "@/lib/content/company";

import { Images } from "@/lib/images";
export const metadata: Metadata = {
  title: "Contact & Request a Quote",
  description:
    "Send your drawing or specification to Pako Engineers for a capability confirmation and quote.",
  alternates: { canonical: "/contact" },
  openGraph: {
    images: [{ url: Images.assets.factoryBuildingExterior.src, width: 1200, height: 630 }],
  },
};

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ product?: string }>;
}) {
  const params = await searchParams;

  return (
    <>
      <PageHero
        eyebrow="Contact / RFQ"
        title="Request a quote"
        description="Send your specification, diameter, length, material, tolerance and drawing file, and Pako Engineers will confirm capability and lead time."
        backgroundImage={Images.assets.factoryBuildingExterior.src}
      />

      <section className="py-20 md:py-28">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div className="flex flex-col gap-6">
            <div className="rounded-lg border border-line bg-white p-6 shadow-card">
              <h3 className="font-display text-base font-semibold text-navy">
                Registered Works
              </h3>
              <div className="mt-4 flex items-start gap-3 text-sm text-muted">
                <MapPin size={18} className="mt-0.5 shrink-0 text-oxide" />
                {company.address.full}
              </div>
            </div>

            <div className="rounded-lg border border-line bg-white p-6 shadow-card">
              <h3 className="font-display text-base font-semibold text-navy">
                Direct Contact
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-muted">
                {company.leadership.map((person) => (
                  <li key={person.name} className="flex items-start gap-3">
                    <Phone size={18} className="mt-0.5 shrink-0 text-oxide" />
                    <span>
                      {person.name} ({person.role}) -{" "}
                      <a href={`tel:${person.phone.replaceAll("-", "")}`} className="text-navy hover:text-oxide">
                        {person.phone}
                      </a>
                    </span>
                  </li>
                ))}
                <li className="flex items-start gap-3">
                  <Mail size={18} className="mt-0.5 shrink-0 text-oxide" />
                  <a href={`mailto:${company.contact.email}`} className="text-navy hover:text-oxide">
                    {company.contact.email}
                  </a>
                </li>
              </ul>
            </div>

            <div className="rounded-lg border border-line bg-white p-6 shadow-card">
              <h3 className="font-display text-base font-semibold text-navy">
                Sales Phone
              </h3>
              <div className="mt-4 flex items-start gap-3 text-sm text-muted">
                <Phone size={18} className="mt-0.5 shrink-0 text-oxide" />
                <span>
                  <a href={`tel:${company.contact.phone}`} className="text-navy hover:text-oxide">
                    {company.contact.phone}
                  </a>
                  {" · "}
                  <a href={`mailto:${company.contact.email}`} className="text-navy hover:text-oxide">
                    {company.contact.email}
                  </a>
                </span>
              </div>
            </div>

            <div id="hours" className="rounded-lg border border-line bg-white p-6 shadow-card">
              <h3 className="font-display text-base font-semibold text-navy">
                Business Hours
              </h3>
              <div className="mt-4 flex items-start gap-3 text-sm text-muted">
                <Clock size={18} className="mt-0.5 shrink-0 text-oxide" />
                <div>
                  <p>{company.businessHours.open}</p>
                  <p className="mt-1">{company.businessHours.closed} — Closed</p>
                </div>
              </div>
            </div>

            <a
              href={`https://wa.me/${company.contact.whatsapp.replace("+", "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-lg border border-line bg-surface p-4 text-sm font-medium text-navy transition-colors hover:bg-navy hover:text-white"
            >
              <MessageCircle size={18} />
              Chat on WhatsApp
            </a>

            <div id="map" className="overflow-hidden rounded-lg border border-line">
              <iframe
                title="Pako Engineers location map"
                width="100%"
                height="220"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps?q=${encodeURIComponent(
                  company.contact.mapQuery
                )}&output=embed`}
              />
            </div>
          </div>

          <ContactForm />
        </Container>
      </section>
    </>
  );
}
