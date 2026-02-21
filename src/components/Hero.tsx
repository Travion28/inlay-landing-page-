import { PhoneDemo } from './PhoneDemo';
import { Button } from './Button';
import { Download, Play } from 'lucide-react';

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background gradient glow */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column - Content */}
          <div className="space-y-8">
            {/* Pill label */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
              <span className="text-sm text-white/80">Notes that understand context</span>
            </div>

            {/* Main headline */}
            <div className="space-y-4">
              <h1 className="font-['Space_Grotesk'] text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight">
                Write in flow.
              </h1>
              
              {/* Subheadline */}
              <p className="text-lg sm:text-xl text-white/60 leading-relaxed max-w-xl font-['Inter']">
                Type naturally. Mark blanks with /. Complete instantly with //.<br />
                All your thoughts, zero friction.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" size="lg" onClick={() => scrollToSection('download')} className="w-full sm:w-auto">
                <Download className="w-5 h-5" />
                Download Beta
              </Button>
              
              <Button variant="secondary" size="lg" onClick={() => scrollToSection('how-it-works')} className="w-full sm:w-auto">
                <Play className="w-5 h-5" />
                See it work
              </Button>
            </div>
          </div>

          {/* Right column - Phone Demo */}
          <div className="flex justify-center lg:justify-end">
            <PhoneDemo />
          </div>
        </div>
      </div>
    </section>
  );
}