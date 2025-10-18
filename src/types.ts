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
    length: number;
    width: number;
    thickness: number;
    quantity: number;
  }

  export type Shape = "slab" | "footing" | "gutter" | "circular" | "column";

  export type ShapeType = "Slabs & Walls" | "Footings" | "Curbs & Gutters" | "Columns & Piers" | "Circular Slabs";

  export interface ShapeOption {
    id: ShapeType;
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
    selectedShape: ShapeType;
    onShapeChange: (shape: ShapeType) => void;
  }

  export interface ResultsPanelProps {
    cubicYards: number;
    cubicMeters: number;
    totalCost: number;
    additionalCost: number;
    onAdditionalCostChange: (cost: number) => void;
    onClearAll: () => void;
  }