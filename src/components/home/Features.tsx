import React from "react";
import { Droplet, Truck, Clock, DollarSign, Loader2 } from "lucide-react";
import GATORMIXDelivers from "../../assets/GATORMIXDelivers.jpg";
import time from "../../assets/time.jpg";
import handcement from "../../assets/handcement.jpg";
import PlaceholderImage from "../../assets/PlaceholderImage.png";
import moreflex from "../../assets/moreflex.jpg";
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
      "Concrete delivered and mixed using volumetric technology in our mixer trucks at your site reduces the need to add water or materials at the last minute, so you get the strongest, best performing concrete possible.",
    image: time,
  },
  {
    id: 2,
    icon: Truck,
    title: "GATORMIX Delivers",
    description:
      "GATORMIX delivers concrete and concrete additives you require, and mixes them to the ideal specifications for your application - so you get ideal results..",
    image: GATORMIXDelivers,
  },
  {
    id: 3,
    icon: Clock,
    title: "Longer Finishing Time",
    description:
      "By having your concrete mixed and poured on-site, you maximize the finishing time versus concrete that is mixed off-site and has started curing while being delivered.",
    image: handcement,
  },
  {
    id: 4,
    icon: DollarSign,
    title: "Lower Costs",
    description:
      "By paying only for the concrete you use, you eliminate the significant cost of overages and shortages associated with standard concrete mixed off-site at a batch plant.",
    image: PlaceholderImage,
  },
  {
    id: 5,
    icon: Loader2,
    title: "More Mix Flexibility",
    description:
      "With concrete mixed just before application you can adjust your mix as needed, without any job delays or wastage, which is virtually impossible with off-site batch mixing. You also get the ability to pour TWO or MORE mixes with the SAME TRUCK.",
    image:moreflex,
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
      <div className="max-w-4xl mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-yellow-400 mb-4">
          Why Choose GATORMIX
        </h2>
        <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
          When your choose GATORMIX, your get your OWN on-site concrete mixing plant, and all the advantages thats come with it        </p>
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
