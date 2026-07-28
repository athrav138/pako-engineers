"use client";
import { Images } from "@/lib/images";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Settings2, ArrowRight } from "lucide-react";

const MACHINES = [
  {
    name: "Heavy-Duty CNC Lathe",
    manufacturer: "Doosan Puma Series",
    maxDiameter: "1500 mm",
    maxLength: "14000 mm",
    tolerance: "5 Microns",
    applications: "Pump Shafts, Marine Propellers, Heavy Rotors",
    image: Images.assets.heavyDutyEngineLathe.src,
  },
  {
    name: "Vertical Machining Center (VMC)",
    manufacturer: "Haas VF Series",
    maxDiameter: "X: 1016, Y: 508, Z: 635 mm",
    maxLength: "N/A",
    tolerance: "2 Microns",
    applications: "Complex Housings, Impellers, Keyways",
    image: Images.assets.machineOperatorLatheThumb.src,
  },
  {
    name: "Cylindrical Grinding Machine",
    manufacturer: "Studer CNC Grinder",
    maxDiameter: "400 mm",
    maxLength: "2000 mm",
    tolerance: "1 Micron",
    applications: "Bearing Areas, Seal Fits, Precision Sleeves",
    image: Images.assets.surfaceGrindingMachine.src,
  },
  {
    name: "Wire Cut EDM",
    manufacturer: "Sodick AG Series",
    maxDiameter: "N/A",
    maxLength: "N/A",
    tolerance: "1 Micron",
    applications: "Splines, Special Keyways, Exotic Alloy Profiles",
    image: Images.assets.longShaftMachiningLathe.src,
  }
];

export function MachineryGallery() {
  return (
    <section className="bg-white py-20 lg:py-32">
      <Container>
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-bold tracking-tight text-navy md:text-4xl">
              Advanced Machinery Fleet
            </h2>
            <p className="mt-4 text-ink-muted">
              We continually invest in world-class CNC turning and milling centers to ensure high-capacity output without compromising precision.
            </p>
          </div>
          <button className="flex items-center gap-2 text-sm font-semibold text-oxide hover:underline">
            View Complete Equipment List
            <ArrowRight size={16} />
          </button>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {MACHINES.map((machine, i) => (
            <motion.div
              key={machine.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-sm transition-shadow hover:shadow-raised lg:flex-row"
            >
              <div className="relative aspect-video w-full bg-surface lg:w-2/5">
                <Image
                  src={machine.image}
                  alt={`${machine.name} at Pako Engineers`}
                  fill
                  sizes="(min-width: 1024px) 20vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="flex flex-1 flex-col justify-center p-6 lg:p-8">
                <span className="mb-2 text-xs font-semibold uppercase tracking-wider text-oxide">{machine.manufacturer}</span>
                <h3 className="mb-6 font-display text-xl font-bold text-navy">{machine.name}</h3>
                
                <ul className="mb-6 space-y-3 text-sm text-ink-muted">
                  <li className="flex justify-between border-b border-line pb-2">
                    <span>Max Diameter:</span>
                    <span className="font-medium text-navy">{machine.maxDiameter}</span>
                  </li>
                  <li className="flex justify-between border-b border-line pb-2">
                    <span>Max Length:</span>
                    <span className="font-medium text-navy">{machine.maxLength}</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Tolerance:</span>
                    <span className="font-medium text-navy">{machine.tolerance}</span>
                  </li>
                </ul>

                <p className="text-xs text-ink-muted">
                  <span className="font-semibold text-navy">Applications:</span> {machine.applications}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
