import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

type CTABandProps = {
  title?: string;
  description?: string;
};

export function CTABand({
  title = "Have a drawing ready to quote?",
  description = "Send your specification and we'll respond with capability confirmation and lead time.",
}: CTABandProps) {
  return (
    <section className="bg-navy py-16">
      <Container className="flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
        <div>
          <h2 className="font-display text-2xl font-bold text-white md:text-3xl">
            {title}
          </h2>
          <p className="mt-2 max-w-xl text-white/70">{description}</p>
        </div>
        <Button href="/contact" size="lg" className="shrink-0">
          Request a Quote
          <ArrowRight size={18} />
        </Button>
      </Container>
    </section>
  );
}
