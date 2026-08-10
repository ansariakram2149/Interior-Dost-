import React from 'react';
import { MessageCircle, PhoneCall } from 'lucide-react';
import { CONFIG_WHATSAPP_NUMBER } from '../data/packagesData';

interface StickyWhatsAppButtonProps {
  selectedCity: string;
}

export const StickyWhatsAppButton: React.FC<StickyWhatsAppButtonProps> = ({ selectedCity }) => {
  const whatsappUrl = `https://wa.me/${CONFIG_WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hi Interior Dost, I am exploring interior design packages in ${selectedCity}. Please help me with a consultation (WhatsApp 7781011979).`
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-emerald-600 hover:bg-emerald-500 text-white p-4 rounded-full shadow-2xl flex items-center space-x-3 transition-all duration-300 hover:scale-105 group border-2 border-white"
        title="Chat on WhatsApp (7781011979)"
      >
        <MessageCircle className="w-7 h-7 fill-white animate-bounce" />
        <div className="text-left hidden sm:block">
          <p className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-100">Interior Dost</p>
          <p className="text-xs font-black">7781011979</p>
        </div>
      </a>
    </div>
  );
};

