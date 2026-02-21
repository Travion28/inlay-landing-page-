import { motion } from "framer-motion";
import { HeroAnimation } from "./HeroAnimation";
import { IPhoneMockup } from "./IPhoneMockup";

export function Hero() {
  return (
    <>
      {/* First slide — full viewport, centered */}
      <section className="relative h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
        {/* Ambient background blurs */}
        <div className="absolute top-[-200px] left-[-100px] w-[500px] h-[500px] bg-gradient-radial from-blue-100/40 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-gradient-radial from-purple-100/30 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 w-full max-w-5xl mx-auto text-center">
          {/* Logo / wordmark */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6"
          >
            <h2 className="text-sm tracking-[0.3em] uppercase text-black/30 font-medium">
              inlay
            </h2>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-['Space_Grotesk'] text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-black/50 leading-[1.15] mb-10"
          >
            Write anything.
            <br />
            <span className="text-black/30">Complete instantly.</span>
          </motion.h1>

          {/* Animated demo — the hero */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
          >
            <HeroAnimation />
          </motion.div>
        </div>
      </section>

      {/* iPhone mockup — below the fold */}
      <section className="relative flex items-center justify-center px-6 py-24 sm:py-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <IPhoneMockup />
        </motion.div>
      </section>
    </>
  );
}
