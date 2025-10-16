import React from 'react';

// Define the structure for a group of concrete projects
interface ProjectGroup {
  title: string;
  items: string[];
}

// Define the data for the two main sections
const gatorMixProjects: ProjectGroup[] = [
  {
    title: 'Gator Mix Delivers',
    items: [
      'Foundation Walls',
      'Wall Footings',
      'Fireplaces & Chimneys',
      'Post Holes',
    ],
  },
  {
    title: '', // Empty title for the middle column in the design
    items: [
      'Walkout Walls',
      'Hot Tub Pads',
      'Shed Pads',
      'patios',
      'Pool Deck',
    ],
  },
  {
    title: '', // Empty title for the right column in the design
    items: [
      'Curbs',
      'Driveways',
      'Sidewalks',
      'Walkways',
      'Retaining Walls',
      'Steps',
    ],
  },
];

const commercialProjectsDescription =
  'While building pads, slabs and foundations are among the most common applications, GATORMIX delivers the right mix, according to ASTM standard specifications, to industrial, to industrial and commercial building sites across South West Flordia.';

const ConcreteServicesSection: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-16 px-4">
      {/* Top Heading Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
          Need Concrete Delivered and Mixed <br />
          On-Site in **SOUTH WEST FLORDIA**?
        </h1>
        <p className="text-gray-600 mt-2 text-lg">
          Schedule a delivery today.
        </p>
        <button className="mt-6 px-8 py-3 bg-yellow-500 text-gray-900 font-bold rounded-lg shadow-lg hover:bg-yellow-600 transition duration-300">
          Try the Concrete Calculator
        </button>
      </div>

      {/* Main Project Types Section */}
      <div className="w-full max-w-6xl text-center relative pt-16">
        {/* Background Image/Overlay Mimic */}
        <div className="absolute inset-0 z-0 opacity-10 bg-center bg-cover" 
             style={{ backgroundImage: "url('/path-to-your-concrete-truck-background-image.png')" }}>
        </div>
        
        <div className="relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 tracking-wider uppercase">
            Types of Concrete Projects
          </h2>
          <p className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2 leading-snug">
            On-Time Concrete Delivery Near You in **SOUTH WEST FLORDIA**
          </p>
          <p className="text-gray-600 text-sm mt-4 mb-10 max-w-3xl mx-auto">
            Mix On-Site delivers concrete on-demand for all types of residential, commercial and industrial building projects.
          </p>

          {/* Gator Mix Delivers Section - Using Flex for columns */}
          <div className="bg-white p-8 rounded-xl shadow-2xl">
            <h3 className="text-xl font-bold text-gray-700 mb-4 flex items-center">
              <span className="mr-2 text-2xl">🏠</span> Gator Mix Delivers
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-y-2 md:gap-x-12 text-left">
              {gatorMixProjects.map((group, groupIndex) => (
                <ul key={groupIndex} className="space-y-1">
                  {group.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start text-gray-700">
                      <span className="text-yellow-500 mr-2 mt-1 text-xs">➤</span>
                      {item}
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
          
          {/* Commercial & Industrial Building Projects Section */}
          <div className="mt-12 text-left p-6">
            <h3 className="text-xl font-bold text-gray-700 mb-2 flex items-center">
              <span className="mr-2 text-2xl">🏗️</span> Commercial & Industrial Building Projects
            </h3>
            <p className="text-gray-600 text-sm max-w-full">
              {commercialProjectsDescription}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConcreteServicesSection;