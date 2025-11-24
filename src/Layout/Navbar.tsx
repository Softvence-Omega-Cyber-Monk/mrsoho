// import React, { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import logo from '@/assets/logo.png';
// import CommonWrapper from '@/common/CommonWrapper';

// interface NavItem {
//   label: string;
//   href: string;
// }

// const navItems: NavItem[] = [
//   { label: 'HOW IT WORKS', href: '/' },
//   { label: 'CONCRETE', href: '/concrete' },
//   { label: 'SERVICE AREAS', href: '/service-areas' },
// ];

// const Navbar: React.FC = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const location = useLocation();

//   // Handle scroll effect
//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.scrollY;
//       setIsScrolled(scrollTop > 50);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Close mobile menu when route changes
//   useEffect(() => {
//     setIsMenuOpen(false);
//   }, [location]);

//   // Prevent body scroll when mobile menu is open
//   useEffect(() => {
//     if (isMenuOpen) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'unset';
//     }

//     return () => {
//       document.body.style.overflow = 'unset';
//     };
//   }, [isMenuOpen]);

//   const toggleMenu = () => setIsMenuOpen(prev => !prev);

//   // ⬇️ UPDATED TO MAKE "HOW IT WORKS" ACTIVE ON "/" PAGE
//   const isActive = (path: string) => {
//     if (path === '/' && (location.pathname === '/' || location.pathname === '/landingpages')) {
//       return true;
//     }
//     return location.pathname === path;
//   };

//   return (
//     <div className={`sticky top-0 z-50 w-full bg-[#212121] shadow-lg transition-all duration-300 ${
//       isScrolled ? 'shadow-2xl' : 'shadow-lg'
//     }`}>
//       <CommonWrapper className="max-w-[1440px] mx-auto">
//         <nav className="flex items-center justify-between px-3 xs:px-4 sm:px-5 md:px-6 lg:px-8 py-2.5 xs:py-3 sm:py-3.5 md:py-4 h-12 xs:h-14 sm:h-16 md:h-18 lg:h-20">

//           {/* Logo - Optimized for all screens */}
//           <Link 
//             to="/landingpages" 
//             className="flex-shrink-0 z-10 transition-transform hover:scale-105"
//           >
//             <img
//               src={logo}
//               alt="GATORMIX Logo"
//               className="h-6 xs:h-7 sm:h-8 md:h-10 lg:h-12 xl:h-14 w-auto object-contain transition-all"
//             />
//           </Link>

//           {/* Desktop & Tablet Menu */}
//           <div className="hidden md:flex items-center gap-3 md:gap-4 lg:gap-5 xl:gap-6 2xl:gap-8">
//             {navItems.map((item) => (
//               <Link
//                 key={item.label}
//                 to={item.href}
//                 className={`font-semibold tracking-wide transition-all duration-300 whitespace-nowrap
//                   text-xs md:text-sm lg:text-base xl:text-lg
//                   ${isActive(item.href)
//                     ? 'text-[#FEDA42] font-bold'
//                     : 'text-white hover:text-[#FEDA42]'
//                   }`}
//               >
//                 {item.label}
//               </Link>
//             ))}

//             <Link
//               to="/contact"
//               className={`font-semibold tracking-wide transition-all duration-300 whitespace-nowrap
//                 text-xs md:text-sm lg:text-base xl:text-lg
//                 ${isActive('/contact')
//                   ? 'text-[#FEDA42] font-bold'
//                   : 'text-white hover:text-[#FEDA42]'
//                 }`}
//             >
//               CONTACT
//             </Link>

//             {/* Calculator Button - Fully responsive for tablets */}
//             <Link to="/concrete-calculator" className="flex-shrink-0">
//               <button className="
//                 px-3 py-1.5 
//                 md:px-4 md:py-2 
//                 lg:px-5 lg:py-2.5 
//                 xl:px-6 xl:py-3 
//                 2xl:px-7 2xl:py-3.5 
                
//                 bg-[#FEDA42] text-gray-900 font-bold uppercase 
                
//                 text-xs 
//                 md:text-sm 
//                 lg:text-base 
                
//                 rounded-lg 
//                 md:rounded-xl 
                
//                 shadow-lg 
//                 hover:bg-[#e0c03a] 
//                 hover:scale-105 
//                 active:scale-95 
//                 transition-all duration-200 
//                 whitespace-nowrap
                
