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
      "The volume of concrete you should order depends on the size and type of project. If you know the width (diameter for round applications), depth and length of the concrete pour, you can use our Concrete Calculator to find out how much concrete you need.",
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
      className={`mb-4 w-full max-w-[616px] sm:w-[90%] md:w-[500px] lg:w-[600px] xl:w-[616px] cursor-pointer rounded-lg overflow-hidden transition-all duration-300 ${activeClasses}`}
      onClick={() => toggleItem(item.id)}
    >
      {/* Header */}
      <div className="flex justify-between items-center p-4 sm:p-5 bg-slate-700 hover:bg-slate-600">
        <h3
          className={`text-sm sm:text-base md:text-lg transition-colors ${
            isOpen ? "text-yellow-400 font-semibold" : "text-gray-200"
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
        className={`bg-slate-700/80 transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen
            ? "max-h-[400px] pt-4 pb-6 px-4 sm:px-5 opacity-100"
            : "max-h-0 pt-0 pb-0 px-4 sm:px-5 opacity-0"
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
    <section className="py-12 w-full mx-auto px-4 sm:px-6 lg:px-12">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
        {/* Left column */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-yellow-500 tracking-tight">
            FAQs
          </h2>
          <p className="text-gray-400 mt-3 text-sm sm:text-base md:max-w-md">
            Find answers to the most commonly asked questions about our services
            and concrete solutions.
          </p>
        </div>

        {/* Right column */}
        <div className="flex flex-col items-center md:items-start w-full md:w-auto">
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
