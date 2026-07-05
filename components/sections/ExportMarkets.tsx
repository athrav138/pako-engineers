import { Globe2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { company } from "@/lib/content/company";

export function ExportMarkets() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <SectionHeading
            eyebrow="Global Reach"
            title="Exporting precision components to 12 countries"
            description="From Sangli, Maharashtra, Pako Engineers ships to pump OEMs and industrial manufacturers across Asia, Europe, the Middle East and North America."
          />
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {company.exportCountries.map((country) => (
              <div
                key={country}
                className="flex items-center gap-2 rounded border border-line bg-white px-4 py-3 text-sm font-medium text-ink"
              >
                <Globe2 size={16} className="shrink-0 text-oxide" />
                {country}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
