import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { CTABand } from "@/components/sections/CTABand";
import { ArrowRight, Trophy } from "lucide-react";

import { company, clients as officialClients } from "@/lib/content/company";

export const metadata: Metadata = {
  title: "Our Clients & Global Reach | Pako Engineers",
  description: "Trusted by global pump OEMs and rotating equipment manufacturers worldwide.",
  alternates: { canonical: "/clients" },
};

const FEATURED_CLIENTS = [
  { 
    name: "Flowserve Corporation", 
    industry: "Fluid Motion & Control", 
    country: "USA / Global", 
    contacts: "Mr. Fabrizio Baccani (Dir. Mfg), Mr. Jayakumar Jagadeeshan (Supply Chain)",
    role: "Precision Pump Component Partner"
  },
  { 
    name: "Ebara Machinery India Private Limited", 
    industry: "Turbomachinery & Pumps", 
    country: "Japan / India", 
    contacts: "Mr. Hiroshi Suzuki (Director), Mr. Yusuke Chikamori (Procurement)",
    role: "Precision Shaft & Assembly Supplier"
  },
  { 
    name: "TMEIC", 
    industry: "Industrial Electric & Rotating Systems", 
    country: "Japan / India", 
    contacts: "Mr. Katsuki Manabu (Japanese Expert), Mr. Sailesh H. Puranik (Head, SCM)",
    role: "Precision Machined Rotating Parts"
  },
  { 
    name: "DMW Corporation Ltd.", 
    industry: "Pumps & Fans", 
    country: "Japan / Pune", 
    contacts: "Mr. Taizo Kobayashi (Japan), Mr. Ashok Yadav (Factory Mgr), Mr. Gajanan Lokhande (QA)",
    role: "Machining & Quality Approved Partner"
  },
  { 
    name: "Valmet, Sweden", 
    industry: "Process Technology & Industrial Equipment", 
    country: "Sweden", 
    contacts: "Industrial Engineering & QA Team",
    role: "International Supply Partner"
  },
  { 
    name: "NASH", 
    industry: "Liquid Ring Vacuum Pumps & Compressors", 
    country: "South Korea / Global", 
    contacts: "Korean Quality Expert Inspection Team",
    role: "Customer Inspection & Quality Verified"
  },
];

export default function ClientsPage() {
  return (
    <>
      <section className="bg-navy py-16 md:py-24 text-white">
        <Container>
          <div className="flex items-center gap-2 text-sm font-medium text-oxide mb-4">
            <span>Home</span>
            <span>&rarr;</span>
            <span className="text-white">Clients</span>
          </div>
          <h1 className="font-display text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl mb-6 max-w-4xl">
            Trusted by Industry Leaders Worldwide
          </h1>
          <p className="max-w-2xl text-lg text-white/80">
            Serving global pump OEMs and rotating equipment manufacturers across {company.exportCountries.length} export countries.
          </p>
        </Container>
      </section>

      {/* Global Reach Section */}
      <section className="bg-white py-12 border-b border-line overflow-hidden">
         <Container>
           <p className="text-center text-sm font-semibold uppercase tracking-wider text-ink-muted mb-8">
             Exporting Worldwide: {company.exportCountries.join(" • ")}
           </p>
         </Container>
      </section>

      {/* Featured Clients */}
      <section className="bg-background-light py-20 lg:py-28">
        <Container>
          <div className="mb-12">
             <h2 className="font-display text-3xl font-bold text-navy mb-4">Customer Relationships & Visits</h2>
             <p className="text-ink-muted">Established customer visits, technical evaluations, and long-term industrial manufacturing associations.</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {FEATURED_CLIENTS.map((client) => (
              <div key={client.name} className="group rounded-xl border border-line bg-white p-6 shadow-sm transition-shadow hover:shadow-raised">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-navy/5 text-navy">
                  <Trophy size={24} />
                </div>
                <h3 className="mb-1 font-display text-xl font-bold text-navy">{client.name}</h3>
                <p className="mb-4 text-sm font-medium text-oxide">{client.industry} &bull; {client.country}</p>
                
                <div className="space-y-2 text-sm text-ink-muted mb-4">
                  <div className="border-t border-line pt-2">
                    <span className="font-semibold text-navy block mb-1">Key Personnel / Delegation:</span>
                    <span className="text-xs text-ink">{client.contacts}</span>
                  </div>
                  <div className="border-t border-line pt-2">
                    <span className="font-semibold text-navy block mb-1">Relationship:</span>
                    <span className="text-xs text-ink-muted">{client.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Case Studies */}
      <section className="bg-navy py-20 lg:py-32 text-white">
        <Container>
          <div className="mb-12">
             <h2 className="font-display text-3xl font-bold mb-4">Engineering Case Studies</h2>
             <p className="text-white/70">Explore how we solve complex manufacturing challenges for global OEMs.</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
               <div className="h-48 bg-surface opacity-10"></div>
               <div className="p-8">
                 <h3 className="text-2xl font-bold mb-2">High-Pressure API 610 Shafts</h3>
                 <p className="text-white/70 mb-6">Manufactured Super Duplex shafts with 10 to 50 microns finish for offshore pump applications.</p>
                 <button className="text-oxide font-medium hover:underline">Read Full Case Study</button>
               </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
               <div className="h-48 bg-surface opacity-10"></div>
               <div className="p-8">
                 <h3 className="text-2xl font-bold mb-2">Marine Propulsion Sleeves</h3>
                 <p className="text-white/70 mb-6">Delivered 500+ customized Monel sleeves with specialized surface hardening for extreme corrosive environments.</p>
                 <button className="text-oxide font-medium hover:underline">Read Full Case Study</button>
               </div>
            </div>
          </div>
        </Container>
      </section>

      <CTABand />
    </>
  );
}
