export type ServiceType = 'video-editing' | 'website-redesign' | 'google-visibility';

export type VideoCategory = 'Viral Short / Reel' | 'Cinematic Commercial' | 'YouTube Longform' | '3D Motion Graphics' | 'SaaS Explainer';
export type WebCategory = 'SaaS Platform' | 'Luxury E-Commerce' | 'AI / Tech Landing' | 'Creative Studio' | 'Fintech Web App';
export type SeoCategory = 'Local Google Maps (GMB)' | 'SaaS Organic Dominance' | 'E-Commerce Google Search' | 'Technical SEO & Core Web Vitals' | 'High-Intent Keywords';

export type ProjectCategory = VideoCategory | WebCategory | SeoCategory;

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

export interface KeywordRankingItem {
  keyword: string;
  beforeRank: number | string;
  afterRank: number | string;
  searchVolume: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  tagline: string;
  service: 'video-editing' | 'website-redesign' | 'google-visibility';
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

  // Google Visibility-specific properties
  keywordRankings?: KeywordRankingItem[];
  organicClicks?: string;
  topRankingsCount?: string;
  serpSnippetPreview?: {
    displayUrl: string;
    headline: string;
    description: string;
    sitelinks?: string[];
    richRating?: string;
    verified?: boolean;
  };
  mapPackRank?: string;
}

export interface AgencyService {
  id: 'video-editing' | 'website-redesign' | 'google-visibility';
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
  service: 'video-editing' | 'website-redesign' | 'google-visibility' | 'all-inclusive';
  budget: string;
  projectDetails: string;
  timeline: string;
  sourceFilesUrl?: string;
}
