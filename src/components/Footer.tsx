import React from 'react';
import { Building2, Phone, MessageCircle, Sparkles, ShieldCheck } from 'lucide-react';
import { CONFIG_WHATSAPP_NUMBER } from '../data/packagesData';

interface FooterProps {
  onOpenExpertModal: () => void;
  selectedCity: string;
}

export const Footer: React.FC<FooterProps> = ({ onOpenExpertModal, selectedCity }) => {
  const whatsappUrl = `https://wa.me/${CONFIG_WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hi Interior Dost, I need help choosing the right interior package for my home in ${selectedCity}.`
  )}`;

  return (
    <footer className="bg-gray-900 text-white pt-20 pb-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Final CTA Banner */}
        <div className="bg-[#E23744] rounded-3xl p-8 sm:p-12 text-center shadow-2xl space-y-6">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
            Not Sure Which Package Is Right For You?
          </h2>
          <p className="text-base sm:text-lg text-rose-100 max-w-2xl mx-auto leading-relaxed">
            Get personalized interior guidance from our expert interior architects in {selectedCity} via WhatsApp (7781011979). Free 3D consultation.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-gray-100 text-gray-900 font-extrabold py-4 px-8 rounded-2xl shadow-lg transition-all hover:scale-105 text-sm sm:text-base flex items-center space-x-2"
            >
              <MessageCircle className="w-5 h-5 text-[#E23744] fill-[#E23744]" />
              <span>Talk to an Expert on WhatsApp</span>
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold py-4 px-8 rounded-2xl shadow-lg transition-all hover:scale-105 text-sm sm:text-base flex items-center space-x-2"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>WhatsApp Us (7781011979)</span>
            </a>
          </div>
        </div>

        {/* Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pt-10 border-t border-gray-800 text-xs">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-[#E23744] flex items-center justify-center text-white font-black italic text-lg shadow-md">
                ID
              </div>
              <span className="text-xl font-extrabold tracking-tight text-white">Interior<span className="text-[#E23744]">Dost</span></span>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              India's #1 Zomato-style interior design discovery and budget calculation platform. Transparent pricing, expert execution.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">Top Cities</h4>
            <ul className="space-y-2.5 text-xs text-gray-300">
              <li>Ranchi & Jamshedpur</li>
              <li>Patna & Bihar</li>
              <li>Delhi NCR & Gurgaon</li>
              <li>Mumbai & Pune</li>
              <li>Bangalore & Hyderabad</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">Interior Packages</h4>
            <ul className="space-y-2.5 text-xs text-gray-300">
              <li>Smart Interior (Budget-friendly)</li>
              <li>Premium Interior (Acrylic & Fluted)</li>
              <li>Luxury Interior (PU & Veneer)</li>
              <li>Modular Kitchens & Wardrobes</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">Trust & Safety</h4>
            <ul className="space-y-2.5 text-xs text-gray-300">
              <li className="flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>10-Year Manufacturer Warranty</span>
              </li>
              <li>BWP Grade Termite-Proof Plywood</li>
              <li>WhatsApp Hotline: 7781011979</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-800 text-center text-xs text-gray-500 flex flex-col sm:flex-row items-center justify-between">
          <p>© {new Date().getFullYear()} Interior Dost Technologies India Pvt. Ltd. All rights reserved.</p>
          <p className="mt-2 sm:mt-0 text-rose-400 font-bold">WhatsApp: 7781011979</p>
        </div>

      </div>
    </footer>
  );
};
