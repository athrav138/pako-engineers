import Link from "next/link";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <section className="py-24">
      <Container className="text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-oxide">404</p>
        <h1 className="mt-3 font-display text-4xl font-bold text-navy">Page not found</h1>
        <p className="mx-auto mt-4 max-w-xl text-muted">
          The page you requested is not available. Return to the Pako Engineers homepage or send a quote enquiry.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Link href="/" className="rounded bg-navy px-5 py-3 text-sm font-semibold text-white hover:bg-navy-light">
            Home
          </Link>
          <Link href="/request-quote" className="rounded bg-oxide px-5 py-3 text-sm font-semibold text-white hover:bg-oxide-dark">
            Request Quote
          </Link>
        </div>
      </Container>
    </section>
  );
}
