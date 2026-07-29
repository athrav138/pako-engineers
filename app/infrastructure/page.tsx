import type { Metadata } from "next";
import Image from "next/image";
import { Zap, Wind, Truck, Settings, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { InfrastructureSection } from "@/components/sections/InfrastructureSection";
import { GalleryMasonry } from "@/components/sections/GalleryMasonry";
import { StatsSection } from "@/components/sections/StatsSection";
import { CTABand } from "@/components/sections/CTABand";
import { RelatedPages } from "@/components/sections/RelatedPages";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { company, equipment, machiningCapacity } from "@/lib/content/company";

import { Images } from "@/lib/images";
export const metadata: Metadata = {
  title: "Infrastructure & Facilities | Pako Engineers – World-Class Manufacturing Setup",
  description: "Explore the state-of-the-art infrastructure at Pako Engineers: CNC machining bays, grinding stations, inspection labs, assembly areas, and export packaging zones.",
  alternates: { canonical: "/infrastructure" },
  openGraph: {
    title: "Pako Engineers – World-Class Manufacturing Infrastructure",
    description: "Purpose-built facility with CNC lathes, VMCs, grinding machines, and climate-controlled inspection labs in Sangli, Maharashtra.",
    url: "https://pakoshaft.com/infrastructure",
    type: "website",
  },
};

export default function InfrastructurePage() {
  const utilities = [
    { icon: Zap, title: "Uninterrupted Power Supply", desc: "Dedicated high-tension power line backed by industrial DG sets ensuring 24/7 continuous machining operations without downtime or voltage fluctuation." },
    { icon: Truck, title: "Material Handling & EOT Cranes", desc: "Heavy-duty EOT cranes spanning the entire shop floor, rated for lifting raw castings, forgings, and finished components up to 15 tons." },
    { icon: Wind, title: "Climate-Controlled Inspection", desc: "Temperature and humidity-controlled precision inspection lab to ensure micrometer accuracy during final dimensional verification." },
    { icon: Settings, title: "Compressed Air & Tooling", desc: "Centralized compressed air systems supplying pneumatic tools across all stations, with a dedicated tooling crib for organized insert and fixture management." },
  ];

  const zones = [
    { title: "CNC Machining Bay", desc: "Houses our heavy-duty turning centers and VMCs. Layout optimized for one-piece flow with dedicated material staging areas.", image: Images.assets.heavyDutyEngineLathe.src },
    { title: "Precision Grinding Section", desc: "Vibration-damped flooring provides absolute stability for cylindrical and internal grinding machines achieving sub-micron finishes.", image: Images.assets.legacyLatheInspection.src },
    { title: "Assembly & Testing Area", desc: "Clean, dust-free environment for static balancing, rotor assembly, and pump sub-assembly build-up with full dimensional verification.", image: Images.assets.factoryBuildingExterior.src },
    { title: "Warehouse & Dispatch", desc: "Secure raw material storage with FIFO tracking and a dedicated export packaging zone for fumigated wooden crating and anti-rust treatment.", image: Images.assets.longShaftMachiningLathe.src },
  ];

  return (
    <>
      <PageHero
        eyebrow="Infrastructure"
        title="Purpose-Built for Precision Manufacturing"
        description={`Our facility at ${company.address.line1}, Sangli is engineered for large-scale production with streamlined material flow, advanced inspection labs, and a lean shop floor layout.`}
        backgroundImage={Images.assets.modernFactoryFloorOverview.src}
      >
        <div className="mt-8">
          <Button href="/manufacturing-facility" variant="glass">
            View Machine Fleet <ArrowRight size={16} className="ml-2" />
          </Button>
        </div>
      </PageHero>

      <Breadcrumb items={[{ label: "Company", href: "/about" }, { label: "Infrastructure", href: "/infrastructure" }]} />

      {/* ═══ FACILITY OVERVIEW ═══ */}
      <InfrastructureSection />

      {/* ═══ STATS ═══ */}
      <StatsSection
        stats={[
          { value: 1500, suffix: "mm", label: "Max Turning Dia" },
          { value: 8000, suffix: "mm", label: "Max Component Length" },
          { value: company.workforce.total, label: "Team Members" },
          { value: equipment.length, suffix: "+", label: "Machine Types" },
        ]}
      />

      {/* ═══ SHOP FLOOR ZONES ═══ */}
      <section className="py-20 lg:py-28 bg-white">
        <Container>
          <div className="mb-16">
            <p className="mb-4 font-mono text-sm font-semibold uppercase tracking-wider text-oxide">Shop Floor Organization</p>
            <h2 className="font-display text-3xl font-bold text-navy mb-4 md:text-4xl">Factory Layout & Production Zones</h2>
            <p className="text-lg text-ink-muted max-w-3xl leading-relaxed">
              Our factory layout follows lean manufacturing principles to minimize material movement, reduce cycle times, and maximize throughput. The facility is logically partitioned into four specialized production zones.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {zones.map((zone, i) => (
              <div key={i} className="group overflow-hidden rounded-2xl border border-line bg-white shadow-sm transition-all hover:shadow-raised">
                <div className="relative aspect-[16/9] overflow-hidden bg-surface">
                  <Image
                    src={zone.image}
                    alt={`${zone.title} at Pako Engineers facility`}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
                  <div className="absolute top-4 left-4 z-10">
                    <span className="inline-flex items-center justify-center h-8 w-8 rounded bg-oxide text-white font-bold text-sm">
                      0{i + 1}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-navy mb-2">{zone.title}</h3>
                  <p className="text-sm text-ink-muted leading-relaxed">{zone.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ═══ UTILITIES ═══ */}
      <section className="py-20 bg-navy text-white">
        <Container>
          <div className="mb-12">
            <p className="mb-4 font-mono text-sm font-semibold uppercase tracking-wider text-oxide">Supporting Infrastructure</p>
            <h2 className="font-display text-3xl font-bold mb-4">Industrial Utilities</h2>
            <p className="text-white/70 max-w-2xl">Robust backend systems supporting continuous manufacturing operations with zero unplanned downtime.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {utilities.map((u, idx) => (
              <div key={idx} className="group rounded-xl border border-white/10 bg-white/5 p-8 backdrop-blur transition-colors hover:bg-white/10">
                <u.icon size={36} className="text-oxide mb-5" strokeWidth={1.5} />
                <h3 className="font-bold text-lg mb-3">{u.title}</h3>
                <p className="text-sm text-white/70 leading-relaxed">{u.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ═══ MACHINING CAPACITY TABLE ═══ */}
      <section className="py-20 bg-background-light border-y border-line">
        <Container>
          <h2 className="font-display text-3xl font-bold text-navy mb-8">Machining Capacity Reference</h2>
          <div className="overflow-x-auto rounded-xl border border-line bg-white shadow-sm">
            <table className="w-full border-collapse text-left text-sm">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="px-6 py-4 font-semibold uppercase tracking-wider text-xs">Process</th>
                  <th className="px-6 py-4 font-semibold uppercase tracking-wider text-xs">Capacity / Range</th>
                </tr>
              </thead>
              <tbody>
                {machiningCapacity.map((cap, i) => (
                  <tr key={cap.process} className={i % 2 === 0 ? "bg-white" : "bg-surface"}>
                    <td className="px-6 py-4 font-semibold text-navy">{cap.process}</td>
                    <td className="px-6 py-4 text-ink-muted">{cap.range}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      {/* ═══ GALLERY ═══ */}
      <GalleryMasonry />

      <CTABand
        title="Need a facility tour or capability assessment?"
        description="We welcome clients and partners to visit our manufacturing facility in Sangli for an in-person walkthrough."
      />
      <RelatedPages />
    </>
  );
}
