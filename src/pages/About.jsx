import React from 'react';

const About = () => {
  const team = [
    {
      name: 'John Smith',
      role: 'CEO & Founder',
      image: '/path-to-image.jpg',
      bio: 'Tech enthusiast with 15+ years of experience in digital transformation.',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#'
      }
    },
    {
      name: 'Sarah Johnson',
      role: 'Technical Director',
      image: '/path-to-image.jpg',
      bio: 'Full-stack developer turned tech leader, passionate about innovation.',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#'
      }
    },
    {
      name: 'Michael Chen',
      role: 'Design Lead',
      image: '/path-to-image.jpg',
      bio: 'Award-winning designer with a focus on user-centered experiences.',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#'
      }
    }
  ];

  const values = [
    {
      icon: (
        <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Innovation',
      description: 'Pushing the boundaries of what"s possible in digital technology.'
    },
    {
      icon: (
        <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Collaboration',
      description: 'Working together to achieve exceptional results for our clients.'
    },
    {
      icon: (
        <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Excellence',
      description: 'Delivering the highest quality in everything we do.'
    },
    {
      icon: (
        <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: 'Passion',
      description: 'Bringing enthusiasm and dedication to every project.'
    }
  ];

  const stats = [
    { number: '10+', label: 'Years Experience' },
    { number: '200+', label: 'Projects Completed' },
    { number: '50+', label: 'Team Members' },
    { number: '95%', label: 'Client Satisfaction' }
  ];

  const milestones = [
    {
      year: '2014',
      title: 'Company Founded',
      description: 'Started with a vision to transform digital experiences.'
    },
    {
      year: '2016',
      title: 'Global Expansion',
      description: 'Opened offices in multiple countries.'
    },
    {
      year: '2019',
      title: 'Innovation Award',
      description: 'Recognized for technological excellence.'
    },
    {
      year: '2022',
      title: 'Market Leader',
      description: 'Became industry leader in digital solutions.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-gray-900 to-gray-800 py-24">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-orange-600 mix-blend-multiply opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black opacity-50"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Our Story
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A decade of innovation, creativity, and excellence in digital solutions
          </p>
        </div>
      </div>

      {/* Company Overview */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Building the Future of Digital Technology
              </h2>
              <p className="text-gray-600 mb-6">
                Founded in 2014, we've been at the forefront of digital innovation,
                helping businesses transform and thrive in the digital age. Our team
                of experts combines creativity with technical excellence to deliver
                exceptional results.
              </p>
              <p className="text-gray-600">
                We believe in pushing boundaries, embracing challenges, and creating
                solutions that make a real difference. Our commitment to quality and
                innovation has made us a trusted partner for businesses worldwide.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-6 text-center transform transition-transform duration-300 hover:scale-105"
                >
                  <div className="text-4xl font-bold text-orange-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-gray-600">The principles that guide everything we do</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-orange-100 rounded-lg mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-gray-600">Key milestones in our story</p>
          </div>
          <div className="relative">
            <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-orange-200"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative ${index % 2 === 0 ? 'lg:ml-auto lg:pl-16' : 'lg:mr-auto lg:pr-16'} lg:w-1/2`}>
                  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="absolute top-6 -left-3 lg:left-auto lg:-right-3 w-6 h-6 bg-orange-600 rounded-full border-4 border-white"></div>
                    <div className="text-orange-600 font-bold mb-2">{milestone.year}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Team</h2>
            <p className="text-gray-600">Meet the people behind our success</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <img
                  className="w-full h-64 object-cover"
                  src={member.image}
                  alt={member.name}
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <div className="text-orange-600 font-medium mb-4">{member.role}</div>
                  <p className="text-gray-600 mb-6">{member.bio}</p>
                  <div className="flex space-x-4">
                    {Object.entries(member.social).map(([platform, link]) => (
                      <a
                        key={platform}
                        href={link}
                        className="text-gray-400 hover:text-orange-600 transition-colors duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {platform.charAt(0).toUpperCase() + platform.slice(1)}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-orange-600 to-orange-500 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Join Our Team</h2>
          <p className="text-xl text-orange-100 mb-8">
            We're always looking for talented people to join our growing team
          </p>
          <button className="bg-white text-orange-600 px-8 py-4 rounded-lg font-bold hover:bg-orange-50 transition-colors duration-300 shadow-lg hover:shadow-xl">
            View Open Positions
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;