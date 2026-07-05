import type { Metadata } from "next";
import Link from "next/link";
import { Search } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { products } from "@/lib/content/products";
import { NAV_LINKS, FOOTER_LINKS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Search",
  description: "Search important Pako Engineers website sections.",
  alternates: { canonical: "/search" },
};

export default function SearchPage() {
  const links = [
    ...NAV_LINKS,
    ...FOOTER_LINKS,
    ...products.map((product) => ({ href: `/products#${product.slug}`, label: product.name })),
    { href: "/request-quote", label: "Request Quote" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <PageHero
        eyebrow="Search"
        title="Find products, capabilities and company information"
        description="Use browser find on this page or jump directly to the major website sections below."
      />
      <section className="py-20 md:py-28">
        <Container>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {links.map((link) => (
              <Link key={`${link.href}-${link.label}`} href={link.href} className="flex items-center gap-3 rounded-lg border border-line bg-white p-4 text-sm font-medium text-ink shadow-card hover:text-oxide">
                <Search size={16} className="text-oxide" />
                {link.label}
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
