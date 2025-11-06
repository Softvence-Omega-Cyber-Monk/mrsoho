"use client"

interface DimensionFormProps {
  selectedMaterial: string
  dimensions: Record<string, string>
  onDimensionsChange: (dimensions: Record<string, string>) => void
  unit: "meters" | "feet"
  onUnitChange: (unit: "meters" | "feet") => void
  onCalculate: () => void
}

export default function DimensionForm({
  selectedMaterial,
  dimensions,
  onDimensionsChange,
  unit,
  onUnitChange,
  onCalculate,
}: DimensionFormProps) {
  const handleInputChange = (key: string, value: string) => {
    onDimensionsChange({ ...dimensions, [key]: value })
  }

  const getFields = () => {
    switch (selectedMaterial) {
      case "slabs-walls":
        return ["length", "width", "thickness"]
      case "footings":
        return ["length", "width", "height"]
      case "curbs-gutters":
        return ["length", "height", "thickness"]
      case "circular-slab":
        return ["width", "thickness"]
      case "columns-piers":
        return ["width", "height", "quantity"]
      default:
        return []
    }
  }

  const fields = getFields()
  const fieldLabels: Record<string, string> = {
    length: "Length",
    width: "Width",
    height: "Height",
    thickness: "thickness",
    quantity: "Quantity",
  }

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-sm font-semibold text-gray-700 mb-4">2. Enter Dimensions</h2>

      {/* Unit Toggle */}
      <div className="flex gap-2 mb-6">
        <button
          onClick={() => onUnitChange("meters")}
          className={`flex-1 py-2 px-3 rounded-lg font-medium text-sm transition-all ${
            unit === "meters" ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          Meters
        </button>
        <button
          onClick={() => onUnitChange("feet")}
          className={`flex-1 py-2 px-3 rounded-lg font-medium text-sm transition-all ${
            unit === "feet" ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          Feet
        </button>
      </div>

      {/* Input Fields */}
      <div className="space-y-3 mb-6">
        {fields.map((field) => (
          <div key={field}>
            <label className="block text-xs font-medium text-gray-600 mb-1">{fieldLabels[field]}</label>
            <input
              type="number"
              value={dimensions[field]}
              onChange={(e) => handleInputChange(field, e.target.value)}
              placeholder="--"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
        ))}
      </div>

      {/* Calculate Button */}
      <button
        onClick={onCalculate}
        className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-4 rounded-lg transition-all"
      >
        Get Started for free
      </button>
    </div>
  )
}
