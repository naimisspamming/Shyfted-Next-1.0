export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatar: string;
  socials?: {
    twitter?: string;
    linkedin?: string;
    portfolio?: string;
  };
}

export type ServiceType = 'video-editing' | 'website-redesign';

export type VideoCategory = 'Viral Short / Reel' | 'Cinematic Commercial' | 'YouTube Longform' | '3D Motion Graphics' | 'SaaS Explainer';
export type WebCategory = 'SaaS Platform' | 'Luxury E-Commerce' | 'AI / Tech Landing' | 'Creative Studio' | 'Fintech Web App';

export type ProjectCategory = VideoCategory | WebCategory;

export interface MetricItem {
  label: string;
  value: string;
  trend?: string;
  prefix?: string;
  suffix?: string;
}

export interface VideoHighlight {
  timestamp: string;
  note: string;
  technique: string;
}

export interface WebAuditMetric {
  label: string;
  before: number | string;
  after: number | string;
  unit?: string;
  goodDirection: 'up' | 'down';
}

export interface ClientReview {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
}

export interface PortfolioProject {
  id: string;
  title: string;
  tagline: string;
  service: 'video-editing' | 'website-redesign';
  category: ProjectCategory;
  client: string;
  clientIndustry: string;
  coverImage: string;
  accentColor: string;
  summary: string;
  challenge: string;
  solution: string;
  metrics: MetricItem[];
  deliverables: string[];
  tools: string[];
  turnaroundTime: string;
  featured?: boolean;
  clientReview?: ClientReview;
  
  // Video-specific properties
  videoUrl?: string;
  aspectRatio?: '9:16' | '16:9';
  retentionScore?: number;
  totalViews?: string;
  editingHighlights?: VideoHighlight[];
  pacingRhythm?: 'Ultra Fast (TikTok/Reels)' | 'Cinematic Story' | 'Educational Flow' | 'High-Energy Teaser';

  // Website-specific properties
  beforeImage?: string;
  afterImage?: string;
  livePreviewMockup?: string;
  beforeMetrics?: {
    speedScore: number;
    bounceRate: string;
    conversionRate: string;
  };
  afterMetrics?: {
    speedScore: number;
    bounceRate: string;
    conversionRate: string;
  };
  keyImprovements?: string[];
  techStack?: string[];
  figmaUrl?: string;
}

export interface AgencyService {
  id: 'video-editing' | 'website-redesign';
  name: string;
  tagline: string;
  description: string;
  badge: string;
  features: {
    title: string;
    description: string;
    iconName: string;
  }[];
  deliverables: string[];
  workflow: {
    step: string;
    title: string;
    desc: string;
  }[];
  packages: {
    name: string;
    price: string;
    period?: string;
    popular?: boolean;
    description: string;
    perks: string[];
  }[];
}

export interface InquiryFormData {
  name: string;
  email: string;
  service: 'video-editing' | 'website-redesign' | 'all-inclusive';
  budget: string;
  projectDetails: string;
  timeline: string;
  sourceFilesUrl?: string;
}
