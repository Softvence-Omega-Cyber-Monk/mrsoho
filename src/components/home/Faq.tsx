import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FaqItemData {
  id: number;
  question: string;
  answer: string;
}

// Data for the FAQ items
const faqData: FaqItemData[] = [
  {
    id: 1,
    question: "How much concrete should I order?",
    answer: "The volume of concrete you should order depends on the size and type of project. If you know the width (diameter for round applications), depth and length of the concrete pour, you can use our Concrete Calculator to find out how much concrete you need. The general rule is to always order about 10% more than your calculated volume to account for spills, uneven subgrades, and other unforeseen issues."
  },
  {
    id: 2,
    question: "What does 28-day strength mean?",
    answer: "28-day strength refers to the industry standard measurement for the compressive strength of concrete. While concrete starts to solidify within hours, it generally takes 28 days to reach its specified minimum compressive strength (measured in PSI or MPa). After this period, the concrete will continue to cure and gain strength, but at a much slower rate."
  },
  {
    id: 3,
    question: "Can temperatures be too hot or too cold to cast concrete?",
    answer: "Yes. Extreme temperatures significantly impact the curing process. If it's too cold (below 40°F / 4°C), the hydration process slows down, increasing curing time and risking freeze damage. If it's too hot (above 90°F / 32°C), water evaporates too quickly, which can lead to rapid setting, reduced final strength, and plastic shrinkage cracking."
  },
  {
    id: 4,
    question: "Are cracks in concrete normal?",
    answer: "Minor cracking is common and often unavoidable in concrete due to shrinkage during the curing process, temperature changes, and settling of the base material. Hairline cracks are typically cosmetic. However, larger, moving, or spider-web-like cracks can indicate structural issues and should be inspected by a professional."
  }
];

interface FAQItemProps {
  item: FaqItemData;
  isOpen: boolean;
  toggleItem: (id: number) => void;
}

// Helper Component for an individual FAQ Item
const FAQItem: React.FC<FAQItemProps> = ({ item, isOpen, toggleItem }) => {
  const activeClasses = isOpen
    ? 'border-t-4 border-yellow-500 shadow-xl'
    : 'border-t-4 border-transparent'; // Invisible border for spacing consistency

  const titleClasses = isOpen
    ? 'text-yellow-400 font-semibold'
    : 'text-gray-200';

  const icon = isOpen
    ? <ChevronUp className="w-5 h-5 text-yellow-400" />
    : <ChevronDown className="w-5 h-5 text-yellow-300" />;

  return (
    <div
      className={`mb-4 w-full cursor-pointer transition-all duration-300 rounded-lg overflow-hidden ${activeClasses}`}
      onClick={() => toggleItem(item.id)}
    >
      {/* Question Header */}
      <div className="flex justify-between items-center p-5 bg-slate-700 hover:bg-slate-600 transition duration-150 ease-in-out">
        <h3 className={`text-lg transition-colors duration-200 ${titleClasses}`}>
          {item.question}
        </h3>
        {icon}
      </div>

      {/* Answer Content - Uses max-h-0 and transition for smooth collapse */}
      <div
        className={`bg-slate-700/80 transition-[max-height,padding] duration-500 ease-in-out overflow-hidden
          ${isOpen ? 'max-h-96 pt-4 pb-6 px-5' : 'max-h-0 p-0'}`}
      >
        <p className="text-gray-300 text-base leading-relaxed">
          {item.answer}
        </p>
      </div>
    </div>
  );
};

// Main Component
const Faq = () => {
  const [openId, setOpenId] = useState<number | null>(faqData[0].id); // State to track the ID of the currently open item, default to the first one

  const toggleItem = (id: number) => {
    // If the clicked item is already open, close it (set to null), otherwise open the new one
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="bg-gray-900 p-8 md:p-16 flex items-start justify-center">
      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-12">
        
        {/* Left Side: Title */}
        <div className="md:w-1/3">
          <h1 className="text-5xl md:text-6xl font-extrabold text-yellow-500 tracking-tight">
            FAQs
          </h1>
          <p className="text-gray-400 mt-4 text-lg">
            Find answers to the most common questions about concrete and materials.
          </p>
        </div>

        {/* Right Side: Accordion */}
        <div className="md:w-2/3 flex flex-col">
          {faqData.map((item) => (
            <FAQItem
              key={item.id}
              item={item}
              isOpen={openId === item.id}
              toggleItem={toggleItem}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;