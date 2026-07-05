import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { company } from "@/lib/content/company";

export const metadata: Metadata = {
  title: "CSR",
  description: "CSR information for Pako Engineers.",
  alternates: { canonical: "/csr" },
};

export default function CSRPage() {
  return (
    <>
      <PageHero
        eyebrow="CSR"
        title="Responsibility information"
        description="The uploaded company documents focus on manufacturing capability, quality, clients and export markets; they do not contain a separate CSR programme statement."
      />
      <section className="py-20 md:py-28">
        <Container>
          <div className="rounded-lg border border-line bg-surface p-8 text-sm leading-relaxed text-muted">
            For verified CSR, community or sustainability information, contact Pako Engineers at{" "}
            <a href={`mailto:${company.contact.email}`} className="font-semibold text-navy hover:text-oxide">
              {company.contact.email}
            </a>
            .
          </div>
        </Container>
      </section>
    </>
  );
}
