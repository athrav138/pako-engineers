"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";

const TIMELINE = [
  { year: "1994", title: "Company Founded", desc: "Pako Engineers was established with a vision to deliver precision machining services." },
  { year: "2002", title: "First Export Customer", desc: "Started exporting precision shafts to global pump OEMs." },
  { year: "2010", title: "ISO Certification", desc: "Achieved ISO 9001 certification, standardizing our QA processes." },
  { year: "2018", title: "Infrastructure Expansion", desc: "Expanded to a 40,000 sq.ft facility with advanced climate-controlled labs." },
  { year: "2024", title: "Advanced CNC Era", desc: "Integrated multi-axis VMCs and 14m long heavy-duty CNC turning machines." }
];

export function TimelineSection() {
  return (
    <section className="bg-background-light py-20 lg:py-32 overflow-hidden">
      <Container>
        <div className="mb-16 text-center">
          <p className="mb-4 font-mono text-sm font-semibold uppercase tracking-wider text-oxide">
            Our Story
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-navy md:text-4xl">
            A Legacy of Engineering
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 bg-line hidden md:block" />
          
          <div className="space-y-12 md:space-y-24">
            {TIMELINE.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col md:flex-row items-center justify-between w-full ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                <div className="md:w-[45%] mb-8 md:mb-0" />
                
                <div className="absolute left-1/2 -translate-x-1/2 flex h-12 w-12 items-center justify-center rounded-full border-4 border-background-light bg-navy text-sm font-bold text-white shadow-sm z-10 hidden md:flex">
                  <div className="h-3 w-3 rounded-full bg-oxide" />
                </div>
                
                <div className="md:w-[45%] bg-white p-8 rounded-xl border border-line shadow-sm hover:shadow-raised transition-shadow relative">
                  <span className="absolute -top-5 bg-oxide text-white font-mono text-sm font-bold py-1 px-4 rounded-full shadow-sm">
                    {item.year}
                  </span>
                  <h3 className="text-xl font-bold text-navy mt-2 mb-3">{item.title}</h3>
                  <p className="text-ink-muted leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
