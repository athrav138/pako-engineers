import { Container } from "@/components/ui/Container";
import { clients } from "@/lib/content/company";

/**
 * Displays client wordmarks as styled text rather than logo image files,
 * since logo usage requires written permission from each client (see
 * Section 11 of the specification document). Swap for <Image> logos
 * once permissions and brand assets are confirmed.
 */
export function ClientStrip() {
  return (
    <section className="border-y border-line bg-surface py-16">
      <Container>
        <p className="text-center text-sm font-semibold uppercase tracking-wide text-muted">
          Trusted by global pump manufacturers &amp; OEMs
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {clients.map((client) => (
            <span
              key={client.name}
              className="font-display text-lg font-semibold text-navy/60 grayscale transition-all hover:text-navy hover:grayscale-0"
            >
              {client.name}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
