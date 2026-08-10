import React, { useState } from 'react';
import { Sofa, UtensilsCrossed, BedDouble, Bath, Sparkles, ArrowRight } from 'lucide-react';
import { InteriorPackage, UserRequirement } from '../types';

interface RoomVisualsSectionProps {
  activePackage: InteriorPackage;
  userReq: UserRequirement;
}

export const RoomVisualsSection: React.FC<RoomVisualsSectionProps> = ({ activePackage, userReq }) => {
  const [activeTab, setActiveTab] = useState<'livingRoom' | 'kitchen' | 'masterBedroom' | 'bedroom2' | 'bathroom'>('livingRoom');

  const roomData = {
    livingRoom: {
      title: "🛋️ HALL / LIVING ROOM",
      subtitle: "The heart of your home, designed for timeless conversations and grand entertainment.",
      image: activePackage.images.livingRoom,
      features: [
        "Premium TV Entertainment Wall",
        "Designer False Ceiling with Cove Lighting",
        "Fluted Wood / Acrylic Wall Paneling",
        "Ambient Warm LED Profiles",
        "Modern Space-Optimized Layout"
      ]
    },
    kitchen: {
      title: "🍳 MODULAR KITCHEN",
      subtitle: "Ergonomic, spill-proof and moisture-resistant gourmet cooking spaces.",
      image: activePackage.images.kitchen,
      features: [
        "BWP / BWR Grade Modular Cabinets",
        "Quartz or Granite Countertop",
        "Soft-close Tandem Drawers & Cutlery Trays",
        "Under-cabinet LED Strip Lighting",
        "Tall Pantry Unit for Maximum Storage"
      ]
    },
    masterBedroom: {
      title: "🛏️ MASTER BEDROOM",
      subtitle: "A private luxurious sanctuary designed for ultimate restful sleep.",
      image: activePackage.images.masterBedroom,
      features: [
        "Custom Upholstered Bed Backdrop",
        "Floor-to-Ceiling Wardrobe with Loft",
        "Bedside Floating Tables with Sconces",
        "Dresser Unit with Integrated Mirror & Storage",
        "Soft Warm False Ceiling Lighting"
      ]
    },
    bedroom2: {
      title: "🛏️ BEDROOM 2 / KIDS ROOM",
      subtitle: "Versatile, smart and cheerful rooms optimized for family or guests.",
      image: activePackage.images.bedroom2,
      features: [
        "Hinged or Sliding Wardrobe",
        "Study / Work Desk Integration",
        "Cozy Single or Queen Bed Setup",
        "Durable Scratch-resistant Laminates",
        "Ample Natural Lighting Accents"
      ]
    },
    bathroom: {
      title: "🚿 BATHROOM & VANITY",
      subtitle: "Spa-grade modern wet rooms with anti-skid tiles and sleek fixtures.",
      image: activePackage.images.bathroom,
      features: [
        "Designer Vanity with LED Mirror",
        "Anti-skid Vitrified Floor Tiles",
        "Glass Partition Shower Area",
        "Concealed Diverters & Premium Faucets",
        "Waterproof Cabinetry & Storage"
      ]
    }
  };

  const currentRoom = roomData[activeTab];

  return (
    <section className="py-20 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center space-x-2 bg-rose-50 text-rose-700 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-rose-100">
            <Sparkles className="w-3.5 h-3.5 text-rose-600" />
            <span>Room-Wise 3D Visualizer</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
            See What Your Home Can Look Like
          </h2>
          <p className="text-base text-gray-600">
            Images dynamically adapt to your chosen package (<span className="font-bold text-rose-600">{activePackage.name}</span>) and {userReq.city} design standards.
          </p>
        </div>

        {/* Room Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          <button
            onClick={() => setActiveTab('livingRoom')}
            className={`flex items-center space-x-2 px-5 py-3 rounded-2xl font-bold text-sm transition-all shadow-xs ${
              activeTab === 'livingRoom'
                ? 'bg-rose-600 text-white shadow-md scale-105'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            <Sofa className="w-4 h-4" />
            <span>Living Room</span>
          </button>

          <button
            onClick={() => setActiveTab('kitchen')}
            className={`flex items-center space-x-2 px-5 py-3 rounded-2xl font-bold text-sm transition-all shadow-xs ${
              activeTab === 'kitchen'
                ? 'bg-rose-600 text-white shadow-md scale-105'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            <UtensilsCrossed className="w-4 h-4" />
            <span>Kitchen</span>
          </button>

          <button
            onClick={() => setActiveTab('masterBedroom')}
            className={`flex items-center space-x-2 px-5 py-3 rounded-2xl font-bold text-sm transition-all shadow-xs ${
              activeTab === 'masterBedroom'
                ? 'bg-rose-600 text-white shadow-md scale-105'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            <BedDouble className="w-4 h-4" />
            <span>Master Bedroom</span>
          </button>

          <button
            onClick={() => setActiveTab('bedroom2')}
            className={`flex items-center space-x-2 px-5 py-3 rounded-2xl font-bold text-sm transition-all shadow-xs ${
              activeTab === 'bedroom2'
                ? 'bg-rose-600 text-white shadow-md scale-105'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            <BedDouble className="w-4 h-4" />
            <span>Bedroom 2</span>
          </button>

          <button
            onClick={() => setActiveTab('bathroom')}
            className={`flex items-center space-x-2 px-5 py-3 rounded-2xl font-bold text-sm transition-all shadow-xs ${
              activeTab === 'bathroom'
                ? 'bg-rose-600 text-white shadow-md scale-105'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            <Bath className="w-4 h-4" />
            <span>Bathroom</span>
          </button>
        </div>

        {/* Room Display Card */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
          
          {/* Room Image */}
          <div className="lg:col-span-7 relative min-h-[350px] sm:min-h-[450px] overflow-hidden bg-gray-900">
            <img
              src={currentRoom.image}
              alt={currentRoom.title}
              className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="bg-rose-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                {activePackage.name} Standard
              </span>
              <h3 className="text-2xl sm:text-3xl font-black mt-2">{currentRoom.title}</h3>
            </div>
          </div>

          {/* Room Details & Inclusions */}
          <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <h4 className="text-2xl font-extrabold text-gray-900">{currentRoom.title}</h4>
              <p className="text-sm text-gray-600 leading-relaxed">{currentRoom.subtitle}</p>

              <div className="pt-2">
                <p className="text-xs font-bold text-gray-700 uppercase tracking-wider mb-3">Included Design Highlights:</p>
                <ul className="space-y-3">
                  {currentRoom.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center space-x-3 text-sm text-gray-800 font-medium">
                      <div className="w-2 h-2 rounded-full bg-rose-600 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-100">
              <div className="bg-amber-50 rounded-2xl p-4 border border-amber-200/60 text-xs text-amber-900 font-medium">
                💡 <span className="font-bold">Pro Tip for {userReq.city}:</span> Designed to withstand regional climate factors with termite-proof and moisture-sealed edge banding.
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
