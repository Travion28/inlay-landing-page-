import { motion } from "framer-motion";

export function PhoneDemo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="flex justify-center"
    >
      <div className="relative w-[260px] sm:w-[300px] lg:w-[320px] aspect-[9/19] rounded-[40px] bg-[#111827] border border-white/10 shadow-2xl overflow-hidden">
        <div className="absolute inset-0 p-6 flex flex-col gap-4 bg-gradient-to-b from-white/5 to-white/[0.02]">
          <div className="h-6 w-28 bg-white/10 rounded-md" />
          <div className="h-4 w-44 bg-white/10 rounded-md" />
          <div className="h-32 bg-white/5 rounded-xl" />
          <div className="h-20 bg-white/5 rounded-xl" />
          <div className="mt-auto h-4 w-32 bg-white/10 rounded-md" />
        </div>
      </div>
    </motion.div>
  );
}