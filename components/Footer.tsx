import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, MapPin, Phone, Mail, ExternalLink, Hexagon } from 'lucide-react';
import { CONTACT_DATA, OWNER_NAME } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-black text-black dark:text-white pt-24 pb-12 border-t border-gray-100 dark:border-white/5 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand */}
          <div className="space-y-6">
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
            <p className="text-gray-500 text-sm leading-relaxed font-medium">
              A leading manufacturer and supplier of precision industrial ceramics, specializing in high alumina products and ceramic guides for industrial excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xs font-black uppercase tracking-widest text-brand">Navigation</h3>
            <ul className="space-y-4">
              <li><Link to="/" className="text-gray-500 dark:text-gray-400 hover:text-brand dark:hover:text-white text-sm font-bold transition-colors">Home Page</Link></li>
              <li><Link to="/products" className="text-gray-500 dark:text-gray-400 hover:text-brand dark:hover:text-white text-sm font-bold transition-colors">Product Catalog</Link></li>
              <li><Link to="/#about" className="text-gray-500 dark:text-gray-400 hover:text-brand dark:hover:text-white text-sm font-bold transition-colors">Our Expertise</Link></li>
              <li><Link to="/#contact" className="text-gray-500 dark:text-gray-400 hover:text-brand dark:hover:text-white text-sm font-bold transition-colors">Contact Technical Team</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xs font-black uppercase tracking-widest text-brand">Contact Info</h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-4 text-sm text-gray-500 dark:text-gray-400 group">
                <MapPin className="text-brand dark:text-red-500 w-5 h-5 mt-0.5 shrink-0" />
                <span className="group-hover:text-black dark:group-hover:text-white transition-colors">{CONTACT_DATA.address}</span>
              </li>
              <li className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 group">
                <Phone className="text-brand dark:text-red-500 w-5 h-5 shrink-0" />
                <span className="group-hover:text-black dark:group-hover:text-white transition-colors">{CONTACT_DATA.phone} ({OWNER_NAME})</span>
              </li>
              <li className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 group">
                <Mail className="text-brand dark:text-red-500 w-5 h-5 shrink-0" />
                <span className="group-hover:text-black dark:group-hover:text-white transition-colors">{CONTACT_DATA.email}</span>
              </li>
            </ul>
          </div>

          {/* Business Links */}
          <div className="space-y-6">
            <h3 className="text-xs font-black uppercase tracking-widest text-brand">Industrial Portals</h3>
            <div className="space-y-4">
              <a
                href={CONTACT_DATA.indiaMart}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-gray-50 dark:bg-white/5 p-4 rounded-xl border border-gray-100 dark:border-white/10 hover:border-brand dark:hover:border-red-500 transition-all group"
              >
                <div className="text-brand font-black text-xs">IM</div>
                <div className="flex-1">
                  <p className="text-[10px] font-black uppercase tracking-widest text-black dark:text-white">IndiaMart Store</p>
                  <p className="text-[9px] font-bold text-gray-500 dark:text-gray-400">Verified Supplier</p>
                </div>
                <ExternalLink size={14} className="text-gray-400 group-hover:text-brand dark:text-gray-600 dark:group-hover:text-white" />
              </a>
              <div className="flex gap-4">
                <a href={CONTACT_DATA.facebook} target="_blank" rel="noopener noreferrer" className="bg-gray-50 dark:bg-white/5 p-3 rounded-xl border border-gray-100 dark:border-white/10 hover:bg-brand dark:hover:bg-brand text-black dark:text-white hover:text-white transition-all">
                  <Facebook size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 dark:border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-400 dark:text-gray-500 text-[10px] font-black uppercase tracking-widest text-center md:text-left">
            &copy; {new Date().getFullYear()} Perry Cera-Tech Ind. | Industrial Ceramic Excellence
          </p>
          <div className="text-gray-400 dark:text-gray-500 text-[10px] font-black uppercase tracking-widest flex items-center gap-8">
            <span>GSTIN: <span className="text-black dark:text-white">{CONTACT_DATA.gstin}</span></span>
            <span>Made for Precision</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;