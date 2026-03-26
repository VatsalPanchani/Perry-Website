import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-black/90 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 shadow-sm transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="group flex items-center">

            <svg
              viewBox="0 0 820 160"
              className="w-52 sm:w-64 transition-all duration-300 group-hover:scale-[1.03]"
              xmlns="http://www.w3.org/2000/svg"
            >

              {/* Grey oval */}
              <ellipse cx="185" cy="80" rx="180" ry="55" className="fill-[#d1d1d1] dark:fill-[#890101]" transform="rotate(-9 185 80)" />

              {/* PERRY */}
              <text
                x="60"
                y="105"
                fontSize="96"
                fontWeight="200"
                fontFamily="Cupola"
                className="fill-[#890101] dark:fill-[#d1d1d1]"
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
                className="fill-[#000000] dark:fill-white"
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
                className={`text-[10px] font-black uppercase tracking-widest transition-all duration-200 ${location.pathname === link.path
                  ? 'text-brand dark:text-red-500'
                  : 'text-gray-500 hover:text-brand dark:text-gray-400 dark:hover:text-red-400'
                  }`}
              >
                {link.name}
              </Link>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black dark:text-white p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition-colors"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-black border-t border-gray-100 dark:border-gray-800 absolute w-full shadow-xl transition-colors duration-300">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 text-[10px] font-black uppercase tracking-widest rounded ${location.pathname === link.path ? 'bg-red-50 dark:bg-red-900/20 text-brand dark:text-red-500' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
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