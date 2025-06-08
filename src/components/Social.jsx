import React from 'react';
import { Github, Linkedin, Twitter, MessageSquare, Mail, Heart } from 'lucide-react';

const Social = () => {
  return (
    <section id="social" className="mb-8">
      <div className="grid grid-cols-6 gap-4 h-[120px]">
        <div className="bg-gray-900 rounded-2xl p-4 flex items-center justify-center hover:bg-gray-800 transition-colors cursor-pointer">
          <Github size={32} />
        </div>
        <div className="bg-blue-600 rounded-2xl p-4 flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
          <Linkedin size={32} />
        </div>
        <div className="bg-gray-900 rounded-2xl p-4 flex items-center justify-center hover:bg-gray-800 transition-colors cursor-pointer">
          <Twitter size={32} />
        </div>
        <div className="bg-purple-600 rounded-2xl p-4 flex items-center justify-center hover:bg-purple-700 transition-colors cursor-pointer">
          <MessageSquare size={32} />
        </div>
        <div className="bg-green-600 rounded-2xl p-4 flex items-center justify-center hover:bg-green-700 transition-colors cursor-pointer">
          <Mail size={32} />
        </div>
        <div className="bg-red-600 rounded-2xl p-4 flex items-center justify-center hover:bg-red-700 transition-colors cursor-pointer">
          <Heart size={32} />
        </div>
      </div>
    </section>
  );
};

export default Social;