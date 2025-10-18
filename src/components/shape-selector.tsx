"use client"

import { Square, Hammer, Zap, Circle, Columns3 } from "lucide-react"

type ShapeType = "slab" | "footing" | "gutter" | "circular" | "column"

interface ShapeSelectorProps {
  selectedShape: ShapeType
  onShapeChange: (shape: ShapeType) => void
}

const SHAPES = [
  { id: "slab", label: "Slabs & Walls", icon: Square },
  { id: "footing", label: "Footings", icon: Hammer },
  { id: "gutter", label: "Cutters & Gutters", icon: Zap },
  { id: "circular", label: "Circular Slabs", icon: Circle },
  { id: "column", label: "Columns & Piers", icon: Columns3 },
]

export default function ShapeSelector({ selectedShape, onShapeChange }: ShapeSelectorProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
      {SHAPES.map((shape) => {
        const Icon = shape.icon
        const isSelected = selectedShape === shape.id

        return (
          <button
            key={shape.id}
            onClick={() => onShapeChange(shape.id as ShapeType)}
            className={`p-4 rounded-lg border-2 transition-all flex flex-col items-center gap-2 ${
              isSelected
                ? "bg-yellow-400 border-yellow-500 text-slate-900"
                : "bg-slate-700 border-slate-600 text-slate-300 hover:border-slate-500"
            }`}
          >
            <Icon size={24} />
            <span className="text-sm font-medium text-center">{shape.label}</span>
          </button>
        )
      })}
    </div>
  )
}
