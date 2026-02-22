import { motion } from "framer-motion";

const steps = [
  {
    step: "01",
    title: "Write naturally",
    description:
      "Start typing your notes. When you hit something you don't know yet — a name, a date, a number — just type / to leave a blank.",
  },
  {
    step: "02",
    title: "Fill it all in",
    description:
      "Type // and inlay instantly completes every blank with the right details. Names, dates, stats — all context-aware.",
  },
  {
    step: "03",
    title: "Stay in flow",
    description:
      "No popups, no menus, no switching apps. Everything happens inline so you never lose your train of thought.",
  },
];

const qualities = [
  {
    title: "Works with anything",
    description:
      "Meeting notes, lecture summaries, research, journaling — if you can write it, inlay can complete it.",
  },
  {
    title: "Context-aware",
    description:
      "Reads what's around each blank and fills it with the right word, number, or phrase.",
  },
  {
    title: "Nothing to learn",
    description:
      "No setup, no commands, no AI chat windows. Just / and //.",
  },
];

export function Features() {
  return (
    <>
      {/* How it works */}
      <section className="relative py-24 sm:py-32 px-6 sm:px-10">
        <div className="max-w-2xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-[13px] tracking-[0.3em] uppercase text-white/20 font-medium text-center mb-14"
          >
            How it works
          </motion.p>

          <div className="space-y-12">
            {steps.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="flex gap-5"
              >
                <span className="text-[13px] font-semibold text-white/15 pt-0.5 flex-shrink-0">
                  {item.step}
                </span>
                <div>
                  <h3 className="text-[17px] font-semibold text-white/80 mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-[14.5px] text-white/30 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="flex justify-center">
        <div className="w-10 h-[1px] bg-white/[0.08]" />
      </div>

      {/* Qualities */}
      <section className="relative py-24 sm:py-32 px-6 sm:px-10">
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-8">
            {qualities.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                <h3 className="text-[16px] font-semibold text-white/75 mb-2">
                  {item.title}
                </h3>
                <p className="text-[14px] text-white/25 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
