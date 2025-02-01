import React from 'react';
import ServiceCard from '../components/services/ServiceCard';
import TechnologyStack from '../components/services/TechnologyStack';

const Services = () => {
  const services = [
    {
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies',
      icon: '🌐',
      features: [
        'Custom Web Applications',
        'E-commerce Solutions',
        'Progressive Web Apps',
        'API Development',
      ],
    },
    {
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications',
      icon: '📱',
      features: [
        'iOS Development',
        'Android Development',
        'Cross-platform Solutions',
        'Mobile App Design',
      ],
    },
    {
      title: 'UI/UX Design',
      description: 'User-centered design solutions',
      icon: '🎨',
      features: [
        'User Interface Design',
        'User Experience Design',
        'Prototyping',
        'Design Systems',
      ],
    },
    // Add more services here
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-xl text-gray-600">
            Comprehensive digital solutions for your business
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        {/* Technology Stack */}
        <TechnologyStack />
      </div>
    </div>
  );
};

export default Services;