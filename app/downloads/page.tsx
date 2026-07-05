import type { Metadata } from "next";
import { Download } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { downloads } from "@/lib/content/company";

export const metadata: Metadata = {
  title: "Downloads",
  description: "Download Pako Engineers company profile and website specification documents.",
  alternates: { canonical: "/downloads" },
};

export default function DownloadsPage() {
  return (
    <>
      <PageHero
        eyebrow="Downloads"
        title="Company documents"
        description="Download verified source documents supplied for the website build."
      />
      <section className="py-20 md:py-28">
        <Container className="grid gap-6 md:grid-cols-2">
          {downloads.map((item) => (
            <a
              key={item.href}
              href={item.href}
              download
              className="group rounded-lg border border-line bg-white p-6 shadow-card transition hover:-translate-y-1 hover:shadow-raised"
            >
              <Download className="text-oxide" size={24} />
              <h2 className="mt-4 font-display text-xl font-semibold text-navy">{item.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
              <p className="mt-5 text-sm font-semibold text-oxide">Download document</p>
            </a>
          ))}
        </Container>
      </section>
    </>
  );
}
