import React from 'react';
import { Link } from 'react-router-dom';

const FeaturedWork = () => {
  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'Modern e-commerce solution with advanced features',
      image: '/path-to-image.jpg',
      category: 'Web Development',
    },
    {
      id: 2,
      title: 'Mobile Banking App',
      description: 'Secure and user-friendly mobile banking solution',
      image: '/path-to-image.jpg',
      category: 'Mobile Development',
    },
  ];

  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Featured Work
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Check out some of our recent projects
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {projects.map((project) => (
            <Link
              key={project.id}
              to={`/work/${project.id}`}
              className="group relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-64"
                />
              </div>
              <div className="p-6">
                <p className="text-sm font-medium text-orange-600">
                  {project.category}
                </p>
                <h3 className="mt-2 text-xl font-semibold text-gray-900 group-hover:text-orange-600">
                  {project.title}
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  {project.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/work"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-orange-600 hover:bg-orange-700"
          >
            View All Work
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedWork;