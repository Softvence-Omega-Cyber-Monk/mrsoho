import { Calculator } from 'lucide-react'; // Assuming you're using Lucide icons for the calculator
import dfjvgfrgvcar3 from "../../assets/dfjvgfrgvcar3.jpg";
import CommonWrapper from "@/common/CommonWrapper";

const Cta = () => {
  return (
    <section className="relative w-full flex items-center justify-start min-h-[450px] sm:min-h-[500px] md:min-h-[600px] p-4 overflow-hidden bg-gray-100">
      {/* Background image */}
      <div>
        <img
          className="absolute object-cover w-full h-[711px] top-0 left-0 z-0"
          src={dfjvgfrgvcar3}
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      <CommonWrapper>
        <div className="relative z-10 max-w-3xl p-6 bg-black/40 rounded-lg text-white -ml-164">
          <h1 className="text-4xl md:text-5xl font-bold text-[#FEDA42] mb-3">How Much Concrete Do You Need?</h1>
          <p className="text-base md:text-lg leading-relaxed mb-3">
            The easy-to-use Concrete Calculator tells you the type and volume of concrete you need for your project, and how much it will cost.
          </p>
          <button className="inline-flex items-center gap-2 px-6 py-3 text-base sm:text-lg font-bold rounded-md bg-yellow-400 text-gray-900 hover:bg-yellow-500 transition duration-300 shadow-lg shadow-yellow-500/40">
            <Calculator className="w-6 h-6" /> {/* Calculator icon */}
            <span>Try the Concrete Calculator</span>
          </button>
        </div>
      </CommonWrapper>
    </section>
  );
};

export default Cta;
