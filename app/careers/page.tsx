import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { CTABand } from "@/components/sections/CTABand";
import { JobPortal } from "@/components/sections/careers/JobPortal";
import { Users, GraduationCap, Heart, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Careers | Join Pako Engineers",
  description: "Build your career with a world-class manufacturing team. Explore open positions in engineering, production, and quality assurance.",
  alternates: { canonical: "/careers" },
};

export default function CareersPage() {
  return (
    <>
      <section className="bg-navy py-16 md:py-24 text-white">
        <Container>
          <div className="flex items-center gap-2 text-sm font-medium text-oxide mb-4">
            <span>Home</span>
            <span>&rarr;</span>
            <span className="text-white">Careers</span>
          </div>
          <h1 className="font-display text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl mb-6 max-w-4xl">
            Engineer Your Future With Us
          </h1>
          <p className="max-w-2xl text-lg text-white/80 mb-8">
            At Pako Engineers, we believe in continuous learning, innovation, and uncompromising quality. Join our team to build precision components that power global industries.
          </p>
          <button className="inline-flex h-12 items-center justify-center rounded-md bg-oxide px-8 font-medium text-white transition-colors hover:bg-oxide/90">
            View Open Positions
          </button>
        </Container>
      </section>

      <section className="bg-white py-20 lg:py-32">
        <Container>
          <div className="mb-16 text-center">
            <h2 className="font-display text-3xl font-bold text-navy mb-4">Why Pako Engineers?</h2>
            <p className="text-ink-muted max-w-2xl mx-auto">We offer a dynamic environment where traditional engineering meets modern automation.</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-line bg-surface p-8 text-center">
              <Zap size={32} className="mx-auto mb-4 text-oxide" />
              <h3 className="text-xl font-bold text-navy mb-2">Innovation</h3>
              <p className="text-sm text-ink-muted">Work with the latest multi-axis CNC machines and robotic assembly lines.</p>
            </div>
            <div className="rounded-xl border border-line bg-surface p-8 text-center">
              <Users size={32} className="mx-auto mb-4 text-oxide" />
              <h3 className="text-xl font-bold text-navy mb-2">Collaborative Culture</h3>
              <p className="text-sm text-ink-muted">A collaborative workplace where every engineer&apos;s voice directly impacts production.</p>
            </div>
            <div className="rounded-xl border border-line bg-surface p-8 text-center">
              <GraduationCap size={32} className="mx-auto mb-4 text-oxide" />
              <h3 className="text-xl font-bold text-navy mb-2">Continuous Learning</h3>
              <p className="text-sm text-ink-muted">Regular training on new metallurgical standards and machining software.</p>
            </div>
            <div className="rounded-xl border border-line bg-surface p-8 text-center">
              <Heart size={32} className="mx-auto mb-4 text-oxide" />
              <h3 className="text-xl font-bold text-navy mb-2">Comprehensive Benefits</h3>
              <p className="text-sm text-ink-muted">Competitive salaries, health insurance, and performance bonuses.</p>
            </div>
          </div>
        </Container>
      </section>

      <JobPortal />

      <CTABand />
    </>
  );
}
