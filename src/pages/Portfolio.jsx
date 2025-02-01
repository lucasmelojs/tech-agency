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
    // Add more projects here
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Work</h1>
        <p className="text-xl text-gray-600">
          Discover how we've helped businesses transform their digital presence
        </p>
      </div>
      
      <ProjectGrid projects={projects} />
    </div>
  );
};

export default Portfolio;