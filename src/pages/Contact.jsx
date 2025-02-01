import React, { useState } from 'react';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const contactInfo = {
    address: '123 Tech Street, Silicon Valley, CA 94025',
    email: 'contact@techagency.com',
    phone: '+1 (555) 123-4567',
    socialMedia: {
      twitter: '#',
      linkedin: '#',
      github: '#',
    },
    officeHours: 'Monday - Friday: 9:00 AM - 6:00 PM PST',
  };

  const handleSubmit = async (formData) => {
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600">
            Get in touch with us to discuss your project
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            {formSubmitted ? (
              <div className="text-center py-12">
                <div className="text-green-600 text-5xl mb-4">✓</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Thank you for contacting us!
                </h3>
                <p className="text-gray-600">
                  We'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <ContactForm onSubmit={handleSubmit} />
            )}
          </div>

          {/* Contact Information */}
          <ContactInfo {...contactInfo} />
        </div>

        {/* Map */}
        <div className="mt-12">
          <div className="bg-gray-300 w-full h-96 rounded-lg">
            {/* Add your map component here */}
            <div className="w-full h-full flex items-center justify-center text-gray-600">
              Map Component
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-medium text-gray-900 mb-2">
                What types of projects do you work on?
              </h3>
              <p className="text-gray-600">
                We specialize in web and mobile development, UI/UX design, and digital transformation projects.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-medium text-gray-900 mb-2">
                What is your typical project timeline?
              </h3>
              <p className="text-gray-600">
                Project timelines vary depending on scope and complexity, but we typically deliver within 2-6 months.
              </p>
            </div>
            {/* Add more FAQ items as needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;