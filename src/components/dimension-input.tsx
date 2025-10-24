import { useState } from "react";
import { Dimensions, ShapeType } from "../types";

interface DimensionInputProps {
  dimensions: Dimensions;
  onDimensionsChange: (dimensions: Dimensions) => void;
  shape: ShapeType;
}

export default function DimensionInput({
  dimensions,
  onDimensionsChange,
  shape,
}: DimensionInputProps) {
  const [unit, setUnit] = useState<"feet" | "meters">("feet");

  const conversionFactor = unit === "feet" ? 0.3048 : 1;

  const handleUnitChange = (newUnit: "feet" | "meters") => {
    setUnit(newUnit);
  };

  const handleChange = (field: keyof Dimensions, value: number) => {
    onDimensionsChange({
      ...(dimensions || { length: 0, width: 0, thickness: 0, quantity: 1, rise: 0, run: 0 }),
      [field]: Math.max(0, value * conversionFactor),
    });
  };

  const getLabels = () => {
    switch (shape) {
      case "gutter":
        return { length: "Length", width: "Thickness", thickness: "Height" };
      case "column":
        return { length: "Diameter", width: "N/A", thickness: "Height" };
      case "circular":
        return { length: "Diameter", width: "N/A", thickness: "Depth" };
      case "slab":
        return { length: "Length", width: "Width", thickness: "Depth" };
      case "footing":
        return { length: "Length", width: "Width", thickness: "Depth" };
      case "steps":
        return { length: "Rise", width: "Run", thickness: "Depth" };
      default:
        return { length: "Length", width: "Width", thickness: "Thickness" };
    }
  };

  const labels = getLabels();
  const unitLabel = unit === "feet" ? "ft" : "m";

  return (
    <div className="space-y-4">
      <div className="flex space-x-2 mb-4">
        <button
          onClick={() => handleUnitChange("feet")}
          className={`px-4 py-2 rounded ${unit === "feet" ? "bg-yellow-400 text-slate-900" : "bg-slate-600 text-white"}`}
        >
          Feet
        </button>
        <button
          onClick={() => handleUnitChange("meters")}
          className={`px-4 py-2 rounded ${unit === "meters" ? "bg-yellow-400 text-slate-900" : "bg-slate-600 text-white"}`}
        >
          Meters
        </button>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">{labels.length} ({unitLabel})</label>
          <input
            type="number"
            value={dimensions ? (parseFloat(dimensions.length as string) / conversionFactor || "") : ""}
            onChange={(e) => handleChange("length", Number.parseFloat(e.target.value))}
            className="w-full bg-slate-700 border border-slate-600 rounded px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:border-yellow-400"
            placeholder="0"
          />
        </div>

        {shape !== "circular" && shape !== "column" && shape !== "steps" && (
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">{labels.width} ({unitLabel})</label>
            <input
              type="number"
              value={dimensions ? (parseFloat(dimensions.width as string) / conversionFactor || "") : ""}
              onChange={(e) => handleChange("width", Number.parseFloat(e.target.value))}
              className="w-full bg-slate-700 border border-slate-600 rounded px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:border-yellow-400"
              placeholder="0"
            />
          </div>
        )}

        {shape === "steps" && (
          <>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Rise ({unitLabel})</label>
              <input
                type="number"
                value={dimensions ? (parseFloat(dimensions.rise as string) / conversionFactor || "") : ""}
                onChange={(e) => handleChange("rise", Number.parseFloat(e.target.value))}
                className="w-full bg-slate-700 border border-slate-600 rounded px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:border-yellow-400"
                placeholder="0"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Run ({unitLabel})</label>
              <input
                type="number"
                value={dimensions ? (parseFloat(dimensions.run as string) / conversionFactor || "") : ""}
                onChange={(e) => handleChange("run", Number.parseFloat(e.target.value))}
                className="w-full bg-slate-700 border border-slate-600 rounded px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:border-yellow-400"
                placeholder="0"
              />
            </div>
          </>
        )}
      </div>

      {shape !== "circular" && shape !== "column" && shape !== "steps" && (
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">{labels.thickness} ({unitLabel})</label>
          <input
            type="number"
            value={dimensions ? (parseFloat(dimensions.thickness as string) / conversionFactor || "") : ""}
            onChange={(e) => handleChange("thickness", Number.parseFloat(e.target.value))}
            className="w-full bg-slate-700 border border-slate-600 rounded px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:border-yellow-400"
            placeholder="0"
          />
        </div>
      )}

      <div>
        <label className="block text-sm font-medium text-slate-300 mb-2">Quantity</label>
        <input
          type="number"
          value={dimensions ? dimensions.quantity : 1}
          onChange={(e) => onDimensionsChange({ ...(dimensions || { length: 0, width: 0, thickness: 0, quantity: 1, rise: 0, run: 0 }), quantity: Number.parseFloat(e.target.value) || 1 })}
          min="1"
          className="w-full bg-slate-700 border border-slate-600 rounded px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:border-yellow-400"
          placeholder="1"
        />
      </div>
    </div>
  );
}
