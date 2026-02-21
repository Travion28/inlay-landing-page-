import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";
import { TestFlightBanner } from "./components/TestFlightBanner";

export default function App() {
  return (
    <div className="bg-white text-black min-h-screen relative">
      <Hero />
      <Features />
      <FinalCTA />
      <Footer />
      <TestFlightBanner />
    </div>
  );
}