import React from 'react';
import { GatorMixIcon, BuildingIcon, TruckIcon } from '../ui/icons';
import proall from "../../assets/proall.jpg"
// Define the structure for a column of project items
interface ProjectColumn {
  items: string[];
}

// Data for the three columns of services
const projectColumns: ProjectColumn[] = [
  {
    items: [
      'Foundation Walls',
      'Wall Footings',
      'Fireplaces & Chimneys',
      'Post Holes',
    ],
  },
  {
    items: [
      'Walkout Walls',
      'Hot Tub Pads',
      'Shed Pads',
      'Patios',
      'Pool Deck',
    ],
  },
  {
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
  'While building pads, slabs and foundations are among the most common applications, GATORMIX delivers the right mix, according to ASTM standard specifications, to industrial and commercial building sites across South West Florida.';

const ConcreteServicesSection: React.FC = () => {
  return (
    // Parent div to wrap all sections
    <div>
      <section className=" py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Need Concrete Delivered and Mixed
            <br />
            On-Site in SOUTH WEST FLORIDA?
          </h1>
          <p className="mt-4 text-md text-gray-600">
            Schedule a delivery today.
          </p>
          <div className="mt-8 cursor-pointer flex justify-center items-center">
            <a
              href="/concrete-calculator"
              className="bg-yellow-400 w-[270px] hover:bg-yellow-500 text-gray-900 font-bold py-3 px-6 rounded-md transition duration-300 ease-in-out flex items-center space-x-2"
            >
              <span>Try the Concrete Calculator</span>
            </a>
          </div>
        </div>
      </section>

      <section className="relative w-full bg-white flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 opacity-10">
          <img
            src={proall}
            alt="Background Image"
            className="w-full h-full object-cover"
            aria-hidden="true"
          />
        </div>


        <div className="relative z-10 w-full max-w-6xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-800">
              Types of Concrete Projects
            </h2>
            <p className="text-4xl md:text-5xl font-extrabold text-slate-800 mt-2 leading-tight">
              On-Time Concrete Delivery Near You in SOUTH WEST FLORIDA
            </p>
            <p className="text-slate-600 text-base mt-6 mb-12 max-w-3xl mx-auto">
              Gator delivers concrete best suited for all types of residential, commercial, and industrial building projects.
            </p>
          </div>

          <div className="text-left">
            <h3 className="text-xl font-bold text-green-700 mb-6 flex items-center">
              <GatorMixIcon className="w-7 h-7 mr-3 text-green-600" aria-hidden="true" />
              Gator Mix Delivers
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-3 md:gap-x-12">
              {projectColumns.map((column, colIndex) => (
                <ul key={colIndex} className="space-y-3">
                  {column.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-slate-700 font-medium">
                      <TruckIcon className="w-5 h-5 mr-3 text-green-600 flex-shrink-0" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ))}
            </div>

            <div className="mt-16">
              <h3 className="text-xl font-bold text-green-700 mb-4 flex items-center">
                <BuildingIcon className="w-7 h-7 mr-3 text-green-600" aria-hidden="true" />
                Commercial & Industrial Building Projects
              </h3>
              <p className="text-slate-600 text-base max-w-full">
                {commercialProjectsDescription}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConcreteServicesSection;