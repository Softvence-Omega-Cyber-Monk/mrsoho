import CommonWrapper from "@/common/CommonWrapper"
import traktor from '@/assets/traktor.jpg';
import ALIGNMENT from '@/assets/ALIGNMENT.jpg';
import Banner from "@/components/Banner";
import BuiltToLast from "@/components/BuiltToLast";
import ConcreteVsCement from "@/components/ConcreteVsCement";
import ConcreteMixDesign from "@/components/ConcreteMixDesign";
import PerfectConcreteMix from "@/components/PerfectConcreteMix";
import CalculatorCta from "@/components/CalculatorCta";
import Cta from "@/components/home/Cta";
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
        <Banner imageUrl={traktor} title='DO YOU NEED A CONCRETE PUMP' subtitle="The easy-to-use Concrete Calculator tells you the type and volume of concrete you need for your project, and how much it will cost." btnText='Get In Touch' showButton />
      </CommonWrapper>
    </>
  )
}

export default CONCRETE