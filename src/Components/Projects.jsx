import React from 'react';
import ProjectCard from './Reusables/ProjectCard'; 
import PlaceholderImage from '../Img/Placeholder Image.jpg'; 

const Projects = () => {
  const projects = [
    {image: PlaceholderImage, techStack: "ReactJs, JavaScript", projectLink: "https://youtube.com", delay: 0.5 },
    {image: PlaceholderImage, techStack: "ExpressJs, NodeJs", projectLink: "https://youtube.com", delay: 1 },
    {image: PlaceholderImage, techStack: "Python, Scikit-learn", projectLink: "https://youtube.com", delay: 1.5 },
    {image: PlaceholderImage, techStack: "Java, Springboot", projectLink: "https://youtube.com", delay:2 },
  ];

  return (
    <div className="bg-[rgb(85,17,0)] text-[rgb(255,233,209)] pt-[3rem] md:pt-[4rem] pb-[1rem]">
      <h1 className="flex justify-center text-2xl md:text-3xl lg:text-4xl font-bold mb-12">
        Projects
      </h1>
      <div className="w-[90%] mx-auto flex flex-wrap justify-center gap-[2rem]">
        {projects.map((project) => (
          <ProjectCard
            image={project.image}
            techStack={project.techStack}
            projectLink = {project.projectLink}
            delay = {project.delay}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
