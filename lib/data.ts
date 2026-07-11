// lib/data.ts
export interface ServiceCategory {
    id: string;
    title: string;
    subtitle: string;
    services: Service[];
}

export interface Service {
    name: string;
    price: string;
    note?: string;
}

// ─── TECH BUDDY GALAXY — Technology Services ──────────────────────────────────

export const techServices: ServiceCategory[] = [
    {
        id: 'web-development',
        title: 'Web Development',
        subtitle: 'Professional websites and web applications',
        services: [
            { name: 'Portfolio Website', price: '₹3,999' },
            { name: 'Landing Page Website', price: '₹4,999' },
            { name: 'Business Website', price: '₹9,999' },
            { name: 'Corporate Website', price: '₹19,999' },
            { name: 'E-Commerce Website', price: '₹24,999' },
            { name: 'Custom Web Application', price: '₹49,999' },
            { name: 'Customer Portal / Dashboard', price: '₹29,999' },
            { name: 'Learning Management System (LMS)', price: '₹79,999' },
            { name: 'ERP / CRM Solution', price: '₹99,999' },
            { name: 'SaaS Platform Development', price: '₹1,49,999' },
        ],
    },
    {
        id: 'mobile-apps',
        title: 'Mobile App Development',
        subtitle: 'Native and cross-platform mobile solutions',
        services: [
            { name: 'Android Application', price: '₹39,999' },
            { name: 'iOS Application', price: '₹59,999' },
            { name: 'Cross-Platform App', price: '₹79,999' },
            { name: 'Enterprise Mobile Solution', price: '₹1,49,999' },
        ],
    },
    {
        id: 'ai-automation',
        title: 'AI & Automation',
        subtitle: 'Intelligent solutions for modern businesses',
        services: [
            { name: 'AI Chatbot Integration', price: '₹14,999' },
            { name: 'AI Workflow Automation', price: '₹24,999' },
            { name: 'Custom AI Solutions', price: '₹49,999' },
            { name: 'AI-Powered Business Applications', price: '₹99,999' },
        ],
    },
    {
        id: 'software-solutions',
        title: 'Software Solutions',
        subtitle: 'Custom software for every industry',
        services: [
            { name: 'Custom Software Development', price: '₹49,999' },
            { name: 'Inventory Management System', price: '₹49,999' },
            { name: 'Billing & POS System', price: '₹39,999' },
            { name: 'Hospital Management System', price: '₹99,999' },
            { name: 'School/College Management System', price: '₹79,999' },
            { name: 'HR & Payroll System', price: '₹79,999' },
            { name: 'Appointment Booking System', price: '₹24,999' },
        ],
    },
    {
        id: 'cloud-devops',
        title: 'Cloud & DevOps',
        subtitle: 'Scalable infrastructure and deployment',
        services: [
            { name: 'Cloud Deployment', price: '₹9,999' },
            { name: 'Server Setup & Configuration', price: '₹14,999' },
            { name: 'CI/CD Pipeline Setup', price: '₹24,999' },
            { name: 'Docker & Kubernetes Deployment', price: '₹39,999' },
            { name: 'Website Migration', price: '₹9,999' },
        ],
    },
    {
        id: 'api-integrations',
        title: 'API & Integrations',
        subtitle: 'Seamless connectivity and automation',
        services: [
            { name: 'REST API Development', price: '₹14,999' },
            { name: 'Third-Party API Integration', price: '₹9,999' },
            { name: 'Payment Gateway Integration', price: '₹4,999' },
            { name: 'WhatsApp API Integration', price: '₹14,999' },
            { name: 'SMS/Email Integration', price: '₹7,999' },
        ],
    },
    {
        id: 'uiux-design',
        title: 'UI/UX & Design',
        subtitle: 'Beautiful, user-centric design',
        services: [
            { name: 'Logo Design', price: '₹999' },
            { name: 'UI/UX Design', price: '₹9,999' },
            { name: 'Complete Product Design', price: '₹24,999' },
            { name: 'Design System Creation', price: '₹39,999' },
        ],
    },
    {
        id: 'cyber-security',
        title: 'Cyber Security',
        subtitle: 'Protect your digital assets',
        services: [
            { name: 'Security Audit', price: '₹14,999' },
            { name: 'Penetration Testing', price: '₹24,999' },
            { name: 'Vulnerability Assessment', price: '₹19,999' },
            { name: 'Secure Code Review', price: '₹24,999' },
        ],
    },
    {
        id: 'support-maintenance',
        title: 'Support & Maintenance',
        subtitle: 'Keep your systems running smoothly',
        services: [
            { name: 'Website Maintenance', price: '₹999 / month' },
            { name: 'Application Maintenance', price: '₹2,999 / month' },
            { name: 'Annual Maintenance Contract (AMC)', price: '₹9,999 / year' },
            { name: 'Dedicated Developer', price: '₹25,000 / month' },
        ],
    },
];

