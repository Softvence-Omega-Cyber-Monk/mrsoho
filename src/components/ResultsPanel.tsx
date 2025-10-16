// src/components/ResultsPanel.tsx
import React from "react";

interface ResultsPanelProps {
  // Data passed down from the main component:
  totalVolumeYards: number;
  estimatedCost: number;

  // State/Handler for the optional cost input:
  addCostPerYard: number;
  setAddCostPerYard: (cost: number) => void;

  // Handler for the clear button:
  onClearAll: () => void;
}

const ResultsPanel: React.FC<ResultsPanelProps> = ({
  totalVolumeYards,
  estimatedCost,
  addCostPerYard,
  setAddCostPerYard,
  onClearAll, // Destructure the clear handler
}) => {
  // Format the numbers for display, showing two decimal places.
  const volumeDisplay = totalVolumeYards.toFixed(2);
  const costDisplay = estimatedCost.toFixed(2);

  return (
    // The panel has a dark background (bg-gray-800) for high contrast, matching the design aesthetic.
    <div className="p-6 bg-gray-800 rounded-lg shadow-xl text-white max-w-[614px] mx-auto h-full ">
      {/* Panel Content (Top Section) */}
      <div className="flex flex-col">
        <div className="mb-4">
          <h3 className="text-xl font-bold mb-4 text-[#FEDA42] text-center">
            Results
          </h3>
          <hr className="text-[#C6CAD1]" />
        </div>

        {/* Optional Add Cost Input */}
        <div className="add-cost-input-group mb-6">
          <label className="text-sm font-medium block mb-1">
            Add Cost (Optional)
          </label>
          <div className="relative flex items-center">
            {/* Dollar sign positioned inside the input */}
            <span className="absolute left-0 top-0 h-full flex items-center pl-3 text-gray-400">
              $
            </span>
            <input
              type="number"
              step="0.01"
              min="0"
              placeholder="0.00"
              // Only show a value if it's not zero, otherwise show placeholder
              value={addCostPerYard === 0 ? "" : addCostPerYard}
              onChange={(e) =>
                setAddCostPerYard(parseFloat(e.target.value) || 0)
              }
              // Styling for input on dark background
              className="w-full p-3 pl-8 bg-gray-900 border border-gray-700 rounded-lg text-white focus:ring-yellow-500 focus:border-yellow-500 transition duration-150"
            />
          </div>
        </div>

        {/* Total Volume Output */}
        <div className="flex justify-between items-center bg-[#323C4B] p-3 rounded-xl mb-3 ">
          <p className="text-xl -400">Total Volume</p>
          <div className="flex justify-between items-center  mt-1">
            <strong className="text-4xl font-extrabold text-yellow-500">
              {volumeDisplay}
            </strong>
            <span className="text-base font-semibold ml-2">yards</span>
          </div>
        </div>

        {/* Estimated Cost Output */}
        <div className="flex justify-between items-center bg-[#FEDA42] p-3 rounded-xl mb-3 text-website-color-black">
          <p className="text-xl">Estimated Cost</p>
          <div className="flex justify-between items-end mt-1">
            <strong className="text-4xl font-extrabold">${costDisplay}</strong>
          </div>
        </div>
      </div>

      {/* Clear All Button (Fixed to bottom) */}
      <div className="flex justify-center">

      <button
        className="text-[#AAB1BA]  "
        onClick={onClearAll} // Calls the handler passed from the main component
      >
        Clear All
      </button>
      </div>
    </div>
  );
};

export default ResultsPanel;
