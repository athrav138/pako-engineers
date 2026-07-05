export type ProductSpec = {
  slug: string;
  name: string;
  summary: string;
  materials: string;
  sizeRange: string;
  finish: string;
  image: string;
};

export const products: ProductSpec[] = [
  {
    slug: "shaft",
    name: "Shafts",
    summary:
      "Precision-turned and ground shafts for pumps and rotating equipment, machined to tight tolerances in corrosion-resistant alloys.",
    materials: "Stainless Steel, Duplex, Super Duplex, Nitronic 50",
    sizeRange: "Diameter 50 mm - 1500 mm | Length 0.5 m - 14 m",
    finish: "10 - 50 microns",
    image: "/images/product-shafts.png",
  },
  {
    slug: "sleeve",
    name: "Sleeves",
    summary:
      "Shaft sleeves manufactured to protect rotating shafts from wear, corrosion and erosion in demanding pump applications.",
    materials: "Stainless Steel, Duplex, Super Duplex, Nitronic 50",
    sizeRange: "Diameter 50 mm - 400 mm | Length 0.1 m - 1 m",
    finish: "10 - 50 microns",
    image: "/images/factory-floor.png",
  },
  {
    slug: "coupling",
    name: "Couplings",
    summary:
      "Precision couplings connecting drive components with accurate alignment and balance for continuous-duty rotating equipment.",
    materials: "Stainless Steel, Duplex, Super Duplex, Nitronic 50",
    sizeRange: "Diameter 50 mm - 400 mm | Length 0.1 m - 1 m",
    finish: "10 - 50 microns",
    image: "/images/hero-machining.png",
  },
  {
    slug: "pump-parts",
    name: "Pump Parts & Accessories",
    summary:
      "Customised pump components machined to customer drawings and specifications across all standard corrosion-resistant materials.",
    materials: "Stainless Steel, Duplex, Super Duplex, Nitronic 50",
    sizeRange: "Customised to drawing",
    finish: "10 - 50 microns",
    image: "/images/quality-inspection.png",
  },
  {
    slug: "lock-nut",
    name: "Lock Nuts",
    summary:
      "Precision-threaded lock nuts for securing rotating assemblies, machined and threaded to metric pitch specifications.",
    materials: "Stainless Steel, Duplex, Super Duplex, Nitronic 50",
    sizeRange: "Diameter 30 mm - 750 mm | Threading 1 - 120 mm pitch (metric)",
    finish: "10 - 50 microns",
    image: "/images/hero-machining.png",
  },
  {
    slug: "retainer-ring",
    name: "Retainer Rings & Thordon Bearings",
    summary:
      "Retainer rings and Thordon bearing components supporting rotating shaft assemblies in marine and industrial pump systems.",
    materials: "Stainless Steel, Thordon, Gunmetal, Feroform F363",
    sizeRange: "Diameter 70 mm - 700 mm",
    finish: "10 - 50 microns",
    image: "/images/factory-floor.png",
  },
  {
    slug: "gears",
    name: "Gears",
    summary:
      "Custom gears manufactured to moderate ranges as per customer requirement, for integration into broader rotating assemblies.",
    materials: "As per customer specification",
    sizeRange: "Custom, per drawing",
    finish: "As specified",
    image: "/images/quality-inspection.png",
  },
];

export function getProductBySlug(slug: string): ProductSpec | undefined {
  return products.find((p) => p.slug === slug);
}
