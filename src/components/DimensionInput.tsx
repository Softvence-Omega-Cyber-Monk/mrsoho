// src/components/DimensionInput.tsx
import { Dimensions, Unit } from "@/typs";
import React from "react";
import PrimaryBtn from "./PrimaryBtn";

interface DimensionInputProps {
  unit: Unit;
  setUnit: (unit: Unit) => void;
  dimensions: Dimensions;
  onDimensionChange: (key: keyof Dimensions, value: string) => void;
}

const DimensionInput: React.FC<DimensionInputProps> = ({
  unit,
  setUnit,
  dimensions,
  onDimensionChange,
}) => {
  const dimensionKeys: { label: string; keyName: keyof Dimensions }[] = [
    { label: "Length", keyName: "length" },
    { label: "Width", keyName: "width" },
    { label: "Thickness", keyName: "thickness" },
    { label: "Quantity", keyName: "quantity" },
  ];

  const unitSymbol = unit === "Meters" ? "m" : "ft";

  const InputField: React.FC<{ label: string; keyName: keyof Dimensions }> = ({
    label,
    keyName,
  }) => (
    <div className="flex flex-col mb-4">
      <label className="text-sm font-medium text-gray-700 mb-1">{label}</label>
      <div className="relative">
        <input
          type="number"
          step="any"
          min="0"
          placeholder="0"
          value={dimensions[keyName] === 0 ? "" : dimensions[keyName]}
          onChange={(e) => onDimensionChange(keyName, e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-yellow-500 focus:border-yellow-500 transition duration-150 pr-10"
        />
        {keyName !== "quantity" && (
          <span className="absolute right-0 top-0 h-full flex items-center pr-3 text-gray-400 text-sm">
            {unitSymbol}
          </span>
        )}
      </div>
    </div>
  );

  return (
    <div className=" p-6 bg-[#F9FAFB] rounded-lg shadow-md max-w-[614px]">
      {/* Unit Toggle Buttons */}
      <div className="flex justify-end">
        <div className="flex md:w-[356px] space-x-2 mb-6 p-1 bg-gray-100 rounded-lg">
          <button
            className={`flex-1 p-2 rounded-lg font-semibold transition-colors duration-200 ${
              unit === "Meters"
                ? "bg-black text-yellow-500 shadow-md"
                : "text-gray-600 hover:bg-gray-200"
            }`}
            onClick={() => setUnit("Meters")}
          >
            Meters
          </button>
          <button
            className={`flex-1 p-2 rounded-lg font-semibold transition-colors duration-200 ${
              unit === "Feet"
                ? "bg-black text-yellow-500 shadow-md"
                : "text-gray-600 hover:bg-gray-200"
            }`}
            onClick={() => setUnit("Feet")}
          >
            Feet
          </button>
        </div>
      </div>

      {/* Input Fields Grid */}
      <div className="grid md:grid-cols-2 gap-x-4">
        {dimensionKeys.map((item) => (
          <InputField
            key={item.keyName}
            label={item.label}
            keyName={item.keyName}
          />
        ))}
      </div>

      <PrimaryBtn btnText="Get Started for free" />
    </div>
  );
};

export default DimensionInput;
