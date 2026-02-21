import { Zap, Brain, Save, Focus } from "lucide-react";
import { motion } from "framer-motion";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  featured?: boolean;
  index: number;
}

function FeatureCard({
  icon,
  title,
  description,
  featured,
  index,
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      className={`group relative p-8 rounded-2xl backdrop-blur-sm transition-all duration-300 cursor-pointer ${
        featured
          ? "bg-white/[0.07] border-2 border-white/20 hover:border-white/30 hover:shadow-[0_0_40px_rgba(255,255,255,0.15)]"
          : "bg-white/[0.03] border border-white/10 hover:border-white/20 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]"
      }`}
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-300" />

      <div className="relative space-y-4">
        {/* Icon */}
        <motion.div
          whileHover={{ rotate: 5, scale: 1.1 }}
          transition={{ duration: 0.2 }}
          className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white/80 group-hover:text-white transition-colors"
        >
          {icon}
        </motion.div>

        {/* Title */}
        <h3 className="font-['Space_Grotesk'] text-xl font-semibold text-white">
          {title}
        </h3>

        {/* Description */}
        <p className="text-white/60 leading-relaxed font-['Inter']">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

export function Features() {
  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Inline Completion",
      description: "Smart suggestions appear right where you type.",
      featured: false,
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Context-Aware",
      description: "Completions follow the sentence around the blank.",
      featured: true,
    },
    {
      icon: <Save className="w-6 h-6" />,
      title: "Auto-Save",
      description: "Never lose a thought again.",
      featured: false,
    },
    {
      icon: <Focus className="w-6 h-6" />,
      title: "Focus Mode",
      description: "Minimal distractions while you write.",
      featured: false,
    },
  ];

  return (
    <section id="features" className="relative py-24 sm:py-32">
      {/* Subtle background glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-500/5 rounded-full blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-['Space_Grotesk'] text-4xl sm:text-5xl font-bold text-white tracking-tight">
            What You Get
          </h2>
        </motion.div>

        {/* Feature cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              featured={feature.featured}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}