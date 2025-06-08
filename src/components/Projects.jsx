// import React from 'react';

// const Projects = () => {
//   const projects = [
//     {
//       title: 'JOB-GENIE',
//       type: 'Web',
//       description: 'An ongoing MERN stack project. Built a Chrome extension to scrape and organize job descriptions, integrated Gemini AI for resume analysis, and created an ATS-friendly resume builder.',
//       tech: ['MongoDB', 'Express.js', 'React', 'Node.js'],
//       status: 'Ongoing',
//       year: '2025'
//     },
//     {
//       title: 'GEN-TRAVEL - AI Travel Planner',
//       type: 'Web',
//       description: 'Built an AI-driven travel planner using React.js and Gemini AI for personalized itineraries. Features Google OAuth, Firebase, and responsive UI with Tailwind CSS and React Router.',
//       tech: ['React.js', 'Tailwind CSS', 'Firebase'],
//       status: 'Live',
//       year: '2024'
//     },
//     {
//       title: 'JOURNEY JET',
//       type: 'Web',
//       description: 'Created a car rental app with React.js, using Context API for state management and Tailwind CSS for responsive, mobile-first UI design.',
//       tech: ['React.js', 'Tailwind CSS'],
//       status: 'Live',
//       year: '2024'
//     }
//   ];

//   return (
//     <section id="projects" className="mb-8">
//       <div className="bg-gray-900 rounded-2xl p-8">
//         <h2 className="text-2xl font-bold mb-6">Projects</h2>
//         <div className="space-y-4">
//           {projects.map((project, index) => (
//             <div key={index} className="bg-gray-800 rounded-xl p-6 hover:bg-gray-750 transition-colors">
//               <div className="flex items-start justify-between mb-3">
//                 <div className="flex items-center space-x-3">
//                   <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
//                   <h3 className="text-lg font-semibold">{project.title}</h3>
//                   <span className="text-gray-400 text-sm">• {project.type}</span>
//                 </div>
//                 <span className="text-gray-400 text-sm">{project.year}</span>
//               </div>
//               <p className="text-gray-400 text-sm mb-3">{project.description}</p>
//               <div className="flex flex-wrap gap-2">
//                 {project.tech.map((tech, techIndex) => (
//                   <span key={techIndex} className="bg-gray-700 text-gray-300 px-2 py-1 text-xs rounded">
//                     {tech}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;

import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'JOB-GENIE',
      type: 'Web',
      description: 'An ongoing MERN stack project. Built a Chrome extension to scrape and organize job descriptions, integrated Gemini AI for resume analysis, and created an ATS-friendly resume builder.',
      tech: ['MongoDB', 'Express.js', 'React', 'Node.js'],
      status: 'Ongoing',
      year: '2025'
    },
    {
      title: 'GEN-TRAVEL - AI Travel Planner',
      type: 'Web',
      description: 'Built an AI-driven travel planner using React.js and Gemini AI for personalized itineraries. Features Google OAuth, Firebase, and responsive UI with Tailwind CSS and React Router.',
      tech: ['React.js', 'Tailwind CSS', 'Firebase'],
      status: 'Live',
      year: '2024'
    },
    {
      title: 'JOURNEY JET',
      type: 'Web',
      description: 'Created a car rental app with React.js, using Context API for state management and Tailwind CSS for responsive, mobile-first UI design.',
      tech: ['React.js', 'Tailwind CSS'],
      status: 'Live',
      year: '2024'
    }
  ];

  return (
    <section id="projects" className="mb-8">
      <div className="bg-gradient-to-bl from-[#0A0A0A] via-[#151515] to-[#050505] rounded-2xl p-8">
        <h2 className="text-2xl font-bold mb-6 text-white">Projects</h2>
        <div className="space-y-4">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-gradient-to-br from-[#080808] via-[#161616] to-[#030303] rounded-xl p-6 border border-gray-900 shadow-lg hover:bg-gradient-to-br hover:from-[#0C0C0C] hover:via-[#1C1C1C] hover:to-[#070707] transition-colors"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                  <span className="text-gray-400 text-sm">• {project.type}</span>
                </div>
                <span className="text-gray-400 text-sm">{project.year}</span>
              </div>
              <p className="text-gray-200 text-sm mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="bg-gray-800 text-gray-200 px-2 py-1 text-xs rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;