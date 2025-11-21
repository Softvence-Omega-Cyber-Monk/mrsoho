import CommonWrapper from "@/common/CommonWrapper";
import Banner from "@/components/ui/Banner";
import CalculatorCta from "@/components/CalculatorCta";
// import ContactForm from "@/components/ContactForm";
import puttk from '@/assets/puttk.png';
import servicesanalysers from '@/assets/servicesanalysers.png';
// import ContactForm from "@/components/ContactForm";
const ServiceAreas: React.FC = () => {
  return (
    <>
      <CommonWrapper>
        <Banner
          imageUrl={servicesanalysers}
          title="Service Areas"
          subtitle="Get concrete for your building project delivered and mixed on-site across SOUTH WEST FLORIDA"
          secondTitle="as well as Fort Myers, Lehigh Acres, Estero, Immokalee, Bontia Springs, Ave Maria, Orangetree, and Naples"
          secondTitleClassName="text-[#FEDA42]"
        />
        <div className="flex justify-center my-6">
          <iframe
            width="100%"
            height="450"
            loading="lazy"
            src="https://www.google.com/maps?q=26.35,-81.83&z=10&output=embed">
          </iframe>
        </div>
        {/* <div className=" flex justify-center my-6">
          <ContactForm />
        </div> */}

        <div>
          <CalculatorCta />
        </div>
        <div>

          <Banner imageUrl={puttk} title='DO YOU NEED A CONCRETE PUMP' />

        </div>
      </CommonWrapper>
    </>
  );
};

export default ServiceAreas;
