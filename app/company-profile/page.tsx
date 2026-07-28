import type { Metadata } from "next";
import Image from "next/image";
import { FileText, Download, CheckCircle, ArrowRight, Users, Award, MapPin, Factory, Globe, Cog } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { StatsSection } from "@/components/sections/StatsSection";
import { CTABand } from "@/components/sections/CTABand";
import { RelatedPages } from "@/components/sections/RelatedPages";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { company, materials, clients, machiningCapacity, equipment, industries } from "@/lib/content/company";

import { Images } from "@/lib/images";
export const metadata: Metadata = {
  title: "Company Profile | Pako Engineers – Manufacturer & Exporter Since 1994",
  description: "Comprehensive company profile of Pako Engineers: ISO 9001:2015 certified, 47-member team, exporting precision machined components to 12+ countries.",
  alternates: { canonical: "/company-profile" },
  openGraph: {
    title: "Pako Engineers – Company Profile",
    description: "ISO 9001:2015 manufacturer and exporter of precision machined pump components. View our complete corporate fact sheet.",
    url: "https://pakoshaft.com/company-profile",
    type: "profile",
  },
};

export default function CompanyProfilePage() {
  const profileData = [
    { label: "Legal / Trading Name", value: company.legalName, icon: FileText },
    { label: "Year Established", value: String(company.founded), icon: Award },
    { label: "Certification", value: company.certification, icon: Award },
    { label: "Core Activity", value: company.profile.activity, icon: Factory },
    { label: "Registered Works", value: company.address.full, icon: MapPin },
    { label: "Total Workforce", value: `${company.workforce.total} members`, icon: Users },
    { label: "Materials Handled", value: materials.join(", "), icon: Cog },
    { label: "Key Clients", value: clients.map((c) => c.name).join(", "), icon: Globe },
    { label: "Export Markets", value: company.exportCountries.join(", "), icon: Globe },
  ];

  const competencies = [
    "Precision Machining of Large Shafts (up to 14,000 mm length, 1500 mm diameter)",
    "Complex Key-way and Spline Machining using VMC and Wire-Cut EDM",
    "Close-tolerance CNC Grinding — Internal and External (down to 1 micron)",
    "Pump Assembly, Static Balancing, and Rotor Build-up",
    "Complete Material Traceability with EN 10204 3.1 Certificates",
    "NDT Inspection — DPT, PMI, Ultrasonic Testing, and Radiography",
    "Export Packaging, Fumigation, and Global Logistics Coordination",
    "Custom Gear Manufacturing and Thread Cutting (metric and imperial)",
  ];

  const milestones = [
    { year: "1994", event: "Company established in Sangli, Maharashtra" },
    { year: "1998", event: "Added heavy-duty conventional lathes and grinding machines" },
    { year: "2002", event: "First export order — precision pump shafts to Japan" },
    { year: "2010", event: "ISO 9001 certification achieved" },
    { year: "2015", event: "Upgraded to ISO 9001:2015 quality management system" },
    { year: "2018", event: "Major infrastructure expansion with climate-controlled QA lab" },
    { year: "2024", event: "Multi-axis VMC and heavy-duty CNC turning integration" },
  ];

  return (
    <>
      <PageHero
        eyebrow="Company Profile"
        title="Pako Engineers at a Glance"
        description={company.profile.positioning}
        backgroundImage={Images.assets.shaftMachiningLathe.src}
      >
        <div className="mt-8">
          <Button href="#download" variant="glass">
            <Download size={16} className="mr-2" /> Download Profile PDF
          </Button>
        </div>
      </PageHero>

      <Breadcrumb items={[{ label: "Company", href: "/about" }, { label: "Company Profile", href: "/company-profile" }]} />

      {/* ═══ BUSINESS OVERVIEW ═══ */}
      <section className="py-20 lg:py-28 bg-white">
        <Container>
          <div className="grid gap-16 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <p className="mb-4 font-mono text-sm font-semibold uppercase tracking-wider text-oxide">Business Overview</p>
              <h2 className="font-display text-3xl font-bold text-navy mb-6">Who We Are</h2>
              <div className="space-y-4 text-lg leading-relaxed text-ink-muted">
                <p>
                  Pako Engineers is a precision machining company headquartered in Sangli, Maharashtra, India. Established in {company.founded}, the company has grown into a trusted OEM supplier serving global pump manufacturers and rotating equipment companies.
                </p>
                <p>
                  {company.profile.facility}
                </p>
                <p>
                  The organization is structured for lean, efficient output with a workforce of {company.workforce.total} professionals spanning engineering, quality control, CNC programming, skilled machining, and dispatch operations. Every component produced is backed by material test certificates, dimensional inspection reports, and NDT documentation as required.
                </p>
              </div>

              {/* Leadership */}
              <div className="mt-12">
                <h3 className="font-display text-2xl font-bold text-navy mb-6">Leadership</h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  {company.leadership.map((leader) => (
                    <div key={leader.name} className="flex items-start gap-4 rounded-xl border border-line bg-surface p-5">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-navy text-white font-bold">
                        {leader.name.split(" ").slice(-1)[0]?.[0] ?? "P"}
                      </div>
                      <div>
                        <p className="font-bold text-navy">{leader.name}</p>
                        <p className="text-sm text-oxide">{leader.role}</p>
                        <a href={`tel:${leader.phone}`} className="text-xs text-ink-muted hover:text-navy">{leader.phone}</a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Workforce Breakdown */}
              <div className="mt-12">
                <h3 className="font-display text-2xl font-bold text-navy mb-6">Organization Structure</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {company.workforce.breakdown.map((item) => (
                    <div key={item.role} className="rounded-lg border border-line bg-white p-4 text-center shadow-sm">
                      <p className="font-mono text-2xl font-bold text-navy">{item.count}</p>
                      <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-ink-muted">{item.role}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div id="download" className="bg-navy text-white p-8 rounded-xl shadow-lg relative overflow-hidden">
                <div className="absolute -right-6 -top-6 opacity-10 pointer-events-none">
                  <FileText size={140} />
                </div>
                <h3 className="font-display text-xl font-bold mb-3 relative z-10">Download Profile</h3>
                <p className="text-white/70 text-sm mb-6 relative z-10">
                  Get a comprehensive PDF of our machine list, testing facilities, client references, and manufacturing capacity.
                </p>
                <button className="w-full bg-oxide hover:bg-[#E64A19] text-white font-bold py-3 px-4 rounded flex items-center justify-center gap-2 transition-colors relative z-10">
                  <Download size={18} /> Download PDF
                </button>
              </div>

              <div className="bg-white p-8 rounded-xl border border-line shadow-sm">
                <h3 className="font-display text-lg font-bold text-navy mb-4">Quality Policy</h3>
                <p className="text-sm text-ink-muted leading-relaxed italic border-l-4 border-oxide pl-4">
                  &ldquo;To manufacture and supply precision machined components that consistently meet or exceed customer expectations through continuous improvement, investment in technology, and strict adherence to our quality management system.&rdquo;
                </p>
              </div>

              <div className="bg-surface p-6 rounded-xl border border-line">
                <h3 className="font-display text-lg font-bold text-navy mb-4">Industries Served</h3>
                <div className="flex flex-wrap gap-2">
                  {industries.map((ind) => (
                    <span key={ind} className="rounded-full bg-white border border-line px-3 py-1 text-xs font-semibold text-navy">{ind}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ═══ CORPORATE DETAILS TABLE ═══ */}
      <section className="py-20 bg-background-light border-y border-line">
        <Container>
          <h2 className="font-display text-3xl font-bold text-navy mb-8">Corporate Fact Sheet</h2>
          <div className="overflow-hidden rounded-xl border border-line bg-white shadow-sm">
            <table className="w-full border-collapse text-left text-sm">
              <tbody>
                {profileData.map(({ label, value, icon: Icon }, index) => (
                  <tr key={label} className={index % 2 === 0 ? "bg-white" : "bg-surface"}>
                    <th className="w-1/3 px-6 py-5 font-semibold text-navy align-top border-r border-line">
                      <span className="flex items-center gap-2">
                        <Icon size={16} className="text-oxide shrink-0" />
                        {label}
                      </span>
                    </th>
                    <td className="px-6 py-5 text-ink-muted leading-relaxed">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      {/* ═══ CORE COMPETENCIES ═══ */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 items-start">
            <div>
              <p className="mb-4 font-mono text-sm font-semibold uppercase tracking-wider text-oxide">Capabilities</p>
              <h2 className="font-display text-3xl font-bold text-navy mb-6">Core Competencies</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {competencies.map((comp, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-surface p-4 rounded-lg border border-line">
                    <CheckCircle className="text-oxide shrink-0 mt-0.5" size={18} />
                    <span className="text-sm font-medium text-ink-muted leading-relaxed">{comp}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-display text-2xl font-bold text-navy mb-6">Company Milestones</h3>
              <div className="space-y-4">
                {milestones.map((m) => (
                  <div key={m.year} className="flex gap-4 items-start">
                    <span className="shrink-0 inline-flex items-center justify-center h-8 w-16 rounded bg-navy text-white font-mono text-xs font-bold">{m.year}</span>
                    <p className="text-sm text-ink-muted leading-relaxed pt-1">{m.event}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ═══ MACHINING CAPACITY TABLE ═══ */}
      <section className="py-20 bg-navy text-white">
        <Container>
          <h2 className="font-display text-3xl font-bold mb-8">Manufacturing Capacity Overview</h2>
          <div className="overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full border-collapse text-left text-sm">
              <thead>
                <tr className="bg-white/10">
                  <th className="px-6 py-4 font-semibold uppercase tracking-wider text-xs text-white/70">Process</th>
                  <th className="px-6 py-4 font-semibold uppercase tracking-wider text-xs text-white/70">Capacity / Range</th>
                </tr>
              </thead>
              <tbody>
                {machiningCapacity.map((cap, i) => (
                  <tr key={cap.process} className={i % 2 === 0 ? "bg-white/5" : ""}>
                    <td className="px-6 py-4 font-semibold text-white">{cap.process}</td>
                    <td className="px-6 py-4 text-white/70">{cap.range}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-sm text-white/50">
            Equipment includes: {equipment.join(" • ")}
          </p>
        </Container>
      </section>

      <CTABand />
      <RelatedPages />
    </>
  );
}
