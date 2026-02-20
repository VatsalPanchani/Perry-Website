import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="group flex items-center">

<svg
  viewBox="0 0 820 160"
  className="w-52 sm:w-64 transition-all duration-300 group-hover:scale-[1.03]"
  xmlns="http://www.w3.org/2000/svg"
>

  {/* Grey oval */}
  <ellipse cx="185" cy="80" rx="180" ry="55" fill="#d1d1d1" transform="rotate(-9 185 80)"/>

  {/* PERRY */}
  <text
    x="60"
    y="105"
    fontSize="96"
    fontWeight="200"
    fontFamily="Cupola"
    fill="#890101"
    letterSpacing="-2"
  >
    PERRY
  </text>

  {/* CERA-TECH IND */}
  <text
    x="400"
    y="105"
    fontSize="40"
    fontWeight="800"
    fontFamily="sans-serif"
    fill="#000000"
    letterSpacing="2"
  >
    CERA-TECH IND.
  </text>

</svg>

</Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-[10px] font-black uppercase tracking-widest transition-all duration-200 ${
                  location.pathname === link.path 
                    ? 'text-brand' 
                    : 'text-gray-500 hover:text-brand'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/#contact" 
              className="bg-brand text-white px-5 py-2 rounded text-[10px] font-black uppercase tracking-widest hover:bg-red-900 transition-all shadow active:scale-95"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black p-2 hover:bg-gray-100 rounded transition-colors"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-xl">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 text-[10px] font-black uppercase tracking-widest rounded ${
                  location.pathname === link.path ? 'bg-red-50 text-brand' : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;