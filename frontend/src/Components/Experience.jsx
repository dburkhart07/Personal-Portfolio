import React, { useState, useEffect } from 'react';
import ExperienceCard from './Reusables/ExperienceCard';
import ExpImg from '../Img/experience_bg.svg';

const experiences = [
  {
      company: "Wind River Environmental",
      dates: "May 2024 - August 2024",
      description: [
          "Leveraged Excel and the company database to clean over 25,000 customer records for improved reporting accuracy.",
          "Performed monthly analyses using Excel, visually categorizing customer behavior trends to inform management decisions.",
          "Utilized Microsoft Office tools to combine 15 training documents into a consolidated, user-friendly format for employee use."
      ],
      delay: 0.5
  },
  {
      company: "Code Ninjas",
      dates: "June 2024 - August 2024",
      description: [
          "Mastered and delivered 4 in-depth course curricula to 40 kids over 6 weeks, fostering an engaging learning environment.",
          "Taught topics about video game modding using MCreator and Minecraft Education Edition, inspiring creativity and technical skills."
      ],
      delay: 1
  },
  {
      company: "Worcester Polytechnic Institute's Research Lab",
      dates: "October 2023 - May 2024",
      description: [
          "Examined the usage of large language models and the OpenAI API to generate diverse datasets for research projects.",
          "Studied academic articles involving the use of machine learning to enhance educational platforms and tools."
      ],
      delay: 1.5
  },
  {
      company: "Assistments",
      dates: "September 2023 - May 2024",
      description: [
          "Created training datasets for a model to use object recognition of different math problem types.",
          "Utilized the makesense.ai platform to markup math problems using 1 of 5 defined categories for training data purposes.",
          "Supported a platform used by 130,000 students and 3,000 teachers monthly to gather unique datasets for machine learning research."
      ],
      delay: 2
  }
];


const Experience = () => {
  const [openIndex, setOpenIndex] = useState(null); // State to store which card is open

  const toggleCard = (index) => {
    // Toggle card visibility: if the clicked card is already open, close it; otherwise, open it.
    setOpenIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <div className="bg-[rgb(85,17,0)] text-[rgb(255,233,209)] pt-[3rem] pl-[6rem] md:pt-[4rem] pb-[10rem]">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10">
        Work Experience
      </h1>
      <div className="flex flex-col lg:flex-row justify-center lg:justify-between">
        {/* Left Column - Experience Cards */}
        <div className="w-full lg:w-1/2 px-4">
          {/* Scrollable container for experience */}
          <div className="h-[30rem] overflow-y-auto space-y-4 scrollbar-none">
          {/* Map through experiences and render each card */}
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="transition-opacity duration-500 opacity-0 lg:opacity-100"
              style={{ animation: `fadeInUp ${exp.delay}s ease-out forwards` }}
            >
              <ExperienceCard
                company={exp.company}
                dates={exp.dates}
                description={exp.description}
                delay={exp.delay}
                isOpen={openIndex === index}  // Determine if the card is open
                toggleExpand={() => toggleCard(index)}  // Toggle the open card
              />
            </div>
          ))}
          </div>
        </div>

        {/* Right Column - Background Image */}
        <div className="relative w-full lg:w-1/2 mt-8 lg:mt-0 px-4"
             style={{
               animation: `fadeInUp 2.5s ease-out forwards`,
               opacity: 0, // Start with an invisible state
             }}>
          <img
            src={ExpImg}
            alt="Experience background"
            className="w-full h-auto object-cover opacity-50 lg:opacity-100"
          />
        </div>
      </div>
    </div>
  );
};

export default Experience;
