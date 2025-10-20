import React from 'react';

// --- Icon Components (Inline SVG) ---
const CheckmarkIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-5 h-5 flex-shrink-0 text-lime-500">
    <circle cx="12" cy="12" r="10" fill="currentColor" className="text-lime-500" />
    <path d="M8 12.5l3 3 5-5" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// --- Component Interface ---
interface MixCardData {
  title: string;
  features: string[];
  colorClass: string; // Used for title color, now updated to greens
}

// --- Updated Data with green-themed titles ---
const perfectMixData: MixCardData[] = [
  {
    title: '3000 PSI concrete',
    features: [
      'For General Purpose: strong enough for most residential flatwork where loads are modest (cars, people, light equipment)',
    ],
    colorClass: 'text-green-700', // Changed to green
  },
  {
    title: '4000 PSI concrete',
    features: [
      'Is the industry standard for structural and commercial work, where weight bearing and weather exposure are bigger factors',
    ],
    colorClass: 'text-emerald-700', // Changed to green
  },
  {
    title: '5000 PSI concrete',
    features: [
      'High performance concrete, offering maximum strength, density and durability.',
    ],
    colorClass: 'text-lime-700', // Changed to green
  },
  {
    title: 'Flowable FILL',
    features: [
      'Common used are backfilling trenches, abandoning old tanks or voids, subbase or bedding for pipes, temporary or permanent fill that needs no compaction',
    ],
    colorClass: 'text-teal-700', // Changed to green
  },
  {
    title: 'ULTRA BASE',
    features: [
      'Used as a underlayment for paver stones, which is superior to stone, sand, or plain screenings',
    ],
    colorClass: 'text-green-800', // Changed to green
  },
];

// --- Card Component ---
const MixDesignCard: React.FC<{ item: MixCardData }> = ({ item }) => {
  return (
    <div className="flex-1 min-w-full rounded-lg bg-white p-5 shadow-md hover:shadow-lg transition duration-300 md:min-w-[200px]">
      <div className="mb-4">
        {/* Using the colorClass for the title */}
        <h2 className={`text-lg font-semibold ${item.colorClass}`}>{item.title}</h2>
      </div>

      <ul className="space-y-3">
        {item.features.map((feature, index) => (
          <li key={index} className="flex items-start space-x-2">
            <CheckmarkIcon className="text-lime-500 w-5 h-5 mt-0.5" />
            <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

// --- Main Component ---
const PerfectConcreteMix: React.FC = () => {
  // Only taking the first 4 cards to match the visible screenshot content
  const visibleMixData = perfectMixData.slice(0, 4);

  return (
    // Changed overall background to a light green shade, header text to dark green
    <div className="font-sans antialiased py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header Section */}
        <header className="mb-12">
          {/* Header text color changed to dark green for contrast */}
          <h1 className="text-3xl font-bold mb-3">
            Find the Perfect Concrete Mix
          </h1>
          {/* Paragraph text color adjusted */}
          <p className="text-base max-w-4xl">
            Each project has unique requirements. We provide a range of concrete strengths to ensure you get the optimal performance and durability for your specific application.
          </p>
        </header>

        {/* Mix Cards Section */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {visibleMixData.map((item) => (
            <MixDesignCard key={item.title} item={item} />
          ))}
        </section>
      </div>
    </div>
  );
};

export default PerfectConcreteMix;