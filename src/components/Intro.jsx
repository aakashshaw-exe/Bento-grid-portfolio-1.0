import React from 'react';
import { User, Twitter, Github, Linkedin, Mail, Download, Zap } from 'lucide-react';

const Intro = () => {
  return (
    <section id="intro" className="mb-8">
      <div className="grid grid-cols-4 grid-rows-4 gap-4 h-[600px]">
        <div className="col-span-2 row-span-2 bg-gradient-to-bl from-[#0A0A0A] via-[#151515] to-[#050505] rounded-2xl p-8 flex flex-col justify-center">
          <h1 className="text-4xl font-bold mb-4">Aakash Shaw — Frontend Developer</h1>
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <Zap className="w-6 h-6" />
          </div>
        </div>
        <div className="col-span-2 row-span-4 bg-gray-200 rounded-2xl overflow-hidden">
          <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
            {/* <User size={80} className="text-white" /> */}
            <img
              src="/user2.jpg"
              alt="User"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="col-span-2 row-span-1 bg-gradient-to-bl from-[#171717] via-[#101010] to-black rounded-2xl p-6">
          <div className="flex items-center space-x-2 mb-2">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span className="text-sm text-gray-400">Available for work</span>
          </div>
          <h2 className="text-xl font-semibold">Hi, I'm Aakash</h2>
          <p className="text-gray-400 text-sm">A digital design geek with a knack for transforming online experiences.</p>
        </div>
        <div className="col-span-1 row-span-1 bg-gradient-to-bl from-[#0A0A0A] via-[#151515] to-[#050505] rounded-2xl p-4">
          <div className="grid grid-cols-2 gap-2 h-full">
            <div className="bg-gradient-to-br from-[#080808] via-[#161616] to-[#030303] rounded-lg flex items-center justify-center border border-gray-900 shadow-lg hover:bg-gradient-to-br hover:from-[#0C0C0C] hover:via-[#1C1C1C] hover:to-[#070707] transition-colors cursor-pointer">
              <Twitter size={20} className="text-gray-200" />
            </div>
            <div className="bg-gradient-to-br from-[#080808] via-[#161616] to-[#030303] rounded-lg flex items-center justify-center border border-gray-900 shadow-lg hover:bg-gradient-to-br hover:from-[#0C0C0C] hover:via-[#1C1C1C] hover:to-[#070707] transition-colors cursor-pointer">
              <Github size={20} className="text-gray-200" />
            </div>
            <div className="bg-gradient-to-br from-[#080808] via-[#161616] to-[#030303] rounded-lg flex items-center justify-center border border-gray-900 shadow-lg hover:bg-gradient-to-br hover:from-[#0C0C0C] hover:via-[#1C1C1C] hover:to-[#070707] transition-colors cursor-pointer">
              <Linkedin size={20} className="text-gray-200" />
            </div>
            <div className="bg-gradient-to-br from-[#080808] via-[#161616] to-[#030303] rounded-lg flex items-center justify-center border border-gray-900 shadow-lg hover:bg-gradient-to-br hover:from-[#0C0C0C] hover:via-[#1C1C1C] hover:to-[#070707] transition-colors cursor-pointer">
              <Mail size={20} className="text-gray-200" />
            </div>
          </div>
        </div>
        <div className="col-span-1 row-span-1 bg-gradient-to-bl from-[#0A0A0A] via-[#151515] to-[#050505] rounded-2xl p-4 flex items-center justify-center cursor-pointer hover:scale-105 transition-transform">
          <div className="text-center">
            <Download size={24} className="mx-auto mb-1" />
            <span className="text-xs font-medium">Download CV</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;