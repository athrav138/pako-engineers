"use client";

import Link from "next/link";
import Image from "next/image";
import { Logo } from "@/components/ui/Logo";
import { useState, useEffect, useRef, useCallback } from "react";
import {
  Menu, Phone, Mail, X, ChevronDown, ChevronRight, Linkedin,
  MapPin, ShieldCheck, ArrowRight, Building2, Package, Cog, Factory,
  Award, BookOpen, FileText, Download, Users, Globe, Briefcase, Wrench,
  Microscope, FlaskConical, Anchor, Settings, Clock, MessageSquare, Map,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

/* ─────────────────────────────────────────────
   Mega Menu Data
   ───────────────────────────────────────────── */

type MegaLink = { label: string; href: string; icon: React.ElementType };

type MegaMenuConfig = {
  heading: string;
  description: string;
  image: string;
  imageAlt: string;
  links: MegaLink[];
  featured: { title: string; desc: string; href: string; cta: string };
};

const MEGA: Record<string, MegaMenuConfig> = {
  Company: {
    heading: "Company",
    description: "30+ years of precision engineering excellence, serving pump OEMs and rotating equipment manufacturers across 12+ countries.",
    image: "/images/hero-machining.png",
    imageAlt: "Pako Engineers manufacturing facility",
    links: [
      { label: "About Us", href: "/about", icon: Building2 },
      { label: "Company Profile", href: "/company-profile", icon: FileText },
      { label: "Our Story", href: "/our-story", icon: BookOpen },
      { label: "Infrastructure", href: "/infrastructure", icon: Factory },
      { label: "Manufacturing Facility", href: "/manufacturing-facility", icon: Settings },
      { label: "Quality Assurance", href: "/quality", icon: Award },
      { label: "ISO Certification", href: "/certifications", icon: ShieldCheck },
    ],
    featured: { title: "ISO 9001:2015 Certified", desc: "Internationally recognized quality management systems ensuring precision in every component.", href: "/certifications", cta: "View Certifications" },
  },
  Products: {
    heading: "Products",
    description: "Precision machined components and pump assemblies manufactured to international standards for global OEMs.",
    image: "/images/real/pump-shafts-500x500.webp",
    imageAlt: "Precision pump shafts by Pako Engineers",
    links: [
      { label: "Pump Shafts", href: "/products/shaft", icon: Cog },
      { label: "Sleeves", href: "/products/sleeve", icon: Cog },
      { label: "Impellers", href: "/products/impeller", icon: Cog },
      { label: "Couplings", href: "/products/coupling", icon: Cog },
      { label: "Pump Components", href: "/products/pump-parts", icon: Package },
      { label: "Lock Nuts", href: "/products/lock-nut", icon: Cog },
      { label: "Retainer Rings & Bearings", href: "/products/retainer-ring", icon: Cog },
      { label: "Gears", href: "/products/gears", icon: Cog },
      { label: "All Products", href: "/products", icon: ArrowRight },
    ],
    featured: { title: "Custom Components", desc: "Send your drawing and specifications for a custom manufacturing quote.", href: "/request-quote", cta: "Request Quote" },
  },
  Projects: {
    heading: "Projects",
    description: "Delivering precision solutions for leading pump OEMs, marine systems, and industrial rotating equipment manufacturers worldwide.",
    image: "/images/quality-inspection.png",
    imageAlt: "Pako Engineers project delivery",
    links: [
      { label: "Pump Assembly Projects", href: "/projects#pump-assembly", icon: Settings },
      { label: "OEM Manufacturing", href: "/projects#oem", icon: Factory },
      { label: "Custom Engineering", href: "/projects#custom", icon: Wrench },
      { label: "Export Projects", href: "/projects#export", icon: Globe },
      { label: "Industrial Solutions", href: "/projects#industrial", icon: Cog },
    ],
    featured: { title: "Global Exports", desc: "Exporting precision components to Japan, Germany, USA, and 9+ more countries.", href: "/export-markets", cta: "View Markets" },
  },
  Services: {
    heading: "Services",
    description: "End-to-end manufacturing capabilities from CNC machining to final inspection, supporting diameters up to 1500mm.",
    image: "/images/factory-floor.png",
    imageAlt: "CNC machining services at Pako Engineers",
    links: [
      { label: "CNC Turning", href: "/capabilities#cnc-turning", icon: Wrench },
      { label: "CNC Grinding", href: "/capabilities#cnc-grinding", icon: Wrench },
      { label: "Precision Machining", href: "/capabilities#precision", icon: Cog },
      { label: "Pump Assembly", href: "/capabilities#assembly", icon: Settings },
      { label: "Custom Manufacturing", href: "/capabilities#custom", icon: Factory },
      { label: "Surface Finishing", href: "/capabilities#finishing", icon: Wrench },
      { label: "Heat Treatment", href: "/capabilities#heat-treatment", icon: FlaskConical },
      { label: "Quality Inspection", href: "/capabilities#inspection", icon: Microscope },
      { label: "Export Packaging", href: "/capabilities#packaging", icon: Package },
    ],
    featured: { title: "Max Capacity", desc: "Machining up to 1500mm diameter and 14,000mm length with CNC precision.", href: "/capabilities", cta: "View Capabilities" },
  },
  Contact: {
    heading: "Contact",
    description: "Connect with our engineering and sales team for inquiries, quotations, and technical support.",
    image: "/images/hero-machining.png",
    imageAlt: "Contact Pako Engineers",
    links: [
      { label: "Contact Us", href: "/contact", icon: MessageSquare },
      { label: "Factory Location", href: "/contact#map", icon: Map },
      { label: "Business Hours", href: "/contact#hours", icon: Clock },
      { label: "Careers", href: "/career", icon: Briefcase },
    ],
    featured: { title: "Get a Quote", desc: "Send your specifications and get a detailed manufacturing proposal within 24 hours.", href: "/request-quote", cta: "Request Quote" },
  },
};

type NavItem = { label: string; href: string; megaKey?: string };

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Company", href: "/about", megaKey: "Company" },
  { label: "Products", href: "/products", megaKey: "Products" },
  { label: "Projects", href: "/projects", megaKey: "Projects" },
  { label: "Services", href: "/capabilities", megaKey: "Services" },
  { label: "Contact", href: "/contact", megaKey: "Contact" },
];

