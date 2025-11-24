// import Banner from "@/components/ui/Banner";
import contact from "@/assets/contact.png";
import traktor from "@/assets/traktor.jpg";
import CalculatorCta from "@/components/CalculatorCta";
import { useSaveAndSendContactMutation } from "@/store/Slices/ContactSlice/contactApi";
import CommonWrapper from "@/common/CommonWrapper";
import { useState } from "react";
import SuccessCheckmark from "@/components/SuccessCheckmark";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
interface FormData {
  name: string;
  phone: string;
  email: string;
  business: string;
  address: string;
  subject: string;
  message: string;
  source: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    business: "",
    address: "",
    subject: "",
    message: "",
    source: "",
  });

  const [saveAndSendContact, { isLoading, isSuccess, isError, error }] = useSaveAndSendContactMutation();
  const navigate = useNavigate();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const payload = {
        ...formData,
        subject: `${formData.subject ? `${formData.subject}` : ""}`,
      };
      await saveAndSendContact(payload).unwrap();
      
      // Reset form after successful submission
      setFormData({
        name: "",
        phone: "",
        email: "",
        business: "",
        address: "",
        subject: "",
        message: "",
        source: "",
      });
    } catch (error) {
      console.error("Failed to submit form:", error);
    }
  };

  return (
    <>
      <img src={contact} alt="contact" className="w-[100%]" />

      <CommonWrapper className="w-full max-w-4xl mx-auto mb-16 lg:mb-24 mt-16 lg:mt-24 px-4">
        <div className="bg-[#F9FAFB] p-6 lg:p-8 rounded-lg shadow-xl mt-[112px]">
          {/* Success State */}
          {isSuccess ? (
            <div className="text-center py-8">
              <div className="item-center justify-center flex">
          <div className="flex items-center justify-center">
              <SuccessCheckmark />
              </div>
              </div>
              <h2 className="text-2xl font-bold text-green-800 mt-4">Thank You!</h2>
              <p className="text-gray-600">Your message has been sent successfully.</p>
            </div>
          ) : (
            /* Form State */
            <>
              <h2 className="text-green-500 text-md font-bold mb-2 tracking-wider text-center">
                NEED CONCRETE delivered by GATORMIX concrete
              </h2>
              <p className="text-sm text-gray-500 mb-6 text-center">
                Schedule a delivery today.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name*"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  />
                </div>

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address*"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />

                <input
                  type="text"
                  name="business"
                  placeholder="Business"
                  value={formData.business}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />

                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />

                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />

                <textarea
                  name="message"
                  placeholder="Message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 resize-none"
                ></textarea>

                <select
                  name="source"
                  value={formData.source}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  required
                >
                  <option value="">How did you hear about us?</option>
                  <option value="Google Search">Google Search</option>
                  <option value="Referral">Referral</option>
                  <option value="Social Media">Social Media</option>
                  <option value="Advertisement">Advertisement</option>
                  <option value="Other">Other</option>
                </select>

                {/* Error Message */}
                {isError && (
                  <p className="text-red-500 text-sm text-center mt-2">
                    Error: {(error as any)?.data?.message || 'Something went wrong.'}
                  </p>
                )}

                <button
                  type="submit"
                  className="w-full p-3 mt-4 lg:mt-6 bg-yellow-400 text-gray-900 font-extrabold text-base rounded-lg shadow-md hover:bg-yellow-500 transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={isLoading}
                >
                  {isLoading ? "Submitting..." : "Submit Contact"}
                </button>
              </form>

              <p className="text-[#848D9B] text-center mt-3 text-base sm:text-lg md:text-sm">
                Contact Us: (239)309-7779
              </p>
            </>
          )}
        </div>
      </CommonWrapper>

      <div>
<section
        className="relative"
        style={{
          backgroundImage: `url("${traktor}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/40 z-0"></div>

        <CommonWrapper className="max-w-[1440px]">
          <div className="relative w-full h-[640px] overflow-hidden flex items-center">
            <div className="relative z-10 max-w-3xl p-6 bg-black/40 rounded-lg text-white">
              <h1 className="text-4xl md:text-5xl font-bold text-[#FEDA42] mb-3 w-[516px]">
                Do you need a concrete pump ?
              </h1>
              <p className="text-base md:text-lg leading-relaxed w-[516px]">
                Access to state of the art concrete pumping equipment and fully
                trained operators,
              </p>
               <button
      onClick={() => {
        window.scrollTo(0, 0);       // Scroll to top
        navigate("/contact");        // Navigate
      }}
      className="mt-6 px-6 py-3 bg-yellow-400 text-gray-900 font-extrabold rounded-lg shadow-md hover:bg-yellow-500 transition-colors cursor-pointer"
    >
      Get In Touch
    </button>
            </div>
          </div>
        </CommonWrapper>
      </section>

      </div>
      <div>
        <CalculatorCta />
      </div>
    </>
  );
};

export default Contact;