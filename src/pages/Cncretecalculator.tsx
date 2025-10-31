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
        volumeCubicMeters = rise * run * thickness;
        break;
      case "gutter":
        volumeCubicMeters = length * width * thickness;
        break;
    }

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
    <main className="min-h-screen bg-white px-4 sm:px-6 md:px-8 py-8">
      <div className="max-w-[1440px] mx-auto">
        {/* HEADER */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-3">
            Concrete Calculator
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-slate-600">
            Calculate your concrete needs with precision
          </p>
        </div>

        {/* GRID LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {/* LEFT SIDE (Inputs) */}
          <div className="lg:col-span-2 space-y-6">
            {/* 1. Shape Selector */}
            <div className="bg-slate-50 rounded-xl p-5 md:p-6 border border-slate-200 shadow-sm">
              <h2 className="text-lg sm:text-xl font-semibold text-slate-900 mb-4">
                1. Select Shape
              </h2>
              <ShapeSelector selectedShape={selectedShape} onShapeChange={setSelectedShape} />
            </div>

            {/* 2. Dimension Input */}
            <div className="bg-slate-50 rounded-xl p-5 md:p-6 border border-slate-200 shadow-sm">
              <h2 className="text-lg sm:text-xl font-semibold text-slate-900 mb-4">
                2. Enter Dimensions
              </h2>
              <DimensionInput
                dimensions={dimensions || { length: "", width: "", thickness: "", quantity: 1, rise: "", run: "" }}
                onDimensionsChange={(dims) => setDimensions(dims)}
                shape={selectedShape}
              />
            </div>

            {/* 3. Concrete Mix Selector */}
            <div className="bg-slate-50 rounded-xl p-5 md:p-6 border border-slate-200 shadow-sm">
              <h2 className="text-lg sm:text-xl font-semibold text-slate-900 mb-4">
                3. Select a Concrete Mix (Optional)
              </h2>
              <ConcreteMixSelector mixes={CONCRETE_MIXES} selectedMix={selectedMix} onMixChange={setSelectedMix} />
            </div>

            {/* CTA Button */}
            <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-bold py-3 md:py-4 px-6 rounded-lg transition-colors">
              Get Started for Free
            </button>
          </div>

          {/* RIGHT SIDE (Preview & Results) */}
          <div className="space-y-6">
            <div className="bg-slate-50 rounded-xl p-5 md:p-6 border border-slate-200 shadow-sm">
              <ShapePreview shape={selectedShape} />
            </div>
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
