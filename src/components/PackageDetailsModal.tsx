import React from 'react';
import { X, ShieldCheck, Check, MessageCircle, Sparkles, Building, Layers, Wrench } from 'lucide-react';
import { InteriorPackage, UserRequirement } from '../types';
import { CITIES, CONFIG_WHATSAPP_NUMBER } from '../data/packagesData';

interface PackageDetailsModalProps {
  pkg: InteriorPackage | null;
  userReq: UserRequirement;
  onClose: () => void;
  onSelectForLead: (pkg: InteriorPackage) => void;
}

export const PackageDetailsModal: React.FC<PackageDetailsModalProps> = ({ pkg, userReq, onClose, onSelectForLead }) => {
  if (!pkg) return null;

  const cityObj = CITIES.find(c => c.name === userReq.city) || CITIES[0];
  const calculatedBase = pkg.basePricePerSqFt * userReq.area * cityObj.multiplier;
  const minBudget = Math.round(calculatedBase * 0.95 / 10000) * 10000;
  const maxBudget = Math.round(calculatedBase * 1.15 / 10000) * 10000;

  const formatInr = (num: number) => {
    if (num >= 100000) {
      return `₹${(num / 100000).toFixed(1)} Lakhs`;
    }
    return `₹${num.toLocaleString('en-IN')}`;
  };

  const whatsappMessage = `Hi, I reviewed the detailed ${pkg.name} package.
Location: ${userReq.city}
Property: ${userReq.spaceType}
Area: ${userReq.area} Sq. Ft.
Estimated Budget: ${formatInr(minBudget)} – ${formatInr(maxBudget)}
Please share the detailed scope and arrange a callback.`;

  const whatsappUrl = `https://wa.me/${CONFIG_WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6">
      <div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative animate-in fade-in zoom-in-95 duration-200">
        
        {/* Sticky Header */}
        <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-gray-100 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${pkg.badgeColor}`}>
              {pkg.badge}
            </span>
            <h3 className="text-xl font-black text-gray-900">{pkg.name} - Detailed Specification</h3>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-700 transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-8">
          
          {/* Overview Banner */}
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-6 sm:p-8 text-white shadow-lg grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-2 space-y-3">
              <span className="text-xs uppercase tracking-widest text-rose-400 font-bold">Package Overview</span>
              <h2 className="text-2xl sm:text-3xl font-black">{pkg.name}</h2>
              <p className="text-sm text-gray-300">{pkg.description}</p>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="bg-white/10 px-3 py-1 rounded-lg text-xs font-medium">Suitable for {userReq.spaceType}</span>
                <span className="bg-white/10 px-3 py-1 rounded-lg text-xs font-medium">Area: {userReq.area} Sq. Ft.</span>
                <span className="bg-white/10 px-3 py-1 rounded-lg text-xs font-medium">Finish: {pkg.finishQuality}</span>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/10 text-center space-y-1">
              <p className="text-xs text-rose-300 font-bold uppercase tracking-wider">Estimated Total Budget</p>
              <div className="text-2xl sm:text-3xl font-black text-white">
                {formatInr(minBudget)} – {formatInr(maxBudget)}
              </div>
              <p className="text-[11px] text-gray-300">{userReq.city} Pricing ({userReq.area} sq.ft.)</p>
            </div>
          </div>

          {/* Material Highlights & Warranty */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-rose-50/50 rounded-2xl p-6 border border-rose-100 space-y-3">
              <div className="flex items-center space-x-2 text-rose-700 font-bold">
                <Layers className="w-5 h-5" />
                <h4>Material Highlights</h4>
              </div>
              <ul className="space-y-2">
                {pkg.materialHighlights.map((mat, i) => (
                  <li key={i} className="flex items-center space-x-2 text-xs sm:text-sm text-gray-800 font-medium">
                    <Check className="w-4 h-4 text-rose-600 shrink-0" />
                    <span>{mat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-emerald-50/50 rounded-2xl p-6 border border-emerald-100 space-y-3">
              <div className="flex items-center space-x-2 text-emerald-700 font-bold">
                <ShieldCheck className="w-5 h-5" />
                <h4>Warranty & Assurance</h4>
              </div>
              <p className="text-sm font-bold text-gray-900">{pkg.warranty}</p>
              <p className="text-xs text-gray-600 leading-relaxed">
                Covers manufacturing defects, hardware breakdown, termite protection on plywood, and hinge alignment.
              </p>
            </div>
          </div>

          {/* Room-by-Room Breakdown */}
          <div className="space-y-6">
            <h4 className="text-xl font-extrabold text-gray-900 flex items-center space-x-2">
              <Building className="w-5 h-5 text-rose-600" />
              <span>Room-by-Room Inclusions & Visuals</span>
            </h4>

            {/* Living Room */}
            <div className="bg-gray-50 rounded-3xl p-6 border border-gray-200 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div className="rounded-2xl overflow-hidden h-48 shadow-sm">
                <img src={pkg.images.livingRoom} alt="Living Room" className="w-full h-full object-cover" />
              </div>
              <div className="space-y-3">
                <h5 className="text-lg font-bold text-gray-900">🛋️ Hall / Living Room</h5>
                <p className="text-xs text-gray-600">TV entertainment unit, false ceiling with cove lighting, fluted wall panels, wall painting, and switchboards.</p>
                <div className="flex flex-wrap gap-1.5">
                  <span className="bg-white px-2.5 py-1 rounded-md text-xs font-semibold text-gray-700 border border-gray-200">TV Unit</span>
                  <span className="bg-white px-2.5 py-1 rounded-md text-xs font-semibold text-gray-700 border border-gray-200">False Ceiling</span>
                  <span className="bg-white px-2.5 py-1 rounded-md text-xs font-semibold text-gray-700 border border-gray-200">Wall Paneling</span>
                </div>
              </div>
            </div>

            {/* Modular Kitchen */}
            <div className="bg-gray-50 rounded-3xl p-6 border border-gray-200 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div className="rounded-2xl overflow-hidden h-48 shadow-sm">
                <img src={pkg.images.kitchen} alt="Modular Kitchen" className="w-full h-full object-cover" />
              </div>
              <div className="space-y-3">
                <h5 className="text-lg font-bold text-gray-900">🍳 Modular Kitchen</h5>
                <p className="text-xs text-gray-600">BWP plywood carcases, soft-close tandem drawers, quartz/granite countertop, cutlery tray, and under-cabinet lights.</p>
                <div className="flex flex-wrap gap-1.5">
                  <span className="bg-white px-2.5 py-1 rounded-md text-xs font-semibold text-gray-700 border border-gray-200">BWP Cabinets</span>
                  <span className="bg-white px-2.5 py-1 rounded-md text-xs font-semibold text-gray-700 border border-gray-200">Soft-close Hardware</span>
                  <span className="bg-white px-2.5 py-1 rounded-md text-xs font-semibold text-gray-700 border border-gray-200">Quartz Top</span>
                </div>
              </div>
            </div>

            {/* Master Bedroom */}
            <div className="bg-gray-50 rounded-3xl p-6 border border-gray-200 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div className="rounded-2xl overflow-hidden h-48 shadow-sm">
                <img src={pkg.images.masterBedroom} alt="Master Bedroom" className="w-full h-full object-cover" />
              </div>
              <div className="space-y-3">
                <h5 className="text-lg font-bold text-gray-900">🛏️ Master Bedroom</h5>
                <p className="text-xs text-gray-600">Floor-to-ceiling wardrobe with loft, upholstered bed backdrop, bedside tables, and mood lighting.</p>
                <div className="flex flex-wrap gap-1.5">
                  <span className="bg-white px-2.5 py-1 rounded-md text-xs font-semibold text-gray-700 border border-gray-200">Wardrobe + Loft</span>
                  <span className="bg-white px-2.5 py-1 rounded-md text-xs font-semibold text-gray-700 border border-gray-200">Bed Backdrop</span>
                  <span className="bg-white px-2.5 py-1 rounded-md text-xs font-semibold text-gray-700 border border-gray-200">Bedside Tables</span>
                </div>
              </div>
            </div>

            {/* Bathroom */}
            <div className="bg-gray-50 rounded-3xl p-6 border border-gray-200 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div className="rounded-2xl overflow-hidden h-48 shadow-sm">
                <img src={pkg.images.bathroom} alt="Bathroom" className="w-full h-full object-cover" />
              </div>
              <div className="space-y-3">
                <h5 className="text-lg font-bold text-gray-900">🚿 Bathroom & Vanity</h5>
                <p className="text-xs text-gray-600">Designer vanity unit with LED mirror, anti-skid floor tiles, and premium concealed fixtures.</p>
                <div className="flex flex-wrap gap-1.5">
                  <span className="bg-white px-2.5 py-1 rounded-md text-xs font-semibold text-gray-700 border border-gray-200">Vanity Unit</span>
                  <span className="bg-white px-2.5 py-1 rounded-md text-xs font-semibold text-gray-700 border border-gray-200">LED Mirror</span>
                  <span className="bg-white px-2.5 py-1 rounded-md text-xs font-semibold text-gray-700 border border-gray-200">Anti-skid Tiles</span>
                </div>
              </div>
            </div>
          </div>

          {/* Other Works Included */}
          <div className="bg-rose-50/40 rounded-3xl p-6 border border-rose-100 space-y-4">
            <h4 className="text-lg font-extrabold text-gray-900 flex items-center space-x-2">
              <Wrench className="w-5 h-5 text-rose-600" />
              <span>Other Turnkey Works Included</span>
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                "False Ceiling & COB", "Electrical Wiring", "Lighting & Fixtures", "Painting & Wall Finish",
                "Carpentry & Hardware", "Professional Installation", "Site Supervision", "Post-Handover Cleanup"
              ].map((work, idx) => (
                <div key={idx} className="bg-white p-3 rounded-xl border border-rose-100 text-xs font-bold text-gray-800 flex items-center space-x-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{work}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-4 flex flex-col sm:flex-row gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-6 rounded-2xl shadow-lg transition-all flex items-center justify-center space-x-2 text-base"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>Get This Package on WhatsApp</span>
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-gradient-to-r from-rose-600 to-amber-600 hover:from-rose-700 hover:to-amber-700 text-white font-bold py-4 px-6 rounded-2xl shadow-lg transition-all flex items-center justify-center space-x-2 text-base"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>Request Expert Callback</span>
            </a>
          </div>

        </div>

      </div>
    </div>
  );
};