//                 focus:outline-none 
//                 focus:ring-2 
//                 focus:ring-[#FEDA42] 
//                 focus:ring-offset-2 
//                 focus:ring-offset-gray-900
//               ">
//                 Concrete Calculator
//               </button>
//             </Link>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={toggleMenu}
//             className="md:hidden z-50 p-2 xs:p-2.5 sm:p-3 rounded-lg text-gray-300 hover:text-[#FEDA42] 
//               hover:bg-gray-800 active:bg-gray-700 transition-all duration-200 
//               focus:outline-none focus:ring-2 focus:ring-[#FEDA42] focus:ring-offset-2 focus:ring-offset-gray-900"
//             aria-label="Toggle menu"
//             aria-expanded={isMenuOpen}
//           >
//             <svg className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               {isMenuOpen ? (
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//               ) : (
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//               )}
//             </svg>
//           </button>
//         </nav>

//         {/* Mobile & Tablet Menu Overlay */}
//         {isMenuOpen && (
//           <>
//             {/* Backdrop */}
//             <div 
//               className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
//               onClick={() => setIsMenuOpen(false)}
//             />
            
//             {/* Menu Panel */}
//             <div className="md:hidden fixed inset-y-0 right-0 w-full max-w-xs sm:max-w-sm bg-[#212121] 
//               border-l-4 border-[#FEDA42] shadow-2xl z-50 overflow-y-auto
//               animate-in slide-in-from-right-80 duration-300">
              
//               <div className="flex flex-col h-full pt-16 sm:pt-20 pb-6 sm:pb-8 px-4 sm:px-6">
//                 {/* Close Button */}
//                 <button
//                   onClick={() => setIsMenuOpen(false)}
//                   className="absolute top-3 sm:top-4 right-3 sm:right-4 p-2 text-gray-300 hover:text-[#FEDA42] transition-colors"
//                   aria-label="Close menu"
//                 >
//                   <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                   </svg>
//                 </button>

//                 {/* Navigation Links */}
//                 <div className="space-y-3 sm:space-y-4 flex-1">
//                   {navItems.map((item) => (
//                     <Link
//                       key={item.label}
//                       to={item.href}
//                       onClick={() => setIsMenuOpen(false)}
//                       className={`block font-bold py-3 sm:py-4 px-3 sm:px-4 rounded-xl border-b border-gray-700 transition-all
//                         text-lg 
//                         xs:text-xl 
//                         sm:text-2xl
//                         ${isActive(item.href) 
//                           ? 'text-[#FEDA42] bg-gray-800' 
//                           : 'text-white hover:text-[#FEDA42] hover:bg-gray-800'
//                         } active:scale-95`}
//                     >
//                       {item.label}
//                     </Link>
//                   ))}

//                   <Link
//                     to="/contact"
//                     onClick={() => setIsMenuOpen(false)}
//                     className={`block font-bold py-3 sm:py-4 px-3 sm:px-4 rounded-xl border-b border-gray-700 transition-all
//                       text-lg 
//                       xs:text-xl 
//                       sm:text-2xl
//                       ${isActive('/contact') 
//                         ? 'text-[#FEDA42] bg-gray-800' 
//                         : 'text-white hover:text-[#FEDA42] hover:bg-gray-800'
//                       } active:scale-95`}
//                   >
//                     CONTACT
//                   </Link>
//                 </div>

//                 {/* Calculator Button */}
//                 <div className="pt-6 sm:pt-8 border-t border-gray-700">
//                   <Link 
//                     to="/concrete-calculator" 
//                     onClick={() => setIsMenuOpen(false)}
//                     className="block"
//                   >
//                     <button className="w-full py-3 sm:py-4 bg-[#FEDA42] text-gray-900 font-bold uppercase 
//                       text-base 
//                       xs:text-lg 
//                       sm:text-xl 
//                       rounded-xl 
//                       shadow-2xl 
//                       hover:bg-[#e0c03a] 
//                       hover:scale-105 
//                       active:scale-95 
//                       transition-all duration-200 
//                       focus:outline-none 
//                       focus:ring-2 
//                       focus:ring-[#FEDA42] 
//                       focus:ring-offset-2 
//                       focus:ring-offset-gray-900">
//                       Concrete Calculator
//                     </button>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </>
//         )}
//       </CommonWrapper>
//     </div>
//   );
// };

// export default Navbar;










// import React, { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import logo from '@/assets/logo.png';
// import CommonWrapper from '@/common/CommonWrapper';

// interface NavItem {
//   label: string;
//   href: string;
// }

// const navItems: NavItem[] = [
//   { label: 'HOW IT WORKS', href: '/' },
//   { label: 'CONCRETE', href: '/concrete' },
//   { label: 'SERVICE AREAS', href: '/service-areas' },
// ];

