import React, { useEffect, useState } from 'react';

// Skills data
const skillsData = [
  { name: 'HTML', percentage: 95, color: 'bg-red-600' },
  { name: 'CSS', percentage: 95, color: 'bg-blue-600' },
  { name: 'JavaScript', percentage: 80, color: 'bg-yellow-500' },
  { name: 'Tailwind CSS', percentage: 90, color: 'bg-cyan-400' },
  { name: 'React.js', percentage: 80, color: 'bg-blue-500' },
  { name: 'MongoDB', percentage: 80, color: 'bg-green-600' },
  { name: 'MUI', percentage: 90, color: 'bg-purple-600' },
];

const Skills = () => {
  const [percentages, setPercentages] = useState(skillsData.map(skill => 0));

  useEffect(() => {
    const timeoutIds = percentages.map((_, index) =>
      setTimeout(() => {
        setPercentages(prev => {
          const newPercentages = [...prev];
          newPercentages[index] = skillsData[index].percentage;
          return newPercentages;
        });
      }, index * 500) // Delay each skill's animation
    );

    return () => timeoutIds.forEach(id => clearTimeout(id));
  }, []);

  return (
    <section id="Skills" className="py-20 bg-gray-100 w-full h-screen">
      <div className="container mx-auto px-4 w-4/5">
        <h2 className="text-4xl font-bold text-center mb-10">My Skills <span className="block h-1 w-24 bg-sky-400 mt-2 mx-auto rounded"></span></h2>
        <div className="space-y-8">
          {skillsData.map((skill, index) => (
            <div key={skill.name} className="flex items-center">
              <span className="w-1/4 text-lg font-semibold">{skill.name}</span>
              <div className="relative w-3/4 bg-gray-300 rounded-full h-5 overflow-hidden shadow-md">
                <div
                  className={`absolute h-full ${skill.color} rounded-full transition-all duration-700`}
                  style={{ width: `${percentages[index]}%` }}
                ></div>
              </div>
              <span className="ml-2">{percentages[index]}%</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
