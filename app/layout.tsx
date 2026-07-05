import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingActions } from "@/components/layout/FloatingActions";
import { SITE_URL, DEFAULT_META_DESCRIPTION } from "@/lib/constants";
import { company } from "@/lib/content/company";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Pako Engineers | Precision Machining & Export Manufacturer",
    template: "%s | Pako Engineers",
  },
  description: DEFAULT_META_DESCRIPTION,
  openGraph: {
    type: "website",
    siteName: "Pako Engineers",
    title: "Pako Engineers | Precision Machining & Export Manufacturer",
    description: DEFAULT_META_DESCRIPTION,
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: "Pako Engineers | Precision Machining & Export Manufacturer",
    description: DEFAULT_META_DESCRIPTION,
  },
  alternates: {
    canonical: SITE_URL,
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ManufacturingOrganization",
  name: company.name,
  url: SITE_URL,
  foundingDate: String(company.founded),
  address: {
    "@type": "PostalAddress",
    streetAddress: company.address.line1,
    addressLocality: "Sangli",
    addressRegion: "Maharashtra",
    postalCode: "416308",
    addressCountry: "IN",
  },
  contactPoint: company.leadership.map((person) => ({
    "@type": "ContactPoint",
    contactType: person.role,
    telephone: person.phone,
  })),
  makesOffer: [
    "Shafts",
    "Sleeves",
    "Couplings",
    "Lock Nuts",
    "Pump Parts & Accessories",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col bg-white font-body text-ink antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-navy focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <FloatingActions />
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </body>
    </html>
  );
}
