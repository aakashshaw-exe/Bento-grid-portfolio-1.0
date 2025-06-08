
// import React, { useEffect, useRef } from 'react';


// const Sidebar = ({ items, currentTime, activeSection, scrollToSection }) => {
//   return (
//     <div className="fixed left-0 top-0 h-full w-80 bg-black p-6 z-10 overflow-y-auto shadow-lg">
//       <div className="flex flex-col h-full justify-start">
//         {/* Time and Location */}
//         <div className="mb-3">
//           <div className="text-xl font-mono tracking-wide">
//             {currentTime.toLocaleTimeString('en-US', {
//               hour: '2-digit',
//               minute: '2-digit',
//               second: '2-digit',
//               hour12: true
//             })}
//           </div>
//           <div className="text-gray-400 text-xs mt-1">Kolkata, West Bengal</div>
//         </div>

//         <div className="mb-3">
//             <img
//       src="/cloud1.jpg"       
//       alt="cloud"
//       className="w-full max-h-3/4"
//     />
//         </div>

//         {/* Navigation */}
//         <nav className="space-y-1 flex-1">
//           {items.map((item) => {
//             const Icon = item.icon;
//             return (
//               <button
//                 key={item.id}
//                 onClick={() => scrollToSection(item.id)}
//                 className={`w-full text-left p-3 rounded-xl transition-all duration-200 ${
//                   activeSection === item.id
//                     ? 'bg-gradient-to-r from-gray-800 to-gray-700 border border-gray-600 shadow-sm'
//                     : 'hover:bg-gray-900'
//                 }`}
//               >
//                 <div className="flex items-center space-x-3 mb-1">
//                   <Icon size={20} className={activeSection === item.id ? 'text-blue-400' : 'text-gray-400'} />
//                   <span className="font-medium">{item.label}</span>
//                 </div>
//                 <p className="text-gray-400 text-xs leading-tight">{item.desc}</p>
//               </button>
//             );
//           })}
//         </nav>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;


import React from 'react';

const Sidebar = ({ items, currentTime, activeSection, scrollToSection }) => {
  return (
    <div className="fixed left-0 top-0 w-80 bg-black p-6 z-10 shadow-lg">
      <div className="flex flex-col justify-start">
        {/* Time and Location */}
        <div className="mb-3">
          <div className="text-xl font-mono tracking-wide">
            {currentTime.toLocaleTimeString('en-US', {
              hour: '2-digit',
              minute: '2-digit',
              second: '2-digit',
              hour12: true,
            })}
          </div>
          <div className="text-gray-400 text-xs mt-1">Kolkata, West Bengal</div>
        </div>

        <div className="mb-3">
          <img
            src="/cloud1.jpg"
            alt="cloud"
            className="w-full max-h-96 object-cover rounded-lg"
          />
        </div>

        {/* Navigation */}
        <nav className="space-y-1">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-full text-left p-3 rounded-xl transition-all duration-200 ${
                  activeSection === item.id
                    ? 'bg-gradient-to-r from-gray-800 to-gray-700 border border-gray-600 shadow-sm'
                    : 'hover:bg-gray-900'
                }`}
              >
                <div className="flex items-center space-x-3 mb-1">
                  <Icon size={20} className={activeSection === item.id ? 'text-blue-400' : 'text-gray-400'} />
                  <span className="font-medium">{item.label}</span>
                </div>
                <p className="text-gray-400 text-xs leading-tight">{item.desc}</p>
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;