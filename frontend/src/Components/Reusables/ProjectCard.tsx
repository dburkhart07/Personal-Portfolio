import React from 'react';

interface ProjectCardProps {
  title: string;
  image: string;
  techStack: string[];
  projectLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, image, techStack, projectLink }) => {
  return (
    <div className="glass rounded-2xl overflow-hidden hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 group">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-dark mb-3">{title}</h3>
        <div className="flex flex-wrap gap-2 mb-4">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-medium rounded-full bg-blue-50 text-primary"
            >
              {tech}
            </span>
          ))}
        </div>
        {projectLink && (
          <a
            href={projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 rounded-lg text-sm font-medium text-white transition-all duration-300 hover:shadow-md"
            style={{ background: 'linear-gradient(135deg, #2563EB, #0EA5E9)' }}
          >
            View Project
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
