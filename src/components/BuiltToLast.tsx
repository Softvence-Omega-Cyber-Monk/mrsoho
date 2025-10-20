import React from 'react';
import {Link, Group, FunctionSquare} from 'lucide-react';

// Define the structure for a single feature card
interface Feature {
  id: number;
  Icon: React.ElementType; // Type for the Lucide Icon component
  title: string;
  description: string;
}

// Data for the three feature cards
const featuresData: Feature[] = [
  {
    id: 1,
    Icon: Group,
    title: 'Unmatched Versatility',
    description:
      'From foundations to decorative patios, concrete can be molded into virtually any shape and finished in countless textures and colors.',
  },
  {
    id: 2,
    Icon: FunctionSquare,
    title: 'Low Maintenance',
    description:
      'Once cured and sealed, concrete requires minimal upkeep. It resists mold, mildew, and weather, making it a reliable choice.',
  },
  {
    id: 3,
    Icon: Link,
    title: 'Superior Durability',
    description:
      'Built to last for decades, our concrete withstands heavy loads and harsh environmental conditions with superior compressive strength.',
  },
];

// Component for a single Feature Card
const FeatureCard: React.FC<Feature> = ({ Icon, title, description }) => (
  <div className="relative z-10 bg-stone-900 text-white p-6 md:p-8 rounded-2xl shadow-2xl transition duration-300 hover:shadow-yellow-500/30 border border-stone-800 flex flex-col h-full">
    <div className="flex justify-center mb-6">
      {/* Icon with a prominent yellow color and large size */}
      <Icon className="w-12 h-12 text-yellow-500 stroke-1.5" />
    </div>
    
    <h3 className="text-2xl font-semibold mb-3 text-yellow-500 text-center leading-snug">
      {title}
    </h3>
    
    <p className="text-gray-300 text-base flex-grow text-center">
      {description}
    </p>
  </div>
);

// Main Application Component
const BuiltToLast: React.FC = () => {
  return (
    <div className="font-sans bg-white py-12 md:py-24 overflow-hidden">
      {/* Relative container for the entire section, allowing absolute positioning of background elements */}
      <div className="relative px-4 sm:px-6 lg:px-8">
        
        {/* Subtle Background Pattern (Mimicking the light bricks/shapes in the original design) */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 overflow-hidden">
          {/* Large, transparent shapes to suggest the structure/material */}
          <div 
            className="absolute -bottom-20 left-0 w-[400px] h-[200px] bg-yellow-200 opacity-10 rounded-3xl transform rotate-12"
          ></div>
          <div 
            className="absolute -bottom-10 right-1/4 w-[500px] h-[150px] bg-yellow-300 opacity-10 rounded-3xl transform -rotate-6"
          ></div>
        </div>

        {/* Header Section */}
        <div className="mx-auto mb-16 text-center md:text-left relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-stone-900 leading-tight">
            Built to Last
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto md:mx-0">
           Our concrete provides the essential qualities every successful project demands:
            versatility, durability, and low maintenance.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {featuresData.map((feature) => (
            <FeatureCard key={feature.id} {...feature} />
          ))}
        </div>
      </div>
   
    </div>
  );
};

export default BuiltToLast;