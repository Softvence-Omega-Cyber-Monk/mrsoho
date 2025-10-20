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
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4420.211473088812!2d-81.76443551297656!3d26.53187701674403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88db133fbf250581%3A0xfc189f0e4f154e46!2sSouthwest%20Florida%20International%20Airport!5e1!3m2!1sen!2sbd!4v1760775956838!5m2!1sen!2sbd"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
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
