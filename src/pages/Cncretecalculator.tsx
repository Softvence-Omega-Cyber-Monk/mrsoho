import { useState } from "react"
import ShapeSelector from "@/components/shape-selector"
import DimensionInput from "@/components/dimension-input"
import ConcreteMixSelector from "@/components/concrete-mix-selector"
import ResultsPanel from "@/components/results-panel"
import ShapePreview from "@/components/shape-preview"

type ShapeType = "slab" | "footing" | "gutter" | "circular" | "column"

interface Dimensions {
  length: number
  width: number
  thickness: number
  quantity: number
}

interface ConcreteMix {
  name: string
  price: number
}

const CONCRETE_MIXES: ConcreteMix[] = [
  { name: "15 MPa Concrete", price: 245 },
  { name: "25 MPa Concrete", price: 255 },
  { name: "32 MPa Concrete", price: 265 },
  { name: ".04 UFILL", price: 245 },
]

export default function Home() {
  const [selectedShape, setSelectedShape] = useState<ShapeType>("slab")
  const [dimensions, setDimensions] = useState<Dimensions>({
    length: 0,
    width: 0,
    thickness: 0,
    quantity: 1,
  })
  const [selectedMix, setSelectedMix] = useState<ConcreteMix | null>(null)
  const [additionalCost, setAdditionalCost] = useState(0)

  // Calculate volume in cubic yards
  const calculateVolume = (): number => {
    let volumeCubicMeters = 0

    switch (selectedShape) {
      case "slab":
      case "footing":
        volumeCubicMeters = (dimensions.length * dimensions.width * dimensions.thickness) / 1000000
        break
      case "circular":
        const radius = dimensions.length / 2
        volumeCubicMeters = (Math.PI * radius * radius * dimensions.thickness) / 1000000
        break
      case "column":
        volumeCubicMeters = (dimensions.length * dimensions.width * dimensions.thickness) / 1000000
        break
      case "gutter":
        volumeCubicMeters = (dimensions.length * dimensions.width * dimensions.thickness) / 1000000
        break
    }

    // Convert cubic meters to cubic yards (1 cubic meter = 1.308 cubic yards)
    const volumeCubicYards = volumeCubicMeters * 1.308 * dimensions.quantity
    return Math.max(0, volumeCubicYards)
  }

  const volume = calculateVolume()
  const mixCost = selectedMix ? selectedMix.price * volume : 0
  const totalCost = mixCost + additionalCost

  const handleClearAll = () => {
    setDimensions({ length: 0, width: 0, thickness: 0, quantity: 1 })
    setSelectedMix(null)
    setAdditionalCost(0)
  }

  return (
    <main className="min-h-screen bg-white p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-slate-900 mb-2 text-center">Concrete Calculator</h1>
        <p className="text-slate-600 text-center mb-8">Calculate your concrete needs with precision</p>

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
              <DimensionInput dimensions={dimensions} onDimensionsChange={setDimensions} shape={selectedShape} />
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
  )
}
