import CommonWrapper from '@/common/CommonWrapper';
import Hero from '@/components/home/Hero';
import HowItWorks from '@/components/home/HowItWorks';
import Faq from '@/components/home/Faq';
import Features from '@/components/home/Features';
import Cta from '@/components/home/Cta';
import ConcreteServicesSection from '@/components/home/ConcreteServices';

const GatorMixComplete = () => {
  return (
    <CommonWrapper>
      <Hero />
      <HowItWorks />
      <Cta />
      <Features />
      <ConcreteServicesSection />
      <div className='bg-[#212121]'>
        <div className="max-w-[1490px] mx-auto">
          <Faq />
        </div>
      </div>

    </CommonWrapper>
  );
};

export default GatorMixComplete;
