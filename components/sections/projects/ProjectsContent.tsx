"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, ArrowRight, Globe, Factory, Wrench, Settings, Cog } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

const projects = [
  {
    id: "pump-assembly",
    href: "/projects/pump-assembly-projects",
    title: "Pump Assembly Programs",
    category: "Pump Assembly",
    client: "Flowserve, EBARA, DMW Corporation",
    description: "Complete pump shaft and assembly manufacturing programs for global pump OEMs, including precision shafts up to 1500mm diameter with tight tolerances and full material traceability.",
    tags: ["Pump Shafts", "Sleeves", "Couplings", "Assembly"],
    icon: Settings,
  },
  {
    id: "oem",
    href: "/projects/oem-manufacturing",
    title: "OEM Manufacturing Partnerships",
    category: "OEM Manufacturing",
    client: "TMEIC, Valmet, Nash",
    description: "Long-term OEM supply agreements for precision machined components including shafts, retainer rings, lock nuts, and bearings for rotating equipment manufacturers.",
    tags: ["CNC Machining", "Grinding", "Quality Assurance"],
    icon: Factory,
  },
  {
    id: "custom",
    href: "/projects/custom-engineering",
    title: "Custom Engineering Solutions",
    category: "Custom Engineering",
    client: "Various industrial clients",
    description: "Bespoke precision components engineered to customer drawings and specifications — reverse engineering, prototype development, and small-batch production runs.",
    tags: ["Reverse Engineering", "Prototyping", "Custom Components"],
    icon: Wrench,
  },
  {
    id: "export",
    href: "/projects/export-projects",
    title: "Export Manufacturing Projects",
    category: "Export Projects",
    client: "Clients in Japan, Germany, USA, UAE, South Korea",
    description: "Export-grade precision components meeting international standards, complete with material test certificates, dimensional reports, and export-ready packaging.",
    tags: ["Export Packaging", "Material Traceability", "International Standards"],
    icon: Globe,
  },
  {
    id: "industrial",
    href: "/projects/industrial-solutions",
    title: "Industrial Rotating Equipment",
    category: "Industrial Solutions",
    client: "Power, Marine, Oil & Gas sectors",
    description: "Heavy-duty shafts, gears, and components for industrial rotating equipment used in power generation, marine propulsion, and oil & gas processing facilities.",
    tags: ["Heavy Engineering", "Marine", "Power Generation"],
    icon: Cog,
  },
];

export function ProjectsContent() {
  const [searchTerm, setSearchTerm] = useState("");

  const filtered = projects.filter((p) => {
    const q = searchTerm.trim().toLowerCase();
    if (!q) return true;
    return [p.title, p.category, p.client, p.description, ...p.tags]
      .join(" ")
      .toLowerCase()
      .includes(q);
  });

  return (
    <section className="bg-white py-20 lg:py-28">
      <Container>
        {/* Search Bar */}
        <div className="mb-12 max-w-xl">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input
              type="text"
              placeholder="Search projects by name, client, or industry..."
              className="h-12 w-full rounded-lg border border-slate-200 bg-slate-50 pl-12 pr-4 text-sm text-slate-800 placeholder:text-slate-400 focus:border-[#0A1B2E] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#0A1B2E] transition-colors"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, i) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group flex flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg hover:border-slate-300"
              >
                {/* Icon + Category */}
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#0A1B2E]/5 text-[#0A1B2E] group-hover:bg-[#0A1B2E] group-hover:text-white transition-colors">
                    <Icon size={18} />
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400">
                    {project.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="mb-2 text-lg font-bold text-[#0A1B2E]">
                  {project.title}
                </h3>

                {/* Client */}
                <p className="mb-3 text-xs font-medium text-slate-500">
                  Clients: <span className="text-slate-700">{project.client}</span>
                </p>

                {/* Description */}
                <p className="mb-5 flex-1 text-sm leading-relaxed text-slate-600">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="mb-5 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-medium text-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <Button
                  href={project.href}
                  variant="outline"
                  size="sm"
                  className="mt-auto w-full justify-center"
                >
                  View Project Details <ArrowRight size={14} className="ml-1" />
                </Button>
              </motion.div>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <p className="mt-10 rounded-lg border border-slate-200 bg-slate-50 p-6 text-center text-sm text-slate-500">
            No projects matched your search. Try searching for pump, OEM, export, or marine.
          </p>
        )}
      </Container>
    </section>
  );
}
