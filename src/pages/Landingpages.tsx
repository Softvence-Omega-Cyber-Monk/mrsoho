import { useState } from "react";
import CommonWrapper from "@/common/CommonWrapper";
import trackhang from "@/assets/trackhang.jpg";
import PlaceholderjhbImage from "@/assets/PlaceholderjhbImage.png";
import Cta from "@/components/home/Cta";
import CloudflareLogo from "@/components/CloudflareLogo.tsx";
import Faq from "@/components/home/Faq";
import CalculatorCta from "@/components/CalculatorCta";

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
            <CommonWrapper>
                {/* ---- Section 1: Hero Image ---- */}
                <div className="mx-auto flex justify-center">
                    <img 
                        src={trackhang} 
                        alt="trackhang" 
                        className="w-full max-w-[1920px] h-auto object-cover" 
                    />
                </div>

                {/* ---- Section 2: Text & Button ---- */}
                <div className="bg-[#212121] py-12 lg:py-20">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                            <div className="px-4 lg:px-6">
                                <h1 className="text-3xl sm:text-4xl lg:text-[42px] text-[#FEDA42] font-semibold leading-tight">
                                    The Smarter Way to Order Concrete
                                </h1>
                            </div>
                            <div className="px-4 lg:px-6 space-y-6 lg:space-y-8">
                                <p className="text-[#EFEEEE] text-base lg:text-lg max-w-full lg:max-w-[592px] leading-relaxed">
                                    Calculate your exact needs, schedule delivery, and get fresh concrete mixed right on-site. No waste, no hassle, just the perfect pour every time.
                                </p>
                                <button className="px-6 py-3 lg:px-8 lg:py-4 bg-[#FEDA42] text-gray-900 font-bold uppercase text-sm lg:text-base rounded-lg shadow-md outline-none hover:bg-[#fed130] transition-colors whitespace-nowrap w-full sm:w-auto">
                                    CONCRETE CALCULATOR
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ---- Section 3: Info + Image ---- */}
                <div className="py-12 lg:py-20 bg-[#F5F5F5]">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                            <div className="flex flex-col justify-center gap-4 lg:gap-6">
                                <h2 className="text-2xl sm:text-3xl lg:text-[44px] font-semibold leading-tight">
                                    Ready Mix Concrete by GATORMIX
                                </h2>
                                <p className="text-base lg:text-[16px] max-w-full lg:max-w-[442px] leading-relaxed">
                                    MIXED ON-SITE READY MIX CONCRETE FOR ALL RESIDENTIAL,
                                    COMMERCIAL & INDUSTRIAL CONSTRUCTION PROJECTS
                                </p>
                            </div>
                            <div className="flex justify-center lg:justify-end">
                                <img 
                                    src={PlaceholderjhbImage} 
                                    alt="placeholder" 
                                    className="w-full max-w-[500px] lg:max-w-full h-auto object-cover rounded-lg"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* ---- Section 5: CTA ---- */}
                <Cta />

                {/* ---- Section 4: Contact Form ---- */}
                <div className="w-full max-w-4xl mx-auto mb-16 lg:mb-24 mt-16 lg:mt-24 px-4">
                    <div className="bg-white p-6 lg:p-8 rounded-lg shadow-xl">
                        <h2 className="text-gray-800 text-sm font-bold mb-2 uppercase tracking-wider text-center">
                            NEED CONCRETE DELIVERED FROM GATORMIX?
                        </h2>
                        <p className="text-sm text-gray-500 mb-6 text-center">
                            Schedule a delivery today.
                        </p>

                        {/* --- Form Fields --- */}
                        <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-6">
                            {/* Name and Phone Number - Grid Layout */}
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

                {/* ---- Testimonials Section ---- */}
                <section className="py-12 lg:py-20 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                            <div className="text-center lg:text-left">
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 max-w-full lg:max-w-[392px] mx-auto lg:mx-0">
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

                <Faq />
                <div className="mb-6 px-4">
                    <CalculatorCta />
                </div>
            </CommonWrapper>
        </>
    );
};

export default Landingpages;