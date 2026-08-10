import React from 'react';
import { Hammer, UtensilsCrossed, DoorClosed, Home, Tv, Sofa, BedDouble, Bath, Palette, Zap, Building, Sparkles } from 'lucide-react';
import { INTERIOR_SERVICES, CONFIG_WHATSAPP_NUMBER } from '../data/packagesData';

interface ServicesMarketplaceSectionProps {
  selectedCity: string;
}

export const ServicesMarketplaceSection: React.FC<ServicesMarketplaceSectionProps> = ({ selectedCity }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Hammer': return <Hammer className="w-5 h-5 text-rose-600" />;
      case 'UtensilsCrossed': return <UtensilsCrossed className="w-5 h-5 text-rose-600" />;
      case 'DoorClosed': return <DoorClosed className="w-5 h-5 text-rose-600" />;
      case 'Home': return <Home className="w-5 h-5 text-rose-600" />;
      case 'Tv': return <Tv className="w-5 h-5 text-rose-600" />;
      case 'Sofa': return <Sofa className="w-5 h-5 text-rose-600" />;
      case 'BedDouble': return <BedDouble className="w-5 h-5 text-rose-600" />;
      case 'Bath': return <Bath className="w-5 h-5 text-rose-600" />;
      case 'Palette': return <Palette className="w-5 h-5 text-rose-600" />;
      case 'Zap': return <Zap className="w-5 h-5 text-rose-600" />;
      default: return <Building className="w-5 h-5 text-rose-600" />;
    }
  };

  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 bg-rose-50 text-rose-700 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-rose-100">
            <Sparkles className="w-3.5 h-3.5 text-rose-600" />
            <span>Marketplace Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
            Explore Interior Services
          </h2>
          <p className="text-base text-gray-600">
            From custom carpentry to complete turnkey home execution in {selectedCity}, we deliver precision craftsmanship.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {INTERIOR_SERVICES.map((service) => {
            const whatsappUrl = `https://wa.me/${CONFIG_WHATSAPP_NUMBER}?text=${encodeURIComponent(
              `Hi, I am interested in booking "${service.title}" services in ${selectedCity}. Please share pricing and expert details.`
            )}`;

            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl shadow-md border border-gray-200/80 overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group"
              >
                <div className="relative h-44 w-full overflow-hidden bg-gray-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md p-2 rounded-xl shadow-xs">
                    {getIcon(service.iconName)}
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-1.5">
                    <h3 className="text-lg font-bold text-gray-900">{service.title}</h3>
                    <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">{service.description}</p>
                  </div>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gray-50 hover:bg-emerald-600 hover:text-white text-gray-800 text-xs font-bold uppercase tracking-wider py-2.5 px-3 rounded-xl border border-gray-200 transition-all text-center block"
                  >
                    Enquire on WhatsApp
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
