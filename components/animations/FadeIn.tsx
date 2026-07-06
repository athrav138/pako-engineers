"use client";

import { motion } from "framer-motion";
import { variants } from "@/lib/design-system/motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
  triggerOnce?: boolean;
  threshold?: number;
}

export function FadeIn({ 
  children, 
  delay = 0, 
  direction = "up", 
  className,
  triggerOnce = true,
  threshold = 0.2
}: FadeInProps) {
  
  const getVariants = () => {
    const baseDuration = 0.8;
    const baseEase = [0.16, 1, 0.3, 1];

    switch (direction) {
      case "up":
        return {
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0, transition: { duration: baseDuration, ease: baseEase, delay } }
        };
      case "down":
        return {
          hidden: { opacity: 0, y: -30 },
          visible: { opacity: 1, y: 0, transition: { duration: baseDuration, ease: baseEase, delay } }
        };
      case "left":
        return {
          hidden: { opacity: 0, x: 30 },
          visible: { opacity: 1, x: 0, transition: { duration: baseDuration, ease: baseEase, delay } }
        };
      case "right":
        return {
          hidden: { opacity: 0, x: -30 },
          visible: { opacity: 1, x: 0, transition: { duration: baseDuration, ease: baseEase, delay } }
        };
      default:
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration: baseDuration, ease: baseEase, delay } }
        };
    }
  };

  return (
    <motion.div
      variants={getVariants()}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: triggerOnce, amount: threshold }}
      className={cn("", className)}
    >
      {children}
    </motion.div>
  );
}
