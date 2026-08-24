import React, { useState } from 'react';
import SectionWrapper from '../Reusables/SectionWrapper';
import TimelineCard from '../Reusables/TimelineCard';

interface Experience {
  company: string;
  dates: string;
  description: string[];
}

const experiences: Experience[] = [
  {
    company: "Delsys",
    dates: "August 2025 - Present",
    description: [
      "Developed an interactive UI with Dash to model and analyze thousands of time-series signals, implementing a scalable saving system that enabled users to persist edits and annotations across an arbitrary number of files, improving data traceability and collaboration.",
      "Automated documentation for a C++ API by integrating Doxygen and Sphinx into a CI/CD pipeline, ensuring up-to-date, version-controlled developer resources and reducing onboarding time for new engineers.",
      "Designed and implemented comprehensive unit tests to validate all API functionality, increasing test coverage from 0 to 100% and ensuring reliability across all core functions."
    ],
  },
  {
    company: "DraftKings Inc.",
    dates: "June 2025 - August 2025",
    description: [
      "Advanced the development of a daily login promotion feature, utilizing Swift and SwiftUI to build end-to-end UI components, while handling deeplink navigation, and API integration ensuring smooth user flows, achieving 100k+ daily users.",
      "Conducted thorough functional, and edge-case testing using XCTest, validating that all implemented features met ticket requirements, achieving 80%+ unit test coverage across all platforms, improving test reliability and reducing regression risk.",
      "Reviewed and tested 75% of team-submitted pull requests, enforcing strict coding standards, identifying logic flaws, verifying ticket requirements, and improving overall team output quality in an Agile sprint environment utilizing JIRA."
    ],
  },
  {
    company: "Wind River Environmental",
    dates: "May 2024 - August 2024",
    description: [
      "Leveraged Excel and the company database to clean over 25,000 customer records for improved reporting accuracy.",
      "Performed monthly analyses using Excel, visually categorizing customer behavior trends to inform management decisions.",
      "Utilized Microsoft Office tools to combine 15 training documents into a consolidated, user-friendly format for employee use."
    ],
  },
  {
    company: "Code Ninjas",
    dates: "June 2024 - August 2024",
    description: [
      "Mastered and delivered 4 in-depth course curricula to 40 kids over 6 weeks, fostering an engaging learning environment.",
      "Taught topics about video game modding using MCreator and Minecraft Education Edition, inspiring creativity and technical skills."
    ],
  },
  {
    company: "Worcester Polytechnic Institute's Research Lab",
    dates: "October 2023 - May 2024",
    description: [
      "Examined the usage of large language models and the OpenAI API to generate customized inputs to create a more automated fuzzing process, expanding code coverage of 5 popular programming languages up to 90%.",
      "Recreated popular usages of symbolic and concolic execution based on recently published papers within Python, experimenting with this information to propose applications of predictive modeling to the process to expand code coverage."
    ],
  },
  {
    company: "Assistments",
    dates: "September 2023 - May 2024",
    description: [
      "Created training datasets for a model to use object recognition of different math problem types.",
      "Utilized the makesense.ai platform to markup math problems using 1 of 5 defined categories for training data purposes.",
      "Supported a platform used by 130,000 students and 3,000 teachers monthly to gather unique datasets for machine learning research."
    ],
  },
];

const ExperienceSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleCard = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <SectionWrapper id="experience" alt>
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-dark">
        Work Experience
      </h2>
      <div className="max-w-2xl mx-auto">
        {experiences.map((exp, index) => (
          <TimelineCard
            key={index}
            company={exp.company}
            dates={exp.dates}
            description={exp.description}
            isOpen={openIndex === index}
            toggleExpand={() => toggleCard(index)}
            index={index}
          />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default ExperienceSection;
