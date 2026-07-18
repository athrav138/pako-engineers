"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";

const EXPORT_MARKETS = [
  { name: "Japan", x: "85%", y: "40%" },
  { name: "Germany", x: "50%", y: "30%" },
  { name: "USA", x: "20%", y: "40%" },
  { name: "UAE", x: "65%", y: "45%" },
  { name: "Saudi Arabia", x: "62%", y: "48%" },
  { name: "Canada", x: "25%", y: "30%" },
  { name: "India (HQ)", x: "70%", y: "50%", isHQ: true },
];

export function WorldMap() {
  return (
    <section className="bg-navy py-20 lg:py-32 overflow-hidden text-white relative">
      <Container className="relative z-10">
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <p className="mb-4 font-mono text-sm font-semibold uppercase tracking-wider text-oxide">Global Reach</p>
          <h2 className="mb-6 font-display text-3xl font-bold md:text-4xl">Exporting Precision Worldwide</h2>
          <p className="text-white/70">Trusted by OEMs and engineering companies across Asia, Europe, the Middle East, and North America.</p>
        </div>

        <div className="relative w-full aspect-[2/1] max-h-[600px] rounded-2xl bg-surface/5 border border-white/10 overflow-hidden flex items-center justify-center">
          {/* Conceptual World Map Background (Dots) */}
          <div 
            className="absolute inset-0 opacity-20"
            style={{ 
              backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', 
              backgroundSize: '20px 20px' 
            }}
          />
          
          {/* Animated Pings for Locations */}
          {EXPORT_MARKETS.map((market, i) => (
            <motion.div
              key={market.name}
              className="absolute group flex flex-col items-center cursor-pointer"
              style={{ left: market.x, top: market.y, transform: "translate(-50%, -50%)" }}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5, type: "spring" }}
            >
              <div className="relative">
                <MapPin size={market.isHQ ? 32 : 24} className={market.isHQ ? "text-oxide" : "text-sky-400"} fill={market.isHQ ? "#FF5722" : "currentColor"} />
                <motion.div
                  className={`absolute inset-0 rounded-full ${market.isHQ ? "bg-oxide" : "bg-sky-400"} -z-10`}
                  animate={{ scale: [1, 2.5], opacity: [0.6, 0] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeOut" }}
                />
              </div>
              
              <div className="absolute top-full mt-2 bg-white text-navy px-3 py-1 rounded shadow-lg text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity z-20 pointer-events-none">
                {market.name}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
