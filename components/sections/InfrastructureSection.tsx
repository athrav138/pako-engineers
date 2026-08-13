import { Images } from "@/lib/images";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { company } from "@/lib/content/company";

const INFRA_IMAGES = [
  { id: 1, src: Images.assets.heavyDutyEngineLathe.src, label: "CNC Machine Shop" },
  { id: 2, src: Images.assets.precisionQualityInspection.src, label: "Quality Inspection" },
  { id: 3, src: Images.assets.verticalPumpAssemblyThumb.src, label: "Assembly Area" },
];

export function InfrastructureSection() {
  return (
    <section className="bg-white py-20 lg:py-32">
      <Container>
        <div className="mb-16 md:w-2/3 lg:w-1/2">
          <p className="mb-4 font-mono text-sm font-semibold uppercase tracking-wider text-oxide">
            World-Class Facilities
          </p>
          <h2 className="mb-6 font-display text-3xl font-bold tracking-tight text-navy md:text-4xl">
            Robust Infrastructure for Scalable Production
          </h2>
          <p className="text-lg leading-relaxed text-ink-muted">
            {company.profile.facility} The production department is supported
            by calipers, micrometers, gauges and the required measuring
            instruments for routine dimensional control.
          </p>
        </div>

        {/* Carousel / Large Image Gallery Layout */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:grid-rows-2 h-auto md:h-[600px]">
          {/* Main Large Image */}
          <div className="group relative min-h-[300px] overflow-hidden rounded-2xl bg-surface motion-safe:opacity-0 motion-safe:animate-fade-up md:col-span-8 md:row-span-2">
            <Image
              src={Images.assets.modernFactoryFloorOverview.src}
              alt="Pako Engineers factory floor overview"
              fill
              sizes="(max-width: 768px) 100vw, 66vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-6 left-6 z-10">
              <p className="font-display text-xl font-bold text-white">Factory Floor Overview</p>
              <p className="text-sm text-white/80">{company.address.full}</p>
            </div>
          </div>

          {/* Smaller Images */}
          {INFRA_IMAGES.slice(0, 2).map((img, i) => (
            <div
              key={img.id}
              className="group relative min-h-[200px] overflow-hidden rounded-2xl bg-surface motion-safe:opacity-0 motion-safe:animate-fade-up md:col-span-4 md:row-span-1"
              style={{ animationDelay: `${200 + i * 100}ms` }}
            >
              <Image
                src={img.src}
                alt={`Pako Engineers ${img.label}`}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent opacity-60 transition-opacity group-hover:opacity-80" />
              <div className="absolute bottom-4 left-4 z-10">
                <p className="font-display font-bold text-white">
                  {img.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
