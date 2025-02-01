import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ id, title, excerpt, date, author, category, readTime, image }) => {
  return (
    <Link to={`/blog/${id}`} className="block">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
        <img
          className="w-full h-48 object-cover"
          src={image}
          alt={title}
        />
        <div className="p-6">
          <div className="flex items-center text-sm text-gray-600 mb-2">
            <span>{category}</span>
            <span className="mx-2">•</span>
            <span>{readTime}</span>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            {title}
          </h3>
          <p className="text-gray-600 mb-4">
            {excerpt}
          </p>
          <div className="flex items-center">
            <img
              className="h-8 w-8 rounded-full mr-2"
              src={author.image}
              alt={author.name}
            />
            <div>
              <p className="text-sm font-medium text-gray-900">
                {author.name}
              </p>
              <p className="text-sm text-gray-600">
                {date}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;