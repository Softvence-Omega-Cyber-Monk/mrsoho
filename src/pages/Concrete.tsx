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

        <CommonWrapper className="max-w-[1440px]">
          <div className="relative w-full h-[640px] overflow-hidden flex items-center">
            <div className="relative z-10 max-w-3xl p-6 bg-black/40 rounded-lg text-white">
              <h1 className="text-4xl md:text-5xl font-bold text-[#FEDA42] mb-3 w-[516px]">
                DO YOU NEED A CONCRETE PUMP
              </h1>
              <p className="text-base md:text-lg leading-relaxed w-[516px]">
                Access to state of the art concrete pumping equipment and fully
                trained operators,
              </p>
              <Link to="/contact">
  <button
    onClick={() => window.scrollTo(0, 0)} // Scroll to top
    className="mt-6 px-6 py-3 bg-yellow-400 text-gray-900 font-extrabold rounded-lg shadow-md hover:bg-yellow-500 transition-colors cursor-pointer"
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