// ─── ZIGO DIGITAL — Marketing Services ───────────────────────────────────────

export const marketingServices: ServiceCategory[] = [
    {
        id: 'meta-ads',
        title: 'Meta Advertising',
        subtitle: 'Facebook & Instagram marketing',
        services: [
            { name: 'Meta Business Manager Setup', price: '₹3,000' },
            { name: 'Meta Ads Account Setup', price: '₹5,000' },
            { name: 'Facebook Page Optimization', price: '₹2,000' },
            { name: 'Instagram Business Setup', price: '₹2,000' },
            { name: 'Meta Pixel Setup', price: '₹5,000' },
            { name: 'Conversion API Setup', price: '₹5,000' },
            { name: 'Lead Generation Campaign', price: '₹10,000/month' },
            { name: 'Website Traffic Campaign', price: '₹10,000/month' },
            { name: 'Brand Awareness Campaign', price: '₹10,000/month' },
            { name: 'Sales & Conversion Campaign', price: '₹15,000/month' },
            { name: 'WhatsApp Ads', price: '₹10,000/month' },
            { name: 'Dynamic Product Ads', price: '₹20,000/month' },
            { name: 'Remarketing Campaign', price: '₹15,000/month' },
        ],
    },
    {
        id: 'google-ads',
        title: 'Google Advertising',
        subtitle: 'Search, display & video ads',
        services: [
            { name: 'Google Ads Account Setup', price: '₹7,500' },
            { name: 'Google Analytics (GA4) Setup', price: '₹5,000' },
            { name: 'Google Tag Manager Setup', price: '₹5,000' },
            { name: 'Search Ads', price: '₹15,000/month' },
            { name: 'Display Ads', price: '₹15,000/month' },
            { name: 'Shopping Ads', price: '₹20,000/month' },
            { name: 'Performance Max Campaign', price: '₹20,000/month' },
            { name: 'YouTube Ads', price: '₹15,000/month' },
            { name: 'Local Business Ads', price: '₹12,000/month' },
        ],
    },
    {
        id: 'linkedin-ads',
        title: 'LinkedIn Advertising',
        subtitle: 'B2B professional marketing',
        services: [
            { name: 'LinkedIn Ads Setup', price: '₹5,000' },
            { name: 'Lead Generation Ads', price: '₹20,000/month' },
            { name: 'Website Traffic Ads', price: '₹20,000/month' },
            { name: 'Brand Awareness Ads', price: '₹20,000/month' },
            { name: 'Recruitment Campaigns', price: '₹25,000/month' },
        ],
    },
    {
        id: 'ott-audio',
        title: 'OTT & Audio Advertising',
        subtitle: 'Streaming platforms and audio ads',
        services: [
            { name: 'Spotify Ads', price: '₹20,000/month' },
            { name: 'JioSaavn Ads', price: '₹20,000/month' },
            { name: 'Gaana Ads', price: '₹20,000/month' },
            { name: 'Disney+ Hotstar Ads', price: '₹30,000/month' },
            { name: 'Sony LIV Ads', price: '₹30,000/month' },
            { name: 'Zee5 Ads', price: '₹30,000/month' },
            { name: 'MX Player Ads', price: '₹25,000/month' },
        ],
    },
    {
        id: 'influencer',
        title: 'Influencer Marketing',
        subtitle: 'Strategic influencer partnerships',
        services: [
            { name: 'Nano Influencer Campaign', price: '₹10,000 onwards' },
            { name: 'Micro Influencer Campaign', price: '₹20,000 onwards' },
            { name: 'Macro Influencer Campaign', price: '₹50,000 onwards' },
            { name: 'Celebrity Campaign', price: 'Custom Quote' },
            { name: 'UGC Creator Campaign', price: '₹15,000 onwards' },
        ],
    },
    {
        id: 'offline-ads',
        title: 'Offline Advertising',
        subtitle: 'Traditional media and out-of-home',
        services: [
            { name: 'Newspaper Advertisement', price: '₹10,000 onwards' },
            { name: 'Magazine Advertisement', price: '₹15,000 onwards' },
            { name: 'Radio Advertisement', price: '₹25,000 onwards' },
            { name: 'Television Advertisement', price: '₹1,00,000 onwards' },
            { name: 'Billboard/Hoarding', price: '₹25,000 onwards' },
            { name: 'Bus Branding', price: '₹40,000 onwards' },
            { name: 'Metro Branding', price: '₹1,50,000 onwards' },
            { name: 'Railway Station Branding', price: '₹2,00,000 onwards' },
            { name: 'Airport Advertising', price: '₹5,00,000 onwards' },
            { name: 'Mall Branding', price: '₹1,00,000 onwards' },
            { name: 'Cinema Advertising', price: '₹50,000 onwards' },
            { name: 'LED Screen Advertising', price: '₹25,000 onwards' },
        ],
    },
];

