export const company = {
  name: "Pako Engineers",
  legalName: "Pako Engineers",
  tagline: "Precision-engineered shafts and pump components, trusted by global OEMs since 1994.",
  founded: 1994,
  yearsInBusiness: new Date().getFullYear() - 1994,
  certification: "ISO 9001:2015",
  address: {
    line1: "Gat No. 453, M. No. 1230, Kirloskar Wadi Road",
    line2: "Burli, Tal. Palus, Sangli - 416308, Maharashtra, India",
    full: "Gat No. 453, M. No. 1230, Kirloskar Wadi Road, Burli, Tal. Palus, Sangli - 416308, Maharashtra, India",
  },
  leadership: [
    { name: "Mr. Sudarshan Khot", role: "Chief Executive Officer", phone: "+91-9921854252" },
    { name: "Mr. Suhas Khot", role: "Managing Director", phone: "+91-9860269972" },
  ],
  profile: {
    activity:
      "Manufacture and export of shafts, sleeves, couplings, lock nuts, pump parts and accessories in all materials of construction.",
    positioning:
      "An established, quality-certified industrial exporter serving pump OEMs and rotating equipment manufacturers across Asia, Europe, the Middle East and North America.",
    facility:
      "Pako Engineers operates from Burli, Tal. Palus, Sangli, with turning, grinding, CNC machining, wire-cut and key-way capabilities supported by in-house quality checks.",
  },
  workforce: {
    total: 47,
    breakdown: [
      { role: "Engineers", count: 2 },
      { role: "Officers", count: 2 },
      { role: "Technical Supervisors", count: 3 },
      { role: "Quality Control", count: 2 },
      { role: "Programmers", count: 2 },
      { role: "Skilled Labour", count: 14 },
      { role: "Semi-Skilled Labour", count: 10 },
      { role: "Helping Staff", count: 12 },
    ],
  },
  stats: [
    { label: "Years in Business", value: "30+" },
    { label: "Max Machining Diameter", value: "1500 mm" },
    { label: "Team Members", value: "47" },
    { label: "Export Countries", value: "12" },
  ],
  exportCountries: [
    "Japan",
    "South Korea",
    "Germany",
    "Italy",
    "France",
    "Netherlands",
    "Switzerland",
    "Canada",
    "United States",
    "United Arab Emirates",
    "Oman",
    "Saudi Arabia",
  ],
  contact: {
    email: "info@pakoshaft.com",
    whatsapp: "+919921854252",
    mapQuery: "Pako Engineers, Burli, Tal. Palus, Sangli, Maharashtra 416308",
  },
} as const;

export const materials = [
  "Stainless Steel (SS304, SS316, 410, 410T)",
  "Duplex & Super Duplex",
  "Nitronic 50",
  "EN-Series Steels",
  "K-Monel 400 / 500",
] as const;

export const bushMaterials = [
  "Gunmetal",
  "Feroform F363",
  "Neoprene Rubber",
  "RG12",
  "Thordon",
] as const;

export const machiningCapacity = [
  {
    process: "Turning (Shaft / Flange)",
    range: "50 mm - 1500 mm diameter, up to 14,000 mm length",
  },
  {
    process: "Grinding",
    range: "50 mm - 800 mm diameter, up to 6,500 mm length",
  },
  {
    process: "CNC Lathe",
    range: "Up to 500 mm diameter, 10,000 mm length",
  },
  {
    process: "Sleeve / Coupling / Bush Grinding",
    range: "Internal: 50-500 mm dia. up to 1000 mm length. Outer: 50-800 mm dia. up to 1000 mm length. Internal key-way up to 1200 mm.",
  },
  {
    process: "Lock Nut Machining & Threading",
    range: "Machining 30-750 mm diameter. Threading 1-120 mm pitch (metric).",
  },
  {
    process: "Retainer Ring / Thordon Bearing",
    range: "70 mm - 700 mm diameter",
  },
] as const;

export const equipment = [
  "NXG EZEECUT Wire-Cut Machine",
  "CNC Grinding Machines",
  "CNC Lathe (up to 10,000 mm length, 500 mm diameter)",
  "VMC Key-Way Machines",
] as const;

export const inHouseTesting = [
  "Hardness Testing",
  "Surface Check",
  "NDT - Dye Penetrant Test (DPT)",
] as const;

export const outsourcedTesting = [
  "Ultrasonic Testing",
  "Metallurgical Testing (Physical & Chemical)",
  "Heat Treatment",
  "NDT - Radiography",
  "PMI (Positive Material Identification)",
] as const;

export const clients = [
  {
    name: "Flowserve Corporation",
    contacts: ["Mr. Fabrizio Baccani - Director, Manufacturing", "Mr. Jayakumar Jagadeeshan - Supply Chain"],
  },
  {
    name: "EBARA Machinery India Pvt. Ltd.",
    contacts: ["Mr. Hiroshi Suzuki - Director", "Mr. Yusuke Chikamori - Procurement", "Mr. Rajamanikandan K - Deputy Manager, Procurement"],
  },
  {
    name: "TMEIC",
    contacts: ["Mr. Katsuki Manabu - Japanese Expert", "Mr. Balasubramaniam - Manager, Manufacturing Engineering", "Mr. Anesh Pandit - Manager, Vendor Development", "Mr. Sailes H Puranik - Head, SCM & Procurement"],
  },
  {
    name: "Valmet, Sweden",
    contacts: [],
  },
  {
    name: "DMW Corporation Ltd.",
    contacts: ["Mr. Taizo Kobayashi - Costing Sales, Japan", "Mr. Ashok Yadav - Factory Manager, Pune", "Mr. Gajanan Lokhande - QA Manager, Pune"],
  },
  {
    name: "Nash",
    contacts: [],
  },
] as const;

export const industries = [
  "Pump OEMs",
  "Oil & Gas",
  "Marine",
  "Power",
  "Industrial Rotating Equipment",
  "Process Industries",
] as const;

export const services = [
  "Precision turning and grinding",
  "CNC lathe machining",
  "Wire-cut machining",
  "Internal key-way machining",
  "Custom gear manufacturing",
  "Pump assembly component machining",
] as const;

export const galleryItems = [
  {
    title: "Machining Bay",
    category: "Shop Floor & Machines",
    image: "/images/hero-machining.png",
    alt: "Pako Engineers machining area for precision components",
  },
  {
    title: "Factory Floor",
    category: "Infrastructure",
    image: "/images/factory-floor.png",
    alt: "Pako Engineers factory floor in Sangli",
  },
  {
    title: "Finished Shafts",
    category: "Products",
    image: "/images/product-shafts.png",
    alt: "Finished precision shafts manufactured by Pako Engineers",
  },
  {
    title: "Quality Inspection",
    category: "Quality",
    image: "/images/quality-inspection.png",
    alt: "Inspection and quality verification for machined components",
  },
] as const;

export const downloads = [
  {
    title: "Company Profile Deck",
    description: "February 2026 profile covering products, capacity, clients and export markets.",
    href: "/downloads/pako-profile-february-2026.pptx",
  },
  {
    title: "Website Specification",
    description: "Verified website content, page structure and technical build requirements prepared July 2026.",
    href: "/downloads/pako-engineers-website-specification.docx",
  },
] as const;
