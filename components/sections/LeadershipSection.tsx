import { Container } from "@/components/ui/Container";
import Image from "next/image";
import { company } from "@/lib/content/company";
import { Images } from "@/lib/images";

export function LeadershipSection() {
  const featuredLeaders = company.leadership.slice(0, 2);

  return (
    <section className="py-20 lg:py-28 bg-[#F8FAFC] border-t border-line">
      <Container>
        {/* Header */}
        <div className="mb-12 text-center">
          <p className="mb-3 font-mono text-sm font-semibold uppercase tracking-wider text-oxide">
            Leadership
          </p>
          <h2 className="font-display text-3xl font-bold text-navy md:text-4xl">
            Led by Industry Veterans
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-base leading-relaxed text-ink-muted">
            Under the stewardship of the Khot family, Pako Engineers has grown
            from a modest machining workshop into a globally recognized supplier.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 max-w-3xl mx-auto">
          {featuredLeaders.map((leader) => (
            <div
              key={leader.name}
              className="group overflow-hidden rounded-2xl border border-line bg-white shadow-sm hover:shadow-raised transition-shadow duration-300"
            >
              {/* Portrait image — fixed aspect ratio, no stretching */}
              <div className="relative w-full aspect-[3/4] overflow-hidden bg-navy/5">
                <Image
                  src={leader.image ?? Images.assets.cncOperatorMachineControlThumb.src}
                  alt={leader.name}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                {/* Subtle gradient at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/10 to-transparent" />

                {/* Name overlay on image */}
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.25em] text-white/70 mb-1">
                    {leader.role}
                  </p>
                  <h3 className="font-display text-xl font-bold leading-tight">
                    {leader.name}
                  </h3>
                </div>
              </div>

              {/* Contact row */}
              <div className="flex items-center justify-between px-6 py-4 border-t border-line">
                <span className="text-sm font-semibold text-navy">{leader.role}</span>
                <a
                  href={`tel:${leader.phone.replaceAll("-", "")}`}
                  className="text-sm text-ink-muted hover:text-oxide transition-colors"
                >
                  {leader.phone}
                </a>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
