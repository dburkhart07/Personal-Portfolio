import React from 'react';

const SkillsLanguage = ({ skills, transitionSpeed }) => {
  return (
    <div className="pt-1">
      {skills.map((skill, index) => (
        <div key={index} className="relative mb-[1rem]">
          <h1 className="pt-2 w-[100%] uppercase rounded-sm text-white text-[12px] font-bold">
            {skill.name}
          </h1>
          <span className={`${skill.level} h-[6px] absolute ${skill.color} rounded-sm`} 
                style = {{ width: skill.level, transition: `width ${transitionSpeed} ease-in-out` }}>       
          </span>
        </div>
      ))}
    </div>
  );
};


export default SkillsLanguage;
