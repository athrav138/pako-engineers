import { Quote } from "lucide-react";
import { Container } from "@/components/ui/Container";

const TESTIMONIALS = [
  {
    quote: "Pako Engineers has consistently delivered critical pump shafts for our chemical processing units. Their adherence to dimensional tolerances on Super Duplex materials is unmatched in the region.",
    author: "T. Yamamoto",
    designation: "Procurement Head",
    company: "Global Pump Manufacturer, Japan",
  },
  {
    quote: "We shifted our entire sleeve and lock nut production to Pako. Not a single rejection in the last 4 years. Their QA documentation is incredibly thorough and reliable.",
    author: "Michael R.",
    designation: "Engineering Director",
    company: "OEM Systems, Germany",
  },
  {
    quote: "The team at Pako understands manufacturing. From drawing review to export packaging, everything is handled professionally. A true partner for our global supply chain.",
    author: "David S.",
    designation: "Sourcing Manager",
    company: "Industrial Flow Solutions, USA",
  }
];

export function TestimonialsSection() {
  return (
    <section className="bg-background-light py-20 lg:py-32">
      <Container>
        <div className="mb-16 text-center">
          <p className="mb-4 font-mono text-sm font-semibold uppercase tracking-wider text-oxide">
            Client Testimonials
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-navy md:text-4xl">
            Trusted by Engineering Leaders
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((test, i) => (
            <div
              key={i}
              className="flex flex-col justify-between rounded-2xl border border-line bg-white p-8 shadow-sm transition-shadow motion-safe:opacity-0 motion-safe:animate-fade-up hover:shadow-raised"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div>
                <Quote className="mb-6 text-oxide/20" size={48} />
                <p className="mb-8 text-lg italic leading-relaxed text-ink">
                  &quot;{test.quote}&quot;
                </p>
              </div>
              <div className="flex items-center gap-4 border-t border-line pt-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-navy font-display font-bold text-white">
                  {test.author.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-navy">{test.author}</p>
                  <p className="text-sm text-ink-muted">{test.designation}</p>
                  <p className="text-xs font-medium text-oxide">{test.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
