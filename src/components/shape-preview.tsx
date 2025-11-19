"use client";

import { ShapeType } from "../types";

interface ShapePreviewProps {
  shape: ShapeType;
}

export default function ShapePreview({ shape }: ShapePreviewProps) {
  const renderShape = () => {
    switch (shape) {
      case "slab":
        return (
          <svg viewBox="0 0 200 150" className="w-full max-w-[240px] h-auto sm:max-w-[280px] md:max-w-[320px]">
            <defs>
              <linearGradient id="slabGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: "#9ca3af", stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: "#6b7280", stopOpacity: 1 }} />
              </linearGradient>
            </defs>
            <rect x="30" y="40" width="140" height="80" fill="url(#slabGradient)" stroke="#4b5563" strokeWidth="2" />
          </svg>
        );

      case "circular":
        return (
          <svg viewBox="0 0 200 150" className="w-full max-w-[240px] h-auto sm:max-w-[280px] md:max-w-[320px]">
            <defs>
              <radialGradient id="circleGradient">
                <stop offset="0%" style={{ stopColor: "#9ca3af", stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: "#6b7280", stopOpacity: 1 }} />
              </radialGradient>
            </defs>
            <circle cx="100" cy="75" r="60" fill="url(#circleGradient)" stroke="#4b5563" strokeWidth="2" />
          </svg>
        );

      case "column":
        return (
          <svg viewBox="0 0 200 150" className="w-full max-w-[240px] h-auto sm:max-w-[280px] md:max-w-[320px]">
            <defs>
              <linearGradient id="columnGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: "#9ca3af", stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: "#6b7280", stopOpacity: 1 }} />
              </linearGradient>
            </defs>
            <rect x="70" y="20" width="60" height="110" fill="url(#columnGradient)" stroke="#4b5563" strokeWidth="2" />
          </svg>
        );

      case "footing":
        return (
          <svg viewBox="0 0 200 150" className="w-full max-w-[240px] h-auto sm:max-w-[280px] md:max-w-[320px]">
            <defs>
              <linearGradient id="footingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: "#9ca3af", stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: "#6b7280", stopOpacity: 1 }} />
              </linearGradient>
            </defs>
            <rect x="40" y="50" width="120" height="60" fill="url(#footingGradient)" stroke="#4b5563" strokeWidth="2" />
          </svg>
        );

      case "gutter":
        return (
          <svg viewBox="0 0 200 150" className="w-full max-w-[240px] h-auto sm:max-w-[280px] md:max-w-[320px]">
            <defs>
              <linearGradient id="gutterGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: "#9ca3af", stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: "#6b7280", stopOpacity: 1 }} />
              </linearGradient>
            </defs>
            <path
              d="M 50 50 L 60 80 L 140 80 L 150 50 Z"
              fill="url(#gutterGradient)"
              stroke="#4b5563"
              strokeWidth="2"
            />
          </svg>
        );

      case "steps":
        return (
          <svg viewBox="0 0 200 150" className="w-full max-w-[240px] h-auto sm:max-w-[280px] md:max-w-[320px]">
            <rect x="50" y="100" width="100" height="20" fill="#9ca3af" stroke="#4b5563" strokeWidth="2" />
            <rect x="60" y="80" width="80" height="20" fill="#9ca3af" stroke="#4b5563" strokeWidth="2" />
            <rect x="70" y="60" width="60" height="20" fill="#9ca3af" stroke="#4b5563" strokeWidth="2" />
          </svg>
        );
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full w-full">
      <div className="flex items-center justify-center w-full min-h-[160px] sm:min-h-[180px] md:min-h-[200px]">
        {renderShape()}
      </div>
      <p className="text-slate-400 text-xs sm:text-sm md:text-base mt-4 text-center tracking-wide">
        3D Preview
      </p>
    </div>
  );
}
