import React from "react";

// Pass skills as props or use defaults
const Skills = ({ skills }) => {
  const skillsList = skills || [
    's', 'html', 'css', 'javascript', 'react (1)', 'tailwind',
    'nodejs (1)', 'mongo-db (1)', 'mysql', 'git', 'github',
  ];

  // Duplicate skills for infinite scroll effect
  const extendedSkillsLeft = [...skillsList, ...skillsList];
  const extendedSkillsRight = [...skillsList.slice().reverse(), ...skillsList.slice().reverse()];

  return (
    <div className="h-full flex flex-col justify-center items-center bg-gradient-to-bl from-[#171717] via-[#101010] to-black rounded-2xl p-4 relative">
      <style>
        {`
          @keyframes scroll-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes scroll-right {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
          .animate-scroll-left {
            animation: scroll-left 15s linear infinite;
          }
          .animate-scroll-right {
            animation: scroll-right 15s linear infinite;
          }
        `}
      </style>

      {/* Background "SKILLS" text */}
      <h2 className="text-7xl font-bold text-white opacity-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none">
        SKILLS
      </h2>

      {/* Foreground content */}
      <div className="flex flex-col gap-6 w-full relative z-10">
        {/* Top Row: Left Scroll */}
        <div className="overflow-hidden w-full">
          <div className="flex animate-scroll-left gap-6 w-max">
            {extendedSkillsLeft.map((skill, index) => (
              <img
                key={`left-${index}`}
                src={`/${skill}.png`} // Fixed path to public/icons/
                alt={skill}
                className="w-20 h-20 object-contain"
                onError={(e) => (e.target.src = '/user2.jpg')}
              />
            ))}
          </div>
        </div>

        {/* Bottom Row: Right Scroll */}
        <div className="overflow-hidden w-full">
          <div className="flex animate-scroll-right gap-6 w-max">
            {extendedSkillsRight.map((skill, index) => (
              <img
                key={`right-${index}`}
                src={`/${skill}.png`} // Fixed path to public/icons/
                alt={skill}
                className="w-20 h-20 object-contain"
                onError={(e) => (e.target.src = '/user2.jpg')}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;