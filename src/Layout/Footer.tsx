import CommonWrapper from "@/common/CommonWrapper";
import InstagramIcon from '@/components/ui/InstagramIcon';
import TikTokIcon from '@/components/ui/TikTokIcon';

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

          {/* Right Section - Social Media */}
          <div className="order-3 md:order-none flex gap-3">
            <InstagramIcon />
            <TikTokIcon />
          </div>
        </div>
      </footer>
    </CommonWrapper>
  );
};

export default Footer;
