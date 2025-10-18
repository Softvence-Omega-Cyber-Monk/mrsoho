import CommonWrapper from "@/common/CommonWrapper";
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <CommonWrapper>
    <footer className="bg-white border-t border-gray-200 text-gray-500 py-3">
      <div className="sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0 text-xs">
                    <div className="flex flex-wrap items-center space-x-4">
            <div className="text-gray-500 whitespace-nowrap">
              ©{currentYear}
            </div>
                        <div className="flex flex-wrap space-x-4">
              <a 
                href="/privacy-policy" 
                className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a 
                href="/terms-of-service" 
                className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
              >
                Terms of Service
              </a>
              <a 
                href="/cookies-settings" 
                className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
              >
                Cookies Settings
              </a>
            </div>
          </div>
          <a 
            href="https://linkedin.com/company/gatomix" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white bg-yellow-500 p-1 rounded-sm hover:bg-yellow-600 transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-4 w-4" 
              viewBox="0 0 24 24" 
              fill="currentColor"
            >
              <text x="50%" y="75%" dominant-baseline="middle" text-anchor="middle" font-size="20" fill="white" font-weight="bold">in</text>
            </svg>
          </a>
        </div>
      </div>
    </footer>
    </CommonWrapper>
  );
};

export default Footer;