import React from 'react';
import SectionWrapper from '../Reusables/SectionWrapper';
import SkillIcon from '../Reusables/SkillIcon';
import {
  SiPython, SiGo, SiTypescript, SiJavascript, SiC, SiCplusplus, SiSwift, SiOpenjdk, SiPostgresql,
  SiReact, SiNextdotjs, SiNodedotjs, SiExpress, SiFlask, SiJest,
  SiMongodb, SiNestjs, SiCsharp, SiUnity,
  SiAmazonwebservices, SiGooglecloud, SiDocker, SiKubernetes, SiDatadog, SiGit, SiGithubactions, SiPostman,
  SiTensorflow, SiScikitlearn, SiR,
  SiOpencv, SiNumpy, SiPandas,
} from 'react-icons/si';
import { TbChartDots, TbChartAreaLine, TbArrowsShuffle } from 'react-icons/tb';

const categories = [
  {
    name: 'Languages',
    color: 'bg-emerald-100 text-emerald-700',
    skills: [
      { Icon: SiPython, name: 'Python', color: '#3776AB' },
      { Icon: SiGo, name: 'Go', color: '#00ADD8' },
      { Icon: SiTypescript, name: 'TypeScript', color: '#3178C6' },
      { Icon: SiJavascript, name: 'JavaScript', color: '#F7DF1E' },
      { Icon: SiC, name: 'C', color: '#A8B9CC' },
      { Icon: SiCplusplus, name: 'C++', color: '#00599C' },
      { Icon: SiSwift, name: 'Swift', color: '#F05138' },
      { Icon: SiOpenjdk, name: 'Java', color: '#ED8B00' },
      { Icon: SiCsharp, name: 'C#', color: '#239120' },
      { Icon: SiR, name: 'R', color: '#276DC3' },
      { Icon: SiPostgresql, name: 'PostgreSQL', color: '#4169E1' },
      { Icon: SiMongodb, name: 'MongoDB', color: '#47A248' },
    ],
  },
  {
    name: 'Frameworks',
    color: 'bg-green-100 text-green-700',
    skills: [
      { Icon: SiReact, name: 'React', color: '#61DAFB' },
      { Icon: SiNextdotjs, name: 'Next.js', color: '#000000' },
      { Icon: SiNodedotjs, name: 'Node.js', color: '#339933' },
      { Icon: SiExpress, name: 'Express', color: '#000000' },
      { Icon: SiFlask, name: 'Flask', color: '#000000' },
      { Icon: SiSwift, name: 'SwiftUI', color: '#F05138' },
      { Icon: SiNestjs, name: 'NestJS', color: '#E0234E' },
      { Icon: SiJest, name: 'Jest', color: '#C21325' },
      { Icon: SiTensorflow, name: 'TensorFlow', color: '#FF6F00' },
      { Icon: SiUnity, name: 'Unity', color: '#000000' },
    ],
  },
  {
    name: 'Infrastructure',
    color: 'bg-orange-100 text-orange-700',
    skills: [
      { Icon: SiAmazonwebservices, name: 'AWS', color: '#FF9900' },
      { Icon: SiGooglecloud, name: 'Google Cloud', color: '#4285F4' },
      { Icon: SiDocker, name: 'Docker', color: '#2496ED' },
      { Icon: SiKubernetes, name: 'Kubernetes', color: '#326CE5' },
      { Icon: SiDatadog, name: 'Datadog', color: '#632CA6' },
      { Icon: SiGit, name: 'Git', color: '#F05032' },
      { Icon: SiGithubactions, name: 'CI/CD', color: '#2088FF' },
      { Icon: SiPostman, name: 'Postman', color: '#FF6C37' },
    ],
  },
  {
    name: 'Libraries',
    color: 'bg-purple-100 text-purple-700',
    skills: [
      { Icon: SiScikitlearn, name: 'Scikit-learn', color: '#F7931E' },
      { Icon: SiOpencv, name: 'OpenCV', color: '#5C3EE8' },
      { Icon: TbArrowsShuffle, name: 'ZeroMQ', color: '#DF0000' },
      { Icon: SiNumpy, name: 'NumPy', color: '#013243' },
      { Icon: SiPandas, name: 'Pandas', color: '#150458' },
      { Icon: TbChartDots, name: 'Matplotlib', color: '#11557C' },
      { Icon: TbChartAreaLine, name: 'Seaborn', color: '#4C72B0' },
    ],
  },
];

const SkillsSection = () => {
  return (
    <SectionWrapper id="skills">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-dark">
        Skills & Technologies
      </h2>
      <div className="space-y-10">
        {categories.map((category) => (
          <div key={category.name}>
            <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-6 ${category.color}`}>
              {category.name}
            </span>
            <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-9 gap-4">
              {category.skills.map((skill, i) => (
                <SkillIcon
                  key={skill.name}
                  Icon={skill.Icon}
                  name={skill.name}
                  color={skill.color}
                  delay={i * 50}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default SkillsSection;
