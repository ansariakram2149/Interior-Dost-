import React, { useState, useEffect } from 'react';
import { ShieldCheck, Sparkles, MessageCircle, ChevronLeft, ChevronRight, Zap } from 'lucide-react';
import { CITIES, SPACE_TYPES, SPACE_TYPE_DEFAULTS, CONFIG_WHATSAPP_NUMBER } from '../data/packagesData';
import { UserRequirement } from '../types';

interface HeroSectionProps {
  onSearch: (req: UserRequirement) => void;
  onOpenExpertModal: () => void;
  onOpenAiModal: () => void;
}

const HERO_OFFERS = [
  {
    id: 1,
    title: "Interiors Starting at ₹4,95,000",
    subtitle: "Complete 2BHK/3BHK home packages with BWP termite-proof plywood & 10-year warranty",
    badge: "🔥 FLASH DEAL • BEST VALUE",
    accentGlow: "shadow-[0_0_35px_rgba(225,29,72,0.4)] border-rose-500/50",
    badgeBg: "bg-amber-400 text-gray-950 font-black",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    tag: "Budget Champion",
    feature: "BWP Plywood + Free Chimney"
  },
  {
    id: 2,
    title: "Free 3D Design on Same Day Booking",
    subtitle: "Meet senior interior architects and get photorealistic 3D renders before paying",
    badge: "⚡ TODAY'S SPECIAL OFFER",
    accentGlow: "shadow-[0_0_35px_rgba(16,185,129,0.4)] border-emerald-500/50",
    badgeBg: "bg-emerald-400 text-gray-950 font-black",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
    tag: "Live 3D Studio",
    feature: "VR & 3D Walkthrough Included"
  },
  {
    id: 3,
    title: "30% OFF on Machine Finish Design",
    subtitle: "German edge-banding technology & high-gloss acrylic modular kitchens",
    badge: "💎 FESTIVE MEGA SAVINGS",
    accentGlow: "shadow-[0_0_35px_rgba(245,158,11,0.4)] border-amber-500/50",
    badgeBg: "bg-yellow-300 text-gray-950 font-black",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80",
    tag: "Modular Kitchen",
    feature: "Soft-Close Tandem Drawers"
  },
  {
    id: 4,
    title: "Sunday Special - Free Site Visit & 3D Design",
    subtitle: "Book your weekend consultation for free home measurements & space planning",
    badge: "🌟 WEEKEND EXCLUSIVE",
    accentGlow: "shadow-[0_0_35px_rgba(14,165,233,0.4)] border-sky-500/50",
    badgeBg: "bg-sky-400 text-gray-950 font-black",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80",
    tag: "Free Expert Visit",
    feature: "Laser Measurement & Cost Plan"
  }
];

