import { useState } from "react";
import ShapeSelector from "@/components/shape-selector";
import DimensionInput from "@/components/dimension-input";
import ConcreteMixSelector from "@/components/concrete-mix-selector";
import ResultsPanel from "@/components/results-panel";
import ShapePreview from "@/components/shape-preview";
import { ShapeType, Dimensions } from "../types";

interface ConcreteMix {
  name: string;
  price: number;
}

const CONCRETE_MIXES: ConcreteMix[] = [
  { name: "15 MPa Concrete", price: 245 },
  { name: "25 MPa Concrete", price: 255 },
  { name: "32 MPa Concrete", price: 265 },
  { name: ".04 UFILL", price: 245 },
];

export default function Home() {
  const [selectedShape, setSelectedShape] = useState<ShapeType>("slab");
  const [dimensions, setDimensions] = useState<Dimensions | null>(null);
  const [selectedMix, setSelectedMix] = useState<ConcreteMix | null>(null);
  const [additionalCost, setAdditionalCost] = useState(0);

  // Calculate volume in cubic yards
  const calculateVolume = (): number => {
    if (!dimensions) return 0;

    const length = parseFloat(dimensions.length as string) || 0;
    const width = parseFloat(dimensions.width as string) || 0;
    const thickness = parseFloat(dimensions.thickness as string) || 0;
    const quantity = dimensions.quantity || 0;
    const rise = parseFloat(dimensions.rise as string) || 0;
    const run = parseFloat(dimensions.run as string) || 0;

    let volumeCubicMeters = 0;

    switch (selectedShape) {
      case "slab":
      case "footing":
        volumeCubicMeters = length * width * thickness;
        break;
      case "circular":
        const radius = length / 2;
        volumeCubicMeters = Math.PI * radius * radius * thickness;
        break;
      case "column":
        volumeCubicMeters = length * width * thickness;
        break;
      case "steps":
        volumeCubicMeters = rise * run * thickness; // Placeholder calculation for steps
        break;
      case "gutter":
        volumeCubicMeters = length * width * thickness;
        break;
    }

    // Convert cubic meters to cubic yards (1 cubic meter = 1.308 cubic yards)
    const volumeCubicYards = volumeCubicMeters * 1.308 * quantity;
    return Math.max(0, volumeCubicYards);
  };

  const volume = calculateVolume();
  const mixCost = selectedMix ? selectedMix.price * volume : 0;
  const totalCost = mixCost + additionalCost;

  const handleClearAll = () => {
    setDimensions(null);
    setSelectedMix(null);
    setAdditionalCost(0);
  };

  return (
    <main className="min-h-screen bg-white p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-slate-900 mb-2 text-center">
          Concrete Calculator
        </h1>
        <p className="text-slate-600 text-center mb-8">
          Calculate your concrete needs with precision
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Panel - Inputs */}
          <div className="lg:col-span-2 space-y-6">
            {/* Shape Selection */}
            <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
              <h2 className="text-xl font-semibold text-slate-900 mb-4">1. Select Shape</h2>
              <ShapeSelector selectedShape={selectedShape} onShapeChange={setSelectedShape} />
            </div>

            {/* Dimensions */}
            <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
              <h2 className="text-xl font-semibold text-slate-900 mb-4">2. Enter Dimensions</h2>
              <DimensionInput
                dimensions={dimensions || { length: "", width: "", thickness: "", quantity: 1, rise: "", run: "" }}
                onDimensionsChange={(dims) => setDimensions(dims)}
                shape={selectedShape}
              />
            </div>

            {/* Concrete Mix Selection */}
            <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
              <h2 className="text-xl font-semibold text-slate-900 mb-4">3. Select a Concrete Mix (Optional)</h2>
              <ConcreteMixSelector mixes={CONCRETE_MIXES} selectedMix={selectedMix} onMixChange={setSelectedMix} />
            </div>

            {/* Get Started Button */}
            <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-bold py-3 px-6 rounded-lg transition-colors">
              Get Started for free
            </button>
          </div>

          {/* Right Panel - Preview & Results */}
          <div className="space-y-6">
            {/* Shape Preview */}
            <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
              <ShapePreview shape={selectedShape} />
            </div>

            {/* Results */}
            <ResultsPanel
              volume={volume}
              totalCost={totalCost}
              additionalCost={additionalCost}
              onAdditionalCostChange={setAdditionalCost}
              onClearAll={handleClearAll}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
