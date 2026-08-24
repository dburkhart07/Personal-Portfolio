import React, { useState } from 'react';
import SectionWrapper from '../Reusables/SectionWrapper';
import TimelineCard from '../Reusables/TimelineCard';

interface Experience {
  company: string;
  location: string;
  title: string;
  dates: string;
  description: string[];
}

const experiences: Experience[] = [
  {
    company: "Pinterest",
    location: "San Francisco, CA",
    title: "Applied AI Software Engineering Intern",
    dates: "May 2026 - Aug 2026",
    description: [
      "Shipped a multi-modal post-purchase styling agent on an internal vision-language model, building custom image tokenization endpoints and structured output schemas that made multi-turn conversational context cacheable across sessions.",
      "Built an end-to-end recommendation pipeline serving personalized outfit completions from LLM-generated search queries and a custom ranking algorithm favoring high-quality, metadata-complete pins, raising retrieval precision 20% against a query preview harness.",
      "Designed stateful conversation management for the agent, reconstructing multi-turn dialogue and image history into persistent memory and generating context-aware justifications for each recommendation.",
    ],
  },
  {
    company: "Datadog",
    location: "Boston, MA",
    title: "Infrastructure Software Engineering Intern",
    dates: "Jan 2026 - Apr 2026",
    description: [
      "Eliminated a Sev-1 failure mode in Ticino, Datadog's service-to-service authentication platform backing 1,500+ services, by modularizing its Go codebase to fetch JWKS from both AWS and GCP and adding validation that blocks malformed or unauthorized keys from being served.",
      "Extended cross-partition service authentication to 99% of Datadog release platforms with an AWS API Gateway and Lambda pipeline that resolves partition-aware URLs to the correct JWKS endpoint.",
      "Instrumented the new authentication path with metrics and monitors and deployed it on Kubernetes, providing end-to-end observability for a service validating 100k+ requests per second.",
    ],
  },
  {
    company: "Delsys",
    location: "Natick, MA",
    title: "R&D Software Developer Intern",
    dates: "Sep 2025 - Dec 2025",
    description: [
      "Built a distributed real-time computer vision system in Python and C++ using ZeroMQ, coordinating concurrent processing nodes through a shared parameter server to ingest live camera feeds and extract facial landmarks with MediaPipe.",
      "Profiled and optimized the multi-camera pipeline with multithreading and facemesh-indexed ROI extraction, sustaining 15 FPS per camera under live visualization.",
      "Automated documentation delivery with Doxygen, Breathe, and Sphinx, generating and deploying docs from docstrings on every push across 30+ files.",
    ],
  },
  {
    company: "DraftKings Inc.",
    location: "Boston, MA",
    title: "iOS Mobile Software Engineering Intern",
    dates: "Jun 2025 - Aug 2025",
    description: [
      "Built a daily login promotion feature end-to-end in Swift and SwiftUI, implementing UI components, deeplink navigation, and API integration on a surface reaching 100k+ daily users.",
      "Raised unit test coverage above 80% with XCTest across functional and edge-case suites, and reviewed team pull requests for logic flaws and standards compliance in an Agile/JIRA sprint environment.",
    ],
  },
  {
    company: "Wind River Environmental",
    location: "Norwell, MA",
    title: "Data Analyst Intern",
    dates: "May 2024 - Aug 2024",
    description: [
      "Leveraged Excel and the company database to clean over 25,000 customer records for improved reporting accuracy.",
      "Performed monthly analyses using Excel, visually categorizing customer behavior trends to inform management decisions.",
      "Utilized Microsoft Office tools to combine 15 training documents into a consolidated, user-friendly format for employee use.",
    ],
  },
  {
    company: "Code Ninjas",
    location: "Hingham, MA",
    title: "Instructor",
    dates: "Jun 2024 - Aug 2024",
    description: [
      "Mastered and delivered 4 in-depth course curricula to 40 kids over 6 weeks, fostering an engaging learning environment.",
      "Taught topics about video game modding using MCreator and Minecraft Education Edition, inspiring creativity and technical skills.",
    ],
  },
  {
    company: "Worcester Polytechnic Institute's Research Lab",
    location: "Worcester, MA",
    title: "Research Assistant",
    dates: "Oct 2023 - May 2024",
    description: [
      "Examined the usage of large language models and the OpenAI API to generate customized inputs to create a more automated fuzzing process, expanding code coverage of 5 popular programming languages up to 90%.",
      "Recreated popular usages of symbolic and concolic execution based on recently published papers within Python, experimenting with this information to propose applications of predictive modeling to the process to expand code coverage.",
    ],
  },
  {
    company: "Assistments",
    location: "Worcester, MA",
    title: "Research Assistant",
    dates: "Sep 2023 - May 2024",
    description: [
      "Created training datasets for a model to use object recognition of different math problem types.",
      "Utilized the makesense.ai platform to markup math problems using 1 of 5 defined categories for training data purposes.",
      "Supported a platform used by 130,000 students and 3,000 teachers monthly to gather unique datasets for machine learning research.",
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
            location={exp.location}
            title={exp.title}
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
