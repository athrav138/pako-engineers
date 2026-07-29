import { company, machiningCapacity, inHouseTesting, outsourcedTesting, galleryItems } from "@/lib/content/company";
import { getAllProducts } from "@/lib/content/products";
import { Images } from "@/lib/images";

export type ProjectSlug =
  | "pump-assembly-projects"
  | "oem-manufacturing"
  | "custom-engineering"
  | "export-projects"
  | "industrial-solutions";

type LinkItem = {
  label: string;
  href: string;
};

type ProjectSection = {
  title: string;
  body?: string;
  items?: string[];
};

type IndustrySolution = {
  industry: string;
  challenge: string;
  solution: string;
  productsUsed: string[];
};

export type ProjectPageData = {
  slug: ProjectSlug;
  title: string;
  eyebrow: string;
  description: string;
  image: string;
  overview: string;
  sections: ProjectSection[];
  highlights?: string[];
  gallery?: typeof galleryItems;
  relatedProductSlugs?: string[];
  faqs?: { question: string; answer: string }[];
  industrySolutions?: IndustrySolution[];
  links: LinkItem[];
};

const productLinks = getAllProducts().map((product) => ({
  label: product.name,
  href: `/products/${product.slug}`,
}));

const commonLinks: LinkItem[] = [
  { label: "Products", href: "/products" },
  { label: "Services", href: "/capabilities" },
  { label: "Manufacturing Facility", href: "/manufacturing-facility" },
  { label: "Quality", href: "/quality" },
  { label: "Contact", href: "/contact" },
  { label: "RFQ", href: "/request-quote" },
  { label: "Downloads", href: "/company-profile" },
];

const capacityItems = machiningCapacity.map((item) => `${item.process}: ${item.range}`);
const qualityItems = [...inHouseTesting, ...outsourcedTesting.map((item) => `${item} available through approved external facilities`)];

