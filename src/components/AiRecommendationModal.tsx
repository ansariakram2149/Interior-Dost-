import React, { useState } from 'react';
import { X, Sparkles, Bot, Send, Loader2 } from 'lucide-react';
import { UserRequirement, InteriorPackage } from '../types';

interface AiRecommendationModalProps {
  isOpen: boolean;
  onClose: () => void;
  userReq: UserRequirement;
  activePackage: InteriorPackage;
}

export const AiRecommendationModal: React.FC<AiRecommendationModalProps> = ({ isOpen, onClose, userReq, activePackage }) => {
  const [loading, setLoading] = useState(false);
  const [advice, setAdvice] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleFetchAiAdvice = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/recommend', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          city: userReq.city,
          propertyType: userReq.spaceType,
          area: userReq.area,
          budget: userReq.budgetPreference,
          packageTitle: activePackage.name,
          roomScope: "Living Room, Kitchen, Bedrooms, Bathrooms, False Ceiling"
        })
      });

      const data = await res.json();
      if (data.success) {
        setAdvice(data.advice);
      } else {
        setError(data.error || "Failed to generate AI recommendations.");
      }
    } catch (err: any) {
      setError(err.message || "Network error while connecting to AI backend.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6">
      <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full p-6 sm:p-8 relative animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-gray-100">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-purple-600 text-white flex items-center justify-center shadow-md">
              <Bot className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-black text-gray-900">Gemini AI Interior Expert</h3>
              <p className="text-xs text-gray-500">Personalized advisory for {userReq.city} • {userReq.spaceType}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-700 transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="py-6 space-y-6">
          {!advice && !loading && (
            <div className="text-center space-y-4 py-8">
              <div className="w-16 h-16 rounded-full bg-purple-50 text-purple-600 mx-auto flex items-center justify-center">
                <Sparkles className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-bold text-gray-900">Ready to Generate Your Custom AI Blueprint</h4>
              <p className="text-sm text-gray-600 max-w-md mx-auto">
                Our Gemini AI model will analyze your specs ({userReq.city}, {userReq.spaceType}, {userReq.area} sq.ft., {activePackage.name}) to give you tailored layout and material suggestions.
              </p>
              <button
                onClick={handleFetchAiAdvice}
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3.5 px-6 rounded-2xl shadow-lg transition-all inline-flex items-center space-x-2 text-sm"
              >
                <Sparkles className="w-4 h-4" />
                <span>Generate AI Recommendations</span>
              </button>
            </div>
          )}

          {loading && (
            <div className="text-center space-y-4 py-16">
              <Loader2 className="w-10 h-10 text-purple-600 animate-spin mx-auto" />
              <p className="text-sm font-semibold text-gray-700">Analyzing layout, climate, and package materials...</p>
            </div>
          )}

          {error && (
            <div className="bg-red-50 border border-red-200 p-4 rounded-2xl text-red-700 text-sm">
              {error}
            </div>
          )}

          {advice && (
            <div className="space-y-4">
              <div className="bg-purple-50/70 border border-purple-100 rounded-2xl p-6 text-gray-800 text-sm sm:text-base leading-relaxed space-y-3 whitespace-pre-line font-medium">
                {advice}
              </div>

              <div className="flex justify-end space-x-3">
                <button
                  onClick={handleFetchAiAdvice}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-2.5 px-4 rounded-xl text-xs transition-all"
                >
                  Regenerate Advice
                </button>
                <button
                  onClick={onClose}
                  className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2.5 px-5 rounded-xl text-xs transition-all"
                >
                  Done
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
