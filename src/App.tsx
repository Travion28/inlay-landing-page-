import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";

const heroVideos = [
  "https://pub-09107e9f2c9e4fd78b4078187114ce9f.r2.dev/hero-video.mp4",
  "https://pub-09107e9f2c9e4fd78b4078187114ce9f.r2.dev/replace-video-2.mp4",
];

export default function App() {
  const ctaRef = useRef<HTMLDivElement>(null);
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    if (!ctaRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => setShowBanner(!entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(ctaRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="text-white min-h-screen relative">
      {/* Sticky banner — appears when inline CTA scrolls out */}
      <AnimatePresence>
        {showBanner && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed top-0 inset-x-0 z-50 backdrop-blur-2xl bg-black/30"
          >
            <a
              href="#testflight"
              className="flex items-center justify-center gap-2.5 w-full px-4 py-3"
            >
              <div className="w-6 h-6 rounded-md bg-white/[0.1] flex items-center justify-center flex-shrink-0">
                <svg
                  width="11"
                  height="11"
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
              <span className="text-[13px] font-medium text-white/70">
                Join the iOS Beta
              </span>
              <span className="text-[11px] text-white/30 font-medium">
                — Download with Apple TestFlight
              </span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Page content */}
      <div className="relative z-10">
        <Hero heroVideos={heroVideos} ctaRef={ctaRef} />

        {/* Below hero — dark grey surface beneath the hero */}
        <div className="relative bg-[#111111]">
          <div className="relative z-10">
            <Features />
            <FinalCTA />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}