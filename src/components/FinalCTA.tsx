import { motion } from "framer-motion";

export function FinalCTA() {
  return (
    <section className="relative py-28 sm:py-36 px-6 bg-neutral-950">
      <div className="relative max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="space-y-5"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white/90 leading-tight">
            Write without friction.
          </h2>
          <p className="text-white/35 text-base sm:text-lg max-w-md mx-auto leading-relaxed">
            Join the beta and start completing your thoughts instantly.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
