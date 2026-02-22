import { useState } from "react";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";
import { BACKGROUND_IMAGES } from "./components/HeroAnimation";

export default function App() {
  const [bgIndex, setBgIndex] = useState(0);

  return (
    <div className="text-white min-h-screen relative">
      {/* Fixed ambient blurred background — persists across all sections */}
      <div className="fixed inset-0 z-0">
        {BACKGROUND_IMAGES.map((src, i) => (
          <div
            key={src}
            className="absolute inset-0 transition-opacity duration-[2000ms] ease-in-out scale-110"
            style={{
              backgroundImage: `url(${src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "blur(60px) saturate(1.3)",
              opacity: i === bgIndex ? 1 : 0,
            }}
          />
        ))}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Page content */}
      <div className="relative z-10">
        <Hero bgIndex={bgIndex} onBgChange={setBgIndex} />
        <Features />
        <FinalCTA />
        <Footer />
      </div>
    </div>
  );
}