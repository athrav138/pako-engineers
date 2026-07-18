import { ProductData } from "./types";

const QA_STANDARD = [
  { title: "Incoming Inspection", description: "PMI (Positive Material Identification) and chemical analysis of all incoming raw materials to ensure grade conformity." },
  { title: "In-Process Inspection", description: "Continuous dimensional checks using calibrated micrometers, bore gauges, and digital verniers directly at the CNC station." },
  { title: "Final Dimensional Inspection", description: "100% CMM (Coordinate Measuring Machine) or precision instrument checking against customer drawing tolerances." },
  { title: "Surface Roughness", description: "Tested using calibrated surface roughness testers to ensure required Ra/Rz values." },
  { title: "Hardness Testing", description: "Rockwell/Brinell hardness testing conducted post-heat treatment." },
  { title: "Runout & Concentricity", description: "Dial indicator checks on V-blocks to guarantee concentricity within 0.01mm." },
  { title: "NDT (Non-Destructive Testing)", description: "DPT (Dye Penetrant Test) and UT (Ultrasonic Testing) performed on critical components to detect micro-cracks." }
];

export const products: ProductData[] = [
  {
    slug: "shaft",
    name: "Precision Pump Shafts",
    category: "Pump Shafts",
    summary: "Heavy-duty precision pump shafts engineered for critical industrial and marine applications.",
    description: "Our precision pump shafts are the core of our manufacturing capability. Machined to exacting tolerances up to 1500mm in diameter and 8000mm in length, these shafts deliver uncompromising performance in high-stress, continuous-duty environments.",
    overview: "Pump shafts are critical power transmission components responsible for connecting the pump driver (motor/engine) to the impeller. They must withstand severe torsional loads, vibration, and corrosive fluids. Pako Engineers manufactures precision shafts with absolute straightness and concentricity. Our advanced CNC machining capability allows us to produce complex profiles, splines, and keyways perfectly aligned with OEM specifications, ensuring extended bearing life and reduced mechanical seal wear.",
    image: "/images/product-shafts.png",
    gallery: [
      "/images/product-shafts.png",
      "/images/hero-machining.png",
      "/images/pako-engineers-inampatta-sangli-2gplhuh9m7-250.avif",
      "/images/quality-inspection.png"
    ],
    engineeringDrawing: "/images/product-shafts.png",
    features: [
      { title: "High Precision Tolerances", description: "Dimensional accuracy down to 5 microns ensuring perfect bearing fits and seal alignment." },
      { title: "Zero-Runout Profiles", description: "Precision CNC grinding guarantees minimal runout, extending pump seal and bearing life." },
      { title: "Custom Key-Ways", description: "Multi-axis VMC machining for complex key-ways, splines, and threads." },
      { title: "Complete Traceability", description: "100% material traceability with EN 10204 3.1 certification and heat numbers." }
    ],
    specifications: [
      { label: "Outside Diameter", value: "50 mm - 1500 mm" },
      { label: "Length", value: "Up to 8000 mm" },
      { label: "Weight Capacity", value: "Up to 5 Tons" },
      { label: "Surface Finish", value: "Ra 0.2 to 1.6 microns" },
      { label: "Concentricity", value: "Within 0.01 mm" },
      { label: "Straightness", value: "0.05 mm per meter" },
      { label: "Dynamic Balance", value: "ISO 1940 Grade G2.5 / G6.3" },
      { label: "Heat Treatment", value: "Through Hardening, Induction Hardening, Nitriding" },
      { label: "Coating", value: "Hard Chrome Plating, HVOF available" },
      { label: "Inspection Standard", value: "ASME / DIN / Custom OEM QAP" }
    ],
    detailedMaterials: [
      { name: "SS316 / SS316L", description: "Austenitic stainless steel with excellent corrosion resistance.", recommendedFor: "Chemical, water treatment, and general industrial pumps." },
      { name: "Duplex (UNS S31803)", description: "High strength and superior pitting resistance.", recommendedFor: "Seawater, desalination, and offshore oil & gas." },
      { name: "Super Duplex (UNS S32750)", description: "Exceptional resistance to stress corrosion cracking.", recommendedFor: "Aggressive marine and harsh chemical environments." },
      { name: "EN8 / EN19 / EN24", description: "High tensile alloy steels.", recommendedFor: "Heavy-duty power transmission in non-corrosive environments." }
    ],
    materials: ["SS316", "Duplex", "Super Duplex", "EN8", "EN19"],
    manufacturingWorkflow: [
      { step: "Raw Material Sourcing", description: "Procurement of forged or rolled bars with 3.1 certs.", machinesUsed: "Bandsaw Cutting", inspection: "PMI and Chemical Check" },
      { step: "Rough Turning", description: "Removing excess material to near-net shape.", machinesUsed: "Heavy Duty CNC Lathe", inspection: "Dimensional check" },
      { step: "Heat Treatment", description: "Stress relieving and hardening.", machinesUsed: "Induction/Vacuum Furnace", inspection: "Hardness testing" },
      { step: "Finish Turning", description: "Machining to pre-grind tolerances.", machinesUsed: "Precision CNC Lathe", inspection: "Dimensional and visual" },
      { step: "VMC Milling", description: "Cutting keyways, splines, and drilling.", machinesUsed: "4-Axis VMC", inspection: "Profile and pitch checking" },
      { step: "Cylindrical Grinding", description: "Final surface finish and bearing fits.", machinesUsed: "Cylindrical Grinder", inspection: "Surface roughness (Ra), Concentricity" },
      { step: "Inspection", description: "Final QA sign-off.", machinesUsed: "CMM, Dial Gauges, Surface Tester", inspection: "100% Dimensional & NDT (DPT/UT)" }
    ],
    qualityAssurance: QA_STANDARD,
    industries: [
      { name: "Oil & Gas", usage: "High-pressure crude oil transfer pumps and refinery injection pumps." },
      { name: "Water & Wastewater", usage: "Large capacity centrifugal split-case water pumps." },
      { name: "Marine", usage: "Seawater lift pumps and ballast management systems." },
      { name: "Power Generation", usage: "Boiler feed pumps and cooling water circulators." },
      { name: "OEMs", usage: "Supplied directly to global pump manufacturers for assembly." }
    ],
    applications: ["Oil & Gas", "Water & Wastewater", "Marine", "Power Generation", "OEMs"],
    certifications: ["ISO 9001:2015", "EN 10204 3.1", "DPT/UT Test Reports"],
    downloads: [
      { title: "Pump Shafts Technical Datasheet", type: "PDF", size: "2.4 MB", url: "/documents/shafts-datasheet.pdf" },
      { title: "Material Test Certificate (Sample)", type: "CERT", size: "800 KB", url: "/documents/mtc-sample.pdf" },
      { title: "Standard Tolerances Guide", type: "PDF", size: "1.1 MB", url: "/documents/tolerances.pdf" },
      { title: "Request 2D/3D CAD Drawing", type: "CAD", size: "ZIP", url: "/contact" }
    ],
    faqs: [
      { question: "What is the maximum shaft length you can machine?", answer: "We can manufacture continuous shafts up to 8000mm in length and up to 1500mm in diameter using our heavy-duty CNC lathes." },
      { question: "What tolerance can be achieved?", answer: "We routinely achieve dimensional tolerances down to 5 microns (0.005mm) and runout/concentricity within 10 microns." },
      { question: "What materials are available?", answer: "We process SS304, SS316, SS410, Duplex, Super Duplex, K-Monel, Titanium, and various EN series alloy steels." },
      { question: "Can custom dimensions be manufactured?", answer: "Yes, 100% of our production is custom-manufactured based on OEM drawings and specifications." },
      { question: "What is the lead time?", answer: "Lead times depend on material availability and complexity, typically ranging from 4 to 12 weeks. Expedited options are available." },
      { question: "What certifications are available?", answer: "ISO 9001:2015, EN 10204 3.1 Material Test Certificates, dynamic balancing reports, and NDT reports." },
      { question: "Can you manufacture from customer drawings?", answer: "Yes, we are a build-to-print manufacturer and work directly from your 2D CAD/PDF drawings." },
      { question: "Do you export internationally?", answer: "Yes, we export to over 12 countries including the USA, Germany, Japan, and the Middle East." },
      { question: "Do you provide surface treatments?", answer: "We coordinate with certified partners for hard chrome plating, HVOF, and specialized coatings." },
      { question: "How do you pack the shafts for export?", answer: "Shafts are rust-prevented, wrapped in VCI paper, and packed in custom seaworthy wooden crates to ensure zero transit damage." }
    ],
    relatedProducts: ["sleeve", "impeller", "coupling"]
  },
  {
    slug: "sleeve",
    name: "Hardened CNC Sleeves",
    category: "Sleeves & Bushes",
    summary: "Wear-resistant sleeves and bushes designed to protect pump shafts in extreme conditions.",
    description: "Pako Engineers manufactures high-precision shaft sleeves designed to protect the pump shaft from wear, corrosion, and erosion at the stuffing box and seal locations.",
    overview: "Shaft sleeves act as a sacrificial barrier between the rotating shaft and the stationary packing or mechanical seal. Since they are subjected to intense friction and abrasive fluids, they must be extremely hard and perfectly concentric. We manufacture sleeves with superior surface finishes and high Rockwell hardness, drastically reducing seal wear and maintenance downtime for industrial pumps.",
    image: "/images/pako-engineers-inampatta-sangli-h2rios7qk8.avif",
    gallery: [
      "/images/pako-engineers-inampatta-sangli-h2rios7qk8.avif",
      "/images/quality-inspection.png"
    ],
    features: [
      { title: "Exceptional Hardness", description: "Heat-treated for maximum wear resistance in abrasive pumping applications." },
      { title: "Perfect Concentricity", description: "Internal and external CNC grinding ensures perfect alignment with the shaft and seal." },
      { title: "Corrosion Resistance", description: "Available in high-grade stainless and duplex steels for aggressive chemical environments." }
    ],
    specifications: [
      { label: "Outside Diameter", value: "50 mm - 1500 mm" },
      { label: "Inside Diameter", value: "50 mm - 500 mm (Bored & Ground)" },
      { label: "Length", value: "Up to 1000 mm" },
      { label: "Wall Thickness", value: "Minimum 5 mm depending on OD" },
      { label: "Surface Finish", value: "Up to Ra 0.2 microns (Superfinished)" },
      { label: "Hardness", value: "Up to 60 HRC depending on material & treatment" },
      { label: "Concentricity", value: "Within 0.005 mm" }
    ],
    detailedMaterials: [
      { name: "SS410 / SS420", description: "Martensitic stainless steel capable of high hardness.", recommendedFor: "Standard abrasive water and industrial applications." },
      { name: "SS316 with Colmonoy Coating", description: "Austenitic steel with hardfacing.", recommendedFor: "Highly abrasive and corrosive slurry pumps." },
      { name: "Bronze / Gunmetal", description: "Excellent bearing properties and corrosion resistance.", recommendedFor: "Marine and seawater applications." }
    ],
    materials: ["SS410", "SS420", "SS316", "Bronze", "Duplex"],
    manufacturingWorkflow: [
      { step: "Material Sourcing", description: "Sourcing seamless pipes or forged billets.", machinesUsed: "Bandsaw", inspection: "Material Grade Check" },
      { step: "Rough Machining", description: "OD and ID rough turning.", machinesUsed: "CNC Lathe", inspection: "Dimensional" },
      { step: "Heat Treatment", description: "Through hardening or case hardening.", machinesUsed: "Furnace", inspection: "Hardness Test (HRC)" },
      { step: "Internal Grinding", description: "Precision bore grinding for shaft fit.", machinesUsed: "Internal Grinder", inspection: "Bore Gauge / Air Gauge" },
      { step: "External Grinding", description: "OD grinding on a mandrel.", machinesUsed: "Cylindrical Grinder", inspection: "Concentricity & Ra value" }
    ],
    qualityAssurance: QA_STANDARD,
    industries: [
      { name: "Chemical Processing", usage: "Sealing areas in chemical transfer pumps." },
      { name: "Mining", usage: "Slurry and dewatering pumps exposed to grit." },
      { name: "Agriculture", usage: "Irrigation and high-volume vertical turbine pumps." },
      { name: "OEMs", usage: "Standard components for new pump assemblies." }
    ],
    applications: ["Chemical Processing", "Mining", "Agriculture", "OEMs"],
    certifications: ["ISO 9001:2015"],
    downloads: [
      { title: "Sleeve Dimension & Tolerance Chart", type: "PDF", size: "1.5 MB", url: "/documents/sleeve-dimension-tolerance-chart.pdf" }
    ],
    faqs: [
      { question: "What tolerance can you achieve on internal diameters?", answer: "Our internal CNC grinding machines can achieve ID tolerances down to 5 microns (0.005mm)." },
      { question: "Do you offer hard-chrome plating or coatings?", answer: "Yes, we work with certified partners to provide hard-chrome plating, tungsten carbide coating, and Stellite hardfacing." },
      { question: "Can you machine thin-walled sleeves?", answer: "Yes, our specialized fixtures and mandrels allow us to grind thin-walled sleeves without distortion." },
      { question: "Do you manufacture split sleeves?", answer: "Yes, we can manufacture split-design sleeves based on customer drawings." },
      { question: "What is the best material for slurry pumps?", answer: "We recommend heat-treated SS420 or SS316 coated with Tungsten Carbide for severe slurry applications." },
      { question: "How do you ensure the ID and OD are perfectly concentric?", answer: "We grind the OD while the sleeve is mounted on a precision mandrel located via the pre-ground ID." },
      { question: "What surface finish is required for mechanical seals?", answer: "Mechanical seals typically require an OD surface finish of Ra 0.4 or better, which we achieve consistently." },
      { question: "Can you supply matching shaft and sleeve sets?", answer: "Yes, we can manufacture and trial-fit the sleeve onto the shaft before dispatch." },
      { question: "Are materials tested for porosity?", answer: "Yes, 100% DPT is performed on critical sleeves to ensure zero surface cracks or porosity." },
      { question: "What is your MOQ?", answer: "We cater to both prototype (single piece) and large volume OEM production." }
    ],
    relatedProducts: ["shaft", "lock-nut", "pump-parts"]
  },
  {
    slug: "impeller",
    name: "Precision Pump Impellers",
    category: "Pump Components",
    summary: "Dynamically balanced impellers manufactured for optimum fluid dynamics and efficiency.",
    description: "We supply fully machined and dynamically balanced impellers for various centrifugal pump designs. Whether open, semi-open, or closed, our impellers are machined from high-quality castings.",
    overview: "The impeller is the heart of a centrifugal pump, directly dictating flow rate and pressure. Pako Engineers specializes in the precision machining and dynamic balancing of impeller castings. We ensure critical bore tolerances, vane profiles, and keyways are exact. Proper dynamic balancing is crucial, and we ensure every impeller meets ISO 1940 standards, preventing vibration that could destroy bearings and seals.",
    image: "/images/pako-engineers-inampatta-sangli-industrial-equipment-manufacturers-88792vy3by.avif",
    gallery: [
      "/images/pako-engineers-inampatta-sangli-industrial-equipment-manufacturers-88792vy3by.avif"
    ],
    features: [
      { title: "Dynamic Balancing", description: "In-house static and dynamic balancing to ISO 1940 Grade 6.3 or 2.5." },
      { title: "Precision Bore Machining", description: "Bores machined to exact H7/h6 tolerances for perfect shaft fitment." },
      { title: "NDT Verified", description: "100% DPT on machined surfaces to ensure casting integrity and zero porosity." }
    ],
    specifications: [
      { label: "Impeller Types", value: "Open, Semi-Open, Closed, Mixed Flow" },
      { label: "Outside Diameter", value: "Up to 1500 mm" },
      { label: "Bore Diameter", value: "Custom H7/h6 fits" },
      { label: "Dynamic Balance", value: "ISO 1940 Grade G6.3 / G2.5" },
      { label: "Surface Finish (Machined Areas)", value: "Ra 1.6 to 3.2 microns" },
      { label: "Keyway", value: "Standard or Tapered (Wire-Cut EDM)" }
    ],
    detailedMaterials: [
      { name: "Cast Iron / Ductile Iron", description: "Standard reliable material.", recommendedFor: "Fresh water and general industrial applications." },
      { name: "Bronze / Gunmetal", description: "Good corrosion resistance and non-sparking.", recommendedFor: "Marine and fire-fighting pumps." },
      { name: "SS316 / Duplex Steel Castings", description: "High strength and chemical resistance.", recommendedFor: "Chemical, desalination, and oil & gas." }
    ],
    materials: ["Cast Iron", "Bronze", "SS316", "Duplex Castings"],
    manufacturingWorkflow: [
      { step: "Casting Procurement", description: "Sourcing from certified foundry partners.", machinesUsed: "Visual/Dimensional Inspection", inspection: "Material Certs & DPT" },
      { step: "OD & Face Machining", description: "Turning the shroud and wear ring areas.", machinesUsed: "Vertical Turning Lathe (VTL)", inspection: "Dimensional" },
      { step: "Bore Machining", description: "Precision boring for the shaft fit.", machinesUsed: "CNC Lathe / Boring Mill", inspection: "Plug Gauge / Bore Micrometer" },
      { step: "Keyway Broaching", description: "Cutting the key slot.", machinesUsed: "Broaching Machine / Wire-Cut EDM", inspection: "Profile and width" },
      { step: "Dynamic Balancing", description: "Material removal to balance the rotor.", machinesUsed: "Dynamic Balancing Machine", inspection: "Balancing Report (ISO 1940)" }
    ],
    qualityAssurance: QA_STANDARD,
    industries: [
      { name: "Water & Wastewater", usage: "Large scale municipal water distribution pumps." },
      { name: "Chemical Processing", usage: "Handling corrosive acids and alkalis." },
      { name: "Marine", usage: "Bronze impellers for seawater handling." },
      { name: "Power Generation", usage: "Boiler feed and cooling tower pumps." }
    ],
    applications: ["Water & Wastewater", "Chemical Processing", "Marine", "Power Generation"],
    certifications: ["ISO 9001:2015", "Balancing Certificate", "DPT Report"],
    downloads: [
      { title: "Impeller Balancing Standards", type: "PDF", size: "800 KB", url: "/documents/impeller-balancing-standards.pdf" }
    ],
    faqs: [
      { question: "Do you manufacture the impeller castings?", answer: "We source high-quality castings from certified foundries and perform 100% of the precision machining, balancing, and testing in-house." },
      { question: "Can you balance large impellers?", answer: "Yes, our balancing machines can handle large diameter impellers up to 1500mm for heavy-duty industrial pumps." },
      { question: "What balancing grade do you provide?", answer: "We typically balance to ISO 1940 Grade G6.3, and G2.5 for high-speed critical applications." },
      { question: "How do you correct imbalance?", answer: "Imbalance is corrected by precision milling or grinding material from the impeller shrouds at calculated angles." },
      { question: "Can you machine closed impellers?", answer: "Yes, we machine open, semi-open, and complex closed impellers." },
      { question: "Do you perform NDT on the castings?", answer: "Yes, we perform Dye Penetrant Testing (DPT) on all machined surfaces to ensure there are no casting defects." },
      { question: "Can you supply impellers with wear rings fitted?", answer: "Yes, we can manufacture, press-fit, and final-machine wear rings onto the impeller." },
      { question: "What is your experience with Duplex castings?", answer: "We have extensive experience machining tough Duplex and Super Duplex castings for the oil & gas industry." },
      { question: "Can you machine tapered bores?", answer: "Yes, we regularly machine precision tapered bores and cut matching tapered keyways." },
      { question: "Do you provide material test reports?", answer: "Yes, complete chemical and physical test reports from the foundry are provided." }
    ],
    relatedProducts: ["shaft", "pump-parts", "gears"]
  },
  {
    slug: "coupling",
    name: "Industrial Drive Couplings",
    category: "Couplings",
    summary: "Rigid muff and flexible drive couplings machined for absolute alignment in rotating assemblies.",
    description: "Pako Engineers manufactures high-precision muff couplings, rigid couplings, and drive coupling components. Machined to exacting standards, these components ensure zero angular or parallel misalignment.",
    overview: "Couplings are vital for transmitting torque from the motor to the pump shaft while accommodating slight misalignments and dampening vibration. We manufacture the metallic hubs, flanges, and muff couplings that form these assemblies. Because any misalignment causes severe bearing failure, our couplings are bored and faced with extreme perpendicularity and concentricity.",
    image: "/images/pako-engineers-inampatta-sangli-xas6rn507h.avif",
    gallery: [
      "/images/pako-engineers-inampatta-sangli-xas6rn507h.avif"
    ],
    features: [
      { title: "Absolute Alignment", description: "Precision bored to ensure perfect shaft-to-shaft concentricity." },
      { title: "Complex Keyways", description: "Standard and tapered keyways machined via Wire-Cut EDM for exact geometry." },
      { title: "High Torque Capacity", description: "Manufactured from high-tensile forged steel for heavy-duty power transmission." }
    ],
    specifications: [
      { label: "Outside Diameter", value: "50 mm - 400 mm" },
      { label: "Length", value: "100 mm - 1000 mm" },
      { label: "Bore Tolerance", value: "H7 / Custom Transition Fit" },
      { label: "Keyway Tolerance", value: "P9 / Js9" },
      { label: "Perpendicularity (Faces)", value: "Within 0.02 mm" },
      { label: "Material Hardness", value: "As specified (e.g., 250-300 BHN)" }
    ],
    detailedMaterials: [
      { name: "Forged Carbon Steel (EN8)", description: "Standard high-strength material.", recommendedFor: "General industrial drive couplings." },
      { name: "Alloy Steel (EN19 / EN24)", description: "High tensile and yield strength.", recommendedFor: "High torque and heavy-duty applications." },
      { name: "Stainless Steel (SS316)", description: "Corrosion resistant.", recommendedFor: "Food processing and corrosive environments." }
    ],
    materials: ["EN8", "EN19", "EN24", "SS316"],
    manufacturingWorkflow: [
      { step: "Forging", description: "Sourcing forged steel blocks/cylinders.", machinesUsed: "Bandsaw", inspection: "UT for internal cracks" },
      { step: "Turning", description: "OD and face machining.", machinesUsed: "CNC Lathe", inspection: "Perpendicularity check" },
      { step: "Precision Boring", description: "Boring to exact shaft fit tolerance.", machinesUsed: "CNC Boring Mill", inspection: "Bore gauge" },
      { step: "Keyway EDM", description: "Cutting precise key slots.", machinesUsed: "Wire-Cut EDM", inspection: "Profile check" },
      { step: "Drilling & Tapping", description: "Creating holes for coupling bolts/pins.", machinesUsed: "VMC", inspection: "PCD accuracy check" }
    ],
    qualityAssurance: QA_STANDARD,
    industries: [
      { name: "Power Generation", usage: "Turbine to pump drive connections." },
      { name: "Mining", usage: "Heavy-duty conveyor and slurry pump drives." },
      { name: "Marine", usage: "Propulsion and auxiliary pump connections." },
      { name: "Heavy Engineering", usage: "Large scale rotating equipment." }
    ],
    applications: ["Power Generation", "Mining", "Marine", "Heavy Engineering"],
    certifications: ["ISO 9001:2015"],
    downloads: [
      { title: "Coupling Machining Tolerances", type: "PDF", size: "1.2 MB", url: "/documents/coupling-machining-tolerances.pdf" }
    ],
    faqs: [
      { question: "Can you machine tapered bores for couplings?", answer: "Yes, we specialize in precise tapered boring and tapered keyways for specific coupling designs." },
      { question: "Do you supply the flexible elements (rubber/elastomer)?", answer: "We primarily manufacture the metallic hubs and flanges, but can source and supply complete assemblies upon request." },
      { question: "What tolerance is maintained on the coupling bore?", answer: "We maintain standard H7 transition or interference fits, or custom tolerances based on your drawings." },
      { question: "How do you ensure the coupling faces are perfectly flat?", answer: "We CNC turn the faces and the bore in the same setup to ensure perfect perpendicularity." },
      { question: "Can you dynamically balance couplings?", answer: "Yes, we can dynamically balance coupling hubs for high-speed applications." },
      { question: "Do you make rigid muff couplings?", answer: "Yes, we manufacture heavy-duty rigid muff couplings for solid shaft connections." },
      { question: "What is Wire-Cut EDM used for?", answer: "We use Wire-Cut EDM to cut highly precise keyways, ensuring zero backlash when fitted to the shaft." },
      { question: "Can you manufacture split couplings?", answer: "Yes, we machine two-piece split muff couplings." },
      { question: "Are coupling bolts included?", answer: "We can supply high-tensile coupling bolts and nuts if specified in the PO." },
      { question: "Do you offer rust protection?", answer: "All carbon steel couplings are coated with rust preventatives before packaging." }
    ],
    relatedProducts: ["shaft", "gears", "lock-nut"]
  },
  {
    slug: "pump-parts",
    name: "Custom Pump Components",
    category: "Pump Components",
    summary: "Bespoke engineered parts and sub-assemblies manufactured to stringent OEM drawings.",
    description: "Beyond standard shafts and impellers, we act as a complete contract manufacturing partner for global OEMs. We manufacture a wide array of custom pump components.",
    overview: "Pumps consist of dozens of precision-machined stationary and rotating components. We manufacture bearing housings, stuffing boxes, mechanical seal plates, wear rings, discharge manifolds, and casing covers. By combining heavy CNC turning, multi-axis milling, and precision grinding, we deliver ready-to-assemble components straight to your production line.",
    image: "/images/pako-engineers-inampatta-sangli-b3nj3sm4d3.avif",
    gallery: [
      "/images/pako-engineers-inampatta-sangli-b3nj3sm4d3.avif",
      "/images/hero-machining.png"
    ],
    features: [
      { title: "Build-to-Print Manufacturing", description: "Exact adherence to customer drawings and Quality Assurance Plans (QAP)." },
      { title: "Multi-Process Capability", description: "Combining turning, milling, drilling, and grinding in a single managed workflow." },
      { title: "Assembly Ready", description: "Components arrive fully inspected, deburred, cleaned, and ready for assembly." }
    ],
    specifications: [
      { label: "Outside Diameter", value: "Up to 1500 mm" },
      { label: "Length", value: "Customised to drawing" },
      { label: "Weight", value: "Up to 5 Tons per piece" },
      { label: "Tolerances", value: "Down to 5 microns" },
      { label: "Surface Finish", value: "Ra 0.8 to 3.2 microns / As specified" },
      { label: "NDT Testing", value: "DPT, UT, PMI available" }
    ],
    detailedMaterials: [
      { name: "Stainless Steel (All Grades)", description: "Corrosion resistant.", recommendedFor: "General pump components." },
      { name: "Super Duplex Steel", description: "High strength and corrosion resistant.", recommendedFor: "Offshore and marine pump components." },
      { name: "Cast Iron / Ductile Iron", description: "High machinability and strength.", recommendedFor: "Bearing housings and casings." }
    ],
    materials: ["Stainless Steel", "Duplex", "Super Duplex", "Nitronic 50", "Cast Iron", "Bronze"],
    manufacturingWorkflow: [
      { step: "Material Procurement", description: "Sourcing castings or forgings.", machinesUsed: "Visual", inspection: "PMI and cert check" },
      { step: "CNC Turning/Milling", description: "Primary machining operations.", machinesUsed: "CNC VTL / HMC", inspection: "Dimensional" },
      { step: "Heat Treatment", description: "Stress relieving.", machinesUsed: "Furnace", inspection: "Hardness" },
      { step: "Grinding", description: "Precision fits for bearings/seals.", machinesUsed: "Cylindrical Grinder", inspection: "Surface Finish" },
      { step: "Final Inspection", description: "CMM checking of complex geometries.", machinesUsed: "CMM", inspection: "100% QA" }
    ],
    qualityAssurance: QA_STANDARD,
    industries: [
      { name: "OEMs", usage: "Supplying complete kits to pump manufacturers." },
      { name: "Oil & Gas", usage: "API pump components." },
      { name: "Water & Wastewater", usage: "Large scale split-case pump internals." },
      { name: "Food Processing", usage: "Sanitary pump components." }
    ],
    applications: ["OEMs", "Oil & Gas", "Water & Wastewater", "Food Processing"],
    certifications: ["ISO 9001:2015", "EN 10204 3.1"],
    downloads: [
      { title: "Contract Manufacturing Brochure", type: "PDF", size: "3.5 MB", url: "/documents/contract-manufacturing-brochure.pdf" }
    ],
    faqs: [
      { question: "Do you offer sub-assembly services?", answer: "Yes, we offer mechanical sub-assembly, static balancing, and rotor build-up services in our dedicated assembly zone." },
      { question: "What is your typical lead time?", answer: "Lead times depend on material availability and complexity, but our streamlined process ensures competitive delivery schedules for global OEMs." },
      { question: "Can you machine complex bearing housings?", answer: "Yes, our VTL and VMC machines can handle complex bearing housings with tight bore tolerances." },
      { question: "Do you manufacture casing wear rings?", answer: "Yes, we manufacture wear rings in various bronzes and stainless steels." },
      { question: "Do you assemble mechanical seals?", answer: "We machine the seal plates and glands, and can perform trial fits if the seals are provided." },
      { question: "Can you perform hydrostatic testing?", answer: "We coordinate with certified testing facilities for hydrostatic pressure testing of casings if required." },
      { question: "What sizes can your VTL handle?", answer: "Our Vertical Turning Lathes can handle components up to 1500mm in diameter." },
      { question: "Do you machine cast parts?", answer: "Yes, a large portion of our work involves precision machining of customer-supplied or procured castings." },
      { question: "How do you handle drawing revisions?", answer: "We have a strict document control system to ensure only the latest revision is on the shop floor." },
      { question: "Can you reverse engineer parts?", answer: "We prefer working from OEM drawings, but can assist with reverse engineering via CMM scanning if necessary." }
    ],
    relatedProducts: ["impeller", "retainer-ring", "sleeve"]
  },
  {
    slug: "lock-nut",
    name: "Precision Lock Nuts",
    category: "Lock Nuts",
    summary: "Heavy-duty threaded lock nuts for securing bearings and rotating assemblies.",
    description: "Our precision-threaded lock nuts are critical components for securing bearings, gears, and impellers onto shafts.",
    overview: "Lock nuts must hold massive rotating assemblies together under intense vibration. If the thread is inaccurate or the locking face is not perfectly perpendicular to the thread axis, it will bend the shaft when tightened, causing catastrophic vibration. We CNC machine lock nuts with perfect perpendicularity and exact thread profiles to ensure fail-safe retention.",
    image: "/images/pako-engineers-inampatta-sangli-6aohn6oy1s.avif",
    gallery: [
      "/images/pako-engineers-inampatta-sangli-6aohn6oy1s.avif"
    ],
    features: [
      { title: "Exact Thread Profiles", description: "CNC cut threads for zero backlash and perfect fitment." },
      { title: "High Perpendicularity", description: "Face runout strictly controlled to prevent shaft distortion when tightened." },
      { title: "Anti-Galling Materials", description: "Available in specific alloys and finishes to prevent thread galling during assembly." }
    ],
    specifications: [
      { label: "Outside Diameter", value: "30 mm - 750 mm" },
      { label: "Threading", value: "1 mm - 120 mm pitch" },
      { label: "Thread Types", value: "Metric, Whitworth, Acme, Trapezoidal, Custom" },
      { label: "Face Runout", value: "Within 0.02 mm" },
      { label: "Locking Mechanism", value: "Spanner slots, grub screw tapped holes" }
    ],
    detailedMaterials: [
      { name: "Stainless Steel (SS316)", description: "Corrosion resistant.", recommendedFor: "Standard pump lock nuts." },
      { name: "Super Duplex Steel", description: "High strength.", recommendedFor: "High-stress marine applications." },
      { name: "Carbon/Alloy Steel", description: "High tensile.", recommendedFor: "Heavy gearboxes and turbines." }
    ],
    materials: ["Stainless Steel", "Duplex", "Alloy Steel", "Carbon Steel"],
    manufacturingWorkflow: [
      { step: "Turning", description: "Machining the OD and face.", machinesUsed: "CNC Lathe", inspection: "Dimensional" },
      { step: "Threading", description: "CNC single-point threading.", machinesUsed: "CNC Lathe", inspection: "Thread Gauge / Pitch check" },
      { step: "Milling", description: "Cutting spanner slots.", machinesUsed: "VMC", inspection: "Visual" },
      { step: "Drilling", description: "Tapping holes for locking screws.", machinesUsed: "VMC", inspection: "Thread gauge" }
    ],
    qualityAssurance: QA_STANDARD,
    industries: [
      { name: "OEMs", usage: "Bearing retention in new pumps." },
      { name: "Marine", usage: "Propeller and tail-shaft nuts." },
      { name: "Power Generation", usage: "Turbine rotor assemblies." },
      { name: "Heavy Engineering", usage: "Large gearbox assemblies." }
    ],
    applications: ["OEMs", "Marine", "Power Generation", "Heavy Engineering"],
    certifications: ["ISO 9001:2015"],
    downloads: [
      { title: "Thread Profile & Tolerance Guide", type: "PDF", size: "900 KB", url: "/documents/thread-profile-tolerance-guide.pdf" }
    ],
    faqs: [
      { question: "Can you manufacture left-hand threads?", answer: "Yes, we can CNC machine both right-hand and left-hand threads to any specified pitch." },
      { question: "Do you make Acme and Trapezoidal threads?", answer: "Yes, our CNC lathes can easily cut complex Acme and Trapezoidal thread profiles." },
      { question: "How do you ensure the face is perpendicular to the thread?", answer: "We machine the thread and the locating face in the same clamping setup to guarantee perpendicularity." },
      { question: "Can you provide matching threaded shafts?", answer: "Yes, we often manufacture the shaft and the lock nut as a matched set." },
      { question: "Do you tap holes for grub screws?", answer: "Yes, we drill and tap radial holes for locking grub screws as per the drawing." },
      { question: "What sizes can you thread?", answer: "We can thread nuts up to 750mm in diameter." },
      { question: "Do you use thread gauges?", answer: "Yes, we use calibrated thread plug gauges to verify internal threads." },
      { question: "What materials prevent thread galling?", answer: "Using dissimilar hardness materials or specific coatings like copper plating can prevent stainless steel galling." },
      { question: "Do you manufacture castle nuts?", answer: "Yes, we can mill the slots required for castle nuts and cotter pins." },
      { question: "Can you plate the lock nuts?", answer: "Yes, zinc plating, blackening, or other coatings are available upon request." }
    ],
    relatedProducts: ["shaft", "bearings-rings", "coupling"]
  },
  {
    slug: "retainer-ring",
    name: "Retainer Rings & Bearings",
    category: "Bearings & Rings",
    summary: "High-precision retainer rings and elastomeric bearings for marine and industrial pumps.",
    description: "We manufacture tight-tolerance retainer rings and bearing components, including the machining of specialized elastomeric bearings like Thordon and Feroform.",
    overview: "Vertical turbine pumps and marine tail-shafts rely on water-lubricated bearings housed inside metallic retainer rings. Machining non-metallic composites like Thordon requires specialized tooling, speeds, and feeds to maintain tight running clearances without melting or distorting the material. Pako Engineers has perfected this process, supplying ready-to-install bearing assemblies.",
    image: "/images/pako-engineers-inampatta-sangli-km7ieyz05d.avif",
    gallery: [
      "/images/pako-engineers-inampatta-sangli-km7ieyz05d.avif"
    ],
    features: [
      { title: "Specialized Machining", description: "Expertise in machining non-metallic bearing composites like Thordon and Feroform." },
      { title: "Tight Clearances", description: "Maintained running clearances critical for water-lubricated bearing applications." },
      { title: "Corrosion Proof", description: "Retainer rings available in marine-grade Super Duplex and Gunmetal." }
    ],
    specifications: [
      { label: "Outside Diameter", value: "70 mm - 700 mm" },
      { label: "Length", value: "Up to 500 mm" },
      { label: "Clearance Tolerance", value: "Down to 10 microns" },
      { label: "Surface Finish", value: "Optimized for bearing longevity" }
    ],
    detailedMaterials: [
      { name: "Thordon / Feroform", description: "Elastomeric and composite bearing materials.", recommendedFor: "Water-lubricated vertical pumps." },
      { name: "Gunmetal / Bronze", description: "Traditional bearing material.", recommendedFor: "Marine applications." },
      { name: "Super Duplex Steel", description: "Corrosion resistant housing.", recommendedFor: "Retainer rings in seawater." }
    ],
    materials: ["Thordon", "Feroform F363", "Gunmetal", "Stainless Steel", "Super Duplex"],
    manufacturingWorkflow: [
      { step: "Ring Machining", description: "Turning the metallic retainer ring.", machinesUsed: "CNC Lathe", inspection: "Dimensional" },
      { step: "Bearing Machining", description: "Boring the Thordon/Feroform insert.", machinesUsed: "CNC Lathe", inspection: "Clearance check" },
      { step: "Grooving", description: "Cutting water lubrication grooves.", machinesUsed: "VMC / Broach", inspection: "Visual/Dimensional" },
      { step: "Assembly", description: "Press fitting the bearing into the ring.", machinesUsed: "Hydraulic Press", inspection: "Final ID check post-press" }
    ],
    qualityAssurance: QA_STANDARD,
    industries: [
      { name: "Marine", usage: "Tail-shaft and rudder bearings." },
      { name: "Water & Wastewater", usage: "Vertical turbine pump line-shaft bearings." },
      { name: "Power Generation", usage: "Hydro-turbine guide bearings." },
      { name: "OEMs", usage: "New pump builds." }
    ],
    applications: ["Marine", "Water & Wastewater", "Power Generation", "OEMs"],
    certifications: ["ISO 9001:2015"],
    downloads: [
      { title: "Elastomeric Bearing Machining Guidelines", type: "PDF", size: "1.4 MB", url: "/documents/elastomeric-bearing-machining-guidelines.pdf" }
    ],
    faqs: [
      { question: "Do you supply the Thordon raw material?", answer: "We can procure the raw tubes/billets from authorized distributors or machine free-issue material provided by the client." },
      { question: "Why is machining Thordon difficult?", answer: "It is an elastomer that flexes and generates heat during machining. It requires extremely sharp tooling, specific rake angles, and coolants to cut accurately." },
      { question: "Do you machine water grooves?", answer: "Yes, we can mill or broach straight or spiral water lubrication grooves into the bearing ID." },
      { question: "Can you supply the bearing already pressed into the ring?", answer: "Yes, we calculate the interference fit, press the bearing into the retainer ring, and then do a final bore check." },
      { question: "What materials do you use for retainer rings?", answer: "Typically SS316, Duplex, Super Duplex, or Bronze depending on the fluid corrosivity." },
      { question: "What tolerances do you hold on bearing ID?", answer: "We hold the exact running clearances specified by the OEM or bearing manufacturer." },
      { question: "Do you machine Feroform composites?", answer: "Yes, we are highly experienced in machining Feroform F363 and similar composites." },
      { question: "Are these bearings water-lubricated?", answer: "Yes, Thordon and Feroform are typically used in applications where the pumped fluid (water) acts as the lubricant." },
      { question: "Can you machine split bearings?", answer: "Yes, we can machine split-shell composite bearings." },
      { question: "What sizes can you handle?", answer: "We can machine bearings up to 700mm in diameter." }
    ],
    relatedProducts: ["shaft", "pump-parts", "sleeve"]
  },
  {
    slug: "gears",
    name: "Industrial Custom Gears",
    category: "Gears",
    summary: "Precision machined gears for integration into rotating assemblies and gearboxes.",
    description: "Pako Engineers manufactures custom spur and helical gears based on customer drawings.",
    overview: "Gears transmit massive torque and speed. Inaccurate tooth geometry leads to noise, heat, and rapid failure. Integrated into our broader capability of producing rotating assemblies, our gear manufacturing process involves precise hobbing, case hardening, and profile grinding. We ensure exact involute profiles, pitch accuracy, and optimal surface hardness.",
    image: "/images/pako-engineers-inampatta-sangli-industrial-equipment-manufacturers-r1phia7ur6.avif",
    gallery: [
      "/images/pako-engineers-inampatta-sangli-industrial-equipment-manufacturers-r1phia7ur6.avif"
    ],
    features: [
      { title: "Profile Accuracy", description: "Precision gear hobbing and grinding for exact involute profiles." },
      { title: "Optimal Hardness", description: "Case carburizing and induction hardening for extended tooth wear life." },
      { title: "Complete Assemblies", description: "Gears can be assembled onto shafts in-house for a complete drop-in solution." }
    ],
    specifications: [
      { label: "Gear Types", value: "Spur Gears, Helical Gears" },
      { label: "Outside Diameter", value: "Custom, per drawing" },
      { label: "Module / Pitch", value: "As specified" },
      { label: "Heat Treatment", value: "Case Carburizing, Nitriding, Induction Hardening" },
      { label: "Quality Grade", value: "DIN / AGMA standards as specified" },
      { label: "Profile Grinding", value: "Available for high-precision gears" }
    ],
    detailedMaterials: [
      { name: "Alloy Steels (EN353, 8620)", description: "Case hardening steels.", recommendedFor: "High wear gear teeth." },
      { name: "Carbon Steel (EN8/EN9)", description: "Medium strength.", recommendedFor: "Low speed gears." },
      { name: "Bronze", description: "Low friction.", recommendedFor: "Worm gears." }
    ],
    materials: ["EN353", "8620", "Carbon Steel", "Bronze"],
    manufacturingWorkflow: [
      { step: "Blank Turning", description: "Machining the gear blank.", machinesUsed: "CNC Lathe", inspection: "Dimensional" },
      { step: "Hobbing", description: "Cutting the gear teeth.", machinesUsed: "Gear Hobber", inspection: "Pitch and Profile" },
      { step: "Heat Treatment", description: "Case hardening the teeth.", machinesUsed: "Furnace", inspection: "Hardness testing" },
      { step: "Bore/Face Grinding", description: "Grinding the mounting surfaces.", machinesUsed: "Cylindrical Grinder", inspection: "Concentricity" },
      { step: "Profile Grinding", description: "Final finishing of the teeth.", machinesUsed: "Gear Grinder", inspection: "Tooth geometry check" }
    ],
    qualityAssurance: QA_STANDARD,
    industries: [
      { name: "OEMs", usage: "Gearbox manufacturers." },
      { name: "Automotive", usage: "Transmission components." },
      { name: "Heavy Engineering", usage: "Crane and hoist drives." },
      { name: "Agriculture", usage: "Tractor and machinery gears." }
    ],
    applications: ["OEMs", "Automotive", "Heavy Engineering", "Agriculture"],
    certifications: ["ISO 9001:2015"],
    downloads: [
      { title: "Gear Manufacturing Capabilities", type: "PDF", size: "2.1 MB", url: "/documents/gear-manufacturing-capabilities.pdf" }
    ],
    faqs: [
      { question: "Do you manufacture gearboxes?", answer: "We primarily manufacture the internal gear components and shafts, though we can perform sub-assembly based on customer requirements." },
      { question: "What types of gears do you make?", answer: "We specialize in spur and helical gears." },
      { question: "Do you perform gear profile grinding?", answer: "Yes, for applications requiring low noise and high precision (e.g., DIN 6 or better), we perform post-heat treatment profile grinding." },
      { question: "What heat treatments do you offer for gears?", answer: "We offer case carburizing, induction hardening, and nitriding to achieve the required tooth surface hardness." },
      { question: "Can you manufacture integral gear shafts?", answer: "Yes, we routinely machine shafts with integral hobbed pinions." },
      { question: "Do you test gear hardness?", answer: "Yes, we perform rigorous hardness testing (HRC/BHN) on the teeth flanks." },
      { question: "Can you reverse engineer a broken gear?", answer: "If an OEM drawing is unavailable, we can measure the broken gear, calculate the module and pitch, and manufacture a replacement." },
      { question: "Do you make bronze worm gears?", answer: "Yes, we machine bronze worm gears for specific gearbox applications." },
      { question: "What is the maximum diameter gear you can cut?", answer: "Please contact our engineering team with your drawings to confirm current machine capacity." },
      { question: "Are gears dynamically balanced?", answer: "High-speed gears can be dynamically balanced upon request." }
    ],
    relatedProducts: ["shaft", "coupling"]
  }
];

export function getAllProducts(): ProductData[] {
  return products;
}

export function getProductBySlug(slug: string): ProductData | undefined {
  return products.find((p) => p.slug === slug);
}
