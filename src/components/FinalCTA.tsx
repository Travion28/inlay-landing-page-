import { motion } from "framer-motion";

export function FinalCTA() {
  return (
    <section className="relative py-24 sm:py-32 px-6">
      {/* Divider */}
      <div className="flex justify-center mb-24 sm:mb-32">
        <div className="w-10 h-[1px] bg-white/[0.08]" />
      </div>

      <div className="relative max-w-lg mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white/85 leading-tight">
            Write without friction.
          </h2>
          <p className="text-white/30 text-[15px] sm:text-base max-w-sm mx-auto leading-relaxed">
            Join the beta and start completing your thoughts instantly.
          </p>
          <motion.a
            href="#testflight"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            viewport={{ once: true }}
            className="group inline-flex items-center gap-3.5 px-6 py-3 mt-4 rounded-full bg-white/[0.1] backdrop-blur-xl border border-white/[0.12] hover:bg-white/[0.16] transition-all duration-300"
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
        </motion.div>
      </div>
    </section>
  );
}
