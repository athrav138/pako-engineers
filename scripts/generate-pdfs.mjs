/**
 * PAKO Engineers — PDF Document Generator
 * 
 * INSTRUCTIONS:
 * 1. Open a terminal (PowerShell or Command Prompt)
 * 2. Navigate to the project:
 *      cd "D:\Project List\pako-engineers"
 * 3. Install pdfkit:
 *      npm install pdfkit --save-dev
 * 4. Run this script:
 *      node scripts/generate-pdfs.mjs
 * 5. (Optional) Remove pdfkit after:
 *      npm uninstall pdfkit
 */

import PDFDocument from 'pdfkit';
import fs from 'fs';
import path from 'path';

const OUTPUT_DIR = path.resolve('public/documents');

const NAVY = '#0F1B2D';
const OXIDE = '#FF5722';
const INK = '#1E293B';
const MUTED = '#64748B';

const FOOTER_TEXT = 'PAKO Engineers  |  Burli, Taluka Palus, Sangli, Maharashtra, India  |  sales@pakoshaft.com  |  +91 97670 43447';
const COMPANY_NAME = 'PAKO ENGINEERS';
const TAGLINE = 'Precision Manufacturing Since 1994';

function createPDF(filename, title, sections) {
  return new Promise((resolve, reject) => {
    const doc = new PDFDocument({
      size: 'A4',
      margins: { top: 60, bottom: 60, left: 50, right: 50 },
      info: {
        Title: title,
        Author: 'PAKO Engineers',
        Subject: title,
        Creator: 'PAKO Engineers Website',
      }
    });

    const outputPath = path.join(OUTPUT_DIR, filename);
    const stream = fs.createWriteStream(outputPath);
    doc.pipe(stream);

    const pageWidth = doc.page.width - doc.page.margins.left - doc.page.margins.right;

    // ── Header ──
    doc.rect(0, 0, doc.page.width, 100).fill(NAVY);
    doc.fontSize(22).fillColor('#FFFFFF').font('Helvetica-Bold')
      .text(COMPANY_NAME, 50, 30, { width: pageWidth });
    doc.fontSize(9).fillColor('#FFFFFF').font('Helvetica')
      .text(TAGLINE, 50, 58, { width: pageWidth });

    // Accent bar
    doc.rect(50, 88, 60, 3).fill(OXIDE);

    // ── Title ──
    doc.moveDown(3);
    let y = 120;
    doc.fontSize(18).fillColor(NAVY).font('Helvetica-Bold')
      .text(title, 50, y, { width: pageWidth });
    y += 30;

    // Divider
    doc.moveTo(50, y).lineTo(50 + pageWidth, y).lineWidth(0.5).strokeColor('#CBD5E1').stroke();
    y += 15;

    // ── Content Sections ──
    for (const section of sections) {
      if (y > doc.page.height - 120) {
        doc.addPage();
        y = 60;
      }

      if (section.heading) {
        doc.fontSize(12).fillColor(OXIDE).font('Helvetica-Bold')
          .text(section.heading, 50, y, { width: pageWidth });
        y += 20;
      }

      if (section.text) {
        doc.fontSize(10).fillColor(INK).font('Helvetica')
          .text(section.text, 50, y, { width: pageWidth, lineGap: 3 });
        y = doc.y + 12;
      }

      if (section.bullets) {
        for (const bullet of section.bullets) {
          if (y > doc.page.height - 80) {
            doc.addPage();
            y = 60;
          }
          doc.fontSize(10).fillColor(OXIDE).font('Helvetica-Bold')
            .text('\u25CF', 55, y, { continued: false });
          doc.fontSize(10).fillColor(INK).font('Helvetica')
            .text(bullet, 72, y, { width: pageWidth - 30, lineGap: 2 });
          y = doc.y + 6;
        }
        y += 6;
      }

      if (section.table) {
        for (const row of section.table) {
          if (y > doc.page.height - 80) {
            doc.addPage();
            y = 60;
          }
          doc.fontSize(9).fillColor(MUTED).font('Helvetica-Bold')
            .text(row.label, 55, y, { width: 180, continued: false });
          doc.fontSize(9).fillColor(INK).font('Helvetica')
            .text(row.value, 240, y, { width: pageWidth - 200 });
          y = doc.y + 5;
        }
        y += 10;
      }
    }

    // ── Footer ──
    const footerY = doc.page.height - 40;
    doc.moveTo(50, footerY - 10).lineTo(50 + pageWidth, footerY - 10).lineWidth(0.3).strokeColor('#CBD5E1').stroke();
    doc.fontSize(7).fillColor(MUTED).font('Helvetica')
      .text(FOOTER_TEXT, 50, footerY, { width: pageWidth, align: 'center' });

    doc.end();
    stream.on('finish', () => {
      console.log('  \\u2713 Generated: ' + filename);
      resolve();
    });
    stream.on('error', reject);
  });
}

