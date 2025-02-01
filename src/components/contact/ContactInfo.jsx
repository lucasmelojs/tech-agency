import React from 'react';

const ContactInfo = ({ address, email, phone, socialMedia, officeHours }) => {
  return (
    <div className="bg-gray-50 rounded-lg shadow-lg p-8">
      <h3 className="text-xl font-bold text-gray-900 mb-6">
        Contact Information
      </h3>

      <div className="space-y-4">
        <div>
          <h4 className="text-sm font-medium text-gray-900 mb-1">Address</h4>
          <p className="text-gray-600">{address}</p>
        </div>

        <div>
          <h4 className="text-sm font-medium text-gray-900 mb-1">Email</h4>
          <a
            href={`mailto:${email}`}
            className="text-blue-600 hover:text-blue-700"
          >
            {email}
          </a>
        </div>

        <div>
          <h4 className="text-sm font-medium text-gray-900 mb-1">Phone</h4>
          <a
            href={`tel:${phone}`}
            className="text-blue-600 hover:text-blue-700"
          >
            {phone}
          </a>
        </div>

        <div>
          <h4 className="text-sm font-medium text-gray-900 mb-1">
            Office Hours
          </h4>
          <p className="text-gray-600">{officeHours}</p>
        </div>

        <div>
          <h4 className="text-sm font-medium text-gray-900 mb-2">
            Follow Us
          </h4>
          <div className="flex space-x-4">
            {socialMedia?.twitter && (
              <a
                href={socialMedia.twitter}
                className="text-gray-400 hover:text-blue-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            )}
            {socialMedia?.linkedin && (
              <a
                href={socialMedia.linkedin}
                className="text-gray-400 hover:text-blue-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            )}
            {socialMedia?.github && (
              <a
                href={socialMedia.github}
                className="text-gray-400 hover:text-blue-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;