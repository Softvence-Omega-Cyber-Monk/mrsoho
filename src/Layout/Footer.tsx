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

          {/* Right Section - Social Media */}
          <div className="order-3 md:order-none flex gap-3">
            <a
              href="https://www.instagram.com/gatormixfl/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1"
            >
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_10835_2016)">
                  <path d="M2.0001 2.17772C-0.514564 4.78972 0.000102922 7.56439 0.000102922 15.9937C0.000102922 22.9937 -1.22123 30.0111 5.17077 31.6631C7.16677 32.1764 24.8521 32.1764 26.8454 31.6604C29.5068 30.9737 31.6721 28.8151 31.9681 25.0511C32.0094 24.5257 32.0094 7.47105 31.9668 6.93505C31.6521 2.92572 29.1841 0.615054 25.9321 0.147054C25.1868 0.0390541 25.0374 0.00705405 21.2134 0.000387382C7.64944 0.00705405 4.6761 -0.596946 2.0001 2.17772Z" fill="url(#paint0_linear_10835_2016)" />
                  <path d="M15.9975 4.18621C11.1562 4.18621 6.55883 3.75554 4.80283 8.26221C4.07749 10.1235 4.18283 12.5409 4.18283 16.0022C4.18283 19.0395 4.08549 21.8942 4.80283 23.7409C6.55483 28.2502 11.1895 27.8182 15.9948 27.8182C20.6308 27.8182 25.4108 28.3009 27.1882 23.7409C27.9148 21.8609 27.8082 19.4795 27.8082 16.0022C27.8082 11.3862 28.0628 8.40621 25.8242 6.16887C23.5575 3.90221 20.4922 4.18621 15.9922 4.18621H15.9975ZM14.9388 6.31554C25.0375 6.29954 26.3228 5.17688 25.6135 20.7729C25.3615 26.2889 21.1615 25.6835 15.9988 25.6835C6.58549 25.6835 6.31483 25.4142 6.31483 15.9969C6.31483 6.47021 7.06149 6.32087 14.9388 6.31287V6.31554ZM22.3042 8.27687C21.9283 8.27687 21.5678 8.4262 21.302 8.692C21.0362 8.9578 20.8868 9.31831 20.8868 9.69421C20.8868 10.0701 21.0362 10.4306 21.302 10.6964C21.5678 10.9622 21.9283 11.1115 22.3042 11.1115C22.6801 11.1115 23.0406 10.9622 23.3064 10.6964C23.5722 10.4306 23.7215 10.0701 23.7215 9.69421C23.7215 9.31831 23.5722 8.9578 23.3064 8.692C23.0406 8.4262 22.6801 8.27687 22.3042 8.27687ZM15.9975 9.93421C15.2007 9.9343 14.4118 10.0913 13.6757 10.3963C12.9396 10.7013 12.2708 11.1483 11.7074 11.7118C10.5697 12.8497 9.93065 14.3931 9.93083 16.0022C9.931 17.6114 10.5704 19.1545 11.7084 20.2923C12.8463 21.43 14.3897 22.0691 15.9988 22.0689C17.608 22.0687 19.1512 21.4293 20.2889 20.2913C21.4266 19.1534 22.0657 17.61 22.0655 16.0009C22.0653 14.3917 21.4259 12.8485 20.2879 11.7108C19.15 10.5731 17.6066 9.93403 15.9975 9.93421ZM15.9975 12.0635C21.2042 12.0635 21.2108 19.9409 15.9975 19.9409C10.7922 19.9409 10.7842 12.0635 15.9975 12.0635Z" fill="white" />
                </g>
                <defs>
                  <linearGradient id="paint0_linear_10835_2016" x1="2.06146" y1="29.9565" x2="31.8021" y2="4.21635" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FFDD55" />
                    <stop offset="0.5" stop-color="#FF543E" />
                    <stop offset="1" stop-color="#C837AB" />
                  </linearGradient>
                  <clipPath id="clip0_10835_2016">
                    <rect width="32" height="32" fill="white" />
                  </clipPath>
                </defs>
              </svg>

            </a>

            <a
              href="https://www.tiktok.com/@gatormixfl"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1"
            >

              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_10835_2025)">
                  <path d="M28.5422 0H3.45782C1.54819 0 0 1.54819 0 3.45782V28.5422C0 30.4518 1.54819 32 3.45782 32H28.5422C30.4518 32 32 30.4518 32 28.5422V3.45782C32 1.54819 30.4518 0 28.5422 0ZM25.8709 13.9399C23.8452 13.9399 21.968 13.2919 20.4354 12.192V20.1308C20.4354 24.0961 17.2098 27.3217 13.2451 27.3217C11.7131 27.3217 10.2923 26.8385 9.12431 26.0183C7.27023 24.7167 6.05478 22.5636 6.05478 20.1308C6.05478 16.1661 9.28037 12.9405 13.2451 12.9405C13.5741 12.9405 13.8968 12.9673 14.214 13.0104V16.9988C13.9075 16.9027 13.5828 16.8471 13.2451 16.8471C11.4341 16.8471 9.96145 18.3204 9.96145 20.1308C9.96145 21.3918 10.6762 22.4874 11.7219 23.0374C12.1776 23.2777 12.6951 23.4151 13.2451 23.4151C15.0143 23.4151 16.457 22.008 16.5225 20.2544L16.5288 4.59836H20.4354C20.4354 4.93672 20.4685 5.26758 20.5278 5.58908C20.8037 7.07796 21.6871 8.35458 22.9107 9.15302C23.7634 9.70862 24.7797 10.0332 25.8709 10.0332V13.9399Z" fill="black" />
                </g>
                <defs>
                  <clipPath id="clip0_10835_2025">
                    <rect width="32" height="32" fill="white" />
                  </clipPath>
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












