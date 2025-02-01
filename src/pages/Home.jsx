import React from 'react';
import HeroSection from '../components/home/HeroSection';
import FeaturedWork from '../components/home/FeaturedWork';
import ServicesOverview from '../components/home/ServicesOverview';
import TestimonialsSection from '../components/home/TestimonialsSection';

const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesOverview />
      <FeaturedWork />
      <TestimonialsSection />
    </div>
  );
};

export default Home;