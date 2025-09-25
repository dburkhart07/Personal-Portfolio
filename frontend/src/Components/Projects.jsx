import React, { useEffect, useState } from 'react';
import ProjectCard from './Reusables/ProjectCard';

const projects = [
  {
      title: "Poker Bot",
      image: "https://static.independent.co.uk/2024/11/13/12/how-to-play-poker-copy.jpg?width=1200&height=1200&fit=crop",
      techStack: "Python, OpenAI Gym, NumPy",
      projectLink: "",
      delay: 0
  },
  {
      title: "Full Stack App",
      image: "https://cdn.pixabay.com/photo/2015/02/24/02/05/website-647013_1280.jpg",
      techStack: "MongoDB, Express, React, Nodejs",
      projectLink: "https://github.com/dburkhart07/MERN-Stack-Portfolio",
      delay: 0.5
  },
  {
      title: "Life Expectancy Predictor",
      image: "https://img.freepik.com/free-vector/stopwatch-timer-cartoon-icon-illustration_138676-2420.jpg?t=st=1732763082~exp=1732766682~hmac=17c95b78854ef636fd26912b6aabdedb576500a3996cb09471e44ca16ff5c7a3&w=826",
      techStack: "Python, Scikit-learn, TensorFlow, Pandas, NumPy, Matplotlib",
      projectLink: "https://github.com/dburkhart07/Life-Expectancy-Predictor",
      delay: 1
  },
  {
      title: "Project Lilac",
      image: "https://img.freepik.com/free-photo/arcade-game-world-set-pixelated-retro-game-world-vector-illustration_1142-50896.jpg?t=st=1732763365~exp=1732766965~hmac=a211dd6faffe664783ce86c5af79e566e681014c12064a706566670582763356&w=826",
      techStack: "C#, Unity",
      projectLink: "",
      delay: 1.5
  },
  {
      title: "Cancerous Tumor Detector",
      image: "https://img.freepik.com/free-photo/medical-background-with-abstract-virus-cell_1048-14258.jpg?t=st=1732763654~exp=1732767254~hmac=0263d711589dde216acc62ec4979555e711e9a99cc2c044c18e90fe0e90fc214&w=996",
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
