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
  const [unit, setUnit] = useState<"meters" | "feet" | "yards">("meters");

  const toMeters = (value: number) => {
    if (unit === "feet") return value * 0.3048;
    if (unit === "yards") return value * 0.9144;
    return value;
  };

  const handleUnitChange = (newUnit: "meters" | "feet" | "yards") => {
    setUnit(newUnit);
  };

  const handleChange = (field: keyof Dimensions, value: number) => {
    const inMeters = toMeters(value);
    onDimensionsChange({ ...dimensions, [field]: Math.max(0, inMeters) });
  };

  const getFieldValue = (field: keyof Dimensions) => {
    const raw = parseFloat(dimensions[field] as string) || 0;
    if (raw === 0) return "";
    const value = unit === "feet" ? raw / 0.3048 : unit === "yards" ? raw / 0.9144 : raw;
    const num = Number(value.toFixed(6));
    return num % 1 === 0 ? num.toString() : value.toFixed(2);
  };

  const getLabels = () => {
    switch (shape) {
      case "slab":
      case "footing":
        return { length: "Length", width: "Width", depth: "Thickness" };
      case "circular":
        return { length: "Diameter", depth: "Thickness" };
      case "column":
        return { length: "Diameter", depth: "Height" };
      case "gutter":
        return { length: "Length", width: "Width", depth: "Curb Depth" };
      case "steps":
        return { length: "Rise", width: "Run", depth: "Number of Steps" };
      default:
        return { length: "Length", width: "Width", depth: "Thickness" };
    }
  };

  const labels = getLabels();
  const unitLabel = unit === "feet" ? "ft" : unit === "yards" ? "yd" : "m";

  return (

<div className="w-full bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border shadow-sm sm:shadow-md border-gray-100">
  {/* Unit Toggle — Responsive */}
  <div className="mb-6 sm:mb-8 md:mb-10">
    <div className="flex justify-center sm:justify-end">
      <div className="inline-flex bg-gray-100 rounded-lg sm:rounded-xl p-1 sm:p-2 shadow-inner w-full sm:w-auto">
        {(["meters", "feet", "yards"] as const).map((u) => (
          <button
            key={u}
            onClick={() => handleUnitChange(u)}
            className={`px-3 sm:px-4 md:px-8 py-2 sm:py-2.5 md:py-3.5 cursor-pointer rounded-lg sm:rounded-xl text-xs sm:text-sm font-bold capitalize transition-all flex-1 sm:flex-none sm:min-w-[90px] md:min-w-[110px] ${
              unit === u
                ? "bg-black text-yellow-400 shadow-md sm:shadow-lg"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            {u === "meters" ? "Meters" : u === "feet" ? "Feet" : "Yards"}
          </button>
        ))}
      </div>
    </div>
  </div>

  <div className="space-y-4 sm:space-y-5 md:space-y-7">
    {/* Length & Width */}
    <div className="grid grid-cols-1 xs:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
      {/* Length */}
      <div className="relative">
        <label className="block text-xs sm:text-sm font-semibold text-gray-800 mb-1 sm:mb-2">
          {labels.length}
        </label>
        <div className="relative">
          <input
            type="number"
            step="0.01"
            inputMode="decimal"
            value={getFieldValue("length")}
            onChange={(e) => handleChange("length", parseFloat(e.target.value) || 0)}
            className="w-full h-[42px] sm:h-[44px] md:h-[46px] px-3 sm:px-4 md:px-5 bg-gray-50 border border-gray-200 rounded-xl sm:rounded-2xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition text-sm sm:text-base"
            placeholder="0"
          />
          <span className="absolute top-1/2 -translate-y-1/2 right-2 sm:right-3 bg-gray-200 text-gray-700 text-xs font-bold px-2 sm:px-3 py-1 rounded-full pointer-events-none">
            {unitLabel}
          </span>
        </div>
      </div>

      {/* Width */}
      {(shape === "slab" || shape === "footing" || shape === "gutter") && (
        <div className="relative">
          <label className="block text-xs sm:text-sm font-semibold text-gray-800 mb-1 sm:mb-2">
            {labels.width}
          </label>
          <div className="relative">
            <input
              type="number"
              step="0.01"
              inputMode="decimal"
              value={getFieldValue("width")}
              onChange={(e) => handleChange("width", parseFloat(e.target.value) || 0)}
              className="w-full h-[42px] sm:h-[44px] md:h-[46px] px-3 sm:px-4 md:px-5 bg-gray-50 border border-gray-200 rounded-xl sm:rounded-2xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition text-sm sm:text-base"
              placeholder="0"
            />
            <span className="absolute top-1/2 -translate-y-1/2 right-2 sm:right-3 bg-gray-200 text-gray-700 text-xs font-bold px-2 sm:px-3 py-1 rounded-full pointer-events-none">
              {unitLabel}
            </span>
          </div>
        </div>
      )}
    </div>

    {/* Steps */}
    {shape === "steps" && (
      <div className="grid grid-cols-1 xs:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
        <div className="relative">
          <label className="block text-xs sm:text-sm font-semibold text-gray-800 mb-1 sm:mb-2">
            Rise
          </label>
          <div className="relative">
            <input
              type="number"
              step="0.01"
              inputMode="decimal"
              value={getFieldValue("rise")}
              onChange={(e) => handleChange("rise", parseFloat(e.target.value) || 0)}
              className="w-full h-[42px] sm:h-[44px] md:h-[46px] px-3 sm:px-4 md:px-5 bg-gray-50 border border-gray-200 rounded-xl sm:rounded-2xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition text-sm sm:text-base"
              placeholder="0"
            />
            <span className="absolute top-1/2 -translate-y-1/2 right-2 sm:right-3 bg-gray-200 text-gray-700 text-xs font-bold px-2 sm:px-3 py-1 rounded-full pointer-events-none">
              {unitLabel}
            </span>
          </div>
        </div>
        <div className="relative">
          <label className="block text-xs sm:text-sm font-semibold text-gray-800 mb-1 sm:mb-2">
            Run
          </label>
          <div className="relative">
            <input
              type="number"
              step="0.01"
              inputMode="decimal"
              value={getFieldValue("run")}
              onChange={(e) => handleChange("run", parseFloat(e.target.value) || 0)}
              className="w-full h-[42px] sm:h-[44px] md:h-[46px] px-3 sm:px-4 md:px-5 bg-gray-50 border border-gray-200 rounded-xl sm:rounded-2xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition text-sm sm:text-base"
              placeholder="0"
            />
            <span className="absolute top-1/2 -translate-y-1/2 right-2 sm:right-3 bg-gray-200 text-gray-700 text-xs font-bold px-2 sm:px-3 py-1 rounded-full pointer-events-none">
              {unitLabel}
            </span>
          </div>
        </div>
      </div>
    )}

    {/* Gutter */}
    {shape === "gutter" && (
      <div className="grid grid-cols-1 xs:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
        <div className="relative">
          <label className="block text-xs sm:text-sm font-semibold text-gray-800 mb-1 sm:mb-2">
            Height
          </label>
          <div className="relative">
            <input
              type="number"
              step="0.01"
              inputMode="decimal"
              value={getFieldValue("height")}
              onChange={(e) => handleChange("height", parseFloat(e.target.value) || 0)}
              className="w-full h-[42px] sm:h-[44px] md:h-[46px] px-3 sm:px-4 md:px-5 bg-gray-50 border border-gray-200 rounded-xl sm:rounded-2xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition text-sm sm:text-base"
              placeholder="0"
            />
            <span className="absolute top-1/2 -translate-y-1/2 right-2 sm:right-3 bg-gray-200 text-gray-700 text-xs font-bold px-2 sm:px-3 py-1 rounded-full pointer-events-none">
              {unitLabel}
            </span>
          </div>
        </div>
        <div className="relative">
          <label className="block text-xs sm:text-sm font-semibold text-gray-800 mb-1 sm:mb-2">
            Curb Depth
          </label>
          <div className="relative">
            <input
              type="number"
              step="0.01"
              inputMode="decimal"
              value={getFieldValue("curbDepth")}
              onChange={(e) => handleChange("curbDepth", parseFloat(e.target.value) || 0)}
              className="w-full h-[42px] sm:h-[44px] md:h-[46px] px-3 sm:px-4 md:px-5 bg-gray-50 border border-gray-200 rounded-xl sm:rounded-2xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition text-sm sm:text-base"
              placeholder="0"
            />
            <span className="absolute top-1/2 -translate-y-1/2 right-2 sm:right-3 bg-gray-200 text-gray-700 text-xs font-bold px-2 sm:px-3 py-1 rounded-full pointer-events-none">
              {unitLabel}
            </span>
          </div>
        </div>
      </div>
    )}

    {/* Depth / Thickness */}
    {(shape !== "gutter" && shape !== "steps") && (
      <div className="relative">
        <label className="block text-xs sm:text-sm font-semibold text-gray-800 mb-1 sm:mb-2">
          {labels.depth}
        </label>
        <div className="relative">
          <input
            type="number"
            step="0.01"
            inputMode="decimal"
            value={getFieldValue("depth")}
            onChange={(e) => handleChange("depth", parseFloat(e.target.value) || 0)}
            className="w-full h-[42px] sm:h-[44px] md:h-[46px] px-3 sm:px-4 md:px-5 bg-gray-50 border border-gray-200 rounded-xl sm:rounded-2xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition text-sm sm:text-base"
            placeholder="0"
          />
          <span className="absolute top-1/2 -translate-y-1/2 right-2 sm:right-3 bg-gray-200 text-gray-700 text-xs font-bold px-2 sm:px-3 py-1 rounded-full pointer-events-none">
            {unitLabel}
          </span>
        </div>
      </div>
    )}

    {/* Quantity */}
    <div>
      <label className="block text-xs sm:text-sm font-semibold text-gray-800 mb-1 sm:mb-2">
        Quantity
      </label>
      <input
        type="number"
        min="1"
        inputMode="numeric"
        value={dimensions?.quantity > 0 ? dimensions.quantity : ""}
        onChange={(e) =>
          onDimensionsChange({
            ...dimensions,
            quantity: Math.max(1, parseInt(e.target.value) || 1),
          })
        }
        className="w-full h-[42px] sm:h-[44px] md:h-[46px] px-3 sm:px-4 md:px-5 bg-gray-50 border border-gray-200 rounded-xl sm:rounded-2xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition text-sm sm:text-base"
        placeholder="1"
      />
    </div>
  </div>
</div>

  );
}





// import { useState } from "react";
// import { Dimensions, ShapeType } from "../types";

// interface DimensionInputProps {
//   dimensions: Dimensions;
//   onDimensionsChange: (dimensions: Dimensions) => void;
//   shape: ShapeType;
// }

// export default function DimensionInput({
//   dimensions,
//   onDimensionsChange,
//   shape,
// }: DimensionInputProps) {
//   const [unit, setUnit] = useState<"feet" | "meters" | "yards">("meters");

//   const conversionFactor = unit === "feet" ? 0.3048 : unit === "yards" ? 0.9144 : 1;

//   const handleUnitChange = (newUnit: "feet" | "meters" | "yards") => {
//     setUnit(newUnit);
//   };

//   const handleChange = (field: keyof Dimensions, value: number) => {
//     const updatedValue = ["length", "width", "depth", "rise", "run", "height", "curbDepth"].includes(field as string)
//       ? Math.max(0, value * conversionFactor)
//       : Math.max(0, value);

//     onDimensionsChange({
//       ...dimensions,
//       [field]: updatedValue,
//     });
//   };

//   const getLabels = () => {
//     switch (shape) {
//       case "gutter":
//         return { length: "Length", width: "Width", depth: "Depth" };
//       case "column":
//         return { length: "Diameter", width: "N/A", depth: "Height" };
//       case "circular":
//         return { length: "Diameter", width: "N/A", depth: "Thickness" };
//       case "slab":
//         return { length: "Length", width: "Width", depth: "Depth" };
//       case "footing":
//          return { length: "Length", width: "Width", depth: "Depth" };
//       case "steps":
//         return { length: "Rise", width: "Run", depth: "Depth" };
//       default:
//         return { length: "Length", width: "Width", depth: "Depth" };
//     }
//   };

//   const labels = getLabels();
//   const unitLabel = unit === "feet" ? "ft" : unit === "yards" ? "yd" : "m";

//   return (
//     <div className="space-y-4">
//       <div className="flex space-x-2 mb-4">
//         <button
//           onClick={() => handleUnitChange("feet")}
//           className={`px-4 py-2 rounded cursor-pointer ${unit === "feet" ? "bg-yellow-400 text-slate-900" : "bg-slate-600 text-white"}`}
//         >
//           Feet
//         </button>
//         <button
//           onClick={() => handleUnitChange("meters")}
//           className={`px-4 py-2 rounded cursor-pointer ${unit === "meters" ? "bg-yellow-400 text-slate-900" : "bg-slate-600 text-white"}`}
//         >
//           Meters
//         </button>
//         <button
//           onClick={() => handleUnitChange("yards")}
//           className={`px-4 py-2 rounded cursor-pointer ${unit === "yards" ? "bg-yellow-400 text-slate-900" : "bg-slate-600 text-white"}`}
//         >
//           Yards
//         </button>
//       </div>
//       <div className="grid grid-cols-2 gap-4">
//         <div>
//           <label className="block text-sm font-medium text-black mb-2">{labels.length} ({unitLabel})</label>
//           <input
//             type="number"
//             value={dimensions ? (parseFloat(dimensions.length as string) / conversionFactor || "") : ""}
//             onChange={(e) => handleChange("length", Number.parseFloat(e.target.value))}
//             className="w-full bg-slate-700 border border-slate-600 rounded px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:border-yellow-400"
//             placeholder="0"
//           />
//         </div>

//         {shape !== "circular" && shape !== "column" && shape !== "steps" && (
//           <div>
//             <label className="block text-sm font-medium text-black mb-2">{labels.width} ({unitLabel})</label>
//             <input
//               type="number"
//               value={dimensions ? (parseFloat(dimensions.width as string) / conversionFactor || "") : ""}
//               onChange={(e) => handleChange("width", Number.parseFloat(e.target.value))}
//               className="w-full bg-slate-700 border border-slate-600 rounded px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400"
//               placeholder="0"
//             />
//           </div>
//         )}

//         {shape === "steps" && (
//           <>
//             <div>
//               <label className="block text-sm font-medium text-black mb-2">Rise ({unitLabel})</label>
//               <input
//                 type="number"
//                 value={dimensions ? (parseFloat(dimensions.rise as string) / conversionFactor || "") : ""}
//                 onChange={(e) => handleChange("rise", Number.parseFloat(e.target.value))}
//                 className="w-full bg-slate-700 border border-slate-600 rounded px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:border-yellow-400"
//                 placeholder="0"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-black mb-2">Run ({unitLabel})</label>
//               <input
//                 type="number"
//                 value={dimensions ? (parseFloat(dimensions.run as string) / conversionFactor || "") : ""}
//                 onChange={(e) => handleChange("run", Number.parseFloat(e.target.value))}
//                 className="w-full bg-slate-700 border border-slate-600 rounded px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:border-yellow-400"
//                 placeholder="0"
//               />
//             </div>
//           </>
//         )}

//         {shape === "gutter" && (
//           <>
//             <div>
//               <label className="block text-sm font-medium text-black mb-2">Height ({unitLabel})</label>
//               <input
//                 type="number"
//                 value={dimensions ? (parseFloat(dimensions.height as string) / conversionFactor || "") : ""}
//                 onChange={(e) => handleChange("height", Number.parseFloat(e.target.value))}
//                 className="w-full bg-slate-700 border border-slate-600 rounded px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:border-yellow-400"
//                 placeholder="0"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-black mb-2">Curb Depth ({unitLabel})</label>
//               <input
//                 type="number"
//                 value={dimensions ? (parseFloat(dimensions.curbDepth as string) / conversionFactor || "") : ""}
//                 onChange={(e) => handleChange("curbDepth", Number.parseFloat(e.target.value))}
//                 className="w-full bg-slate-700 border border-slate-600 rounded px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:border-yellow-400"
//                 placeholder="0"
//               />
//             </div>
//           </>
//         )}
//       </div>

//      {shape !== "gutter" && ( 
//         <div>
//           <label className="block text-sm font-medium text-black mb-2">{labels.depth} ({unitLabel})</label>
//           <input
//             type="number"
//             value={dimensions ? (parseFloat(dimensions.depth as string) / conversionFactor || "") : ""}
//             onChange={(e) => handleChange("depth", Number.parseFloat(e.target.value))}
//             className="w-full bg-slate-700 border border-slate-600 rounded px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:border-yellow-400"
//             placeholder="0"
//           />
//         </div>
//       )}

//       <div>
//         <label className="block text-sm font-medium text-black mb-2">Quantity</label>
//         <input
//           type="number"
//           value={dimensions ? dimensions.quantity : 1}
//           onChange={(e) => onDimensionsChange({ ...dimensions, quantity: Number.parseFloat(e.target.value) || 1 })}
//           min="1"
//           className="w-full bg-slate-700 border border-slate-600 rounded px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:border-yellow-400"
//           placeholder="1"
//         />
//       </div>
//     </div>
//   );
// }
