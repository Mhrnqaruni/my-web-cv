import React from 'react';

const publicationData = [
  {
    type: 'Patent (Filed)',
    title: 'Automated teacher assistance (ATA) platform',
    details: 'Gharooni Khoshkehbar, M., Mandal, A., Taklimi, Z. M., & Unique Tech Solution. (2025). UK Intellectual Property Office. Filing No: GB2509323.8.',
    description: 'An AI-powered system that achieves high-accuracy automated grading of multi-modal student submissions by employing a novel architecture featuring a tri-modal OCR engine and a reflective consensus loop among an ensemble of distinct AI agents.',
    link: 'https://www.search-for-intellectual-property.service.gov.uk/GB2509323.8',
  },
  {
    type: 'Conference Paper',
    title: 'Enhancing Data Analytics Through Verified Natural-Language Conversational Data Analysis Assistants',
    details: 'Gharooni Khoshkehbar, M. (2025). Paper presented at the INTRAC 2025 Conference.',
    description: 'This paper introduces and empirically validates a novel, five-stage, critic-driven multi-agent framework that significantly improves the reliability of conversational AI for data analysis by closing the "Semantic Gap" between syntactic and semantic correctness.',
    link: 'https://s2014607.streamlit.app/',
  },
  {
    type: 'Journal Publication',
    title: 'Enhancing LSTM Predictions: A Novel Approach to Stock Market Efficiency Evaluation',
    details: 'Gharooni Khoshkehbar, M., Idris, N., & Madjlesi Taklimi, Z. (2023). SSRN Electronic Journal.',
    description: 'This research develops an adaptive approach for stock market forecasting where an LSTM model is automatically retrained based on qualitative directional accuracy, a strategy that significantly enhances model performance and adapts to market volatility.',
    link: 'https://dx.doi.org/10.2139/ssrn.4782069',
  },
];

const PublicationCard: React.FC<{ type: string; title: string; details: string; description: string; link: string; }> = ({ type, title, details, description, link }) => (
    <div className="p-6 bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col">
      <div>
        <span className="text-sm font-semibold text-primary uppercase">{type}</span>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-2 mb-2">{title}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{details}</p>
        <p className="text-gray-600 dark:text-gray-300 flex-grow">{description}</p>
      </div>
      <div className="mt-6">
        <a 
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-primary hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
        >
          View Publication &rarr;
        </a>
      </div>
    </div>
);


const Publications: React.FC = () => {
  return (
    <section id="publications" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Publications & Patents
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-300">
            My contributions to academic and industrial research.
          </p>
        </div>
        <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {publicationData.map((pub, index) => (
            <PublicationCard key={index} {...pub} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
