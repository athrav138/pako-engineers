export type ProductCategory = "Pump Shafts" | "Sleeves & Bushes" | "Pump Components" | "Couplings" | "Lock Nuts" | "Bearings & Rings" | "Gears";

export type ApplicationIndustry = "Oil & Gas" | "Chemical Processing" | "Water & Wastewater" | "Mining" | "Power Generation" | "Marine" | "OEMs" | "Agriculture" | "Automotive" | "Food Processing" | "Sugar Industry" | "Heavy Engineering";

export type ProductFeature = {
  title: string;
  description: string;
};

export type ProductSpecification = {
  label: string;
  value: string;
};

export type MaterialDetail = {
  name: string;
  description: string;
  recommendedFor: string;
};

export type ManufacturingStep = {
  step: string;
  description: string;
  machinesUsed: string;
  inspection: string;
};

export type QualityAssuranceDetail = {
  title: string;
  description: string;
};

export type ProductDownload = {
  title: string;
  type: "PDF" | "CAD" | "ZIP" | "CERT";
  size: string;
  url: string;
};

export type ProductFaq = {
  question: string;
  answer: string;
};

export type IndustryDetail = {
  name: ApplicationIndustry;
  usage: string;
};

export type ProductData = {
  slug: string;
  name: string;
  category: ProductCategory;
  summary: string;
  description: string;
  overview: string; // New: Engineering overview text
  image: string;
  gallery: string[];
  features: ProductFeature[];
  specifications: ProductSpecification[];
  detailedMaterials: MaterialDetail[];
  manufacturingWorkflow: ManufacturingStep[];
  qualityAssurance: QualityAssuranceDetail[];
  industries: IndustryDetail[];
  materials: string[]; // For filtering
  applications: ApplicationIndustry[]; // For filtering
  certifications: string[];
  downloads: ProductDownload[];
  faqs: ProductFaq[];
  relatedProducts: string[]; // slugs
  engineeringDrawing?: string; // Image path for 2D drawing placeholder
};
