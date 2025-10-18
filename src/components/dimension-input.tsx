"use client"

type ShapeType = "slab" | "footing" | "gutter" | "circular" | "column"

interface Dimensions {
  length: number
  width: number
  thickness: number
  quantity: number
}

interface DimensionInputProps {
  dimensions: Dimensions
  onDimensionsChange: (dimensions: Dimensions) => void
  shape: ShapeType
}

export default function DimensionInput({ dimensions, onDimensionsChange, shape }: DimensionInputProps) {
  const handleChange = (field: keyof Dimensions, value: number) => {
    onDimensionsChange({
      ...dimensions,
      [field]: Math.max(0, value),
    })
  }

  const getLabels = () => {
    switch (shape) {
      case "circular":
        return { length: "Diameter", width: "N/A", thickness: "Depth" }
      case "column":
        return { length: "Height", width: "Width", thickness: "Depth" }
      default:
        return { length: "Length", width: "Width", thickness: "Thickness" }
    }
  }

  const labels = getLabels()

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">{labels.length} (m)</label>
          <input
            type="number"
            value={dimensions.length}
            onChange={(e) => handleChange("length", Number.parseFloat(e.target.value) || 0)}
            className="w-full bg-slate-700 border border-slate-600 rounded px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:border-yellow-400"
            placeholder="0"
          />
        </div>

        {shape !== "circular" && (
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">{labels.width} (m)</label>
            <input
              type="number"
              value={dimensions.width}
              onChange={(e) => handleChange("width", Number.parseFloat(e.target.value) || 0)}
              className="w-full bg-slate-700 border border-slate-600 rounded px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:border-yellow-400"
              placeholder="0"
            />
          </div>
        )}

        {shape === "circular" && (
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Depth (m)</label>
            <input
              type="number"
              value={dimensions.thickness}
              onChange={(e) => handleChange("thickness", Number.parseFloat(e.target.value) || 0)}
              className="w-full bg-slate-700 border border-slate-600 rounded px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:border-yellow-400"
              placeholder="0"
            />
          </div>
        )}
      </div>

      {shape !== "circular" && (
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">{labels.thickness} (m)</label>
          <input
            type="number"
            value={dimensions.thickness}
            onChange={(e) => handleChange("thickness", Number.parseFloat(e.target.value) || 0)}
            className="w-full bg-slate-700 border border-slate-600 rounded px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:border-yellow-400"
            placeholder="0"
          />
        </div>
      )}

      <div>
        <label className="block text-sm font-medium text-slate-300 mb-2">Quantity</label>
        <input
          type="number"
          value={dimensions.quantity}
          onChange={(e) => handleChange("quantity", Number.parseFloat(e.target.value) || 1)}
          min="1"
          className="w-full bg-slate-700 border border-slate-600 rounded px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:border-yellow-400"
          placeholder="1"
        />
      </div>
    </div>
  )
}
