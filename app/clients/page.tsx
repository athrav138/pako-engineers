import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { CTABand } from "@/components/sections/CTABand";
import { ArrowRight, Trophy } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Clients & Global Reach | Pako Engineers",
  description: "Trusted by OEMs, industrial manufacturers, and global engineering companies worldwide.",
  alternates: { canonical: "/clients" },
};

const FEATURED_CLIENTS = [
  { name: "Global Pump OEM", industry: "Fluid Handling", country: "Germany", projects: "150+", years: 12 },
  { name: "Marine Systems Corp", industry: "Marine", country: "Netherlands", projects: "45", years: 8 },
  { name: "PetroTech Industries", industry: "Oil & Gas", country: "Saudi Arabia", projects: "200+", years: 15 },
  { name: "AgriFlow", industry: "Agriculture", country: "USA", projects: "80", years: 5 }
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
            Serving OEMs, Industrial Manufacturers, Pump Manufacturers, Engineering Companies, and Global Clients across 20+ countries.
          </p>
        </Container>
      </section>

      {/* Global Reach Section */}
      <section className="bg-white py-12 border-b border-line overflow-hidden">
         <Container>
           <p className="text-center text-sm font-semibold uppercase tracking-wider text-ink-muted mb-8">Exporting to 20+ Countries including USA, Germany, Japan, and UAE</p>
         </Container>
      </section>

      {/* Featured Clients */}
      <section className="bg-background-light py-20 lg:py-32">
        <Container>
          <div className="mb-12">
             <h2 className="font-display text-3xl font-bold text-navy mb-4">Strategic Partnerships</h2>
             <p className="text-ink-muted">Long-term associations built on zero-defect manufacturing and on-time delivery.</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {FEATURED_CLIENTS.map((client) => (
              <div key={client.name} className="group rounded-xl border border-line bg-white p-6 shadow-sm transition-shadow hover:shadow-raised">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-navy/5 text-navy">
                  <Trophy size={24} />
                </div>
                <h3 className="mb-1 font-display text-xl font-bold text-navy">{client.name}</h3>
                <p className="mb-4 text-sm font-medium text-oxide">{client.industry} &bull; {client.country}</p>
                
                <div className="space-y-2 text-sm text-ink-muted mb-6">
                  <div className="flex justify-between border-b border-line pb-1">
                    <span>Projects:</span>
                    <span className="font-semibold text-navy">{client.projects}</span>
                  </div>
                  <div className="flex justify-between border-b border-line pb-1">
                    <span>Association:</span>
                    <span className="font-semibold text-navy">{client.years} Years</span>
                  </div>
                </div>

                <button className="flex w-full items-center justify-center gap-2 rounded-md border border-line py-2 text-sm font-semibold text-navy transition-colors hover:bg-surface">
                  Success Story
                  <ArrowRight size={16} />
                </button>
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
                 <p className="text-white/70 mb-6">Successfully achieved 2-micron tolerance on Super Duplex shafts for offshore oil rigs, reducing pump vibration by 40%.</p>
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
