import React, { useState } from 'react';
import BlogCard from '../components/blog/BlogCard';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const posts = [
    {
      id: 1,
      title: 'The Future of Web Development',
      excerpt: 'Exploring upcoming trends and technologies in web development',
      date: '2024-02-01',
      author: {
        name: 'John Doe',
        image: '/path-to-image.jpg',
      },
      category: 'Web Development',
      readTime: '5 min read',
      image: '/path-to-image.jpg',
    },
    // Add more blog posts
  ];

  const categories = [
    'All',
    'Web Development',
    'Mobile Development',
    'UI/UX Design',
    'Technology',
    'Business',
    'News'
  ];

  const filteredPosts = selectedCategory === 'All'
    ? posts
    : posts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Blog</h1>
          <p className="text-xl text-gray-600">
            Insights, thoughts, and news from our team
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full ${selectedCategory === category
                  ? 'bg-orange-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
                } transition-colors duration-200`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <BlogCard key={post.id} {...post} />
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-12 flex justify-center">
          <nav className="flex items-center gap-2">
            <button className="px-4 py-2 rounded bg-white text-gray-600 hover:bg-gray-100">
              Previous
            </button>
            <button className="px-4 py-2 rounded bg-orange-600 text-white">
              1
            </button>
            <button className="px-4 py-2 rounded bg-white text-gray-600 hover:bg-gray-100">
              2
            </button>
            <button className="px-4 py-2 rounded bg-white text-gray-600 hover:bg-gray-100">
              3
            </button>
            <button className="px-4 py-2 rounded bg-white text-gray-600 hover:bg-gray-100">
              Next
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Blog;