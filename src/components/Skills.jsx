import React from 'react';
import { SearchCode } from 'lucide-react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";

const Skills = () => {
  const skills = [
    {
      name: "HTML",
      logo: <FaHtml5 size={56} />,
      level: "Moderate",
      count: 70,
    },
    {
      name: "CSS",
      logo: <FaCss3Alt size={56} />,
      level: "Moderate",
      count: 70,
    },
    {
      name: "JavaScript",
      logo: <FaJs size={56} />,
      level: "Beginner",
      count: 70,
    },
    {
      name: "React",
      logo: <FaReact size={56} />,
      level: "Beginner",
      count: 60,
    },
    {
      name: "Testing",
      logo: <SearchCode size={56} />,
      level: "Intermediate",
      count: 50,
    },
  ];

  return (
    <section id="skills" className="py-10 bg-gray-800 relative">
      <div className="mt-8 text-gray-100 text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Skills</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My knowledge</p>
        <div className="flex items-center justify-center mt-12 gap-8 flex-wrap">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="border-2 group border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-4 rounded-xl"
            >
              <p className="text-xl mb-2">{skill.name}</p>
              <div
                style={{
                  background: `conic-gradient(rgb(8,145,170) ${skill.count}%,#ddd ${skill.count}%)`,
                }}
                className="w-32 h-32 flex items-center justify-center rounded-full"
              >
                <div className="text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-cyan-600 transition-colors duration-300">
                  {skill.logo}
                </div>
              </div>
              <p className="text-xl mt-3">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
