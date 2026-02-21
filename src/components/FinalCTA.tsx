import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { Button } from "./Button";

export function FinalCTA() {
  return (
    <section id="download" className="relative py-24 sm:py-32">
      {/* Large radial glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-gradient-radial from-blue-500/10 via-purple-500/5 to-transparent blur-[100px]" />

      <div className="relative max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Headline */}
          <h2 className="font-['Space_Grotesk'] text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1]">
            Start writing without friction.
          </h2>

          {/* Supporting text */}
          <p className="text-xl text-white/60 max-w-2xl mx-auto font-['Inter']">
            Download the beta and write faster instantly.
          </p>

          {/* CTA Button */}
          <div className="flex flex-col items-center gap-4 pt-4">
            <Button variant="primary" size="lg">
              <Download className="w-5 h-5" />
              Download Beta
            </Button>

            {/* Small disclaimer */}
            <p className="text-sm text-white/40 font-['Inter']">
              iOS beta — limited spots
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}