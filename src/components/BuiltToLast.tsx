import React from 'react';
import threeroot from '../assets/threeroot.png';
import shearwhiteme from '../assets/shearwhiteme.png';
import Funtions from '../assets/Funtions.png';
// import buildanlast from '../assets/buildanlast.png';

interface Feature {
  id: number;
  Icon: string;
  title: string;
  description: string;
}

const featuresData: Feature[] = [
  {
    id: 1,
    Icon: threeroot,
    title: 'Unmatched Versatility',
    description:
      'From foundations to decorative patios, concrete can be molded into virtually any shape and finished in countless textures and colors.',
  },
  {
    id: 2,
    Icon: Funtions,
    title: 'Low Maintenance',
    description:
      'Once cured and sealed, concrete requires minimal upkeep. It resists mold, mildew, and weather, making it a reliable choice.',
  },
  {
    id: 3,
    Icon: shearwhiteme,
    title: 'Superior Durability',
    description:
      'Built to last for decades, our concrete withstands heavy loads and harsh environmental conditions with superior compressive strength.',
  },
];

const FeatureCard: React.FC<Feature> = ({ Icon, title, description }) => (
  <div className="relative z-10 bg-stone-900 text-white p-4 sm:p-6 md:p-8 rounded-xl md:rounded-2xl shadow-lg md:shadow-2xl transition duration-300 hover:shadow-yellow-500/20 md:hover:shadow-yellow-500/30 border border-stone-800 flex flex-col h-full">
    <div className="flex justify-center mb-4 sm:mb-6">
      <img 
        src={Icon} 
        alt={title} 
        className="w-10 h-10 sm:w-12 sm:h-12 text-yellow-500 stroke-1.5" 
      />
    </div>
    
    <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-yellow-500 text-center leading-snug">
      {title}
    </h3>
    
    <p className="text-gray-300 text-sm sm:text-base flex-grow text-center leading-relaxed">
      {description}
    </p>
  </div>
);

const BuiltToLast: React.FC = () => {
  return (
    <div className="max-w-[1440px] mx-auto font-sans bg-white py-8 sm:py-12 md:py-16 lg:py-24 overflow-hidden">
      <div className="relative px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="mx-auto mb-8 sm:mb-12 md:mb-16 text-center lg:text-left relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-stone-900 leading-tight">
            Built to Last
          </h1>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto lg:mx-0">
            Our concrete provides the essential qualities every successful project demands:
            versatility, durability, and low maintenance.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 relative z-10 mb-8 sm:mb-12 md:mb-16">
          {featuresData.map((feature) => (
            <FeatureCard key={feature.id} {...feature} />
          ))}
        </div>

        {/* Bottom Image */}
        {/* <div className="relative mt-8 sm:mt-12 md:mt-16 lg:mt-20">
          <img 
            src={buildanlast} 
            alt="Concrete construction showcase" 
            className="w-full h-auto rounded-lg md:rounded-xl shadow-md"
          />
        </div> */}
      </div>
    </div>
  );
};

export default BuiltToLast;