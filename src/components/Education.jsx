import React from 'react';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  return (
    <div id="education" className="col-span-2 bg-gradient-to-bl from-[#0A0A0A] via-[#151515] to-[#050505] rounded-2xl p-6">
      <h3 className="text-lg font-semibold mb-4 flex items-center">
        <GraduationCap className="mr-2 w-5 h-5" />
        Education
      </h3>
      <div className="space-y-4">
        {/* B.Tech */}
        <div>
          <div className="flex justify-between items-center">
            <div className="font-medium">B.Tech in Information Technology</div>
            <div className="text-gray-400 text-sm">Aug 2021 - July 2025</div>
          </div>
          <div className="text-gray-400 text-sm">Netaji Subhash Engineering College, Kolkata</div>
          <div className="text-blue-400 text-sm mt-1">CGPA: 8.22 (Till 7th Sem)</div>
        </div>
        {/* 12th Grade */}
        <div>
          <div className="flex justify-between items-center">
            <div className="font-medium">Higher Secondary (PCM)</div>
            <div className="text-gray-400 text-sm">2020</div>
          </div>
          <div className="text-gray-400 text-sm">St. Thomas Day School</div>
          <div className="text-blue-400 text-sm mt-1">Percentage: 73.33%</div>
        </div>
        {/* 10th Grade */}
        <div>
          <div className="flex justify-between items-center">
            <div className="font-medium">Secondary (PCM)</div>
            <div className="text-gray-400 text-sm">2018</div>
          </div>
          <div className="text-gray-400 text-sm">St. Thomas Day School</div>
          <div className="text-blue-400 text-sm mt-1">Percentage: 82%</div>
        </div>
      </div>
    </div>
  );
};

export default Education;