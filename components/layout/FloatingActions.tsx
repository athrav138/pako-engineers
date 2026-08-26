"use client";

import { useEffect, useState } from "react";
import { ArrowUp, MessageCircle } from "lucide-react";
import { company } from "@/lib/content/company";
import { createWhatsAppUrl } from "@/lib/utils";

export function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    let frame = 0;
    let last = window.scrollY > 300;
    setShowTop(last);

    const handleScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const next = window.scrollY > 300;
        if (next !== last) {
          last = next;
          setShowTop(next);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="fixed bottom-4 right-4 z-40 flex flex-col gap-3">

        <a
          href={createWhatsAppUrl(
            company.contact.whatsapp,
            "Hello Pako Engineers, I would like to discuss a requirement."
          )}
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
