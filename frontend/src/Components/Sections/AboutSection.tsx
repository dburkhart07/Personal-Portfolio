import React from 'react';
import SectionWrapper from '../Reusables/SectionWrapper';
import GlassCard from '../Reusables/GlassCard';

const AboutSection = () => {
  return (
    <SectionWrapper id="about" alt>
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-dark">
        About Me
      </h2>
      <div className="max-w-3xl mx-auto">
        <GlassCard>
          <p className="text-slate-600 text-lg leading-relaxed">
            Hi, I'm Dalton! I'm currently a third-year student studying Computer Science and AI at Northeastern University.
            My technical interests lie within the intersection between AI and software, specifically in healthcare, economics, and psychology.
            I also enjoy doing a lot of volunteer work in general, but especially with education in tech, and love working on
            projects that aim to educate younger or underserved communities on how to become software developers.
          </p>
        </GlassCard>
      </div>
    </SectionWrapper>
  );
};

export default AboutSection;
