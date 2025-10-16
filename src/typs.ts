// src/types.ts

// --- Interfaces ---
export interface Dimensions {
  length: number;
  width: number;
  thickness: number;
  quantity: number;
}

export interface ConcreteMix {
  id: string;
  name: string;
  pricePerCubicYard: number;
}

export type Unit = 'Meters' | 'Feet';

export type Shape = 'Slabs & Walls' | 'Footings' | 'Curbs & Gutters' | 'Circular Slabs' | 'Columns & Piers';

// --- Constants ---
export const CONCRETE_MIXES: ConcreteMix[] = [
  { id: '15MPa', name: '15 MPa Concrete (R1-R2)', pricePerCubicYard: 245.00 },
  { id: '25MPa', name: '25 MPa Concrete (F2)', pricePerCubicYard: 255.00 },
  { id: '32MPa', name: '32 MPa Concrete (C2)', pricePerCubicYard: 265.00 },
  { id: 'UFILL', name: '.04 UFILL Flowable Fill', pricePerCubicYard: 245.00 },
];

export const METERS_TO_YARDS_CUBE = 1.30795; // 1 m³ ≈ 1.30795 yd³
export const CUBIC_FEET_IN_YARD = 27;        // 1 yd³ = 27 ft³