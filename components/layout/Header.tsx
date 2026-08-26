"use client";

import { Images } from "@/lib/images";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import {
  Menu, Phone, Mail, X, Linkedin,
  MapPin, ShieldCheck, ArrowRight, MessageSquare,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { company } from "@/lib/content/company";

/* ─────────────────────────────────────────────
   Navigation Items
   ───────────────────────────────────────────── */

type NavItem = { label: string; href: string };

const NAV_ITEMS: NavItem[] = [
  { label: "HOME", href: "/" },
  { label: "COMPANY", href: "/company" },
  { label: "PRODUCTS", href: "/products" },
  { label: "PROJECTS", href: "/projects" },
  { label: "SERVICES", href: "/services" },
  { label: "CONTACT", href: "/contact" },
];

/* ─────────────────────────────────────────────
   Header Component
   ───────────────────────────────────────────── */

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    let frame = 0;
    let last = window.scrollY > 40;
    setScrolled(last);

    const h = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const next = window.scrollY > 40;
        if (next !== last) {
          last = next;
          setScrolled(next);
        }
      });
    };

    window.addEventListener("scroll", h, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", h);
    };
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isActive = (href: string) => href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header className="fixed top-0 z-50 w-full flex flex-col">
        {/* ═══════════ TOP BAR ═══════════ */}
        <div className={cn(
          "w-full bg-[#060F1A] text-white/85 text-[12px] border-b border-white/[0.06] transition-all duration-300",
          scrolled ? "hidden" : "hidden lg:block"
        )}>
          <Container className="flex justify-between items-center h-[36px]">
            <div className="flex items-center divide-x divide-white/10">
              <a href={`tel:${company.contact.phone}`} className="flex items-center gap-1.5 pr-4 hover:text-white transition-colors">
                <Phone size={11} className="text-sky-400" />{company.contact.phone}
              </a>
              <a href={`mailto:${company.contact.email}`} className="flex items-center gap-1.5 px-4 hover:text-white transition-colors">
                <Mail size={11} className="text-sky-400" />{company.contact.email}
              </a>
              <span className="flex items-center gap-1.5 pl-4">
              <MapPin size={11} className="text-sky-400" />Burli, Maharashtra
              </span>
            </div>
            <div className="flex items-center divide-x divide-white/10">
              <span className="flex items-center gap-1.5 pr-4 text-emerald-400 font-semibold">
                <ShieldCheck size={12} />ISO 9001:2015
              </span>
              <div className="flex items-center gap-3 px-4">
                <a href="https://www.linkedin.com/company/pako-engineers/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-sky-400 transition-colors"><Linkedin size={12} /></a>
                <span className="text-white/20">|</span>
                <a href="https://www.exportersindia.com/pako-engineers/" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition-colors text-[10.5px] font-semibold tracking-wide">ExportersIndia</a>
                <span className="text-white/20">|</span>
                <a href="https://www.indiamart.com/pako-engineers/aboutus.html" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition-colors text-[10.5px] font-semibold tracking-wide">IndiaMART</a>
                <span className="text-white/20">|</span>
                <a href="https://www.justdial.com/Sangli/Pako-Engineers-Inampatta/9999PX233-X233-180411113230-R4I6_BZDET" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition-colors text-[10.5px] font-semibold tracking-wide">JustDial</a>
              </div>
            </div>
          </Container>
        </div>

        {/* ═══════════ MAIN NAV BAR ═══════════ */}
        <div className={cn(
          "w-full bg-white border-b transition-shadow duration-300",
          scrolled ? "shadow-md border-slate-200" : "shadow-sm border-slate-100"
        )}>
          <Container className="flex h-[80px] lg:h-[90px] items-center justify-between gap-3">
            <Link href="/" className="shrink-0" onClick={() => setMobileOpen(false)}>
              <div className="inline-flex items-center rounded-xl bg-transparent px-2 py-1">
                {/* Fallback rendering of user uploaded logo since we can't reliably replace the file right now */}
                {/* It uses absolute Next.js <Image> with the user's uploaded logo */}
                <Image 
                  src="/images/logos/logo.jpeg"
                  alt="Pako Engineers Logo"
                  width={240}
                  height={80}
                  className="h-[55px] w-auto object-contain"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Nav Links */}
            <nav className="hidden lg:flex items-center gap-1 mx-auto" aria-label="Primary">
              {NAV_ITEMS.map((item) => (
                <div key={item.label} className="relative">
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center px-3 py-2 text-[15px] font-bold tracking-[0.03em] rounded transition-all whitespace-nowrap",
                      isActive(item.href) ? "text-[#0A1B2E]" : "text-slate-600 hover:text-[#0A1B2E]"
                    )}
                  >
                    {item.label}
                  </Link>
                  {/* Active indicator */}
                  {isActive(item.href) && <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-[#0A1B2E] rounded-full" />}
                </div>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="hidden lg:flex items-center gap-1.5">
              <Button href="/request-quote" className="bg-[#0A1B2E] hover:bg-[#132D4A] text-white font-bold text-[12px] tracking-[0.1em] uppercase px-5 py-3 rounded flex items-center gap-1.5 h-auto ml-2 shadow-sm">
                REQUEST QUOTE <ArrowRight size={14} />
              </Button>
            </div>

            {/* Mobile Toggle */}
            <button
              type="button"
              className="lg:hidden p-2 rounded text-[#0A1B2E] hover:bg-slate-100 transition-colors"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </Container>
        </div>

        {/* ═══════════ MOBILE NAV ═══════════ */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 shadow-xl w-full max-h-[calc(100dvh-80px)] overflow-y-auto">
            <Container className="py-3">
              <nav className="flex flex-col">
                {NAV_ITEMS.map((item) => (
                  <Link 
                    key={item.label} 
                    href={item.href} 
                    className={cn("flex items-center px-3 py-3 text-[16px] font-bold tracking-wide transition-colors border-b border-slate-50 last:border-0", isActive(item.href) ? "text-[#0A1B2E]" : "text-slate-700")} 
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-4 pt-4 border-t border-slate-100 space-y-2">
                <a href={`tel:${company.contact.phone}`} className="flex items-center gap-3 text-[15px] font-medium text-slate-700 px-3 py-2"><Phone size={16} className="text-sky-600" />{company.contact.phone}</a>
                <a href={`mailto:${company.contact.email}`} className="flex items-center gap-3 text-[15px] font-medium text-slate-700 px-3 py-2"><Mail size={16} className="text-sky-600" />{company.contact.email}</a>
                <Button href="/request-quote" className="mt-4 w-full justify-center bg-[#0A1B2E] hover:bg-[#132D4A] text-white font-bold text-[14px] tracking-[0.08em] uppercase py-3">REQUEST QUOTE</Button>
              </div>
            </Container>
          </div>
        )}
      </header>
    </>
  );
}
