import type { Metadata } from "next";
import { Building2 } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ExportMarkets } from "@/components/sections/ExportMarkets";
import { CTABand } from "@/components/sections/CTABand";
import { clients } from "@/lib/content/company";

export const metadata: Metadata = {
  title: "Global Clients",
  description:
    "Pako Engineers supplies precision-machined components to Flowserve, EBARA Machinery, TMEIC, Valmet and DMW Corporation, exporting to 12 countries.",
  alternates: { canonical: "/clients" },
};

export default function ClientsPage() {
  return (
    <>
      <PageHero
        eyebrow="Global Clients"
        title="Supplying precision components to global pump OEMs"
        description="Long-standing relationships with international manufacturers, built on consistent quality and export reliability."
      />

      <section className="py-20 md:py-28">
        <Container>
          <SectionHeading eyebrow="Client Relationships" title="Who we work with" />

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {clients.map((client) => (
              <div
                key={client.name}
                className="rounded-lg border border-line bg-white p-6 shadow-card"
              >
                <div className="flex items-center gap-2">
                  <Building2 size={20} className="text-oxide" />
                  <h3 className="font-display text-lg font-semibold text-navy">
                    {client.name}
                  </h3>
                </div>
                {client.contacts.length > 0 && (
                  <ul className="mt-4 space-y-1.5">
                    {client.contacts.map((contact) => (
                      <li key={contact} className="text-sm text-muted">
                        {contact}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          <p className="mt-8 text-xs text-muted">
            Client names and contacts listed with reference to prior factory
            visits and engagements. Logo usage is subject to written
            permission from each company — see the project specification
            document for the content checklist.
          </p>
        </Container>
      </section>

      <div className="border-t border-line">
        <ExportMarkets />
      </div>

      <CTABand />
    </>
  );
}
