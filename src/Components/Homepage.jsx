import React from 'react';
import Card from './Reusables/Card'; 
import SkillCube from './Reusables/Cube/SkillCube'
import SkillsLanguage from './Reusables/SkillsLanguage';
import ProfessionalPicture from '../Img/Professional Picture.jpg';

function Homepage() {
  return (
    <section className="flex flex-col items-center bg-[rgb(85,17,0)] text-[rgb(255,233,209)] p-4">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Welcome to Dalton's Website</h1>
      <div className="grid grid-cols-1 gap-[50px] px-4 md:px-20">
        {/* Card 1 */}
        <Card title="Hi, I'm Dalton!">
          <div className="flex flex-col md:flex-row items-start">
            <div className="flex-1">
              <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-500 mb-10 ml-4">
                Software Developer
              </h2>
              <a href="contact" className="flex items-center ml-5 mt-20">
                <div className="bg-gradient-to-r from-orange-400 to-red-500 rounded-md flex justify-center items-center transition duration-300 px-4 py-2">
                  Contact Me
                </div>
              </a>
            </div>
            <div className="flex-1 flex justify-center md:ml-10 md:-mt-10 mt-5">
              <img
                src={ProfessionalPicture}
                alt="Professional"
                className="rounded-full w-[300px] h-[300px] object-cover shadow-lg"
              />
            </div>
          </div>
        </Card>

        {/* Card 2 */}
        <Card title="Who am I" delay={0.5}>
          <div className="flex flex-col md:flex-row justify-center items-center">
            <div className="w-full md:w-1/2 pr-4">
              <p className="text-[24px] ml-5 mr-5 mb-5 md:mr-20">
                I'm a Computer Science and AI, and Math student at Northeastern University, passionate about leveraging technology in 
                healthcare and education. My goal is to use my skills to make a positive impact in our society and my community, as well
                as pass my knowledge onto others.
              </p>
            </div>
            <div className="w-full md:w-1/2 flex items-center justify-center relative">
              <a href="about">
                <h1 className="text-[72px] font-bold animate-gradient-text text-center">
                  Learn more about me!
                </h1>
              </a>
            </div>
          </div>
        </Card>

        {/* Card 3 */}
        <Card title="My Skills/Favorite Technologies">
          <div className="flex flex-col md:flex-row items-start">
            {/* Skills Language Section */}
            <div className="flex-1 pb-[5rem]">
              <div className="mx-auto pt-0 md:pt-0 grid grid-cols-1 gap-1px items-center">
                <div className="w-full md:w-[1/2] ml-10">
                  <SkillsLanguage
                    skills={[
                      { name: 'Java: 5 years', level: 'w-[100%]', color: 'bg-[#ff5733]' },
                      { name: 'Python: 4 years', level: 'w-[80%]', color: 'bg-[#f9a825]' },
                      { name: 'HTML/CSS/JS: 2 years', level: 'w-[40%]', color: 'bg-[#8e44ad]' },
                      { name: 'React: 1.5 years', level: 'w-[30%]', color: 'bg-[#4caf50]' },
                      { name: 'C: 1.5 years', level: 'w-[30%]', color: 'bg-[#3b3f42]' },
                      { name: 'TypeScript: 1 year', level: 'w-[20%]', color: 'bg-[#00bcd4]' }
                    ]}
                  />
                </div>
              </div>
            </div>
            {/* SkillCube Section */}
            <div className="flex-1 flex justify-center mt-5 md:mt-0">
              <SkillCube />
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}

export default Homepage;
