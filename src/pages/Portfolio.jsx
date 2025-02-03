import React from 'react';
import ProjectGrid from '../components/portfolio/ProjectGrid';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'A modern e-commerce solution with advanced features',
      image: '/path-to-image.jpg',
      category: 'Web Development',
      technologies: ['React', 'Node.js', 'MongoDB'],
    },
    {
      id: 2,
      title: 'Mobile Banking App',
      description: 'Secure and user-friendly mobile banking solution',
      image: '/path-to-image.jpg',
      category: 'Mobile Development',
      technologies: ['React Native', 'Firebase', 'Redux'],
    },
    {
      id: 3,
      title: 'Healthcare Platform',
      description: 'Comprehensive healthcare management system',
      image: '/path-to-image.jpg',
      category: 'Web Development',
      technologies: ['Vue.js', 'Python', 'PostgreSQL'],
    },
    {
      id: 4,
      title: 'AI-Powered Analytics',
      description: 'Business intelligence and analytics platform',
      image: '/path-to-image.jpg',
      category: 'Data Science',
      technologies: ['Python', 'TensorFlow', 'AWS'],
    },
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-gray-900 to-gray-800 py-24">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-orange-600 mix-blend-multiply opacity-10"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Our Work</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover how we've helped businesses transform their digital presence
          </p>
        </div>
      </div>
      
      {/* Projects Grid Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['All', 'Web Development', 'Mobile Development', 'Data Science'].map((category) => (
            <button
              key={category}
              className="px-6 py-2 rounded-full bg-white text-gray-700 hover:bg-orange-600 hover:text-white transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              {category}
            </button>
          ))}
        </div>
        
        <ProjectGrid projects={projects} />
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-orange-600 to-orange-500 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Have a Project in Mind?</h2>
          <p className="text-xl text-orange-100 mb-8">
            Let's work together to bring your vision to life
          </p>
          <button className="bg-white text-orange-600 px-8 py-4 rounded-lg font-bold hover:bg-orange-50 transition-colors duration-300 shadow-lg hover:shadow-xl">
            Start a Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;