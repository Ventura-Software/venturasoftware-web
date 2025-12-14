import { useState } from 'react';

interface NavbarProps {
  scrolled: boolean;
}

export default function Navbar({ scrolled }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-xl shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src="https://public.readdy.ai/ai/img_res/25fc608c-f5da-4b1f-8985-bc4561935a7d.png" 
                alt="Ventura Software" 
                className="h-10 w-auto"
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('services')}
                className={`text-sm font-medium transition-colors cursor-pointer whitespace-nowrap ${
                  scrolled
                    ? 'text-slate-600 hover:text-slate-900'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('process')}
                className={`text-sm font-medium transition-colors cursor-pointer whitespace-nowrap ${
                  scrolled
                    ? 'text-slate-600 hover:text-slate-900'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                Process
              </button>
              <button
                onClick={() => scrollToSection('why-us')}
                className={`text-sm font-medium transition-colors cursor-pointer whitespace-nowrap ${
                  scrolled
                    ? 'text-slate-600 hover:text-slate-900'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                Why Us
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className={`text-sm font-medium transition-colors cursor-pointer whitespace-nowrap ${
                  scrolled
                    ? 'text-slate-600 hover:text-slate-900'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                About
              </button>
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <button
                onClick={() => scrollToSection('contact')}
                className="px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-semibold rounded-full hover:scale-105 transition-transform duration-200 shadow-lg cursor-pointer whitespace-nowrap"
              >
                Get in Touch
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 cursor-pointer"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span
                  className={`block h-0.5 w-full transition-all duration-300 ${
                    scrolled ? 'bg-slate-900' : 'bg-white'
                  } ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}
                ></span>
                <span
                  className={`block h-0.5 w-full transition-all duration-300 ${
                    scrolled ? 'bg-slate-900' : 'bg-white'
                  } ${mobileMenuOpen ? 'opacity-0' : ''}`}
                ></span>
                <span
                  className={`block h-0.5 w-full transition-all duration-300 ${
                    scrolled ? 'bg-slate-900' : 'bg-white'
                  } ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-slate-900/95 backdrop-blur-lg transition-opacity duration-300 md:hidden ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <button
            onClick={() => scrollToSection('services')}
            className="text-2xl font-semibold text-white hover:text-cyan-400 transition-colors cursor-pointer"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection('process')}
            className="text-2xl font-semibold text-white hover:text-cyan-400 transition-colors cursor-pointer"
          >
            Process
          </button>
          <button
            onClick={() => scrollToSection('why-us')}
            className="text-2xl font-semibold text-white hover:text-cyan-400 transition-colors cursor-pointer"
          >
            Why Us
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-2xl font-semibold text-white hover:text-cyan-400 transition-colors cursor-pointer"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-lg font-semibold rounded-full hover:scale-105 transition-transform duration-200 shadow-lg cursor-pointer whitespace-nowrap"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </>
  );
}
