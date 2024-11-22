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
  
  // Frontend & Backend Frameworks/Tools
  "react",
  "nodedotjs",
  "express",
  "spring",
  "nextdotjs",
  "tailwindcss",
  "mongodb",
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
    <div className="relative flex max-w-[80%] ml-20 items-center justify-center overflow-hidden rounded-lg bg-background px-20 pb-20 pt-8">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}
