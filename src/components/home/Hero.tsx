import { useState, ChangeEvent, FormEvent } from 'react';
import pillerlighthousecar from '../../assets/pillerlighthousecar.jpg';
// import ContactForm from '@/components/ContactForm';
import { useSaveAndSendContactMutation } from '@/store/Slices/ContactSlice/contactApi';
import SuccessCheckmark from '../SuccessCheckmark';

// Define the type for form data for better type safety in TypeScript
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

const Hero = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    business: '',
    address: '',
    subject: '',
    message: '',
    howDidYouHearAboutUs: 'how'
  });

  const [saveAndSendContact, { isLoading, isError, isSuccess, error }] = useSaveAndSendContactMutation();

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const payload = {
        ...formData,
        subject: `${formData.subject ? `${formData.subject}` : ''}`,
      };
      await saveAndSendContact(payload).unwrap();
    } catch (err) {
      console.error('Failed to submit contact form:', err);
    }
  };

  return (
    <div className="relative min-h-screen   flex items-center justify-center">
      <div
        className="
    absolute inset-0 
    bg-cover bg-center rounded-md 
    w-full h-[600px] 
    sm:h-[400px] 
    md:h-[500px] 
    lg:h-[600px] 
    xl:h-[700px] 
    mx-auto
  "
        style={{ backgroundImage: `url(${pillerlighthousecar})` }}
      >

        <div className="absolute inset-50 opacity-100"></div>
      </div>

      <div className="relative max-w-[1440px] h-screen mx-auto flex flex-col lg:flex-row gap-8 mt-9">
        <div className="  z-10">
          <div className="text-center md:text-left px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 sm:mb-6 text-[#FEDA42]">
              Ready Mix Concrete <br className="hidden sm:block" /> by GATORMIX
            </h1>

            <p className="text-sm sm:text-base md:text-lg font-semibold mb-3 sm:mb-4 uppercase tracking-wide text-gray-300">
              GATORMIX READY MIX CONCRETE FOR ALL RESIDENTIAL, COMMERCIAL & INDUSTRIAL CONSTRUCTION PROJECTS
            </p>

            <p className="text-xs sm:text-sm md:text-base text-gray-300 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto md:mx-0">
              A wide range of fresh, high-quality concretes, including specialty concretes mixed on-site and miles at your job site, according to your specifications.
            </p>
          </div>


          <div className="space-y-4 pl-6 text-sm  md:mb-10 lg:mb-0">
            <div className="flex items-start sm:mx-auto md:mx-[12px]">
              <span className="text-yellow-400 mr-3 mt-1">
                {/* SVG for Batching Software */}
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.6801 6.14182H12.4037V9.78182L13.6801 8.50545V6.14182ZM3.49462 15.2H2.21826V18.84L3.49462 17.5636V15.2Z" fill="url(#paint0_linear_10148_374)" />
                  <path d="M18.4109 4.03275H3.57818V9.22184C3.58182 9.24729 3.58182 9.27274 3.57818 9.2982V12.3891H18.4109V4.03275ZM10.2945 8.65093V10.6327C10.2945 10.8255 10.1382 10.9855 9.94182 10.9855H5.33818C5.29091 10.9855 5.24727 10.9746 5.20364 10.96C5.11845 10.9239 5.05064 10.8561 5.01455 10.7709C4.99705 10.7283 4.98838 10.6825 4.98909 10.6364V5.78911C4.98909 5.59638 5.14546 5.43638 5.34182 5.43638H9.94909C10.1418 5.43638 10.3018 5.59274 10.3018 5.78911V8.65093H10.2945ZM17.0073 8.65093V10.6327C17.0073 10.8255 16.8509 10.9855 16.6545 10.9855H12.0509C12.0036 10.9855 11.96 10.9746 11.9164 10.96C11.8312 10.9239 11.7634 10.8561 11.7273 10.7709C11.7098 10.7283 11.7011 10.6825 11.7018 10.6364V5.78911C11.7018 5.59638 11.8582 5.43638 12.0545 5.43638H16.6618C16.8545 5.43638 17.0145 5.59274 17.0145 5.78911V8.65093H17.0073ZM2.87636 12.3891V10.1164L0.603638 12.3891H2.87636ZM4.19637 15.2H6.12V17.3564H4.19637V15.2Z" fill="url(#paint1_linear_10148_374)" />
                  <path d="M12.8982 10.28H16.3055V9.00001H14.1782L12.8982 10.28ZM7.66913 6.14183H9.59277V8.29819H7.66913V6.14183ZM6.85459 0.552734L4.0764 3.33092H18.6182L21.3964 0.552734H6.85459ZM6.96731 6.14183H5.68731V9.78183L6.96731 8.50546V6.14183ZM14.3855 6.14183H16.3055V8.29819H14.3855V6.14183ZM6.18549 10.28H9.59277V9.00001H7.46186L6.18549 10.28ZM15.6437 20.9491L18.4182 18.1746V13.0909H15.6437V20.9491ZM19.1164 11.8909L21.8909 9.11637V1.05092L19.1164 3.82546V11.8909ZM0.109131 13.0909V21.4473H14.9419V13.0909H3.22913H0.109131ZM8.22913 14.8473C8.22913 14.6546 8.38549 14.4946 8.58186 14.4946H13.1891C13.3819 14.4946 13.5419 14.6509 13.5419 14.8473V19.6909C13.5419 19.8836 13.3855 20.0436 13.1891 20.0436H8.57822C8.53095 20.0436 8.48731 20.0327 8.44368 20.0182C8.35849 19.9821 8.29068 19.9143 8.25459 19.8291C8.23708 19.7864 8.22842 19.7407 8.22913 19.6946V14.8473ZM6.47277 14.4982C6.66549 14.4982 6.82549 14.6546 6.82549 14.8509V19.6946C6.82549 19.8873 6.66913 20.0473 6.47277 20.0473H1.86549C1.81822 20.0473 1.77459 20.0364 1.73095 20.0218C1.64576 19.9857 1.57795 19.9179 1.54186 19.8327C1.52436 19.7901 1.5157 19.7443 1.5164 19.6982V14.8473C1.5164 14.6546 1.67277 14.4946 1.86913 14.4946H6.47277V14.4982Z" fill="url(#paint2_linear_10148_374)" />
                  <path d="M6.12004 19.3382V18.0582H3.99277L2.71277 19.3382H6.12004ZM12.8328 19.3382V18.0582H10.7055L9.42913 19.3382H12.8328ZM10.211 15.2H8.93095V18.84L10.211 17.5636V15.2ZM10.9128 15.2H12.8328V17.3564H10.9128V15.2Z" fill="url(#paint3_linear_10148_374)" />
                  <defs>
                    <linearGradient id="paint0_linear_10148_374" x1="7.94917" y1="6.14182" x2="7.94917" y2="18.84" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#FEDA42" />
                      <stop offset="1" stopColor="#FFCE00" />
                    </linearGradient>
                    <linearGradient id="paint1_linear_10148_374" x1="9.50727" y1="4.03275" x2="9.50727" y2="17.3564" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#FEDA42" />
                      <stop offset="1" stopColor="#FFCE00" />
                    </linearGradient>
                    <linearGradient id="paint2_linear_10148_374" x1="11" y1="0.552734" x2="11" y2="21.4473" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#FEDA42" />
                      <stop offset="1" stopColor="#FFCE00" />
                    </linearGradient>
                    <linearGradient id="paint3_linear_10148_374" x1="7.77277" y1="15.2" x2="7.77277" y2="19.3382" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#FEDA42" />
                      <stop offset="1" stopColor="#FFCE00" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <span className="text-gray-200">Get the exact amount of concrete you need every time with our state-of-the-art batching software</span>
            </div>
            <div className="flex items-start">
              <span className="text-yellow-400 mr-3 mt-1">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.9165 14.4102C21.736 13.9829 20.4255 14.0816 19.3207 14.681C19.3063 14.6882 14.9954 16.6364 14.9954 16.6364C14.6892 16.8658 14.3339 16.987 13.9681 16.987H11.2558C10.9188 16.987 10.6457 16.7142 10.6457 16.3776C10.6457 16.0411 10.9188 15.7683 11.2558 15.7683H13.9681C14.816 15.7683 14.8345 14.0239 14.0041 13.9548L10.2237 13.9114C9.55659 13.904 8.88895 13.4752 8.18577 13.4591C7.47007 13.4428 6.793 13.6253 6.19131 14.0155C5.35346 14.559 4.78146 15.4226 4.39808 16.3281L6.44341 21.4931H12.3245C12.8562 21.4929 13.3786 21.354 13.8402 21.0902L22.9672 15.869C23.2446 15.6337 23.459 15.3589 23.3648 14.937C23.3118 14.6997 23.1416 14.4918 22.9165 14.4102ZM0.612793 16.9609L3.40018 24L5.63756 22.7715L2.85013 15.7325L0.612793 16.9609ZM17.4094 0C14.4168 0 11.9908 2.45882 11.9908 5.4919C11.9908 8.52497 14.4168 10.9838 17.4094 10.9838C20.402 10.9838 22.828 8.52497 22.828 5.4919C22.828 2.45882 20.402 0 17.4094 0ZM18.0252 8.23328V9.14369H16.7713V8.30733C16.2869 8.23533 15.8564 8.04256 15.4845 7.75036L15.9342 6.48928C16.2988 6.77579 16.8199 7.03759 17.2679 7.03759C17.6115 7.03759 17.8335 6.8799 17.8335 6.63579C17.8335 6.47713 17.7825 6.28703 17.1734 6.03877C16.4109 5.7379 15.6303 5.29656 15.6303 4.30805C15.6303 3.56174 16.0865 2.96215 16.8268 2.72574V1.84005H18.0729V2.64723C18.452 2.70641 18.8576 2.89128 19.1912 3.10651L18.7238 4.34769C18.3879 4.12364 17.9115 3.9062 17.5292 3.9062C17.1113 3.9062 17.0662 4.12036 17.0662 4.21241C17.0662 4.35656 17.12 4.48097 17.8158 4.77046C18.4962 5.04959 19.2771 5.50749 19.2771 6.57995C19.2772 7.34615 18.7885 7.98697 18.0252 8.23328Z" fill="url(#paint0_linear_10148_385)" />
                  <defs>
                    <linearGradient id="paint0_linear_10148_385" x1="12.0001" y1="0" x2="12.0001" y2="24" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#FEDA42" />
                      <stop offset="1" stopColor="#FFCE00" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <span className="text-gray-200">Pay only for the concrete mixture you use</span>
            </div>
            <div className="flex items-start">
              <span className="text-yellow-400 mr-3 mt-1">
                {/* SVG for Consistency */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.9529 16.8268C21.6125 16.6398 21.185 16.7642 20.9981 17.1045C20.8111 17.4448 20.9355 17.8723 21.2758 18.0593C22.1134 18.5194 22.5938 19.0295 22.5938 19.4588C22.5938 19.9838 21.8498 20.7976 19.7619 21.5069C17.6992 22.2078 14.9426 22.5937 12 22.5937C9.05742 22.5937 6.30084 22.2078 4.23811 21.5069C2.15016 20.7976 1.40625 19.9838 1.40625 19.4588C1.40625 19.0295 1.88663 18.5194 2.72419 18.0592C3.06455 17.8723 3.18886 17.4448 3.00187 17.1044C2.81489 16.7641 2.38753 16.6398 2.04708 16.8267C1.11323 17.3398 0 18.2129 0 19.4588C0 20.4138 0.656813 21.7754 3.78572 22.8385C5.99034 23.5875 8.90756 24 12 24C15.0924 24 18.0097 23.5875 20.2143 22.8385C23.3432 21.7754 24 20.4138 24 19.4588C24 18.2129 22.8868 17.3398 21.9529 16.8268Z" fill="url(#paint0_linear_10148_395)" />
                  <path d="M6.69147 20.4905C8.11881 20.8937 10.0041 21.1158 12 21.1158C13.9959 21.1158 15.8811 20.8937 17.3085 20.4905C19.0547 19.9972 19.9401 19.2831 19.9401 18.3682C19.9401 17.4532 19.0547 16.7392 17.3085 16.246C16.9208 16.1365 16.4992 16.0404 16.051 15.9585C15.7992 16.3933 15.5441 16.8263 15.2859 17.2573C15.782 17.3317 16.2478 17.423 16.6708 17.5308C17.9559 17.8581 18.4254 18.2266 18.5219 18.3682C18.4254 18.5099 17.9559 18.8784 16.6708 19.2057C15.4545 19.5155 13.8895 19.6922 12.2412 19.708C12.161 19.7141 12.0805 19.7172 12 19.7173C11.9189 19.7173 11.8385 19.7139 11.7587 19.708C10.1104 19.6922 8.54542 19.5156 7.32906 19.2057C6.04394 18.8784 5.57449 18.5099 5.47797 18.3682C5.57449 18.2266 6.04399 17.8581 7.32911 17.5308C7.75211 17.4231 8.21791 17.3317 8.71408 17.2573C8.44741 16.812 8.19236 16.379 7.94894 15.9585C7.50072 16.0405 7.07908 16.1365 6.69147 16.246C4.94524 16.7392 4.05981 17.4533 4.05981 18.3682C4.05981 19.2831 4.94524 19.9972 6.69147 20.4905Z" fill="url(#paint1_linear_10148_395)" />
                  <path d="M12 18.311C12.6259 18.311 13.1945 17.992 13.521 17.4578C15.809 13.7145 18.5362 8.7811 18.5362 6.5362C18.5362 2.93213 15.6041 0 12 0C8.39587 0 5.46375 2.93213 5.46375 6.5362C5.46375 8.7811 8.19107 13.7145 10.479 17.4578C10.8055 17.992 11.3741 18.311 12 18.311ZM9.37279 6.08742C9.37279 4.63885 10.5514 3.46031 12 3.46031C13.4486 3.46031 14.6272 4.63885 14.6272 6.08742C14.6272 7.53605 13.4486 8.71458 12 8.71458C10.5514 8.71458 9.37279 7.5361 9.37279 6.08742Z" fill="url(#paint2_linear_10148_395)" />
                  <defs>
                    <linearGradient id="paint0_linear_10148_395" x1="12" y1="16.7397" x2="12" y2="24" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#FEDA42" />
                      <stop offset="1" stopColor="#FFCE00" />
                    </linearGradient>
                    <linearGradient id="paint1_linear_10148_395" x1="12" y1="15.9585" x2="12" y2="21.1158" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#FEDA42" />
                      <stop offset="1" stopColor="#FFCE00" />
                    </linearGradient>
                    <linearGradient id="paint2_linear_10148_395" x1="12" y1="0" x2="12" y2="18.311" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#FEDA42" />
                      <stop offset="1" stopColor="#FFCE00" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <span className="text-gray-200">Rely on stronger, more consistent concrete from on-site mixing</span>
            </div>
          </div>

        </div>

        {/* Right Content (Form) */}
        <div className="w-full z-10 mx-auto mt-50">
          <div className="bg-white p-8 rounded-lg shadow-xl">
            {isSuccess ? (
              <div className="text-center">
                <div className='flex justify-center items-center'>
                <SuccessCheckmark />
                </div>
                <h2 className="text-2xl font-bold text-green-800 mt-4">Thank You!</h2>
                <p className="text-gray-600">Your message has been sent successfully.</p>
              </div>
            ) : (
              <>
                {/* --- Header --- */}
                <h2 className="text-gray-800 text-md font-bold mb-2 uppercase tracking-wider text-center">
                  NEED CONCRETE DELIVERED FROM GATORMIX?
                </h2>
                <p className="text-sm text-gray-500 mb-6 text-center">
                  Schedule a delivery today.
                </p>

                {/* --- Form Fields --- */}
                <form onSubmit={handleSubmit} className="space-y-4">

                  {/* Name and Phone Number - Grid Layout */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        name="name"
                        placeholder="Name*"
                        aria-label="Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        aria-label="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                      />
                    </div>
                  </div>

                  {/* Email Address */}
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address*"
                    aria-label="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                  />

                  {/* Business */}
                  <input
                    type="text"
                    name="business"
                    placeholder="Business"
                    aria-label="Business"
                    value={formData.business}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                  />

                  {/* Address */}
                  <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    aria-label="Address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                  />

                  {/* Subject */}
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    aria-label="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                  />

                  {/* Message */}
                  <textarea
                    name="message"
                    placeholder="Message"
                    aria-label="Message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 resize-none"
                  ></textarea>

                  {/* --- Success & Cloudflare --- */}
                  <div className="flex items-center justify-between py-2">

                    <div className="flex items-center space-x-1">
                      {/* <ContactForm /> */}
                    </div>
                  </div>

                  {/* How did you hear about us? */}
                  <label htmlFor="howDidYouHearAboutUs" className="sr-only">How did you hear about us?</label>
                  <select
                    id="howDidYouHearAboutUs"
                    name="howDidYouHearAboutUs"
                    value={formData.howDidYouHearAboutUs}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 appearance-none"
                  >
                    <option value="how">How did you hear about us?</option>
                    <option value="Google Search">Google Search</option>
                    <option value="Referral">Referral</option>
                    <option value="Social Media">Social Media</option>
                    <option value="Advertisement">Advertisement</option>
                  </select>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full p-3 mt-6 bg-yellow-400 text-gray-900 font-extrabold text-base rounded-lg shadow-md hover:bg-yellow-500 transition-colors disabled:opacity-50 cursor-pointer"
                  >
                    {isLoading ? 'Submitting...' : 'Submit Contact'}
                  </button>
                  {isError && <p className="text-red-500 text-sm text-center mt-2">Error: {(error as any)?.data?.message || 'Something went wrong.'}</p>}
                </form>
                <p className="text-[#848D9B] text-center mt-3 text-base sm:text-lg md:text-sm">
                  Contact Us: (239)309-7779
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;