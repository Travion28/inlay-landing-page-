import { motion } from "framer-motion";

export function PhoneDemo() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-gradient-radial from-blue-500/10 via-purple-500/5 to-transparent blur-[100px]" />

      <div className="relative max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="relative w-[280px] sm:w-[320px] aspect-[9/19] rounded-[40px] bg-[#111827] border border-white/10 shadow-2xl overflow-hidden">
            <div className="absolute inset-0 p-6 flex flex-col gap-4 bg-gradient-to-b from-white/5 to-white/[0.02]">
              <div className="h-6 w-28 bg-white/10 rounded-md" />
              <div className="h-4 w-44 bg-white/10 rounded-md" />
              <div className="h-32 bg-white/5 rounded-xl" />
              <div className="h-20 bg-white/5 rounded-xl" />
              <div className="mt-auto h-4 w-32 bg-white/10 rounded-md" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}