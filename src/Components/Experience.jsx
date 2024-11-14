import React from 'react';
import { useInView } from 'react-intersection-observer';
import ExperienceCard from './Reusables/ExperienceCard';
import ExpImg from '../Img/experience_bg.svg';

const Experience = () => {
  const experiences = [
    {
      company: "Northeastern University Research",
      dates: "September 2024 - Present",
      description:
        `Researched and analyzed the effect of military conflict in the Middle East on the protection of women in their respective countries (particularly Iran, Egypt, and Armenia)\nUtilized Web APIs, Microsoft Office, and Python to gather data, summarize, and visualize`
    },
    {
      company: "Wind River Environmental",
      dates: "May - August 2024",
      description:
        `Leveraged Excel and the company database to clean over 25,000 customer profiles, merging and deactivating accounts, ensuring unnecessary messages were not sent to past and present customers, saving large messaging fees\nPerformed monthly analyses using Excel, visually categorizing customer feedback, achieving a 75% positive feedback rate\nUtilized Microsoft Office tools to combine 15 training documents into a single, comprehensive visualization on diagnosing residential problems, bringing simplicity to technicians and serving as a visual aid and explanation to homeowners`
    },
    {
      company: "Code Ninjas",
      dates: "June - August 2024",
      description:
        `Mastered and delivered 4 in-depth course curricula to 40 kids over 6 week-long camps, fostering a collaborative learning environment, aiding students individually, and ensuring maximum material retention\nTaught topics about video game modding using MCreator and Minecraft Education Edition, website development in HTML, CSS, and JavaScript, and YouTube video making and editing using OpenShot Video Editor, Bandicam, and Canva`
    },
    {
      company: "Worcester Polytechnic Institute",
      dates: "October 2023 - May 2024",
      description:
        `Examined the usage of large language models and the OpenAI API to generate fuzzing inputs to create a more automated fuzzing process, expanding code coverage of several programming languages up to 90%\nStudied academic articles involving the use of machine learning to enhance achievement of vulnerabilities within software and improve data security within computer systems, presenting findings to several university professors`
    }
  ];

  return (
    <div className="bg-[rgb(85,17,0)] text-[rgb(255,233,209)] pt-[3rem] pl-[6rem] md:pt-[4rem] pb-[10rem]">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10">
        Work Experience
      </h1>
      <div className="flex flex-col lg:flex-row lg:space-x-8 space-y-8">
        {/* Left Column - Experience Cards */}
        <div className="w-full lg:w-1/2 lg:h-[600px] -ml-[4rem] overflow-y-auto lg:overflow-y-scroll scrollbar-hide space-y-5 md:h-auto md:overflow-hidden">
          {experiences.map((experience, index) => {
            const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
            return (
              <div ref={ref} key={index} className={inView ? 'opacity-100 transition-opacity duration-500' : 'opacity-0'}>
                <ExperienceCard
                  company={experience.company}
                  dates={experience.dates}
                  description={experience.description}
                />
              </div>
            );
          })}
        </div>

        {/* Right Column - Image */}
        <div className="relative w-full lg:w-1/2 md:w-full mt-8 md:mt-8 lg:mt-0">
          <img
            src={ExpImg}
            alt="Experience background"
            className="w-full h-auto object-cover opacity-50 lg:opacity-100 lg:w-[70%] lg:h-[90%] md:h-auto md:max-w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Experience;
