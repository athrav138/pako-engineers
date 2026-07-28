import { Images } from "@/lib/images";
export const company = {
  name: "Pako Engineers",
  legalName: "Pako Engineers",
  tagline: "MANUFACTURE & EXPORTER OF PRECISION MACHINED COMPONENTS & PUMP ASSEMBLIES",
  welcome: "Welcome",
  logo: Images.assets.logo.src,
  founded: 1994,
  yearsInBusiness: new Date().getFullYear() - 1994,
  certification: "ISO 9001:2015",
  address: {
    line1: "Gat No. 453, M. No. 1230, Palus Colony, Kirloskar Wadi Road",
    line2: "Burli, Tal - Palus, Sangli-416308, Maharashtra, India",
    full: "Gat No. 453, M. No. 1230, Palus Colony, Kirloskar Wadi Road, Burli, Tal - Palus, Sangli-416308, Maharashtra, India",
  },
  leadership: [
    { name: "Mr. Sudarshan Khot", role: "Chief Executive Officer", phone: "+91-9921854252" },
    { name: "Mr. Suhas Khot", role: "Managing Director", phone: "+91-9860269972" },
  ],
  profile: {
    firstSlide:
      "PAKO ENGINEERS MANUFACTURE & EXPORTER OF PRECISION MACHINED COMPONENTS & PUMP ASSEMBLIES",
    activity:
      "Manufacture and export of precision machined components, pump assemblies, shafts, sleeves, couplings, lock nuts, retainer rings, Thordon bearings, gears and pump parts in all materials of construction.",
    positioning:
      "An ISO 9001:2015 manufacturer and exporter serving pump OEMs and rotating equipment manufacturers across Asia, Europe, the Middle East and North America.",
    facility:
      "Pako Engineers operates from Gat No. 453, Burli, Tal - Palus, Sangli, with machining, grinding, CNC lathe, wire-cut, VMC key-way and in-house assembly capabilities supported by calibrated measuring instruments.",
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
    phone: "09860269972",
    email: "sales@pakoshaft.com",
    whatsapp: "+919921854252",
    mapQuery: "Pako Engineers, Burli, Tal - Palus, Sangli, Maharashtra 416308",
  },
  businessHours: {
    open: "Wednesday - Monday: 10:00 AM - 6:00 PM",
    closed: "Tuesday",
  },
  links: {
    website: "https://pakoshaft.com/",
    linkedin: "https://www.linkedin.com/company/pako-engineers/",
    exportersIndia: "https://www.exportersindia.com/pako-engineers/",
    indiaMart: "https://www.indiamart.com/pako-engineers/aboutus.html",
    justDial: "https://www.justdial.com/Sangli/Pako-Engineers-Inampatta/9999PX233-X233-180411113230-R4I6_BZDET",
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
    process: "Flange / Concrete Shaft Machining",
    range: "50 mm - 1500 mm diameter, up to 14,000 mm length",
  },
  {
    process: "Flange / Concrete Shaft Grinding",
    range: "50 mm - 800 mm diameter, up to 6,500 mm length",
  },
  {
    process: "Shaft Machining",
    range: "50 mm - 1500 mm diameter, up to 8,000 mm length",
  },
  {
    process: "Shaft Grinding",
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
  "Dimensional inspection with calipers, micrometers and gauges",
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
    image: Images.assets.cncTurningHero.src,
    alt: "Pako Engineers machining area for precision components",
  },
  {
    title: "Factory Floor",
    category: "Infrastructure",
    image: Images.assets.modernFactoryFloorOverview.src,
    alt: "Pako Engineers factory floor in Sangli",
  },
  {
    title: "Finished Shafts",
    category: "Products",
    image: Images.assets.pumpShaftsAndSleeves.src,
    alt: "Finished precision shafts manufactured by Pako Engineers",
  },
  {
    title: "Quality Inspection",
    category: "Quality",
    image: Images.assets.precisionQualityInspection.src,
    alt: "Inspection and quality verification for machined components",
  },
] as const;
