import React from 'react';
import SectionWrapper from '../Reusables/SectionWrapper';
import ProjectCard from '../Reusables/ProjectCard';

const projects = [
  {
    title: "Poker Bot",
    image: "https://static.independent.co.uk/2024/11/13/12/how-to-play-poker-copy.jpg?width=1200&height=1200&fit=crop",
    techStack: ["Python", "OpenAI Gym", "NumPy"],
    projectLink: "",
  },
  {
    title: "Full Stack App",
    image: "https://cdn.pixabay.com/photo/2015/02/24/02/05/website-647013_1280.jpg",
    techStack: ["MongoDB", "Express", "React", "Node.js"],
    projectLink: "https://github.com/dburkhart07/MERN-Stack-Portfolio",
  },
  {
    title: "Life Expectancy Predictor",
    image: "https://img.freepik.com/free-vector/stopwatch-timer-cartoon-icon-illustration_138676-2420.jpg",
    techStack: ["Python", "Scikit-learn", "TensorFlow", "Pandas"],
    projectLink: "https://github.com/dburkhart07/Life-Expectancy-Predictor",
  },
  {
    title: "Project Lilac",
    image: "https://img.freepik.com/free-photo/arcade-game-world-set-pixelated-retro-game-world-vector-illustration_1142-50896.jpg",
    techStack: ["C#", "Unity"],
    projectLink: "",
  },
  {
    title: "Cancerous Tumor Detector",
    image: "https://img.freepik.com/free-photo/medical-background-with-abstract-virus-cell_1048-14258.jpg",
    techStack: ["Python", "Scikit-learn"],
    projectLink: "https://github.com/dburkhart07/Cancerous-tumor-detector",
  },
];

const ProjectsSection = () => {
  return (
    <SectionWrapper id="projects">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-dark">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            image={project.image}
            techStack={project.techStack}
            projectLink={project.projectLink}
          />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default ProjectsSection;
