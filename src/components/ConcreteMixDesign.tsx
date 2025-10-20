import React from 'react';

// --- Icon Components (Inline SVG) ---

<<<<<<< HEAD
=======
// removed unused CementIcon and ConcreteIcon to satisfy TS unused variable warnings

>>>>>>> 0a94f35f8816aa4486c440c475cec528eb547063
// Icons for the "Concrete Mix Design" section
const PortlandCementIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-blue-600">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M12 12V8" />
    <path d="M12 16h.01" />
  </svg>
);

const AggregatesIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-blue-600">
    <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
    <polyline points="13 2 13 9 20 9" />
    <line x1="16" y1="16" x2="8" y2="16" />
    <line x1="16" y1="12" x2="8" y2="12" />
  </svg>
);

const WaterIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-blue-600">
    <path d="M7.86 20.35a3.5 3.5 0 0 1-5.3-3.41 3.5 3.5 0 0 1 5.3-3.41c1.8 1.8 1.8 4.7 0 6.82z" />
    <path d="M16.14 3.65a3.5 3.5 0 0 1 5.3 3.41 3.5 3.5 0 0 1-5.3 3.41c-1.8-1.8-1.8-4.7 0-6.82z" />
    <path d="M12 2v20" />
    <path d="M5 12h14" />
  </svg>
);

const AdmixturesIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-blue-600">
    <path d="M12 2a10 10 0 0 0-9.67 11.63L12 22l9.67-8.37A10 10 0 0 0 12 2z" />
    <path d="M12 8l4 4-4 4-4-4z" />
  </svg>
);


// --- Component Interface ---
interface ContentItem {
  title: string;
  subtitle?: string;
  description: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  style?: 'dark' | 'light';
}

// --- Data ---
<<<<<<< HEAD
=======
// removed unused comparisonData to avoid TS6133 warning
>>>>>>> 0a94f35f8816aa4486c440c475cec528eb547063

const mixDesignData: ContentItem[] = [
  {
    title: 'Portland Cement',
    description:
      'The key ingredient that acts as the binder, holding all the other components together in a durable matrix.',
    Icon: PortlandCementIcon,
    style: 'light',
  },
  {
    title: 'Aggregates',
    description:
      'A mix of sand, gravel, and crushed stone that provides the bulk, strength, and stability to the concrete.',
    Icon: AggregatesIcon,
    style: 'light',
  },
  {
    title: 'Water',
    description:
      'The catalyst that triggers the chemical reaction with cement (hydration), causing the mixture to harden.',
    Icon: WaterIcon,
    style: 'light',
  },
  {
    title: 'Admixtures',
    description:
      'Specialty chemicals added to enhance properties like setting time, durability, or workability.',
    Icon: AdmixturesIcon,
    style: 'light',
  },
];

// --- Card Component ---
const ComparisonCard: React.FC<{ item: ContentItem }> = ({ item }) => {
  const isDark = item.style === 'dark';
  // Note: Only the light style is relevant now, but keeping the logic for flexibility.
  const bgColor = isDark ? 'bg-gray-800' : 'bg-white border border-gray-100';
  const titleColor = isDark ? 'text-gray-100' : 'text-gray-900';
  const descColor = isDark ? 'text-gray-300' : 'text-gray-600';
  const subtitleColor = isDark ? 'text-amber-500' : 'text-gray-500';
  const iconColor = isDark ? 'text-amber-500' : 'text-blue-600';

  return (
    <div className={`flex-1 min-w-full rounded-xl shadow-lg transition duration-300 hover:shadow-xl p-6 ${bgColor} ${isDark ? 'md:min-w-0' : 'md:min-w-[200px]'}`}>
      <div className="flex items-start space-x-3 mb-4">
        <item.Icon className={`w-6 h-6 flex-shrink-0 ${iconColor}`} />
        <div>
          <h2 className={`text-xl font-bold ${titleColor}`}>{item.title}</h2>
          {item.subtitle && (
            <p className={`text-sm font-semibold tracking-wide ${subtitleColor}`}>{item.subtitle}</p>
          )}
        </div>
      </div>
      <p className={`leading-relaxed ${descColor}`}>{item.description}</p>
    </div>
  );
};

// --- Main Component ---
const ConcreteMixDesign: React.FC = () => {
  return (
    // Set up global font and background for the entire view
    <div className="bg-gray-50 font-['Inter'] antialiased py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* === Section: Concrete Mix Design (Now the primary section) === */}
        <header className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            Concrete Mix Design
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            The strength and quality of concrete depend on the precise ratio of its core components. We expertly combine these elements to meet your project's specific needs.
          </p>
        </header>

        {/* Mix Design Cards Section */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mixDesignData.map((item) => (
            <ComparisonCard key={item.title} item={item} />
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

export default ConcreteMixDesign;
