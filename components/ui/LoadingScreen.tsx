"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    // Only show loading screen on initial load of the home page
    if (pathname === "/") {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1500); // 1.5 seconds as requested
      return () => clearTimeout(timer);
    } else {
      setIsLoading(false);
    }
  }, [pathname]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-navy text-white"
        >
          <div className="flex flex-col items-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-8 flex flex-col items-center text-center"
            >
              <h1 className="font-display text-4xl font-bold tracking-widest text-white md:text-5xl">
                PAKO
              </h1>
              <span className="mt-2 text-xs uppercase tracking-[0.3em] text-oxide">
                Engineers
              </span>
            </motion.div>

            {/* Progress Line */}
            <div className="h-[2px] w-48 overflow-hidden rounded-full bg-white/10 md:w-64">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
                className="h-full w-1/2 bg-oxide"
              />
            </div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-6 font-mono text-xs uppercase tracking-widest text-white/50"
            >
              Loading Manufacturing Excellence...
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
