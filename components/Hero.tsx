import React from 'react';

const ContactInfo: React.FC<{ icon: React.ReactNode; href: string; text: string; }> = ({ icon, href, text }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 transition-colors duration-200">
        {icon}
        <span>{text}</span>
    </a>
);


const Hero: React.FC = () => {
  return (
    <section className="relative py-20 md:py-24 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 items-center">
          <div className="md:col-span-1 flex justify-center">
            <img 
              src="https://i.imgur.com/XU68EwE.jpeg"
              alt="Mehran Gharooni Khoshkehbar" 
              className="rounded-full shadow-2xl h-48 w-48 md:h-64 md:w-64 object-cover ring-4 ring-primary/20"
            />
          </div>
          <div className="md:col-span-2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              Mehran Gharooni Khoshkehbar
            </h1>
            <p className="mt-2 text-2xl md:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              AI Researcher & Engineer
            </p>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <ContactInfo icon={<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>} href="mailto:mehran.gharuni@gmail.com" text="mehran.gharuni@gmail.com" />
                <ContactInfo icon={<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>} href="#" text="Kuala Lumpur, Malaysia" />
                <ContactInfo icon={<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.286 2.866 7.915 6.738 9.388.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" /></svg>} href="https://github.com/Mhrnqaruni" text="github.com/Mhrnqaruni" />
                <ContactInfo icon={<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>} href="https://www.linkedin.com/in/mehran-gharooni" text="linkedin.com/in/mehran-gharooni" />
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="#publications" className="bg-primary hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-md transition-transform duration-300 ease-in-out transform hover:scale-105">
                View Publications
              </a>
              <a href="#contact" className="bg-transparent border-2 border-gray-400 dark:border-gray-600 text-gray-700 dark:text-gray-200 font-semibold py-3 px-8 rounded-md transition-all duration-300 hover:bg-gray-100 dark:hover:bg-slate-800">
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
