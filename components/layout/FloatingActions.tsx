"use client";

import { useEffect, useState } from "react";
import { ArrowUp, MessageCircle, FileText } from "lucide-react";
import { company } from "@/lib/content/company";
import { motion, useScroll, useSpring } from "framer-motion";
import Link from "next/link";

export function FloatingActions() {
  const [showTop, setShowTop] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-oxide origin-left z-[60]"
        style={{ scaleX }}
      />
      <div className="fixed bottom-4 right-4 z-40 flex flex-col gap-3">

        <a
          href={`https://wa.me/${company.contact.whatsapp?.replace("+", "")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-raised transition hover:scale-110"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle size={22} />
        </a>
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={`inline-flex h-12 w-12 items-center justify-center rounded-full border border-line bg-white text-navy shadow-raised transition-all hover:bg-surface ${showTop ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 pointer-events-none'}`}
          aria-label="Back to top"
        >
          <ArrowUp size={20} />
        </button>
      </div>
    </>
  );
}
