import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/sections/PageHero";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { TimelineSection } from "@/components/sections/TimelineSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { CTABand } from "@/components/sections/CTABand";
import { RelatedPages } from "@/components/sections/RelatedPages";
import { Container } from "@/components/ui/Container";
import { company } from "@/lib/content/company";

export const metadata: Metadata = {
  title: "Our Story & History | Pako Engineers – A Legacy of Precision Since 1994",
  description: "From a modest workshop in Sangli to a global OEM supplier — discover the three-decade journey of Pako Engineers and our evolution in precision machining.",
  alternates: { canonical: "/our-story" },
  openGraph: {
    title: "The Story of Pako Engineers – 30+ Years of Engineering Excellence",
    description: "Tracing the growth journey from 1994 to becoming a trusted global precision machining partner.",
    url: "https://pakoshaft.com/our-story",
    type: "website",
  },
};

export default function OurStoryPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="Three Decades of Engineering Excellence"
        description="From a modest machining workshop to a globally trusted OEM partner — our growth is defined by an unwavering commitment to precision, quality, and customer trust."
        backgroundImage="/images/pako-engineers-inampatta-sangli-x12lilcicd.avif"
      />

      <Breadcrumb items={[{ label: "Company", href: "/about" }, { label: "Our Story", href: "/our-story" }]} />

      {/* ═══ FOUNDER STORY ═══ */}
      <section className="py-20 lg:py-28 bg-white">
        <Container>
          <div className="grid gap-16 lg:grid-cols-2 items-center">
            <div>
              <p className="mb-4 font-mono text-sm font-semibold uppercase tracking-wider text-oxide">The Beginning</p>
              <h2 className="font-display text-3xl font-bold text-navy mb-6 md:text-4xl">
                Founded on Precision, Built for Export
              </h2>
              <p className="text-lg leading-relaxed text-ink-muted mb-6">
                In {company.founded}, Pako Engineers was established in Burli, a village near Sangli in Maharashtra, with a clear and ambitious goal: to provide the highest level of machining precision available in western India. What began as a workshop with conventional lathes has grown into a fully equipped manufacturing facility serving some of the world&apos;s most demanding pump and rotating equipment manufacturers.
              </p>
              <p className="text-lg leading-relaxed text-ink-muted mb-6">
                The Khot family — led by Mr. Sudarshan Khot and Mr. Suhas Khot — recognized early on that precision machining was not just about tight tolerances; it was about understanding metallurgy, investing in the right machinery, building repeatable processes, and earning the trust of clients who had zero tolerance for defects.
              </p>
              <p className="text-lg leading-relaxed text-ink-muted">
                That philosophy guided every decision: from the first export order to Japan in 2002, to the ISO 9001 certification in 2010, to the massive infrastructure expansion in 2018. Each step was deliberate, measured, and grounded in the same principle the company was built on — that precision is not negotiable.
              </p>
            </div>

            <div className="space-y-4">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-raised border border-line">
                <Image
                  src="/images/pako-engineers-inampatta-sangli-5bbvuvw8kp.avif"
                  alt="Pako Engineers original facility"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent" />
                <div className="absolute bottom-5 left-5 z-10">
                  <p className="font-display text-sm font-bold text-white/90">Established {company.founded}</p>
                </div>
              </div>
              <div className="relative aspect-[16/7] rounded-2xl overflow-hidden shadow-raised border border-line">
                <Image
                  src="/images/pako-engineers-inampatta-sangli-zpqdk7swjw.avif"
                  alt="Modern CNC machinery at Pako Engineers"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ═══ STATS ═══ */}
      <StatsSection
        stats={[
          { value: company.yearsInBusiness, suffix: "+", label: "Years in Business" },
          { value: company.exportCountries.length, suffix: "+", label: "Export Countries" },
          { value: company.workforce.total, label: "Team Members" },
          { value: 500, suffix: "+", label: "Clients Served" },
        ]}
      />

      {/* ═══ GROWTH JOURNEY ═══ */}
      <section className="py-20 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="mb-4 font-mono text-sm font-semibold uppercase tracking-wider text-oxide">Growth Journey</p>
            <h2 className="font-display text-3xl font-bold text-navy mb-4 md:text-4xl">Key Milestones That Shaped Us</h2>
            <p className="text-lg text-ink-muted leading-relaxed">
              Every milestone represents a deliberate investment in technology, people, or processes — never a shortcut.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-line bg-surface p-8 text-center">
              <p className="font-mono text-4xl font-bold text-oxide mb-3">2002</p>
              <h3 className="font-display text-lg font-bold text-navy mb-2">First Export</h3>
              <p className="text-sm text-ink-muted">Precision pump shafts shipped to Japanese OEMs, marking our entry into the global supply chain.</p>
            </div>
            <div className="rounded-xl border border-line bg-surface p-8 text-center">
              <p className="font-mono text-4xl font-bold text-oxide mb-3">2010</p>
              <h3 className="font-display text-lg font-bold text-navy mb-2">ISO 9001 Certified</h3>
              <p className="text-sm text-ink-muted">Formalized our quality management system with internationally recognized ISO 9001 certification.</p>
            </div>
            <div className="rounded-xl border border-line bg-surface p-8 text-center">
              <p className="font-mono text-4xl font-bold text-oxide mb-3">2024</p>
              <h3 className="font-display text-lg font-bold text-navy mb-2">Advanced CNC Era</h3>
              <p className="text-sm text-ink-muted">Integrated multi-axis VMCs and heavy-duty CNC lathes handling 1500 mm diameter components.</p>
            </div>
          </div>
        </Container>
      </section>

      {/* ═══ ANIMATED TIMELINE ═══ */}
      <TimelineSection />

      {/* ═══ FUTURE VISION ═══ */}
      <section className="bg-navy py-20 lg:py-28 text-white">
        <Container>
          <div className="grid gap-16 lg:grid-cols-2 items-center">
            <div>
              <p className="mb-4 font-mono text-sm font-semibold uppercase tracking-wider text-oxide">Looking Forward</p>
              <h2 className="font-display text-3xl font-bold mb-6">Industry 4.0 and Beyond</h2>
              <p className="text-lg text-white/80 leading-relaxed mb-6">
                As manufacturing evolves globally, Pako Engineers is actively investing in automation, real-time machining analytics, and sustainable production practices. Our roadmap includes advanced multi-axis machining centres, ERP-integrated production planning, and IoT-enabled quality tracking systems.
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                We remain committed to growing our export footprint, deepening partnerships with existing OEM clients, and expanding into new material categories — including titanium alloys and high-temperature superalloys — to serve the next generation of pump and energy equipment.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex flex-col items-center gap-4 bg-white/10 px-12 py-10 rounded-2xl border border-white/20">
                <span className="font-display text-6xl font-bold text-oxide">{company.yearsInBusiness}+</span>
                <span className="text-lg font-semibold text-white/90">Years of Precision</span>
                <span className="text-sm text-white/60">And we&apos;re just getting started.</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CTABand
        title="Want to be part of our story?"
        description="Partner with Pako Engineers for your next precision machining project."
      />
      <RelatedPages />
    </>
  );
}
