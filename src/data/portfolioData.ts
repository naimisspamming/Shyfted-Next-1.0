import { Solution, SolutionCategory, CustomService, Review, TeamMember, AgencyStat } from '../types';

export const SOLUTION_CATEGORIES: SolutionCategory[] = [
  'Personal Website', 'E-commerce Website', 'Inventory Management System', 'POS System',
  'Restaurant Management System', 'Booking & Appointment System',
  'School Management System', 'Hospital Management System', 'CRM & ERP Applications',
  'SaaS Application Development Services',
];

const SOLUTIONS_A: Solution[] = [
  {
    id: 'ecommerce-website', slug: 'ecommerce-website', name: 'E-commerce Website',
    category: 'E-commerce Website',
    shortDescription: 'A complete online store with product catalog, cart, checkout, and order management.',
    overview: 'A ready-made e-commerce website solution for businesses that want to sell products online.',
    features: ['Product catalog with categories and search', 'Shopping cart and wishlist', 'Secure checkout flow', 'Order tracking and history', 'Admin product and order management', 'Responsive mobile-first design'],
    functionalities: ['Add/edit/remove products', 'Manage inventory quantities', 'Process and update orders', 'Customer account management', 'Sales reports and analytics'],
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    screenshots: [], demoUrl: 'https://bazarbondhu.onrender.com/', accentColor: '#6366F1', icon: 'ShoppingCart', related: ['inventory-management-system', 'pos-system'],
  },
  {
    id: 'inventory-management-system', slug: 'inventory-management-system', name: 'Inventory Management System',
    category: 'Inventory Management System',
    shortDescription: 'Track stock, suppliers, purchases, and stock movements in real time.',
    overview: 'A ready-made inventory management system that helps businesses track products, stock levels, suppliers, and purchase orders.',
    features: ['Real-time stock tracking', 'Supplier and purchase order management', 'Low-stock alerts', 'Stock adjustment and transfer', 'Multi-location inventory'],
    functionalities: ['Add and categorize products', 'Record stock in/out movements', 'Manage suppliers and purchase orders', 'Generate inventory reports', 'Set reorder levels'],
    techStack: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Tailwind CSS'],
    screenshots: [], demoUrl: undefined, accentColor: '#8B5CF6', icon: 'Package', related: ['pos-system', 'ecommerce-website'],
  },
  {
    id: 'pos-system', slug: 'pos-system', name: 'POS System',
    category: 'POS System',
    shortDescription: 'Point-of-sale system for retail and restaurants with billing, receipts, and reports.',
    overview: 'A ready-made POS system for retail stores and restaurants handling billing, receipts, and daily sales.',
    features: ['Fast billing interface', 'Receipt printing', 'Cash and card payments', 'Daily sales summary', 'Inventory deduction', 'Multi-user roles'],
    functionalities: ['Create and manage bills', 'Apply discounts and taxes', 'Track daily sales', 'Manage products and prices', 'Generate sales reports'],
    techStack: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Tailwind CSS'],
    screenshots: [], demoUrl: undefined, accentColor: '#10B981', icon: 'CreditCard', related: ['inventory-management-system', 'restaurant-management-system'],
  },
];

