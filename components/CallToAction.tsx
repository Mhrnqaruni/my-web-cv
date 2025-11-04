import React from 'react';

const CallToAction: React.FC = () => {
    return (
        <section className="relative bg-primary">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-90"></div>
            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                        Ready to build your next project?
                    </h2>
                    <p className="mt-4 text-lg text-blue-100">
                        Start with a template that has everything you need to launch a beautiful and performant website. Download Mehran today and get your project off the ground in minutes.
                    </p>
                    <div className="mt-8">
                        <a 
                            href="#" 
                            className="inline-block bg-white text-primary font-semibold py-3 px-8 rounded-md shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
                        >
                            Get Template Now
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CallToAction;
