import React from 'react';

// --- Icon Components (Inline SVG) ---
const CementIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-amber-500 fill-amber-500/10">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    <path d="M9 18V6l3 3m3-3v12" />
  </svg>
);

const ConcreteIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-amber-500 fill-amber-500/10">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="8" y1="13" x2="16" y2="13" />
    <line x1="8" y1="17" x2="16" y2="17" />
  </svg>
);

// --- Component Interface ---
interface ContentItem {
  title: string;
  subtitle: string;
  description: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

// --- Data ---
const contentData: ContentItem[] = [
  {
    title: 'Cement',
    subtitle: 'The Binding Agent',
    description:
      'Cement is a binding agent, a fine powder that is never used alone. It\'s a key ingredient that, when mixed with water, forms a paste that binds the other components of concrete together.',
    Icon: CementIcon,
  },
  {
    title: 'Concrete',
    subtitle: 'The Composite Material',
    description:
      'Concrete is the final composite material. It is a mixture of cement, water, and aggregates (like sand and gravel). When combined, they form the strong, durable material used for construction.',
    Icon: ConcreteIcon,
  },
];

// --- Card Component ---
const ComparisonCard: React.FC<{ item: ContentItem }> = ({ item }) => {
  return (
    <div className={`flex-1 min-w-full md:min-w-0 bg-black p-6 rounded-xl shadow-lg transition duration-300 hover:shadow-2xl hover:scale-[1.01] relative ${
      item.title === 'Concrete' ? 'md:top-5' : 'bottom-5'
    }`}>
      <div className="flex items-center space-x-3 mb-2">
        <item.Icon className="w-8 h-8" />
        <h2 className="text-2xl font-bold text-yellow-500">{item.title}</h2>
      </div>
      <p className="text-gray-300 text-sm font-semibold mb-4 tracking-wide pl-9">{item.subtitle}</p>
      <p className="text-gray-300 leading-relaxed">{item.description}</p>
    </div>
  );
};

// --- Main Component ---
const ConcreteVsCement: React.FC = () => {
  return (
    <div className="max-w-[1440px] mx-auto bg-white font-sans antialiased py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl">
        {/* Header Section */}
        <header className="mb-12">
          <h1 className="text-5xl font-semibold text-gray-900 mb-4">
            Concrete vs. Cement
          </h1>
          <p className="text-lg font-semibold text-gray-400 max-w-2xl">
            It's a common misconception to use these terms interchangeably. Understanding the difference is key to understanding the final product.
          </p>
        </header>

        {/* Comparison Cards Section */}
        <section className="flex flex-col md:flex-row gap-8">
          {contentData.map((item) => (
            <ComparisonCard key={item.title} item={item} />
          ))}
        </section>

        {/* Footer for visual separation */}
        <footer className="mt-20 pt-8 border-t border-gray-100">
          <div className="h-4"></div>
        </footer>
      </div>
    </div>
  );
};

export default ConcreteVsCement;
