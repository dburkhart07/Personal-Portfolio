import React, { useState } from 'react';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

const ExperienceCard = ({ company, dates, description }) => {
  // State to handle whether the card is expanded or collapsed
  const [isExpanded, setIsExpanded] = useState(false);

  // Toggle the card state on click
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`w-[500px] bg-[rgb(119,47,17)] rounded-lg relative transition-all duration-300 ease-in-out ${
        isExpanded ? 'h-[400px]' : 'h-[175px]'
      }`}
      onClick={toggleExpand} // Toggle the card expansion on click
    >
      {!isExpanded ? (
        <>
          <div className="absolute top-[5px] left-[50%] transform -translate-x-1/2 text-xl">
            <FaArrowUp />
          </div>
          <p className="absolute pt-[2rem] pl-[2rem] text-yellow-300 text-[20px]">
            {company} 
          </p>
          <p className="absolute pt-[2rem] pl-[2rem] text-white text-[16px] top-[40%]">
            Click for more
          </p>
          <p className="absolute pt-[2rem] pl-[2rem] text-yellow-300 text-[16px] bottom-[1rem]">
            {dates}
          </p>
        </>
      ) : (
        <>
          <div className="absolute top-[5px] left-[50%] transform -translate-x-1/2 text-xl">
            <FaArrowDown />
          </div>
          <p className="absolute pt-[2rem] pl-[2rem] text-yellow-300 text-[20px]">
            {company} 
          </p>
          <p className="absolute pt-[5rem] left-[2rem] text-white text-[16px]">
            {description}
          </p>
        </>
      )}
    </div>
  );
};

export default ExperienceCard;
