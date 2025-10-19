import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FaqItemData {
  id: number;
  question: string;
  answer: string;
}

const faqData: FaqItemData[] = [
  {
    id: 1,
    question: "How much concrete should I order?",
    answer:
      "The volume depends on the size and type of project. Use our Concrete Calculator to estimate. Always add about 10% extra for uneven ground or spillage.",
  },
  {
    id: 2,
    question: "What does 28-day strength mean?",
    answer:
      "It is the industry standard for measuring compressive strength. Concrete gains most of its strength within 28 days of curing.",
  },
  {
    id: 3,
    question: "Can temperatures be too hot or too cold to cast concrete?",
    answer:
      "Yes. Below 40°F (4°C), curing slows and risks freezing. Above 90°F (32°C), water evaporates fast, reducing strength and causing cracks.",
  },
  {
    id: 4,
    question: "Are cracks in concrete normal?",
    answer:
      "Minor hairline cracks are normal due to shrinkage. Larger or spreading cracks may indicate structural issues and should be inspected.",
  },
];

interface FAQItemProps {
  item: FaqItemData;
  isOpen: boolean;
  toggleItem: (id: number) => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ item, isOpen, toggleItem }) => {
  const activeClasses = isOpen
    ? "border-t-4 border-yellow-500 shadow-lg"
    : "border-t-4 border-transparent";

  return (
    <div
      className={`mb-4 w-full cursor-pointer rounded-lg overflow-hidden transition-all duration-300 ${activeClasses}`}
      onClick={() => toggleItem(item.id)}
    >
      {/* Header */}
      <div className="flex justify-between items-center p-5 bg-slate-700 hover:bg-slate-600">
        <h3
          className={`text-base sm:text-lg transition-colors ${isOpen ? "text-yellow-400 font-semibold" : "text-gray-200"
            }`}
        >
          {item.question}
        </h3>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-yellow-400" />
        ) : (
          <ChevronDown className="w-5 h-5 text-yellow-300" />
        )}
      </div>

      {/* Answer */}
      <div
        className={`bg-slate-700/80 transition-[max-height,padding] duration-500 overflow-hidden ${isOpen ? "max-h-96 pt-4 pb-6 px-5" : "max-h-0 p-0"
          }`}
      >
        <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
          {item.answer}
        </p>
      </div>
    </div>
  );
};

const Faq = () => {
  const [openId, setOpenId] = useState<number | null>(faqData[0].id);

  const toggleItem = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="bg-gray-900 px-4 py-12 sm:px-6 md:px-12 lg:px-20 flex justify-center">
      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-10 md:gap-16">
        {/* Left column */}
        <div className="md:w-1/3 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-yellow-500 tracking-tight">
            FAQs
          </h1>
          <p className="text-gray-400 mt-3 text-base sm:text-lg leading-relaxed">
            Find answers to common questions about concrete and materials.
          </p>
        </div>

        {/* Right column */}
        <div className="md:w-2/3">
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
    </section>
  );
};

export default Faq;