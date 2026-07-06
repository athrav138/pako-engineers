"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { company } from "@/lib/content/company";

export function LeadershipSection() {
  return (
    <section className="bg-white py-20 lg:py-32">
      <Container>
        <div className="mb-16 text-center">
          <p className="mb-4 font-mono text-sm font-semibold uppercase tracking-wider text-oxide">
            Executive Leadership
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-navy md:text-4xl">
            Driving Engineering Excellence
          </h2>
        </div>

        <div className="grid gap-12 md:grid-cols-2 lg:gap-20">
          {company.leadership.map((leader, i) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="group"
            >
              <div className="relative mb-8 aspect-square overflow-hidden rounded-2xl bg-surface">
                {/* Fallback pattern */}
                <div className="absolute inset-0 bg-navy/10" style={{ backgroundImage: 'radial-gradient(#111827 1px, transparent 1px)', backgroundSize: '32px 32px', opacity: 0.1 }} />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-60" />
              </div>
              <div className="text-center md:text-left">
                <h3 className="mb-1 font-display text-2xl font-bold text-navy">{leader.name}</h3>
                <p className="mb-6 font-mono text-sm font-semibold uppercase tracking-wider text-oxide">{leader.role}</p>
                <p className="text-lg italic leading-relaxed text-ink-muted">
                  {leader.phone}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
