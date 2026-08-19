import { Container } from "@/components/ui/Container";
import Image from "next/image";
import { company } from "@/lib/content/company";
import { Images } from "@/lib/images";

export function LeadershipSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#F8FAFC] border-t border-line">
      <Container>
        <div className="grid gap-16 lg:grid-cols-2 items-center">
          <div>
            <p className="mb-4 font-mono text-sm font-semibold uppercase tracking-wider text-oxide">Leadership</p>
            <h2 className="font-display text-3xl font-bold text-navy mb-6 md:text-4xl">
              Led by Industry Veterans
            </h2>
            <p className="text-lg leading-relaxed text-ink-muted mb-8">
              Under the stewardship of the Khot family, Pako Engineers has grown from a modest machining workshop into a globally recognized supplier. Our leadership prioritizes engineering excellence, continuous improvement, and customer partnership.
            </p>
            <div className="space-y-6">
              {company.leadership.map((leader) => (
                <div key={leader.name} className="flex items-start gap-5 rounded-xl border border-line bg-white p-6 shadow-sm">
                  <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg border border-line bg-navy/5">
                    {leader.image ? (
                      <Image
                        src={leader.image}
                        alt={leader.name}
                        fill
                        sizes="80px"
                        className="object-cover object-top"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-navy text-white font-bold text-xl">
                        {leader.name.split(" ").slice(-1)[0]?.[0] ?? "P"}
                      </div>
                    )}
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-navy">{leader.name}</h3>
                    <p className="text-sm text-oxide font-semibold">{leader.role}</p>
                    <a href={`tel:${leader.phone.replaceAll("-", "")}`} className="mt-1 block text-sm text-ink-muted hover:text-navy transition-colors">
                      {leader.phone}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-raised border border-line hidden lg:block">
            <Image
              src={Images.assets.cncOperatorMachineControlThumb.src}
              alt="Pako Engineers Machine Setup"
              fill
              sizes="50vw"
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
