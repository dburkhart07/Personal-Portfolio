import React from 'react';
import ProfessionalPicture from '../../Img/Professional Picture.jpg';

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 50%, #BFDBFE 100%)' }}
    >
      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300/30 rounded-full blur-3xl animate-orb" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-300/20 rounded-full blur-3xl animate-orb-slow" />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-sky-200/30 rounded-full blur-3xl animate-orb-fast" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        {/* Text content */}
        <div className="flex-1 text-center md:text-left animate-fade-in-up">
          <p className="text-lg text-primary font-medium mb-2">Hi, I'm</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-dark">
            Dalton
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold gradient-text mb-6">
            Software Developer
          </h2>
          <p className="text-slate-500 text-lg max-w-lg mb-8">
            Computer Science & AI student at Northeastern University, passionate about leveraging technology in healthcare and education.
          </p>
          <div className="flex gap-4 justify-center md:justify-start">
            <a
              href="#contact"
              className="px-6 py-3 rounded-xl text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5"
              style={{ background: 'linear-gradient(135deg, #2563EB, #0EA5E9)' }}
            >
              Get in Touch
            </a>
            <a
              href="#projects"
              className="px-6 py-3 rounded-xl font-medium border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
            >
              View My Work
            </a>
          </div>
        </div>

        {/* Photo */}
        <div className="flex-shrink-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl scale-110" />
            <img
              src={ProfessionalPicture}
              alt="Dalton Burkhart"
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-2xl animate-float"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
