import React from 'react';
import { Truck, Droplet, Clock, DollarSign, Loader2 } from 'lucide-react';

// Define the structure for a Feature Card
interface Feature {
  id: number;
  icon: React.ElementType;
  title: string;
  description: string;
  image: string;
  span?: string;
}


const featuresData: Feature[] = [
  {
    id: 1,
    icon: Droplet,
    title: 'The Perfect Mix - Every time',
    description:
      'Concrete delivered and mixed using volumetric technology in our mixer trucks at your site reduces the need to add water or materials at the last minute, so you get the strongest, best performing concrete possible.',
    image: 'https://placehold.co/800x600/1e293b/d9f99d?text=Concrete+Pour',
    span: 'md:col-span-1 lg:col-span-1', // Default spanning
  },
  {
    id: 2,
    icon: Truck,
    title: 'GATORMIX Delivers',
    description:
      'GATORMIX delivers concrete and additives you require, and mixes them to the ideal specifications for your application - so you get ideal results.',
    image: 'https://placehold.co/800x600/1e293b/d9f99d?text=Worker+Mixing',
    span: 'md:col-span-1 lg:col-span-1', // Default spanning
  },
  {
    id: 3,
    icon: Clock,
    title: 'Longer Finishing Time',
    description:
      'By having your concrete mixed and poured on-site, you maximize the finishing time versus concrete that is mixed off-site and has started curing while being delivered.',
    image: 'https://placehold.co/400x300/1e293b/d9f99d?text=Time+Icon',
  },
  {
    id: 4,
    icon: DollarSign,
    title: 'Lower Costs',
    description:
      'By paying only for the concrete you use, you eliminate the significant cost of overages and shortages associated with standard concrete mixed off-site at a batch plant.',
    image: 'https://placehold.co/400x300/1e293b/d9f99d?text=Cost+Saving',
  },
  {
    id: 5,
    icon: Loader2,
    title: 'More Mix Flexibility',
    description:
      'With concrete mixed just before application you can adjust your mix as needed, without any job delays or wastage, which is virtually impossible with off-site batch mixing. You also get the ability to pour TWO OR MORE mixes with the SAME TRUCK.',
    image: 'https://placehold.co/800x600/1e293b/d9f99d?text=Crane+and+Mix',
    span: 'md:col-span-2 lg:col-span-2', // This card spans two columns
  },
];

// Reusable Feature Card Component
const FeatureCard: React.FC<{ feature: Feature }> = ({ feature }) => {
  const IconComponent = feature.icon;

  return (
    <div 
      className={`relative rounded-xl overflow-hidden shadow-2xl transition duration-500 hover:shadow-yellow-500/30 ${feature.span || 'md:col-span-1'}`}
      style={{ minHeight: feature.span ? '350px' : '250px' }} // Adjust height for spanning cards
    >
      {/* Background Image Container */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
        style={{ backgroundImage: `url(${feature.image})` }}
      >
        {/* Dark Overlay with Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/70 to-gray-900/50"></div>
      </div>

      {/* Content */}
      <div className="relative p-6 sm:p-8 flex flex-col justify-end h-full text-white">
        {/* Icon (positioned near the top left of the content area) */}
        <div className="absolute top-6 left-6 sm:top-8 sm:left-8 bg-yellow-400 p-3 rounded-full text-gray-900 shadow-lg">
          <IconComponent className="w-6 h-6" />
        </div>

        <h3 className="text-2xl sm:text-3xl font-bold mt-16 mb-2 leading-snug">
          {feature.title}
        </h3>
        <p className="text-base font-medium text-gray-200">
          {feature.description}
        </p>
      </div>
    </div>
  );
};

// Main App Component
const WhyChooseGatorMix: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 font-sans p-4 sm:p-8">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto mb-12 md:mb-20 pt-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-yellow-400 mb-4">
          Why Choose GATORMIX
        </h2>
        <p className="text-lg md:text-xl text-gray-300">
          When you choose GATORMIX, your reliable on-site concrete mixing plant, and all the advantages that come with it.
        </p>
      </div>

      {/* Features Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuresData.map((feature) => (
          <FeatureCard key={feature.id} feature={feature} />
        ))}
      </div>

      {/* Footer/Spacing */}
      <div className="py-10"></div>
    </div>
  );
};

export default WhyChooseGatorMix;
