"use client"

type ShapeType = "slab" | "footing" | "gutter" | "circular" | "column"

interface ShapePreviewProps {
  shape: ShapeType
}

export default function ShapePreview({ shape }: ShapePreviewProps) {
  const renderShape = () => {
    switch (shape) {
      case "slab":
        return (
          <svg viewBox="0 0 200 150" className="w-full h-auto">
            <defs>
              <linearGradient id="slabGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: "#9ca3af", stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: "#6b7280", stopOpacity: 1 }} />
              </linearGradient>
            </defs>
            <rect x="30" y="40" width="140" height="80" fill="url(#slabGradient)" />
            <rect x="30" y="40" width="140" height="80" fill="none" stroke="#4b5563" strokeWidth="2" />
          </svg>
        )
      case "circular":
        return (
          <svg viewBox="0 0 200 150" className="w-full h-auto">
            <defs>
              <radialGradient id="circleGradient">
                <stop offset="0%" style={{ stopColor: "#9ca3af", stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: "#6b7280", stopOpacity: 1 }} />
              </radialGradient>
            </defs>
            <circle cx="100" cy="75" r="60" fill="url(#circleGradient)" />
            <circle cx="100" cy="75" r="60" fill="none" stroke="#4b5563" strokeWidth="2" />
          </svg>
        )
      case "column":
        return (
          <svg viewBox="0 0 200 150" className="w-full h-auto">
            <defs>
              <linearGradient id="columnGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: "#9ca3af", stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: "#6b7280", stopOpacity: 1 }} />
              </linearGradient>
            </defs>
            <rect x="70" y="20" width="60" height="110" fill="url(#columnGradient)" />
            <rect x="70" y="20" width="60" height="110" fill="none" stroke="#4b5563" strokeWidth="2" />
          </svg>
        )
      case "footing":
        return (
          <svg viewBox="0 0 200 150" className="w-full h-auto">
            <defs>
              <linearGradient id="footingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: "#9ca3af", stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: "#6b7280", stopOpacity: 1 }} />
              </linearGradient>
            </defs>
            <rect x="40" y="50" width="120" height="60" fill="url(#footingGradient)" />
            <rect x="40" y="50" width="120" height="60" fill="none" stroke="#4b5563" strokeWidth="2" />
          </svg>
        )
      case "gutter":
        return (
          <svg viewBox="0 0 200 150" className="w-full h-auto">
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
        )
    }
  }

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="w-full h-40 flex items-center justify-center">{renderShape()}</div>
      <p className="text-slate-400 text-sm mt-4 text-center">3D Preview</p>
    </div>
  )
}
