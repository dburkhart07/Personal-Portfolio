import React, { useEffect, useState } from 'react';
import ProjectCard from './Reusables/ProjectCard';

const projects = [
  {
      title: "Full Stack App",
      image: "https://cdn.pixabay.com/photo/2015/02/24/02/05/website-647013_1280.jpg",
      techStack: "MongoDB, Express, React, Nodejs",
      projectLink: "https://github.com/dburkhart07/MERN-Stack-Portfolio",
      delay: 0.5
  },
  {
      title: "Life Expectancy Predictor",
      image: "https://img.freepik.com/free-vector/stopwatch-timer-cartoon-icon-illustration_138676-2826.jpg",
      techStack: "Python, Scikit-learn, TensorFlow, Pandas, NumPy",
      projectLink: "https://github.com/dburkhart07/Life-Expectancy-Predictor",
      delay: 1
  },
  {
      title: "Project Lilac",
      image: "https://img.freepik.com/free-photo/arcade-game-world-set-pixelated-retro-game-8bit-digital_53876-131171.jpg",
      techStack: "C#, Unity",
      projectLink: "https://github.com/Watcher008/Project-Lilac",
      delay: 1.5
  },
  {
      title: "Cancerous Tumor Detector",
      image: "https://img.freepik.com/free-photo/medical-background-with-abstract-visualization-dna-strand_23-2149198819.jpg",
      techStack: "Python, Scikit-learn",
      projectLink: "https://github.com/dburkhart07/Cancerous-tumor-detector",
      delay: 2
  }
];

const Projects = () => {
  return (
    <div className="bg-[rgb(85,17,0)] text-[rgb(255,233,209)] pt-[3rem] md:pt-[4rem] pb-[1rem]">
      <h1
        className="flex justify-center text-3xl md:text-4xl lg:text-5xl font-bold mb-12"
        style={{
          animation: `fadeInUp 2s ease-out forwards`,
          opacity: 0, // Start with an invisible state
        }}
      >
        Projects
      </h1>
      <div className="w-[90%] mx-auto flex flex-wrap justify-center gap-[2rem]">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            image={project.image}
            techStack={project.techStack}
            projectLink={project.projectLink}
            delay={project.delay}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
