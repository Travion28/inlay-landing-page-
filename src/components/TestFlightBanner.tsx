import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export function TestFlightBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show after a small delay for a polished entrance
    const timer = setTimeout(() => setIsVisible(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
        >
          <a
            href="#testflight"
            className="group flex items-center gap-3.5 px-6 py-3 rounded-full bg-white/[0.1] backdrop-blur-2xl border border-white/[0.15] shadow-[0_8px_40px_rgba(0,0,0,0.3)] hover:shadow-[0_12px_50px_rgba(0,0,0,0.4)] hover:bg-white/[0.15] transition-all duration-300"
          >
            {/* TestFlight icon */}
            <div className="w-8 h-8 rounded-lg bg-white/[0.12] border border-white/[0.1] flex items-center justify-center flex-shrink-0">
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="opacity-60"
              >
                <path d="M12 19V5M5 12l7-7 7 7" />
              </svg>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-[16px] font-semibold text-white/80 group-hover:text-white/95 transition-colors">
                Join the iOS Beta
              </span>
              <span className="text-[12px] text-white/30 font-medium">
                Download with Apple TestFlight
              </span>
            </div>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
