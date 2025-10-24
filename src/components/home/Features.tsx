import React from "react";
// Corrected Lucide Icons import: MixerHorizontal is replaced with Construction
// import { DollarSign, Loader2 } from "lucide-react";

// Image Imports (Adjust paths as needed for your project structure)
import GATORMIXDelivers from "../../assets/GATORMIXDelivers.jpg";
import time from "../../assets/time.jpg";
import handcement from "../../assets/handcement.jpg";
import PlaceholderImage from "../../assets/PlaceholderImage.png";
import timer from "../../assets/timer.png";
import Delivers from "../../assets/Delivers.png";
import finishingtime from "../../assets/finishingtime.png";
import moreflex from "../../assets/moreflex.jpg";
import lowercost from "../../assets/lowercost.png";
import MixFlexibility from "../../assets/MixFlexibility.png";

// Placeholder for a CommonWrapper component (replace with your actual component or a simple div)
const CommonWrapper: React.FC<React.PropsWithChildren<{ className?: string }>> = ({ children, className }) => (
  <div className={className}>{children}</div>
);

// --- Interface and Data ---

interface Feature {
  id: number;
  icon: string;
  title: string;
  description: string;
  image: string;
  span?: string;
  className?: string;
}

const featuresData: Feature[] = [
  {
    id: 1,
    icon: timer,
    title: "The Perfect Mix – Every Time",
    description:
      "Concrete delivered and mixed using volumetric technology in our mixer trucks at your site reduces the need to add water or materials at the last minute, so you get the strongest, best performing concrete possible.",
    image: time,
    span: "lg:col-span-7",
  },
  {
    id: 2,
    icon: Delivers,
    title: "GATORMIX Delivers",
    description:
      "GATORMIX delivers concrete and concrete additives you require, and mixes them to the ideal specifications for your application - so you get ideal results.",
    image: GATORMIXDelivers,
    span: "lg:col-span-5",
  },
  {
    id: 3,
    icon: finishingtime,
    title: "Longer Finishing Time",
    description:
      "By having your concrete mixed and poured on-site, you maximize the finishing time versus concrete that is mixed off-site and has started curing while being delivered.",
    image: handcement,
    span: "lg:col-span-3",
  },
  {
    id: 4,
    icon: lowercost,
    title: "Lower Costs",
    description:
      "By paying only for the concrete you use, you eliminate the significant cost of overages and shortages associated with standard concrete mixed off-site at a batch plant.",
    image: PlaceholderImage,
    span: "lg:col-span-3",
  },
  {
    id: 5,
    icon: MixFlexibility,
    title: "More Mix Flexibility",
    description:
      "With concrete mixed just before application you can adjust your mix as needed, without any job delays or wastage, which is virtually impossible with off-site batch mixing. You also get the ability to pour TWO or MORE mixes with the SAME TRUCK.",
    image: moreflex,
    span: "lg:col-span-6",
  },
];

const FeatureCard: React.FC<{ feature: Feature }> = ({ feature }) => {
  return (
    <div
      className={`col-span-12 relative group rounded-xl overflow-hidden shadow-xl hover:shadow-yellow-400/30 transition-all duration-500 ${feature.span || ""}`}
    >
      <div
        className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
        style={{ backgroundImage: `url(${feature.image})` }}
        role="img"
        aria-label={feature.title}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/95 via-gray-900/75 to-gray-800/40"></div>
      </div>

      <div className="relative p-6 sm:p-8 flex flex-col justify-end h-full min-h-[300px] text-white">
        <div className="absolute top-5 left-5 sm:top-8 sm:left-8 p-3 rounded-full shadow-md">
          <img src={feature.icon} alt={feature.title} className="w-6 h-6 text-gray-900" />
        </div>

        <h3 className="text-xl sm:text-2xl font-bold mt-14 mb-2 text-amber-300">
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
    <section className="bg-[#212121] text-white px-4 sm:px-6 lg:px-12 py-12 sm:py-20">
      <CommonWrapper className="max-w-[1440px] mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-yellow-400 mb-4">
            Why Choose GATORMIX
          </h2>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-4xl">
            When you choose GATORMIX, you get your OWN on-site concrete mixing plant, and all the advantages that come with it.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-8">
          {featuresData.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      </CommonWrapper>
    </section>
  );
};

export default Features;