// const Navbar: React.FC = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const location = useLocation();

//   // Handle scroll effect
//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.scrollY;
//       setIsScrolled(scrollTop > 50);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Close mobile menu when route changes
//   useEffect(() => {
//     setIsMenuOpen(false);
//   }, [location]);

//   // Prevent body scroll when mobile menu is open
//   useEffect(() => {
//     if (isMenuOpen) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'unset';
//     }

//     return () => {
//       document.body.style.overflow = 'unset';
//     };
//   }, [isMenuOpen]);

//   const toggleMenu = () => setIsMenuOpen(prev => !prev);

//   const isActive = (path: string) => {
//     if (path === '/') {
//       return location.pathname === '/' || location.pathname === '/landingpages';
//     }
//     return location.pathname === path;
//   };

//   return (
//     <div className={`sticky top-0 z-50 w-full bg-[#212121] shadow-lg transition-all duration-300 ${
//       isScrolled ? 'shadow-2xl' : 'shadow-lg'
//     }`}>
//       <CommonWrapper className="max-w-[1440px] mx-auto">
//         <nav className="flex items-center justify-between px-3 xs:px-4 sm:px-6 lg:px-8 py-3 xs:py-4 h-14 xs:h-16 sm:h-18 md:h-20 lg:h-24">

//           {/* Logo - Optimized for all screens */}
//           <Link 
//             to="/landingpages" 
//             className="flex-shrink-0 z-10 transition-transform hover:scale-105"
//           >
//             <img
//               src={logo}
//               alt="GATORMIX Logo"
//               className="h-7 xs:h-8 sm:h-10 md:h-12 lg:h-14 xl:h-16 w-auto object-contain transition-all"
//             />
//           </Link>

//           {/* Desktop & Tablet Menu */}
//           <div className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap-8 2xl:gap-10">
//             {navItems.map((item) => (
//               <Link
//                 key={item.label}
//                 to={item.href}
//                 className={`font-semibold tracking-wide transition-all duration-300 whitespace-nowrap
//                   text-sm lg:text-base xl:text-lg 2xl:text-xl
//                   ${isActive(item.href)
//                     ? 'text-[#FEDA42] font-bold scale-105'
//                     : 'text-white hover:text-[#FEDA42] hover:scale-105'
//                   }`}
//               >
//                 {item.label}
//               </Link>
//             ))}

//             <Link
//               to="/contact"
//               className={`font-semibold tracking-wide transition-all duration-300 whitespace-nowrap
//                 text-sm lg:text-base xl:text-lg 2xl:text-xl
//                 ${isActive('/contact')
//                   ? 'text-[#FEDA42] font-bold scale-105'
//                   : 'text-white hover:text-[#FEDA42] hover:scale-105'
//                 }`}
//             >
//               CONTACT
//             </Link>

//             {/* Calculator Button - Responsive sizing */}
//             <Link to="/concrete-calculator" className="flex-shrink-0">
//               <button className="px-4 py-2 lg:px-5 lg:py-2.5 xl:px-6 xl:py-3 2xl:px-7 2xl:py-3.5 
//                 bg-[#FEDA42] text-gray-900 font-bold uppercase 
//                 text-xs lg:text-sm xl:text-base 
//                 rounded-lg shadow-lg hover:bg-[#e0c03a] hover:scale-105 
//                 active:scale-95 transition-all duration-200 whitespace-nowrap
//                 focus:outline-none focus:ring-2 focus:ring-[#FEDA42] focus:ring-offset-2 focus:ring-offset-gray-900">
//                 Concrete Calculator
//               </button>
//             </Link>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={toggleMenu}
//             className="md:hidden z-50 p-2 xs:p-3 rounded-lg text-gray-300 hover:text-[#FEDA42] 
//               hover:bg-gray-800 active:bg-gray-700 transition-all duration-200 
//               focus:outline-none focus:ring-2 focus:ring-[#FEDA42] focus:ring-offset-2 focus:ring-offset-gray-900"
//             aria-label="Toggle menu"
//             aria-expanded={isMenuOpen}
//           >
//             <svg className="w-6 h-6 xs:w-7 xs:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               {isMenuOpen ? (
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//               ) : (
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//               )}
//             </svg>
//           </button>
//         </nav>

//         {/* Mobile & Tablet Menu Overlay */}
//         {isMenuOpen && (
//           <>
//             {/* Backdrop */}
//             <div 
//               className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
//               onClick={() => setIsMenuOpen(false)}
//             />
            
