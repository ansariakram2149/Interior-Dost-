import React from 'react';
import { IndianRupee, PieChart, ShieldAlert } from 'lucide-react';
import { InteriorPackage, UserRequirement } from '../types';
import { CITIES } from '../data/packagesData';

interface BudgetBreakdownSectionProps {
  activePackage: InteriorPackage;
  userReq: UserRequirement;
}

export const BudgetBreakdownSection: React.FC<BudgetBreakdownSectionProps> = ({ activePackage, userReq }) => {
  const cityObj = CITIES.find(c => c.name === userReq.city) || CITIES[0];
  const calculatedBase = activePackage.basePricePerSqFt * userReq.area * cityObj.multiplier;
  const totalBudget = Math.round(calculatedBase);

  const breakdown = {
    livingRoom: Math.round(totalBudget * (activePackage.roomBreakdownPercentages.livingRoom / 100)),
    kitchen: Math.round(totalBudget * (activePackage.roomBreakdownPercentages.kitchen / 100)),
    masterBedroom: Math.round(totalBudget * (activePackage.roomBreakdownPercentages.masterBedroom / 100)),
    bedroom2: Math.round(totalBudget * (activePackage.roomBreakdownPercentages.bedroom2 / 100)),
    bathroom: Math.round(totalBudget * (activePackage.roomBreakdownPercentages.bathroom / 100)),
    falseCeilingLighting: Math.round(totalBudget * (activePackage.roomBreakdownPercentages.falseCeilingLighting / 100)),
    otherWorks: Math.round(totalBudget * (activePackage.roomBreakdownPercentages.otherWorks / 100)),
  };

  const formatInr = (num: number) => {
    if (num >= 100000) {
      return `₹${(num / 100000).toFixed(2)}L`;
    }
    return `₹${num.toLocaleString('en-IN')}`;
  };

  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center space-x-2 bg-rose-50 text-rose-700 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-rose-100">
              <PieChart className="w-3.5 h-3.5 text-rose-600" />
              <span>Transparent Cost Engine</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
              Room-Wise Dynamic Budget Breakdown
            </h2>

            <p className="text-base text-gray-600 leading-relaxed">
              Every rupee is accounted for. Values are calculated dynamically based on your selected city (<span className="font-bold text-gray-900">{userReq.city}</span>), property type (<span className="font-bold text-gray-900">{userReq.spaceType}</span>), area (<span className="font-bold text-gray-900">{userReq.area} Sq. Ft.</span>), and package tier (<span className="font-bold text-rose-600">{activePackage.name}</span>).
            </p>

            <div className="bg-amber-50 rounded-2xl p-5 border border-amber-200/60 space-y-2">
              <div className="flex items-start space-x-2 text-amber-900 font-semibold text-xs sm:text-sm">
                <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold">Estimated Budget Disclaimer</p>
                  <p className="text-amber-800 text-xs mt-0.5">
                    Final cost may vary depending on design intricacy, specific material selections, site measurements and custom requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Breakdown Card */}
          <div className="lg:col-span-7">
            <div className="bg-gray-50 rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-xl space-y-6">
              
              <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                <div>
                  <h4 className="text-lg font-black text-gray-900">{activePackage.name} Breakdown</h4>
                  <p className="text-xs text-gray-500">{userReq.city} • {userReq.area} Sq. Ft.</p>
                </div>
                <div className="text-right">
                  <span className="text-xs text-gray-500 uppercase block font-bold">Estimated Total</span>
                  <span className="text-2xl sm:text-3xl font-black text-rose-600">
                    {formatInr(totalBudget)}
                  </span>
                </div>
              </div>

              {/* Items List */}
              <div className="space-y-4">
                {[
                  { label: "Living Room / Hall", amount: breakdown.livingRoom, pct: activePackage.roomBreakdownPercentages.livingRoom },
                  { label: "Modular Kitchen", amount: breakdown.kitchen, pct: activePackage.roomBreakdownPercentages.kitchen },
                  { label: "Master Bedroom", amount: breakdown.masterBedroom, pct: activePackage.roomBreakdownPercentages.masterBedroom },
                  { label: "Bedroom 2 / Kids Room", amount: breakdown.bedroom2, pct: activePackage.roomBreakdownPercentages.bedroom2 },
                  { label: "Bathroom & Vanity", amount: breakdown.bathroom, pct: activePackage.roomBreakdownPercentages.bathroom },
                  { label: "False Ceiling & Lighting", amount: breakdown.falseCeilingLighting, pct: activePackage.roomBreakdownPercentages.falseCeilingLighting },
                  { label: "Other Works & Installation", amount: breakdown.otherWorks, pct: activePackage.roomBreakdownPercentages.otherWorks },
                ].map((item, idx) => (
                  <div key={idx} className="space-y-1.5">
                    <div className="flex justify-between text-sm font-semibold text-gray-800">
                      <span>{item.label}</span>
                      <span className="font-bold text-gray-900">{formatInr(item.amount)}</span>
                    </div>
                    {/* Progress Bar */}
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-rose-600 to-amber-500 rounded-full"
                        style={{ width: `${item.pct * 2.5}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-gray-200 flex items-center justify-between text-xs text-gray-500">
                <span>Includes 18% GST & Professional Installation</span>
                <span className="font-bold text-emerald-600">✓ No Hidden Charges</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
