import { motion } from "framer-motion";

const features = [
  {
    title: "Works with anything",
    description:
      "Meeting notes, lecture summaries, research, journaling — if you can write it, inlay can complete it.",
  },
  {
    title: "Context-aware",
    description:
      "Inlay reads the context around each blank and fills it with the right name, date, number, or phrase.",
  },
  {
    title: "Nothing to learn",
    description:
      "No setup, no commands, no AI chat windows. Just two keystrokes you already know — / and //.",
  },
];

export function Features() {
  return (
    <section className="relative py-28 sm:py-36 px-6 sm:px-10 bg-neutral-950">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white/90 mb-4">
            A note app that gets out of your way
          </h2>
          <p className="text-white/30 text-base sm:text-lg max-w-lg mx-auto">
            No learning curve. No gimmicks. Just faster notes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-7"
            >
              <h3 className="text-[17px] font-semibold text-white/80 mb-2.5">
                {feature.title}
              </h3>
              <p className="text-white/30 text-[14.5px] leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
