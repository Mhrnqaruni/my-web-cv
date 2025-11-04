import React from 'react';

const CheckIcon: React.FC = () => (
    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
);

const ContentWithImage: React.FC = () => {
    return (
        <section className="bg-gray-50 dark:bg-slate-800 py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="md:order-2">
                        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">A technology-first approach to finance</h2>
                        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                            Our platform is built on a modern tech stack, ensuring reliability, security, and a seamless user experience. We leverage the latest advancements to provide you with powerful tools.
                        </p>
                        <ul className="mt-8 space-y-4">
                            <li className="flex items-start">
                                <div className="flex-shrink-0"><CheckIcon /></div>
                                <p className="ml-3 text-gray-600 dark:text-gray-300"><span className="font-semibold">Next.js and Tailwind CSS:</span> A solid foundation for building fast and beautiful interfaces.</p>
                            </li>
                            <li className="flex items-start">
                                <div className="flex-shrink-0"><CheckIcon /></div>
                                <p className="ml-3 text-gray-600 dark:text-gray-300"><span className="font-semibold">Modern Architecture:</span> Scalable and maintainable code that grows with your needs.</p>
                            </li>
                            <li className="flex items-start">
                                <div className="flex-shrink-0"><CheckIcon /></div>
                                <p className="ml-3 text-gray-600 dark:text-gray-300"><span className="font-semibold">Developer-Friendly:</span> Well-documented and easy to customize for your specific requirements.</p>
                            </li>
                        </ul>
                    </div>
                    <div className="md:order-1">
                        <img 
                            src="https://picsum.photos/seed/astrowind-content/800/600" 
                            alt="Tech illustration" 
                            className="rounded-lg shadow-xl mx-auto"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContentWithImage;
