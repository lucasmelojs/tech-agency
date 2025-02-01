import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      content: "Working with Tech Agency was a game-changer for our business. They delivered a stunning website that perfectly represents our brand.",
      author: "Sarah Johnson",
      role: "CEO",
      company: "Fashion Retail Co",
      image: "/path-to-image.jpg"
    },
    {
      content: "The team's expertise in mobile development helped us create an app that our customers love. Highly recommended!",
      author: "Michael Chen",
      role: "Product Manager",
      company: "FinTech Solutions",
      image: "/path-to-image.jpg"
    },
    {
      content: "Their attention to detail and commitment to quality is outstanding. They're not just vendors, they're partners in success.",
      author: "Emma Davis",
      role: "Marketing Director",
      company: "Global Innovations",
      image: "/path-to-image.jpg"
    }
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Don't just take our word for it - hear from some of our amazing clients
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <svg
                  className="h-8 w-8 text-orange-600"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
              </div>

              {/* Testimonial Content */}
              <p className="text-gray-600 mb-6">
                {testimonial.content}
              </p>

              {/* Author Info */}
              <div className="flex items-center">
                <img
                  className="h-12 w-12 rounded-full object-cover"
                  src={testimonial.image}
                  alt={testimonial.author}
                />
                <div className="ml-4">
                  <div className="font-medium text-gray-900">
                    {testimonial.author}
                  </div>
                  <div className="text-gray-500">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;