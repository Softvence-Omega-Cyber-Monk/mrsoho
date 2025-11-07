import { Trash2 } from "lucide-react";

interface ResultsPanelProps {
  volume: number;
  totalCost: number;
  onClearAll: () => void;
}

export default function ResultsPanel({
  volume,
  totalCost,
  onClearAll,
}: ResultsPanelProps) {
  return (
    <div className="bg-slate-900 rounded-lg p-6 border border-slate-700">
      <h2 className="text-xl font-semibold text-white mb-6">Results</h2>

      <div className="space-y-4">
        {/* Total Volume */}
        <div className="bg-slate-800 rounded p-4 border border-slate-700">
          <p className="text-slate-400 text-sm mb-1">Total Volume</p>
          <p className="text-2xl font-bold text-white">
            {Math.round(volume)} <span className="text-sm text-slate-400">Yards³</span>
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