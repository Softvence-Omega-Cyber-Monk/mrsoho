import React from 'react';
import cludinary from '../assets/cludinary.png';

// Custom SVG for the green success checkmark (simulating a common icon library)
const SuccessCheckmark: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-8 h-8 text-green-500"  // Reduced icon size for smaller height
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="none"
  >
    {/* Background Circle */}
    <circle cx="12" cy="12" r="10" className="text-green-200" fill="currentColor" />
    {/* Checkmark Path */}
    <path
      d="M16.142 8.572a.5.5 0 01.707.707l-6.5 6.5a.5.5 0 01-.707 0l-3.5-3.5a.5.5 0 11.707-.707L9.642 14l5.8-5.8a.5.5 0 01.707 0z"
      className="text-white"
      fill="white"
    />
    {/* Outer outline for the checkmark-in-circle effect */}
    <path
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"
      className="text-green-500"
      fill="currentColor"
    />
  </svg>
);

// Simplified Cloudflare Logo SVG (Cloud and Star/Sunburst)
const CloudflareLogo: React.FC = () => (
  <div className="flex items-center space-x-1">
    {/* Cloud Shape */}
    <img src={cludinary} alt="" />
  </div>
);

const App: React.FC = () => {
  return (
    <div className="flex items-center justify-center mx-auto p-4"> 
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-200 gap-6"> 

        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          
        
          <div className="flex items-center space-x-2 mb-4 sm:mb-0">
            <SuccessCheckmark />
            <h1 className="text-[21px] font-bold text-gray-900">
              Success!
            </h1>
          </div>

          <div className="flex flex-col items-start sm:items-end gap-2">
            <div className="mb-2">
              <CloudflareLogo />
            </div>

            <div className="text-sm text-gray-500 flex items-center space-x-1">
              <button 
                className="hover:text-blue-600 hover:underline transition-colors focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-sm"
                onClick={() => console.log("Navigating to Privacy")}
              >
                Privacy
              </button>
              <span className="select-none text-gray-400">•</span>
              <button 
                className="hover:text-blue-600 hover:underline transition-colors focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-sm"
                onClick={() => console.log("Navigating to Terms")}
              >
                Terms
              </button>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default App;