const documents = [
  {
    filename: 'shafts-datasheet.pdf',
    title: 'Pump Shafts \u2014 Technical Datasheet',
    sections: [
      { text: 'Precision pump shafts manufactured to OEM drawings for centrifugal, vertical turbine, marine, and process pumps.' },
      { heading: 'Standard Capability', table: [
        { label: 'Outside Diameter', value: '50 mm to 1500 mm' },
        { label: 'Length (Machining)', value: 'Up to 8000 mm (8 metres)' },
        { label: 'Length (Grinding)', value: 'Up to 6500 mm' },
        { label: 'Surface Finish', value: '10 to 50 microns (Ra 0.2 \u2013 1.6 \u00b5m)' },
        { label: 'Concentricity', value: 'Within 0.01 mm' },
        { label: 'Straightness', value: '0.05 mm per metre' },
        { label: 'Weight Capacity', value: 'Up to 5 Tonnes per piece' },
        { label: 'Dynamic Balance', value: 'ISO 1940 Grade G2.5 / G6.3' },
        { label: 'Heat Treatment', value: 'Through hardening, induction hardening, nitriding' },
        { label: 'Coating', value: 'Hard chrome plating, HVOF available' },
      ]},
      { heading: 'Materials Processed', bullets: [
        'SS316 / SS316L \u2014 Austenitic stainless for chemical and water applications',
        'Duplex (UNS S31803) \u2014 High strength with superior pitting resistance',
        'Super Duplex (UNS S32750) \u2014 Exceptional stress corrosion cracking resistance',
        'Nitronic 50 \u2014 High-strength stainless with excellent corrosion resistance',
        'EN8 / EN19 / EN24 \u2014 High-tensile alloy steels for non-corrosive environments',
      ]},
      { heading: 'Documentation Provided', bullets: [
        'EN 10204 Type 3.1 Material Test Certificate (MTC)',
        'Dimensional inspection report',
        'NDT report (DPT / UT)',
        'Dynamic balancing certificate (where applicable)',
      ]},
      { heading: 'Contact', text: 'For drawing-based quotations, email sales@pakoshaft.com or call +91 97670 43447.' },
    ],
  },
  {
    filename: 'mtc-sample.pdf',
    title: 'Material Test Certificate \u2014 Sample',
    sections: [
      { text: 'This is a representative sample of the documentation package supplied with every precision machined component. Actual MTCs are issued per order with traceable heat numbers.' },
      { heading: 'Certificate Contents', bullets: [
        'Chemical composition analysis (spectrometric)',
        'Mechanical properties (tensile strength, yield strength, elongation, reduction of area)',
        'Heat treatment details and conditions',
        'Hardness test results (Rockwell / Brinell)',
      ]},
      { heading: 'Compliance Standard', text: 'All Material Test Certificates conform to EN 10204 Type 3.1 \u2014 inspection documents issued by the manufacturer with specific test results on the supplied material.' },
      { heading: 'Non-Destructive Testing', bullets: [
        'DPT (Dye Penetrant Testing) \u2014 surface crack and porosity detection',
        'UT (Ultrasonic Testing) \u2014 internal defect detection',
        'PMI (Positive Material Identification) \u2014 alloy grade verification',
      ]},
      { heading: 'Traceability', text: 'Every component is traceable from raw material heat number through to final dispatch. Heat numbers are stamped or engraved on the component and cross-referenced in the MTC.' },
      { heading: 'Contact', text: 'For questions about our documentation standards, email sales@pakoshaft.com.' },
    ],
  },
  {
    filename: 'tolerances.pdf',
    title: 'Standard Tolerances Guide',
    sections: [
      { text: 'General machining tolerances are controlled by customer drawing, approved QAP (Quality Assurance Plan), and applicable ISO / DIN / ASME standards.' },
      { heading: 'Typical Achievable Tolerances', table: [
        { label: 'Turned Diameters', value: 'Down to \u00b10.005 mm where geometry permits' },
        { label: 'Ground Bearing Fits', value: 'Ra 0.2 to 0.8 microns' },
        { label: 'Face Runout', value: '0.01 mm to 0.02 mm depending on diameter' },
        { label: 'Shaft Straightness', value: '0.05 mm per metre' },
        { label: 'Concentricity', value: 'Within 0.01 mm' },
        { label: 'Surface Finish', value: '10 to 50 microns' },
        { label: 'Keyways & Slots', value: 'Inspected by calibrated gauges or CMM' },
        { label: 'Bore Tolerance', value: 'H7 / h6 standard fits or custom' },
        { label: 'Thread Profiles', value: 'Verified with calibrated thread gauges' },
      ]},
      { heading: 'Inspection Equipment', bullets: [
        'Coordinate Measuring Machine (CMM)',
        'Calibrated micrometers and bore gauges',
        'Surface roughness tester',
        'Dial indicators and V-blocks',
        'Thread plug and ring gauges',
        'Digital height gauges',
      ]},
      { heading: 'Note', text: 'All dimensions remain subject to drawing review and manufacturability confirmation. Contact us with your specific drawing for a detailed tolerance assessment.' },
      { heading: 'Contact', text: 'Email sales@pakoshaft.com for drawing-based tolerance quotations.' },
    ],
  },
  {
    filename: 'sleeve-dimension-tolerance-chart.pdf',
    title: 'Sleeve Dimension & Tolerance Chart',
    sections: [
      { text: 'Precision shaft sleeves for pump applications \u2014 protecting shafts from wear, corrosion, and erosion at stuffing box and mechanical seal locations.' },
      { heading: 'Specifications', table: [
        { label: 'Diameter Range', value: '50 mm to 400 mm' },
        { label: 'Length Range', value: '100 mm to 1000 mm (0.1 \u2013 1 metre)' },
        { label: 'Wall Thickness', value: 'Minimum 5 mm (depending on OD)' },
        { label: 'Surface Finish', value: '10 to 50 microns' },
        { label: 'Hardness', value: 'Up to 60 HRC (depending on material & treatment)' },
        { label: 'Concentricity', value: 'Within 0.005 mm' },
      ]},
      { heading: 'Materials', bullets: [
        'SS410 / SS420 \u2014 Martensitic stainless for standard abrasive applications',
        'Duplex \u2014 High strength with superior pitting resistance',
        'Super Duplex \u2014 Exceptional corrosion resistance for marine environments',
        'Nitronic 50 \u2014 High-strength stainless for critical applications',
      ]},
      { heading: 'Manufacturing Process', bullets: [
        'OD and ID rough turning on CNC lathe',
        'Through hardening or case hardening',
        'Internal grinding for precision shaft fit',
        'External grinding on mandrel for OD concentricity',
      ]},
      { heading: 'RFQ Requirements', text: 'Recommended documents for quotation: engineering drawing, material grade, seal area finish requirement, hardness specification, and quantity.' },
      { heading: 'Contact', text: 'Email sales@pakoshaft.com with your drawing for competitive pricing.' },
    ],
  },
  {
    filename: 'impeller-balancing-standards.pdf',
    title: 'Impeller Balancing Standards',
    sections: [
      { text: 'Dynamic balancing for pump impellers \u2014 ensuring vibration-free operation and extended bearing and seal life.' },
      { heading: 'Balancing Standards', table: [
        { label: 'Standard Grade', value: 'ISO 1940 Grade G6.3' },
        { label: 'High-Speed Grade', value: 'ISO 1940 Grade G2.5 (critical applications)' },
        { label: 'Balancing Method', value: 'Static and dynamic balancing' },
        { label: 'Correction Method', value: 'Precision milling or grinding at calculated angles' },
      ]},
      { heading: 'Impeller Specifications', table: [
        { label: 'Impeller Types', value: 'Open, Semi-Open, Closed, Mixed Flow' },
        { label: 'Maximum Diameter', value: 'Up to 1500 mm' },
        { label: 'Bore Tolerance', value: 'H7/h6 fits (custom available)' },
        { label: 'Surface Finish', value: 'Ra 1.6 to 3.2 microns (machined areas)' },
        { label: 'Keyway', value: 'Standard or tapered (Wire-Cut EDM)' },
      ]},
      { heading: 'Quality Assurance', bullets: [
        '100% DPT on all machined surfaces \u2014 zero porosity guarantee',
        'Balancing report issued with every impeller (ISO 1940)',
        'Material test certificates from certified foundries',
        'PMI verification on all incoming castings',
      ]},
      { heading: 'Materials', bullets: [
        'Cast Iron / Ductile Iron \u2014 fresh water and general industrial',
        'Bronze / Gunmetal \u2014 marine and fire-fighting pumps',
        'SS316 / Duplex Steel Castings \u2014 chemical, desalination, oil & gas',
      ]},
      { heading: 'Contact', text: 'Email sales@pakoshaft.com for impeller machining and balancing quotations.' },
    ],
  },
  {
    filename: 'coupling-machining-tolerances.pdf',
    title: 'Coupling Machining Tolerances',
    sections: [
      { text: 'Precision muff couplings, rigid couplings, and drive coupling components \u2014 machined for absolute alignment in rotating assemblies.' },
      { heading: 'Specifications', table: [
        { label: 'Outside Diameter', value: '50 mm to 400 mm' },
        { label: 'Length', value: '100 mm to 1000 mm (0.1 \u2013 1 metre)' },
        { label: 'Surface Finish', value: '10 to 50 microns' },
        { label: 'Bore Tolerance', value: 'H7 / Custom Transition Fit' },
        { label: 'Keyway Tolerance', value: 'P9 / Js9' },
        { label: 'Perpendicularity (Faces)', value: 'Within 0.02 mm' },
        { label: 'Material Hardness', value: 'As specified (e.g. 250\u2013300 BHN)' },
      ]},
      { heading: 'Materials', bullets: [
        'Stainless Steel \u2014 food processing and corrosive environments',
        'Duplex \u2014 marine and pump coupling applications',
        'Super Duplex \u2014 critical chemical and offshore applications',
        'Nitronic 50 \u2014 high-load coupling applications',
      ]},
      { heading: 'Manufacturing Process', bullets: [
        'Forged steel block sourcing with UT inspection',
        'CNC turning of OD and face with perpendicularity check',
        'Precision boring to exact shaft fit tolerance',
        'Wire-Cut EDM for precise keyway geometry',
        'VMC drilling and tapping for coupling bolts/pins',
      ]},
      { heading: 'Key Feature', text: 'Face and bore are machined in the same clamping setup to guarantee perfect perpendicularity \u2014 preventing shaft bending and premature bearing failure.' },
      { heading: 'Contact', text: 'Email sales@pakoshaft.com with your coupling drawing for quotation.' },
    ],
  },
  {
    filename: 'contract-manufacturing-brochure.pdf',
    title: 'Contract Manufacturing Brochure',
    sections: [
      { text: 'Build-to-print machining for pump OEMs, rotating equipment manufacturers, and heavy engineering customers worldwide.' },
      { heading: 'Core Capability', table: [
        { label: 'Processes', value: 'CNC turning, VTL, milling, boring, drilling, threading, grinding, inspection' },
        { label: 'Component Diameter', value: 'Up to 1500 mm' },
        { label: 'Component Weight', value: 'Up to 5 Tonnes per piece' },
        { label: 'Length (Machining)', value: 'Up to 8000 mm' },
        { label: 'Length (Grinding)', value: 'Up to 6500 mm' },
        { label: 'Surface Finish', value: '10 to 50 microns' },
      ]},
      { heading: 'Materials Processed', bullets: [
        'Stainless steel (all grades including SS304, SS316, SS410, SS420)',
        'Duplex and Super Duplex steels',
        'EN-series alloy steels (EN8, EN19, EN24, EN353)',
        'Bronze, Gunmetal, and Cast Iron',
        'Nitronic 50 and other customer-specified grades',
      ]},
      { heading: 'Components We Manufacture', bullets: [
        'Precision pump shafts (standard and special)',
        'Shaft sleeves and bushes',
        'Impellers (machining and dynamic balancing)',
        'Couplings (muff, rigid, flexible hubs)',
        'Lock nuts, retainer rings, bearing assemblies',
        'Bearing housings, stuffing boxes, seal plates',
        'Wear rings, discharge manifolds, casing covers',
        'Custom gears (spur and helical)',
      ]},
      { heading: 'Documentation', bullets: [
        'Quality Assurance Plan (QAP)',
        'Material Test Certificate (EN 10204 3.1)',
        'Dimensional inspection report',
        'NDT report (DPT / UT / PMI)',
        'Dispatch packing record',
      ]},
      { heading: 'Production Modes', text: 'We support prototype, batch, and repeat OEM production. We export to 12+ countries including USA, Germany, Japan, UAE, Saudi Arabia, and South Korea.' },
      { heading: 'Certifications', text: 'ISO 9001:2015 certified. All operations under strict document control.' },
      { heading: 'Contact', text: 'Email sales@pakoshaft.com or call +91 97670 43447 for a manufacturing consultation.' },
    ],
  },
  {
    filename: 'thread-profile-tolerance-guide.pdf',
    title: 'Thread Profile & Tolerance Guide',
    sections: [
      { text: 'Precision threaded lock nuts \u2014 heavy-duty retention components for bearings, gears, and rotating assemblies on shafts.' },
      { heading: 'Specifications', table: [
        { label: 'Outside Diameter', value: '30 mm to 750 mm' },
        { label: 'Threading Pitch', value: '1 mm to 120 mm' },
        { label: 'Thread Types', value: 'Metric, Whitworth, Acme, Trapezoidal, Custom' },
        { label: 'Face Runout', value: 'Within 0.02 mm' },
        { label: 'Locking Mechanism', value: 'Spanner slots, grub screw tapped holes' },
      ]},
      { heading: 'Thread Cutting Process', bullets: [
        'CNC single-point threading for exact profiles',
        'Both right-hand and left-hand threads available',
        'Thread and locking face machined in same setup for perpendicularity',
        'All threads verified with calibrated plug gauges',
      ]},
      { heading: 'Materials', bullets: [
        'Stainless Steel (SS316) \u2014 standard pump lock nuts',
        'Super Duplex Steel \u2014 high-stress marine applications',
        'Carbon / Alloy Steel \u2014 heavy gearboxes and turbines',
      ]},
      { heading: 'Additional Options', bullets: [
        'Castle nut slots for cotter pins',
        'Radial holes for locking grub screws',
        'Zinc plating, blackening, or copper plating (anti-galling)',
        'Matched shaft-and-nut sets available',
      ]},
      { heading: 'Contact', text: 'Email sales@pakoshaft.com with your lock nut drawing for quotation.' },
    ],
  },
  {
    filename: 'elastomeric-bearing-machining-guidelines.pdf',
    title: 'Elastomeric Bearing Machining Guidelines',
    sections: [
      { text: 'Specialized machining guidelines for Thordon, Feroform, and composite water-lubricated bearings \u2014 critical components for vertical turbine pumps and marine tail-shafts.' },
      { heading: 'Specifications', table: [
        { label: 'Outside Diameter', value: '70 mm to 700 mm' },
        { label: 'Length', value: 'Up to 500 mm' },
        { label: 'Clearance Tolerance', value: 'Down to 10 microns' },
        { label: 'Surface Finish', value: 'Optimized for bearing longevity' },
      ]},
      { heading: 'Machining Considerations', bullets: [
        'Elastomeric materials flex and generate heat during machining',
        'Extremely sharp tooling with specific rake angles required',
        'Controlled coolant application to prevent material distortion',
        'Precise feed rates to maintain tight running clearances',
      ]},
      { heading: 'Water Lubrication Grooves', text: 'We mill or broach straight or spiral water lubrication grooves into the bearing ID, ensuring proper fluid distribution for water-lubricated applications.' },
      { heading: 'Assembly Service', bullets: [
        'Interference fit calculation for bearing-to-ring press fitting',
        'Hydraulic press assembly of bearing into retainer ring',
        'Final bore check post-press to verify running clearance',
      ]},
      { heading: 'Materials', bullets: [
        'Thordon \u2014 primary composite for water-lubricated pumps',
        'Feroform F363 \u2014 high-performance composite',
        'Gunmetal / Bronze \u2014 traditional bearing material for marine',
        'Super Duplex Steel \u2014 corrosion-resistant retainer rings',
      ]},
      { heading: 'Contact', text: 'Email sales@pakoshaft.com for bearing machining and assembly quotations.' },
    ],
  },
  {
    filename: 'gear-manufacturing-capabilities.pdf',
    title: 'Gear Manufacturing Capabilities',
    sections: [
      { text: 'Precision machined gears for rotating assemblies and gearboxes \u2014 spur and helical gear manufacturing with complete shaft assembly capability.' },
      { heading: 'Specifications', table: [
        { label: 'Gear Types', value: 'Spur Gears, Helical Gears' },
        { label: 'Outside Diameter', value: 'Custom (per drawing)' },
        { label: 'Module / Pitch', value: 'As specified' },
        { label: 'Quality Grade', value: 'DIN / AGMA standards' },
        { label: 'Profile Grinding', value: 'Available for high-precision requirements' },
      ]},
      { heading: 'Heat Treatment Options', bullets: [
        'Case carburizing \u2014 deep hardened case for high-wear teeth',
        'Nitriding \u2014 surface hardening without distortion',
        'Induction hardening \u2014 localized hardening of tooth surfaces',
      ]},
      { heading: 'Manufacturing Process', bullets: [
        'CNC blank turning \u2014 gear blank preparation',
        'Gear hobbing \u2014 cutting the gear teeth profile',
        'Heat treatment \u2014 case hardening for wear resistance',
        'Bore and face grinding \u2014 mounting surface precision',
        'Profile grinding \u2014 final tooth geometry finishing (DIN 6 or better)',
      ]},
      { heading: 'Materials', bullets: [
        'Alloy Steels (EN353, 8620) \u2014 case hardening steels for high wear',
        'Carbon Steel (EN8 / EN9) \u2014 medium-strength low-speed gears',
        'Bronze \u2014 worm gears with low friction requirements',
      ]},
      { heading: 'Value-Added Service', text: 'Gears can be assembled onto shafts in-house, providing a complete drop-in rotating assembly solution.' },
      { heading: 'Contact', text: 'Email sales@pakoshaft.com with your gear drawing for quotation.' },
    ],
  },
];

async function main() {
  console.log('');
  console.log('PAKO Engineers \u2014 PDF Document Generator');
  console.log('\u2550'.repeat(45));
  console.log('');

  for (const doc of documents) {
    await createPDF(doc.filename, doc.title, doc.sections);
  }

  console.log('');
  console.log('\u2713 All ' + documents.length + ' documents generated successfully!');
  console.log('  Output: ' + OUTPUT_DIR);
  console.log('');
}

main().catch(console.error);
