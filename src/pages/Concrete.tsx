import CommonWrapper from "@/common/CommonWrapper"
import fjvnfgjfvbknfjnfg from '@/assets/fjvnfgjfvbknfjnfg.png';
import concritebag from '@/assets/concritebag.jpg';
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
        <img src={concritebag} alt="Concrete Bag" className="w-full h-auto mb-8 rounded-lg shadow-lg" />
        <BuiltToLast />
        <ConcreteVsCement />
        <ConcreteMixDesign />
        <PerfectConcreteMix />
          <Cta />
        <CalculatorCta />
        <Banner imageUrl={fjvnfgjfvbknfjnfg} title='DO YOU NEED A CONCRETE PUMP' btnText='Get In Touch' showButton />
      </CommonWrapper>
    </>
  )
}

export default CONCRETE