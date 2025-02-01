import React from 'react';
import { Link } from 'react-router-dom';

const ServicesOverview = () => {
  const services = [
    {
      name: 'Web Development',
      description: 'Custom web applications built with modern technologies',
      icon: '🌐',
    },
    {
      name: 'Mobile Development',
      description: 'Native and cross-platform mobile applications',
      icon: '📱',
    },
    {
      name: 'UI/UX Design',
      description: 'User-centered design solutions',
      icon: '🎨',
    },
  ];

  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Comprehensive solutions for your digital needs
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white overflow-hidden shadow rounded-lg hover:shadow-lg transition-shadow duration-300"
            >
              <div className="px-4 py-5 sm:p-6">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-medium text-gray-900">
                  {service.name}
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/services"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-orange-600 hover:bg-orange-700 transition-colors duration-300"
          >
            View All Services
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesOverview;