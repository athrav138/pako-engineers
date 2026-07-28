"use client";
import { Images } from "@/lib/images";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { X, ZoomIn, Share2 } from "lucide-react";

const CATEGORIES = ["All", "Factory", "Machines", "Products", "Assembly", "Inspection"];

const IMAGES = [
  { id: 1, category: "Factory", src: Images.assets.factoryBuildingExterior.src, title: "Main Plant Exterior" },
  { id: 2, category: "Machines", src: Images.assets.shaftMachiningLathe.src, title: "Heavy Duty CNC Lathe" },
  { id: 3, category: "Products", src: Images.assets.pumpShaftsAndSleeves.src, title: "Super Duplex Pump Shaft" },
  { id: 4, category: "Assembly", src: Images.assets.largePumpRotorAssembly.src, title: "Rotor Assembly Line" },
  { id: 5, category: "Inspection", src: Images.assets.precisionQualityInspection.src, title: "Precision Quality Inspection" },
  { id: 6, category: "Machines", src: Images.assets.cylindricalGrindingMachine.src, title: "Cylindrical Grinding Machine" },
  { id: 7, category: "Products", src: Images.assets.machinedSleeveComponents.src, title: "Precision Sleeves" },
  { id: 8, category: "Inspection", src: Images.assets.legacyLatheInspection.src, title: "Lathe Setup Inspection" },
];

export function MasonryGallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<any>(null);

  const filteredImages = activeCategory === "All" 
    ? IMAGES 
    : IMAGES.filter(img => img.category === activeCategory);

  return (
    <section className="bg-white py-20 lg:py-32">
      <Container>
        {/* Filters */}
        <div className="mb-12 flex flex-wrap items-center justify-center gap-4">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full border px-6 py-2 text-sm font-medium transition-colors ${
                activeCategory === cat 
                  ? "border-navy bg-navy text-white" 
                  : "border-line bg-white text-ink-muted hover:border-oxide hover:text-oxide"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Grid Simulation (Using standard CSS Grid for reliability in React without heavy libs) */}
        <motion.div 
          layout
          className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 auto-rows-[250px]"
        >
          <AnimatePresence>
            {filteredImages.map((img, i) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={img.id}
                className={`group relative cursor-pointer overflow-hidden rounded-xl bg-surface ${i === 0 || i === 3 ? "md:col-span-2 lg:col-span-2" : ""} ${i === 2 ? "row-span-2" : ""}`}
                onClick={() => setSelectedImage(img)}
              >
                {/* Fallback pattern */}
                <div className="absolute inset-0 bg-navy/5" style={{ backgroundImage: 'radial-gradient(#111827 1px, transparent 1px)', backgroundSize: '16px 16px', opacity: 0.1 }} />
                <Image
                  src={img.src}
                  alt={`${img.title} at Pako Engineers`}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-navy/60 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
                  <div className="flex gap-4 transform translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-navy hover:bg-oxide hover:text-white transition-colors">
                      <ZoomIn size={20} />
                    </div>
                  </div>
                </div>
                
                {/* Image Label */}
                <div className="absolute bottom-4 left-4 right-4 translate-y-full opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-sm font-semibold text-white drop-shadow-md">{img.title}</p>
                  <p className="text-xs font-medium text-oxide uppercase tracking-wider">{img.category}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-navy/95 backdrop-blur-md p-4">
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute top-6 right-6 text-white hover:text-oxide transition-colors"
              >
                <X size={32} />
              </button>
              
              <div className="absolute top-6 left-6 flex gap-4">
                <button className="text-white hover:text-oxide transition-colors"><Share2 size={24} /></button>
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="relative max-w-5xl w-full h-[70vh] bg-surface rounded-lg overflow-hidden border border-white/10 flex items-center justify-center"
              >
                 <Image
                   src={selectedImage.src}
                   alt={`${selectedImage.title} at Pako Engineers`}
                   fill
                   sizes="90vw"
                   className="object-contain"
                 />
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </Container>
    </section>
  );
}
