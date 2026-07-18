"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
  backgroundImage?: string;
};

/** Standard interior-page hero: dark navy band, used on every page except Home. */
export function PageHero({ eyebrow, title, description, children, backgroundImage }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-navy py-20 md:py-28">
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <Image
            src={backgroundImage}
            alt=""
            fill
            sizes="100vw"
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-navy/80" />
        </div>
      )}
      <Container className="relative z-10">
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
