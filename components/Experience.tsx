import React from 'react';

const experienceData = [
  {
    company: 'Unique Tech Solution LTD (UTS)',
    role: 'Lead AI Engineer',
    date: 'Nov 2024 - Oct 2025',
    location: 'Nottingham, United Kingdom',
    description: 'Drove the hands-on, end-to-end development of the patented "SmartTeach" AI platform. Personally architected and implemented the full system stack including a Python (FastAPI) backend, PostgreSQL database, and a responsive React frontend. Integrated Google\'s Gemini 2.5 models via Vertex AI to automate the evaluation of multi-modal student submissions.',
  },
  {
    company: 'Unique Tech Solution LTD (UTS)',
    role: 'Local LLM Deployment Specialist',
    date: 'Jun 2025 - Oct 2025',
    location: 'Nottingham, United Kingdom',
    description: 'Led a strategic project for the University of Nottingham Malaysia to deploy and manage powerful, local instances of Large Language Models (e.g., Qwen3 235B, Gpt oss:120B) on their on-premise HPC infrastructure. Delivered a bespoke solution that provided over 100 university researchers with safe, high-performance access to AI tools.',
  },
  {
    company: 'University of Malaya',
    role: 'Automate Cloud Systems Engineer',
    date: 'Nov 2024 - Mar 2025',
    location: 'Kuala Lumpur, Malaysia',
    description: 'Engineered and deployed a 24/7 AI customer service bot on a custom-configured Google Cloud and GCE VM instance (IaaS). Managed the full cloud lifecycle, including setup, security hardening, and continuous monitoring to ensure high availability for the university\'s "Sapu" transportation system.',
  },
  {
    company: 'University of Malaya',
    role: 'Academic Tutor for Data Structure',
    date: 'Dec 2023 - Jul 2024',
    location: 'Kuala Lumpur, Malaysia',
    description: 'Instructed and mentored a cohort of over 50 undergraduate students in core Computer Science courses, including Data Structures and Advanced Python Programming, enhancing their practical understanding of complex algorithms.',
  },
  {
    company: 'University of Nottingham Malaysia',
    role: 'HPC Systems Administrator',
    date: 'Jul 2022 - Jul 2023',
    location: 'Semenyih, Malaysia',
    description: 'Oversaw the daily operation and maintenance of the university\'s high-performance computing (HPC) systems. Managed user access control, resource allocation, and provided critical technical support for the initial integration of AI models onto the cluster. This role was Part-time role undertaken during third year of BSc studies.',
  },
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl text-center mb-12">
            Work Experience
          </h2>
          <div className="relative border-l-2 border-primary/20 dark:border-blue-500/30 ml-3">
            {experienceData.map((job, index) => (
              <div key={index} className="mb-10 ml-8">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-primary rounded-full -left-4 ring-8 ring-gray-50 dark:ring-slate-800">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </span>
                <h3 className="flex items-center mb-1 text-xl font-semibold text-gray-900 dark:text-white">
                  {job.role} 
                  <span className="text-primary/80 dark:text-blue-400/80 font-normal text-sm ml-2 hidden sm:inline-block">@ {job.company}</span>
                </h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-500 dark:text-gray-400">
                  {job.date} &middot; {job.location}
                </time>
                <p className="mt-4 text-base font-normal text-gray-600 dark:text-gray-300">
                  {job.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
