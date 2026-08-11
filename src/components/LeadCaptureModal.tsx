import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2, Phone, User, MapPin, Home, Maximize2, MessageCircle } from 'lucide-react';
import { InteriorPackage, UserRequirement } from '../types';
import { CONFIG_WHATSAPP_NUMBER } from '../data/packagesData';

interface LeadCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPackage: InteriorPackage | null;
  userReq: UserRequirement;
}

export const LeadCaptureModal: React.FC<LeadCaptureModalProps> = ({ isOpen, onClose, selectedPackage, userReq }) => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [city, setCity] = useState(userReq.city);
  const [propertyType, setPropertyType] = useState(userReq.spaceType);
  const [area, setArea] = useState(userReq.area);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !mobile) {
      alert("Please enter your name and mobile number.");
      return;
    }
    const whatsappUrl = `https://wa.me/${CONFIG_WHATSAPP_NUMBER}?text=${encodeURIComponent(
      `Hi Interior Dost team, my name is ${name} (${mobile}). I want expert callback & guidance for ${propertyType} (${area} Sq. Ft.) in ${city} ${selectedPackage ? `regarding ${selectedPackage.name}` : ''}. Please guide me.`
    )}`;
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6">
      <div className="bg-white rounded-3xl shadow-2xl max-w-lg w-full p-6 sm:p-8 relative animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-gray-100">
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 rounded-full bg-rose-600 animate-pulse" />
            <h3 className="text-xl font-black text-gray-900">Get Free Expert Guidance</h3>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-700 transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="py-6">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-xs sm:text-sm text-gray-600">
                {selectedPackage ? `Enquiring for ${selectedPackage.name}` : "Connect with our senior interior architects for customized quotes."}
              </p>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">Your Name</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                    <User className="w-4 h-4 text-rose-600" />
                  </div>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter full name"
                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-rose-500 focus:bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">Mobile Number</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                    <Phone className="w-4 h-4 text-rose-600" />
                  </div>
                  <input
                    type="tel"
                    required
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    placeholder="10-digit mobile number"
                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-rose-500 focus:bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">City</label>
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-rose-500 focus:bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">Property Type</label>
                  <input
                    type="text"
                    value={propertyType}
                    onChange={(e) => setPropertyType(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-rose-500 focus:bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">Area (Sq. Ft.)</label>
                <input
                  type="number"
                  value={area}
                  onChange={(e) => setArea(Number(e.target.value))}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-rose-500 focus:bg-white"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold py-4 px-6 rounded-2xl shadow-lg transition-all flex items-center justify-center space-x-2 text-base mt-2"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>Continue to WhatsApp & Expert Callback</span>
              </button>
            </form>
          ) : (
            <div className="text-center space-y-6 py-6">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <div className="space-y-2">
                <h4 className="text-2xl font-black text-gray-900">Thank You!</h4>
                <p className="text-sm text-gray-600 max-w-sm mx-auto leading-relaxed">
                  Our interior expert will contact you shortly on <span className="font-bold text-gray-900">{mobile}</span> with customized package quotations and 3D design concepts.
                </p>
              </div>
              <button
                onClick={handleReset}
                className="bg-gray-900 hover:bg-gray-800 text-white font-bold py-3 px-8 rounded-2xl text-sm transition-all"
              >
                Close & Continue Exploring
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
