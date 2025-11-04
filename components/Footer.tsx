import React from 'react';

const SocialIcon: React.FC<{ href: string; children: React.ReactNode, label: string }> = ({ href, children, label }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary dark:hover:text-blue-400 transition-colors duration-200">
        <span className="sr-only">{label}</span>
        {children}
    </a>
);

const Footer: React.FC = () => {
    return (
        <footer id="contact" className="border-t border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Get In Touch</h2>
                    <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-md mx-auto">
                        I'm currently seeking a PhD position to architect the next generation of trustworthy AI. Feel free to reach out via email or connect with me on social media.
                    </p>
                    <div className="mt-6 flex justify-center space-x-6">
                        <SocialIcon href="https://www.linkedin.com/in/mehran-gharooni/" label="LinkedIn">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                        </SocialIcon>
                        <SocialIcon href="https://github.com/Mhrnqaruni" label="GitHub">
                           <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.286 2.866 7.915 6.738 9.388.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" /></svg>
                        </SocialIcon>
                         <SocialIcon href="mailto:mehran.gharuni@gmail.com" label="Email">
                           <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                        </SocialIcon>
                    </div>
                </div>
                <div className="mt-8 border-t border-gray-200 dark:border-slate-800 pt-8 text-center text-sm text-gray-500">
                    <p>&copy; 2024 Mehran Gharooni Khoshkehbar. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
