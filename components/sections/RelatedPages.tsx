"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { usePathname } from "next/navigation";

const COMPANY_PAGES = [
  { label: "About Us", href: "/about" },
  { label: "Company Profile", href: "/company" },
  { label: "Our Story", href: "/our-story" },
  { label: "Infrastructure", href: "/infrastructure" },
  { label: "Manufacturing Facility", href: "/manufacturing" },
  { label: "Quality Assurance", href: "/quality" },
  { label: "ISO Certification", href: "/certifications" },
];

export function RelatedPages() {
  const pathname = usePathname();

  // Filter out current page
  const related = COMPANY_PAGES.filter((p) => p.href !== pathname);

  // Determine prev/next for sequential navigation
  const currentIdx = COMPANY_PAGES.findIndex((p) => p.href === pathname);
  const prev = currentIdx > 0 ? COMPANY_PAGES[currentIdx - 1] : null;
  const next = currentIdx < COMPANY_PAGES.length - 1 ? COMPANY_PAGES[currentIdx + 1] : null;

  return (
    <section className="border-t border-line bg-surface py-16">
      <Container>
        {/* Prev / Next Navigation */}
        {(prev || next) && (
          <div className="mb-12 grid gap-4 md:grid-cols-2">
            {prev ? (
              <Link
                href={prev.href}
                className="group flex flex-col rounded-xl border border-line bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-raised"
              >
                <span className="mb-1 text-xs font-semibold uppercase tracking-widest text-ink-muted">← Previous</span>
                <span className="font-display text-lg font-bold text-navy group-hover:text-oxide transition-colors">{prev.label}</span>
              </Link>
            ) : (
              <div />
            )}
            {next && (
              <Link
                href={next.href}
                className="group flex flex-col items-end rounded-xl border border-line bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-raised text-right"
              >
                <span className="mb-1 text-xs font-semibold uppercase tracking-widest text-ink-muted">Next →</span>
                <span className="font-display text-lg font-bold text-navy group-hover:text-oxide transition-colors">{next.label}</span>
              </Link>
            )}
          </div>
        )}

        {/* Related Pages Grid */}
        <div>
          <h3 className="mb-6 font-display text-xl font-bold text-navy">Explore Company</h3>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {related.slice(0, 4).map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className="group flex items-center justify-between rounded-lg border border-line bg-white px-5 py-4 text-sm font-semibold text-navy transition-all hover:border-oxide/30 hover:shadow-sm"
              >
                {page.label}
                <ArrowRight size={14} className="text-ink-muted transition-transform group-hover:translate-x-1 group-hover:text-oxide" />
              </Link>
            ))}
          </div>
        </div>

        {/* Cross-Links */}
        <div className="mt-8 flex flex-wrap gap-3 text-sm">
          <Link href="/products" className="rounded-full border border-line bg-white px-4 py-2 text-ink-muted transition-colors hover:border-oxide hover:text-navy">Products</Link>
          <Link href="/services" className="rounded-full border border-line bg-white px-4 py-2 text-ink-muted transition-colors hover:border-oxide hover:text-navy">Services & Capabilities</Link>
          <Link href="/projects" className="rounded-full border border-line bg-white px-4 py-2 text-ink-muted transition-colors hover:border-oxide hover:text-navy">Projects</Link>
          <Link href="/contact" className="rounded-full border border-line bg-white px-4 py-2 text-ink-muted transition-colors hover:border-oxide hover:text-navy">Contact Us</Link>
          <Link href="/request-quote" className="rounded-full border border-line bg-white px-4 py-2 text-ink-muted transition-colors hover:border-oxide hover:text-navy">Request Quote</Link>
        </div>
      </Container>
    </section>
  );
}
