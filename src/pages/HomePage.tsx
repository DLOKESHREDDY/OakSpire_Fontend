import React, { useEffect } from 'react';
import HeroSection from '../components/home/HeroSection';
import AboutSection from '../components/home/AboutSection';
import ServicesSection from '../components/home/ServicesSection';
import CareersSection from '../components/home/CareersSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import ContactCta from '../components/home/ContactCta';

const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = 'Oakspire Tek - Staffing & Recruiting Solutions';
  }, []);

  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <CareersSection />
      <TestimonialsSection />
      <ContactCta />
    </>
  );
};

export default HomePage;