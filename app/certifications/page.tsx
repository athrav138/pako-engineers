import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { CTABand } from "@/components/sections/CTABand";
import { RelatedPages } from "@/components/sections/RelatedPages";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ShieldCheck, Download, CheckCircle2, Award, FileSearch, ArrowRight, RefreshCcw, CheckSquare, Settings } from "lucide-react";
import { company } from "@/lib/content/company";

import { Images } from "@/lib/images";
export const metadata: Metadata = {
  title: "ISO 9001:2015 Certification | Pako Engineers",
  description: "View Pako Engineers' ISO 9001:2015 certification. We adhere to rigorous global quality management systems to ensure precision and traceability.",
  alternates: { canonical: "/certifications" },
  openGraph: {
    title: "Pako Engineers – ISO 9001:2015 Certification",
    description: "Certified Quality Management System ensuring consistent product quality and continuous improvement.",
    url: "https://pakoshaft.com/certifications",
    type: "website",
  },
};

export default function CertificationsPage() {
  const benefits = [
    "Consistent product quality meeting international OEM standards",
    "Robust traceability from raw material to finished product",
    "Reduced variance and elimination of manufacturing defects",
    "Streamlined production leading to reliable delivery schedules",
    "Continuous improvement culture driven by regular internal audits"
  ];

  const certificationSteps = [
    { icon: CheckSquare, title: "Internal Audits", desc: "Our QA team conducts monthly internal audits to ensure strict adherence to documented SOPs across all departments." },
    { icon: Award, title: "Surveillance Audits", desc: "Annual third-party surveillance audits by accredited certification bodies to maintain our active ISO 9001:2015 status." },
    { icon: Settings, title: "Process Control", desc: "Real-time process monitoring and calibration of all measuring instruments (micrometers, gauges, DPT kits)." },
    { icon: RefreshCcw, title: "Triennial Renewal", desc: "Comprehensive recertification audit every three years to align with the latest ISO quality management frameworks." },
  ];

  return (
    <>
      <PageHero
        eyebrow="Certifications"
        title={`${company.certification} Certified`}
        description="Our internationally recognized quality management systems ensure precision, traceability, and consistency in every component we manufacture."
        backgroundImage={Images.assets.precisionQualityInspection.src}
      >
        <div className="mt-8">
          <Button href="#download" variant="glass">
            <Download size={16} className="mr-2" /> View Certificate
          </Button>
        </div>
      </PageHero>
      <Breadcrumb items={[{ label: "Company", href: "/about" }, { label: "ISO Certification", href: "/certifications" }]} />

      {/* ═══ QMS OVERVIEW ═══ */}
      <section className="bg-white py-20 lg:py-28">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Content */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <ShieldCheck size={40} className="text-oxide" />
                <h2 className="font-display text-3xl font-bold text-navy">Quality Management System</h2>
              </div>
              <p className="text-lg text-ink-muted leading-relaxed mb-8">
                Pako Engineers is proud to be certified to ISO 9001:2015 standards. This certification demonstrates our unwavering commitment to producing high-quality precision machined components that meet rigorous customer and regulatory requirements.
              </p>
              
              <h3 className="font-bold text-xl text-navy mb-4">Certification Scope</h3>
              <div className="bg-surface p-5 rounded-lg border border-line mb-8">
                <p className="text-ink-muted font-medium italic">
                  &ldquo;Manufacture and Export of Precision Machined Components, Pump Assemblies, Shafts, Sleeves, Couplings, Lock Nuts, and Industrial Retainer Rings.&rdquo;
                </p>
              </div>

              <h3 className="font-bold text-xl text-navy mb-4">Benefits of our QMS</h3>
              <ul className="space-y-4">
                {benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="text-success mt-0.5 shrink-0" size={20} />
                    <span className="text-ink font-medium">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Certificate Viewer/Card */}
            <div id="download" className="bg-navy border border-navy rounded-2xl p-8 lg:p-12 text-center shadow-raised relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none text-white">
                <Award size={200} />
              </div>
              <h3 className="font-display text-2xl font-bold text-white mb-2 relative z-10">ISO 9001:2015</h3>
              <p className="text-sm font-bold uppercase tracking-widest text-oxide mb-8 relative z-10">Active Certification</p>
              
              <div className="aspect-[1/1.4] bg-white border-4 border-surface mx-auto mb-8 shadow-sm flex flex-col items-center justify-center relative z-10 p-6 rounded-md">
                {/* Placeholder for actual certificate image */}
                <FileSearch size={48} className="text-line mb-4" />
                <p className="text-sm text-ink-muted font-bold text-center uppercase tracking-wide">
                  Official Document<br/>Available on Request
                </p>
              </div>

              <button className="inline-flex items-center gap-2 rounded-md bg-white text-navy px-8 py-3.5 text-sm font-bold uppercase tracking-wider hover:bg-surface transition-colors w-full justify-center relative z-10">
                <Download size={18} /> Request Certificate PDF
              </button>
            </div>
            
          </div>
        </Container>
      </section>

      {/* ═══ AUDIT & COMPLIANCE TIMELINE ═══ */}
      <section className="py-20 bg-background-light border-y border-line">
        <Container>
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <p className="mb-4 font-mono text-sm font-semibold uppercase tracking-wider text-oxide">Compliance Process</p>
            <h2 className="font-display text-3xl font-bold text-navy mb-4">Continuous Auditing & Renewal</h2>
            <p className="text-lg text-ink-muted leading-relaxed">
              Our certification is maintained through a strict, continuous cycle of internal checks, third-party surveillance, and comprehensive OEM vendor audits.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certificationSteps.map((step, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-line shadow-sm hover:border-oxide/30 transition-colors">
                <step.icon size={32} className="text-oxide mb-4" />
                <h3 className="font-bold text-navy mb-2">{step.title}</h3>
                <p className="text-sm text-ink-muted leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button href="/quality" variant="outline" rightIcon={<ArrowRight size={16} />}>
              Explore our Quality Assurance Process
            </Button>
          </div>
        </Container>
      </section>

      <CTABand 
        title="Trusted by Global OEMs"
        description="We regularly undergo and pass stringent vendor audits conducted by our global OEM clients from Japan, Germany, and the USA."
      />
      <RelatedPages />
    </>
  );
}
