import React from 'react';
import { Trophy } from 'lucide-react';

const Hackathon = () => {
  return (
    <div id="hackathon" className="col-span-2 bg-gradient-to-bl from-[#0A0A0A] via-[#151515] to-[#050505] rounded-2xl p-6">
      <h3 className="text-lg font-semibold mb-4 flex items-center">
        <Trophy className="mr-2 w-5 h-5" />
        Hackathons
      </h3>
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <div>
           
            <div className="font-medium">SAP Hackfest 2025 - Regional Round</div>
            <div className="text-gray-400 text-sm">Held at NSEC, qualified for state level</div>
          </div>
          <div className="text-yellow-400 text-sm font-medium">Winner</div>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <div className="font-medium">HACK-O-NOVA 2024</div>
            <div className="text-gray-400 text-sm">Organized by Adamas University</div>
          </div>
          <div className="text-yellow-400 text-sm font-medium">2nd Place</div>
        </div>
        <div className="flex justify-between items-center">
          <div>
             <div className="font-medium">Internal Hackathon for SIH 2023</div>
            <div className="text-gray-400 text-sm">Smart India Hackathon</div>
          </div>
          <div className="text-yellow-400 text-sm font-medium">Winner</div>
        </div>
      </div>
    </div>
  );
};

export default Hackathon;