import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { HowItWorks } from "./components/HowItWorks";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";
import { BackToTop } from "./components/BackToTop";

export default function App() {
  return (
    <div className="bg-[#0a0e1a] text-white min-h-screen">
      <Navigation />
      <Hero />
      <Features />
      <HowItWorks />
      <FinalCTA />
      <Footer />
      <BackToTop />
    </div>
  );
}