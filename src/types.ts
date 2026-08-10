export interface InteriorPackage {
  id: string;
  name: string;
  tagline: string;
  badge: string;
  badgeColor: string;
  basePricePerSqFt: number; // e.g. 450 for smart, 650 for premium, 950 for luxury, 1300 for ultra
  priceRangeText: string;
  startingPrice: string;
  description: string;
  finishQuality: string;
  materialHighlights: string[];
  warranty: string;
  inclusions: string[];
  images: {
    livingRoom: string;
    kitchen: string;
    masterBedroom: string;
    bedroom2: string;
    bathroom: string;
  };
  roomBreakdownPercentages: {
    livingRoom: number;
    kitchen: number;
    masterBedroom: number;
    bedroom2: number;
    bathroom: number;
    falseCeilingLighting: number;
    otherWorks: number;
  };
}

export interface UserRequirement {
  city: string;
  spaceType: string;
  area: number;
  budgetPreference: string;
}

export interface CityMultiplier {
  name: string;
  multiplier: number; // e.g., Delhi 1.1, Ranchi 0.9, Mumbai 1.25, Patna 0.88, Bangalore 1.15
  state: string;
}

export interface FinishOptionType {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  features: string[];
  priceMultiplier: number;
}

export interface InteriorServiceCategory {
  id: string;
  title: string;
  iconName: string;
  image: string;
  description: string;
}
