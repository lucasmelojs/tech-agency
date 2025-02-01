import React from 'react';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const { id } = useParams();

  // This would typically come from an API or CMS
  const post = {
    id: 1,
    title: 'The Future of Web Development',
    content: `
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <h2>The Rise of New Technologies</h2>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    `,
    date: '2024-02-01',
    author: {
      name: 'John Doe',
      image: '/path-to-image.jpg',
      bio: 'Senior Web Developer with 10+ years of experience',
    },
    category: 'Web Development',
    readTime: '5 min read',
    image: '/path-to-image.jpg',
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 text-gray-600 mb-4">
            <span>{post.category}</span>
            <span>•</span>
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
          
          {/* Author */}
          <div className="flex items-center justify-center gap-4">
            <img
              src={post.author.image}
              alt={post.author.name}
              className="w-12 h-12 rounded-full"
            />
            <div className="text-left">
              <div className="font-medium text-gray-900">{post.author.name}</div>
              <div className="text-sm text-gray-600">{post.author.bio}</div>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="mb-8">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-64 object-cover rounded-lg"
          />
        </div>

        {/* Content */}
        <div 
          className="prose prose-lg mx-auto"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Share Section */}
        <div className="mt-12 border-t pt-8">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Share this post</h3>
          <div className="flex gap-4">
            <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              Twitter
            </button>
            <button className="px-4 py-2 bg-blue-800 text-white rounded hover:bg-blue-900">
              LinkedIn
            </button>
            <button className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900">
              Copy Link
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;