import { Images } from "@/lib/images";

import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

const features = [
  "Over 30 years of engineering excellence",
  "ISO 9001:2015 Certified Manufacturing",
  "Global export to 15+ countries",
  "State-of-the-art CNC machinery",
];

export function AboutSplit() {
  return (
    <section className="overflow-hidden py-20 lg:py-32">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="relative aspect-square overflow-hidden rounded-lg bg-surface motion-safe:opacity-0 motion-safe:animate-fade-up lg:aspect-[4/5]">
          <Image
            src={Images.assets.modernFactoryFloorOverview.src}
            alt="Pako Engineers Factory Floor"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-navy/10" />
        </div>

        <div className="motion-safe:opacity-0 motion-safe:animate-fade-up [animation-delay:120ms]">
          <p className="mb-4 font-mono text-sm font-semibold uppercase tracking-wider text-oxide">
            About Pako Engineers
          </p>
          <h2 className="mb-6 font-display text-3xl font-bold tracking-tight text-navy md:text-4xl lg:text-5xl">
            Precision engineering that drives global industries.
          </h2>
          <p className="mb-8 text-lg leading-relaxed text-ink-muted">
            Since 1994, Pako Engineers has been at the forefront of manufacturing high-precision shafts, sleeves, couplings, and pump components. We combine decades of metallurgical expertise with modern CNC technology to deliver zero-defect components to global OEMs.
          </p>
          
          <ul className="mb-10 space-y-4">
            {features.map((feature) => (
              <li key={feature} className="flex items-center gap-3 text-ink">
                <CheckCircle2 className="text-success" size={20} />
                <span className="font-medium">{feature}</span>
              </li>
            ))}
          </ul>

          <Button href="/about" size="lg">
            Read Our Story
            <ArrowRight size={18} className="ml-2" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
