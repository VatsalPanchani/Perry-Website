import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronRight, 
  ShieldCheck, 
  Settings, 
  Factory, 
  Zap,
  Hexagon,
  Clock,
  ArrowRight,
  Phone,
  MessageCircle,
  MapPin,
  ExternalLink,
  Facebook
} from 'lucide-react';
import { CONTACT_DATA, PRODUCTS, OWNER_NAME } from '../constants';
import ProductCard from '../components/ProductCard';

const Home: React.FC = () => {
  const bestSellers = PRODUCTS.filter(p => p.isBestSeller).slice(0, 4);

  return (
    <div className="overflow-hidden">
      {/* Hero Section - Mobile Centric Realignment */}
      <section className="relative min-h-[70vh] sm:min-h-[85vh] flex items-center pt-16 bg-white dark:bg-black overflow-hidden technical-grid transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-4 sm:space-y-6 text-center lg:text-left order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 bg-brand/5 text-brand px-2 py-1 rounded font-black uppercase tracking-[0.2em] text-[8px] sm:text-[9px]">
                <Zap size={10} />
                <span>Industrial Excellence</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif font-black text-black dark:text-white leading-[1.1] tracking-tighter transition-colors duration-300">
                Engineering <br className="hidden sm:block"/>
                <span className="text-brand">Excellence</span> <br className="hidden sm:block"/>
                In Ceramics
              </h1>
              
              <p className="text-sm sm:text-base text-gray-500 max-w-md mx-auto lg:mx-0 leading-relaxed font-medium px-4 sm:px-0">
                Precision manufacturer of <span className="text-black dark:text-white font-bold transition-colors duration-300">Ceramic Guides</span> for textile & industrial machinery.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-4 px-6 sm:px-0">
                <Link to="/products" className="bg-brand text-white px-6 py-4 rounded font-black uppercase tracking-[0.1em] text-[10px] flex items-center justify-center gap-2 hover:bg-red-900 transition-all shadow-lg active:scale-95">
                  View Products <ArrowRight size={14} />
                </Link>
                <Link to="/contact" className="bg-white dark:bg-gray-900 text-black dark:text-white border border-black/10 dark:border-white/10 px-6 py-4 rounded font-black uppercase tracking-[0.1em] text-[10px] flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-800 transition-all active:scale-95">
                  Share your Requirements
                </Link>
              </div>
            </div>

            <div className="relative flex justify-center items-center order-1 lg:order-2">
              <div className="relative w-full aspect-square max-w-[200px] sm:max-w-md">
                <div className="absolute inset-0 animate-slow-spin opacity-10">
                   <Hexagon size="100%" strokeWidth={1} className="text-brand" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative animate-float">
                    <div className="absolute -inset-4 bg-brand/5 blur-3xl rounded-full"></div>
                    <img 
                      src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600" 
                      className="w-32 h-32 sm:w-80 sm:h-80 object-cover rounded-2xl sm:rounded-3xl shadow-2xl border-2 sm:border-4 border-white transform rotate-3" 
                      alt="Ceramic Part" 
                    />
                    <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 bg-white dark:bg-gray-800 p-2 sm:p-4 rounded-lg sm:rounded-xl shadow-xl border border-gray-100 dark:border-gray-700">
                      <Settings className="text-brand animate-spin text-xs sm:text-base" style={{animationDuration: '10s'}} size={16} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights - High Density & Horizontal on Mobile */}
      <section className="py-8 sm:py-16 bg-light dark:bg-gray-900 border-y border-gray-100 dark:border-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
            {[
              { icon: <ShieldCheck size={16} />, label: "Durable", sub: "Wear Resistant" },
              { icon: <Zap size={16} />, label: "High Temp", sub: "1600°C Rated" },
              { icon: <Settings size={16} />, label: "Custom", sub: "Design Build" },
              { icon: <Clock size={16} />, label: "Scaling", sub: "Bulk Supply" }
            ].map((item, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-900 p-3 sm:p-6 rounded-lg border border-gray-100 dark:border-gray-800 flex items-center gap-2 sm:gap-4 group transition-colors  hover:border-brand dark:hover:border-red-500 duration-300">
                <div className="text-brand bg-brand/5 p-2 rounded group-hover:bg-brand group-hover:text-white transition-colors">{item.icon}</div>
                <div>
                  <h4 className="text-[8px] sm:text-[10px] font-black uppercase tracking-widest text-black dark:text-white transition-colors duration-300">{item.label}</h4>
                  <p className="text-[8px] sm:text-[11px] font-medium text-gray-400 leading-none">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products - 2 Columns on Mobile */}
      <section className="py-12 sm:py-20 bg-white dark:bg-black transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-6 sm:mb-10">
            <div className="space-y-1">
              <p className="text-brand font-black uppercase tracking-[0.2em] text-[8px] sm:text-[10px]">Best Sellers</p>
              <h2 className="text-xl sm:text-3xl font-serif font-black text-black dark:text-white transition-colors duration-300">Top Components</h2>
            </div>
            <Link to="/products" className="text-[8px] sm:text-[10px] font-black uppercase tracking-widest text-black dark:text-white flex items-center gap-1 hover:text-brand dark:hover:text-red-500 transition-colors">
              View All <ChevronRight size={12} />
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {bestSellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section - Stacked and Compact */}
      <section id="about" className="py-12 sm:py-20 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 animate-slow-spin">
           <Settings size={600} className="text-brand absolute -right-40 -top-40" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-4 text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl font-serif font-black">Industrial <span className="text-brand">Strength</span></h2>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-sm mx-auto lg:mx-0">
                Specialized in high-alumina parts trusted by India's leading textile and mechanical manufacturers for over 15 years.
              </p>
              <div className="flex justify-center lg:justify-start gap-8 pt-2">
                <div className="border-l border-brand pl-3">
                   <p className="text-xl font-serif font-black">15+</p>
                   <p className="text-[8px] font-black uppercase tracking-widest text-gray-500">Years Exp.</p>
                </div>
                <div className="border-l border-brand pl-3">
                   <p className="text-xl font-serif font-black">500+</p>
                   <p className="text-[8px] font-black uppercase tracking-widest text-gray-500">Clients</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 sm:gap-4 px-4 sm:px-0">
               <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400" className="rounded-xl h-32 sm:h-48 w-full object-cover" alt="Industrial 1" />
               <img src="https://images.unsplash.com/photo-1563911302283-d2bc1d0bd49b?auto=format&fit=crop&q=80&w=400" className="rounded-xl h-32 sm:h-48 w-full object-cover mt-4 sm:mt-8" alt="Industrial 2" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Streamlined for Mobile */}
      {/* Technical Support / Contact */}
      <section id="contact" className="py-12 sm:py-20 bg-white dark:bg-black transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-light dark:bg-gray-900 rounded-[2rem] p-8 sm:p-16 border border-gray-100 dark:border-gray-800 flex flex-col lg:flex-row gap-12 items-center transition-colors duration-300">
            <div className="lg:w-1/2 space-y-6">
              <h2 className="text-3xl sm:text-5xl font-serif font-black text-black dark:text-white transition-colors duration-300">Let's Discuss <br/><span className="text-brand dark:text-red-500">Your Project</span></h2>
              <p className="text-sm text-gray-500 font-medium leading-relaxed max-w-sm">Direct consultation for technical specifications, material selection, and custom blueprints.</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                 <a href={`tel:${CONTACT_DATA.phone}`} className="flex items-center gap-4 p-4 bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 hover:border-brand dark:hover:border-red-500 transition-all shadow-sm">
                    <div className="w-10 h-10 bg-brand/5 text-brand flex items-center justify-center rounded-lg"><Phone size={18} /></div>
                    <div>
                      <p className="text-[7px] font-black text-gray-400 uppercase tracking-widest">Call Technical</p>
                      <p className="text-sm font-bold">{CONTACT_DATA.phone}</p>
                    </div>
                 </a>
                 <a href={`https://wa.me/${CONTACT_DATA.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 hover:border-green-500 dark:hover:border-green-400 transition-all shadow-sm">
                    <div className="w-10 h-10 bg-green-50 text-green-600 flex items-center justify-center rounded-lg"><MessageCircle size={18} /></div>
                    <div>
                      <p className="text-[7px] font-black text-gray-400 uppercase tracking-widest">WhatsApp</p>
                      <p className="text-sm font-bold">{CONTACT_DATA.whatsapp}</p>
                    </div>
                 </a>
              </div>
            </div>

            <div className="lg:w-1/2 w-full space-y-6">
               <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm space-y-4 transition-colors duration-300">
                 <div className="flex items-start gap-4">
                   <MapPin className="text-brand shrink-0" size={20} />
                   <div>
                     <h4 className="text-[10px] font-black uppercase tracking-widest text-black dark:text-white mb-1 transition-colors duration-300">Factory Unit</h4>
                     <p className="text-xs font-bold text-gray-400 leading-snug">{CONTACT_DATA.address}</p>
                   </div>
                 </div>
                 <div className="h-[1px] bg-gray-100 dark:bg-gray-800 transition-colors duration-300"></div>
                 <div className="flex justify-between items-center text-[9px] font-black uppercase tracking-widest text-gray-500">
                    <span>GSTIN: <span className="text-black dark:text-white transition-colors duration-300">{CONTACT_DATA.gstin}</span></span>
                    <span>Admin: <span className="text-black dark:text-white transition-colors duration-300">{OWNER_NAME}</span></span>
                 </div>
               </div>
               <div className="flex gap-3">
                  <a href={CONTACT_DATA.indiaMart} target="_blank" rel="noopener noreferrer" className="flex-1 bg-brand text-white py-4 rounded-xl text-[9px] font-black uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-red-900 transition-all shadow-lg">
                    IndiaMart Store <ExternalLink size={14} />
                  </a>
                  <a href={CONTACT_DATA.facebook} target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-black text-white rounded-xl flex items-center justify-center hover:bg-grey-900 transition-all shadow-lg">
                    <Facebook size={20} />
                  </a>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;