export const HeroSection: React.FC<HeroSectionProps> = ({ onSearch, onOpenExpertModal, onOpenAiModal }) => {
  const [city, setCity] = useState("Ranchi");
  const [spaceType, setSpaceType] = useState("2 BHK");
  const [area, setArea] = useState<number>(1100);
  const [budgetPreference, setBudgetPreference] = useState("Flexible");
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_OFFERS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const whatsappUrl = `https://wa.me/${CONFIG_WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hi Interior Dost team, I want to claim this offer: "${HERO_OFFERS[currentSlide].title}" in ${city}. Please guide me (7781011979).`
  )}`;

  const handleSpaceTypeChange = (newSpaceType: string) => {
    setSpaceType(newSpaceType);
    const defaultArea = SPACE_TYPE_DEFAULTS[newSpaceType];
    if (defaultArea) {
      setArea(defaultArea);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (area < 50 || area > 10000) {
      alert("Please enter a valid area between 50 and 10,000 Sq. Ft.");
      return;
    }
    onSearch({ city, spaceType, area: Number(area) || 1000, budgetPreference });
    
    const pkgEl = document.getElementById("packages-section");
    if (pkgEl) {
      pkgEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const activeOffer = HERO_OFFERS[currentSlide];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-900 via-blue-950 to-gray-900 pt-6 pb-16 lg:pt-10 lg:pb-24 text-white">
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Hero Grid: Offer Slider with Interior Photo vs Calculator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Hero Offer Carousel with HD Interior Image Background */}
          <div className={`lg:col-span-7 rounded-3xl p-5 sm:p-8 shadow-2xl border-2 ${activeOffer.accentGlow} relative overflow-hidden flex flex-col justify-between min-h-[500px] transition-all duration-500 group bg-gray-950`}>
            
            {/* HD Interior Background Image with gradient vignette for max clarity */}
            <div className="absolute inset-0 z-0 overflow-hidden">
              <img
                src={activeOffer.image}
                alt={activeOffer.title}
                className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              {/* Vignette gradients for text readability while preserving image brightness */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/75 to-black/30 z-10"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-gray-950/80 via-transparent to-black/40 z-10"></div>
            </div>

            {/* Top Bar: Brand Header + Offer Badge */}
            <div className="space-y-3 relative z-20">
              {/* Brand Header */}
              <div className="bg-black/60 backdrop-blur-md p-2.5 sm:p-3 rounded-2xl border border-white/20 flex items-center justify-between gap-2 shadow-lg">
                <div className="flex items-center space-x-2.5 min-w-0">
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-amber-400 to-orange-500 text-gray-950 flex items-center justify-center font-black text-xs shadow-md shrink-0">
                    ID
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center space-x-1.5">
                      <span className="text-xs sm:text-sm font-black tracking-tight text-white truncate">Interior Dost</span>
                      <span className="text-[9px] bg-emerald-500 text-white px-2 py-0.5 rounded-full font-black animate-pulse shrink-0">Live Deals</span>
                    </div>
                  </div>
                </div>

                <div className="hidden sm:flex items-center space-x-1 bg-amber-400/20 text-amber-300 text-[10px] font-black px-2.5 py-1 rounded-full border border-amber-400/30 shrink-0">
                  <Zap className="w-3 h-3 fill-amber-300" />
                  <span>{activeOffer.tag}</span>
                </div>
              </div>

              {/* Offer Badge & Dots */}
              <div className="flex items-center justify-between flex-wrap gap-2 pt-1">
                <span className={`inline-flex items-center space-x-1.5 ${activeOffer.badgeBg} text-xs font-black uppercase px-3.5 py-1.5 rounded-full shadow-xl tracking-wide`}>
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{activeOffer.badge}</span>
                </span>
                
                {/* Carousel dots */}
                <div className="flex space-x-2 bg-black/60 px-3 py-1.5 rounded-full backdrop-blur-md border border-white/20 shadow-md">
                  {HERO_OFFERS.map((offer, idx) => (
                    <button
                      key={offer.id}
                      onClick={() => setCurrentSlide(idx)}
                      className={`h-2 rounded-full transition-all ${currentSlide === idx ? 'bg-amber-400 w-6' : 'bg-white/40 w-2'}`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
              
              {/* Offer Title & Subtitle */}
              <div className="space-y-2 pt-2">
                <h1 className="text-2xl sm:text-4xl font-black tracking-tight leading-tight text-white drop-shadow-md">
                  {activeOffer.title}
                </h1>

                <p className="text-xs sm:text-sm text-gray-200 max-w-lg leading-relaxed font-semibold bg-black/60 p-3 rounded-xl border border-white/15 backdrop-blur-sm">
                  {activeOffer.subtitle}
                </p>

                {/* Offer Highlight Tag */}
                <div className="inline-flex items-center space-x-2 bg-emerald-500/20 text-emerald-300 border border-emerald-400/40 px-3 py-1 rounded-lg text-xs font-bold">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>{activeOffer.feature}</span>
                </div>
              </div>
            </div>

            {/* Bottom Controls & Action Button */}
            <div className="mt-6 pt-4 border-t border-white/20 flex flex-wrap items-center justify-between gap-3 relative z-20">
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setCurrentSlide((prev) => (prev - 1 + HERO_OFFERS.length) % HERO_OFFERS.length)}
                  className="w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-md transition-all border border-white/30 shadow-md"
                  aria-label="Previous Offer"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setCurrentSlide((prev) => (prev + 1) % HERO_OFFERS.length)}
                  className="w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-md transition-all border border-white/30 shadow-md"
                  aria-label="Next Offer"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
                <span className="text-[11px] font-bold text-gray-300 bg-black/50 px-2.5 py-1 rounded-lg border border-white/10">
                  {currentSlide + 1} / {HERO_OFFERS.length}
                </span>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#20ba59] text-white font-black text-xs uppercase tracking-wider px-5 py-3 rounded-xl shadow-xl transition-all hover:scale-105 flex items-center space-x-2 border border-emerald-400"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Claim Offer on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Instant Budget Calculator Card */}
          <div className="lg:col-span-5">
            <div className="bg-white text-gray-900 rounded-3xl shadow-2xl border border-gray-100 p-6 sm:p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-rose-500 via-amber-500 to-blue-600"></div>

              <div className="absolute -top-3 right-6 bg-[#E23744] text-white text-[10px] font-black uppercase tracking-widest px-3.5 py-1 rounded-full shadow-md animate-bounce">
                🔥 Instant Price Match + Free Chimney
              </div>

              <div className="flex items-center justify-between mb-4 mt-2">
                <h3 className="text-xl font-black text-gray-900">Instant Budget Matcher</h3>
                <span className="text-[10px] bg-rose-100 text-[#E23744] font-black uppercase px-2.5 py-1 rounded-full">
                  Verified Price
                </span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-[11px] font-extrabold text-gray-600 uppercase tracking-widest mb-1">
                    Select City
                  </label>
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2.5 px-3.5 text-sm font-bold text-gray-900 focus:outline-none focus:border-[#E23744]"
                  >
                    {CITIES.map((c) => (
                      <option key={c.name} value={c.name}>{c.name} ({c.state})</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-extrabold text-gray-600 uppercase tracking-widest mb-1">
                    Space Type
                  </label>
                  <select
                    value={spaceType}
                    onChange={(e) => handleSpaceTypeChange(e.target.value)}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2.5 px-3.5 text-sm font-bold text-gray-900 focus:outline-none focus:border-[#E23744]"
                  >
                    {SPACE_TYPES.map((st) => (
                      <option key={st} value={st}>{st}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label className="block text-[11px] font-extrabold text-gray-600 uppercase tracking-widest">
                      Carpet Area (Sq. Ft.)
                    </label>
                    <span className="text-xs font-black text-[#E23744] bg-rose-50 px-2.5 py-0.5 rounded-md border border-rose-100">
                      {area} Sq. Ft.
                    </span>
                  </div>
                  <input
                    type="number"
                    min={50}
                    max={10000}
                    value={area}
                    onChange={(e) => setArea(Number(e.target.value))}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2.5 px-3.5 text-sm font-bold text-gray-900 focus:outline-none focus:border-[#E23744]"
                  />
                  <input
                    type="range"
                    min={50}
                    max={4000}
                    step={10}
                    value={area}
                    onChange={(e) => setArea(Number(e.target.value))}
                    className="w-full mt-2 accent-[#E23744] cursor-pointer"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-[#E23744] hover:bg-[#c92a36] text-white font-black py-3.5 px-6 rounded-xl shadow-lg transition-all uppercase text-xs tracking-widest hover:scale-[1.02]"
                  >
                    View Packages & Budget Breakdown
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};


