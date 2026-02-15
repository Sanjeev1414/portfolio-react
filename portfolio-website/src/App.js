import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Freelancing from './components/Freelancing';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/global.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Close menu when clicking on a link
    const handleLinkClick = () => {
      setIsMenuOpen(false);
    };

    document.addEventListener('click', (e) => {
      if (e.target.closest('a') && !e.target.closest('.menu-toggle')) {
        handleLinkClick();
      }
    });

    return () => {
      document.removeEventListener('click', handleLinkClick);
    };
  }, []);

  return (
    <div className="App">
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Sidebar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Freelancing />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
