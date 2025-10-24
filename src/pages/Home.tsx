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
      <Faq />
    </CommonWrapper>
  );
};

export default GatorMixComplete;
