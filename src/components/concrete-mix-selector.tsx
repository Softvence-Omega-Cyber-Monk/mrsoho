interface ConcreteMix {
  name: string;
  price: number;
}

interface ConcreteMixSelectorProps {
  mixes: ConcreteMix[];
  selectedMix: ConcreteMix | null;
  onMixChange: (mix: ConcreteMix | null) => void;
}

export default function ConcreteMixSelector({
  mixes,
  selectedMix,
  onMixChange,
}: ConcreteMixSelectorProps) {
  return (
    <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-3 w-full">
      {/* ✅ Ultra-responsive grid system for all devices */}
      {/* 
        Breakpoint guide:
        - Default: 1 column (mobile portrait)
        - xs: 2 columns (small mobile landscape) ~ 375px+
        - sm: 2 columns (tablet portrait) ~ 640px+
        - md: 3 columns (tablet landscape) ~ 768px+
        - lg: 4 columns (small desktop) ~ 1024px+
        - xl: 5 columns (medium desktop) ~ 1280px+
        - 2xl: 6 columns (large desktop) ~ 1536px+
      */}
      
      {mixes.map((mix) => (
        <button
          key={mix.name}
          onClick={() => onMixChange(selectedMix?.name === mix.name ? null : mix)}
          className={`
            p-2 xs:p-3 sm:p-3 md:p-4 
            rounded-lg border-2 transition-all text-left 
            w-full min-h-[80px] xs:min-h-[90px] sm:min-h-[100px]
            flex flex-col justify-center
            ${
              selectedMix?.name === mix.name
                ? "bg-yellow-400 border-yellow-500 text-slate-900 shadow-lg scale-[1.02]" 
                // ✅ Selected state with subtle scale effect
                : "bg-white border-gray-200 hover:border-blue-400 hover:shadow-md active:scale-95"
                // ✅ Added active state for mobile touch feedback
            }
          `}
        >
          <div className="font-bold text-gray-800 text-xs xs:text-sm sm:text-base md:text-lg">
            {mix.name}
          </div>
          {/* Uncomment if you want to show price */}
          {/* <div className="text-[10px] xs:text-xs sm:text-sm mt-0.5 xs:mt-1 text-green-600 font-semibold">
            ${mix.price.toFixed(2)} per yard
          </div> */}
        </button>
      ))}
    </div>
  );
}