"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

type Stat = {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
};

type StatsSectionProps = {
  stats: Stat[];
  variant?: "navy" | "light";
};

export function StatsSection({ stats, variant = "navy" }: StatsSectionProps) {
  const isNavy = variant === "navy";

  return (
    <section
      className={`py-16 lg:py-20 ${
        isNavy ? "bg-navy text-white border-y border-white/10" : "bg-surface border-y border-line"
      }`}
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className={`grid gap-8 text-center ${
            stats.length <= 4 ? "grid-cols-2 md:grid-cols-4" : "grid-cols-2 md:grid-cols-3 lg:grid-cols-6"
          }`}
        >
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className={`font-display text-4xl font-bold mb-2 ${isNavy ? "text-oxide" : "text-navy"}`}>
                <AnimatedCounter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              </div>
              <p
                className={`text-xs font-semibold uppercase tracking-wider ${
                  isNavy ? "text-white/60" : "text-ink-muted"
                }`}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
