// import React, { useState, useEffect } from 'react';
// import { User, Briefcase, MessageSquare, Mail, Clock, Coffee, MapPin } from 'lucide-react';
// import Sidebar from '../components/Sidebar';
// import Intro from '../components/Intro';
// import About from '../components/About';
// import Projects from '../components/Projects';
// import Hackathon from '../components/Hackathon';
// import Education from '../components/Education';
// import MiniProjects from '../components/MiniProjects';
// import Thoughts from '../components/Thoughts';
// // import Social from '../components/Social';
// import Contact from '../components/Contact';

// const Landing = () => {
//   const [activeSection, setActiveSection] = useState('intro');
//   const [currentTime, setCurrentTime] = useState(new Date());

//   useEffect(() => {
//     const timer = setInterval(() => setCurrentTime(new Date()), 1000);
//     return () => clearInterval(timer);
//   }, []);

//   useEffect(() => {
//     const handleScroll = () => {
//       const sections = ['intro', 'about', 'skills', 'projects', 'hackathon', 'education', 'thoughts', 'social', 'contact'];
//       const scrollPosition = window.scrollY + 100;

//       for (const section of sections) {
//         const element = document.getElementById(section);
//         if (element) {
//           const { offsetTop, offsetHeight } = element;
//           if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
//             setActiveSection(section);
//             break;
//           }
//         }
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const scrollToSection = (sectionId) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//       setActiveSection(sectionId);
//     }
//   };

//   const sidebarItems = [
//     { id: 'intro', label: 'Home', icon: User, desc: 'Working at the intersection of creative and digital design.' },
//     { id: 'about', label: 'About', icon: Coffee, desc: 'Get to know more about me and my background.' },
//     { id: 'projects', label: 'Works', icon: Briefcase, desc: "Selected projects I've worked on over the years." },
//     { id: 'thoughts', label: 'Thoughts', icon: MessageSquare, desc: 'Writings from my journey as a developer.' }, 
//     { id: 'contact', label: 'Contact', icon: Mail, desc: "Have a project in mind? Let's get connected!" }
//   ];

//   return (
//     <div className="min-h-screen bg-black text-white">
//       <Sidebar items={sidebarItems} currentTime={currentTime} activeSection={activeSection} scrollToSection={scrollToSection} />
//       <div className="ml-80 p-8">
//         <div className="max-w-7xl mx-auto">
//           <Intro />
//           <About />
//           <Projects />
//           <div className="mb-8">
//             <div className="grid grid-cols-4 gap-4 h-[350px]">
//                <Education />
//               <Hackathon />
//               {/* <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-6 flex flex-col justify-center items-center">
//                 <Clock className="w-8 h-8 mb-2" />
//                 <div className="text-lg font-mono">
//                   {currentTime.toLocaleTimeString('en-US', {
//                     hour: '2-digit',
//                     minute: '2-digit'
//                   })}
//                 </div>
//                 <div className="text-sm opacity-80">Local Time</div>
//               </div> */}
//             </div>
//           </div>
//           <div className="mb-8">
//             <div className="grid grid-cols-3 gap-4 h-[400px]">
//               <Thoughts />
//               {/* <MiniProjects /> */}
//               <Contact />
//             </div>
//           </div>
//           {/* <Social /> */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Landing;

import React, { useState, useEffect } from 'react';
import { User, Briefcase, MessageSquare, Mail, Clock, Coffee, MapPin } from 'lucide-react';
import Sidebar from '../components/Sidebar';
import Intro from '../components/Intro';
import About from '../components/About';
import Projects from '../components/Projects';
import Hackathon from '../components/Hackathon';
import Education from '../components/Education';
// import MiniProjects from '../components/MiniProjects';
import Thoughts from '../components/Thoughts';
// import Social from '../components/Social';
import Contact from '../components/Contact';

const Landing = () => {
  const [activeSection, setActiveSection] = useState('intro');
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['intro', 'about', 'skills', 'projects', 'hackathon', 'education', 'mini-projects', 'thoughts', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  const sidebarItems = [
    { id: 'intro', label: 'Home', icon: User, desc: 'Working at the intersection of creative and digital design.' },
    { id: 'about', label: 'About', icon: Coffee, desc: 'Get to know more about me and my background.' },
    { id: 'projects', label: 'Works', icon: Briefcase, desc: "Selected projects I've worked on over the years." },
    { id: 'thoughts', label: 'Thoughts', icon: MessageSquare, desc: 'Writings from my journey as a developer.' },
    { id: 'contact', label: 'Contact', icon: Mail, desc: "Have a project in mind? Let's get connected!" },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Sidebar items={sidebarItems} currentTime={currentTime} activeSection={activeSection} scrollToSection={scrollToSection} />
      <div className="ml-80 p-8">
        <div className="max-w-7xl mx-auto">
          <Intro />
          <About />
          <Projects />
          <div className="mb-8">
            <div className="grid grid-cols-4 gap-4 h-[350px]">
              <Education />
              <Hackathon />
            </div>
          </div>
          <div className="mb-8">
            <div className="grid grid-cols-3 gap-4">
              {/* <div id="mini-projects" className="col-span-3">
                <MiniProjects />
              </div> */}
              <div id="thoughts" className="col-span-2">
                <Thoughts />
              </div>
              <div id="contact" className="col-span-1">
                <Contact />
              </div>
            </div>
          </div>
          {/* <Social /> */}
        </div>
      </div>
    </div>
  );
};

export default Landing;