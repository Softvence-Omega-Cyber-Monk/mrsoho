// Define a type for your user (example)
export interface User {
    id: string;
    name: string;
    email: string;
  }
  
  // Define a type for your app's theme (example)
  export type Theme = 'light' | 'dark';
  
  // Define a type for your app's routes (example)
  export type Route = {
    path: string;
    component: React.ComponentType;
    exact?: boolean;
  };

  export type Unit = "meters" | "feet";

  export interface Dimensions {
    length: number | string;
    width: number | string;
    depth: number | string;
    quantity: number;
    rise: number | string;
    run: number | string;
    height?: number | string;
    curbDepth?: number | string;
  }

  export type ShapeType = "slab" | "footing" | "gutter" | "circular" | "column" | "steps";

  export type ShapeDisplayName = "Slabs & Walls" | "Footings" | "Curbs & Gutters" | "Columns & Piers" | "Circular Slabs";

  export interface ShapeOption {
    id: ShapeDisplayName;
    name: string;
    icon: string; // Assuming you'll use an icon
  }

  export const SHAPES: ShapeOption[] = [
    { id: "Slabs & Walls", name: "Slabs & Walls", icon: "slab-icon" },
    { id: "Footings", name: "Footings", icon: "footing-icon" },
    { id: "Curbs & Gutters", name: "Curbs & Gutters", icon: "gutter-icon" },
    { id: "Columns & Piers", name: "Columns & Piers", icon: "column-icon" },
    { id: "Circular Slabs", name: "Circular Slabs", icon: "circular-icon" },
  ];

  export interface ShapeSelectorProps {
    selectedShape: ShapeDisplayName;
    onShapeChange: (shape: ShapeDisplayName) => void;
  }

  export interface ResultsPanelProps {
    cubicYards: number;
    cubicMeters: number;
    totalCost: number;
    additionalCost: number;
    onAdditionalCostChange: (cost: number) => void;
        onClearAll: () => void;
      }
    
      export interface ConcreteMix {
        id: string;
        name: string;
        pricePerCubicYard: number;
      }
    