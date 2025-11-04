import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            About Me
          </h2>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
            An AI researcher and engineer with a Master's in Data Science (4.0/4.0 CGPA), I am passionate about building AI systems that solve tangible challenges in fields like education, healthcare, and security. My work, from a Master's thesis on verified data analysis to the co-invention of a patented educational platform, is centered on making AI not just powerful, but demonstrably reliable. I am now seeking a PhD position to architect the next generation of trustworthy AI, focusing on creating scalable and secure systems that can accelerate scientific progress.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
