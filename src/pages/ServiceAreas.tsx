import CommonWrapper from "@/common/CommonWrapper";
import Banner from "@/components/ui/Banner";
import CalculatorCta from "@/components/CalculatorCta";
// import ContactForm from "@/components/ContactForm";
import puttk from '@/assets/puttk.png';
import servicesanalysers from '@/assets/servicesanalysers.png';
import React, { useState } from 'react';
// import ContactForm from "@/components/ContactForm";
const ServiceAreas: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    business: "",
    address: "",
    subject: "",
    message: "",
    source: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    console.log(formData);
    // Add your form submission logic here
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

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
        <div className="flex justify-center my-6 max-w-[1400px]  rounded-2xl overflow-hidden mx-auto shadow-lg">
          <iframe
            width="100%"
            height="450"
            loading="lazy"
            src="https://www.google.com/maps?q=26.35,-81.83&z=10&output=embed">
          </iframe>
        </div>
     
        <div className="w-full max-w-4xl mx-auto mb-16 lg:mb-24 mt-16 lg:mt-24 px-4">
          <div className="bg-[#F9FAFB] p-6 lg:p-8 rounded-lg shadow-xl mt-[112px]">
            <h2 className="text-green-500 text-sm font-bold mb-2  tracking-wider text-center">
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
              >
                <option value="" disabled>
                  How did you hear about us?
                </option>
                <option value="Google Search">Google Search</option>
                <option value="Referral">Referral</option>
                <option value="Social Media">Social Media</option>
                <option value="Advertisement">Advertisement</option>
              </select>

              <button
                type="submit"
                className="w-full p-3 mt-4 lg:mt-6 bg-yellow-400 text-gray-900 font-extrabold text-base rounded-lg shadow-md hover:bg-yellow-500 transition-colors cursor-pointer"
                disabled={isLoading}
              >
                {isLoading ? "Submitting..." : "Submit Contact"}
              </button>
            </form>
             <p className="text-[#848D9B] text-center mt-3 text-base sm:text-lg md:text-xl">
            Contact Us: (239)309-7779
          </p>
          </div>
        </div>

        

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
