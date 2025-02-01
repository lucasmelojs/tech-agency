import React from 'react';

const TeamMember = ({ name, role, image, bio, social }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img
        className="w-full h-48 object-cover"
        src={image}
        alt={name}
      />
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900">{name}</h3>
        <p className="text-blue-600">{role}</p>
        <p className="mt-2 text-gray-600">{bio}</p>
        <div className="mt-4 flex space-x-4">
          {social?.twitter && (
            <a
              href={social.twitter}
              className="text-gray-400 hover:text-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          )}
          {social?.linkedin && (
            <a
              href={social.linkedin}
              className="text-gray-400 hover:text-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamMember;