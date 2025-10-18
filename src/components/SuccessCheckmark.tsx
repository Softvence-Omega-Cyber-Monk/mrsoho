import React from 'react';

// Custom SVG for the green success checkmark (simulating a common icon library)
const SuccessCheckmark: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-10 h-10 text-green-500"
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

export default SuccessCheckmark;
