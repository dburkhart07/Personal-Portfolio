import React from 'react';
import SectionWrapper from '../Reusables/SectionWrapper';
import ProjectCard from '../Reusables/ProjectCard';

interface Project {
  title: string;
  description: string;
  techStack: string[];
  projectLink: string;
}

const projects: Project[] = [
  {
    title: "MyFit",
    description: "An AI-powered Android fitness app that generates personalized weekly workout plans using Google Gemini, with Firebase-backed authentication and workout history tracking.",
    techStack: ["Kotlin", "Jetpack Compose", "Firebase", "Gemini AI"],
    projectLink: "https://github.com/dburkhart07/MyFit",
  },
  {
    title: "Chatbot",
    description: "A full-stack ChatGPT clone with JWT authentication, persistent per-user conversation history, and real-time chat powered by OpenAI's GPT-3.5 Turbo.",
    techStack: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "OpenAI API"],
    projectLink: "https://github.com/dburkhart07/MERN-Stack-Chatbot",
  },
  {
    title: "Poker Agent",
    description: "Texas Hold'em poker AI agents that learn optimal strategies through self-play using Counterfactual Regret Minimization to converge toward Nash equilibrium.",
    techStack: ["Python", "NumPy", "Matplotlib"],
    projectLink: "https://github.com/dburkhart07/CS-5100-Poker-CFR",
  },
  {
    title: "Life Expectancy Predictor",
    description: "A machine learning system that predicts cardiac patient survival outcomes using five algorithms.",
    techStack: ["Python", "Scikit-learn", "XGBoost", "TensorFlow", "Pandas"],
    projectLink: "https://github.com/dburkhart07/Life-Expectancy-Predictor",
  },
];

const ProjectsSection: React.FC = () => {
  return (
    <SectionWrapper id="projects">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-dark">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            techStack={project.techStack}
            projectLink={project.projectLink}
          />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default ProjectsSection;
