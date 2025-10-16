// src/components/CalculatorCta.jsx

// import { Calculator } from 'lucide-react'; // Using Lucide for the calculator icon
import ConcreteTruck from '../assets/images/tructImg.png'; // Assuming you have an image for the truck
import CommonWrapper from '@/common/CommonWrapper';

const CalculatorCta = () => {
  return (
    <CommonWrapper>

    <div className="relative bg-gray-100 py-16 overflow-hidden md:py-24">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        
        {/* Left Side: Text Content and Button */}
        <div className="w-full md:w-1/2 text-center md:text-left mb-12 md:mb-0 z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
            How Much Concrete Do You Need?
          </h2>
          <p className="text-base sm:text-lg text-gray-700 max-w-lg mx-auto md:mx-0 mb-8">
            The easy-to-use Concrete Calculator tells you the type and volume 
            of concrete you need for your project, and how much it will cost.
          </p>
          
          {/* Button and Overlapping Avatars */}
          <div className="relative inline-flex items-center">
            <button className="flex items-center px-8 py-4 bg-yellow-400 text-black font-extrabold rounded-lg text-lg shadow-lg hover:bg-yellow-600 transition duration-300 transform hover:-translate-y-1">
              {/* <Calculator className="w-6 h-6 mr-3" /> */}
              Try the Concrete Calculator
            </button>
          </div>
        </div>
        
        {/* Right Side: Large Concrete Truck Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end opacity-20 md:opacity-100 z-0">
          {/* Assuming you have a concrete truck image. Adjust path if needed. */}
          <img 
            src={ConcreteTruck} 
            alt="Concrete Truck" 
            className="max-w-full h-auto" 
            style={{ filter: 'blur(1px) grayscale(80%)'  }} // To make it faded/white
          />
        </div>

      </div>
    </div>
    </CommonWrapper>
  );
};

export default CalculatorCta;