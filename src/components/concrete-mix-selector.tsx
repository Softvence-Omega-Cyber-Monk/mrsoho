import { ConcreteMix } from '@/types';

interface ConcreteMixSelectorProps {
  mixes: ConcreteMix[];
  selectedMix: ConcreteMix | null;
  onSelectMix: (mix: ConcreteMix | null) => void;
}

export default function ConcreteMixSelector({
  mixes,
  selectedMix,
  onSelectMix,
}: ConcreteMixSelectorProps) {
  return (
    <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2">
      {mixes.map((mix) => {
        const isActive = selectedMix?.id === mix.id;
        return (
          <button
            key={mix.id}
            onClick={() => onSelectMix(isActive ? null : mix)}
            className={`p-1 xs:p-2 sm:p-2 md:p-3 
              rounded-lg border-2 text-left w-full flex flex-col justify-center
              transition-all duration-200 cursor-pointer
              ${isActive
                ? "bg-yellow-600 border-yellow-700 text-white shadow-xl scale-[1.05] ring-4 ring-yellow-300"
                : "bg-yellow-400 border-yellow-500 hover:bg-yellow-600 hover:shadow-lg hover:scale-[1.03] active:scale-95"
              }`}
          >
            <div
              className={`font-semibold text-xs xs:text-sm sm:text-base md:text-lg whitespace-nowrap overflow-hidden ${isActive ? "text-white" : "text-gray-800"
                }`}
            >
              {mix.name}
            </div>
          </button>
        );
      })}
    </div>
  );
}
