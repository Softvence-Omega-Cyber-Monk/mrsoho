import Banner from "@/components/Banner";
import contact from "@/assets/contact.png";
import puttk from "@/assets/puttk.png";
import ContactForm from "@/components/ContactForm";
import CalculatorCta from "@/components/CalculatorCta";

const Contact = () => {
  return (
    <>
      <img src={contact} alt="contact" className="w-[100%]" />

      <div className=" flex justify-center my-6">
        <ContactForm />
      </div>

      <div>
        <Banner imageUrl={puttk} title='DO YOU NEED A CONCRETE PUMP' showTitle btnText='Get In Touch' showButton />
      </div>
      <div>
        <CalculatorCta />
      </div>
    </>
  );
};

export default Contact;
