// src/components/ShapeSelector.tsx
import { ShapeDisplayName } from '@/types';
import React from 'react';// Adjust the import path as necessary

interface ShapeSelectorProps {
  selectedShape: ShapeDisplayName;
  onSelectShape: (newShape: ShapeDisplayName) => void;
}

const SHAPE_OPTIONS: ShapeDisplayName[] = [
  'Slabs & Walls', 
  'Footings', 
  'Curbs & Gutters', 
  'Circular Slabs', 
  'Columns & Piers'
];

const ShapeSelector: React.FC<ShapeSelectorProps> = ({ selectedShape, onSelectShape }) => {
  return (
    <div className="flex flex-wrap gap-4 justify-start max-w-[614px]">
      {SHAPE_OPTIONS.map(shape => (
        <div
          key={shape}
          onClick={() => onSelectShape(shape)}
          className={`
            shape-card 
            w-[188px] h-32 flex flex-col items-center justify-center p-4 
            rounded-lg shadow-md transition-all duration-200 cursor-pointer border-2
            
            // --- Default (Inactive) State ---
            bg-white border-gray-200 text-gray-700 hover:border-black
            
            // --- Active State (Black BG, Yellow Text/Icon) ---
            ${
              selectedShape === shape 
                ? 'bg-black border-black text-yellow-500 shadow-xl' 
                : ''
            }
          `}
        >
          {/* Icon Placeholder */}
          <div 
            className={`
              mb-2 p-2 rounded-full font-extrabold text-2xl
              ${selectedShape === shape ? 'bg-yellow-500 text-black' : 'bg-gray-100 text-gray-600'}
            `}
          >
             {/* Using simple emojis for visual cues */}
             {shape === 'Slabs & Walls' && '🧱'} 
             {shape === 'Footings' && '🦶'}
             {shape === 'Curbs & Gutters' && '🌊'}
             {shape === 'Circular Slabs' && '⭕'}
             {shape === 'Columns & Piers' && '🏛️'}
          </div>
          
          <p className="text-sm font-semibold leading-tight">{shape}</p>
        </div>
      ))}
    </div>
  );
};

export default ShapeSelector;