// ─── ZIGO DIGITAL — Performance Plans ────────────────────────────────────────

export const performancePlans = [
    { name: 'Starter', price: '₹10,000', features: ['Basic campaign management', 'Weekly reports'] },
    { name: 'Growth', price: '₹20,000', features: ['Advanced targeting', 'A/B testing', 'Creative design'] },
    { name: 'Professional', price: '₹35,000', features: ['Full strategy', 'Competitor research', 'Monthly reviews'] },
    { name: 'Enterprise', price: '₹50,000+', features: ['Custom solutions', 'Dedicated team', 'ROI analysis'] },
];

export const campaignInclusions = [
    'Campaign Strategy',
    'Market & Competitor Research',
    'Audience Targeting',
    'Ad Copywriting',
    'Creative Design',
    'Video Ad Creation',
    'Pixel & Conversion Tracking',
    'Landing Page Review',
    'A/B Testing',
    'Daily Campaign Monitoring',
    'Budget Optimization',
    'Lead Quality Optimization',
    'Weekly Reports',
    'Monthly Performance Report',
    'ROAS & ROI Analysis',
];

// ─── JM CREATIONS — Complete Service Portfolio ────────────────────────────────

export const jmServices: ServiceCategory[] = [
    {
        id: 'jm-business-registration',
        title: 'Business Registration & Government Services',
        subtitle: 'Compliance, licensing & legal formations',
        services: [
            { name: 'MSME (Udyam) Registration', price: '₹2,000' },
            { name: 'GST Registration', price: '₹2,500' },
            { name: 'PAN & TAN Registration', price: '₹2,000' },
            { name: 'FSSAI Registration / License', price: '₹3,500' },
            { name: 'Shop & Establishment Registration', price: '₹3,000' },
            { name: 'Trade License', price: '₹5,000' },
            { name: 'Professional Tax Registration', price: '₹3,000' },
            { name: 'EPF & ESI Registration', price: '₹5,000' },
            { name: 'Import Export Code (IEC)', price: '₹4,000' },
            { name: 'Digital Signature Certificate (DSC)', price: '₹3,500' },
            { name: 'LLP Registration', price: '₹25,000 onwards' },
            { name: 'Private Limited Company Registration', price: '₹35,000 onwards' },
            { name: 'OPC Registration', price: '₹30,000 onwards' },
            { name: 'Partnership Firm Registration', price: '₹10,000 onwards' },
            { name: 'Trust Registration', price: '₹20,000 onwards' },
            { name: 'Society Registration', price: '₹20,000 onwards' },
            { name: 'Section 8 Company Registration', price: '₹35,000 onwards' },
            { name: 'Trademark Registration', price: '₹8,000 onwards' },
            { name: 'Copyright Registration', price: '₹8,000 onwards' },
            { name: 'Patent Filing Assistance', price: '₹25,000 onwards' },
            { name: 'ISO Certification', price: '₹8,000 onwards' },
            { name: 'Startup India Registration', price: '₹5,000 onwards' },
            { name: 'GeM Registration', price: '₹5,000 onwards' },
            { name: 'Tender Registration & Documentation', price: '₹10,000 onwards' },
            { name: 'Fire NOC Assistance', price: 'Custom Quote' },
            { name: 'Pollution Control License Assistance', price: 'Custom Quote' },
            { name: 'Factory License Assistance', price: '₹10,000 onwards' },
            { name: 'Labour License Assistance', price: '₹8,000 onwards' },
        ],
    },
    {
        id: 'jm-digital-marketing',
        title: 'Digital Marketing',
        subtitle: 'Full-spectrum online presence & growth',
        services: [
            { name: 'Social Media Management', price: '₹15,000/month' },
            { name: 'Social Media Handling', price: '₹8,000/month' },
            { name: 'Meta Ads Management', price: '₹5,000/month' },
            { name: 'Google Ads Management', price: '₹7,500/month' },
            { name: 'SEO', price: '₹10,000/month' },
            { name: 'Local SEO', price: '₹5,000/month' },
            { name: 'WhatsApp Marketing', price: '₹3,000 onwards' },
            { name: 'Email Marketing', price: '₹3,000 onwards' },
            { name: 'SMS Marketing', price: '₹2,500 onwards' },
            { name: 'Content Marketing', price: '₹5,000/month' },
            { name: 'Lead Generation', price: '₹8,000 onwards' },
            { name: 'Influencer Marketing', price: 'Custom Quote' },
            { name: 'YouTube Marketing', price: '₹8,000/month' },
            { name: 'LinkedIn Marketing', price: '₹8,000/month' },
            { name: 'Social Media Audit', price: '₹5,000' },
        ],
    },
    {
        id: 'jm-branding-design',
        title: 'Branding & Graphic Design',
        subtitle: 'Visual identity & creative assets',
        services: [
            { name: 'Logo Design', price: '₹3,000' },
            { name: 'Brand Identity', price: '₹10,000' },
            { name: 'Company Profile', price: '₹7,500' },
            { name: 'Brochure Design', price: '₹3,500' },
            { name: 'Catalogue Design', price: '₹5,000' },
            { name: 'Packaging Design', price: '₹5,000' },
            { name: 'Business Card Design', price: '₹1,000' },
            { name: 'Letterhead Design', price: '₹800' },
            { name: 'Invoice Design', price: '₹800' },
            { name: 'Social Media Poster', price: '₹500' },
            { name: 'Premium Creative', price: '₹1,000' },
            { name: 'Banner / Flex Design', price: '₹1,500' },
            { name: 'Presentation Design', price: '₹3,000' },
            { name: 'Menu Design', price: '₹2,000' },
            { name: 'Invitation Design', price: '₹1,500' },
        ],
    },
    {
        id: 'jm-video-production',
        title: 'Video Production',
        subtitle: 'Reels, corporate & promotional videos',
        services: [
            { name: 'Reel Editing', price: '₹800/video' },
            { name: 'Premium Reel', price: '₹1,500/video' },
            { name: 'YouTube Video Editing', price: '₹2,500/video' },
            { name: 'Corporate Video', price: '₹5,000 onwards' },
            { name: 'Motion Graphics', price: '₹6,000 onwards' },
            { name: 'Promotional Video', price: '₹4,000 onwards' },
            { name: 'Product Video', price: '₹4,000 onwards' },
            { name: 'Thumbnail Design', price: '₹500' },
        ],
    },
    {
        id: 'jm-photography',
        title: 'Photography',
        subtitle: 'Professional photography for every need',
        services: [
            { name: 'Product Photography', price: '₹5,000' },
            { name: 'Corporate Photography', price: '₹8,000' },
            { name: 'Event Photography', price: '₹10,000' },
            { name: 'Food Photography', price: '₹5,000' },
            { name: 'Real Estate Photography', price: '₹10,000' },
        ],
    },
    {
        id: 'jm-website-tech',
        title: 'Website & Technology',
        subtitle: 'Web, apps, AI & custom software',
        services: [
            { name: 'Landing Page', price: '₹10,000' },
            { name: 'Business Website', price: '₹15,000' },
            { name: 'Portfolio Website', price: '₹12,000' },
            { name: 'E-Commerce Website', price: '₹35,000' },
            { name: 'Website Maintenance', price: '₹2,500/month' },
            { name: 'Domain & Hosting', price: 'Actual Cost' },
            { name: 'Mobile App Development', price: '₹75,000 onwards' },
            { name: 'CRM Development', price: '₹50,000 onwards' },
            { name: 'ERP Solutions', price: 'Custom Quote' },
            { name: 'Custom Software Development', price: 'Custom Quote' },
            { name: 'AI Chatbot Integration', price: '₹20,000 onwards' },
        ],
    },
    {
        id: 'jm-event-management',
        title: 'Event Management',
        subtitle: 'Turnkey event planning & execution',
        services: [
            { name: 'School Events', price: '₹20,000' },
            { name: 'College Events', price: '₹30,000' },
            { name: 'Corporate Events', price: '₹50,000' },
            { name: 'Product Launch', price: '₹75,000' },
            { name: 'Brand Activation', price: '₹1,00,000' },
            { name: 'Award Functions', price: '₹50,000' },
            { name: 'Conferences', price: '₹75,000' },
            { name: 'Exhibition Stall Management', price: '₹50,000' },
            { name: 'Celebrity Management', price: 'Custom Quote' },
            { name: 'Influencer Event Management', price: 'Custom Quote' },
        ],
    },
    {
        id: 'jm-printing',
        title: 'Printing Solutions',
        subtitle: 'Quality print for business & branding',
        services: [
            { name: 'Visiting Cards', price: '₹500' },
            { name: 'Flyers', price: '₹2,000' },
            { name: 'Brochures', price: '₹3,000' },
            { name: 'Stickers', price: '₹1,500' },
            { name: 'Flex Printing', price: '₹15/sq.ft' },
            { name: 'Sign Boards', price: 'Custom Quote' },
            { name: 'ID Cards', price: '₹100/card' },
            { name: 'Certificates', price: '₹50/piece' },
            { name: 'Corporate Stationery', price: 'Custom Quote' },
        ],
    },
    {
        id: 'jm-consulting',
        title: 'Business Consulting & Growth Solutions',
        subtitle: 'Strategy, planning & startup mentorship',
        services: [
            { name: 'Business Consultation', price: '₹2,000/hour' },
            { name: 'Startup Consultation', price: '₹5,000' },
            { name: 'Marketing Strategy', price: '₹7,500' },
            { name: 'Sales Strategy', price: '₹10,000' },
            { name: 'Business Growth Planning', price: '₹10,000' },
            { name: 'Business Model Development', price: '₹15,000' },
            { name: 'Brand Positioning', price: '₹10,000' },
            { name: 'Market Research', price: '₹15,000' },
            { name: 'Business Plan', price: '₹20,000' },
            { name: 'Investor Pitch Deck', price: '₹15,000' },
            { name: 'Financial Projection', price: '₹15,000' },
            { name: 'Go-To-Market Strategy', price: '₹20,000' },
            { name: 'Product Launch Planning', price: '₹15,000' },
            { name: 'Franchise Development', price: '₹25,000' },
            { name: 'Business Expansion Planning', price: '₹20,000' },
            { name: 'Digital Transformation', price: '₹20,000' },
            { name: 'Process Automation', price: '₹25,000' },
            { name: 'SOP Development', price: '₹20,000' },
            { name: 'CRM & Sales Funnel Setup', price: '₹20,000' },
            { name: 'HR Consulting', price: '₹15,000' },
            { name: 'Team Training', price: '₹10,000/session' },
            { name: 'Business Audit', price: '₹15,000' },
            { name: 'KPI Development', price: '₹20,000' },
            { name: 'CSR Project Consulting', price: '₹25,000' },
            { name: 'Government Scheme Consulting', price: '₹5,000' },
            { name: 'Partnership Development', price: 'Custom Quote' },
            { name: 'Tender Proposal Consulting', price: '₹10,000 onwards' },
            { name: 'Project Management Consulting', price: '₹20,000' },
            { name: 'Entrepreneur Mentorship', price: '₹5,000/session' },
        ],
    },
    {
        id: 'jm-innovation',
        title: 'Business Innovation & Idea Development',
        subtitle: 'Startup ideation, validation & growth design',
        services: [
            { name: 'Startup Idea Validation', price: '₹10,000' },
            { name: 'Business Idea Development', price: '₹15,000' },
            { name: 'Product Development Strategy', price: '₹15,000' },
            { name: 'Revenue Model Design', price: '₹10,000' },
            { name: 'Pricing Strategy', price: '₹7,500' },
            { name: 'Subscription Model Design', price: '₹10,000' },
            { name: 'Business Diversification', price: '₹15,000' },
            { name: 'AI Business Integration', price: '₹20,000' },
            { name: 'Automation Strategy', price: '₹15,000' },
            { name: 'Innovation Consulting', price: '₹20,000' },
        ],
    },
];

