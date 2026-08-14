import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { CTABand } from "@/components/sections/CTABand";
import { Images } from "@/lib/images";
import {
  Wrench,
  Settings,
  Cog,
  Factory,
  Layers,
  FlaskConical,
  Microscope,
  Package,
  ArrowRight,
  CheckCircle2,
  Cpu
} from "lucide-react";

export const metadata: Metadata = {
  title: "Engineering Services",
  description: "Comprehensive manufacturing services including CNC turning, grinding, wire-cut EDM, key-way slotting, dynamic balancing, heat treatment, and QA inspection.",
  alternates: { canonical: "/services" },
  openGraph: {
    images: [{ url: Images.assets.cncTurningHero.src, width: 1200, height: 630 }],
  },
};

type ServiceDetail = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: { src: string; alt: string };
  icon: React.ElementType;
  specs: Record<string, string>;
  machinery: string[];
  features: string[];
  rfqParam: string;
};

const SERVICES_DATA: ServiceDetail[] = [
  {
    id: "cnc-turning",
    title: "CNC Turning & Lathe Machining",
    subtitle: "High-capacity precision turning for long shaft profiles",
    description: "Our heavy-duty turning division specializes in machining long-format rotating components, including pump shafts, sleeves, and flanges. Supported by massive conventional and multi-axis CNC lathes, we execute challenging profiles with exact dimensional repeatability.",
    image: {
      src: Images.assets.cncTurningHero.src,
      alt: "CNC lathe operator machining long shaft component at Pako Engineers"
    },
    icon: Wrench,
    specs: {
      "Diameter Range": "Up to 500 mm",
      "Maximum Length": "6,000 mm (6 meters)",
      "Bed Capacity": "Up to 10 Metric Tons",
      "Tolerance Level": "10 to 50 microns"
    },
    machinery: [
      "Extra-long bed CNC lathes (up to 6m length)",
      "Multi-axis turning centers",
      "Conventional heavy turning engines"
    ],
    features: [
      "Precision thread-cutting (Metric, NPT, Acme, custom threads)",
      "Taper turning & journal machining",
      "100% run-out check on centers"
    ],
    rfqParam: "CNC Turning & Machining"
  },
  {
    id: "cnc-grinding",
    title: "Cylindrical & Journal Grinding",
    subtitle: "Micro-smooth finish for critical bearing and seal journals",
    description: "Providing superior cylindrical grinding services to meet sub-micron tolerance requirements. We achieve mirror finishes on shaft bearing seats, coupling journals, and sleeves to ensure minimum wear and noise during high-speed rotation.",
    image: {
      src: Images.assets.precisionQualityInspection.src,
      alt: "Cylindrical grinding and measurement of precision shaft journals"
    },
    icon: Cpu,
    specs: {
      "Outer Diameter": "Up to 500 mm",
      "Max Grinding Length": "6,000 mm",
      "Internal Bore Grinding": "50 mm to 500 mm dia.",
      "Surface Finish": "Up to Ra 0.2 microns"
    },
    machinery: [
      "Precision CNC cylindrical grinders",
      "Heavy-duty internal bore grinders",
      "Micro-finish journal polishers"
    ],
    features: [
      "Strict roundness and concentricity controls",
      "Interrupted surface grinding capability",
      "Pneumatic air-gauge dimensional verification"
    ],
    rfqParam: "Cylindrical Grinding"
  },
  {
    id: "precision",
    title: "Precision Machining & VMC",
    subtitle: "Complex 3-axis and multi-axis vertical machining",
    description: "Utilizing modern Vertical Machining Centers (VMC), we manufacture complex geometries, precision key-ways, multi-bore hole patterns, and highly detailed components with extreme positional accuracy.",
    image: {
      src: Images.assets.galleryVmcMachineOperator.src,
      alt: "Vertical Machining Center operating on precise custom steel component"
    },
    icon: Cog,
    specs: {
      "VMC Bed Size": "Up to 1200 mm length",
      "Axis Configuration": "3-Axis / 4-Axis positioning",
      "Positioning Accuracy": "±0.005 mm",
      "Drilling & Tapping": "Multiple pitch configurations"
    },
    machinery: [
      "High-speed Vertical Machining Centers (VMC)",
      "Radial and block drilling stations",
      "Horizontal milling machines"
    ],
    features: [
      "Complex profile contouring",
      "High-speed index tables",
      "Custom fixture designs for repeatable batch production"
    ],
    rfqParam: "Precision Machining & VMC"
  },
  {
    id: "assembly",
    title: "Pump Assembly & Balancing",
    subtitle: "Mechanical assembly, static and dynamic rotor balancing",
    description: "Offering clean-room mechanical assembly services. We build complete pump rotors and rotating assemblies, performing ISO-grade static and dynamic balancing in-house to guarantee vibration-free operation under service loads.",
    image: {
      src: Images.assets.largePumpRotorAssembly.src,
      alt: "Full assembly and alignment of heavy industrial pump rotor"
    },
    icon: Settings,
    specs: {
      "Balancing standard": "ISO 1940 G1.0 / G2.5",
      "Max Assembly Weight": "3,000 kg",
      "Key-Way Slotting Length": "Up to 1,200 mm",
      "Rotor Runout Tolerance": "< 0.02 mm"
    },
    machinery: [
      "Dynamic balancing machine (3-ton capacity)",
      "Vertical hydraulic assembly presses",
      "Clean-room sub-assembly station"
    ],
    features: [
      "Rotor alignment and dial-indicator tests",
      "Hydraulic interference fit assembly",
      "Full static balancing verification certificates"
    ],
    rfqParam: "Pump Assembly & Balancing"
  },
  {
    id: "custom",
    title: "Custom OEM Manufacturing",
    subtitle: "Print-to-product manufacturing of tailored components",
    description: "Supporting pump OEMs and equipment designers globally by manufacturing proprietary components directly from client blueprints. We manage the entire cycle from raw material sourcing and pilot machining to final finishing.",
    image: {
      src: Images.assets.factoryBuildingExterior.src,
      alt: "Pako Engineers main engineering works and manufacturing building"
    },
    icon: Factory,
    specs: {
      "Drawing Formats": "SolidWorks, AutoCAD, STEP, PDF",
      "Batch Sizes": "Prototype, small batch, volume OEM",
      "Traceability": "EN 10204 3.1 certification",
      "Compliance": "ISO 9001:2015 Standards"
    },
    machinery: [
      "Full spectrum machining ecosystem",
      "Custom tooling and fixtures workshop",
      "In-house drafting and CAD verification stations"
    ],
    features: [
      "Reverse engineering of wear parts",
      "Strict IP protection for client drawing designs",
      "Bespoke manufacturing routing logs"
    ],
    rfqParam: "Custom OEM Manufacturing"
  },
  {
    id: "finishing",
    title: "Surface Finishing & Protection",
    subtitle: "Superfinishing, coating preparation, and polishing",
    description: "We deliver specialized surface treatment preparation, mirror-polishing, chrome plating preparation, and corrosion-resistant coatings to extend the service life of wear sleeves and pump shaft seal areas.",
    image: {
      src: Images.assets.pumpShaftsAndSleeves.src,
      alt: "Polished precision pump shafts showing super-finished surfaces"
    },
    icon: Layers,
    specs: {
      "Superfinish Level": "Down to Ra 0.1 microns",
      "Finish Types": "Polished, ground, buffer-lapped",
      "Applicable Components": "Shaft sleeves, wear rings, journals",
      "Inspection": "Electronic surface profile testers"
    },
    machinery: [
      "Oscillating superfinishing attachments",
      "Polishing lathes and lap units",
      "Chemical treatment baths"
    ],
    features: [
      "Hardness retention during low-heat polishing",
      "Optimal surface profile for lip seal contact",
      "Anti-rust oil preservation wrapping"
    ],
    rfqParam: "Surface Finishing & Protection"
  },
  {
    id: "heat-treatment",
    title: "Heat Treatment & Metallurgy",
    subtitle: "Stress relieving, hardening, and tempering controls",
    description: "To ensure critical rotating shafts handle extreme torsional forces, we provide comprehensive thermal treatments. We manage hardness profiles and relieve structural stress across high-spec stainless and alloy steels.",
    image: {
      src: Images.assets.rawMaterialStaging.src,
      alt: "Raw material steel bars staged for heat treatment and machining"
    },
    icon: FlaskConical,
    specs: {
      "Process Options": "Annealing, Stress Relieving, Hardening, Case Hardening",
      "Material Grades": "Duplex, Super Duplex, 410, 410T, Nitronic 50",
      "Quality Assurance": "Hardness testing (HRC, HB, HV)",
      "Traceability": "Heat code tracking"
    },
    machinery: [
      "Calibrated electric heat treatment furnaces",
      "Quenching tanks (oil/water)",
      "Digital pyrometer controllers"
    ],
    features: [
      "Minimum distortion thermal processing",
      "Stress relief post rough-machining",
      "Structure-homogenizing normalization"
    ],
    rfqParam: "Heat Treatment"
  },
  {
    id: "inspection",
    title: "Quality Inspection & NDT",
    subtitle: "Rigorous metrology and non-destructive testing (NDT)",
    description: "Quality is central to our reputation. We conduct extensive visual, dimensional, and internal structure testing on 100% of finished parts to ensure zero-defect exports to global OEMs.",
    image: {
      src: Images.assets.legacyLatheInspection.src,
      alt: "Precision inspection and dimensional checks using micrometer on lathe"
    },
    icon: Microscope,
    specs: {
      "NDT Methods": "Dye Penetrant (DPT), Magnetic Particle (MPI), UT (Outsourced)",
      "Dimensional check": "100% calibrated micrometer verification",
      "Run-out Accuracy": "Measured between centers up to 0.01 mm",
      "Certificates": "Mill test reports, NDT reports, Dimensional sheets"
    },
    machinery: [
      "Calibrated verniers, micrometers, and bore gauges",
      "DPT chemical testing chambers",
      "Granite surface plate standards"
    ],
    features: [
      "Raw material heat traceability checks",
      "Independent QA Inspector verification",
      "Full documentation package with every shipment"
    ],
    rfqParam: "Quality Inspection & Testing"
  },
  {
    id: "packaging",
    title: "Export Packaging & Logistics",
    subtitle: "Heavy-duty seaworthy wooden boxing and protection",
    description: "Our components travel thousands of miles to reach global clients. We build custom, export-compliant, heat-treated wooden boxes and use heavy-duty anti-corrosion barrier packaging to protect critical components during transit.",
    image: {
      src: Images.assets.modernFactoryFloorOverview.src,
      alt: "Pako Engineers factory shipping prep area and heavy assembly floor"
    },
    icon: Package,
    specs: {
      "Wood Standard": "ISPM 15 heat-treated wood with phytosanitary compliance",
      "Moisture protection": "VCI plastic wrapping, silica gel desiccant packs",
      "Handling features": "Reinforced structural runners, crane hoist rings",
      "Destinations": "USA, Japan, Germany, Middle East, Europe"
    },
    machinery: [
      "Custom pneumatic boxing and packing tools",
      "Heavy overhead cranes (up to 10-ton capacity)",
      "VCI vacuum sealer units"
    ],
    features: [
      "Seaworthy preservation for up to 6 months storage",
      "Clear gravity-center marking and lifting points",
      "Comprehensive customs and manifest document pouches"
    ],
    rfqParam: "Export Packaging & Shipping"
  }
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services & capabilities"
        title="Manufacturing services for precision rotating components"
        description="From multi-axis CNC turning and grinding to final dynamic balancing and export packing, Pako Engineers delivers end-to-end precision matching your drawings."
        backgroundImage={Images.assets.shaftMachiningLathe.src}
      />

      {/* Intro Summary */}
      <section className="bg-surface py-12 border-b border-line">
        <Container>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy text-white shadow-sm">
                <Wrench size={20} />
              </div>
              <div>
                <h3 className="font-display font-semibold text-navy">Single-source processing</h3>
                <p className="mt-1 text-sm text-ink-muted leading-relaxed">No intermediate subcontracting; turning, grinding, slotting, and inspection happen under one roof.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy text-white shadow-sm">
                <Microscope size={20} />
              </div>
              <div>
                <h3 className="font-display font-semibold text-navy">ISO 9001:2015 quality</h3>
                <p className="mt-1 text-sm text-ink-muted leading-relaxed">Full dimensional trace reports, material heat numbers, and inspection sheets accompany every delivery.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy text-white shadow-sm">
                <Package size={20} />
              </div>
              <div>
                <h3 className="font-display font-semibold text-navy">Seaworthy protection</h3>
                <p className="mt-1 text-sm text-ink-muted leading-relaxed">Custom ISPM-15 boxes and VCI wrapping protect critical metal components during ocean transport.</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Interactive Services List */}
      <section className="py-20 md:py-28 bg-white">
        <Container>
          <div className="flex flex-col gap-24">
            {SERVICES_DATA.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={service.id}
                  id={service.id}
                  className={`flex flex-col gap-10 lg:gap-16 lg:flex-row scroll-mt-24 ${
                    isEven ? "" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Service Visuals */}
                  <div className="w-full lg:w-1/2 flex flex-col gap-4">
                    <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-line bg-surface shadow-sm group">
                      <Image
                        src={service.image.src}
                        alt={service.image.alt}
                        fill
                        sizes="(min-width: 1024px) 50vw, 100vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-102"
                      />
                    </div>
                  </div>

                  {/* Service Details */}
                  <div className="w-full lg:w-1/2 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0A1B2E]/5 text-[#0A1B2E]">
                        <Icon size={20} />
                      </span>
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-oxide">
                        {service.id.replace("-", " ")}
                      </span>
                    </div>

                    <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-navy mb-2">
                      {service.title}
                    </h2>
                    <p className="text-sm font-semibold text-navy/70 mb-4">{service.subtitle}</p>
                    <p className="text-base leading-relaxed text-ink-muted mb-6">{service.description}</p>

                    {/* Key Technical Specifications Table */}
                    <div className="mb-6 rounded-xl border border-line bg-surface p-4">
                      <h4 className="text-xs font-bold uppercase tracking-wide text-navy mb-3">Service parameters & limits</h4>
                      <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs">
                        {Object.entries(service.specs).map(([key, val]) => (
                          <div key={key} className="flex flex-col pb-2 border-b border-line last:border-b-0 last:pb-0">
                            <span className="font-medium text-ink-muted">{key}</span>
                            <span className="font-bold text-navy mt-0.5">{val}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Machinery & Process Badges */}
                    <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wide text-navy mb-2">Machinery & tools</h4>
                        <ul className="space-y-1.5 text-xs text-ink-muted">
                          {service.machinery.map((mach) => (
                            <li key={mach} className="flex items-center gap-2">
                              <span className="h-1 w-1 rounded-full bg-oxide shrink-0" />
                              {mach}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wide text-navy mb-2">Key standards & checks</h4>
                        <ul className="space-y-1.5 text-xs text-ink-muted">
                          {service.features.map((feat) => (
                            <li key={feat} className="flex items-center gap-2">
                              <CheckCircle2 size={12} className="text-emerald-500 shrink-0" />
                              {feat}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* RFQ CTA Button */}
                    <div className="mt-auto pt-2">
                      <Link
                        href={`/request-quote?service=${encodeURIComponent(service.rfqParam)}`}
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0A1B2E] px-5 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#132D4A] transition-all shadow-sm hover:shadow-md"
                      >
                        Request {service.title.split(" ")[0]} Quote <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <CTABand />
    </>
  );
}
