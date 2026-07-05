import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { company, clients, materials } from "@/lib/content/company";

export const metadata: Metadata = {
  title: "Company Profile",
  description: "Verified company profile for Pako Engineers, Sangli.",
  alternates: { canonical: "/company-profile" },
};

export default function CompanyProfilePage() {
  const rows = [
    ["Legal / trading name", company.legalName],
    ["Established", String(company.founded)],
    ["Certification", company.certification],
    ["Registered works", company.address.full],
    ["Leadership", company.leadership.map((p) => `${p.name}, ${p.role}`).join(" | ")],
    ["Workforce", `${company.workforce.total} total team members`],
    ["Core activity", company.profile.activity],
    ["Materials handled", materials.join(", ")],
    ["Key clients", clients.map((client) => client.name).join(", ")],
    ["Export markets", company.exportCountries.join(", ")],
  ];

  return (
    <>
      <PageHero
        eyebrow="Company Profile"
        title="Pako Engineers at a glance"
        description={company.profile.positioning}
      />
      <section className="py-20 md:py-28">
        <Container>
          <div className="overflow-hidden rounded-lg border border-line">
            <table className="w-full border-collapse text-left text-sm">
              <tbody>
                {rows.map(([label, value], index) => (
                  <tr key={label} className={index % 2 === 0 ? "bg-white" : "bg-surface"}>
                    <th className="w-64 px-6 py-4 font-semibold text-navy">{label}</th>
                    <td className="px-6 py-4 text-muted">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>
    </>
  );
}
