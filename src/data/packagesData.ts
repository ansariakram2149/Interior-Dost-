import { InteriorPackage, CityMultiplier, FinishOptionType, InteriorServiceCategory } from '../types';

export const CITIES: CityMultiplier[] = [
  { name: "Ranchi", multiplier: 0.90, state: "Jharkhand" },
  { name: "Patna", multiplier: 0.88, state: "Bihar" },
  { name: "Jamshedpur", multiplier: 0.92, state: "Jharkhand" },
  { name: "Kolkata", multiplier: 0.98, state: "West Bengal" },
  { name: "Delhi NCR", multiplier: 1.15, state: "Delhi" },
  { name: "Mumbai", multiplier: 1.30, state: "Maharashtra" },
  { name: "Bangalore", multiplier: 1.12, state: "Karnataka" },
  { name: "Hyderabad", multiplier: 1.08, state: "Telangana" },
  { name: "Pune", multiplier: 1.05, state: "Maharashtra" },
  { name: "Lucknow", multiplier: 0.92, state: "Uttar Pradesh" },
];

export const SPACE_TYPES = [
  "1 BHK",
  "2 BHK",
  "3 BHK",
  "4 BHK",
  "Villa",
  "Individual Room",
  "Kitchen",
  "Living Room",
  "Bathroom"
];

