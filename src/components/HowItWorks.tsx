import { motion } from "framer-motion";

interface StepProps {
  number: string;
  title: string;
  description: string;
  index: number;
}

function Step({ number, title, description, index }: StepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
      viewport={{ once: true }}
      className="relative space-y-3"
    >
      <span className="text-6xl font-['Space_Grotesk'] font-bold text-white/[0.06] select-none leading-none">
        {number}
      </span>
      <h3 className="font-['Space_Grotesk'] text-xl font-semibold text-white">
        {title}
      </h3>
      <p className="text-white/60 leading-relaxed font-['Inter']">
        {description}
      </p>
    </motion.div>
  );
}

export function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Type naturally",
      description: "Write your thoughts freely. Use / to mark any blank you want filled in later.",
    },
    {
      number: "02",
      title: "Mark your blanks",
      description: "Place a / wherever you need a word or phrase. Inlay tracks the context around it.",
    },
    {
      number: "03",
      title: "Complete instantly",
      description: "Type // and Inlay fills in the blank using the surrounding sentence for context.",
    },
  ];

  return (
    <section id="how-it-works" className="relative py-24 sm:py-32">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-purple-500/5 rounded-full blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-['Space_Grotesk'] text-4xl sm:text-5xl font-bold text-white tracking-tight">
            How It Works
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-10 sm:gap-8 lg:gap-16">
          {steps.map((step, index) => (
            <Step
              key={step.number}
              number={step.number}
              title={step.title}
              description={step.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}