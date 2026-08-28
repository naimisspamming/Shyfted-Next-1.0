import { PortfolioProject, AgencyService, TeamMember } from '../types';

export const AGENCY_SERVICES: AgencyService[] = [
  {
    id: 'video-editing',
    name: 'Video Editing & Post-Production',
    tagline: 'High-retention edits engineered for viral reach and brand authority',
    description:
      'We transform raw footage into magnetic storytelling. From 9:16 vertical reels with aggressive pacing and custom sound design to cinematic 4K YouTube long-form and 3D product reels.',
    badge: 'High-Retention Visuals',
    features: [
      {
        title: 'Hook Optimization & Pacing',
        description: 'First 3-second retention engineering with fast cuts, pattern interrupts, and visual hooks.',
        iconName: 'Zap',
      },
      {
        title: 'Dynamic Motion & 3D VFX',
        description: 'Custom kinetic typography, 3D element tracking, UI mockups, and glowing motion graphics.',
        iconName: 'Sparkles',
      },
      {
        title: 'Pro Sound Design & Foley',
        description: 'Multi-layer SFX, whooshes, risers, custom audio ducking, and punchy bass drops.',
        iconName: 'Volume2',
      },
      {
        title: 'Hollywood-Grade Color Grading',
        description: 'DaVinci Resolve color science tailored to filmic LUTs, brand palettes, and mood tone.',
        iconName: 'Palette',
      },
    ],
    deliverables: [
      'Master 4K / 1080p exports in 9:16 & 16:9',
      'Dynamic animated subtitles & caption styling',
      'Sound effect stems & royalty-free commercial music',
      'A/B test thumbnail & hook cut variations',
      'Source Premiere Pro / DaVinci project files upon request',
    ],
    workflow: [
      { step: '01', title: 'Raw Footage & Brief', desc: 'Upload raw assets via Google Drive or Frame.io with style references.' },
      { step: '02', title: 'Rough Cut & Pacing', desc: 'We build the story arc, trim fluff, and lock the rhythm within 24 hours.' },
      { step: '03', title: 'VFX & Audio Layering', desc: 'Apply motion graphics, sound design, color grading, and hooks.' },
      { step: '04', title: 'Polished Delivery', desc: 'Final review round and export ready for immediate multi-platform publishing.' },
    ],
    packages: [
      {
        name: 'Basic',
        price: '$999',
        period: '/month',
        description: 'Ideal for creators & founders building consistent brand momentum with 10 high-retention videos.',
        perks: [
          '10 High-Retention Edited Videos',
          'Hook Optimization & Dynamic Pacing',
          'Animated Subtitles & Sound Design',
          '48-Hour Turnaround Time',
          '2 Revision Rounds per Video',
        ],
      },
      {
        name: 'Standard',
        price: '$1,499',
        period: '/month',
        popular: true,
        description: 'Our most popular plan for fast-growing channels, brands, and active daily content creators.',
        perks: [
          '20 High-Retention Edited Videos',
          'Priority 24-48 Hour Turnaround',
          '3D Motion Graphics & VFX Elements',
          'Multi-Layer Audio Foley & SFX',
          'Hook Cut & A/B Variations',
          'Dedicated Slack / Channel Support',
        ],
      },
      {
        name: 'Premium',
        price: '$1,999',
        period: '/month',
        description: 'Complete daily publishing engine for high-volume creator brands and aggressive growth campaigns.',
        perks: [
          '30 High-Retention Edited Videos',
          'Fastest 24-Hour Delivery Turnaround',
          'Cinematic Color Grading & Advanced VFX',
          'A/B Hook Variants & Thumbnails',
          'Raw Project Files & Source Stems',
          'Unlimited Revisions & VIP Direct Access',
        ],
      },
    ],
  },
  {
    id: 'website-redesign',
    name: 'Website Redesign & Conversion UX',
    tagline: 'Modern, high-converting digital flagships that command premium pricing',
    description:
      'We strip away dated templates and cluttered layouts to engineer sleek, lightning-fast web experiences designed to turn visitors into high-paying clients.',
    badge: 'Conversion-First UI/UX',
    features: [
      {
        title: 'Modern Minimalist Aesthetic',
        description: 'Sleek dark & light modes, spacious negative space, and bespoke typography hierarchies.',
        iconName: 'Layout',
      },
      {
        title: 'Conversion Rate Engineering',
        description: 'Strategic CTA placements, reduced cognitive friction, and sticky mobile user flows.',
        iconName: 'TrendingUp',
      },
      {
        title: 'Interactive 3D & Micro-Animations',
        description: 'Smooth scroll physics, interactive canvas elements, and tactile component feedback.',
        iconName: 'Layers',
      },
      {
        title: 'Sub-Second Speed & SEO',
        description: '95+ Google Lighthouse scores, semantic HTML5, and responsive perfection on every screen.',
        iconName: 'Gauge',
      },
    ],
    deliverables: [
      'Complete high-fidelity Figma UI/UX design system',
      'Mobile-first responsive layouts (iOS, Android, Tablet, Desktop)',
      'Production-ready code (Next.js / React / Webflow / Tailwind)',
      'Interactive micro-interactions & fluid page transitions',
      'Comprehensive Lighthouse speed & SEO optimization report',
    ],
    workflow: [
      { step: '01', title: 'Audit & Wireframing', desc: 'Identify bounce points, analyze competitors, and map high-converting flows.' },
      { step: '02', title: 'Visual Art Direction', desc: 'Craft sleek aesthetic concepts, typography systems, and interactive styles.' },
      { step: '03', title: 'Prototype & Code', desc: 'Build the interactive prototype and production codebase with flawless responsiveness.' },
      { step: '04', title: 'Launch & QA', desc: 'End-to-end speed audits, cross-device testing, analytics integration, and go-live.' },
    ],
    packages: [
      {
        name: 'Single Page',
        price: '$1,499',
        period: 'one-time',
        description: 'Transform your single core landing page into an irresistible conversion machine.',
        perks: [
          'Complete UX/UI Redesign in Figma',
          'Responsive React / Tailwind / Webflow Build',
          'Conversion-Focused Copy Structure',
          'Sub-Second Mobile Speed Optimization',
          '5 to 7 Day Delivery Turnaround',
        ],
      },
      {
        name: 'Full Website',
        price: '$1,999',
        period: 'one-time',
        popular: true,
        description: 'Complete multi-page website redesign engineered to maximize brand authority and conversions.',
        perks: [
          'Full Multi-Page Website Redesign',
          'Complete Design System & Components',
          'Interactive Micro-Animations & Motion',
          'CMS / Blog / Lead Capture Integration',
          '95+ Google Lighthouse Speed Score',
          '10 to 14 Day Delivery Turnaround',
        ],
      },
      {
        name: 'Full Website + AI Automation',
        price: '$2,499',
        period: 'one-time',
        description: 'Full website redesign powered with custom AI automations, smart workflows, and intelligent chat/CRM routing.',
        perks: [
          'Full Multi-Page Website Redesign',
          'Custom AI Chatbot / Lead Qualification Agent',
          'Automated CRM & Email Workflow Triggers',
          'AI-Powered Content & Form Routing',
          'Interactive Micro-UI & Motion Effects',
          '30 Days Post-Launch Support & Iteration',
        ],
      },
    ],
  },
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'pulse-saas-reel',
    title: 'Aura Cloud: Viral Feature Launch',
    tagline: 'High-octane SaaS launch reel combining 3D UI breakdown with sound design',
    service: 'video-editing',
    category: 'Viral Short / Reel',
    client: 'Aura Technologies',
    clientIndustry: 'Developer Tooling & Cloud SaaS',
    coverImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=500&q=80',
    accentColor: '#9333EA',
    summary:
      'Aura required an attention-grabbing 45-second launch reel to debut their AI infrastructure tool on X, LinkedIn, and TikTok. We engineered a rapid 120bpm visual cut with kinetic typography and UI zoom-ins.',
    challenge:
      'Developer tools are notoriously technical and prone to boring demonstrations. The client needed to explain a complex distributed database feature in under 40 seconds while maintaining 90%+ view retention.',
    solution:
      'We built custom 3D isometric UI mockups, synchronized punchy SFX risers with feature highlights, eliminated all pauses, and used a high-contrast purple-violet color grade matching their brand.',
    metrics: [
      { label: 'Organic Views', value: '2.4M+', suffix: 'views', trend: '+480%' },
      { label: 'Avg. Retention', value: '89.4%', trend: 'Top 1%' },
      { label: 'App Signups', value: '14,200+', trend: 'Direct from Video' },
      { label: 'Delivery Time', value: '3 Days', trend: 'Express' },
    ],
    deliverables: ['9:16 Vertical Reel (TikTok/Reels/Shorts)', '16:9 YouTube Cut', '1:1 Square Ad Cut', 'Custom Audio Stem Mix'],
    tools: ['Adobe Premiere Pro', 'After Effects', 'Blender 3D', 'Ableton Live SFX'],
    turnaroundTime: '72 Hours',
    featured: true,
    videoUrl: '',
    aspectRatio: '9:16',
    retentionScore: 94,
    totalViews: '2.4M',
    pacingRhythm: 'Ultra Fast (TikTok/Reels)',
    editingHighlights: [
      { timestamp: '0:02', note: 'Visual Hook: 3D data explosion with sub-bass drop', technique: '3D VFX & Sound Design' },
      { timestamp: '0:14', note: 'Pattern Interrupt: Glitch transition to product speed test', technique: 'Kinetic Motion' },
      { timestamp: '0:28', note: 'UI Zoom: Dynamic camera dolly into code snippet', technique: 'After Effects Tracking' },
      { timestamp: '0:40', note: 'Outro CTA: Neon kinetic glow logo animation', technique: 'Custom 3D Logo Reveal' },
    ],
    clientReview: {
      quote:
        'Shyfted Next took our dry cloud architecture and turned it into the most viral launch video our company has ever released. The pacing and audio engineering were truly next-level.',
      author: 'Marcus Vance',
      role: 'VP of Growth',
      company: 'Aura Cloud',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      rating: 5,
    },
  },
  {
    id: 'nexus-fintech-redesign',
    title: 'Nexus Capital: Complete Web Overhaul',
    tagline: 'From dated corporate template to modern dark-mode fintech powerhouse',
    service: 'website-redesign',
    category: 'Fintech Web App',
    client: 'Nexus Capital Partners',
    clientIndustry: 'Private Equity & Wealth Tech',
    coverImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=500&q=80',
    accentColor: '#A855F7',
    summary:
      'Nexus Capital had a 6-year-old WordPress website with slow loading times and confusing navigation. We completely redesigned their digital presence into an ultra-sleek, high-converting digital terminal.',
    challenge:
      'High-net-worth investors were bouncing within 12 seconds due to archaic layout, sluggish 4.2-second load times, and broken mobile responsiveness.',
    solution:
      'We redesigned the entire experience using a dark titanium and ultraviolet aesthetic, streamlined the portfolio allocation calculator, and implemented Next.js server components for 0.4s load times.',
    metrics: [
      { label: 'Page Speed', value: '99/100', trend: '+160%' },
      { label: 'Inquiry Rate', value: '4.8%', trend: '3.4x Increase' },
      { label: 'Bounce Rate', value: '21%', trend: '-58% Drop' },
      { label: 'Avg. Time on Site', value: '3m 42s', trend: '+190%' },
    ],
    deliverables: ['Complete Figma Design System (Dark/Light)', 'Mobile-First React/Next.js Codebase', 'Interactive Portfolio Calculator', 'CMS for Deal Announcements'],
    tools: ['Figma', 'Next.js', 'Tailwind CSS', 'Motion/React', 'TypeScript'],
    turnaroundTime: '12 Days',
    featured: true,
    beforeImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80',
    afterImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80',
    livePreviewMockup: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1000&q=80',
    beforeMetrics: {
      speedScore: 38,
      bounceRate: '68%',
      conversionRate: '1.4%',
    },
    afterMetrics: {
      speedScore: 99,
      bounceRate: '21%',
      conversionRate: '4.8%',
    },
    keyImprovements: [
      'Reduced initial page payload from 4.8MB to 380KB',
      'Modern glassmorphism cards with smooth hover physics',
      'One-tap investor qualification flow with real-time feedback',
      '100% compliant with WCAG AA accessibility guidelines',
    ],
    techStack: ['React 19', 'Tailwind v4', 'Motion', 'TypeScript'],
    clientReview: {
      quote:
        'The redesign by Shyfted Next directly boosted our LP inbound inquiries by over 300% in the first 60 days. It established us as the premier modern tech fund in our space.',
      author: 'Elena Rostova',
      role: 'Managing Partner',
      company: 'Nexus Capital',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
      rating: 5,
    },
  },
  {
    id: 'cyber-wear-commercial',
    title: 'Kinetix Apparel: Cinematic Brand Teaser',
    tagline: 'Hypnotic fashion film with custom 3D cloth physics & cyberpunk grading',
    service: 'video-editing',
    category: 'Cinematic Commercial',
    client: 'Kinetix Studio',
    clientIndustry: 'Luxury Streetwear & Athleisure',
    coverImage: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=500&q=80',
    accentColor: '#C084FC',
    summary:
      'Created a cinematic 60-second visual commercial for Kinetix’s Winter Cyber Drop. Featured synchronized speed ramping, custom glitch transitions, and sub-heavy sonic textures.',
    challenge:
      'The raw video footage lacked visual punch and had inconsistent lighting across outdoor night scenes and studio lighting.',
    solution:
      'We color-matched every frame in DaVinci Resolve, built custom neon light passes and digital grain overlays, and edited on the beat of an exclusive electronic soundtrack.',
    metrics: [
      { label: 'Instagram Views', value: '1.8M+', trend: 'Viral' },
      { label: 'Drop Sold Out', value: '42 Min', trend: 'Record High' },
      { label: 'Share Ratio', value: '14.2%', trend: '4x Benchmark' },
      { label: 'ROAS on Ads', value: '6.4x', trend: 'Paid Meta Ads' },
    ],
    deliverables: ['60s Master Commercial 4K', '15s Instagram Reel Cutdowns (x4)', 'TikTok Ad Creative Pack', 'Custom Color Grading LUTs'],
    tools: ['DaVinci Resolve Studio', 'Premiere Pro', 'After Effects', 'Logic Pro'],
    turnaroundTime: '4 Days',
    featured: true,
    videoUrl: '',
    aspectRatio: '9:16',
    retentionScore: 92,
    totalViews: '1.8M',
    pacingRhythm: 'Cinematic Story',
    editingHighlights: [
      { timestamp: '0:00', note: 'Opening Hook: Hyper-lapse speed ramp into macro texture', technique: 'Speed Ramping' },
      { timestamp: '0:18', note: 'Audio Cut: Beat drop synced with neon flash transition', technique: 'Foley Audio Mix' },
      { timestamp: '0:35', note: 'Split-Screen Action: Dual angle choreography sync', technique: 'Multi-cam Grading' },
    ],
    clientReview: {
      quote:
        'The team at Shyfted Next are visual wizards. The video gave our apparel brand the exact luxury edge we needed to sell out our entire inventory in under an hour.',
      author: 'Julian Cole',
      role: 'Creative Director',
      company: 'Kinetix Studio',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      rating: 5,
    },
  },
  {
    id: 'solaris-ai-redesign',
    title: 'Solaris AI: High-Conversion Redesign',
    tagline: 'Restructuring AI developer platform to 3.8x lead conversions',
    service: 'website-redesign',
    category: 'AI / Tech Landing',
    client: 'Solaris Intelligence',
    clientIndustry: 'Generative AI & Enterprise APIs',
    coverImage: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&w=500&q=80',
    accentColor: '#7E22CE',
    summary:
      'Solaris AI was struggling to convert technical decision makers on their landing page. We redesigned the information architecture, created interactive API playground mockups, and engineered responsive dark UI.',
    challenge:
      'Complex technical jargon was cluttering the hero section, causing a 72% immediate bounce rate among enterprise buyers.',
    solution:
      'We crafted a clear value proposition, designed interactive code playground previews directly on the hero card, and built a streamlined 2-click sandbox onboarding flow.',
    metrics: [
      { label: 'API Signups', value: '380%', trend: 'Monthly Increase' },
      { label: 'Lighthouse Score', value: '98/100', trend: 'Ultra Fast' },
      { label: 'Enterprise Leads', value: '45+', trend: 'Per Month' },
      { label: 'Mobile Conversion', value: '+210%', trend: 'Optimized' },
    ],
    deliverables: ['Full Interactive Web Prototype', 'Component Library in Figma', 'Tailwind Responsive Frontend', 'Interactive Code Sandbox Widget'],
    tools: ['Figma', 'React', 'Tailwind CSS', 'Vite', 'Motion'],
    turnaroundTime: '10 Days',
    featured: false,
    beforeImage: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1000&q=80',
    afterImage: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&w=1000&q=80',
    livePreviewMockup: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80',
    beforeMetrics: {
      speedScore: 42,
      bounceRate: '72%',
      conversionRate: '0.9%',
    },
    afterMetrics: {
      speedScore: 98,
      bounceRate: '24%',
      conversionRate: '3.6%',
    },
    keyImprovements: [
      'Instant interactive API preview right in the hero banner',
      'Clean typography pairing with high-contrast code snippets',
      'Optimized lightweight asset delivery without heavy 3D overhead',
      'Integrated enterprise demo booking drawer',
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Motion'],
    clientReview: {
      quote:
        'Working with Shyfted Next was effortless. They understood our technical product immediately and created a design that looks like an Apple-caliber developer tool.',
      author: 'Dr. Aris Thorne',
      role: 'Founder & CEO',
      company: 'Solaris Intelligence',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
      rating: 5,
    },
  },
  {
    id: 'creator-mastery-youtube',
    title: 'Modern Creator: 100k Sub Growth Edit',
    tagline: 'YouTube longform retention masterclass with dynamic B-roll and zooms',
    service: 'video-editing',
    category: 'YouTube Longform',
    client: 'Alex Rivera Media',
    clientIndustry: 'Creator Economy & Tech Education',
    coverImage: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=500&q=80',
    accentColor: '#8B5CF6',
    summary:
      'Edited a 14-minute flagship YouTube documentary video with animated chapter titles, research popups, dynamic sound design, and custom retention pacing that earned 850k views.',
    challenge:
      'Viewer drop-off was occurring at minute 2:30 in standard talking-head format, cutting overall channel revenue and algorithmic recommendation.',
    solution:
      'We introduced visual pattern interrupts every 4.5 seconds, animated data graphics, audio risers before key points, and punchy punch-in zoom framings.',
    metrics: [
      { label: 'YouTube Views', value: '850K+', trend: 'Top 1% on Channel' },
      { label: 'Avg. View Duration', value: '8m 45s', trend: '62% of Video' },
      { label: 'New Subscribers', value: '+18.4K', trend: 'From 1 Video' },
      { label: 'CTR on Thumbnail', value: '11.8%', trend: 'High' },
    ],
    deliverables: ['14-minute Master 4K Video', '3x Short Cutdowns for TikTok/Reels', 'A/B Test Thumbnail Designs', 'Sound Mix with License Proof'],
    tools: ['Premiere Pro', 'After Effects', 'Photoshop', 'iZotope RX Audio'],
    turnaroundTime: '5 Days',
    featured: false,
    videoUrl: '',
    aspectRatio: '16:9',
    retentionScore: 88,
    totalViews: '850K',
    pacingRhythm: 'Educational Flow',
    editingHighlights: [
      { timestamp: '1:12', note: 'Motion Graphic: 3D Timeline of Creator Evolution', technique: 'After Effects 2D/3D' },
      { timestamp: '4:20', note: 'Foley Effect: Custom page-turn and paper texture sound design', technique: 'Audio Layering' },
      { timestamp: '8:45', note: 'Color Pop: Saturation boost on key reveal moments', technique: 'Secondary Color Grade' },
    ],
    clientReview: {
      quote:
        'Shyfted Next took my channel from 30k subs to over 150k in 4 months. Their understanding of YouTube retention curves is second to none.',
      author: 'Alex Rivera',
      role: 'Content Creator',
      company: 'Alex Rivera Media',
      avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=200&q=80',
      rating: 5,
    },
  },
  {
    id: 'luxe-atelier-redesign',
    title: 'Maison Noire: Luxury E-Commerce',
    tagline: 'Minimalist editorial storefront for Parisian luxury fragrances',
    service: 'website-redesign',
    category: 'Luxury E-Commerce',
    client: 'Maison Noire Paris',
    clientIndustry: 'Haute Parfumerie & Luxury Goods',
    coverImage: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=500&q=80',
    accentColor: '#D8B4FE',
    summary:
      'Redesigned the e-commerce storefront for Maison Noire, introducing smooth scroll storytelling, interactive scent note pyramids, and a frictionless 1-page checkout.',
    challenge:
      'Their existing Shopify theme was generic, bulky, and didn’t reflect the high $340 average order value of their luxury fragrance collection.',
    solution:
      'We crafted an editorial layout with high-contrast typography, interactive fragrance notes explorer, and buttery smooth mobile transitions that increased AOV by 28%.',
    metrics: [
      { label: 'Conversion Rate', value: '4.2%', trend: '+140%' },
      { label: 'Average Order Value', value: '$385', trend: '+$85 Increase' },
      { label: 'Mobile Checkout Speed', value: '1.2s', trend: 'Instant' },
      { label: 'Return Customer Rate', value: '38%', trend: '+45%' },
    ],
    deliverables: ['Custom Headless Shopify UI', 'Interactive Fragrance Note Explorer', 'Custom Checkout Flow', 'Design System & Mobile Kit'],
    tools: ['Figma', 'Shopify Liquid / React', 'Tailwind', 'Motion'],
    turnaroundTime: '14 Days',
    featured: false,
    beforeImage: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=500&q=80',
    afterImage: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=500&q=80',
    livePreviewMockup: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=500&q=80',
    beforeMetrics: {
      speedScore: 45,
      bounceRate: '64%',
      conversionRate: '1.7%',
    },
    afterMetrics: {
      speedScore: 97,
      bounceRate: '19%',
      conversionRate: '4.2%',
    },
    keyImprovements: [
      'Interactive Scent Pyramid selector with 3D ingredient illustrations',
      'Ultra-minimalist editorial product photography cards',
      'One-tap Apple Pay / Google Pay express mobile checkout',
      'Sub-second page navigation across all collections',
    ],
    techStack: ['Shopify Plus', 'Next.js', 'Tailwind CSS', 'Motion'],
    clientReview: {
      quote:
        'Our brand perception changed overnight. Customers constantly praise how elegant and fast the new site is. Shyfted Next delivered a masterclass in digital luxury.',
      author: 'Camille Laurent',
      role: 'Brand Director',
      company: 'Maison Noire Paris',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
      rating: 5,
    },
  },
];

export const AGENCY_STATS = [
  { label: 'Video Views', value: '45M+', subtext: 'Generated across channels' },
  { label: 'Avg. Conv. Boost', value: '3.4x', subtext: 'On website redesigns' },
];

export const CLIENT_LOGOS = [
  'Aura Cloud',
  'Nexus Capital',
  'Kinetix Studio',
  'Solaris AI',
  'Maison Noire',
  'Alex Rivera Media',
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'naimur-rahman',
    name: 'Naimur Rahman',
    role: 'Managing Director',
    email: 'naimur@shyftednext.com',
    ventures: [
      { name: 'Kochu', description: 'Clothing brand' }
    ],
    institutions: [
      { name: 'North South University', description: 'University' }
    ],
    bio: 'Naimur is a visionary strategist and Managing Director with a passion for scaling brands through high-retention storytelling and conversion-first web experiences.',
    avatar: 'https://i.ibb.co.com/Fk1NVDNC/3835.webp',
    socials: {
      linkedin: 'https://linkedin.com/in/naimur-rahman',
    },
  },
];
