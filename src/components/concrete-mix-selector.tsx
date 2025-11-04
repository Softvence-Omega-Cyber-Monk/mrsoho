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
<div className="flex flex-wrap gap-5 justify-center md:justify-start">
      {mixes.map((mix) => (
        <button
          key={mix.name}
          onClick={() => onMixChange(selectedMix?.name === mix.name ? null : mix)}
          className={`p-4 rounded-lg border-2 transition-all text-left ${
            selectedMix?.name === mix.name
              ? "bg-yellow-400 border-yellow-500 text-slate-900"
              : "bg-[#fff] border-gray-200 text-slate-300 hover:border-slate-500"
          }`}
        >
          <div className="font-bold text-black">{mix.name}</div>
          <div className="text-sm mt-1 text-[#009444] font-semibold">${mix.price.toFixed(2)}</div>
        </button>
      ))}
    </div>
  );
}
