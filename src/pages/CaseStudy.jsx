import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const CaseStudy = () => {
  const { id } = useParams();

  useEffect(() => {
    // In a real application, you would fetch the case study data using this ID
    console.log('Fetching case study with ID:', id);
  }, [id]);

  // This would typically come from an API or CMS
  const caseStudy = {
    id: 1,
    title: 'E-commerce Platform Redesign',
    client: 'Fashion Retailer',
    duration: '6 months',
    overview: 'Complete redesign and development of an e-commerce platform focused on improving user experience and conversion rates.',
    challenge: 'The client needed to modernize their online presence and improve their conversion rate, which was suffering due to an outdated and complex checkout process.',
    solution: 'We implemented a modern, responsive design with a streamlined checkout process and improved product discovery features.',
    results: [
      'Increased conversion rate by 45%',
      'Reduced cart abandonment by 30%',
      'Improved mobile engagement by 60%',
      'Decreased page load time by 50%'
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'AWS'],
    images: [
      '/path-to-image-1.jpg',
      '/path-to-image-2.jpg',
      '/path-to-image-3.jpg'
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{caseStudy.title}</h1>
          <p className="text-xl text-gray-600">Client: {caseStudy.client}</p>
          <p className="text-gray-600">Duration: {caseStudy.duration}</p>
        </div>

        {/* Project Images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudy.images.map((image, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={image}
                alt={`Project screenshot ${index + 1}`}
                className="w-full h-48 object-cover"
              />
            </div>
          ))}
        </div>

        {/* Overview Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
          <p className="text-gray-600">{caseStudy.overview}</p>
        </div>

        {/* Challenge & Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Challenge</h2>
            <p className="text-gray-600">{caseStudy.challenge}</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Solution</h2>
            <p className="text-gray-600">{caseStudy.solution}</p>
          </div>
        </div>

        {/* Results */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Results</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {caseStudy.results.map((result, index) => (
              <li key={index} className="flex items-center text-gray-600">
                <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {result}
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies Used */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Technologies Used</h2>
          <div className="flex flex-wrap gap-2">
            {caseStudy.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;