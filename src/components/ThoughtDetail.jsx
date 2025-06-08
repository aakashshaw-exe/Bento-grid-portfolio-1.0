import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ThoughtDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const thoughtsData = [
    {
      id: 'interview-experience',
      title: 'My First Tech Interview Experience',
      fullDescription: 'In 2024, I had my first tech interview with a startup. The process was intense, involving a coding challenge on DSA, a system design round, and a behavioral interview. I prepared by practicing on LeetCode and revisiting core concepts like React and Node.js. One key lesson I learned was the importance of clear communication—explaining my thought process helped the interviewer understand my approach, even when I stumbled on a problem. I also realized that staying calm under pressure is crucial. After the interview, I reflected on my performance and identified areas for improvement, like optimizing algorithms on the fly. Overall, it was a valuable experience that boosted my confidence and taught me how to handle high-stakes situations.',
      date: '3 months ago',
      dateColor: 'text-blue-400',
    },
    {
      id: 'hackathon-experience',
      title: 'Winning My First Hackathon',
      fullDescription: 'In early 2024, I participated in a 24-hour hackathon with a team of three. We built "Gen-Travel," an AI-driven travel planner using React and Gemini AI. The challenge was managing time—coding under pressure while ensuring our app was functional by the deadline. I took the lead on the frontend, implementing a responsive UI with Tailwind CSS, while my teammates handled the backend and AI integration. We faced issues with API rate limits, but quick debugging saved the day. Our teamwork and presentation skills impressed the judges, and we won first place! The experience taught me the value of collaboration, time management, and staying focused under pressure. It was an unforgettable milestone in my journey as a developer.',
      date: '6 months ago',
      dateColor: 'text-green-400',
    },
  ];

  const thought = thoughtsData.find((t) => t.id === id);

  if (!thought) {
    return <div className="text-white">Thought not found</div>;
  }

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-[#010103] via-[#0C1018] to-[#000000] text-white flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-gradient-to-bl from-[#0A0A0A] via-[#151515] to-[#050505] rounded-2xl p-6 relative">
        <button
          onClick={() => navigate('/')}
          className="absolute top-4 right-4 bg-gray-800 text-gray-200 p-2 rounded-full hover:bg-gray-700 transition-colors"
        >
          ✕
        </button>
        <h2 className="text-2xl font-bold mb-4">{thought.title}</h2>
        <span className={`block ${thought.dateColor} text-xs mb-4`}>{thought.date}</span>
        <p className="text-gray-200 text-sm leading-relaxed">{thought.fullDescription}</p>
      </div>
    </div>
  );
};

export default ThoughtDetail;