export const PACKAGES: InteriorPackage[] = [
  {
    id: "smart-interior",
    name: "SMART INTERIOR",
    tagline: "Modern & functional interior for budget-conscious homeowners.",
    badge: "💰 BEST VALUE",
    badgeColor: "bg-emerald-600 text-white",
    basePricePerSqFt: 500,
    priceRangeText: "₹5L – ₹7.5L",
    startingPrice: "₹4,95,000",
    description: "Designed for maximum utility and clean aesthetics, utilizing durable boil-proof laminates and smart space-saving cabinetry.",
    finishQuality: "Standard Matte & Gloss Laminates",
    materialHighlights: [
      "BWP / BWR Grade Plywood",
      "Hettich / Ebco Standard Hardware",
      "Water-resistant Kitchen Carcase",
      "Emulsion Wall Painting"
    ],
    warranty: "5 Years Manufacturer Warranty",
    inclusions: [
      "Modular Kitchen (L-Shape or Parallel)",
      "Basic Wardrobes with Soft Close",
      "Compact TV Unit with Display",
      "False Ceiling with COB Lighting",
      "Standard Electrical & Lighting",
      "Complete Wall Painting & Finishes"
    ],
    images: {
      livingRoom: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
      kitchen: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80",
      masterBedroom: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80",
      bedroom2: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80",
      bathroom: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80"
    },
    roomBreakdownPercentages: {
      livingRoom: 25,
      kitchen: 30,
      masterBedroom: 20,
      bedroom2: 10,
      bathroom: 5,
      falseCeilingLighting: 6,
      otherWorks: 4
    }
  },
  {
    id: "premium-interior",
    name: "PREMIUM INTERIOR",
    tagline: "Elegant premium interiors with better materials, finishes and customized furniture.",
    badge: "⭐ PREMIUM CHOICE",
    badgeColor: "bg-blue-600 text-white",
    basePricePerSqFt: 720,
    priceRangeText: "₹7.5L – ₹11L",
    startingPrice: "₹7,20,000",
    description: "A harmonious balance of luxury and practicality. Features acrylic/membrane finishes, fluted paneling, and soft-closing channels.",
    finishQuality: "High Gloss Acrylic, Anti-scratch Laminate & Fluted Panels",
    materialHighlights: [
      "IS-710 Boiling Water Proof Plywood",
      "Blum / Hettich Soft-Close Hardware",
      "Quartz / Granite Countertop",
      "Profile LED Strip Lighting & Wall Paneling"
    ],
    warranty: "10 Years Manufacturer Warranty",
    inclusions: [
      "Premium Modular Kitchen with Tall Unit",
      "Floor-to-Ceiling Wardrobes with Loft",
      "Designer TV Unit with Backlit Paneling",
      "Multi-tier False Ceiling with Cove Lighting",
      "Designer Chandeliers & Pendant Lights",
      "Fluted Wall Panels & Acrylic Finishes",
      "Complete Electrical, Painting & Deep Cleaning"
    ],
    images: {
      livingRoom: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
      kitchen: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      masterBedroom: "https://images.unsplash.com/photo-1540518614846-7ede433c4ef0?auto=format&fit=crop&w=1200&q=80",
      bedroom2: "https://images.unsplash.com/photo-1617806118233-18e1c0c52402?auto=format&fit=crop&w=1200&q=80",
      bathroom: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1200&q=80"
    },
    roomBreakdownPercentages: {
      livingRoom: 28,
      kitchen: 28,
      masterBedroom: 18,
      bedroom2: 12,
      bathroom: 6,
      falseCeilingLighting: 5,
      otherWorks: 3
    }
  },
  {
    id: "luxury-interior",
    name: "LUXURY INTERIOR",
    tagline: "A sophisticated luxury interior with high-end finishes and customized designs.",
    badge: "💎 LUXURY PACKAGE",
    badgeColor: "bg-purple-700 text-white",
    basePricePerSqFt: 1050,
    priceRangeText: "₹11L – ₹16L",
    startingPrice: "₹10,50,000",
    description: "Crafted for discerning homeowners seeking royal elegance, Italian marble accents, PU duco finishes, and bespoke furniture.",
    finishQuality: "PU Finish, Italian Marble Touches, Veneer & Glass",
    materialHighlights: [
      "Marine Grade Certified Plywood",
      "Hafele & Blum Soft-Close Systems",
      "Imported Quartz Countertops & Backsplash",
      "Smart Touch Lighting & Automated Curtains Provision"
    ],
    warranty: "15 Years Comprehensive Warranty",
    inclusions: [
      "Bespoke Luxury Modular Kitchen with Built-in Appliances Provision",
      "Walk-in Wardrobe or Floor-to-Ceiling Glass Door Wardrobes",
      "Grand Entertainment Media Wall with Fluted Veneer",
      "Architectural False Ceiling with Smart RGB Strip & Architectural Fixtures",
      "Italian Marble Cladding / Designer Duco Wall Panels",
      "Customized Upholstered Bed Backdrops & Side Tables",
      "Complete Waterproofing, Electrical Rewiring & Premium Painting"
    ],
    images: {
      livingRoom: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
      kitchen: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80",
      masterBedroom: "https://images.unsplash.com/photo-1616137422495-1e9e46e2aa77?auto=format&fit=crop&w=1200&q=80",
      bedroom2: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=1200&q=80",
      bathroom: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80"
    },
    roomBreakdownPercentages: {
      livingRoom: 30,
      kitchen: 25,
      masterBedroom: 20,
      bedroom2: 10,
      bathroom: 7,
      falseCeilingLighting: 5,
      otherWorks: 3
    }
  },
  {
    id: "ultra-luxury",
    name: "ULTRA LUXURY BESPOKE",
    tagline: "Artisan-crafted palace-grade interiors for exclusive residences and villas.",
    badge: "🔥 LIMITED TIME OFFER",
    badgeColor: "bg-amber-600 text-white",
    basePricePerSqFt: 1430,
    priceRangeText: "₹15L – ₹25L+",
    startingPrice: "₹14,30,000",
    description: "The pinnacle of interior design. Handcrafted woodwork, imported hardware, acoustic wall treatments, and fully personalized architectural execution.",
    finishQuality: "Solid Wood Veneer, Brass Inlays, Italian Marble, Antique Glass",
    materialHighlights: [
      "Bespoke Imported Hardwoods & Veneers",
      "Hafele Matrix & Sensor-activated Hardware",
      "Smart Home Automation Integration Included",
      "Acoustic Wall Paneling & Designer Ceilings"
    ],
    warranty: "20 Years Lifetime Warranty",
    inclusions: [
      "Fully Custom Chef's Kitchen with Island & Pantry Unit",
      "Walk-in Dressing Rooms with Glass & Sensor LED Wardrobes",
      "Custom Architectural Home Theater / Lounge Space",
      "Private Bar Unit & Wine Rack Display",
      "Smart Lighting Automation with Scene Controllers",
      "Complete Turnkey Civil, Electrical, HVAC & Interior Execution"
    ],
    images: {
      livingRoom: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
      kitchen: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=80",
      masterBedroom: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80",
      bedroom2: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80",
      bathroom: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1200&q=80"
    },
    roomBreakdownPercentages: {
      livingRoom: 32,
      kitchen: 24,
      masterBedroom: 20,
      bedroom2: 11,
      bathroom: 8,
      falseCeilingLighting: 3,
      otherWorks: 2
    }
  }
];

