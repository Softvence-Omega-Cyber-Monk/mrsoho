import { ShapeType } from "../types";
import svgttt1 from "@/assets/svgttt1.png";
import svgtt2 from "@/assets/svgtt2.png";
import svgtt3 from "@/assets/svgtt3.png";
import svg4 from "@/assets/svg4.png";
import svfttttt5 from "@/assets/svfttttt5.png";

interface ShapePreviewProps {
  shape: ShapeType;
}

export default function ShapePreview({ shape }: ShapePreviewProps) {
  const renderShape = () => {
    switch (shape) {
      case "slab":
        return <img src={svgttt1} alt="Concrete Slab" className="max-w-full max-h-full object-contain drop-shadow-2xl" />;
      case "circular":
        return <img src={svg4} alt="Footing" className="max-w-full max-h-full object-contain drop-shadow-2xl" />;
      case "column":
        return <img src={svfttttt5} alt="Gutter" className="max-w-full max-h-full object-contain drop-shadow-2xl" />;
      case "footing":
        return <img src={svgtt2} alt="Circular" className="max-w-full max-h-full object-contain drop-shadow-2xl" />;
      case "gutter":
        return <img src={svgtt3} alt="Column" className="max-w-full max-h-full object-contain drop-shadow-2xl" />;
      case "steps":
        return (
          <div className="text-center">
            <svg width="140" height="140" viewBox="0 0 120 120" className="mx-auto">
              <rect x="20" y="80" width="80" height="20" fill="#94a3b8" rx="4" />
              <rect x="35" y="60" width="65" height="20" fill="#94a3b8" rx="4" />
              <rect x="50" y="40" width="50" height="20" fill="#94a3b8" rx="4" />
              <rect x="65" y="20" width="35" height="20" fill="#94a3b8" rx="4" />
            </svg>
            <p className="text-xs text-gray-500 mt-2">Steps</p>
          </div>
        );
      default:
        return (
          <div className="text-center">
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-32 h-32 mx-auto" />
            <p className="text-xs mt-2 text-gray-500">No preview</p>
          </div>
        );
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full py-12 px-4">
      <div className="relative p-4 md:p-6">
        <div className="absolute inset-0 bg-gray-300 rounded-2xl scale-105 opacity-70 blur-md -z-10"></div>
        <div className="relative w-full max-w-md bg-white rounded-xl shadow-lg ">
          <div className="relative z-10 bg-[#F9FAFB] rounded-xl p-4 md:p-8 border border-gray-100">
            <div className=" border p-3 rounded-xl  border-gray-100 bg-white">
              <div className="flex items-center justify-center min-h-[200px] md:min-h-[260px] ">
              {renderShape()}
            </div>

            <p className="text-center text-slate-600 text-sm font-semibold tracking-wider mt-8 uppercase">
              3D Preview
            </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}












// import { ShapeType } from "../types";
// import svgttt1 from "@/assets/svgttt1.png";
// import svgtt2 from "@/assets/svgtt2.png";
// import svgtt3 from "@/assets/svgtt3.png";
// import svg4 from "@/assets/svg4.png";
// import svfttttt5 from "@/assets/svfttttt5.png"; // assuming this is correct for gutter

// interface ShapePreviewProps {
//   shape: ShapeType;
// }

// export default function ShapePreview({ shape }: ShapePreviewProps) {
//   const renderShape = () => {
//     switch (shape) {
//       case "slab":
//         return <img src={svgttt1} alt="Concrete Slab" className="max-w-full max-h-full object-contain" />;

//       case "circular":
//         return <img src={svgtt2} alt="Circular Concrete" className="max-w-full max-h-full object-contain" />;

//       case "column":
//         return <img src={svgtt3} alt="Concrete Column" className="max-w-full max-h-full object-contain" />;

//       case "footing":
//         return <img src={svg4} alt="Footing Foundation" className="max-w-full max-h-full object-contain" />;

//       case "gutter":
//         return <img src={svfttttt5} alt="Concrete Gutter" className="max-w-full max-h-full object-contain" />;

//       case "steps":
//         return (
//           <div className="text-gray-400 text-center">
//             <svg width="120" height="120" viewBox="0 0 120 120" className="mx-auto">
//               {/* Simple Steps Icon */}
//               <rect x="20" y="80" width="80" height="20" fill="#94a3b8" rx="4" />
//               <rect x="35" y="60" width="65" height="20" fill="#94a3b8" rx="4" />
//               <rect x="50" y="40" width="50" height="20" fill="#94a3b8" rx="4" />
//               <rect x="65" y="20" width="35" height="20" fill="#94a3b8" rx="4" />
//             </svg>
//             <p className="text-xs text-gray-500 mt-2">Steps</p>
//           </div>
//         );

//       default:
//         return (
//           <div className="text-gray-400 text-center">
//             <div className="bg-gray-200 border-2 border-dashed rounded-xl w-32 h-32 mx-auto" />
//             <p className="text-xs mt-2">Preview not available</p>
//           </div>
//         );
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center h-full w-full py-8">
//       <div className="flex items-center justify-center w-full min-h-[160px] sm:min-h-[180px] md:min-h-[220px] px-4">
//         {renderShape()}
//       </div>
//       <p className="text-slate-400 text-xs sm:text-sm md:text-base mt-6 text-center tracking-wide font-medium">
//         3D Preview
//       </p>
//     </div>
//   );
// }