export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatar: string;
  email?: string;
  ventures?: { name: string; description: string }[];
  institutions?: { name: string; description: string }[];
  socials?: {
    twitter?: string;
    linkedin?: string;
    portfolio?: string;
  };
}

export type SolutionCategory =
  | 'Personal Website'
  | 'E-commerce Website'
  | 'Inventory Management System'
  | 'POS System'
  | 'Restaurant Management System'
  | 'Booking & Appointment System'
  | 'School Management System'
  | 'Hospital Management System'
  | 'CRM & ERP Applications'
  | 'SaaS Application Development Services';

export interface Solution {
  id: string;
  slug: string;
  name: string;
  category: SolutionCategory;
  shortDescription: string;
  overview: string;
  features: string[];
  functionalities: string[];
  techStack: string[];
  screenshots: string[];
  demoUrl?: string;
  accentColor: string;
  icon: string;
  related?: string[];
}

export interface CustomService {
  id: string;
  name: string;
  description: string;
  iconName: string;
}

export interface Review {
  id: string;
  customerName: string;
  businessName?: string;
  serviceReceived: string;
  rating: number;
  text: string;
  approved: boolean;
  createdAt: string;
}

export interface InquiryFormData {
  name: string;
  email: string;
  service: string;
  budget: string;
  projectDetails: string;
  timeline: string;
}

export interface AgencyStat {
  label: string;
  value: string;
  subtext: string;
}
