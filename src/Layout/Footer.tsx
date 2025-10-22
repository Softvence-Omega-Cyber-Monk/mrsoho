import CommonWrapper from "@/common/CommonWrapper";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <CommonWrapper>
      <footer className="bg-white border-t border-gray-200 text-gray-500 py-4 sm:py-3">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Left Section - Copyright and Links */}
            <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-6 text-xs text-center sm:text-left">
              <div className="text-gray-500 whitespace-nowrap order-2 sm:order-1">
                ©{currentYear} GATORMIX. All Rights Reserved.
              </div>
              
              {/* Policy Links */}
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

            {/* Right Section - LinkedIn Button */}
            <div className="order-3 mt-2 md:mt-0">
              <a 
                href="https://linkedin.com/company/gatomix" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center text-white bg-yellow-500 p-2 rounded-sm hover:bg-yellow-600 transition-colors duration-200 w-8 h-8 sm:w-7 sm:h-7"
                aria-label="Visit our LinkedIn page"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-4 w-4" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                >
                  <text 
                    x="50%" 
                    y="75%" 
                    dominantBaseline="middle" 
                    textAnchor="middle" 
                    fontSize="20" 
                    fill="white" 
                    fontWeight="bold"
                  >
                    in
                  </text>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </CommonWrapper>
  );
};

export default Footer;