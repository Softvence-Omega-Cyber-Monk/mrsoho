import { useState } from "react";
import CommonWrapper from "@/common/CommonWrapper";
import ALIGNMENT from "@/assets/ALIGNMENT.jpg";
import CloudflareLogo from "@/components/CloudflareLogo.tsx";
import Faq from "@/components/home/Faq";
import Banner from "@/components/Banner";
import traktor from "@/assets/traktor.jpg";
import nobgslish from '@/assets/nobgslish.png';
const Landingpages = () => {
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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
        alert("Form submitted successfully!");
    };

    return (
        <>
            <CommonWrapper className="">
                <Banner imageUrl={ALIGNMENT} title="The Smarter Way to Order Concrete" subtitle="Calculate your exact needs, schedule delivery, and get fresh concrete mixed right on-site. No waste, no hassle, just the perfect pour every time." />
            </CommonWrapper  >
            <CommonWrapper className="">
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
                                    className="w-full p-3 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                />
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Phone Number"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full p-3 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                />
                            </div>

                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address*"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full p-3 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
                            />

                            <input
                                type="text"
                                name="business"
                                placeholder="Business"
                                value={formData.business}
                                onChange={handleChange}
                                className="w-full p-3 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
                            />

                            <input
                                type="text"
                                name="address"
                                placeholder="Address"
                                value={formData.address}
                                onChange={handleChange}
                                className="w-full p-3 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
                            />

                            <input
                                type="text"
                                name="subject"
                                placeholder="Subject"
                                value={formData.subject}
                                onChange={handleChange}
                                className="w-full p-3 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
                            />

                            <textarea
                                name="message"
                                placeholder="Message"
                                rows={4}
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full p-3 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 resize-none"
                            ></textarea>

                            <div className="flex items-center justify-between py-2">
                                <CloudflareLogo />
                            </div>

                            <select
                                name="source"
                                value={formData.source}
                                onChange={handleChange}
                                className="w-full p-3 border border-gray-300 rounded text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-500"
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
                                className="w-full p-3 mt-4 lg:mt-6 bg-yellow-400 text-gray-900 font-extrabold text-base rounded-lg shadow-md hover:bg-yellow-500 transition-colors"
                            >
                                Get Started for Free
                            </button>
                        </form>
                    </div>
                </div>
                <section
                    className="relative"
                    style={{
                        backgroundImage: `url("${traktor}")`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}
                >
                    {/* Background overlay with opacity */}
                    <div className="absolute inset-0 bg-black/40 z-0"></div>

                    <CommonWrapper className="max-w-[1440px]">
                        <div className="relative w-full h-[640px] overflow-hidden flex items-center">
                            {/* Left-aligned blurred text box */}
                            <div className="relative z-10 max-w-3xl p-6 bg-black/40 rounded-lg text-white">
                                <h1 className="text-4xl md:text-5xl font-bold text-[#FEDA42] mb-3">
                                    DO YOU NEED A CONCRETE PUMP
                                </h1>

                                <p className="text-base md:text-lg leading-relaxed">
                                    Access to state of the art concrete pumping equipment and fully
                                    trained operators,
                                </p>

                                {/* Button */}
                                <button
                                    className="inline-flex items-center gap-2 px-6 py-3 text-base sm:text-lg font-bold rounded-md bg-yellow-400 text-gray-900 hover:bg-yellow-500 transition duration-300 shadow-lg shadow-yellow-500/40"
                                >
                                    <span>Get In Touch</span>
                                </button>
                            </div>
                        </div>
                    </CommonWrapper>
                </section>


                {/* ---- Testimonials Section ---- */}
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
                                            <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M12 .587l3.668 7.568 8.332 1.207-6.046 5.887 1.424 8.293L12 18.298l-7.481 3.923 1.424-8.293-6.046-5.887 8.332-1.207L12 .587z" />
                                            </svg>
                                        ))}
                                    </div>
                                    <p className="mt-4 text-gray-700 font-medium text-base lg:text-[18px] leading-relaxed">
                                        "GATORMIX was a game-changer for our multi-stage project. The flexibility to change mixes on the fly saved us time and money. Highly recommend."
                                    </p>
                                    <div className="mt-4 flex items-center">
                                        <div className="w-10 h-10 rounded-full bg-gray-200 flex-shrink-0"></div>
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
                                            <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M12 .587l3.668 7.568 8.332 1.207-6.046 5.887 1.424 8.293L12 18.298l-7.481 3.923 1.424-8.293-6.046-5.887 8.332-1.207L12 .587z" />
                                            </svg>
                                        ))}
                                    </div>
                                    <p className="mt-4 text-gray-700 font-medium text-base lg:text-[18px] leading-relaxed">
                                        "The concrete calculator was spot-on. The delivery was on time, the driver was professional, and we only paid for what we used. Fantastic service for our new driveway!."
                                    </p>
                                    <div className="mt-4 flex items-center">
                                        <div className="w-10 h-10 rounded-full bg-gray-200 flex-shrink-0"></div>
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
                                            <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M12 .587l3.668 7.568 8.332 1.207-6.046 5.887 1.424 8.293L12 18.298l-7.481 3.923 1.424-8.293-6.046-5.887 8.332-1.207L12 .587z" />
                                            </svg>
                                        ))}
                                    </div>
                                    <p className="mt-4 text-gray-700 font-medium text-base lg:text-[18px] leading-relaxed">
                                        "As a contractor, reliability is everything. GATORMIX delivers every time. Their fresh concrete makes finishing a breeze. They're my go-to for all my jobs."
                                    </p>
                                    <div className="mt-4 flex items-center">
                                        <div className="w-10 h-10 rounded-full bg-gray-200 flex-shrink-0"></div>
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

                <CommonWrapper className=" bg-[#212121]">


                    <div className="max-w-[1440px] mx-auto">
                        <Faq />
                    </div>

                </CommonWrapper>

                <div className="relative bg-gray-100 py-16 overflow-hidden md:py-24">
                    <div className="container mx-auto px-12 flex flex-col md:flex-row items-center justify-between">
                        <div className="w-full md:w-1/2 text-center md:text-left mb-12 md:mb-0 z-10">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
                                Have any questions for us?
                            </h2>
                            <p className="text-base sm:text-lg text-gray-700 max-w-lg mx-auto md:mx-0 mb-8">
                                Concrete can be confusing, but it doesn't have to be.  Reach out to us with any questions you may have, and we will respond within 24 hours.
                            </p>
                            <div className="relative inline-flex items-center">
                                <button className="flex items-center px-8 py-4 bg-yellow-400 text-black font-extrabold rounded-lg text-lg shadow-lg hover:bg-yellow-600 transition duration-300 transform hover:-translate-y-1">
                                    Get In Touch
                                </button>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 flex justify-center md:justify-end opacity-20 md:opacity-100 z-0">
                            <img
                                src={nobgslish}
                                alt="Concrete Truck"
                                className="max-w-full h-auto"
                                style={{ filter: 'blur(1px) grayscale(80%)' }}
                            />
                        </div>
                    </div>
                </div>
            </CommonWrapper>
        </>
    );
};

export default Landingpages;