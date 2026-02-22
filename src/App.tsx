import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="bg-neutral-950 text-white min-h-screen relative">
      <Hero />
      <Features />
      <FinalCTA />
      <Footer />
    </div>
  );
}