const SOLUTIONS_B: Solution[] = [
  {
    id: 'restaurant-management-system', slug: 'restaurant-management-system', name: 'Restaurant Management System',
    category: 'Restaurant Management System',
    shortDescription: 'Manage menu, orders, tables, kitchen, and billing for restaurants.',
    overview: 'A ready-made restaurant management system covering menu, ordering, kitchen, billing.',
    features: ['Menu management', 'Table and order management', 'Kitchen display system', 'Billing and receipts', 'Inventory for ingredients', 'Sales reports'],
    functionalities: ['Manage menu items', 'Take and track orders', 'Manage tables', 'Process billing', 'Track ingredient stock', 'Generate daily reports'],
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    screenshots: [], demoUrl: undefined, accentColor: '#F97316', icon: 'UtensilsCrossed', related: ['pos-system'],
  },
  {
    id: 'booking-appointment-system', slug: 'booking-appointment-system', name: 'Booking & Appointment System',
    category: 'Booking & Appointment System',
    shortDescription: 'Schedule appointments, manage calendars, and send reminders.',
    overview: 'A ready-made booking and appointment system for clinics, salons, consultants.',
    features: ['Online booking', 'Calendar management', 'Automated reminders', 'Cancellation and rescheduling', 'Staff scheduling', 'Customer history'],
    functionalities: ['Create services and time slots', 'Manage bookings', 'Assign staff', 'Send reminders', 'Track no-shows', 'Generate reports'],
    techStack: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Tailwind CSS'],
    screenshots: [], demoUrl: undefined, accentColor: '#06B6D4', icon: 'CalendarCheck', related: [],
  },
];

const SOLUTIONS_C: Solution[] = [
  {
    id: 'saas-application-development-services', slug: 'saas-application-development-services', name: 'SaaS Application Development Services',
    category: 'SaaS Application Development Services',
    shortDescription: 'Design and build scalable SaaS products with multi-tenant architecture.',
    overview: 'Custom SaaS application development services to turn your idea into a scalable, subscription-based software product.',
    features: ['Multi-tenant architecture', 'User and role management', 'Subscription billing integration', 'Admin dashboards', 'API-first design', 'Scalable cloud deployment'],
    functionalities: ['Design SaaS architecture', 'Implement tenant isolation', 'Integrate payment and billing', 'Build admin and user portals', 'Set up monitoring and analytics', 'Provide ongoing support'],
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS', 'Tailwind CSS'],
    screenshots: [], demoUrl: 'https://loonar.shop/', accentColor: '#6366F1', icon: 'Cloud', related: ['ecommerce-website'],
  },
];

const SOLUTIONS_D: Solution[] = [
  {
    id: 'personal-website', slug: 'personal-website', name: 'Personal Website',
    category: 'Personal Website',
    shortDescription: 'A personal portfolio website to showcase your profile and work.',
    overview: 'A ready-made personal website solution to present your profile, skills, projects, and contact information in a clean, professional layout.',
    features: ['About and profile section', 'Projects showcase', 'Skills and experience', 'Contact form', 'Responsive design', 'SEO-friendly'],
    functionalities: ['Edit profile content', 'Manage projects', 'Update skills', 'Receive contact messages', 'Customize styling', 'Deploy easily'],
    techStack: ['React', 'Tailwind CSS', 'Vercel'],
    screenshots: [], demoUrl: 'https://whoisshanzid.vercel.app/', accentColor: '#8B5CF6', icon: 'User', related: ['ecommerce-website'],
  },
];

