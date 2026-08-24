import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  projectLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, techStack, projectLink }) => {
  return (
    <div className="glass rounded-2xl overflow-hidden transition-all duration-300">
      <div className="p-5">
        <h3 className="text-lg font-semibold text-dark mb-2">{title}</h3>
        <p className="text-slate-500 text-sm mb-4">{description}</p>
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
            className="inline-block px-4 py-2 rounded-lg text-sm font-medium text-white transition-all duration-300"
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
