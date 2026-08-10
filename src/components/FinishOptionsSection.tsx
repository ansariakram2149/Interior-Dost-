import React from 'react';
import { Sparkles, Check } from 'lucide-react';
import { FINISH_OPTIONS } from '../data/packagesData';

interface FinishOptionsSectionProps {
  onSelectFinish: (finishId: string) => void;
}

export const FinishOptionsSection: React.FC<FinishOptionsSectionProps> = ({ onSelectFinish }) => {
  return (
    <section className="py-20 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 bg-rose-50 text-rose-700 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-rose-100">
            <Sparkles className="w-3.5 h-3.5 text-rose-600" />
            <span>Material Craftsmanship</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
            Choose Your Finish
          </h2>
          <p className="text-base text-gray-600">
            Select from our curated surface finishes designed to match your lifestyle and aesthetic vision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FINISH_OPTIONS.map((finish) => (
            <div
              key={finish.id}
              className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="relative h-60 w-full overflow-hidden bg-gray-100">
                <img
                  src={finish.image}
                  alt={finish.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-xs font-bold uppercase tracking-wider text-rose-300">{finish.subtitle}</span>
                  <h3 className="text-xl font-black">{finish.title}</h3>
                </div>
              </div>

              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
                <p className="text-sm text-gray-600 leading-relaxed">{finish.description}</p>

                <div className="space-y-2">
                  <p className="text-xs font-bold text-gray-700 uppercase tracking-wider">Key Highlights:</p>
                  <ul className="space-y-2">
                    {finish.features.map((feat, i) => (
                      <li key={i} className="flex items-center space-x-2 text-xs sm:text-sm text-gray-800 font-medium">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => onSelectFinish(finish.id)}
                  className="w-full bg-gray-900 hover:bg-gray-800 text-white font-bold py-3.5 px-4 rounded-xl shadow-xs transition-all text-sm"
                >
                  View Designs with this Finish
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