export const SOLUTIONS: Solution[] = [...SOLUTIONS_D, ...SOLUTIONS_A, ...SOLUTIONS_B, ...SOLUTIONS_C];
export const CUSTOM_SERVICES: CustomService[] = [
  { id: 'personal-portfolio', name: 'Personal Portfolio Website', description: 'A tailored portfolio to showcase your work and achievements.', iconName: 'User' },
  { id: 'resume-cv-site', name: 'Resume / CV Website', description: 'An online resume that makes a strong first impression.', iconName: 'FileText' },
  { id: 'personal-brand', name: 'Personal Brand Website', description: 'Build your personal brand with a distinctive online presence.', iconName: 'Sparkles' },
  { id: 'landing-page', name: 'Personal Landing Page', description: 'A focused landing page for your profile or campaign.', iconName: 'Globe' },
  { id: 'blog-site', name: 'Personal Blog', description: 'Share your thoughts and expertise with a personal blog.', iconName: 'PenTool' },
  { id: 'saas-development', name: 'SaaS Application Development', description: 'Design and build scalable SaaS products with multi-tenant architecture.', iconName: 'Cloud' },
  { id: 'custom-website', name: 'Custom Website Development', description: 'Tailored websites built around your brand and business goals.', iconName: 'Globe' },
  { id: 'custom-webapp', name: 'Custom Web Application Development', description: 'End-to-end web applications designed for your unique workflows.', iconName: 'Layers' },
  { id: 'business-software', name: 'Business Management Software', description: 'Software to manage operations, staff, and processes.', iconName: 'Briefcase' },
  { id: 'database-apps', name: 'Database-Driven Applications', description: 'Applications backed by robust, scalable databases.', iconName: 'Database' },
  { id: 'api-integration', name: 'API Integration', description: 'Connect your app with third-party services and APIs.', iconName: 'Plug' },
  { id: 'third-party', name: 'Third-Party Service Integration', description: 'Integrate payment gateways, SMS, email, and more.', iconName: 'Link' },
  { id: 'customization', name: 'Existing Application Customization', description: 'Modify and extend your existing applications.', iconName: 'Wrench' },
  { id: 'maintenance', name: 'Maintenance & Technical Support', description: 'Ongoing support, bug fixes, and improvements.', iconName: 'LifeBuoy' },
];

export const REVIEWS: Review[] = [];

export const AGENCY_STATS: AgencyStat[] = [
  { label: 'Ready-Made Solutions', value: '8', subtext: 'Business application categories' },
  { label: 'Custom Projects', value: 'On Demand', subtext: 'Built to your requirements' },
];

export const CLIENT_LOGOS: string[] = [];

export const TEAM_MEMBERS: TeamMember[] = [
  { id: 'naimur-rahman', name: 'Naimur Rahman', role: 'Managing Director', email: 'naimur@shyftednext.com', bio: 'Naimur leads Shyfted Next with a focus on delivering practical, business-focused web applications.', avatar: 'https://i.ibb.co.com/Fk1NVDNC/3835.webp', socials: { linkedin: 'https://linkedin.com/in/naimur-rahman' } },
  { id: 'mohaddes-ali-tuhin', name: 'Mohaddes Ali Tuhin', role: 'Chief Operating Officer', email: 'mohaddes@shyftednext.com', bio: 'Mohaddes oversees operations and delivery of client projects.', avatar: 'https://i.ibb.co.com/MkD2B86G/file-000000004b00820bbb73b7e474ace64a.webp', socials: { linkedin: 'https://linkedin.com/in/mohaddes-ali-tuhin' } },
  { id: 'raiyan-karim', name: 'Raiyan Karim', role: 'Outreach Executive', email: 'raiyan@shyftednext.com', bio: 'Raiyan connects with clients and partners to grow the business.', avatar: 'https://i.ibb.co.com/YBKyFXPC/Neon-Yellow-and-Blue-Modern-Whatsapp-DP-20260828-224130-0000.webp', socials: { linkedin: 'https://linkedin.com/in/raiyan-karim' } },
  { id: 'abdullah-al-noman', name: 'Abdullah Al Noman', role: 'Outreach Executive', email: 'noman@shyftednext.com', bio: 'Abdullah supports client outreach and project coordination.', avatar: 'https://i.ibb.co.com/dsPXSNS7/Neon-Yellow-and-Blue-Modern-Whatsapp-DP-20260828-222251-0000.webp', socials: { linkedin: 'https://linkedin.com/in/abdullah-al-noman' } },
  { id: 'syed-rabby-hasan', name: 'Syed Rabby Hasan', role: 'Telesales Executive', email: 'rabby@shyftednext.com', bio: 'Rabby handles client calls and sales inquiries.', avatar: 'https://i.ibb.co.com/vvwV5rFY/Neon-Yellow-and-Blue-Modern-Whatsapp-DP-20260828-223011-0000.webp', socials: { linkedin: 'https://linkedin.com/in/syed-rabby-hasan' } },
];
