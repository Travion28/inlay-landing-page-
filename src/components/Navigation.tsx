import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'features', 'how-it-works', 'download'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#0a0e1a]/80 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="font-['Space_Grotesk'] text-xl font-semibold tracking-tight">
            Inlay
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('features')}
              className={`text-sm transition-colors duration-200 ${
                activeSection === 'features'
                  ? 'text-white'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className={`text-sm transition-colors duration-200 ${
                activeSection === 'how-it-works'
                  ? 'text-white'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              How it works
            </button>
            <button
              onClick={() => scrollToSection('download')}
              className="px-5 py-2 bg-white/10 hover:bg-white/15 border border-white/20 rounded-full text-sm text-white transition-all duration-200"
            >
              Download
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-white/80 hover:text-white transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-3 border-t border-white/5">
            <button
              onClick={() => scrollToSection('features')}
              className="block w-full text-left px-4 py-2 text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-all"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="block w-full text-left px-4 py-2 text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-all"
            >
              How it works
            </button>
            <button
              onClick={() => scrollToSection('download')}
              className="block w-full text-left px-4 py-2 text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-all"
            >
              Download
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}