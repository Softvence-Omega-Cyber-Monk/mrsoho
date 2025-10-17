import CommonWrapper from "@/common/CommonWrapper"
import BannerImg from '@/assets/Placeholder Image.png';
import Banner from "@/components/Banner";
import BuiltToLast from "@/components/BuiltToLast";
import ConcreteVsCement from "@/components/ConcreteVsCement";
import ConcreteMixDesign from "@/components/ConcreteMixDesign";
import PerfectConcreteMix from "@/components/PerfectConcreteMix";
import CalculatorCta from "@/components/CalculatorCta";
const CONCRETE = () => {
  return (
    <>
      <CommonWrapper>
        <Banner imageUrl={BannerImg} title="The Concrete Advantage" subtitle="Engineered for strength, delivered with precision. Discover the ideal concrete
        solution for your project." />
        <BuiltToLast />
        <ConcreteVsCement />
        <ConcreteMixDesign />
        <PerfectConcreteMix />
        <Banner imageUrl={BannerImg} title='How Much Concrete Do You Need?' btnText='Get In Touch' showButton />
        <CalculatorCta />
        <Banner imageUrl={BannerImg} title='DO YOU NEED A CONCRETE PUMP' btnText='Get In Touch' showButton />
      </CommonWrapper>
    </>
  )
}

export default CONCRETE