import { IconCloud } from './IconCloud'; 

const slugs = [
  // Programming languages
  "typescript",
  "javascript",
  "java",
  "python",
  "sql",
  "cplusplus",
  "csharp",
  "r",
  "html5",
  "css3",
  
  // Frontend & Backend Frameworks/Tools
  "react",
  "nodedotjs",
  "express",
  "spring",
  "nextdotjs",
  "tailwindcss",
  "mongodb",
  "postgresql",
  "postman",
  "pytorch",
  "tensorflow",
  "scikitlearn",
  
  // IDEs and collaboration tools
  "visualstudiocode",
  "intellijidea",
  "jupyter",
  "googlecolab",
  "unity",
  "rstudio",
  
  // Data analysis & visualization libraries
  "matplotlib",
  "pandas",
  "numpy",
  "seaborn",
  
  // Version control & office tools
  "git",
  "github",
  "gitlab",
  "microsoftoffice",
  "figma",
];

export function IconCloudDemo() {
  return (
    <div className="relative flex items-center justify-center overflow-hidden rounded-lg bg-background mx-auto transition-all duration-300 ease-in-out"
         style={{ width: '60%', maxWidth: '600px', aspectRatio: '1 / 1' }}>
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}

