import React from 'react';
import { Link } from 'react-router-dom';
import Column from '../assets/Column.png';
import CommonWrapper from '@/common/CommonWrapper';
// Define the type for a single navigation item
interface NavItem {
  label: string;
  href: string; // The URL/path for the link
}

// Define the navigation items data
const navItems: NavItem[] = [
  { label: 'CONCRETE', href: '/concrete' },
  { label: 'SERVICE AREAS', href: '/service-areas' },
];

const Navbar: React.FC = () => {
  return (

    <CommonWrapper>
    <nav className="flex items-center justify-between p-4 h-24">
      {/* Logo Section */}
      <Link to="/">
      <div className="text-4xl font-serif font-bold text-gray-900 cursor-pointer w-[84px]">
        <img src={Column} alt="logo" />
      </div>
      </Link>

      {/* Navigation Links and Buttons Section */}
      <div className="flex items-center space-x-8">
        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
            key={item.label}
            to={item.href}
            className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Contact Link (Highlighted Text) */}
        <Link
          to="/contact"
          className="text-sm font-bold text-[#FEDA42] transition-colors hidden md:block"
          >
          CONTACT
        </Link>

        {/* CONCRETE CALCULATOR Button (Primary CTA) */}
        <Link to="/concrete">
          <button
            className="px-6 py-3 bg-[#FEDA42] text-gray-900 font-bold uppercase text-sm rounded-lg shadow-md outline-none"
            >
            CONCRETE CALCULATOR
          </button>
        </Link>
      </div>
    </nav>
    </CommonWrapper>
  );
};

export default Navbar;