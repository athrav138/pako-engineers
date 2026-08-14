import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { MapPin, Mail, Phone, ShieldCheck, Award, Clock } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { company } from "@/lib/content/company";

export function Footer() {
  return (
    <footer className="border-t border-line bg-navy text-white">
      <Container className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        {/* Column 1: Company Info */}
        <div>
          <div className="inline-flex rounded-xl bg-white px-3 py-2 shadow-sm ring-1 ring-black/5">
            <Logo className="h-14 w-auto" />
          </div>
          <p className="mt-4 text-sm leading-relaxed text-white/70">
            {company.tagline} Trusted worldwide since {company.founded}.
          </p>
          <div className="mt-6 flex flex-col gap-3">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium">
              <ShieldCheck size={14} className="text-oxide" />
              ISO 9001:2015 Certified
            </div>
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium">
              <Award size={14} className="text-oxide" />
              Made in India
            </div>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-white/50">
            Company
          </p>
          <ul className="mt-6 space-y-3">
            {([
              { label: "About Us", href: "/about" },
              { label: "Company Profile", href: "/company-profile" },
              { label: "Our Story", href: "/our-story" },
              { label: "Manufacturing", href: "/manufacturing-facility" },
              { label: "Quality Assurance", href: "/quality" },
            ] as const).map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="text-sm text-white/80 transition-colors hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Products & Resources */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-white/50">
            Products & Resources
          </p>
          <ul className="mt-6 space-y-3">
            {([
              { label: "Products", href: "/products" },
              { label: "Capabilities", href: "/capabilities" },
              { label: "Industries Served", href: "/industries" },
              { label: "Careers", href: "/careers" },
            ] as const).map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="text-sm text-white/80 transition-colors hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Contact */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-white/50">
            Contact
          </p>
          <ul className="mt-6 space-y-4 text-sm text-white/80">
            <li className="flex gap-3">
              <MapPin size={18} className="mt-0.5 shrink-0 text-white/50" />
              <span className="leading-relaxed">{company.address.full}</span>
            </li>
            {company.leadership.map((person) => (
              <li key={person.phone} className="flex gap-3">
                <Phone size={18} className="mt-0.5 shrink-0 text-white/50" />
                <a href={`tel:${person.phone.replaceAll("-", "")}`} className="transition-colors hover:text-white">
                  {person.phone}
                </a>
              </li>
            ))}
            <li className="flex gap-3">
              <Mail size={18} className="mt-0.5 shrink-0 text-white/50" />
              <a href={`mailto:${company.contact.email}`} className="transition-colors hover:text-white">
                {company.contact.email}
              </a>
            </li>
            <li className="flex gap-3">
              <Phone size={18} className="mt-0.5 shrink-0 text-white/50" />
              <a href={`tel:${company.contact.phone}`} className="transition-colors hover:text-white">
                {company.contact.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <Clock size={18} className="mt-0.5 shrink-0 text-white/50" />
              <span className="leading-relaxed">
                {company.businessHours.open}<br />
                {company.businessHours.closed} — Closed
              </span>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10 bg-black/20">
        <Container className="flex flex-col items-center justify-between gap-4 py-6 text-xs text-white/50 md:flex-row">
          <span>
            &copy; {new Date().getFullYear()} Pako Engineers. All rights reserved.
          </span>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/cookie-policy" className="hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
