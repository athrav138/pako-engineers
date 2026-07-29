import { Images } from "@/lib/images";

import Image from "next/image";
import { ArrowRight, ShieldCheck, Award, Globe, Users } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

const STATS = [
  { icon: ShieldCheck, title: "ISO 9001:2015", desc: "Certified Company" },
  { icon: Award, title: "30+ Years", desc: "Experience" },
  { icon: Globe, title: "12+ Countries", desc: "Global Exports" },
  { icon: Users, title: "500+", desc: "Happy Clients" },
];

export function HomeHero() {
  return (
    <section
      className="relative flex min-h-[100vh] flex-col overflow-hidden bg-[#0A1B2E]"
      aria-label="Hero - Pako Engineers"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src={Images.assets.cncTurningHero.src}
          alt="CNC precision machining at Pako Engineers factory"
          fill
          priority
          quality={90}
          fetchPriority="high"
          sizes="(min-width: 1024px) 100vw, 100vw"
          className="object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, #0A1B2E 0%, #0A1B2E 35%, rgba(10,27,46,0.85) 50%, rgba(10,27,46,0.4) 70%, rgba(10,27,46,0.25) 100%)",
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#0A1B2E] via-[#0A1B2E]/80 to-transparent" />
      </div>

      <Container className="relative z-10 flex flex-1 items-center pb-0 pt-[160px] lg:pt-[180px]">
        <div className="w-full max-w-[680px] lg:w-[55%]">
          <div className="mb-5 motion-safe:opacity-0 motion-safe:animate-fade-up [animation-delay:80ms]">
            <p className="text-[16px] font-normal italic tracking-wide text-white/90 md:text-[18px]">
              Pako Engineers
            </p>
            <div className="mt-2 h-[3px] w-[50px] rounded-full bg-[#1E5FAA]" />
          </div>

          <h1
            className="mb-6 font-display leading-[0.95] tracking-tight"
            style={{ fontSize: "clamp(3.5rem, 7vw + 0.5rem, 7rem)" }}
          >
            <span className="block font-extrabold text-white motion-safe:opacity-0 motion-safe:animate-fade-up [animation-delay:160ms]">PAKO</span>
            <span className="block font-extrabold text-[#3B82F6] motion-safe:opacity-0 motion-safe:animate-fade-up [animation-delay:220ms]">ENGINEERS</span>
          </h1>

          <p
            className="mb-10 text-[15px] font-bold uppercase leading-[1.5] tracking-[0.08em] text-white motion-safe:opacity-0 motion-safe:animate-fade-up md:text-[18px] lg:text-[20px] [animation-delay:300ms]"
          >
            Manufacturer &amp; Exporter of
            <br />
            Precision Machined Components
            <br />
            &amp;
            <br />
            Pump Assemblies
          </p>

          <div className="flex flex-col gap-4 motion-safe:opacity-0 motion-safe:animate-fade-up sm:flex-row sm:gap-5 [animation-delay:420ms]">
            <Button
              href="/products"
              size="lg"
              className="h-auto rounded-full bg-[#1565C0] px-8 py-4 text-[13px] font-bold uppercase tracking-[0.1em] text-white shadow-lg transition-all hover:bg-[#1256A8]"
            >
              Explore Products
              <ArrowRight size={16} className="ml-2" />
            </Button>
            <Button
              href="/request-quote"
              size="lg"
              variant="outline"
              className="h-auto rounded-full border-2 border-white/40 px-8 py-4 text-[13px] font-bold uppercase tracking-[0.1em] text-white transition-all hover:bg-white/10"
            >
              Request Quote
              <ArrowRight size={16} className="ml-2" />
            </Button>
          </div>
        </div>
      </Container>

      <div className="relative z-10 mt-auto w-full">
        <Container>
          <div className="flex flex-col items-center justify-between gap-6 border-t border-white/15 py-8 motion-safe:opacity-0 motion-safe:animate-fade-up md:flex-row md:gap-0 lg:py-10 [animation-delay:560ms]">
            {STATS.map((stat, i) => (
              <div key={stat.title} className="flex items-center gap-0 md:flex-1">
                {i > 0 && (
                  <div className="mr-6 hidden h-12 w-px shrink-0 bg-white/20 md:block" />
                )}
                <div className="flex items-center gap-4">
                  <stat.icon
                    size={36}
                    strokeWidth={1.2}
                    className="shrink-0 text-white/80"
                  />
                  <div>
                    <p className="text-[15px] font-bold leading-tight text-white lg:text-[16px]">
                      {stat.title}
                    </p>
                    <p className="mt-0.5 text-[12px] text-white/60 lg:text-[13px]">
                      {stat.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
}
