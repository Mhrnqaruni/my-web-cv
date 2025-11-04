import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Publications from './components/Projects';
import Education from './components/Education';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Publications />
        <Education />
      </main>
      <Footer />
    </div>
  );
};

export default App;