import React from 'react';
import HeroSection from '../components/home/HeroSection';
import ServicesOverview from '../components/home/ServicesOverview';
import ContactSection from '../components/home/ContactSection';
import FeaturedWork from '../components/home/FeaturedWork';

const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesOverview />
      <FeaturedWork />
      <ContactSection />
    </div>
  );
};

export default Home;