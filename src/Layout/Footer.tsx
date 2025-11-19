import CommonWrapper from "@/common/CommonWrapper";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <CommonWrapper className="max-w-[1440px] w-full">
      <footer className="border-t border-gray-200 text-gray-500 mt-[80px] py-4 sm:py-5 px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6 text-xs">
          {/* Left Section */}
          <div className="flex flex-col sm:flex-row items-center sm:items-center justify-center text-center sm:text-left gap-3 sm:gap-6 flex-wrap">
            {/* Copyright */}
            <div className="order-2 sm:order-1 text-gray-500 whitespace-nowrap">
              ©{currentYear} GATORMIX. All Rights Reserved.
            </div>

            {/* Links */}
            <div className="flex flex-wrap justify-center sm:justify-start gap-4 order-1 sm:order-2">
              <a
                href="/privacy-policy"
                className="text-gray-500 hover:text-gray-700 transition-colors duration-200 whitespace-nowrap"
              >
                Privacy Policy
              </a>
              <a
                href="/terms-of-service"
                className="text-gray-500 hover:text-gray-700 transition-colors duration-200 whitespace-nowrap"
              >
                Terms of Service
              </a>
              <a
                href="/cookies-settings"
                className="text-gray-500 hover:text-gray-700 transition-colors duration-200 whitespace-nowrap"
              >
                Cookies Settings
              </a>
            </div>
          </div>

          {/* Right Section - LinkedIn */}
          <div className="order-3 md:order-none">
            <a
              href="https://linkedin.com/company/gatomix"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-6 h-6 rounded-sm hover:scale-110 transition-transform duration-200"
              aria-label="Visit our LinkedIn page"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.5 3.24268C3.67157 3.24268 3 3.91425 3 4.74268V19.7427C3 20.5711 3.67157 21.2427 4.5 21.2427H19.5C20.3284 21.2427 21 20.5711 21 19.7427V4.74268C21 3.91425 20.3284 3.24268 19.5 3.24268H4.5ZM8.52076 7.2454C8.52639 8.20165 7.81061 8.79087 6.96123 8.78665C6.16107 8.78243 5.46357 8.1454 5.46779 7.24681C5.47201 6.40165 6.13998 5.72243 7.00764 5.74212C7.88795 5.76181 8.52639 6.40728 8.52076 7.2454ZM12.2797 10.0044H9.75971H9.7583V18.5643H12.4217V18.3646C12.4217 17.9847 12.4214 17.6047 12.4211 17.2246C12.4203 16.2108 12.4194 15.1959 12.4246 14.1824C12.426 13.9363 12.4372 13.6804 12.5005 13.4455C12.7381 12.568 13.5271 12.0013 14.4074 12.1406C14.9727 12.2291 15.3467 12.5568 15.5042 13.0898C15.6013 13.423 15.6449 13.7816 15.6491 14.129C15.6605 15.1766 15.6589 16.2242 15.6573 17.2719C15.6567 17.6417 15.6561 18.0117 15.6561 18.3815V18.5629H18.328V18.3576C18.328 17.9056 18.3278 17.4537 18.3275 17.0018C18.327 15.8723 18.3264 14.7428 18.3294 13.6129C18.3308 13.1024 18.276 12.599 18.1508 12.1054C17.9638 11.3713 17.5771 10.7638 16.9485 10.3251C16.5027 10.0129 16.0133 9.81178 15.4663 9.78928C15.404 9.78669 15.3412 9.7833 15.2781 9.77989C14.9984 9.76477 14.7141 9.74941 14.4467 9.80334C13.6817 9.95662 13.0096 10.3068 12.5019 10.9241C12.4429 10.9949 12.3852 11.0668 12.2991 11.1741L12.2797 11.1984V10.0044ZM5.68164 18.5671H8.33242V10.01H5.68164V18.5671Z"
                  fill="url(#paint0_linear_10510_687)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_10510_687"
                    x1="12"
                    y1="3.24268"
                    x2="12"
                    y2="21.2427"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#FEDA42" />
                    <stop offset="1" stopColor="#FFCE00" />
                  </linearGradient>
                </defs>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </CommonWrapper>
  );
};

export default Footer;
