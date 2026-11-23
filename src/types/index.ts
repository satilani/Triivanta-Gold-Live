export interface VipRegistrationData {
  fullName: string;
  email?: string;
  phone: string;
  preferredConfiguration: 'villa-plots' | 'bespoke-villas' | 'sky-residences' | 'commercial';
  investmentHorizon?: string;
  source?: string;
  notes?: string;
}

export interface VipPassDetails {
  tokenId: string;
  fullName: string;
  email?: string;
  phone: string;
  configuration: string;
  timestamp: string;
  priorityTier: 'Founding Member - Tier 1' | 'Priority Member - Tier 2';
}

export interface AmenityItem {
  id: string;
  title: string;
  category: string;
  description: string;
  highlight: string;
  image?: string;
}
