import React from 'react';

// --- Icon Components (Inline SVG) ---
// Checkmark icon for the feature lists (UPDATED to a checkmark inside a circle)
const CheckmarkIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-5 h-5 flex-shrink-0 text-lime-500">
    {/* Circle filled with lime color (currentColor is inherited from parent class) */}
    <circle cx="12" cy="12" r="10" fill="currentColor" />
    {/* Checkmark path, stroked white */}
    <path d="M8 12.5l3 3 5-5" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// --- Component Interface ---
interface MixCardData {
  title: string;
  subtitle: string;
  features: string[];
  colorClass: string;
}

// --- Data ---
const perfectMixData: MixCardData[] = [
  {
    title: '15 MPa Concrete',
    subtitle: '(R1-R2)',
    features: [
      'Light foundations walls',
      'Footings',
    ],
    colorClass: 'text-amber-500', // Using amber for consistency with the original theme's accent color
  },
  {
    title: '25 MPa Concrete',
    subtitle: '(F2)',
    features: [
      'Basement floors',
      'Slab on grade',
      'Walkout Walls',
      'Fence Post Holes',
    ],
    colorClass: 'text-green-500',
  },
  {
    title: '32 MPa Concrete',
    subtitle: '(C2)',
    features: [
      'Hot-tub Pads',
      'Patios',
      'Poolside Decks',
      'Driveways & Curbs',
      'Sidewalks & Walkways',
      'Garage Floors',
      'Steps',
    ],
    colorClass: 'text-red-500', // Placeholder color, choosing red for distinction
  },
  {
    title: '.04 UFILL',
    subtitle: 'Flowable Fill',
    features: [
      'Structural fill',
      'Back fill',
    ],
    colorClass: 'text-blue-500',
  },
];

// --- Card Component ---
const MixDesignCard: React.FC<{ item: MixCardData }> = ({ item }) => {
  return (
    <div className="flex-1 min-w-full rounded-xl bg-white p-6 shadow-xl border border-gray-100 transition duration-300 hover:shadow-2xl md:min-w-[200px]">
      <div className="mb-4">
        <h2 className="text-xl font-bold text-gray-900">{item.title}</h2>
        <p className={`text-base font-medium ${item.colorClass}`}>{item.subtitle}</p>
      </div>

      <ul className="space-y-3">
        {item.features.map((feature, index) => (
          <li key={index} className="flex items-start space-x-2">
            {/* The CheckmarkIcon receives the default text-lime-500 class here */}
            <CheckmarkIcon />
            <span className="text-gray-700 leading-snug">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

// --- Main Component ---
const PerfectConcreteMix: React.FC = () => {
  return (
    // Set up global font and background for the entire view
    <div className="bg-gray-50 font-['Inter'] antialiased py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background graphic simulation (optional, based on the faint image in the original screenshot) */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://placehold.co/1200x800/e0e0e0/ffffff?text=Background+Texture')" }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* === Section: Find the Perfect Concrete Mix === */}
        <header className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            Find the Perfect Concrete Mix
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Each project has unique requirements. We provide a range of concrete strengths to ensure you get the optimal performance and durability for your specific application.
          </p>
        </header>

        {/* Mix Cards Section */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {perfectMixData.map((item) => (
            <MixDesignCard key={item.title} item={item} />
          ))}
        </section>


        {/* Simple footer for visual separation */}
        <footer className="mt-20 pt-8 border-t border-gray-100">
            <div className="h-4"></div> 
        </footer>
      </div>
    </div>
  );
};

export default PerfectConcreteMix;