/* ─────────────────────────────────────────────
   Header Component
   ───────────────────────────────────────────── */

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMega, setActiveMega] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  const pathname = usePathname();
  const closeTimer = useRef<ReturnType<typeof setTimeout>>(null);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  useEffect(() => {
    setActiveMega(null);
    setMobileOpen(false);

    setMobileExpanded(null);
  }, [pathname]);

  const openMega = useCallback((key: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveMega(key);
  }, []);

  const closeMega = useCallback(() => {
    closeTimer.current = setTimeout(() => setActiveMega(null), 180);
  }, []);

  const keepMega = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  }, []);

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
              <a href="tel:09860269972" className="flex items-center gap-1.5 pr-4 hover:text-white transition-colors">
                <Phone size={11} className="text-sky-400" />09860269972
              </a>
              <a href="mailto:sales@pakoshaft.com" className="flex items-center gap-1.5 px-4 hover:text-white transition-colors">
                <Mail size={11} className="text-sky-400" />sales@pakoshaft.com
              </a>
              <span className="flex items-center gap-1.5 pl-4">
                <MapPin size={11} className="text-sky-400" />Sangli, Maharashtra, India
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
              <Link href="/request-quote" className="pl-4 font-bold text-sky-400 hover:text-white transition-colors uppercase tracking-widest text-[10.5px]">
                Request a Quote
              </Link>
            </div>
          </Container>
        </div>

        {/* ═══════════ MAIN NAV BAR ═══════════ */}
        <div className={cn(
          "w-full bg-white border-b transition-shadow duration-300",
          scrolled ? "shadow-md border-slate-200" : "shadow-sm border-slate-100"
        )}>
          <Container className="flex h-[64px] items-center justify-between gap-3">
            <Link href="/" className="shrink-0" onClick={() => setMobileOpen(false)}>
              <Logo variant="default" className="h-[40px] w-auto" />
            </Link>

            {/* Desktop Nav Links */}
            <nav className="hidden lg:flex items-center gap-0 mx-auto" aria-label="Primary">
              {NAV_ITEMS.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.megaKey && openMega(item.megaKey)}
                  onMouseLeave={closeMega}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center gap-1 px-2.5 py-2 text-[13px] font-semibold tracking-[0.01em] rounded transition-all whitespace-nowrap",
                      isActive(item.href) ? "text-[#0A1B2E]" : "text-slate-600 hover:text-[#0A1B2E]",
                      activeMega === item.megaKey && "text-[#0A1B2E] bg-slate-50"
                    )}
                  >
                    {item.label}
                    {item.megaKey && <ChevronDown size={11} className={cn("ml-0.5 transition-transform duration-200 text-slate-400", activeMega === item.megaKey && "rotate-180 text-[#0A1B2E]")} />}
                  </Link>
                  {/* Active indicator */}
                  {isActive(item.href) && <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#0A1B2E] rounded-full" />}
                </div>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="hidden lg:flex items-center gap-1.5">
              <Button href="/request-quote" className="bg-[#0A1B2E] hover:bg-[#132D4A] text-white font-bold text-[11px] tracking-[0.1em] uppercase px-4 py-2.5 rounded flex items-center gap-1.5 h-auto ml-1 shadow-sm">
                REQUEST QUOTE <ArrowRight size={12} />
              </Button>
            </div>

            {/* Mobile Toggle */}
            <button
              type="button"
              className="lg:hidden p-2 rounded text-[#0A1B2E] hover:bg-slate-100 transition-colors"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </Container>
        </div>



        {/* ═══════════ MEGA MENU PANEL ═══════════ */}
        {activeMega && MEGA[activeMega] && (
          <div
            className="hidden lg:block absolute left-0 w-full bg-white border-b border-slate-200 shadow-2xl z-40"
            style={{ top: scrolled ? "64px" : "100px" }}
            onMouseEnter={keepMega}
            onMouseLeave={closeMega}
          >
            <MegaPanel config={MEGA[activeMega]} onClose={() => setActiveMega(null)} />
          </div>
        )}

        {/* ═══════════ MOBILE NAV ═══════════ */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 shadow-xl w-full max-h-[calc(100dvh-64px)] overflow-y-auto">
            <Container className="py-3">

              <nav className="flex flex-col">
                {NAV_ITEMS.map((item) => (
                  <div key={item.label} className="border-b border-slate-50 last:border-0">
                    <div className="flex items-center">
                      <Link href={item.href} className={cn("flex-1 px-3 py-3 text-[15px] font-semibold transition-colors", isActive(item.href) ? "text-[#0A1B2E]" : "text-slate-700")} onClick={() => setMobileOpen(false)}>
                        {item.label}
                      </Link>
                      {item.megaKey && (
                        <button type="button" onClick={() => setMobileExpanded(mobileExpanded === item.megaKey ? null : (item.megaKey ?? null))} className="p-3 text-slate-400" aria-label={`Expand ${item.label}`}>
                          <ChevronDown size={15} className={cn("transition-transform duration-200", mobileExpanded === item.megaKey && "rotate-180")} />
                        </button>
                      )}
                    </div>
                    {item.megaKey && mobileExpanded === item.megaKey && MEGA[item.megaKey] && (
                      <div className="ml-3 mb-2 pl-3 border-l-2 border-[#0A1B2E]/10 flex flex-col">
                        {MEGA[item.megaKey].links.map((sub) => {
                          const Icon = sub.icon;
                          return (
                            <Link key={sub.label} href={sub.href} onClick={() => setMobileOpen(false)} className="flex items-center gap-2.5 px-3 py-2 text-[13.5px] text-slate-600 hover:text-[#0A1B2E] rounded transition-colors">
                              <Icon size={13} className="text-slate-400 shrink-0" />{sub.label}
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
              <div className="mt-4 pt-4 border-t border-slate-100 space-y-2">
                <a href="tel:09860269972" className="flex items-center gap-3 text-sm text-slate-700 px-3 py-2"><Phone size={14} className="text-sky-600" />09860269972</a>
                <a href="mailto:sales@pakoshaft.com" className="flex items-center gap-3 text-sm text-slate-700 px-3 py-2"><Mail size={14} className="text-sky-600" />sales@pakoshaft.com</a>
                <Button href="/request-quote" className="mt-2 w-full justify-center bg-[#0A1B2E] hover:bg-[#132D4A] text-white font-bold text-[12px] tracking-[0.08em] uppercase">REQUEST QUOTE</Button>
              </div>
            </Container>
          </div>
        )}
      </header>

      {/* Overlay for mega menu */}
      {activeMega && <div className="fixed inset-0 z-30 bg-black/10 hidden lg:block" onClick={() => setActiveMega(null)} />}
    </>
  );
}

/* ─────────────────────────────────────────────
   3‑Panel Mega Menu (Bosch / Siemens style)
   ───────────────────────────────────────────── */

function MegaPanel({ config, onClose }: { config: MegaMenuConfig; onClose: () => void }) {
  return (
    <Container className="py-0">
      <div className="grid grid-cols-[240px_1fr_260px] min-h-[320px]">
        {/* LEFT: Image + Description */}
        <div className="bg-[#0A1B2E] text-white p-6 flex flex-col justify-between relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <Image src={config.image} alt={config.imageAlt} fill className="object-cover" sizes="240px" />
          </div>
          <div className="relative z-10">
            <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-sky-400 mb-3">{config.heading}</h3>
            <p className="text-[13px] leading-relaxed text-white/75">{config.description}</p>
          </div>
          <div className="relative z-10">
            <Link href={config.featured.href} onClick={onClose} className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-sky-400 hover:text-white transition-colors">
              Explore <ArrowRight size={12} />
            </Link>
          </div>
        </div>

        {/* CENTER: Navigation Links */}
        <div className="px-8 py-6 border-x border-slate-100">
          <div className={cn("grid gap-0.5", config.links.length > 6 ? "grid-cols-2" : "grid-cols-1")}>
            {config.links.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={onClose}
                  className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-[13.5px] text-slate-600 hover:bg-slate-50 hover:text-[#0A1B2E] transition-all group"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded bg-slate-100 text-slate-400 group-hover:bg-[#0A1B2E] group-hover:text-white transition-all">
                    <Icon size={14} />
                  </span>
                  <span className="font-medium">{item.label}</span>
                  <ChevronRight size={12} className="ml-auto text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              );
            })}
          </div>
        </div>

        {/* RIGHT: Featured / CTA */}
        <div className="p-6 bg-slate-50/70 flex flex-col justify-between">
          <div>
            <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-widest bg-[#0A1B2E]/10 text-[#0A1B2E] mb-3">Featured</span>
            <h4 className="text-[15px] font-bold text-[#0A1B2E] mb-2">{config.featured.title}</h4>
            <p className="text-[12.5px] text-slate-500 leading-relaxed">{config.featured.desc}</p>
          </div>
          <Link
            href={config.featured.href}
            onClick={onClose}
            className="mt-4 flex items-center justify-center gap-2 rounded bg-[#0A1B2E] px-4 py-2.5 text-[11px] font-bold uppercase tracking-widest text-white hover:bg-[#132D4A] transition-colors shadow-sm"
          >
            {config.featured.cta} <ArrowRight size={12} />
          </Link>
          <div className="mt-4 pt-4 border-t border-slate-200">
            <p className="text-[11px] text-slate-400 mb-1">Need help?</p>
            <a href="tel:09860269972" className="flex items-center gap-1.5 text-[12px] font-semibold text-[#0A1B2E] hover:text-sky-600 transition-colors">
              <Phone size={12} />09860269972
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
}
