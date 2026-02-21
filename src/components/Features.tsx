import { motion } from "framer-motion";

const features = [
  {
    title: "Mark a blank",
    description: "Type / anywhere in your note to mark something you want completed.",
    symbol: "/",
  },
  {
    title: "Trigger completion",
    description: "Hit // to instantly fill the blank with context-aware text.",
    symbol: "//",
  },
  {
    title: "Keep writing",
    description: "No popups, no menus. Completions appear inline. Stay in flow.",
    symbol: "→",
  },
];

export function Features() {
  return (
    <section className="relative py-24 sm:py-32 px-6">
      {/* Subtle divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-[1px] bg-black/10" />

      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl font-semibold tracking-tight text-black/90 mb-4">
            How it works
          </h2>
          <p className="text-black/40 text-base sm:text-lg max-w-md mx-auto">
            Three keystrokes. That's it.
          </p>
        </motion.div>

        <div className="space-y-16 sm:space-y-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start gap-6 sm:gap-8"
            >
              {/* Symbol */}
              <div className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-black/[0.03] border border-black/[0.06] flex items-center justify-center">
                <span className="font-mono text-lg sm:text-xl font-medium text-black/50">
                  {feature.symbol}
                </span>
              </div>

              {/* Text */}
              <div>
                <h3 className="font-['Space_Grotesk'] text-lg sm:text-xl font-semibold text-black/85 mb-1.5">
                  {feature.title}
                </h3>
                <p className="text-black/40 text-sm sm:text-base leading-relaxed max-w-sm">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
