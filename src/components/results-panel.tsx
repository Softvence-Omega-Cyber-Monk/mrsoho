import { Trash2 } from "lucide-react";

interface ResultsPanelProps {
  volume: number;
  totalCost: number;
  additionalCost: number;
  onAdditionalCostChange: (cost: number) => void;
  onClearAll: () => void;
}

export default function ResultsPanel({
  volume,
  totalCost,
  additionalCost,
  onAdditionalCostChange,
  onClearAll,
}: ResultsPanelProps) {
  return (
    <div className="bg-slate-900 rounded-lg p-6 border border-slate-700">
      <h2 className="text-xl font-semibold text-white mb-6">Results</h2>

      <div className="space-y-4">
        {/* Additional Cost Input */}
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">Add Cost (Optional)</label>
          <div className="flex gap-2">
            <span className="text-slate-400 py-2">$</span>
            <input
              type="number"
              value={additionalCost}
              onChange={(e) => onAdditionalCostChange(Number.parseFloat(e.target.value) || 0)}
              className="flex-1 bg-slate-700 border border-slate-600 rounded px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:border-yellow-400"
              placeholder="0.00"
            />
          </div>
        </div>

        {/* Total Volume */}
        <div className="bg-slate-800 rounded p-4 border border-slate-700">
          <p className="text-slate-400 text-sm mb-1">Total Volume</p>
          <p className="text-2xl font-bold text-white">
            {Math.round(volume)} <span className="text-sm text-slate-400">m³</span>
          </p>
        </div>

        {/* Estimated Cost */}
        <div className="bg-yellow-400 rounded p-4">
          <p className="text-slate-900 text-sm mb-1 font-medium">Estimated costs depending on delivery location</p>
          <p className="text-3xl font-bold text-slate-900">${totalCost.toFixed(2)}</p>
        </div>

        {/* Clear All Button */}
        <button
          onClick={onClearAll}
          className="w-full bg-slate-700 hover:bg-slate-600 text-slate-300 font-medium py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
        >
          <Trash2 size={18} />
          Clear All
        </button>
      </div>
    </div>
  );
}
