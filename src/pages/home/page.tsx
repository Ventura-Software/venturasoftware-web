import { useEffect, useState } from 'react';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import Services from './components/Services';
import WhyWorkWithUs from './components/WhyWorkWithUs';
import Process from './components/Process';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function HomePage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar scrolled={scrolled} />
      <Hero />
      <TrustedBy />
      <Services />
      <WhyWorkWithUs />
      <Process />
      <Contact />
      <Footer />
    </div>
  );
}
