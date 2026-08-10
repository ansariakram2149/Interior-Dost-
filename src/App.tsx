import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { PackageCard } from './components/PackageCard';
import { RoomVisualsSection } from './components/RoomVisualsSection';
import { PackageDetailsModal } from './components/PackageDetailsModal';
import { BudgetBreakdownSection } from './components/BudgetBreakdownSection';
import { FinishOptionsSection } from './components/FinishOptionsSection';
import { ServicesMarketplaceSection } from './components/ServicesMarketplaceSection';
import { AiRecommendationModal } from './components/AiRecommendationModal';
import { LeadCaptureModal } from './components/LeadCaptureModal';
import { StickyWhatsAppButton } from './components/StickyWhatsAppButton';
import { Footer } from './components/Footer';
import { PACKAGES } from './data/packagesData';
import { UserRequirement, InteriorPackage } from './types';
import { Sparkles, Filter, Building } from 'lucide-react';

export default function App() {
  const [userReq, setUserReq] = useState<UserRequirement>({
    city: "Ranchi",
    spaceType: "2 BHK",
    area: 1100,
    budgetPreference: "Flexible"
  });

  const [activePackageIndex, setActivePackageIndex] = useState<number>(1); // Default to Premium
  const [selectedDetailsPkg, setSelectedDetailsPkg] = useState<InteriorPackage | null>(null);
  const [selectedLeadPkg, setSelectedLeadPkg] = useState<InteriorPackage | null>(null);
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);
  const [isAiModalOpen, setIsAiModalOpen] = useState(false);
  const [filterTier, setFilterTier] = useState<string>("all");

  const handleSearch = (req: UserRequirement) => {
    setUserReq(req);
  };

  const handleViewDetails = (pkg: InteriorPackage) => {
    setSelectedDetailsPkg(pkg);
  };

  const handleSelectForLead = (pkg: InteriorPackage) => {
    setSelectedLeadPkg(pkg);
    setIsLeadModalOpen(true);
  };

  const handleOpenExpertModal = () => {
    setSelectedLeadPkg(null);
    setIsLeadModalOpen(true);
  };

  const activePackage = PACKAGES[activePackageIndex] || PACKAGES[1];

  const filteredPackages = PACKAGES.filter(pkg => {
    if (filterTier === "all") return true;
    return pkg.id.toLowerCase().includes(filterTier);
  });

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-rose-600 selection:text-white">
      
      {/* Navbar */}
      <Navbar
        selectedCity={userReq.city}
        onOpenExpertModal={handleOpenExpertModal}
      />

      {/* Hero & Discovery Form */}
      <HeroSection
        onSearch={handleSearch}
        onOpenExpertModal={handleOpenExpertModal}
        onOpenAiModal={() => setIsAiModalOpen(true)}
      />

      {/* Packages Zomato-Style Discovery Grid Section */}
      <section id="packages-section" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3">
              <div className="inline-flex items-center space-x-2 bg-rose-50 text-rose-700 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-rose-100">
                <Sparkles className="w-3.5 h-3.5 text-rose-600" />
                <span>Personalized Offers for {userReq.city}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
                Recommended Interior Packages
              </h2>
              <p className="text-base text-gray-600 max-w-2xl">
                Showing tailored Zomato-style offer cards for your <span className="font-bold text-gray-900">{userReq.spaceType}</span> ({userReq.area} Sq. Ft.) in <span className="font-bold text-gray-900">{userReq.city}</span>.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 bg-gray-50 p-1.5 rounded-2xl border border-gray-200">
              <button
                onClick={() => setFilterTier("all")}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  filterTier === "all" ? 'bg-gray-900 text-white shadow-sm' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                All Packages
              </button>
              <button
                onClick={() => setFilterTier("smart")}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  filterTier === "smart" ? 'bg-gray-900 text-white shadow-sm' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Smart
              </button>
              <button
                onClick={() => setFilterTier("premium")}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  filterTier === "premium" ? 'bg-gray-900 text-white shadow-sm' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Premium
              </button>
              <button
                onClick={() => setFilterTier("luxury")}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  filterTier === "luxury" ? 'bg-gray-900 text-white shadow-sm' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Luxury
              </button>
            </div>
          </div>

          {/* Package Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredPackages.map((pkg, idx) => (
              <div key={pkg.id} onClick={() => setActivePackageIndex(idx % PACKAGES.length)}>
                <PackageCard
                  pkg={pkg}
                  userReq={userReq}
                  onViewDetails={handleViewDetails}
                  onSelectForLead={handleSelectForLead}
                />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Room-Wise Visuals Section */}
      <RoomVisualsSection
        activePackage={activePackage}
        userReq={userReq}
      />

      {/* Room-Wise Budget Breakdown Section */}
      <BudgetBreakdownSection
        activePackage={activePackage}
        userReq={userReq}
      />

      {/* Finish & Material Options */}
      <FinishOptionsSection
        onSelectFinish={(finishId) => {
          // Switch package tier based on finish
          if (finishId === 'basic') setActivePackageIndex(0);
          if (finishId === 'premium') setActivePackageIndex(1);
          if (finishId === 'luxury') setActivePackageIndex(2);
          const pkgEl = document.getElementById("packages-section");
          if (pkgEl) pkgEl.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Service Category Marketplace Section */}
      <ServicesMarketplaceSection
        selectedCity={userReq.city}
      />

      {/* Footer */}
      <Footer
        onOpenExpertModal={handleOpenExpertModal}
        selectedCity={userReq.city}
      />

      {/* Floating WhatsApp Button */}
      <StickyWhatsAppButton
        selectedCity={userReq.city}
      />

      {/* Package Details Modal */}
      <PackageDetailsModal
        pkg={selectedDetailsPkg}
        userReq={userReq}
        onClose={() => setSelectedDetailsPkg(null)}
        onSelectForLead={handleSelectForLead}
      />

      {/* Lead Capture Modal */}
      <LeadCaptureModal
        isOpen={isLeadModalOpen}
        onClose={() => setIsLeadModalOpen(false)}
        selectedPackage={selectedLeadPkg}
        userReq={userReq}
      />

      {/* AI Recommendation Modal */}
      <AiRecommendationModal
        isOpen={isAiModalOpen}
        onClose={() => setIsAiModalOpen(false)}
        userReq={userReq}
        activePackage={activePackage}
      />

    </div>
  );
}
