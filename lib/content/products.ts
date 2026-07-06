export type ProductSpec = {
  slug: string;
  name: string;
  category: string;
  summary: string;
  materials: string;
  sizeRange: string;
  finish: string;
  image: string;
};

export const products: ProductSpec[] = [
  {
    slug: "shaft",
    name: "Pump Shafts",
    category: "Precision Shafts",
    summary:
      "We have a team of highly experienced engineers and technicians who aid us in manufacturing premium quality Pump Shafts. Owing to our shafts' compliance with international quality standards, we have managed to become one of the prominent business entities in this field. Pump shafts are made available to our valued customers in varied sizes and specifications.",
    materials: "Features: Long functional life, Abrasion resistance, Wear & tear resistance",
    sizeRange: "Machining: 50 mm - 1500 mm dia. up to 8000 mm length",
    finish: "10 - 50 microns",
    image: "/images/real/pump-shafts-500x500.webp",
  },
  {
    slug: "sleeve",
    name: "Sleeves",
    category: "Sleeves & Bushes",
    summary:
      "CNC sleeves are hardened steel and ground internally and externally. We stand as one of the prominent Wholesaler, Retailer, Trader, Distributor and supplier of Sleeves. Highly appreciated for their superior performance and designed to withstand extreme conditions. Used in Cement, Steel, Power, and Engineering industries.",
    materials: "Features: Appreciated for superior performance, Custom designs available upon request",
    sizeRange: "Machining: 50 mm - 1500 mm dia. | Grinding ID: 50 mm - 500 mm dia.",
    finish: "10 - 50 microns",
    image: "/images/real/sleeves-1529745778-4012175.webp",
  },
  {
    slug: "impeller",
    name: "Impeller",
    category: "Pump Components",
    summary:
      "We stand as one of the prominent Wholesaler, Retailer, Trader, Distributor and supplier of Impeller. These are highly appreciated for their superior performance and are known for their optimum quality, designed to withstand extreme conditions in Cement, Steel, Power, and Engineering industries.",
    materials: "EN8, SS316, 410, 410T, SS304, K-Monel 500",
    sizeRange: "Customised to drawing and assembly requirement",
    finish: "As per drawing / QAP",
    image: "/images/real/impiller-1529745835-4012185.webp",
  },
  {
    slug: "coupling",
    name: "Couplings",
    category: "Couplings",
    summary:
      "Muff and drive couplings machined for accurate alignment and continuous-duty pump and industrial assemblies.",
    materials: "Stainless Steel, Duplex, Super Duplex, Nitronic 50",
    sizeRange: "Diameter 50 mm - 400 mm | Length 0.1 m - 1 m",
    finish: "10 - 50 microns",
    image: "/images/hero-machining.png",
  },
  {
    slug: "pump-parts",
    name: "Pump Parts & Accessories",
    category: "Pump Components",
    summary:
      "Custom pump components and accessories manufactured to customer drawings, QAP and customer quality requirements.",
    materials: "Stainless Steel, Duplex, Super Duplex, Nitronic 50",
    sizeRange: "Customised to drawing",
    finish: "10 - 50 microns",
    image: "/images/quality-inspection.png",
  },

  {
    slug: "lock-nut",
    name: "Lock Nuts",
    category: "Lock Nuts",
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
    category: "Bearings & Rings",
    summary:
      "Retainer rings and Thordon bearing components supporting rotating shaft assemblies in marine and industrial pump systems.",
    materials: "Stainless Steel, Thordon, Gunmetal, Feroform F363",
    sizeRange: "Diameter 70 mm - 700 mm",
    finish: "10 - 50 microns",
    image: "/images/real/ring-125x125.webp",
  },
  {
    slug: "gears",
    name: "Gears",
    category: "Gears",
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
