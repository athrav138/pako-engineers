import { Images } from "@/lib/images";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Search, ShieldCheck, Microscope, Ruler } from "lucide-react";

const QA_FACILITIES = [
  {
    icon: ShieldCheck,
    title: "ISO 9001:2015 Standards",
    description: "Strict adherence to international quality protocols.",
  },
  {
    icon: Microscope,
    title: "Metallurgical Testing",
    description: "PMI, UT, and DPT for material integrity verification.",
  },
  {
    icon: Search,
    title: "Hardness Testing",
    description: "Rockwell and Brinell hardness testing for wear resistance.",
  },
  {
    icon: Ruler,
    title: "Dimensional Accuracy",
    description: "Micrometers, bore gauges, and surface roughness testers.",
  },
];

export function QualityAssurance() {
  return (
    <section className="relative overflow-hidden bg-navy py-20 lg:py-32 text-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={Images.assets.precisionQualityInspection.src}
          alt="Quality inspection at Pako Engineers"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-navy/85" />
      </div>
      {/* Background Pattern */}
      <div className="absolute inset-0 z-[1] opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
      
      <Container className="relative z-10">
        <div className="mb-16 md:w-2/3 lg:w-1/2">
          <p className="mb-4 font-mono text-sm font-semibold uppercase tracking-wider text-oxide">
            Quality Assurance
          </p>
          <h2 className="mb-6 font-display text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Zero-Defect Philosophy.
          </h2>
          <p className="text-lg leading-relaxed text-white/70">
            Quality is embedded at every stage of our manufacturing process. With dedicated inspection facilities and NDT capabilities, we guarantee the structural and dimensional integrity of every component.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {QA_FACILITIES.map((facility, i) => (
            <div
              key={i}
              className="rounded-xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-colors motion-safe:opacity-0 motion-safe:animate-fade-up hover:bg-white/10"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <facility.icon size={36} className="mb-6 text-oxide" strokeWidth={1.5} />
              <h3 className="mb-3 font-display text-xl font-bold">{facility.title}</h3>
              <p className="text-sm text-white/60">{facility.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
