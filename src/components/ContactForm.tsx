import React, { useState } from "react";
import PrimaryBtn from "./PrimaryBtn";
import CloudflareLogo from "./CloudflareLogo";
import { useSaveAndSendContactMutation } from "@/store/Slices/ContactSlice/contactApi";
import SuccessCheckmark from "./SuccessCheckmark";

interface FormData {
  name: string;
  phone: string;
  email: string;
  business: string;
  address: string;
  subject: string;
  message: string;
  howDidYouHearAboutUs: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    business: "",
    address: "",
    subject: "",
    message: "",
    howDidYouHearAboutUs: "Google Search",
  });

  const [saveAndSendContact, { isLoading, isError, isSuccess, error }] = useSaveAndSendContactMutation();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await saveAndSendContact(formData).unwrap();
    } catch (err) {
      console.error('Failed to submit contact form:', err);
    }
  };

  if (isSuccess) {
    return (
      <div className="max-w-md mx-auto bg-white shadow-md rounded-2xl p-6 space-y-5 border border-gray-200 text-center">
        <SuccessCheckmark />
        <h2 className="text-2xl font-bold text-green-800">Thank You!</h2>
        <p className="text-gray-600">Your message has been sent successfully. We will get back to you shortly.</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-white shadow-md rounded-2xl p-6 space-y-5 border border-gray-200"
    >
      {/* Title */}
      <div className="text-center">
        <h2 className="text-sm font-semibold text-green-800">
          NEED CONCRETE delivered by GATORMIX concrete
        </h2>
        <p className="text-gray-500 text-sm">Schedule a delivery today.</p>
      </div>

      <hr className="border-gray-200" />

      {/* Input fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Name*
          </label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-yellow-400 outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number
          </label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-yellow-400 outline-none"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email Address*
        </label>
        <input
          type="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-yellow-400 outline-none"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Business
        </label>
        <input
          type="text"
          name="business"
          value={formData.business}
          onChange={handleChange}
          className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-yellow-400 outline-none"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Address
        </label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-yellow-400 outline-none"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Subject
        </label>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-yellow-400 outline-none"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Message
        </label>
        <textarea
          name="message"
          rows={3}
          value={formData.message}
          onChange={handleChange}
          className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-yellow-400 outline-none resize-none"
        />
      </div>

      <CloudflareLogo />

      {/* Dropdown */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          How did you hear about us?
        </label>
        <select
          name="howDidYouHearAboutUs"
          value={formData.howDidYouHearAboutUs}
          onChange={handleChange}
          className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-yellow-400 outline-none"
        >
          <option>Google Search</option>
          <option>Facebook</option>
          <option>Instagram</option>
          <option>Friend / Colleague</option>
          <option>Other</option>
        </select>
      </div>

      {/* Submit button */}
      <button type="submit" disabled={isLoading} className="w-full">
        <PrimaryBtn btnText={isLoading ? "Submitting..." : "Get Started for free"} />
      </button>

      {isError && <p className="text-red-500 text-sm text-center">Error: {
        (error as any)?.data?.message || (error as any)?.message || 'Something went wrong.'
      }</p>}

      <div className="text-center text-[#848D9B] text-[16px]">
        <h2>Contact Us: (239)309-7779</h2>
      </div>
    </form>
  );
};

export default ContactForm;
