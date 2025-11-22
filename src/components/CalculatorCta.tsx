import tracktornobghavr from '@/assets/tracktornobghavr.png';
import { useNavigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import { Calculator } from "lucide-react";
const CalculatorCta = () => {
  const navigate = useNavigate();

  return (
   
      <div className="relative bg-[#FBFBFB] py-16 overflow-hidden md:py-24"> 
      <div className="max-w-[1440px] mx-auto">
        <div className="mx-auto px-12 flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 text-center md:text-left mb-12 md:mb-0 z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
              Have any questions for us?
            </h2>
            <p className="text-base sm:text-lg text-gray-700 max-w-lg mx-auto md:mx-0 mb-8">
              Concrete can be confusing, but it doesn't have to be. Reach out to us with any questions you may have, and we will respond within 24 hours.
            </p>
            <button
            onClick={() => navigate("/concrete-calculator")}
            className="
              inline-flex items-center cursor-pointer justify-center gap-2
              px-5 sm:px-6 py-2.5 sm:py-3
              text-sm sm:text-base md:text-lg font-bold
              rounded-md bg-yellow-400 text-gray-900 
              hover:bg-yellow-500 transition duration-300 
              shadow-lg shadow-yellow-500/40 
            "
          >
            <Calculator className="w-5 h-5 sm:w-6 sm:h-6" />
            <span>Try the Concrete Calculator</span>
          </button>
          </div>
          <div className="w-full md:w-1/2 flex justify-center md:justify-end z-0">
           <img
           src={tracktornobghavr}
           alt="Concrete Truck"
           className="max-w-full h-auto brightness-110 contrast-125 opacity-30"
            />
            </div>

        </div>
        
     </div>
      </div>

  );
};

export default CalculatorCta;