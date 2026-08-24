import React, { useState, useEffect } from 'react';
import Header from './Components/Header';
import HeroSection from './Components/Sections/HeroSection';
import AboutSection from './Components/Sections/AboutSection';
import SkillsSection from './Components/Sections/SkillsSection';
import ExperienceSection from './Components/Sections/ExperienceSection';
import ProjectsSection from './Components/Sections/ProjectsSection';
import ContactSection from './Components/Sections/ContactSection';
import Footer from './Components/Footer';
import './index.css';

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
