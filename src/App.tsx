import { useState } from "react";
import { motion } from "framer-motion";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";
import { BACKGROUND_IMAGES } from "./components/HeroAnimation";

export default function App() {
  const [bgIndex, setBgIndex] = useState(0);

  return (
    <div className="text-white min-h-screen relative">
      {/* Fixed ambient blurred background — persists across all sections */}
      <div className="fixed inset-0 z-0">
        {BACKGROUND_IMAGES.map((src, i) => (
          <div
            key={src}
            className="absolute inset-0 transition-opacity duration-[2000ms] ease-in-out scale-110"
            style={{
              backgroundImage: `url(${src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "blur(60px) saturate(1.3)",
              opacity: i === bgIndex ? 1 : 0,
            }}
          />
        ))}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Page content */}
      <div className="relative z-10">
        <Hero bgIndex={bgIndex} onBgChange={setBgIndex} />
        <Features />
        <FinalCTA />
        <Footer />
      </div>

      {/* Sticky floating CTA — always visible at bottom */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
      >
        <a
          href="#testflight"
          className="group flex items-center gap-2.5 px-5 py-2 rounded-full bg-white/[0.08] backdrop-blur-2xl border border-white/[0.1] shadow-[0_6px_30px_rgba(0,0,0,0.3)] hover:bg-white/[0.14] transition-all duration-300"
        >
          <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="opacity-40"
          >
            <path d="M12 19V5M5 12l7-7 7 7" />
          </svg>
          <span className="text-[13px] font-medium text-white/60 group-hover:text-white/80 transition-colors">
            Join the iOS Beta
          </span>
        </a>
      </motion.div>
    </div>
  );
}