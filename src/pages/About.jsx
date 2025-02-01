import React from 'react';
import TeamMember from '../components/about/TeamMember';
import CompanyCulture from '../components/about/CompanyCulture';

const About = () => {
  const team = [
    {
      name: 'John Doe',
      role: 'CEO & Founder',
      image: '/path-to-image.jpg',
      bio: 'Tech enthusiast with 15+ years of experience in digital transformation.',
      social: {
        twitter: '#',
        linkedin: '#',
      },
    },
    // Add more team members
  ];

  const values = [
    {
      title: 'Innovation',
      description: 'We push the boundaries of what"s possible in digital technology.',
      icon: '💡',
    },
    {
      title: 'Collaboration',
      description: 'We work closely with our clients to achieve the best results.',
      icon: '🤝',
    },
    {
      title: 'Quality',
      description: 'We deliver excellence in every project we undertake.',
      icon: '⭐',
    },
    // Add more values
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Us</h1>
          <p className="text-xl text-gray-600">
            We're a team of passionate individuals dedicated to creating amazing digital experiences
          </p>
        </div>

        {/* Company Story */}
        <div className="prose prose-lg mx-auto mb-16">
          <h2>Our Story</h2>
          <p>
            Founded in 2020, Tech Agency has been at the forefront of digital innovation.
            We specialize in creating cutting-edge solutions that help businesses thrive
            in the digital age.
          </p>
        </div>

        {/* Company Culture */}
        <CompanyCulture values={values} />

        {/* Team Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;