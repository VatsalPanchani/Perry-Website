import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, MapPin, Phone, Mail, ExternalLink, Hexagon } from 'lucide-react';
import { CONTACT_DATA, OWNER_NAME } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="bg-brand p-2.5 rounded-lg">
                <Hexagon className="text-white w-6 h-6 fill-current" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-serif font-black tracking-tight leading-none text-brand">PERRY</span>
                <span className="text-[10px] font-black uppercase tracking-[0.3em] mt-1 text-white/50">Cera-Tech Ind.</span>
              </div>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed font-medium">
              A leading manufacturer and supplier of precision industrial ceramics, specializing in high alumina products and ceramic guides for industrial excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xs font-black uppercase tracking-widest text-brand">Navigation</h3>
            <ul className="space-y-4">
              <li><Link to="/" className="text-gray-400 hover:text-white text-sm font-bold transition-colors">Home Page</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-white text-sm font-bold transition-colors">Product Catalog</Link></li>
              <li><Link to="/#about" className="text-gray-400 hover:text-white text-sm font-bold transition-colors">Our Expertise</Link></li>
              <li><Link to="/#contact" className="text-gray-400 hover:text-white text-sm font-bold transition-colors">Contact Technical Team</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xs font-black uppercase tracking-widest text-brand">Contact Info</h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-4 text-sm text-gray-400 group">
                <MapPin className="text-brand w-5 h-5 mt-0.5 shrink-0" />
                <span className="group-hover:text-white transition-colors">{CONTACT_DATA.address}</span>
              </li>
              <li className="flex items-center gap-4 text-sm text-gray-400 group">
                <Phone className="text-brand w-5 h-5 shrink-0" />
                <span className="group-hover:text-white transition-colors">{CONTACT_DATA.phone} ({OWNER_NAME})</span>
              </li>
              <li className="flex items-center gap-4 text-sm text-gray-400 group">
                <Mail className="text-brand w-5 h-5 shrink-0" />
                <span className="group-hover:text-white transition-colors">{CONTACT_DATA.email}</span>
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
                className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/10 hover:border-brand transition-all group"
              >
                <div className="text-orange-500 font-black text-xs">IM</div>
                <div className="flex-1">
                   <p className="text-[10px] font-black uppercase tracking-widest text-white">IndiaMart Store</p>
                   <p className="text-[9px] font-bold text-gray-500">Verified Supplier</p>
                </div>
                <ExternalLink size={14} className="text-gray-600 group-hover:text-white" />
              </a>
              <div className="flex gap-4">
                <a href={CONTACT_DATA.facebook} target="_blank" rel="noopener noreferrer" className="bg-white/5 p-3 rounded-xl border border-white/10 hover:bg-brand transition-all">
                  <Facebook size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-[10px] font-black uppercase tracking-widest text-center md:text-left">
            &copy; {new Date().getFullYear()} Perry Cera-Tech Ind. | Industrial Ceramic Excellence
          </p>
          <div className="text-gray-500 text-[10px] font-black uppercase tracking-widest flex items-center gap-8">
            <span>GSTIN: <span className="text-white">{CONTACT_DATA.gstin}</span></span>
            <span>Made for Precision</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;