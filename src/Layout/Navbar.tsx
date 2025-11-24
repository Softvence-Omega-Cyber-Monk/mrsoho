import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '@/assets/logo.png';
import CommonWrapper from '@/common/CommonWrapper';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'HOW IT WORKS', href: '/' },
  { label: 'CONCRETE', href: '/concrete' },
  { label: 'SERVICE AREAS', href: '/service-areas' },
];

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToTop = () => window.scrollTo(0, 0);

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') {
      return true;
    }
    return location.pathname === path;
  };

  return (
    <div className="sticky top-0 z-50 w-full bg-[#212121]">
      <CommonWrapper className="max-w-[1440px]">
        <nav className="flex items-center justify-between p-4 h-16 md:h-20 lg:h-24 relative">
          
          {/* Logo */}
          <Link
            to="/landingpages"
            className="flex-shrink-0"
            onClick={scrollToTop}
          >
            <div className="flex items-center">
              <img
                src={logo}
                alt="logo"
                className="h-8 sm:h-10 md:h-12 lg:h-14 w-auto"
              />
            </div>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-300 hover:text-[#FEDA42] hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-[#FEDA42]"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop & Tablet Menu */}
          <div className="hidden md:flex items-center space-x-3 lg:space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                onClick={scrollToTop}
                className={`text-xs lg:text-sm font-medium transition-colors duration-300 whitespace-nowrap 
                  ${isActive(item.href)
                    ? 'text-[#FEDA42]'
                    : 'text-white hover:text-[#FEDA42]'}`}
              >
                {item.label}
              </Link>
            ))}

            {/* CONTACT */}
            <Link
              to="/contact"
              onClick={scrollToTop}
              className={`text-xs lg:text-sm font-medium transition-colors duration-300 whitespace-nowrap 
                ${isActive('/contact')
                  ? 'text-[#FEDA42]'
                  : 'text-white hover:text-[#FEDA42]'}`}
            >
              CONTACT
            </Link>

            {/* CONCRETE CALCULATOR */}
            <Link to="/concrete-calculator" onClick={scrollToTop} className="flex-shrink-0">
              <button className="
                px-3 py-2 
                md:px-4 md:py-2 
                lg:px-5 lg:py-2.5 
                xl:px-6 xl:py-3 
                bg-[#FEDA42] 
                cursor-pointer 
                text-gray-900 
                font-bold 
                uppercase 
                text-xs 
                lg:text-sm 
                rounded-lg 
                shadow-md 
                outline-none 
                hover:bg-[#fed130] 
                transition-colors 
                whitespace-nowrap
                flex-shrink-0
                min-w-0
              ">
                CONCRETE CALCULATOR
              </button>
            </Link>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-200 md:hidden z-50">
              <div className="px-4 py-6 space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.href}
                    className={`block text-base font-medium transition-colors py-2 
                      ${isActive(item.href)
                        ? 'text-[#FEDA42]'
                        : 'text-gray-700 hover:text-[#FEDA42]'}`}
                    onClick={() => {
                      scrollToTop();
                      setIsMenuOpen(false);
                    }}
                  >
                    {item.label}
                  </Link>
                ))}

                {/* CONTACT */}
                <Link
                  to="/contact"
                  className={`block text-base font-bold transition-colors py-2 
                    ${isActive('/contact')
                      ? 'text-[#FEDA42]'
                      : 'text-gray-700 hover:text-[#FEDA42]'}`}
                  onClick={() => {
                    scrollToTop();
                    setIsMenuOpen(false);
                  }}
                >
                  CONTACT
                </Link>

                {/* CALCULATOR BUTTON */}
                <Link
                  to="/concrete-calculator"
                  onClick={() => {
                    scrollToTop();
                    setIsMenuOpen(false);
                  }}
                >
                  <button className="w-full cursor-pointer px-6 py-3 bg-[#FEDA42] text-gray-900 font-bold uppercase text-sm rounded-lg shadow-md outline-none hover:bg-[#fed130] transition-colors mt-4">
                    CONCRETE CALCULATOR
                  </button>
                </Link>
              </div>
            </div>
          )}
        </nav>
      </CommonWrapper>
    </div>
  );
};

export default Navbar;