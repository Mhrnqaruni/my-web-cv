import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="flex items-center bg-white dark:bg-slate-900 min-h-[calc(100vh-4rem)] py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 items-center gap-16 max-w-7xl mx-auto">
          
          {/* Left Column: Image with Decorative Frame */}
          <div className="lg:col-span-2 relative w-64 h-64 sm:w-80 sm:h-80 mx-auto">
            <div className="absolute inset-0 border-2 border-primary rounded-lg transform -rotate-3 transition-transform duration-300"></div>
            <img 
              src="https://avatars.githubusercontent.com/u/75912386?v=4" 
              alt="Mehran Gharooni Khoshkehbar" 
              className="relative w-full h-full object-cover rounded-lg shadow-2xl"
            />
          </div>

          {/* Right Column: Text Content */}
          <div className="lg:col-span-3 text-center lg:text-left">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">
              Mehran Gharooni Khoshkehbar
            </h1>
            <p className="mt-6 text-xl text-gray-600 dark:text-gray-300">
              AI Researcher & Engineer
            </p>
            <p className="mt-4 max-w-2xl mx-auto lg:mx-0 text-lg text-gray-500 dark:text-gray-400">
              Architecting the next generation of trustworthy AI to solve tangible challenges in science and industry.
            </p>
            <div className="mt-10 flex justify-center lg:justify-start gap-x-6">
              <a
                href="#publications"
                className="rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-white shadow-lg hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all duration-300 transform hover:-translate-y-1"
              >
                View Publications
              </a>
              <a
                href="#contact"
                className="rounded-md bg-gray-200 dark:bg-slate-800 px-4 py-2.5 text-sm font-semibold text-gray-800 dark:text-gray-200 shadow-lg hover:bg-gray-300 dark:hover:bg-slate-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-400 transition-all duration-300 transform hover:-translate-y-1"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
