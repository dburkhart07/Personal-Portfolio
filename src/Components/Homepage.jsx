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
        <Card title="Who am I (link to the about me)" delay={0.5}>
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 pr-4">
              <p className="ml-5 mr-5 md:mr-20">
                This is a sample text for the second card. You can talk about your educational background and relevant coursework that has shaped your career path.
              </p>
            </div>
            <div className="w-full md:w-1/2">
              {/* Image goes here or something */}
            </div>
          </div>
        </Card>

        {/* Card 3 */}
        <Card title="My Skills">
          <div className="flex flex-col md:flex-row items-start">
            <div className="pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#09101a]">  
              <div className = "w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center">
                <div>
                    <SkillsLanguage 
                        skill1 = "HTML"
                        skill2 = "CSS" 
                        skill3 = "JavaScript" 
                        level1 = "w-[91%]" 
                        level2 = "w-[88%]" 
                        level3 = "w-[80%]"/>
                </div>
                <div>
                    <SkillsLanguage 
                        skill1 = "React Js"
                        skill2 = "Next Js" 
                        skill3 = "TypeScript" 
                        level1 = "w-[81%]" 
                        level2 = "w-[78%]" 
                        level3 = "w-[60%]"/>
                </div>
              </div>
            </div>
            <div className="flex-1 flex justify-center md:ml-10 md:-mt-10 mt-5">
              <SkillCube />
            </div>
          </div>
        </Card>

        {/* Card 4 */}
        <Card title="Card Title 4" delay={1.5}>
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 pr-4">
              <p className="ml-5 mr-5 md:mr-20">
                This is a sample text for the fourth card. Discuss your interests outside of work or school, and how they have shaped you.
              </p>
            </div>
            <div className="w-full md:w-1/2">
              {/* Image goes here or something */}
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}

export default Homepage;
