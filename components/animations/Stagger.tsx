"use client";

import { motion } from "framer-motion";
import { variants } from "@/lib/design-system/motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface StaggerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  triggerOnce?: boolean;
  threshold?: number;
}

export function StaggerContainer({
  children,
  className,
  staggerDelay = 0.1,
  triggerOnce = true,
  threshold = 0.1
}: StaggerProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: 0.1,
          }
        }
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: triggerOnce, amount: threshold }}
      className={cn("", className)}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }: { children: ReactNode, className?: string }) {
  return (
    <motion.div
      variants={variants.fadeUp}
      className={cn("", className)}
    >
      {children}
    </motion.div>
  );
}
