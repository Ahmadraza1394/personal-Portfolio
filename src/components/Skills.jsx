import React from "react";
import "./Skills.css";

const skills = [
  { name: "HTML", level: "100%", icon: "fab fa-html5" },
  { name: "CSS", level: "95%", icon: "fab fa-css3-alt" },
  { name: "Bootstrap", level: "92%", icon: "fab fa-bootstrap" },
  { name: "Tailwind CSS", level: "95%", icon: "fab fa-css3" },
  { name: "JavaScript", level: "90%", icon: "fab fa-js" },
  { name: "jQuery", level: "60%", icon: "fas fa-code" },
  { name: "ReactJS", level: "98%", icon: "fab fa-react" },
  { name: "NodeJS", level: "70%", icon: "fab fa-node-js" },
  { name: "ExpressJS", level: "70%", icon: "fas fa-server" },
  { name: "MongoDB", level: "65%", icon: "fas fa-database" },
];

const Skills = () => {
  return (
    <section className="skills-section p-8 bg-black text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          Skills
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="skills-card space-y-2 p-4 bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-1"
            >
              <div className="flex items-center space-x-2">
                <i className={`${skill.icon} skill-icon pulsate-bck `}></i>
                <h3 className="text-xl font-semibold">{skill.name}</h3>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                <div
                  className="skill-level h-4 rounded-full"
                  style={{ width: skill.level }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
