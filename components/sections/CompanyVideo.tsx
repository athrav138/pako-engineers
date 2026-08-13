import { Images } from "@/lib/images";

import Image from "next/image";
import { Play } from "lucide-react";
import { Container } from "@/components/ui/Container";

export function CompanyVideo() {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-navy py-20 lg:py-32">
      <div className="absolute inset-0 z-0">
        <Image
          src={Images.assets.shaftMachiningLathe.src}
          alt="Pako Engineers manufacturing facility"
          fill
          sizes="100vw"
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-navy/30" />
      </div>

      <Container className="relative z-10 flex flex-col items-center text-center text-white">
        <div className="motion-safe:opacity-0 motion-safe:animate-zoom-in">
          <button className="group mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-oxide text-white shadow-raised transition-transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-oxide/50">
            <Play size={36} className="ml-2 fill-current transition-transform group-hover:scale-110" />
          </button>
        </div>

        <h2 
          className="mb-6 max-w-3xl font-display text-4xl font-bold tracking-tight md:text-5xl motion-safe:opacity-0 motion-safe:animate-fade-up"
          style={{ animationDelay: '200ms' }}
        >
          See Our Manufacturing Excellence in Action
        </h2>
        <p
          className="max-w-2xl text-lg text-white/80 motion-safe:opacity-0 motion-safe:animate-fade-up"
          style={{ animationDelay: '300ms' }}
        >
          See the capability areas highlighted in the February 2026 company
          profile: machining, grinding, CNC lathe, wire-cut, in-house assembly
          and inspection support for export components.
        </p>
      </Container>
    </section>
  );
}
