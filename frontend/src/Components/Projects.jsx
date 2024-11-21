import React, { useEffect, useState } from 'react';
import ProjectCard from './Reusables/ProjectCard';  // Import your ProjectCard component
import axios from 'axios';

const Projects = () => {
  const [projects, setProjects] = useState([]);  // State to store fetched projects

  useEffect(() => {
    // Fetch project data from the backend
    axios.get('http://localhost:5000/api/projects')  // Backend endpoint
      .then((response) => {
        // Directly map the response data to match the ProjectCard props
        const fetchedProjects = response.data.map((project) => ({
          title: project.title,
          image: project.image,
          techStack: project.techStack.join(', '),  // Convert tech stack array to string
          projectLink: project.projectLink,
          delay: project.delay,  // Use delay as provided by the backend
        }));
        setProjects(fetchedProjects);  // Update state with mapped data
      })
      .catch((error) => console.error('Error fetching project data:', error));
  }, []);

  return (
    <div className="bg-[rgb(85,17,0)] text-[rgb(255,233,209)] pt-[3rem] md:pt-[4rem] pb-[1rem]">
      <h1
        className="flex justify-center text-2xl md:text-3xl lg:text-4xl font-bold mb-12"
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
