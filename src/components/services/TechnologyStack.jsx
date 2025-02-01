import React from 'react';

const TechnologyStack = () => {
  const technologies = {
    frontend: [
      { name: 'React', icon: '⚛️' },
      { name: 'Next.js', icon: '▲' },
      { name: 'Vue.js', icon: '🟢' },
      { name: 'TypeScript', icon: '📘' },
    ],
    backend: [
      { name: 'Node.js', icon: '🟩' },
      { name: 'Python', icon: '🐍' },
      { name: 'Java', icon: '☕' },
      { name: 'Go', icon: '🔵' },
    ],
    database: [
      { name: 'PostgreSQL', icon: '🐘' },
      { name: 'MongoDB', icon: '🍃' },
      { name: 'Redis', icon: '🔴' },
      { name: 'MySQL', icon: '🐬' },
    ],
    cloud: [
      { name: 'AWS', icon: '☁️' },
      { name: 'Google Cloud', icon: '🌩️' },
      { name: 'Azure', icon: '⚡' },
      { name: 'Digital Ocean', icon: '🌊' },
    ],
  };

  return (
    <div className="py-12">
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
        Our Technology Stack
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {Object.entries(technologies).map(([category, techs]) => (
          <div key={category} className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4 capitalize">
              {category}
            </h3>
            <ul className="space-y-3">
              {techs.map((tech, index) => (
                <li key={index} className="flex items-center text-gray-600">
                  <span className="text-2xl mr-2">{tech.icon}</span>
                  <span>{tech.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechnologyStack;