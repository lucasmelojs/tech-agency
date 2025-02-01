import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto min-h-[90vh]">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:w-1/2 lg:pb-28 xl:pb-32 min-h-[90vh] flex items-center">
          <main className="mt-0 mx-auto max-w-7xl px-4 sm:mt-0 sm:px-6 lg:mt-0 lg:px-8">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block mb-2">Building Digital</span>{' '}
                <span className="block text-orange-600">Excellence</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                We create innovative digital solutions that help businesses thrive in the modern world. From web development to digital transformation, we're here to help you succeed.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link
                    to="/contact"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 md:py-4 md:text-lg md:px-10 transition-colors duration-300"
                  >
                    Get Started
                  </Link>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Link
                    to="/work"
                    className="w-full flex items-center justify-center px-8 py-3 border border-orange-600 text-base font-medium rounded-md text-orange-600 hover:bg-orange-50 md:py-4 md:text-lg md:px-10 transition-colors duration-300"
                  >
                    View Our Work
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* Video Background with Dark Overlay */}
      <div className="hidden lg:block absolute inset-y-0 right-0 w-1/2 transition-all duration-300">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <video 
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay 
          loop 
          muted 
          playsInline
        >
          <source 
            src="https://cdn.pixabay.com/video/2022/03/08/110124-686962762_large.mp4" 
            type="video/mp4" 
          />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Mobile Video Background */}
      <div className="lg:hidden absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-black/60 z-1"></div>
        <video 
          className="w-full h-full object-cover"
          autoPlay 
          loop 
          muted 
          playsInline
        >
          <source 
            src="https://cdn.pixabay.com/video/2022/03/08/110124-686962762_large.mp4" 
            type="video/mp4" 
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default HeroSection;