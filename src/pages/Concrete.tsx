import CommonWrapper from "@/common/CommonWrapper"
import traktor from '@/assets/traktor.jpg';
import ALIGNMENT from '@/assets/ALIGNMENT.jpg';
// import Banner from "@/components/ui/Banner";
import BuiltToLast from "@/components/BuiltToLast";
import ConcreteVsCement from "@/components/ConcreteVsCement";
import ConcreteMixDesign from "@/components/ConcreteMixDesign";
import PerfectConcreteMix from "@/components/PerfectConcreteMix";
import CalculatorCta from "@/components/CalculatorCta";
import Cta from "@/components/home/Cta";
import { Link } from "react-router-dom";
const CONCRETE = () => {
  return (
    <>
      <CommonWrapper>
        <img
          src={ALIGNMENT}
          alt="Concrete Bag"
          className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[771px] mb-8 rounded-lg shadow-lg object-cover"
        />
        <BuiltToLast />
        <ConcreteVsCement />
        <ConcreteMixDesign />
        <PerfectConcreteMix />
        <Cta />
        <CalculatorCta />
        {/* <Banner imageUrl={traktor} title='DO YOU NEED A CONCRETE PUMP' subtitle="The easy-to-use Concrete Calculator tells you the type and volume of concrete you need for your project, and how much it will cost." /> */}
        <section
          className="relative"
          style={{
            backgroundImage: `url("${traktor}")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-black/40 z-0"></div>

          <CommonWrapper className="max-w-[1440px] mx-auto py-10 sm:py-12 md:py-16 lg:py-20">
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[640px] overflow-hidden flex items-center">
              <div className="relative z-10 max-w-full w-full px-5 py-2 sm:px-6 md:px-8 lg:max-w-3xl lg:px-8 lg:py-10 bg-black/40 rounded-lg text-white mx-4 sm:mx-6 md:mx-8 lg:mx-0">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#FEDA42] mb-3 w-full max-w-full sm:max-w-md md:max-w-lg lg:w-[516px]">
                  Do you need a concrete pump ?
                </h1>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed w-full max-w-full sm:max-w-md md:max-w-lg lg:w-[516px]">
                  Access to state of the art concrete pumping equipment and fully
                  trained operators,
                </p>
                <Link to="/contact">
                  <button
                    onClick={() => window.scrollTo(0, 0)} // Scroll to top
                    className="mt-4 sm:mt-5 md:mt-6 px-6 sm:px-7 md:px-8 py-3 sm:py-3 md:py-4 bg-yellow-400 text-gray-900 font-bold sm:font-extrabold rounded-lg shadow-md hover:bg-yellow-500 transition-colors cursor-pointer text-sm sm:text-base"
                  >
                    Get In Touch
                  </button>
                </Link>
              </div>
            </div>
          </CommonWrapper>
        </section>
      </CommonWrapper>
    </>
  )
}

export default CONCRETE