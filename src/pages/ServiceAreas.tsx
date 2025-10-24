import CommonWrapper from "@/common/CommonWrapper";
import Banner from "@/components/Banner";
import CalculatorCta from "@/components/CalculatorCta";
import ContactForm from "@/components/ContactForm";
import puttk from '@/assets/puttk.png';
import servicesanalysers from '@/assets/servicesanalysers.png';
const ServiceAreas: React.FC = () => {
  return (
    <>
      <CommonWrapper>
        <Banner imageUrl={servicesanalysers} title="Service Areas" subtitle="Get concrete for your building project delivered and mixed on-site across SOUTH WEST FLORIDA" />
        <div className="flex justify-center my-6">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4489524.445870186!2d-82.6741234571419!3d27.44950179786062!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c1766591562abf%3A0xf72e13d35bc74ed0!2sFlorida%2C%20USA!5e1!3m2!1sen!2sbd!4v1761127295558!5m2!1sen!2sbd"
            width="1500"
            height="450"
            loading="lazy">
          </iframe>
        </div>
        <div className=" flex justify-center my-6">
          <ContactForm />
        </div>

        <div>
          <CalculatorCta />
        </div>
        <div>

          <Banner imageUrl={puttk} title='DO YOU NEED A CONCRETE PUMP' btnText='Get In Touch' showButton />

        </div>
      </CommonWrapper>
    </>
  );
};

export default ServiceAreas;