export const projectPages: ProjectPageData[] = [
  {
    slug: "pump-assembly-projects",
    title: "Pump Assembly Projects",
    eyebrow: "Projects",
    description: "Drawing-led pump component and assembly support for OEM pump programs.",
    image: Images.assets.verticalPumpAssembly.src,
    overview:
      "Pako Engineers manufactures precision machined pump shafts, sleeves, couplings, lock nuts, retainer rings, bearings and pump parts for OEM assembly programs. Work is controlled through drawing review, routing, machining, inspection, documentation and dispatch.",
    sections: [
      {
        title: "Manufacturing Workflow",
        items: [
          "Drawing and material requirement review",
          "Raw material planning with traceability checks",
          "CNC turning, grinding, key-way machining and wire-cut operations as required",
          "In-process dimensional inspection",
          "Final inspection, documentation and dispatch preparation",
        ],
      },
      {
        title: "Engineering Highlights",
        items: [
          "Shaft machining from 50 mm to 1500 mm diameter and up to 8,000 mm (8 mtr) length",
          "Grinding capability for critical bearing and seal areas (up to 6,500 mm length)",
          "Internal key-way capability for sleeves, couplings and bushes",
          "Pump assembly component machining supported by in-house inspection",
        ],
      },
    ],
    gallery: galleryItems,
    relatedProductSlugs: ["shaft", "sleeve", "coupling", "impeller"],
    faqs: [
      {
        question: "Can Pako Engineers support pump OEM assembly programs?",
        answer: "Yes. Pako Engineers manufactures precision pump components and pump assembly parts to customer drawings, approved material requirements and inspection plans.",
      },
      {
        question: "Are drawings required for pump assembly project quotations?",
        answer: "Yes. Drawings, material grades, quantities and inspection requirements are needed before manufacturing feasibility and lead time can be confirmed.",
      },
    ],
    links: [...commonLinks, ...productLinks.slice(0, 4)],
  },
  {
    slug: "oem-manufacturing",
    title: "OEM Manufacturing",
    eyebrow: "Projects",
    description: "Repeatable build-to-print manufacturing support for pump OEMs and rotating equipment manufacturers.",
    image: Images.assets.cncTurningHero.src,
    overview:
      "Pako Engineers supports OEM manufacturing with precision turning, grinding, CNC lathe machining, wire-cut machining, internal key-way machining and custom gear manufacturing. The workflow is suited to drawing-controlled production where repeatability, documentation and inspection discipline are critical.",
    sections: [
      {
        title: "OEM Workflow",
        items: [
          "Technical drawing and revision review",
          "Process planning with machine routing",
          "Material traceability and incoming inspection",
          "Batch machining with in-process inspection",
          "Final dimensional verification and document release",
        ],
      },
      {
        title: "Advantages",
        items: [
          "Established manufacturing activity for precision machined components and pump assemblies",
          "ISO 9001:2015 quality management system",
          "Experience serving pump OEMs and rotating equipment manufacturers across export markets",
          "Document-controlled production suited to repeat orders",
        ],
      },
      { title: "Manufacturing Capability", items: capacityItems },
      { title: "Quality", items: qualityItems },
    ],
    relatedProductSlugs: ["shaft", "retainer-ring", "lock-nut", "gears"],
    links: commonLinks,
  },
  {
    slug: "custom-engineering",
    title: "Custom Engineering",
    eyebrow: "Projects",
    description: "Custom precision component manufacturing support for drawings, samples and prototypes.",
    image: Images.assets.precisionQualityInspection.src,
    overview:
      "Custom engineering work is handled as a controlled manufacturing support process. Pako Engineers reviews customer requirements, confirms feasible machining routes and manufactures components based on approved drawings, samples or technical specifications.",
    sections: [
      {
        title: "Engineering Process",
        items: [
          "Requirement capture from drawings, samples or technical notes",
          "Manufacturability review for material, tolerance and finish",
          "Process route selection across turning, grinding, VMC key-way and wire-cut operations",
          "Inspection planning before production release",
        ],
      },
      {
        title: "Reverse Engineering",
        body:
          "Reverse engineering support can be assessed when OEM drawings are unavailable. Real geometry, tolerance and material details must be confirmed by the customer before production release.",
      },
      {
        title: "Prototype Development",
        body:
          "Prototype and small-batch work is supported where machining feasibility, material availability and inspection requirements are clear.",
      },
      {
        title: "Manufacturing Support",
        items: capacityItems,
      },
    ],
    relatedProductSlugs: ["pump-parts", "gears", "coupling", "sleeve"],
    links: commonLinks,
  },
  {
    slug: "export-projects",
    title: "Export Projects",
    eyebrow: "Projects",
    description: "Export-ready precision components with documentation, packaging and compliance support.",
    image: Images.assets.factoryBuildingExteriorThumb.src,
    overview:
      "Pako Engineers exports precision machined components and pump assemblies to customers across Asia, Europe, the Middle East and North America. Export projects are prepared with documentation, packaging and dispatch coordination aligned to customer purchase order requirements.",
    sections: [
      {
        title: "Countries Served",
        items: [...company.exportCountries],
      },
      {
        title: "Export Process",
        items: [
          "Order and drawing review",
          "Manufacturing and inspection release",
          "Packing list and dispatch documentation preparation",
          "Export-safe packaging based on component geometry",
          "Shipment coordination as agreed with the customer",
        ],
      },
      {
        title: "Packaging",
        body:
          "Packing is selected based on component size, machined surfaces and transport mode. Final export packing requirements should be confirmed during order review.",
      },
      {
        title: "Documentation",
        items: [
          "Material test certificates where applicable",
          "Dimensional inspection reports where required",
          "Purchase order and drawing revision references",
          "Packing documentation for dispatch",
        ],
      },
      {
        title: "Compliance",
        body:
          "Compliance documentation is prepared against confirmed purchase order, drawing, country and customer requirements. Customer-specific documents should be supplied during RFQ review.",
      },
    ],
    relatedProductSlugs: ["shaft", "sleeve", "impeller", "retainer-ring"],
    links: commonLinks,
  },
  {
    slug: "industrial-solutions",
    title: "Industrial Solutions",
    eyebrow: "Projects",
    description: "Manufacturing solutions for industrial rotating equipment applications.",
    image: Images.assets.shaftMachiningLathe.src,
    overview:
      "Pako Engineers supports industrial sectors that rely on precision shafts, sleeves, impellers, couplings, lock nuts, retainer rings, bearings, gears and custom pump parts.",
    sections: [],
    industrySolutions: [
      {
        industry: "Oil & Gas",
        challenge: "Rotating equipment components face load, corrosion and traceability requirements.",
        solution: "Manufacture drawing-controlled shafts, sleeves and lock nuts with material and inspection documentation.",
        productsUsed: ["Precision Pump Shafts", "Sleeves", "Precision Lock Nuts"],
      },
      {
        industry: "Water",
        challenge: "Pump components require reliable fits, corrosion resistance and stable long-term operation.",
        solution: "Machine pump shafts, impellers, sleeves and bearing parts to OEM specifications.",
        productsUsed: ["Precision Pump Shafts", "Precision Pump Impellers", "Retainer Rings & Bearings"],
      },
      {
        industry: "Chemical",
        challenge: "Aggressive fluids demand suitable material selection and controlled surface finishes.",
        solution: "Support stainless, duplex and super duplex component manufacturing based on confirmed service conditions.",
        productsUsed: ["Sleeves", "Precision Pump Impellers", "Pump Parts & Accessories"],
      },
      {
        industry: "Marine",
        challenge: "Marine components face seawater exposure and bearing alignment requirements.",
        solution: "Manufacture shafts, retainer rings and water-lubricated bearing components for marine pump systems.",
        productsUsed: ["Precision Pump Shafts", "Retainer Rings & Bearings", "Sleeves"],
      },
      {
        industry: "Mining",
        challenge: "Abrasive slurry service increases wear on sealing and rotating components.",
        solution: "Machine sleeves, shafts and pump parts with material and finish choices aligned to customer drawings.",
        productsUsed: ["Sleeves", "Pump Parts & Accessories", "Precision Pump Shafts"],
      },
      {
        industry: "Power",
        challenge: "Power plant pumps need reliable rotating assemblies and documented inspection.",
        solution: "Provide shafts, impellers, couplings and lock nuts for critical pump and rotating equipment assemblies.",
        productsUsed: ["Precision Pump Shafts", "Precision Pump Impellers", "Couplings"],
      },
      {
        industry: "OEM",
        challenge: "OEM programs require repeatability, revision control and stable supplier capability.",
        solution: "Support build-to-print production with controlled machining routes and inspection documentation.",
        productsUsed: ["Pump Parts & Accessories", "Retainer Rings & Bearings", "Industrial Custom Gears"],
      },
      {
        industry: "Agriculture",
        challenge: "Irrigation and utility pumps require durable components at practical production volumes.",
        solution: "Manufacture sleeves, shafts and bearing components to drawing and material requirements.",
        productsUsed: ["Sleeves", "Precision Pump Shafts", "Retainer Rings & Bearings"],
      },
    ],
    relatedProductSlugs: ["shaft", "sleeve", "impeller", "pump-parts"],
    links: commonLinks,
  },
];

export function getProjectPages() {
  return projectPages;
}

export function getProjectPage(slug: string) {
  return projectPages.find((page) => page.slug === slug);
}
