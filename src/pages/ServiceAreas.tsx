import CommonWrapper from "@/common/CommonWrapper";
import Banner from "@/components/Banner";
import CalculatorCta from "@/components/CalculatorCta";
import ContactForm from "@/components/ContactForm";
import BannerImg from '@/assets/Placeholder Image.png';
import Basemap from '@/assets/Basemap.png';
const ServiceAreas: React.FC = () => {
  return (
    <>
    <CommonWrapper>
      <Banner imageUrl={BannerImg} title="Service Areas" subtitle="" />
      <div className=" flex justify-center my-6">
        <img src={Basemap} alt="Basemap..." />
      </div>
      <div className=" flex justify-center my-6">
        <ContactForm />
      </div>

      <div>
        <Banner imageUrl={BannerImg} title='DO YOU NEED A CONCRETE PUMP' btnText='Get In Touch' showButton />
      </div>
      <div>
        <CalculatorCta />
      </div>
    </CommonWrapper>
    </>
  );
};

export default ServiceAreas;
