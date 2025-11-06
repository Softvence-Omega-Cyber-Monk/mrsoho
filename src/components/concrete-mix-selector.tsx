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
    <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 ">
      {mixes.map((mix) => (
        <button
          key={mix.name}
          onClick={() => onMixChange(selectedMix?.name === mix.name ? null : mix)}
          className={`
            p-1 xs:p-2 sm:p-2 md:p-3 
            rounded-lg border-2 transition-all text-left 
            w-full
            flex flex-col justify-center
            ${
              selectedMix?.name === mix.name
                ? "bg-yellow-400 border-yellow-500 text-slate-900 shadow-lg scale-[1.02]" 
                : "bg-yellow-400 border-yellow-500 hover:shadow-md active:scale-95"
            }
          `}
        >
          <div className="font-semibold text-gray-800 text-xs xs:text-sm sm:text-base md:text-lg  whitespace-nowrap overflow-hidden">
            {mix.name}
          </div>
         
        </button>
      ))}
    </div>
  );
}