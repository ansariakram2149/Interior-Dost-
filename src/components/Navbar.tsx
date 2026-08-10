import React from 'react';
import { MapPin, MessageCircle, Sparkles, PhoneCall } from 'lucide-react';
import { CONFIG_WHATSAPP_NUMBER } from '../data/packagesData';

interface NavbarProps {
  selectedCity: string;
  onOpenExpertModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ selectedCity, onOpenExpertModal }) => {
  const whatsappUrl = `https://wa.me/${CONFIG_WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hi Interior Dost team, I am looking for interior design packages in ${selectedCity}. Please guide me.`
  )}`;

  return (
    <header className="sticky top-0 z-50 bg-gray-950/95 backdrop-blur-xl border-b border-gray-800 shadow-2xl transition-all">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-2">
        {/* Brand Logo & City Badge */}
        <div className="flex items-center space-x-2.5 sm:space-x-3.5">
          <div className="w-9 h-9 sm:w-11 sm:h-11 bg-gradient-to-tr from-amber-400 via-orange-500 to-red-500 flex items-center justify-center rounded-xl shadow-lg text-gray-950 shrink-0">
            <span className="font-black italic text-base sm:text-xl tracking-tighter">ID</span>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center space-x-1.5">
              <span className="text-lg sm:text-2xl font-black tracking-tight text-white">
                Interior<span className="text-amber-400">Dost</span>
              </span>
              <span className="inline-flex items-center space-x-1 bg-emerald-500/20 text-emerald-400 text-[9px] sm:text-[10px] font-black px-2 py-0.5 rounded-full border border-emerald-500/30">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                <span>LIVE</span>
              </span>
            </div>
            <p className="text-[11px] font-medium text-gray-400 flex items-center space-x-1 truncate max-w-[170px] sm:max-w-xs">
              <MapPin className="w-3 h-3 text-amber-400 shrink-0 inline" />
              <span className="truncate">{selectedCity} & Nearby Cities</span>
            </p>
          </div>
        </div>

        {/* Right Actions - Mobile Friendly */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          {/* Mobile WhatsApp Quick Icon */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1.5 bg-[#25D366] hover:bg-[#20ba59] text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider px-2.5 sm:px-4 py-2 sm:py-2.5 rounded-xl shadow-md transition-all hover:scale-105"
            title="Chat on WhatsApp"
          >
            <MessageCircle className="w-4 h-4 fill-white shrink-0" />
            <span className="hidden md:inline">WhatsApp (7781011979)</span>
          </a>

          {/* Primary Action Button */}
          <button
            onClick={onOpenExpertModal}
            className="inline-flex items-center space-x-1.5 bg-gradient-to-r from-red-600 via-rose-600 to-amber-500 hover:from-red-500 hover:to-amber-400 text-white text-[11px] sm:text-xs font-black uppercase tracking-wider px-3 sm:px-5 py-2 sm:py-2.5 rounded-xl shadow-lg transition-all hover:scale-105 active:scale-95 shrink-0 border border-white/20"
          >
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-200 animate-spin shrink-0" style={{ animationDuration: '4s' }} />
            <span>Get Quote</span>
          </button>
        </div>
      </div>
    </header>
  );
};

