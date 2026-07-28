import type { Metadata } from "next";
import { ProjectsContent } from "@/components/sections/projects/ProjectsContent";
import { PageHero } from "@/components/sections/PageHero";
import { CTABand } from "@/components/sections/CTABand";

import { Images } from "@/lib/images";
export const metadata: Metadata = {
  title: "Projects & Case Studies | Pako Engineers",
  description:
    "Explore Pako Engineers' precision manufacturing projects - pump assemblies, OEM partnerships, custom engineering, and export solutions for global clients.",
  alternates: { canonical: "/projects" },
  openGraph: {
    images: [{ url: Images.assets.largePumpRotorAssembly.src, width: 1200, height: 630 }],
  },
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Projects & Case Studies"
        title="Engineering Excellence in Action"
        description="From pump assembly programs for Flowserve and EBARA to custom export solutions - see how Pako Engineers delivers precision manufacturing at scale."
        backgroundImage={Images.assets.largePumpRotorAssembly.src}
      />
      <ProjectsContent />
      <CTABand />
    </>
  );
}
