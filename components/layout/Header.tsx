"use client";

import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { useState, useEffect } from "react";
import { Menu, Phone, Mail, X, ChevronDown, Linkedin, ExternalLink, Store, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Products", href: "/products", hasDropdown: true },
  { label: "Manufacturing", href: "/manufacturing", hasDropdown: true },
  { label: "Quality", href: "/quality", hasDropdown: true },

  { label: "Resources", href: "/resources", hasDropdown: true },
  { label: "Contact Us", href: "/contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 z-50 w-full flex flex-col transition-all duration-300">
      {/* Top Bar - Dark Navy */}
      <div 
        className={cn(
          "w-full bg-[#0A1B2E] text-white py-[10px] text-[13px] transition-all duration-300", 
          scrolled ? "hidden" : "hidden lg:block"
        )}
      >
        <Container className="flex justify-between items-center">
          <div className="flex items-center gap-8">
            <a href="tel:+919421251769" className="flex items-center gap-2 hover:text-blue-300 transition-colors">
              <Phone size={14} />
              <span>+91 94212 51769</span>
            </a>
            <a href="mailto:info@pakoshaft.com" className="flex items-center gap-2 hover:text-blue-300 transition-colors">
              <Mail size={14} />
              <span>info@pakoshaft.com</span>
            </a>
          </div>
          <div className="flex items-center gap-6">
            <span className="opacity-90">ISO 9001:2015 Certified Company</span>
            <div className="flex items-center gap-3 ml-3">
              <a href="https://www.linkedin.com/company/pako-engineers/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition-colors" aria-label="LinkedIn" title="LinkedIn"><Linkedin size={15} /></a>
              <span className="text-white/30">|</span>
              <a href="https://www.indiamart.com/pako-engineers/aboutus.html" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition-colors text-[11px] font-semibold tracking-wide" title="IndiaMART">IndiaMART</a>
              <span className="text-white/30">|</span>
              <a href="https://www.exportersindia.com/pako-engineers/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition-colors text-[11px] font-semibold tracking-wide" title="ExportersIndia">ExportersIndia</a>
              <span className="text-white/30">|</span>
              <a href="https://www.justdial.com/Sangli/Pako-Engineers-Inampatta/9999PX233-X233-180411113230-R4I6_BZDET" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition-colors text-[11px] font-semibold tracking-wide" title="JustDial">JustDial</a>
            </div>
          </div>
        </Container>
      </div>

      {/* Main Navigation - White */}
      <div className="bg-white w-full border-b border-line shadow-sm">
        <Container className="flex h-[72px] items-center justify-between gap-4">
          <Link href="/" className="flex items-center shrink-0" onClick={() => setOpen(false)}>
            <Logo variant="default" className="h-[44px] w-auto" />
          </Link>

          <nav className="hidden lg:flex flex-1 items-center justify-center gap-6" aria-label="Primary">
            {NAV_ITEMS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={cn(
                  "flex items-center gap-1 text-[13px] font-medium transition-colors relative py-1 whitespace-nowrap",
                  pathname === link.href ? "text-navy" : "text-navy/80 hover:text-navy",
                  pathname === link.href && "after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-navy"
                )}
              >
                {link.label}
                {link.hasDropdown && <ChevronDown size={13} className="mt-[1px] text-navy/50" />}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center">
            <Button href="/request-quote" className="bg-[#0A1B2E] hover:bg-[#0D2240] text-white font-semibold text-[12px] tracking-[0.08em] uppercase px-6 py-3 rounded-sm flex items-center gap-2 h-auto">
              REQUEST QUOTE <ArrowRight size={14} />
            </Button>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded p-2 lg:hidden text-navy"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </Container>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <div className="bg-white border-b border-line shadow-sm lg:hidden w-full max-h-[calc(100vh-80px)] overflow-y-auto">
          <Container className="flex flex-col py-4 gap-1">
            {NAV_ITEMS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="flex items-center justify-between rounded px-3 py-3 text-[15px] font-medium text-navy hover:bg-surface transition-colors"
                onClick={() => setOpen(false)}
              >
                {link.label}
                {link.hasDropdown && <ChevronDown size={16} className="text-navy/50" />}
              </Link>
            ))}
            <div className="mt-4 pt-4 border-t border-line flex flex-col gap-3">
              <a href="tel:+919421251769" className="flex items-center gap-3 text-sm text-navy px-3 py-2">
                <Phone size={16} className="text-orange" />
                <span>+91 94212 51769</span>
              </a>
              <a href="mailto:info@pakoshaft.com" className="flex items-center gap-3 text-sm text-navy px-3 py-2">
                <Mail size={16} className="text-orange" />
                <span>info@pakoshaft.com</span>
              </a>
              <Button href="/request-quote" className="mt-2 w-full justify-center bg-navy hover:bg-navy/90 text-white font-semibold">
                REQUEST QUOTE
              </Button>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
