import { useEffect, useState } from 'react';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import Services from './components/Services';
import WhyWorkWithUs from './components/WhyWorkWithUs';
import FeaturedWork from './components/FeaturedWork';
import HowWeWork from './components/HowWeWork';
import Process from './components/Process';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { ScrollProgress } from '@/components/fx/Interactive';

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
      <ScrollProgress />
      <Navbar scrolled={scrolled} />
      <Hero />
      <TrustedBy />
      <Services />
      <FeaturedWork />
      <WhyWorkWithUs />
      <HowWeWork />
      <Process />
      <Contact />
      <Footer />
    </div>
  );
}
