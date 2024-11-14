import React, { useState } from 'react';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

const ExperienceCard = ({ company, dates, description }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`w-full max-w-[400px] md:max-w-[500px] bg-[rgb(119,47,17)] rounded-lg relative transition-all duration-300 ease-in-out flex flex-col cursor-pointer mx-auto 
        ${isExpanded ? 'h-auto' : 'h-[175px]'}`}
      onClick={toggleExpand}
    >
      {!isExpanded ? (
        <>
          <div className="absolute top-[5px] left-[50%] transform -translate-x-1/2 text-xl">
            <FaArrowUp />
          </div>
          <p className="pt-[2rem] pl-[1.5rem] text-yellow-300 text-[20px] font-semibold">
            {company}
          </p>
          <div className="flex flex-col mt-[2.5rem] pl-[1.5rem] mb-[1rem]">
            <p className="text-white text-[16px]">Click for more</p>
            <p className="text-yellow-300 text-[16px] mt-2">{dates}</p>
          </div>
        </>
      ) : (
        <>
          <div className="absolute top-[5px] left-[50%] transform -translate-x-1/2 text-xl">
            <FaArrowDown />
          </div>
          <p className="pt-[2rem] pl-[1.5rem] text-yellow-300 text-[20px] font-semibold">
            {company}
          </p>
          <div className="pt-[2rem] pl-[1.5rem] pr-[2rem] text-white text-[16px] leading-relaxed flex-grow whitespace-pre-wrap break-words">
            {description.split('\n').map((line, index) => (
              <p key={index} className="mb-2">
                {line}
              </p>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ExperienceCard;
