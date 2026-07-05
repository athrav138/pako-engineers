"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
};

/** Standard interior-page hero: dark navy band, used on every page except Home. */
export function PageHero({ eyebrow, title, description, children }: PageHeroProps) {
  return (
    <section className="bg-navy py-20 md:py-28">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-2xl"
        >
          {eyebrow && (
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-oxide">
              {eyebrow}
            </p>
          )}
          <h1 className="font-display text-4xl font-bold tracking-tight text-white md:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mt-5 text-lg leading-relaxed text-white/75">{description}</p>
          )}
          {children}
        </motion.div>
      </Container>
    </section>
  );
}
