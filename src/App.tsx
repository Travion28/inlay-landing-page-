import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { FinalCTA } from "./components/FinalCTA";
import { BackToTop } from "./components/BackToTop";

export default function App() {
  return (
    <div className="bg-[#0a0e1a] text-white min-h-screen">
      <Hero />
      <Features />
      <FinalCTA />
      <BackToTop />
    </div>
  );
}