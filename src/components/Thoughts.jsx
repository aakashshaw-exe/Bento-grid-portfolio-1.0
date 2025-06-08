import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Thoughts = () => {
  const thoughtsData = [
    {
      id: 'interview-experience',
      title: 'My First Tech Interview Experience',
      shortDescription: 'Navigating the challenges of a tech interview and lessons learned from the process.',
      fullDescription: 'In 2024, I had my first tech interview with a startup. The process was intense, involving a coding challenge on DSA, a system design round, and a behavioral interview. I prepared by practicing on LeetCode and revisiting core concepts like React and Node.js. One key lesson I learned was the importance of clear communication—explaining my thought process helped the interviewer understand my approach, even when I stumbled on a problem. I also realized that staying calm under pressure is crucial. After the interview, I reflected on my performance and identified areas for improvement, like optimizing algorithms on the fly. Overall, it was a valuable experience that boosted my confidence and taught me how to handle high-stakes situations.',
      date: '3 months ago',
      borderColor: 'border-blue-500',
      dateColor: 'text-blue-400',
    },
    {
      id: 'hackathon-experience',
      title: 'Winning My First Hackathon',
      shortDescription: 'A thrilling journey of teamwork and innovation at a 24-hour hackathon.',
      fullDescription: 'In early 2024, I participated in a 24-hour hackathon with a team of three. We built "Gen-Travel," an AI-driven travel planner using React and Gemini AI. The challenge was managing time—coding under pressure while ensuring our app was functional by the deadline. I took the lead on the frontend, implementing a responsive UI with Tailwind CSS, while my teammates handled the backend and AI integration. We faced issues with API rate limits, but quick debugging saved the day. Our teamwork and presentation skills impressed the judges, and we won first place! The experience taught me the value of collaboration, time management, and staying focused under pressure. It was an unforgettable milestone in my journey as a developer.',
      date: '6 months ago',
      borderColor: 'border-green-500',
      dateColor: 'text-green-400',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % thoughtsData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + thoughtsData.length) % thoughtsData.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div id="thoughts" className="col-span-2">
      <div className="bg-gradient-to-bl from-[#0A0A0A] via-[#151515] to-[#050505] rounded-2xl p-4">
        <h3 className="text-lg font-semibold mb-4 text-white">My Experiences</h3>
        <div className="relative">
          {/* Carousel Slide */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {thoughtsData.map((thought) => (
                <div key={thought.id} className="min-w-full p-2">
                  <article className={`border-l-2 ${thought.borderColor} pl-4 bg-gradient-to-br from-[#080808] via-[#161616] to-[#030303] rounded-xl p-4 border border-gray-900 shadow-lg hover:bg-gradient-to-br hover:from-[#0C0C0C] hover:via-[#1C1C1C] hover:to-[#070707] transition-colors`}>
                    <h4 className="font-medium mb-1 text-white">{thought.title}</h4>
                    <p className="text-gray-200 text-sm mb-2">{thought.shortDescription}</p>
                    <span className={`block ${thought.dateColor} text-xs mb-3`}>{thought.date}</span>
                    <Link
                      to={`/thoughts/${thought.id}`}
                      className="inline-block bg-gray-800 text-gray-200 px-3 py-1 rounded-lg text-xs hover:bg-gray-700 transition-colors"
                    >
                      Read More
                    </Link>
                  </article>
                </div>
              ))}
            </div>
          </div>
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-gray-200 p-1 rounded-full hover:bg-gray-700 transition-colors"
          >
            ←
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-gray-200 p-1 rounded-full hover:bg-gray-700 transition-colors"
          >
            →
          </button>
          {/* Pagination Dots */}
          <div className="flex justify-center mt-4 space-x-2">
            {thoughtsData.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full ${
                  currentIndex === index ? 'bg-gray-200' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Thoughts;