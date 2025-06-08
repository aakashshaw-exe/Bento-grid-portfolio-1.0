// import React from 'react';

// const Contact = () => {
//   return (
//     <div id="contact" className="bg-gradient-to-bl from-[#0A0A0A] via-[#151515] to-[#050505] rounded-2xl p-6">
//       <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
//       <p className="text-sm mb-4 opacity-90">
//         Ready to bring your ideas to life? Let's create something amazing together.
//       </p>
//       <div className="space-y-3">
//         <button className="w-full bg-white text-black px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors">
//           Send Message
//         </button>
//         <div className="text-xs opacity-80">
//           <div>aakash.shaw@example.com</div>
//           <div>+91 98765 43210</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;
import React from 'react';

const Contact = () => {
  return (
    <div id="contact" className="bg-gradient-to-bl from-[#0A0A0A] via-[#151515] to-[#050505] rounded-2xl p-4">
      <h3 className="text-lg font-semibold mb-4 text-white">Get In Touch</h3>
      <p className="text-xs mb-4 text-gray-200 opacity-90">
        Ready to bring your ideas to life? Let's create something amazing together.
      </p>
      <div className="space-y-3">
        {/* Contact Form */}
        <div className="space-y-2">
          <div>
            <label htmlFor="name" className="block text-xs font-medium text-gray-400 mb-1">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="w-full bg-gray-800 text-gray-200 text-sm px-4 py-2 rounded-lg border border-gray-700 focus:outline-none focus:border-gray-500 hover:border-gray-600 transition-colors"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-xs font-medium text-gray-400 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full bg-gray-800 text-gray-200 text-sm px-4 py-2 rounded-lg border border-gray-700 focus:outline-none focus:border-gray-500 hover:border-gray-600 transition-colors"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-xs font-medium text-gray-400 mb-1">
              Message
            </label>
            <textarea
              id="message"
              placeholder="Write your message"
              rows="3"
              className="w-full bg-gray-800 text-gray-200 text-sm px-4 py-2 rounded-lg border border-gray-700 focus:outline-none focus:border-gray-500 hover:border-gray-600 transition-colors resize-none"
            />
          </div>
          <button className="w-full bg-white text-black px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors">
            Send Message
          </button>
        </div>
        {/* Contact Info */}
        <div className="text-xs text-gray-400 opacity-80">
          <div>aakashshaw2001.exe@gmail.com</div>
          <div>+91 8981173671</div>
        </div>
      </div>
    </div>
  );
};

export default Contact;