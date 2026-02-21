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
            className="group flex items-center gap-3.5 px-6 py-3 rounded-full bg-white/40 backdrop-blur-2xl shadow-[0_6px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_10px_40px_rgba(0,0,0,0.18)] hover:bg-white/55 transition-all duration-300"
          >
            {/* TestFlight icon placeholder */}
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center flex-shrink-0">
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 19V5M5 12l7-7 7 7" />
              </svg>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-[16px] font-semibold text-black/75 group-hover:text-black/90 transition-colors">
                Join the iOS Beta
              </span>
              <span className="text-[12px] text-black/35 font-medium">
                Download with Apple TestFlight
              </span>
            </div>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
