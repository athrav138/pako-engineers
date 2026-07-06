"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { company, equipment, machiningCapacity } from "@/lib/content/company";

const INFRA_IMAGES = [
  { id: 1, src: "/images/infra/cnc-shop.jpg", label: "CNC Machine Shop" },
  { id: 2, src: "/images/infra/inspection.jpg", label: "Quality Inspection Lab" },
  { id: 3, src: "/images/infra/assembly.jpg", label: "Clean Assembly Area" },
  { id: 4, src: "/images/infra/warehouse.jpg", label: "Export Packaging & Warehouse" },
];

export function InfrastructureSection() {
  return (
    <section className="bg-white py-20 lg:py-32">
      <Container>
        <div className="mb-16 md:w-2/3 lg:w-1/2">
          <p className="mb-4 font-mono text-sm font-semibold uppercase tracking-wider text-oxide">
            World-Class Facilities
          </p>
          <h2 className="mb-6 font-display text-3xl font-bold tracking-tight text-navy md:text-4xl">
            Robust Infrastructure for Scalable Production
          </h2>
          <p className="text-lg leading-relaxed text-ink-muted">
            {company.profile.facility} The production department is supported
            by calipers, micrometers, gauges and the required measuring
            instruments for routine dimensional control.
          </p>
        </div>

        {/* Carousel / Large Image Gallery Layout */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:grid-rows-2 h-auto md:h-[600px]">
          {/* Main Large Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative overflow-hidden rounded-2xl md:col-span-8 md:row-span-2 min-h-[300px] bg-surface"
          >
            <div className="absolute inset-0 bg-navy/10" style={{ backgroundImage: 'radial-gradient(#111827 1px, transparent 1px)', backgroundSize: '32px 32px', opacity: 0.05 }} />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-6 left-6 z-10">
              <p className="font-display text-xl font-bold text-white">Factory Floor Overview</p>
              <p className="text-sm text-white/80">{company.address.full}</p>
            </div>
          </motion.div>

          {/* Smaller Images */}
          {INFRA_IMAGES.slice(1, 3).map((img, i) => (
            <motion.div 
              key={img.id}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 + (i * 0.1) }}
              className="group relative overflow-hidden rounded-2xl md:col-span-4 md:row-span-1 min-h-[200px] bg-surface"
            >
               <div className="absolute inset-0 bg-navy/10" style={{ backgroundImage: 'radial-gradient(#111827 1px, transparent 1px)', backgroundSize: '32px 32px', opacity: 0.05 }} />
               <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent opacity-60 transition-opacity group-hover:opacity-80" />
              <div className="absolute bottom-4 left-4 z-10">
                <p className="font-display font-bold text-white">
                  {i === 0 ? equipment[0] : machiningCapacity[0].process}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
