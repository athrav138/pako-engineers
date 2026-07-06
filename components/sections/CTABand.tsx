import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

type CTABandProps = {
  title?: string;
  description?: string;
};

export function CTABand({
  title = "Have a drawing ready to quote?",
  description = "Send your specification and we will respond with capability confirmation and lead time.",
}: CTABandProps) {
  return (
    <section className="bg-navy py-16">
      <Container className="flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
        <div>
          <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
            {title}
          </h2>
          <p className="mt-4 max-w-xl text-lg text-white/70">
            {description}
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 shrink-0">
          <Button href="/contact" size="lg" className="shrink-0 bg-white text-navy hover:bg-white/90">
            Request a Quote
            <ArrowRight size={18} className="ml-2" />
          </Button>
          <Button href="/contact" size="lg" variant="outline" className="shrink-0 text-white border-white/30 hover:bg-white/10">
            Contact Sales
          </Button>
        </div>
      </Container>
    </section>
  );
}
