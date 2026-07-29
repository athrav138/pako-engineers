import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { MissionVision } from "@/components/sections/MissionVision";
import { CoreValues } from "@/components/sections/CoreValues";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { IndustriesServed } from "@/components/sections/IndustriesServed";
import { WorldMap } from "@/components/sections/WorldMap";
import { StatsSection } from "@/components/sections/StatsSection";
import { CTABand } from "@/components/sections/CTABand";
import { RelatedPages } from "@/components/sections/RelatedPages";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { company } from "@/lib/content/company";

import { Images, absoluteImageUrl } from "@/lib/images";
export const metadata: Metadata = {
  title: "About Us | Pako Engineers – Precision Machined Components Since 1994",
  description:
    "Pako Engineers is an ISO 9001:2015 certified manufacturer and exporter of precision machined pump components, shafts, sleeves, and assemblies based in Sangli, Maharashtra. Serving global OEMs for 30+ years.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Pako Engineers – 30+ Years of Precision Manufacturing",
    description:
      "ISO 9001:2015 certified manufacturer and exporter of precision machined components and pump assemblies, serving OEMs across 12+ countries.",
    url: "https://pakoshaft.com/about",
    type: "website",
    images: [{ url: Images.assets.modernFactoryFloorOverview.src, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Pako Engineers – Precision Manufacturing Since 1994",
    description: "30+ years of engineering excellence. ISO 9001:2015 certified. Exporting to 12+ countries.",
  },
};

function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ManufacturingBusiness",
    name: company.name,
    legalName: company.legalName,
    foundingDate: String(company.founded),
    url: "https://pakoshaft.com",
    logo: absoluteImageUrl(Images.assets.logo),
    description: company.profile.positioning,
    address: {
      "@type": "PostalAddress",
      streetAddress: company.address.line1,
      addressLocality: "Sangli",
      addressRegion: "Maharashtra",
      postalCode: "416308",
      addressCountry: "IN",
    },
    telephone: company.contact.phone,
    email: company.contact.email,
    sameAs: [company.links.linkedin, company.links.indiaMart, company.links.exportersIndia],
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "ISO 9001:2015",
    },
    numberOfEmployees: { "@type": "QuantitativeValue", value: company.workforce.total },
    areaServed: company.exportCountries.map((c) => ({ "@type": "Country", name: c })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export default function AboutPage() {
  return (
    <>
      <OrganizationSchema />

      {/* ═══ HERO ═══ */}
      <PageHero
        eyebrow="About PAKO ENGINEERS"
        title="Engineering Precision. Delivering Excellence. Trusted Worldwide."
        description={`Over ${company.yearsInBusiness} years of manufacturing and exporting precision machined components and pump assemblies for leading OEMs across ${company.exportCountries.length} countries.`}
        backgroundImage={Images.assets.modernFactoryFloorOverview.src}
      >
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <Button href="/request-quote" className="bg-oxide hover:bg-[#E64A19] text-white">
            Request a Quote <ArrowRight size={16} className="ml-2" />
          </Button>
          <Button href="/company-profile" variant="glass">
            <Download size={16} className="mr-2" /> Company Profile
          </Button>
        </div>
      </PageHero>

      <Breadcrumb items={[{ label: "Company", href: "/company" }, { label: "About Us", href: "/about" }]} />

      {/* ═══ COMPANY OVERVIEW ═══ */}
      <section className="py-20 lg:py-28 bg-white">
        <Container>
          <div className="grid gap-16 lg:grid-cols-2 items-center">
            <div>
              <p className="mb-4 font-mono text-sm font-semibold uppercase tracking-wider text-oxide">
                Company Overview
              </p>
              <h2 className="font-display text-3xl font-bold text-navy mb-6 md:text-4xl">
                Precision Manufacturing Since {company.founded}
              </h2>
              <p className="text-lg leading-relaxed text-ink-muted mb-6">
                Pako Engineers is an {company.certification} certified manufacturer and exporter of precision machined components based in Sangli, Maharashtra. We specialize in pump shafts, sleeves, couplings, impellers, lock nuts, retainer rings, Thordon bearings, gears, and complete pump assemblies in all materials of construction.
              </p>
              <p className="text-lg leading-relaxed text-ink-muted mb-6">
                Our core strength lies in heavy-duty CNC turning, precision grinding, and wire-cut EDM machining for pump OEMs and rotating equipment manufacturers across Asia, Europe, the Middle East, and North America. With machining capacity up to 1500 mm diameter and 8,000 mm length, we handle some of the largest pump components in the industry.
              </p>
              <p className="text-lg leading-relaxed text-ink-muted">
                Backed by a dedicated team of {company.workforce.total} professionals — including engineers, quality control specialists, CNC programmers, and skilled machinists — we maintain a zero-defect philosophy that has earned the trust of global corporations like Flowserve, EBARA, TMEIC, DMW Corporation, and Valmet.
              </p>
            </div>

            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-raised border border-line">
              <Image
                src={Images.assets.largePumpRotorAssembly.src}
                alt="Pako Engineers manufacturing facility in Sangli, Maharashtra"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
              <div className="absolute bottom-6 left-6 z-10">
                <p className="font-display text-lg font-bold text-white">Burli, Sangli — Maharashtra</p>
                <p className="text-sm text-white/80">ISO 9001:2015 Certified Facility</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ═══ STATS ═══ */}
      <StatsSection
        stats={[
          { value: company.yearsInBusiness, suffix: "+", label: "Years Experience" },
          { value: company.exportCountries.length, suffix: "+", label: "Countries Served" },
          { value: company.workforce.total, label: "Team Members" },
          { value: 1500, suffix: "mm", label: "Max Turning Dia" },
          { value: 8000, suffix: "mm", label: "Max Length" },
          { value: 500, suffix: "+", label: "Satisfied Clients" },
        ]}
      />

      {/* ═══ MISSION & VISION ═══ */}
      <MissionVision />

      {/* ═══ CORE VALUES ═══ */}
      <CoreValues />

      {/* ═══ LEADERSHIP ═══ */}
      <section className="py-20 lg:py-28 bg-white">
        <Container>
          <div className="grid gap-16 lg:grid-cols-2 items-start">
            <div>
              <p className="mb-4 font-mono text-sm font-semibold uppercase tracking-wider text-oxide">Leadership</p>
              <h2 className="font-display text-3xl font-bold text-navy mb-6 md:text-4xl">
                Led by Industry Veterans
              </h2>
              <p className="text-lg leading-relaxed text-ink-muted mb-8">
                Under the stewardship of the Khot family, Pako Engineers has grown from a modest machining workshop into a globally recognized supplier. Our leadership prioritizes engineering excellence, continuous improvement, customer partnership, and sustainable growth.
              </p>
              <div className="space-y-6">
                {company.leadership.map((leader) => (
                  <div key={leader.name} className="flex items-start gap-5 rounded-xl border border-line bg-surface p-6">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-navy text-white font-bold text-xl">
                      {leader.name.split(" ").slice(-1)[0]?.[0] ?? "P"}
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-bold text-navy">{leader.name}</h3>
                      <p className="text-sm text-oxide font-semibold">{leader.role}</p>
                      <a href={`tel:${leader.phone}`} className="mt-1 text-sm text-ink-muted hover:text-navy transition-colors">
                        {leader.phone}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-navy text-white p-8 rounded-xl">
                <h3 className="font-display text-xl font-bold mb-4">Leadership Philosophy</h3>
                <div className="space-y-4 text-white/80 text-sm leading-relaxed">
                  <p><strong className="text-white">Engineering Excellence:</strong> Continuous investment in the latest CNC technology and operator training programs to maintain the highest standards of precision.</p>
                  <p><strong className="text-white">Customer Focus:</strong> We operate as a seamless extension of our clients&apos; supply chains, understanding their tolerance requirements, material specifications, and delivery timelines.</p>
                  <p><strong className="text-white">Continuous Improvement:</strong> Regular internal audits, corrective action tracking, and process optimization ensure our systems evolve with industry demands.</p>
                  <p><strong className="text-white">Innovation:</strong> From wire-cut EDM to multi-axis VMC machining, we adopt new technologies that push the boundaries of what precision machining can achieve.</p>
                </div>
              </div>

              <div className="relative aspect-[16/9] rounded-xl overflow-hidden border border-line">
                <Image
                  src={Images.assets.longBedTurningLathe.src}
                  alt="Team at Pako Engineers working on precision machined components"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ═══ WHY CHOOSE US ═══ */}
      <section className="py-20 lg:py-28 bg-surface border-y border-line">
        <Container>
          <div className="mb-12 max-w-3xl">
            <p className="mb-4 font-mono text-sm font-semibold uppercase tracking-wider text-oxide">
              Company Details
            </p>
            <h2 className="font-display text-3xl font-bold text-navy mb-4 md:text-4xl">
              Organization Chart
            </h2>
            <p className="text-lg leading-relaxed text-ink-muted">
              Pako Engineers is organized across executive leadership, production, quality, and account functions for clear responsibility and faster coordination.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {company.organizationChart.map((group) => (
              <div key={group.department} className="rounded-xl border border-line bg-white p-6 shadow-sm">
                <h3 className="font-display text-lg font-bold text-navy">{group.department}</h3>
                <div className="mt-5 space-y-3">
                  {group.members.map((member) => (
                    <div key={`${group.department}-${member.name}-${member.role}`} className="rounded-lg bg-surface p-4">
                      <p className="text-sm font-semibold uppercase tracking-wide text-oxide">{member.role}</p>
                      <p className="mt-1 font-display text-lg font-bold text-navy">{member.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <WhyChooseUs />

      {/* ═══ INDUSTRIES SERVED ═══ */}
      <IndustriesServed />

      {/* ═══ WORLD MAP ═══ */}
      <WorldMap />

      {/* ═══ CTA ═══ */}
      <CTABand
        title="Ready to partner with a precision engineering leader?"
        description="Send your drawings and specifications — we respond with capability confirmation and lead time within 24 hours."
      />

      {/* ═══ RELATED PAGES ═══ */}
      <RelatedPages />
    </>
  );
}
