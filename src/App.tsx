import { useState, useEffect } from 'react';
import Navbar from './sections/Navbar';
import HeroSection from './sections/HeroSection';
import StatisticsSection from './sections/StatisticsSection';
import ValueProposition from './sections/ValueProposition';
import FeaturesGrid from './sections/FeaturesGrid';
import Differentiators from './sections/Differentiators';
import Benefits from './sections/Benefits';
import Testimonials from './sections/Testimonials';
import FAQ from './sections/FAQ';
import FooterCTA from './sections/FooterCTA';
import Footer from './sections/Footer';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar scrolled={scrolled} />

      <main>
        <HeroSection />
        <StatisticsSection />
        <ValueProposition />
        <FeaturesGrid />
        <Differentiators />
        <Benefits />
        <Testimonials />
        <FAQ />
        <FooterCTA />
        <Footer />
      </main>
    </div>
  );
}

export default App;
