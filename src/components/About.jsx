// import React from 'react';
// import { MapPin, Code } from 'lucide-react';
// import Skills from './Skills';

// const About = ({ skills }) => {
//   return (
//     <section id="about" className="mb-8">
//       <div className="grid grid-cols-3 gap-4 h-[400px]">
//         <div className="col-span-2 bg-gray-900 rounded-2xl p-8">
//           <h2 className="text-2xl font-bold mb-6">About Me</h2>
//           <p className="text-gray-300 leading-relaxed mb-6">
//             Hello! I am a software developer with a passion for technology and software development.
//             I work with technologies like TypeScript, React.js, Next.js, and React Native to build web
//             and mobile applications. I also have a strong interest in modern design principles and
//             artificial intelligence, which I integrate into my projects whenever possible.
//           </p>
//           <div className="grid grid-cols-2 gap-4">
//             <div className="flex items-center space-x-3">
//               <MapPin size={16} className="text-blue-400" />
//               <span className="text-sm">Kolkata, India</span>
//             </div>
//             <div className="flex items-center space-x-3">
//               <Code size={16} className="text-green-400" />
//               <span className="text-sm">3+ Years Experience</span>
//             </div>
//           </div>
//         </div>
//         <skills/>
//       </div>
//     </section>
//   );
// };

// export default About;

// 

import React from 'react';
import { MapPin } from 'lucide-react'; // Removed Code icon since we're removing experience
import Skills from './Skills';

const About = ({ skills }) => {
  return (
    <section id="about" className="mb-8">
      <div className="grid grid-cols-3 gap-4 h-[400px]">
        {/* About Me: Left side, 2/3 width */}
        <div className="col-span-2 bg-gradient-to-bl from-[#171717] via-[#101010] to-black rounded-2xl p-8 flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-6">About Me</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            Hello! I’m a fresh graduate and aspiring software developer, eager to step into the tech world and seek opportunities to grow. I have a solid foundation in web development, DSA, OOPs, and MySQL, gained through my academic journey and hands-on learning. I’ve built several personal projects using HTML, CSS, JavaScript, and React.js, which have deepened my understanding of core concepts and best practices.
            <br /><br />
            I’m passionate about learning new technologies, exploring AI, and tackling coding challenges. As I begin my career, I’m excited to take on opportunities that allow me to contribute, learn, and develop into a skilled and impactful developer.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center space-x-3">
              <MapPin size={16} className="text-blue-400" />
              <span className="text-sm">Kolkata, India</span>
            </div>
            {/* Removed the experience section since you're a fresh graduate */}
          </div>
        </div>
        {/* Skills: Right side, 1/3 width */}
        <Skills skills={skills} />
      </div>
    </section>
  );
};

export default About;