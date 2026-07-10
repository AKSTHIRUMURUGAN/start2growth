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

