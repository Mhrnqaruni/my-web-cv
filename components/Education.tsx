import React from 'react';

const educationData = [
  {
    degree: 'MSc in Data Science',
    institution: 'University of Malaya',
    date: 'Sep 2024 - Oct 2025',
    location: 'Kuala Lumpur, Malaysia',
    description: 'CGPA: 4.0/4.0 (Awarded Financial Scholarship for Academic Excellence). Thesis on enhancing data analytics with natural-language conversational assistants. Coursework included Advanced Machine Learning, NLP, and Big Data Systems.',
  },
  {
    degree: 'BSc in Computer Science',
    institution: 'University of Malaya',
    date: 'Oct 2020 - Aug 2024',
    location: 'Kuala Lumpur, Malaysia',
    description: 'Specialized in Artificial Intelligence. CGPA: 3.69, recipient of 3 Dean\'s Awards for Academic Excellence. Coursework included Data Structures & Algorithms, Network Security, and AI Fundamentals.',
  },
  {
    degree: 'Google Cloud Skill Boost',
    institution: 'Google Cloud',
    date: 'Dec 2024 - May 2025',
    location: 'Online',
    description: 'Completed a series of courses including: Introduction to AI and Machine Learning, Data Transformation in the Cloud, Data Management and Storage in the Cloud, and Introduction to Data Analytics.',
  },
];

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl text-center mb-12">
            Education & Training
          </h2>
          <div className="relative border-l-2 border-primary/20 dark:border-blue-500/30 ml-3">
            {educationData.map((edu, index) => (
              <div key={index} className="mb-10 ml-8">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-primary rounded-full -left-4 ring-8 ring-gray-50 dark:ring-slate-800">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 14l9-5-9-5-9 5 9 5z"></path><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-5.998 12.078 12.078 0 01.665-6.479L12 14z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-5.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222 4 2.222V20M1 12v7a2 2 0 002 2h18a2 2 0 002-2v-7"></path></svg>
                </span>
                <h3 className="flex items-center mb-1 text-xl font-semibold text-gray-900 dark:text-white">
                  {edu.degree}
                </h3>
                <p className="font-medium text-gray-700 dark:text-gray-300">{edu.institution}</p>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-500 dark:text-gray-400">
                  {edu.date} &middot; {edu.location}
                </time>
                <p className="mt-4 text-base font-normal text-gray-600 dark:text-gray-300">
                  {edu.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
