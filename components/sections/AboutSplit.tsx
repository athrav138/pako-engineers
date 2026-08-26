import { Images } from "@/lib/images";
import Image from "next/image";
import { ArrowRight, Award, Globe2, Users, Factory } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { company } from "@/lib/content/company";

const STATS = [
  { icon: Award,   value: "30+",  label: "Years of Excellence" },
  { icon: Globe2,  value: `${company.exportCountries.length}+`, label: "Countries Served" },
  { icon: Factory, value: "500mm", label: "Max Shaft Diameter" },
  { icon: Users,   value: `${company.workforce.total}+`, label: "Skilled Professionals" },
];

export function AboutSplit() {
  return (
    <section className="overflow-hidden bg-white py-20 lg:py-32">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* Left — factory image */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-line shadow-raised">
            <Image
              src={Images.assets.companyBuilding.src}
              alt={Images.assets.companyBuilding.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <p className="font-display text-base font-bold">Burli, Palus — Maharashtra, India</p>
              <p className="text-sm text-white/70">ISO 9001:2015 Certified · Est. {company.founded}</p>
            </div>
          </div>

          {/* Right — intro teaser */}
          <div>
            <p className="mb-3 font-mono text-sm font-semibold uppercase tracking-wider text-oxide">
              About Pako Engineers
            </p>
            <h2 className="mb-5 font-display text-3xl font-bold tracking-tight text-navy md:text-4xl lg:text-5xl">
              Precision Engineering Since {company.founded}
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-ink-muted">
              We are an {company.certification} certified manufacturer and exporter of
              precision machined pump components — shafts, sleeves, couplings, impellers,
              and complete pump assemblies — serving leading OEMs across{" "}
              {company.exportCountries.length}+ countries worldwide.
            </p>

            {/* Key stats grid */}
            <div className="mb-8 grid grid-cols-2 gap-4">
              {STATS.map(({ icon: Icon, value, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 rounded-xl border border-line bg-[#F8FAFC] p-4"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-oxide/10 text-oxide">
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="font-display text-lg font-bold leading-none text-navy">{value}</p>
                    <p className="mt-0.5 text-xs text-ink-muted">{label}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button href="/about" size="lg">
              Learn More About Us
              <ArrowRight size={18} className="ml-2" />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
