import React from 'react';
import { ShieldCheck, Check, MessageCircle, ArrowRight, Sparkles } from 'lucide-react';
import { InteriorPackage, UserRequirement } from '../types';
import { CITIES, CONFIG_WHATSAPP_NUMBER } from '../data/packagesData';

interface PackageCardProps {
  pkg: InteriorPackage;
  userReq: UserRequirement;
  onViewDetails: (pkg: InteriorPackage) => void;
  onSelectForLead: (pkg: InteriorPackage) => void;
}

export const PackageCard: React.FC<PackageCardProps> = ({ pkg, userReq, onViewDetails, onSelectForLead }) => {
  // Calculate dynamic budget based on area and city multiplier
  const cityObj = CITIES.find(c => c.name === userReq.city) || CITIES[0];
  const calculatedBase = pkg.basePricePerSqFt * userReq.area * cityObj.multiplier;
  
  // Format budget range
  const minBudget = Math.round(calculatedBase * 0.95 / 10000) * 10000;
  const maxBudget = Math.round(calculatedBase * 1.15 / 10000) * 10000;
  
  const formatInr = (num: number) => {
    if (num >= 100000) {
      return `₹${(num / 100000).toFixed(1)}L`;
    }
    return `₹${num.toLocaleString('en-IN')}`;
  };

  const whatsappMessage = `Hi, I am interested in the ${pkg.name} package.
Location: ${userReq.city}
Property: ${userReq.spaceType}
Area: ${userReq.area} Sq. Ft.
Estimated Budget: ${formatInr(minBudget)} – ${formatInr(maxBudget)}
Please share more details and quotation.`;

  const whatsappUrl = `https://wa.me/${CONFIG_WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="bg-white rounded-sm shadow-md border border-[#D1CEC6] overflow-hidden flex flex-col transition-all duration-300 hover:shadow-lg">
      {/* Image Header with Offer Badge */}
      <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-gray-100">
        <img
          src={pkg.images.livingRoom}
          alt={pkg.name}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        
        {/* Offer Badge */}
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center px-3 py-1 rounded-sm text-[10px] font-bold uppercase tracking-widest bg-[#FAF9F7] text-[#1A1A1A] border border-[#D1CEC6] shadow-sm">
            {pkg.badge}
          </span>
        </div>

        {/* City & Specs Tag */}
        <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-md text-white px-3 py-1 rounded-sm text-[10px] font-bold uppercase tracking-widest">
          {userReq.city} • {userReq.spaceType}
        </div>

        {/* Budget Overlay on Image */}
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <p className="text-[11px] uppercase tracking-widest text-amber-200 font-black">Estimated Total Investment</p>
          <div className="flex items-baseline space-x-2">
            <h3 className="font-serif text-2xl sm:text-3xl font-black tracking-tight text-amber-300 drop-shadow-md">
              {formatInr(minBudget)} – {formatInr(maxBudget)}
            </h3>
            <span className="text-xs text-gray-200 line-through font-bold">
              {formatInr(maxBudget * 1.2)}
            </span>
          </div>
        </div>
      </div>

      {/* Body Content */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
        <div className="space-y-4">
          <div>
            <h4 className="font-serif text-xl font-bold text-[#1A1A1A]">{pkg.name}</h4>
            <p className="text-xs text-gray-600 mt-1 italic">{pkg.tagline}</p>
          </div>

          {/* Finish & Warranty */}
          <div className="bg-[#FAF9F7] rounded-sm p-4 border border-[#D1CEC6] space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-gray-500 uppercase tracking-widest text-[10px]">Finish Quality:</span>
              <span className="font-semibold text-[#1A1A1A] text-right text-xs">{pkg.finishQuality}</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-gray-500 uppercase tracking-widest text-[10px]">Warranty:</span>
              <span className="font-semibold text-[#8C7355] flex items-center space-x-1 text-xs">
                <ShieldCheck className="w-3.5 h-3.5 inline" />
                <span>{pkg.warranty}</span>
              </span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3 pt-3 border-t border-[#D1CEC6]">
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => onViewDetails(pkg)}
              className="w-full bg-[#FAF9F7] hover:bg-gray-100 text-[#1A1A1A] font-bold py-3 px-4 rounded-sm border border-[#D1CEC6] text-xs uppercase tracking-wider transition-all flex items-center justify-center space-x-1"
            >
              <span>View Specs</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold py-3 px-4 rounded-sm text-xs uppercase tracking-wider transition-all flex items-center justify-center space-x-1"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp</span>
            </a>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-[#1A1A1A] hover:bg-gray-900 text-amber-300 font-black uppercase tracking-wider text-xs py-3.5 px-4 rounded-xl border-2 border-amber-400/80 hover:border-amber-400 transition-all text-center shadow-lg flex items-center justify-center space-x-2"
          >
            <MessageCircle className="w-4 h-4 fill-amber-300 shrink-0" />
            <span className="tracking-tight font-black">BOOK PACKAGE & REQUEST EXPERT CALLBACK</span>
          </a>
        </div>
      </div>
    </div>
  );
};
