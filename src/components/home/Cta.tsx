import { Calculator } from 'lucide-react';
import dfjvgfrgvcar3 from "../../assets/dfjvgfrgvcar3.jpg";
import CommonWrapper from "@/common/CommonWrapper";
import { useNavigate } from "react-router-dom";

const Cta = () => {
  const navigate = useNavigate();
  return (
    <section
      className="
        relative w-full flex items-center 
        justify-center md:justify-start 
        min-h-[400px] sm:min-h-[500px] md:min-h-[600px] 
        p-4 overflow-hidden bg-gray-100
      "
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src={dfjvgfrgvcar3}
          alt="Concrete background"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <CommonWrapper className="mx-auto md:ml-[365px]">
        <div
          className="
            relative z-10 
            max-w-3xl w-full 
            text-white 
            bg-black/40 rounded-lg 
            p-5 sm:p-8 
            text-center md:text-left 
            flex flex-col items-center md:items-start 
            md:-ml-[164px]
          "
        >
          <h1
            className="
              text-2xl sm:text-3xl md:text-5xl 
              font-bold text-[#FEDA42] mb-4 leading-tight
            "
          >
            How Much Concrete Do You Need?
          </h1>

          <p
            className="
              text-sm sm:text-base md:text-lg 
              leading-relaxed mb-6
            "
          >
            The easy-to-use Concrete Calculator tells you the type and volume of
            concrete you need for your project, and how much it will cost.
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
      </CommonWrapper>
    </section>
  );
};

export default Cta;
