import { useEffect } from "react";
import { motion } from "framer-motion";
import { HeroAnimation, BACKGROUND_IMAGES } from "./HeroAnimation";

export function Hero({
  bgIndex,
  onBgChange,
}: {
  bgIndex: number;
  onBgChange: (index: number) => void;
}) {
  // Preload all background images
  useEffect(() => {
    BACKGROUND_IMAGES.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <section className="relative min-h-[100svh] flex flex-col items-center px-6 sm:px-10 overflow-hidden">

      {/* Top — wordmark + headline */}
      <div className="relative z-10 pt-16 sm:pt-20 pb-8 sm:pb-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-[13px] tracking-[0.35em] uppercase text-white/25 font-medium mb-5"
        >
          inlay
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-white/85 leading-[1.2] mb-2.5"
        >
          Write anything. Complete instantly.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="text-sm sm:text-base text-white/30 max-w-sm mx-auto mb-6"
        >
          A note app that fills in the blanks for you.
        </motion.p>

        <motion.a
          href="#testflight"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="group inline-flex items-center gap-3.5 px-6 py-3 rounded-full bg-white/[0.1] backdrop-blur-xl border border-white/[0.12] hover:bg-white/[0.16] transition-all duration-300"
        >
          <div className="w-9 h-9 rounded-xl bg-white/[0.1] border border-white/[0.08] flex items-center justify-center flex-shrink-0">
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="opacity-50"
            >
              <path d="M12 19V5M5 12l7-7 7 7" />
            </svg>
          </div>
          <div className="flex flex-col leading-tight text-left">
            <span className="text-[15px] font-semibold text-white/75 group-hover:text-white/90 transition-colors">
              Join the iOS Beta
            </span>
            <span className="text-[12px] text-white/30 font-medium">
              Download with Apple TestFlight
            </span>
          </div>
        </motion.a>
      </div>

      {/* Tall image card — contained, centered, the focal point */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="relative z-10 flex-1 flex items-start justify-center w-full pb-10 sm:pb-14"
      >
        <div
          className="relative w-full max-w-[400px] sm:max-w-[440px] md:max-w-[480px] lg:max-w-[520px] rounded-[24px] overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.45),0_0_0_1px_rgba(255,255,255,0.05)]"
          style={{ aspectRatio: "var(--card-ratio)" }}
        >
          {/* Background images — crossfade */}
          {BACKGROUND_IMAGES.map((src, i) => (
            <div
              key={src}
              className="absolute inset-0 transition-opacity duration-[2000ms] ease-in-out"
              style={{
                backgroundImage: `url(${src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                opacity: i === bgIndex ? 1 : 0,
              }}
            />
          ))}

          {/* Note — full width at bottom */}
          <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 lg:p-6">
            <div className="w-full">
              <HeroAnimation onExampleChange={onBgChange} />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Bottom — how it works */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="relative z-10 pb-8 sm:pb-12"
      >
        <div className="flex items-center justify-center gap-8 sm:gap-10">
          {[
            { key: "/", label: "Leave a blank" },
            { key: "//", label: "Fill it in" },
            { key: "→", label: "Keep going" },
          ].map((step) => (
            <div key={step.key} className="flex items-center gap-2.5">
              <span className="text-[12px] font-semibold text-white/25">
                {step.key}
              </span>
              <span className="text-[13px] text-white/20">{step.label}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
