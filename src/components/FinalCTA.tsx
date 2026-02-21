import { motion } from "framer-motion";

export function FinalCTA() {
  return (
    <section className="relative py-24 sm:py-32 px-6">
      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-radial from-blue-50/60 to-transparent blur-3xl pointer-events-none" />

      <div className="relative max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-black/90 leading-tight">
            Write without friction.
          </h2>
          <p className="text-black/40 text-base sm:text-lg max-w-md mx-auto leading-relaxed">
            Join the beta and start completing your thoughts instantly.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
