import React from 'react'; 
import ExperienceCard from './Reusables/ExperienceCard';

const Experience = () => {
  const experiences = [
    {company: "Project Lilac", dates: "July 2023 - Present", description:
        "Leveraged Excel and the company database to clean over 25,000 customer profiles, merging and deactivating accounts, ensuring unnecessary messages were not sent to past and present customers, saving large messaging fees Performed monthly analyses using Excel, visually categorizing customer feedback, achieving a 75% positive feedback rate Utilized Microsoft Office tools to combine 15 training documents into a single, comprehensive visualization on diagnosing residential problems, bringing simplicity to technicians and serving as a visual aid and explanation to homeowners"
    },
    {company: "Wind River Environmental", dates: "May - August 2024"},
    {company: "Code Ninjas", dates: "June - August 2024"},
  ];
  return (
    <div className="bg-[rgb(85,17,0)] text-[rgb(255,233,209)] pt-[3rem] pl-[6rem] md:pt-[4rem] pb-[1rem]">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10">
        Work Experience
      </h1>
      {experiences.map((experience) => (
          <ExperienceCard
            company={experience.company}
            dates={experience.dates}
            description={experience.description}
          />
        ))}
    </div>
  );
};

export default Experience;
