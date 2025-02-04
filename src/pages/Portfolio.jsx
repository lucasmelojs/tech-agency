import React from 'react';
import ProjectGrid from '../components/portfolio/ProjectGrid';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'AI Customer Service Bot',
      description: 'WhatsApp AI agent handling customer inquiries 24/7 for a major retail chain',
      image: '/path-to-image.jpg',
      category: 'AI Agents',
      technologies: ['OpenAI', 'Node.js', 'WhatsApp API'],
      results: '85% reduction in response time'
    },
    {
      id: 2,
      title: 'E-commerce Website',
      description: 'Modern e-commerce platform with AI-powered product recommendations',
      image: '/path-to-image.jpg',
      category: 'Web Development',
      technologies: ['React', 'Node.js', 'MongoDB'],
      results: '200% increase in sales'
    },
    {
      id: 3,
      title: 'Real Estate Chat Assistant',
      description: 'Website AI agent helping visitors find their perfect property',
      image: '/path-to-image.jpg',
      category: 'AI Agents',
      technologies: ['React', 'Python', 'Natural Language Processing'],
      results: '45% higher lead conversion'
    },
    {
      id: 4,
      title: 'Restaurant Booking System',
      description: 'Automated WhatsApp booking system with AI-powered reservations',
      image: '/path-to-image.jpg',
      category: 'AI Agents',
      technologies: ['WhatsApp API', 'Node.js', 'PostgreSQL'],
      results: '60% reduction in booking time'
    },
    {
      id: 5,
      title: 'Digital Marketing Platform',
      description: 'Comprehensive marketing automation and analytics platform',
      image: '/path-to-image.jpg',
      category: 'Digital Marketing',
      technologies: ['React', 'Python', 'Data Analytics'],
      results: '150% ROI improvement'
    },
    {
      id: 6,
      title: 'Brand Identity System',
      description: 'Complete brand redesign and digital identity system',
      image: '/path-to-image.jpg',
      category: 'Branding',
      technologies: ['Design Systems', 'Brand Strategy', 'Visual Identity'],
      results: '40% brand recognition increase'
    }
  ];

  const categories = [
    'All',
    'Web Development',
    'AI Agents',
    'Digital Marketing',
    'Branding'
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-gray-900 to-gray-800 py-24">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-orange-600 mix-blend-multiply opacity-10"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Success Stories</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover how we've helped businesses transform their operations with AI-powered solutions and digital innovation
          </p>
        </div>
      </div>

      {/* Projects Grid Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className="px-6 py-2 rounded-full bg-white text-gray-700 hover:bg-orange-600 hover:text-white transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">50+</div>
            <div className="text-gray-600">Projects Completed</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">98%</div>
            <div className="text-gray-600">Client Satisfaction</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">85%</div>
            <div className="text-gray-600">Automation Achieved</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
            <div className="text-gray-600">AI Support</div>
          </div>
        </div>

        {/* Projects Grid */}
        <ProjectGrid projects={projects} />

        {/* Testimonials Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">What Our Clients Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-orange-600 mb-4">★★★★★</div>
              <p className="text-gray-600 mb-4">
                "The AI agent they developed for our WhatsApp customer service has completely transformed how we handle customer inquiries. Response times are down by 85% and customer satisfaction is at an all-time high."
              </p>
              <div className="font-bold text-gray-900">John Smith</div>
              <div className="text-gray-600">CEO, Retail Chain</div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-orange-600 mb-4">★★★★★</div>
              <p className="text-gray-600 mb-4">
                "Their web development team created an exceptional e-commerce platform for us. The AI-powered recommendations have significantly increased our sales and customer engagement."
              </p>
              <div className="font-bold text-gray-900">Sarah Johnson</div>
              <div className="text-gray-600">Marketing Director, E-commerce</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-orange-600 to-orange-500 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl text-orange-100 mb-8">
            Let's discuss how our AI solutions and digital expertise can help you achieve your goals
          </p>
          <button className="bg-white text-orange-600 px-8 py-4 rounded-lg font-bold hover:bg-orange-50 transition-colors duration-300 shadow-lg hover:shadow-xl">
            Start Your Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;