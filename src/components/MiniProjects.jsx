import React from 'react';

const MiniProjects = () => {
  const miniProjects = [
    {
      title: 'WEATHER WIZ',
      type: 'Web',
      description: 'A weather app with real-time data using OpenWeather API and React.',
      tech: ['React', 'API', 'Tailwind CSS'],
      status: 'Live',
      year: '2024',
    },
    {
      title: 'TODO MASTER',
      type: 'Web',
      description: 'A task management app with local storage and drag-and-drop.',
      tech: ['React', 'LocalStorage'],
      status: 'Live',
      year: '2024',
    },
    {
      title: 'CALC PRO',
      type: 'Web',
      description: 'A responsive calculator app built with vanilla JavaScript.',
      tech: ['JavaScript', 'HTML', 'CSS'],
      status: 'Completed',
      year: '2023',
    },
    {
      title: 'QUIZ WHIZ',
      type: 'Web',
      description: 'A quiz app with dynamic questions and scoring using React.',
      tech: ['React', 'JavaScript'],
      status: 'Completed',
      year: '2023',
    },
  ];

  return (
    <div className="col-span-2">
      <div className="bg-gradient-to-bl from-[#0A0A0A] via-[#151515] to-[#050505] rounded-2xl p-4">
        <h2 className="text-2xl font-bold mb-4 text-white">Mini Projects</h2>
        <div className="grid grid-cols-2 grid-rows-2 gap-4">
          {miniProjects.map((project, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#080808] via-[#161616] to-[#030303] rounded-xl p-4 border border-gray-900 shadow-lg hover:bg-gradient-to-br hover:from-[#0C0C0C] hover:via-[#1C1C1C] hover:to-[#070707] transition-colors"
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <h3 className="text-sm font-semibold text-white">{project.title}</h3>
                  <span className="text-gray-400 text-xs">• {project.type}</span>
                </div>
                <span className="text-gray-400 text-xs">{project.year}</span>
              </div>
              <p className="text-gray-200 text-xs mb-2">{project.description}</p>
              <div className="flex flex-wrap gap-1">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-gray-800 text-gray-200 px-2 py-0.5 text-xs rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MiniProjects;