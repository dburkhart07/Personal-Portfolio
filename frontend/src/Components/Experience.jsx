import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ExperienceCard from './Reusables/ExperienceCard'; // Assuming you have this component
import ExpImg from '../Img/experience_bg.svg'; // Background image for experience section

const Experience = () => {
  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || "http://localhost:5000";
  const [experience, setExperience] = useState([]); // State to store experience data
  const [openIndex, setOpenIndex] = useState(null); // State to store which card is open

  useEffect(() => {
    // Fetch experience data from the backend
    axios.get(`${API_BASE_URL}/api/experience`)
      .then((response) => {
        const fetchedExperience = response.data.map((exp) => ({
          company: exp.company,
          dates: exp.dates,
          description: exp.description,
          delay: exp.delay,
        }));
        setExperience(fetchedExperience); // Update state with fetched data
      })
      .catch((error) => console.error('Error fetching experience data:', error));
  }, []);

  const toggleCard = (index) => {
    // Toggle card visibility: if the clicked card is already open, close it; otherwise, open it.
    setOpenIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <div className="bg-[rgb(85,17,0)] text-[rgb(255,233,209)] pt-[3rem] px-[1rem] sm:pl-[2rem] md:pl-[4rem] lg:pl-[6rem] md:pt-[4rem] pb-[10rem]">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10 text-center md:text-left">
        Work Experience
      </h1>
      <div className="flex flex-col lg:flex-row">
        {/* Left Column - Experience Cards */}
        <div className="w-full lg:w-1/2">
          {/* Scrollable container for experiences */}
          <div className="h-[30rem] overflow-hidden space-y-4">
            {/* Map through experiences and render each card */}
            {experience.map((exp, index) => (
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
        <div className="relative w-full lg:w-1/2 mt-8 lg:mt-0 flex justify-center items-center"
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
