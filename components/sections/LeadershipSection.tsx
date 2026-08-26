import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { company } from "@/lib/content/company";
import { Images } from "@/lib/images";
import { cn } from "@/lib/utils";

type LeadershipSectionProps = {
  variant?: "default" | "large";
};

export function LeadershipSection({ variant = "default" }: LeadershipSectionProps) {
  const featuredLeaders = company.leadership.slice(0, 2);
  const isLarge = variant === "large";

  return (
    <section
      className={cn(
        "border-t border-line bg-[#F8FAFC]",
        isLarge ? "py-20 lg:py-32" : "py-20 lg:py-28",
      )}
    >
      <Container>
        <div className={cn("text-center", isLarge ? "mb-14" : "mb-12")}>
          <p className="mb-3 font-mono text-sm font-semibold uppercase tracking-wider text-oxide">
            Leadership
          </p>
          <h2
            className={cn(
              "font-display font-bold text-navy",
              isLarge ? "text-4xl md:text-5xl" : "text-3xl md:text-4xl",
            )}
          >
            Led by Industry Veterans
          </h2>
          <p
            className={cn(
              "mx-auto mt-4 leading-relaxed text-ink-muted",
              isLarge ? "max-w-3xl text-lg" : "max-w-2xl text-base",
            )}
          >
            Under the stewardship of the Khot family, Pako Engineers has grown
            from a modest machining workshop into a globally recognized supplier.
          </p>
        </div>

        <div
          className={cn(
            "mx-auto grid grid-cols-1 sm:grid-cols-2",
            isLarge ? "max-w-6xl gap-10 lg:gap-12" : "max-w-3xl gap-8",
          )}
        >
          {featuredLeaders.map((leader) => (
            <div
              key={leader.name}
              className={cn(
                "group overflow-hidden border border-line bg-white shadow-sm transition-shadow duration-300 hover:shadow-raised",
                isLarge ? "rounded-xl" : "rounded-2xl",
              )}
            >
              <div
                className={cn(
                  "relative w-full overflow-hidden bg-navy/5",
                  isLarge
                    ? "aspect-[4/5] min-h-[460px] sm:min-h-[560px]"
                    : "aspect-[3/4]",
                )}
              >
                <Image
                  src={leader.image ?? Images.assets.cncOperatorMachineControlThumb.src}
                  alt={leader.name}
                  fill
                  sizes={
                    isLarge
                      ? "(max-width: 640px) 100vw, 560px"
                      : "(max-width: 640px) 100vw, 50vw"
                  }
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  priority={isLarge}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/10 to-transparent" />

                <div
                  className={cn(
                    "absolute inset-x-0 bottom-0 text-white",
                    isLarge ? "p-7 lg:p-8" : "p-6",
                  )}
                >
                  <p
                    className={cn(
                      "mb-1 font-mono font-semibold uppercase tracking-[0.25em] text-white/70",
                      isLarge ? "text-xs" : "text-[10px]",
                    )}
                  >
                    {leader.role}
                  </p>
                  <h3
                    className={cn(
                      "font-display font-bold leading-tight",
                      isLarge ? "text-3xl" : "text-xl",
                    )}
                  >
                    {leader.name}
                  </h3>
                </div>
              </div>

              <div
                className={cn(
                  "flex items-center justify-between border-t border-line",
                  isLarge ? "px-7 py-5 lg:px-8" : "px-6 py-4",
                )}
              >
                <span className={cn("font-semibold text-navy", isLarge ? "text-base" : "text-sm")}>
                  {leader.role}
                </span>
                <a
                  href={`tel:${leader.phone.replaceAll("-", "")}`}
                  className={cn(
                    "text-ink-muted transition-colors hover:text-oxide",
                    isLarge ? "text-base" : "text-sm",
                  )}
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
