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
    line1: "Gat No. 453, M. No. 1230, Kirloskar Wadi Road",
    line2: "Burli, Taluka Palus, District Sangli - 416308, Maharashtra, India",
    full: "Gat No. 453, M. No. 1230, Kirloskar Wadi Road, Burli, Taluka Palus, District Sangli - 416308, Maharashtra, India",
  },
  leadership: [
    {
      name: "Mr. Sudarshan Khot",
      role: "Chief Executive Officer",
      phone: "+91 99218 54252",
      image: Images.assets.ceoSudarshan.src,
    },
    {
      name: "Mr. Suhas Khot",
      role: "Managing Director",
      phone: "+91 98602 69972",
      image: Images.assets.mdSuhas.src,
    },
  ],
  organizationChart: [
    {
      department: "Executive Leadership",
      members: [
        { name: "Mr. Sudarshan Khot", role: "CEO" },
        { name: "Mr. Suhas Khot", role: "MD" },
      ],
    },
    {
      department: "Production",
      members: [
        { name: "Mr. Tejas Surve", role: "Production" },
        { name: "Mr. Suhas Khot", role: "Production" },
      ],
    },
    {
      department: "In-House Activities",
      members: [
        { name: "Mr. Yogesh Mangave", role: "In-House" },
      ],
    },
    {
      department: "Outsourcing Activities",
      members: [
        { name: "Mr. Amit Pawar", role: "Out-Source" },
      ],
    },
    {
      department: "Accounts",
      members: [
        { name: "Mr. Dipak Bobade", role: "Accounts" },
      ],
    },
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
    phone: "+91 98602 69972",
    email: "sales@pakoshaft.com",
    whatsapp: "+91 99218 54252",
    mapQuery: "Pako Engineers, Burli, Taluka Palus, District Sangli, Maharashtra 416308",
  },
  businessHours: {
    open: "Wednesday - Monday: 9:00 AM - 6:00 PM",
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

export const companyProfileDocument = {
  title: "Pako Engineers Company Profile",
  fileName: "Pako-Engineers-Company-Profile-February-2026.pptx",
  publicPath: "/documents/pako-company-profile-february-2026.pptx",
  type: "PowerPoint",
  sizeLabel: "9.5 MB",
} as const;

export const materials = [
  "EN8",
  "SS304",
  "SS316",
  "SS410",
  "SS410T",
  "K-MONEL 500",
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
    process: "Shaft Machining",
    range: "Up to 500 mm diameter, up to 6000 mm length",
  },
  {
    process: "Shaft Grinding",
    range: "Up to 500 mm diameter, up to 6000 mm length",
  },
  {
    process: "CNC Lathe",
    range: "Up to 500 mm diameter, up to 6000 mm length",
  },
  {
    process: "Sleeve / Coupling / Bush Grinding",
    range: "Internal: 50-500 mm dia. up to 1000 mm length. Outer: 50-500 mm dia. up to 1000 mm length.",
  },
  {
    process: "Lock Nut Machining & Threading",
    range: "Machining up to 500 mm diameter.",
  },
  {
    process: "Retainer Ring / Thordon Bearing",
    range: "Up to 500 mm diameter",
  },
] as const;

export const equipment = [
  "CNC Turning Machine",
  "CNC Grinding Machine",
  "VMC Key-Way Machine",
  "NXG EZEECUT Wire-Cut Machine",
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
    contacts: [
      "Mr. Fabrizio Baccani - Director, Manufacturing",
      "Mr. Jayakumar Jagadeeshan - Supply Chain",
    ],
  },
  {
    name: "Ebara Machinery India Private Limited",
    contacts: [
      "Mr. Hiroshi Suzuki - Director",
      "Mr. Yusuke Chikamori - Procurement",
      "Mr. Rajamanikandan K - Deputy Manager, Procurement",
    ],
  },
  {
    name: "TMEIC",
    contacts: [
      "Mr. Katsuki Manabu - Japanese Expert",
      "Mr. Balasubramaniam - Manager, Manufacturing Engineering",
      "Mr. Anesh Pandit - Manager, Vendor Development",
      "Mr. Sailesh H. Puranik - Head, SCM & Procurement",
    ],
  },
  {
    name: "Valmet, Sweden",
    contacts: ["Valmet Sweden - International Industrial Customer"],
  },
  {
    name: "DMW Corporation Ltd.",
    contacts: [
      "Mr. Taizo Kobayashi - DMW Japan (Costing Sales)",
      "Mr. Ashok Yadav - DMW Pune (Factory Manager)",
      "Mr. Gajanan Lokhande - DMW Pune (QA Manager)",
    ],
  },
  {
    name: "NASH",
    contacts: ["Korean Quality Expert Inspection Team Visit"],
  },
] as const;

export const specialCapabilities = {
  specialShaft: {
    title: "Special Long Shaft Capability",
    diameter: "400 mm",
    length: "9500 mm (9.5 m)",
    threadLength: "390 mm",
    description: "Special extra-long precision shaft manufacturing capability.",
  },
  specialMaterialGrade: {
    title: "Special Grade Material Processing",
    diameter: "200 mm",
    length: "4882 mm",
    material: "X2CrNiMoN 22-5-3 (Duplex Stainless Steel)",
    description: "High-spec alloy machining for severe industrial environments.",
  },
  assemblyProjects: {
    title: "In-House Assembly Capability",
    flagshipProject: "Project ES-562",
    description: "Complete in-house pump assembly and testing capability under strict QA.",
  },
  gearManufacturing: {
    title: "Custom Gear Manufacturing",
    types: ["Spur Gears", "Helical Gears"],
    description: "Custom manufactured spur and helical gears per customer drawings and specifications.",
  },
} as const;

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
