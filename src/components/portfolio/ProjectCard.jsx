import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  return (
    <Link
      to={`/work/${project.id}`}
      className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <div className="aspect-w-16 aspect-h-9">
        <img
          src={project.image}
          alt={project.title}
          className="object-cover w-full h-48"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-blue-600">
            {project.category}
          </span>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600">
          {project.title}
        </h3>
        <p className="mt-2 text-base text-gray-500">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies?.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 text-sm bg-gray-100 text-gray-600 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;