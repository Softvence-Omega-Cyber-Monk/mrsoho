import React, { useState } from 'react';
import { useSaveAndSendContactMutation } from '@/store/Slices/ContactSlice/contactApi';

const ContactFormExample: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    business: '',
    address: '',
    subject: '',
    message: '',
    howDidYouHearAboutUs: '',
  });

  const [saveAndSendContact, { isLoading, isError, isSuccess, error }] = useSaveAndSendContactMutation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await saveAndSendContact(formData).unwrap();
      alert('Contact form submitted successfully!');
      setFormData({
        name: '',
        email: '',
        phone: '',
        business: '',
        address: '',
        subject: '',
        message: '',
        howDidYouHearAboutUs: '',
      });
    } catch (err) {
      console.error('Failed to submit contact form:', err);
      alert('Failed to submit contact form. Check console for details.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 border rounded-lg shadow-md">
      <h2 className="text-xl font-bold">Contact Us</h2>
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          required
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          required
        />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div>
        <label htmlFor="business" className="block text-sm font-medium text-gray-700">Business:</label>
        <input
          type="text"
          id="business"
          name="business"
          value={formData.business}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div>
        <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address:</label>
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject:</label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          required
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          required
        ></textarea>
      </div>
      <div>
        <label htmlFor="howDidYouHearAboutUs" className="block text-sm font-medium text-gray-700">How did you hear about us?</label>
        <input
          type="text"
          id="howDidYouHearAboutUs"
          name="howDidYouHearAboutUs"
          value={formData.howDidYouHearAboutUs}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <button
        type="submit"
        disabled={isLoading}
        className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 disabled:opacity-50"
      >
        {isLoading ? 'Submitting...' : 'Submit Contact'}
      </button>
      {isError && <p className="text-red-500">Error: {
        (error as any)?.data?.message || (error as any)?.message || 'Something went wrong.'
      }</p>}
      {isSuccess && <p className="text-green-500">Form submitted successfully!</p>}
    </form>
  );
};

export default ContactFormExample;
