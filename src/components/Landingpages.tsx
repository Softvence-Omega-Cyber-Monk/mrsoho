import { useNavigate } from "react-router-dom";
import { useState } from "react";
import CommonWrapper from "@/common/CommonWrapper";
import ALIGNMENT from "@/assets/ALIGNMENT.jpg";
import Faq from "@/components/home/Faq";
import Banner from "@/components/ui/Banner";
import traktor from "@/assets/traktor.jpg";
import tracktornobghavr from '@/assets/tracktornobghavr.png';
import AvatarImage from "@/assets/AvatarImage.png";
import AvatarImage2 from "@/assets/AvatarImage2.png";
import AvatarImage3 from "@/assets/AvatarImage3.png";
import { useSaveAndSendContactMutation } from "@/store/Slices/ContactSlice/contactApi";
import SuccessCheckmark from "@/components/SuccessCheckmark";
import { Link } from "react-router-dom";
// import { Calculator } from "lucide-react";

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

const Landingpages = () => {
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
  const navigate = useNavigate();

  const [saveAndSendContact, { isLoading, isSuccess, isError, error }] = useSaveAndSendContactMutation();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const payload = {
        ...formData,
        subject: `${formData.subject ? `${formData.subject}` : ''}`,
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
      <CommonWrapper>
        <Banner
          imageUrl={ALIGNMENT}
          title="The Smarter Way to Order Concrete"
          subtitle="Calculate your exact needs, schedule delivery, and get fresh concrete mixed right on-site. No waste, no hassle, just the perfect pour every time."
        />
      </CommonWrapper>

      <CommonWrapper className="w-full max-w-4xl mx-auto mb-16 lg:mb-24 mt-16 lg:mt-24 px-4">
        <div className="bg-[#F9FAFB] p-6 lg:p-8 rounded-lg shadow-xl mt-[112px]">
          {/* Success State - Show only success messages */}
          {isSuccess ? (
            <div className="text-center py-8">
              <div className="flex items-center justify-center">
              <SuccessCheckmark />
              </div>
              <h2 className="text-2xl font-bold text-green-800 mt-4">Thank You!</h2>
              <p className="text-gray-600">Your message has been sent successfully.</p>
            </div>
          ) : (
            /* Form State - Show all the original messages and form */
            <>
              <h2 className="text-green-500 text-md font-bold mb-2 tracking-wider text-center">
                NEED CONCRETE delivered by GATORMIX concrete
              </h2>
              <p className="text-sm text-gray-500 mb-6 text-center">Schedule a delivery today.</p>

              <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name*"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  />
                </div>

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address*"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />

                <input
                  type="text"
                  name="business"
                  placeholder="Business"
                  value={formData.business}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />

                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />

                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />

                <textarea
                  name="message"
                  placeholder="Message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 resize-none"
                ></textarea>

                <select
                  name="source"
                  value={formData.source}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-xl text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  required
                >
                  <option value="how">How did you hear about us?</option>
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
                  disabled={isLoading}
                  className="w-full p-3 mt-4 lg:mt-6 bg-yellow-400 text-gray-900 font-extrabold text-base rounded-lg shadow-md hover:bg-yellow-500 transition-colors cursor-pointer disabled:opacity-50"
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

      {/* Rest of your existing components remain the same */}
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
              <Link to="/contact"
               onClick={() => {
    window.scrollTo(0, 0); // Scroll to the top of the window
  }}>
               <button
               className="mt-6 px-6 py-3 bg-yellow-400 text-gray-900 font-extrabold rounded-lg shadow-md hover:bg-yellow-500 transition-colors cursor-pointer">
                Get In Touch 
              </button>
              </Link>
            </div>
          </div>
        </CommonWrapper>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 max-w-full lg:max-w-[449px] mx-auto lg:mx-0">
                Trusted by Builders and Homeowners
              </h2>
              <p className="mt-4 text-base lg:text-[16px] text-gray-600 max-w-full lg:max-w-[652px] mx-auto lg:mx-0 leading-relaxed">
                We're proud of our reputation for reliability and excellent customer service. Here's what some of our clients have to say.
              </p>
            </div>

            <div className="space-y-6 lg:space-y-8">
              {/* Testimonial 1 */}
              <div className="bg-white p-6 shadow-lg rounded-lg border border-gray-100">
                <div className="flex items-center space-x-1 text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 .587l3.668 7.568 8.332 1.207-6.046 5.887 1.424 8.293L12 18.298l-7.481 3.923 1.424-8.293-6.046-5.887 8.332-1.207L12 .587z" />
                    </svg>
                  ))}
                </div>
                <p className="mt-4 text-gray-700 font-medium text-base lg:text-[18px] leading-relaxed">
                  "GATORMIX was a game-changer for our multi-stage project. The flexibility to change mixes on the fly saved us time and money. Highly recommend."
                </p>
                <div className="mt-4 flex items-center">
                  <img src={AvatarImage} alt="John D." className="w-10 h-10 rounded-full flex-shrink-0 object-cover" />
                  <div className="ml-3">
                    <p className="text-sm font-semibold text-gray-900">John D.</p>
                    <p className="text-sm text-gray-500">Commercial Development</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-white p-6 shadow-lg rounded-lg border border-gray-100">
                <div className="flex items-center space-x-1 text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 .587l3.668 7.568 8.332 1.207-6.046 5.887 1.424 8.293L12 18.298l-7.481 3.923 1.424-8.293-6.046-5.887 8.332-1.207L12 .587z" />
                    </svg>
                  ))}
                </div>
                <p className="mt-4 text-gray-700 font-medium text-base lg:text-[18px] leading-relaxed">
                  "The concrete calculator was spot-on. The delivery was on time, the driver was professional, and we only paid for what we used. Fantastic service for our new driveway!."
                </p>
                <div className="mt-4 flex items-center">
                  <img src={AvatarImage2} alt="Sarah L." className="w-10 h-10 rounded-full flex-shrink-0 object-cover" />
                  <div className="ml-3">
                    <p className="text-sm font-semibold text-gray-900">Sarah L.</p>
                    <p className="text-sm text-gray-500">Residential Driveway</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="bg-white p-6 shadow-lg rounded-lg border border-gray-100">
                <div className="flex items-center space-x-1 text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 .587l3.668 7.568 8.332 1.207-6.046 5.887 1.424 8.293L12 18.298l-7.481 3.923 1.424-8.293-6.046-5.887 8.332-1.207L12 .587z" />
                    </svg>
                  ))}
                </div>
                <p className="mt-4 text-gray-700 font-medium text-base lg:text-[18px] leading-relaxed">
                  "As a contractor, reliability is everything. GATORMIX delivers every time. Their fresh concrete makes finishing a breeze. They're my go-to for all my jobs."
                </p>
                <div className="mt-4 flex items-center">
                  <img src={AvatarImage3} alt="Mike R." className="w-10 h-10 rounded-full flex-shrink-0 object-cover" />
                  <div className="ml-3">
                    <p className="text-sm font-semibold text-gray-900">Mike R.</p>
                    <p className="text-sm text-gray-500">General Contractor</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <CommonWrapper className="bg-[#212121]">
        <div className="max-w-[1440px] mx-auto">
          <Faq />
        </div>
      </CommonWrapper>

      {/* Questions Section */}
      <div className="relative bg-[#FBFBFB] pt-16 overflow-hidden md:py-24">
        <div className="max-w-[1440px] mx-auto">
          <div className="mx-auto px-12 flex flex-col md:flex-row items-center justify-between">
            <div className="w-full md:w-1/2 text-center md:text-left mb-12 md:mb-0 z-10">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
                Have any questions for us?
              </h2>
              <p className="text-base sm:text-lg text-gray-700 max-w-lg mx-auto md:mx-0 mb-8">
                Concrete can be confusing, but it doesn't have to be. Reach out to us with any questions you may have, and we will respond within 24 hours.
              </p>
              <button
                onClick={
                 () => navigate("/contact")
                 }
            className="
              inline-flex items-center cursor-pointer justify-center gap-2
               sm:px-6 py-2.5 sm:py-3
              text-sm sm:text-base md:text-lg font-bold
              rounded-md bg-yellow-400 text-gray-900 
              hover:bg-yellow-500 transition duration-300 
              shadow-lg shadow-yellow-500/40 
            "
          >
            <span>Get In Touch</span>
          </button>
            </div>
             
            <div className="w-full md:w-1/2 flex justify-center md:justify-end z-0">
              <img
                src={tracktornobghavr}
                alt="Concrete Truck"
                className="max-w-full h-auto brightness-110 contrast-125 opacity-40"
              />
            </div>
             
          </div>
          
        </div>
    
      </div>
    </>
  );
};

export default Landingpages;