//             {/* Menu Panel */}
//             <div className="md:hidden fixed inset-y-0 right-0 w-full max-w-sm bg-[#212121] 
//               border-l-4 border-[#FEDA42] shadow-2xl z-50 overflow-y-auto
//               animate-in slide-in-from-right-80 duration-300">
              
//               <div className="flex flex-col h-full pt-20 pb-8 px-6">
//                 {/* Close Button */}
//                 <button
//                   onClick={() => setIsMenuOpen(false)}
//                   className="absolute top-4 right-4 p-2 text-gray-300 hover:text-[#FEDA42] transition-colors"
//                   aria-label="Close menu"
//                 >
//                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                   </svg>
//                 </button>

//                 {/* Navigation Links */}
//                 <div className="space-y-4 flex-1">
//                   {navItems.map((item) => (
//                     <Link
//                       key={item.label}
//                       to={item.href}
//                       onClick={() => setIsMenuOpen(false)}
//                       className={`block text-xl xs:text-2xl sm:text-3xl font-bold py-4 px-4 rounded-xl border-b border-gray-700 transition-all
//                         ${isActive(item.href) 
//                           ? 'text-[#FEDA42] bg-gray-800 scale-105' 
//                           : 'text-white hover:text-[#FEDA42] hover:bg-gray-800'
//                         } active:scale-95`}
//                     >
//                       {item.label}
//                     </Link>
//                   ))}

//                   <Link
//                     to="/contact"
//                     onClick={() => setIsMenuOpen(false)}
//                     className={`block text-xl xs:text-2xl sm:text-3xl font-bold py-4 px-4 rounded-xl border-b border-gray-700 transition-all
//                       ${isActive('/contact') 
//                         ? 'text-[#FEDA42] bg-gray-800 scale-105' 
//                         : 'text-white hover:text-[#FEDA42] hover:bg-gray-800'
//                       } active:scale-95`}
//                   >
//                     CONTACT
//                   </Link>
//                 </div>

//                 {/* Calculator Button */}
//                 <div className="pt-8 border-t border-gray-700">
//                   <Link 
//                     to="/concrete-calculator" 
//                     onClick={() => setIsMenuOpen(false)}
//                     className="block"
//                   >
//                     <button className="w-full py-4 bg-[#FEDA42] text-gray-900 font-bold uppercase 
//                       text-lg xs:text-xl sm:text-2xl rounded-xl shadow-2xl 
//                       hover:bg-[#e0c03a] hover:scale-105 active:scale-95 
//                       transition-all duration-200 focus:outline-none focus:ring-2 
//                       focus:ring-[#FEDA42] focus:ring-offset-2 focus:ring-offset-gray-900">
//                       Concrete Calculator
//                     </button>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </>
//         )}
//       </CommonWrapper>
//     </div>
//   );
// };

// export default Navbar;




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
          {/* Logo - Made smaller for tablet */}
          <Link to="/landingpages" className="flex-shrink-0">
            <div className="flex items-center">
              <img
                src={logo}
                alt="logo"
                className="h-8 sm:h-10 md:h-12 lg:h-14 w-auto"
              />
            </div>
          </Link>

          {/* Mobile Menu Button - Hidden on tablet and up */}
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

          {/* Desktop & Tablet Menu - Improved spacing */}
          <div className="hidden md:flex items-center space-x-3 lg:space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`text-xs lg:text-sm font-medium transition-colors duration-300 whitespace-nowrap 
                  ${isActive(item.href)
                    ? 'text-[#FEDA42]'
                    : 'text-white hover:text-[#FEDA42]'}`}
              >
                {item.label}
              </Link>
            ))}

            {/* CONTACT link */}
            <Link
              to="/contact"
              className={`text-xs lg:text-sm font-medium transition-colors duration-300 whitespace-nowrap 
                ${isActive('/contact')
                  ? 'text-[#FEDA42]'
                  : 'text-white hover:text-[#FEDA42]'}`}
            >
              CONTACT
            </Link>

            {/* CONCRETE CALCULATOR Button - Better tablet sizing */}
            <Link to="/concrete-calculator" className="flex-shrink-0">
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
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}

                {/* CONTACT link */}
                <Link
                  to="/contact"
                  className={`block text-base font-bold transition-colors py-2 
                    ${isActive('/contact')
                      ? 'text-[#FEDA42]'
                      : 'text-gray-700 hover:text-[#FEDA42]'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  CONTACT
                </Link>

                <Link
                  to="/concrete-calculator"
                  onClick={() => setIsMenuOpen(false)}
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