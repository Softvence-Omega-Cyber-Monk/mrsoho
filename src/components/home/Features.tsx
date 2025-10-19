import React from "react";
import { Droplet, Truck, Clock, DollarSign, Loader2 } from "lucide-react";

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
    title: "The Perfect Mix – Every Time",
    description:
      "Concrete delivered and mixed using volumetric technology at your site ensures optimal strength and consistency without last-minute adjustments.",
    image: "https://placehold.co/800x600/1e293b/d9f99d?text=Concrete+Pour",
  },
  {
    id: 2,
    icon: Truck,
    title: "GATORMIX Delivers",
    description:
      "We deliver concrete and additives tailored to your needs, mixed on-site to precise specifications for superior results.",
    image: "https://placehold.co/800x600/1e293b/d9f99d?text=Worker+Mixing",
  },
  {
    id: 3,
    icon: Clock,
    title: "Longer Finishing Time",
    description:
      "On-site mixing maximizes your finishing window compared to off-site mixed concrete, which starts curing in transit.",
    image: "https://placehold.co/400x300/1e293b/d9f99d?text=Time+Icon",
  },
  {
    id: 4,
    icon: DollarSign,
    title: "Lower Costs",
    description:
      "Pay only for the concrete you use. Avoid waste, shortages, and extra charges from traditional batch plants.",
    image: "https://placehold.co/400x300/1e293b/d9f99d?text=Cost+Saving",
  },
  {
    id: 5,
    icon: Loader2,
    title: "More Mix Flexibility",
    description:
      "Adjust your mix on-site without delays or waste. Pour multiple mixes with a single truck for maximum flexibility.",
    image: "https://placehold.co/800x600/1e293b/d9f99d?text=Crane+and+Mix",
    span: "md:col-span-2 lg:col-span-2",
  },
];

const FeatureCard: React.FC<{ feature: Feature }> = ({ feature }) => {
  const Icon = feature.icon;

  return (
    <div
      className={`relative group rounded-xl overflow-hidden shadow-xl hover:shadow-yellow-400/30 transition-all duration-500 ${feature.span || ""}`}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
        style={{ backgroundImage: `url(${feature.image})` }}
        role="img"
        aria-label={feature.title}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/95 via-gray-900/75 to-gray-800/40"></div>
      </div>

      {/* Content */}
      <div className="relative p-6 sm:p-8 flex flex-col justify-end h-full text-white">
        <div className="absolute top-5 left-5 sm:top-8 sm:left-8 bg-yellow-400 p-3 rounded-full shadow-md">
          <Icon className="w-6 h-6 text-gray-900" />
        </div>
        <h3 className="text-xl sm:text-2xl font-bold mt-14 mb-2">
          {feature.title}
        </h3>
        <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
          {feature.description}
        </p>
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <section className="bg-gray-900 text-white px-4 sm:px-6 lg:px-12 py-12 sm:py-20">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-yellow-400 mb-4">
          Why Choose GATORMIX
        </h2>
        <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
          Choose GATORMIX for reliable on-site concrete mixing, cost efficiency, and unmatched flexibility on every job.
        </p>
      </div>

      {/* Feature Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuresData.map((feature) => (
          <FeatureCard key={feature.id} feature={feature} />
        ))}
      </div>
    </section>
  );
};

export default Features;
