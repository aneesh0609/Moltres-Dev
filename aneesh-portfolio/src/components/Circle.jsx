import React from 'react';
import { User } from 'lucide-react';

const CircleMenu = () => {
  return (
    <div className="relative w-64 h-64 mx-auto my-10 px-4 sm:px-0 max-w-xs sm:max-w-none">
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-8px); }
          }
          .animate-float {
            animation: float 2s ease-in-out infinite;
          }
          .delay-200 { animation-delay: 0.3s; }
          .delay-400 { animation-delay: 0.4s; }
          .delay-600 { animation-delay: 0.6s; }
          .delay-800 { animation-delay: 0.8s; }
        `}
      </style>

      {/* Outer Circle Background */}
      <div className="w-full h-full rounded-full bg-[#0d0d12] absolute inset-0 z-0"></div>

      {/* Center User Icon */}
      <div className="absolute w-32 h-32 rounded-full bg-white flex items-center justify-center left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(0,0,0,0.3)] overflow-hidden">
  <img
    src="/me.jpeg"
    className="w-full h-full object-cover rounded-full"
    alt="Coder"
  />
</div>


      {/* Floating Image Buttons */}
      <button className="absolute animate-float w-12 h-12 bg-white rounded-full overflow-hidden flex items-center justify-center left-1/2 top-[-28px] transform -translate-x-1/2 z-20 shadow-md">
        <img src="https://www.pngfind.com/pngs/m/136-1363736_express-js-icon-png-transparent-png.png" className="w-full h-full object-contain" />
      </button>

      <button className="absolute animate-float delay-200 w-12 h-12 bg-white rounded-full overflow-hidden flex items-center justify-center right-[-28px] top-[20%] z-20 shadow-md">
        <img src="https://cdn.freebiesupply.com/logos/thumbs/2x/nodejs-1-logo.png" alt="icon2" className="w-full h-full object-contain" />
      </button>

      <button className="absolute animate-float delay-400 w-12 h-12 bg-white rounded-full overflow-hidden flex items-center justify-center right-[-28px] bottom-[20%] z-20 shadow-md">
        <img src="https://www.pngfind.com/pngs/m/685-6854994_react-logo-no-background-hd-png-download.png" alt="icon3" className="w-full h-full object-contain" />
      </button>

      <button className="absolute animate-float delay-600 w-12 h-12 bg-white rounded-full overflow-hidden flex items-center justify-center left-[-28px] bottom-[20%] z-20 shadow-md">
        <img src="https://upload.wikimedia.org/wikipedia/commons/d/dc/Javascript-shield.png" alt="icon4" className="w-full h-full object-contain" />
      </button>

      <button className="absolute animate-float delay-800 w-12 h-12 bg-white rounded-full overflow-hidden flex items-center justify-center left-[-28px] top-[20%] z-20 shadow-md">
        <img src="https://www.mongodb.design/favicon.ico" alt="icon5" className="w-full h-full object-contain" />
      </button>
    </div>
  );
};

export default CircleMenu;
