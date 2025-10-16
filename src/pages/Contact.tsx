import Banner from "@/components/Banner";
import BannerImg from "../assets/images/contact-us.jpg";
import ContactForm from "@/components/ContactForm";
import CalculatorCta from "@/components/CalculatorCta";

const Contact = () => {
  return (
    <>
      <Banner imageUrl={BannerImg} title="Contact Us" subtitle="" />

      <div className=" flex justify-center my-6">
        <ContactForm />
      </div>

    <div>
      <Banner imageUrl={BannerImg} title='DO YOU NEED A CONCRETE PUMP' btnText='Get In Touch' showButton />
    </div>
    <div>
      <CalculatorCta />
    </div>
    </>
  );
};

export default Contact;
