import React from 'react';

const CompanyCulture = ({ values }) => {
  return (
    <div className="py-12">
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
        Our Values
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {values.map((value, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <div className="text-4xl mb-4">{value.icon}</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {value.title}
            </h3>
            <p className="text-gray-600">{value.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyCulture;