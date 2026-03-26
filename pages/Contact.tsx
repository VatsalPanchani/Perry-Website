import React, { useState } from 'react';
import { Phone, Mail, MapPin, Upload, Building2, User, FileText, Send, MessageSquare, Globe } from 'lucide-react';
import { CONTACT_DATA } from '../constants';

const Contact: React.FC = () => {
  const [fileName, setFileName] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    } else {
      setFileName(null);
    }
  };

  return (
    <div className="bg-white dark:bg-black min-h-screen pt-20 pb-16 sm:pb-20 transition-colors duration-300">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
        <div className="bg-[#700000] py-12 sm:py-16 px-6 sm:px-8 rounded-2xl relative overflow-hidden flex flex-col items-center text-center">
          <div className="absolute top-0 right-0 p-8 text-brand opacity-5">
             <MessageSquare size={120} fill="currentColor" />
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-black text-white mb-4 uppercase tracking-tight">Contact   Us</h1>
          <p className="text-gray-100 max-w-2xl text-sm sm:text-base font-medium">
            Tell us your requirement and we will manufacture the right ceramic part for you.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          
          {/* Contact Form */}
          <div className="lg:col-span-2 bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 sm:p-10 border border-gray-100 dark:border-gray-800 shadow-sm">
            <h2 className="text-2xl font-serif font-black text-black dark:text-white mb-8">Send an Enquiry</h2>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 flex items-center gap-2">
                    <User size={14} /> Full Name
                  </label>
                  <input 
                    type="text" 
                    placeholder="Your Name"
                    className="w-full bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-3 text-sm text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all"
                    required
                  />
                </div>

                {/* Company Name */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 flex items-center gap-2">
                    <Building2 size={14} /> Company Name
                  </label>
                  <input 
                    type="text" 
                    placeholder="Your Company Name"
                    className="w-full bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-3 text-sm text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Contact Number */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 flex items-center gap-2">
                    <Phone size={14} /> Contact Number
                  </label>
                  <div className="flex">
                    <select className="bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-800 border-r-0 rounded-l-xl px-3 py-3 text-sm text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all outline-none">
                      <option value="+91">+91 (IN)</option>
                      <option value="+1">+1 (US)</option>
                      <option value="+44">+44 (UK)</option>
                      <option value="+61">+61 (AU)</option>
                      <option value="+971">+971 (AE)</option>
                    </select>
                    <input 
                      type="tel" 
                      placeholder="9426636910"
                      className="w-full bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-r-xl px-4 py-3 text-sm text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all"
                      required
                    />
                  </div>
                </div>

                {/* City & State */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 flex items-center gap-2">
                    <Globe size={14} /> City & State
                  </label>
                  <input 
                    type="text" 
                    placeholder="Rajkot, Gujarat"
                    className="w-full bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-3 text-sm text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all"
                    required
                  />
                </div>
              </div>

              {/* File Upload */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 flex items-center gap-2">
                  <Upload size={14} /> Upload Drawing / Image
                </label>
                <div className="relative border-2 border-dashed border-gray-200 dark:border-gray-800 rounded-xl p-6 hover:border-brand dark:hover:border-brand transition-colors bg-white dark:bg-black text-center group cursor-pointer">
                  <input 
                    type="file" 
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={handleFileChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                  />
                  <div className="flex flex-col items-center justify-center space-y-2 pointer-events-none">
                    <div className="w-10 h-10 bg-gray-50 dark:bg-gray-900 rounded-full flex items-center justify-center text-gray-400 group-hover:text-brand transition-colors">
                      <FileText size={20} />
                    </div>
                    {fileName ? (
                      <p className="text-sm font-medium text-brand">{fileName}</p>
                    ) : (
                      <>
                        <p className="text-sm font-medium text-black dark:text-white">Click to upload or drag and drop</p>
                        <p className="text-xs text-gray-500">PDF, JPG, PNG (Max. 10MB)</p>
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* Requirements */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 flex items-center gap-2">
                  <FileText size={14} /> Requirement Details
                </label>
                <textarea 
                  rows={4}
                  placeholder="Please describe your requirements, dimensions, material preferences, and expected quantity..."
                  className="w-full bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-3 text-sm text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all resize-none"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button 
                type="submit"
                className="w-full bg-[#890101] hover:bg-red-900 text-white font-black uppercase tracking-[0.1em] text-xs py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-xl active:scale-[0.98]"
              >
                Submit Enquiry <Send size={16} />
              </button>
            </form>
          </div>

          {/* Contact Details */}
          <div className="space-y-6">
            <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 sm:p-8 border border-gray-100 dark:border-gray-800 shadow-sm">
              <h3 className="text-lg font-serif font-black text-black dark:text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white dark:bg-black rounded-lg flex items-center justify-center text-brand shrink-0 shadow-sm border border-gray-100 dark:border-gray-800">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-1">Phone</p>
                    <a href={`tel:+91${CONTACT_DATA.phone}`} className="text-sm font-bold text-black dark:text-white hover:text-brand transition-colors block">+91 {CONTACT_DATA.phone}</a>
                    <a href={`https://wa.me/91${CONTACT_DATA.whatsapp}`} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-green-600 dark:text-green-500 hover:text-green-700 transition-colors block mt-1">WhatsApp: +91 {CONTACT_DATA.whatsapp}</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white dark:bg-black rounded-lg flex items-center justify-center text-brand shrink-0 shadow-sm border border-gray-100 dark:border-gray-800">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-1">Email</p>
                    <a href={`mailto:${CONTACT_DATA.email}`} className="text-sm font-bold text-black dark:text-white hover:text-brand transition-colors">{CONTACT_DATA.email}</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white dark:bg-black rounded-lg flex items-center justify-center text-brand shrink-0 shadow-sm border border-gray-100 dark:border-gray-800">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-1">Address</p>
                    <p className="text-sm font-medium text-black dark:text-white leading-relaxed">{CONTACT_DATA.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white dark:bg-black rounded-lg flex items-center justify-center text-brand shrink-0 shadow-sm border border-gray-100 dark:border-gray-800">
                    <FileText size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-1">GSTIN</p>
                    <p className="text-sm font-bold text-black dark:text-white">{CONTACT_DATA.gstin}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 sm:p-8 border border-gray-100 dark:border-gray-800 shadow-sm">
              <h3 className="text-lg font-serif font-black text-black dark:text-white mb-6">Connect With Us</h3>
              <div className="flex flex-col gap-3">
                <a 
                  href={CONTACT_DATA.indiaMart} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white dark:bg-black border border-gray-200 dark:border-gray-800 px-4 py-3 rounded-xl flex items-center justify-between group hover:border-brand dark:hover:border-brand transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="text-brand font-black text-sm">IM</div>
                    <span className="text-sm font-bold text-black dark:text-white">IndiaMart Store</span>
                  </div>
                  <Globe size={16} className="text-gray-400 group-hover:text-brand transition-colors" />
                </a>
                <a 
                  href={CONTACT_DATA.facebook} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#1877F2] text-white px-4 py-3 rounded-xl flex items-center justify-between group hover:bg-[#166FE5] transition-all"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-sm">Facebook Page</span>
                  </div>
                  <Globe size={16} className="text-white/70 group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
