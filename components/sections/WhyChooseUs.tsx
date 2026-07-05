"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Shield, Cog, Truck, Globe2, Award, Users } from "lucide-react";

const REASONS = [
  {
    icon: Cog,
    title: "Precision Engineering",
    description: "Tolerances up to 5 microns using advanced CNC turning and VMC machining centers.",
  },
  {
    icon: Award,
    title: "ISO 9001:2015 Certified",
    description: "Strict quality management systems ensuring consistent zero-defect production.",
  },
  {
    icon: Globe2,
    title: "Global Exports",
    description: "Trusted by OEMs across Japan, Germany, USA, and the Middle East.",
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "In-house DPT, UT, hardness testing, and metallurgical material analysis.",
  },
  {
    icon: Truck,
    title: "On-Time Delivery",
    description: "Streamlined supply chain and production planning for strict adherence to deadlines.",
  },
  {
    icon: Users,
    title: "Experienced Team",
    description: "Led by industry veterans with over 30 years of manufacturing expertise.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export function WhyChooseUs() {
  return (
    <section className="bg-background-light py-20 lg:py-32">
      <Container>
        <div className="mb-16 max-w-2xl">
          <p className="mb-4 font-mono text-sm font-semibold uppercase tracking-wider text-oxide">
            Why Choose Us
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-navy md:text-4xl">
            The Pako Advantage
          </h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {REASONS.map((reason, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-xl border border-line bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-raised"
            >
              <div className="mb-6 inline-flex rounded-lg bg-navy/5 p-4 text-navy transition-colors group-hover:bg-navy group-hover:text-white">
                <reason.icon size={32} strokeWidth={1.5} />
              </div>
              <h3 className="mb-3 font-display text-xl font-bold text-navy">
                {reason.title}
              </h3>
              <p className="text-ink-muted leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
