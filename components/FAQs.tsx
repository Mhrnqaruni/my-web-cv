import React, { useState } from 'react';

interface AccordionItemProps {
  title: string;
  content: string;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, content, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200 dark:border-slate-700 py-4">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center text-left text-lg font-medium text-gray-800 dark:text-gray-100"
      >
        <span>{title}</span>
        <svg
          className={`w-6 h-6 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 mt-4' : 'max-h-0'}`}>
        <p className="text-gray-600 dark:text-gray-300">
          {content}
        </p>
      </div>
    </div>
  );
};

const FAQs: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqData = [
    {
      title: 'What is Mehran?',
      content: 'Mehran is a free, open-source, and production-ready landing page template for developers and creators. It is built with React, TypeScript, and Tailwind CSS.',
    },
    {
      title: 'Can I use it for commercial projects?',
      content: 'Yes, absolutely! Mehran is released under the MIT license, which means you can use it for any project, personal or commercial, without any attribution required.',
    },
    {
      title: 'How do I get started?',
      content: 'Getting started is simple. Just download the template, install the dependencies with `npm install`, and start the development server with `npm run dev`. You can then customize the content and styles to your liking.',
    },
    {
      title: 'Is it easy to customize?',
      content: 'Yes, it is designed to be highly customizable. The code is well-structured, and Tailwind CSS makes it easy to change colors, fonts, spacing, and other visual aspects directly in your markup.',
    },
    {
        title: 'Do you offer support?',
        content: 'As an open-source project, official support is community-driven. You can open an issue on the GitHub repository if you find a bug or have a feature request. The community is often helpful in resolving common problems.',
    }
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-base font-semibold text-primary uppercase tracking-wider">FAQs</p>
            <h2 className="mt-2 text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <AccordionItem
                key={index}
                title={faq.title}
                content={faq.content}
                isOpen={openIndex === index}
                onClick={() => handleToggle(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
