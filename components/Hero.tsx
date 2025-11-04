import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between py-20 md:py-28 gap-12">
          
          {/* Image on the Left (on desktop) */}
          <div className="md:w-2/5 flex justify-center mb-10 md:mb-0">
             <div className="relative w-64 h-64 md:w-80 md:h-80">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-full opacity-40 blur-2xl animate-pulse-slow"></div>
                <img 
                    src="https://avatars.githubusercontent.com/u/75912386?v=4" 
                    alt="Mehran Gharooni" 
                    className="relative w-full h-full rounded-full object-cover border-4 border-slate-200 dark:border-slate-700 shadow-2xl"
                />
            </div>
          </div>

          {/* Text Content on the Right (on desktop) */}
          <div className="md:w-3/5 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight">
              Mehran Gharooni
            </h1>
            <p className="mt-4 text-xl md:text-2xl text-primary dark:text-blue-400 font-semibold">
              AI Researcher & Engineer
            </p>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto md:mx-0">
              Building the next generation of trustworthy AI to solve real-world challenges in science, healthcare, and security.
            </p>
            <div className="mt-8 flex justify-center md:justify-start space-x-4">
              <a href="#experience" className="bg-primary hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-md transition-colors duration-300">
                View Experience
              </a>
              <a href="#contact" className="bg-gray-200 hover:bg-gray-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-gray-800 dark:text-gray-200 font-semibold py-3 px-6 rounded-md transition-colors duration-300">
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