// ─── JM CREATIONS — Monthly Packages ─────────────────────────────────────────

export interface MonthlyPackage {
    name: string;
    price: string;
    period: string;
    highlight?: boolean;
    features: string[];
}

export const jmMonthlyPackages: MonthlyPackage[] = [
    {
        name: 'Basic',
        price: '₹15,000',
        period: 'month',
        features: [
            '30 Social Media Creatives',
            '8 Reels',
            'Social Media Management',
            'Content Calendar',
            'Monthly Report',
        ],
    },
    {
        name: 'Standard',
        price: '₹25,000',
        period: 'month',
        highlight: true,
        features: [
            '40 Creatives',
            '12 Reels',
            'Meta Ads Management',
            'SEO',
            'WhatsApp Marketing',
            'Monthly Analytics',
        ],
    },
    {
        name: 'Premium',
        price: '₹50,000',
        period: 'month',
        features: [
            'Unlimited Creatives',
            '20 Reels',
            'Meta & Google Ads',
            'SEO',
            'Website Maintenance',
            'Lead Generation',
            'Dedicated Account Manager',
            'Monthly Strategy Meeting',
        ],
    },
];

// ─── JM CREATIONS — Why Choose Us ────────────────────────────────────────────

export const jmWhyChoose = [
    '360° Business Solutions',
    'Business Registration & Government Compliance',
    'Digital Marketing',
    'Branding & Creative Design',
    'Website & App Development',
    'AI & Automation Solutions',
    'Event Management',
    'Business Consulting',
    'Startup Mentorship',
    'Business Growth Strategy',
    'Printing Solutions',
    'Corporate & CSR Services',
    'One Dedicated Team for End-to-End Business Growth',
];
