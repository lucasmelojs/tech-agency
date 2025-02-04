import React from 'react';
import { Link } from 'react-router-dom';

const FeaturedWork = () => {
  const projects = [
    {
      id: 1,
      title: 'AI Customer Service Agent',
      description: 'WhatsApp AI agent handling 1000+ customer inquiries daily with 85% resolution rate',
      image: '/path-to-image.jpg',
      category: 'AI Agents',
      metrics: '85% faster response time',
    },
    {
      id: 2,
      title: 'E-commerce Platform',
      description: 'Modern e-commerce solution with AI-powered product recommendations and chatbot support',
      image: '/path-to-image.jpg',
      category: 'Web Development',
      metrics: '200% increase in sales',
    },
    {
      id: 3,
      title: 'Real Estate Assistant',
      description: 'Intelligent website chat agent helping visitors find their perfect property match',
      image: '/path-to-image.jpg',
      category: 'AI Agents',
      metrics: '45% higher conversion rate',
    }
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Featured Projects
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Discover how we're transforming businesses with AI and digital solutions
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Link
              key={project.id}
              to={`/portfolio/${project.id}`}
              className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-64"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-orange-100 text-orange-600">
                    {project.category}
                  </span>
                  <span className="text-sm font-medium text-white">
                    {project.metrics}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-orange-200 transition-colors">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-gray-200">
                  {project.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Statistics Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="bg-orange-50 p-6 rounded-xl text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">50+</div>
            <div className="text-gray-600">Projects Delivered</div>
          </div>
          <div className="bg-orange-50 p-6 rounded-xl text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">85%</div>
            <div className="text-gray-600">Faster Response</div>
          </div>
          <div className="bg-orange-50 p-6 rounded-xl text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
            <div className="text-gray-600">AI Support</div>
          </div>
          <div className="bg-orange-50 p-6 rounded-xl text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">98%</div>
            <div className="text-gray-600">Client Satisfaction</div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/portfolio"
            className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg shadow-sm text-white bg-orange-600 hover:bg-orange-700 transition-colors duration-300"
          >
            View All Projects
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedWork;