"use client";

import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { Container } from "@/components/ui/Container";

export type BreadcrumbItem = {
  label: string;
  href: string;
};

export function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  // Generate JSON-LD Schema
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://pakoshaft.com/",
      },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: item.label,
        item: `https://pakoshaft.com${item.href}`,
      })),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="bg-surface py-3 border-b border-line">
        <Container>
          <nav className="flex items-center space-x-2 text-sm text-ink-muted overflow-x-auto whitespace-nowrap scrollbar-hide">
            <Link href="/" className="hover:text-navy transition-colors flex items-center">
              <Home size={14} />
            </Link>
            {items.map((item, i) => (
              <div key={item.href} className="flex items-center space-x-2">
                <ChevronRight size={14} className="text-line flex-shrink-0" />
                <Link
                  href={item.href}
                  className={`hover:text-navy transition-colors ${
                    i === items.length - 1 ? "font-semibold text-navy" : ""
                  }`}
                >
                  {item.label}
                </Link>
              </div>
            ))}
          </nav>
        </Container>
      </div>
    </>
  );
}
