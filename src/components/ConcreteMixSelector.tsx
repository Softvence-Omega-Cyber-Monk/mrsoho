// src/components/ConcreteMixSelector.tsx
import { ConcreteMix } from '@/types';
import React from 'react'; // Assuming ConcreteMix type is imported

interface ConcreteMixSelectorProps {
  mixes: ConcreteMix[]; // The list of all available mixes (e.g., from CONCRETE_MIXES constant)
  selectedMix: ConcreteMix | null; // The currently selected mix
  onSelectMix: (mix: ConcreteMix | null) => void; // Handler for selecting a mix
}

const ConcreteMixSelector: React.FC<ConcreteMixSelectorProps> = ({ mixes, selectedMix, onSelectMix }) => {
  return (
    // Container for the mix cards. Responsive grid: 2 columns on small screens, 4 on medium/large.
    <div className="grid md:grid-cols-2 gap-4 mt-4 max-w-[614px]">
      {mixes.map(mix => (
        <div
          key={mix.id}
          onClick={() => onSelectMix(mix)}
          // Base Styling: fixed height, centered content, clickable
          className={`
            h-24 w-[296px] p-3 rounded-lg shadow-md transition-all duration-200 cursor-pointer 
            border-2 flex flex-col justify-center items-center text-center
            
            bg-white border-gray-200 text-gray-700 hover:border-yellow-500
            
            ${
              selectedMix?.id === mix.id 
                ? 'bg-black border-yellow-500 text-yellow-500 shadow-xl' 
                : ''
            }
          `}
        >
          {/* Mix Name (e.g., 15 MPa Concrete (R1-R2)) */}
          <h4 className="text-sm font-bold leading-snug">{mix.name}</h4>
          
          {/* Price (e.g., $245.00) */}
          <p className="text-lg font-extrabold mt-1">
            {/* Display price formatted to two decimal places */}
            ${mix.pricePerCubicYard.toFixed(2)}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ConcreteMixSelector;