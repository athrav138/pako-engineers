"use client";
import { Images } from "@/lib/images";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Maximize2 } from "lucide-react";

// Real factory photographs from public/images
const GALLERY_ITEMS = [
  { id: 1, span: "col-span-1 row-span-1", category: "Assembly", src: Images.assets.largePumpRotorAssemblyThumb.src },
  { id: 2, span: "col-span-1 row-span-2 md:col-span-2", category: "Machinery", src: Images.assets.shaftMachiningLathe.src },
  { id: 3, span: "col-span-1 row-span-1", category: "Factory", src: Images.assets.factoryEntranceSignageThumb.src },
  { id: 4, span: "col-span-1 row-span-2 md:col-span-2", category: "Machinery", src: Images.assets.longBedTurningLatheThumb.src },
  { id: 5, span: "col-span-1 row-span-1", category: "Assembly", src: Images.assets.verticalPumpAssemblyThumb.src },
  { id: 6, span: "col-span-1 row-span-1 md:col-span-2", category: "Machinery", src: Images.assets.machineOperatorLatheThumb.src },
];

export function GalleryMasonry() {
  return (
    <section className="bg-background-light py-20 lg:py-32">
      <Container>
        <div className="mb-12 text-center">
          <p className="mb-4 font-mono text-sm font-semibold uppercase tracking-wider text-oxide">
            Inside Pako
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-navy md:text-4xl">
            Our Manufacturing Facility
          </h2>
        </div>

        <div className="grid auto-rows-[240px] grid-cols-2 gap-4 md:grid-cols-4 lg:gap-6">
          {GALLERY_ITEMS.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group relative overflow-hidden rounded-xl bg-navy ${item.span}`}
            >
              <Image
                src={item.src}
                alt={`Pako Engineers ${item.category} - Manufacturing facility`}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent" />
              
              <div className="absolute bottom-4 left-4 z-10">
                <span className="font-display text-sm font-bold tracking-widest text-white/90 uppercase">{item.category}</span>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-navy/60 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                <button className="flex h-12 w-12 items-center justify-center rounded-full bg-oxide text-white shadow-raised transition-transform hover:scale-110">
                  <Maximize2 size={20} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