export const FINISH_OPTIONS: FinishOptionType[] = [
  {
    id: "basic",
    title: "Basic Matte Finish",
    subtitle: "Affordable & functional",
    description: "Clean, low-maintenance surfaces designed for daily wear and tear. Ideal for rental properties and budget homes.",
    image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80",
    features: ["Anti-scratch laminate", "Standard PVC edge banding", "Easy to clean", "5-year warranty"],
    priceMultiplier: 1.0
  },
  {
    id: "premium",
    title: "Premium Acrylic & Fluted Panels",
    subtitle: "Better materials, hardware and aesthetics",
    description: "Glossy acrylic finishes and textured wooden fluted panels that add depth, luxury feel, and modern sophistication.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80",
    features: ["Mirror-like acrylic sheen", "Fluted wooden accents", "Soft-close channels", "10-year warranty"],
    priceMultiplier: 1.35
  },
  {
    id: "luxury",
    title: "Luxury PU & Italian Veneer",
    subtitle: "High-end finishes and bespoke craftsmanship",
    description: "Seamless polyurethane (PU) spray painted finishes, natural wood veneers, and brass inlay details for high-end villas.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
    features: ["Seamless PU coat", "Natural teak/oak veneer", "Sensor lighting", "15-year warranty"],
    priceMultiplier: 1.85
  }
];

export const INTERIOR_SERVICES: InteriorServiceCategory[] = [
  { id: "carpentry", title: "Carpenter Work", iconName: "Hammer", image: "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=600&q=80", description: "Custom furniture, beds, and storage solutions crafted by master carpenters." },
  { id: "kitchen", title: "Modular Kitchen", iconName: "UtensilsCrossed", image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80", description: "Ergonomic, moisture-resistant modular kitchen designs with soft-close drawers." },
  { id: "wardrobe", title: "Wardrobe", iconName: "DoorClosed", image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=600&q=80", description: "Sliding, hinged, and walk-in wardrobes with optimized loft storage." },
  { id: "ceiling", title: "False Ceiling", iconName: "Home", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80", description: "Gypsum false ceilings with integrated cove lighting and designer profiles." },
  { id: "tvunit", title: "TV Unit", iconName: "Tv", image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=600&q=80", description: "Statement media walls with concealed wiring, wooden panels, and display lights." },
  { id: "living", title: "Living Room", iconName: "Sofa", image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&q=80", description: "Stunning living spaces designed for comfort, family gatherings, and elegance." },
  { id: "bedroom", title: "Bedroom", iconName: "BedDouble", image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=600&q=80", description: "Relaxing sanctuaries with custom bed backdrops, side tables, and mood lighting." },
  { id: "bathroom", title: "Bathroom", iconName: "Bath", image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80", description: "Modern vanities, anti-skid tiles, premium fixtures, and smart storage." },
  { id: "painting", title: "Painting & Wall Finish", iconName: "Palette", image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=600&q=80", description: "Royal emulsions, texture paints, PU coatings, and waterproof exterior wall finishes." },
  { id: "electrical", title: "Electrical & Lighting", iconName: "Zap", image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=600&q=80", description: "Safe concealed wiring, designer pendant lights, chandeliers, and LED strips." },
  { id: "complete", title: "Complete Home Interior", iconName: "Building", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80", description: "End-to-end turnkey interior design and execution from 3D planning to handover." }
];

export const SPACE_TYPE_DEFAULTS: Record<string, number> = {
  "1 BHK": 450,
  "2 BHK": 800,
  "3 BHK": 1200,
  "4 BHK": 1800,
  "Villa": 3000,
  "Individual Room": 150,
  "Kitchen": 90,
  "Living Room": 250,
  "Bathroom": 50
};

export const CONFIG_WHATSAPP_NUMBER = "917781011979"; // Configurable WhatsApp business number
