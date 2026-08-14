import type { Metadata, Viewport } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingActions } from "@/components/layout/FloatingActions";
import { Analytics } from "@/components/seo/Analytics";
import { SITE_URL, DEFAULT_META_DESCRIPTION } from "@/lib/constants";
import { company } from "@/lib/content/company";
import { Images } from "@/lib/images";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  preload: false,
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Pako Engineers | Precision Machined Components & Pump Assemblies",
    template: "%s | Pako Engineers",
  },
  description: DEFAULT_META_DESCRIPTION,
  applicationName: "Pako Engineers",
  authors: [{ name: "Pako Engineers", url: SITE_URL }],
  creator: "Pako Engineers",
  publisher: "Pako Engineers",
  category: "Industrial Manufacturing",
  keywords: [
    "Pako Engineers",
    "precision machined components",
    "pump shafts",
    "pump assemblies",
    "CNC machining India",
    "ISO 9001 manufacturer",
    "Sangli engineering manufacturer",
  ],
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: "Pako Engineers",
    title: "Pako Engineers | Precision Machined Components & Pump Assemblies",
    description: DEFAULT_META_DESCRIPTION,
    url: SITE_URL,
    locale: "en_IN",
    images: [
      {
        url: Images.assets.cncTurningHero.src,
        width: Images.assets.cncTurningHero.width,
        height: Images.assets.cncTurningHero.height,
        alt: Images.assets.cncTurningHero.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pako Engineers | Precision Machined Components & Pump Assemblies",
    description: DEFAULT_META_DESCRIPTION,
    images: [Images.assets.cncTurningHero.src],
  },
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: company.logo,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0A1B2E",
  colorScheme: "light",
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
  logo: `${SITE_URL}${company.logo}`,
  email: company.contact.email,
  telephone: company.contact.phone,
  sameAs: [
    company.links.linkedin,
    company.links.exportersIndia,
    company.links.indiaMart,
    company.links.justDial,
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${spaceGrotesk.variable} flex min-h-screen flex-col bg-white font-body text-ink antialiased`}>
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
        <Analytics />
      </body>
    </html>
  );
}
