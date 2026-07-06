import Link from "next/link";
import Image from "next/image";
import { MapPin, Mail, Phone, ShieldCheck, Award } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { company } from "@/lib/content/company";

export function Footer() {
  return (
    <footer className="border-t border-line bg-navy text-white">
      <Container className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        {/* Column 1: Company Info */}
        <div>
          <div className="relative h-16 w-60 overflow-hidden bg-white">
            <Image
              src={company.logo}
              alt={`${company.name} logo`}
              fill
              sizes="240px"
              className="object-contain"
            />
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
            {["About Us", "Company Profile", "Our Story", "Manufacturing", "Quality Assurance"].map((item) => (
              <li key={item}>
                <Link href={`/${item.toLowerCase().replace(/ /g, "-")}`} className="text-sm text-white/80 transition-colors hover:text-white">
                  {item}
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
            {["Products", "Capabilities", "Industries Served", "Careers"].map((item) => (
              <li key={item}>
                <Link href={`/${item.toLowerCase().replace(/ /g, "-")}`} className="text-sm text-white/80 transition-colors hover:text-white">
                  {item}
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
          </div>
        </Container>
      </div>
    </footer>
  );
}
