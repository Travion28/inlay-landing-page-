import { useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { HeroAnimation } from "./HeroAnimation";

export function Hero({ heroVideos, ctaRef }: { heroVideos: string[]; ctaRef: React.RefObject<HTMLDivElement | null> }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const videoRefs = [useRef<HTMLVideoElement>(null), useRef<HTMLVideoElement>(null)];

  const handleEnded = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % heroVideos.length);
  }, [heroVideos.length]);

  return (
    <section className="hero-section relative flex flex-col overflow-hidden z-10" style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.7), 0 8px 20px rgba(0,0,0,0.5)' }}>

      {/* Cycling background videos */}
      {heroVideos.map((src, i) => (
        <video
          key={src}
          ref={videoRefs[i]}
          src={src}
          crossOrigin="anonymous"
          autoPlay={i === 0}
          muted
          playsInline
          onEnded={handleEnded}
          onCanPlay={() => { if (i === activeIndex) videoRefs[i].current?.play(); }}
          className={`absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-1000 ${
            i === activeIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Dark gradient overlay for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/15 to-black/40 z-[1]" />

      {/* Top — wordmark + headline */}
      <div className="relative z-10 shrink-0 pt-10 sm:pt-16 text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-[11px] tracking-[0.4em] uppercase text-white/50 font-medium mb-3"
        >
          inlay
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-white leading-[1.15] mb-2"
        >
          Your thoughts, completed.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="text-[13px] sm:text-sm text-white/50 max-w-xs mx-auto"
        >
          A note app that fills in the blanks for you.
        </motion.p>

        {/* CTA */}
        <motion.div
          ref={ctaRef}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-5"
        >
          <a
            href="#testflight"
            className="group inline-flex items-center gap-3 sm:gap-3.5 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-black/20 backdrop-blur-[40px] hover:bg-black/30 transition-all duration-300"
          >
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white/[0.1] flex items-center justify-center flex-shrink-0">
              <svg
                width="13"
                height="13"
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
            <div className="flex flex-col leading-tight text-left">
              <span className="text-[14px] sm:text-[15px] font-medium text-white/70 group-hover:text-white/90 transition-colors">
                Join the iOS Beta
              </span>
              <span className="hidden sm:block text-[11px] text-white/30 font-medium">
                Download with Apple TestFlight
              </span>
            </div>
          </a>
        </motion.div>
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Gradient blur layer — clear to blurred at bottom */}
      <div
        className="absolute inset-x-0 bottom-0 h-[55%] sm:h-[45%] z-[2] pointer-events-none"
        style={{
          backdropFilter: "blur(40px)",
          WebkitBackdropFilter: "blur(40px)",
          maskImage: "linear-gradient(to bottom, transparent, black 70%)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent, black 70%)",
        }}
      />

      {/* Bottom content — note animation + CTA, above the blur */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="relative z-10 shrink-0 px-5 sm:px-8 pb-32 sm:pb-20"
      >
        <div className="max-w-lg mx-auto">
          <HeroAnimation />
        </div>
      </motion.div>
    </section>
  );
}
