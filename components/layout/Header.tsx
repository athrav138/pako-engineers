"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, Phone, Search, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { NAV_LINKS } from "@/lib/constants";
import { company } from "@/lib/content/company";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled || !isHome || open
          ? "border-b border-line bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/85"
          : "bg-transparent border-transparent"
      )}
    >
      <Container className="flex h-20 items-center justify-between gap-5">
        <Link href="/" className="flex min-w-44 flex-col leading-none" onClick={() => setOpen(false)}>
          <span className={cn(
            "font-display text-xl font-bold tracking-tight transition-colors",
            !scrolled && isHome && !open ? "text-white" : "text-navy"
          )}>
            PAKO ENGINEERS
          </span>
          <span className={cn(
            "text-[11px] font-medium uppercase tracking-wider transition-colors",
            !scrolled && isHome && !open ? "text-white/80" : "text-muted"
          )}>
            Precision Machining &amp; Export
          </span>
        </Link>

        <nav className="hidden flex-1 items-center justify-center gap-5 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "relative text-sm font-medium transition-colors hover:text-oxide",
                pathname === link.href 
                  ? "text-oxide" 
                  : (!scrolled && isHome && !open ? "text-white/90" : "text-ink"),
                "after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-oxide after:transition-all hover:after:w-full"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Link
            href="/search"
            className={cn(
              "inline-flex h-10 w-10 items-center justify-center rounded border transition-colors hover:bg-surface",
              !scrolled && isHome && !open ? "border-white/30 text-white hover:text-navy" : "border-line text-navy"
            )}
            aria-label="Search website"
          >
            <Search size={18} />
          </Link>
          <a
            href={`tel:${company.leadership[0].phone.replaceAll("-", "")}`}
            className={cn(
              "inline-flex h-10 w-10 items-center justify-center rounded border transition-colors hover:bg-surface",
              !scrolled && isHome && !open ? "border-white/30 text-white hover:text-navy" : "border-line text-navy"
            )}
            aria-label="Call Pako Engineers"
          >
            <Phone size={18} />
          </a>
          <Button href="/request-quote" size="sm">
            Request Quote
          </Button>
        </div>

        <button
          type="button"
          className={cn(
            "inline-flex items-center justify-center rounded p-2 lg:hidden",
            !scrolled && isHome && !open ? "text-white" : "text-navy"
          )}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </Container>

      {open && (
        <div className="border-t border-line bg-white lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded px-2 py-3 text-sm font-medium text-ink hover:bg-surface"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/search"
              className="rounded px-2 py-3 text-sm font-medium text-ink hover:bg-surface"
              onClick={() => setOpen(false)}
            >
              Search
            </Link>
            <Button href="/request-quote" size="sm" className="mt-2 justify-center">
              Request Quote
            </Button>
          </Container>
        </div>
      )}
    </header>
  );
}
