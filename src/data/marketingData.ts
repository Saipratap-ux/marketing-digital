import { CaseStudy, PricingTier, ServiceItem } from '../types';
import heroImg from '../assets/images/hero_marketing_growth_1794054908165.jpg';
import socialAdImg from '../assets/images/social_ad_creative_showcase_1794054909795.jpg';
import seoImg from '../assets/images/seo_analytics_performance_1794054909624.jpg';
import portraitImg from '../assets/images/marketer_portrait_consultant_1794054908508.jpg';

export const HERO_IMAGE = heroImg;
export const SOCIAL_AD_IMAGE = socialAdImg;
export const SEO_IMAGE = seoImg;
export const CONSULTANT_PORTRAIT = portraitImg;

export const CLIENT_LOGOS = [
  { name: 'Aura Living', symbol: 'AUR' },
  { name: 'Kora Botanicals', symbol: 'KRA' },
  { name: 'SwiftFit Athletics', symbol: 'SFT' },
  { name: 'Lumina Tech', symbol: 'LUM' },
  { name: 'Vanguard Nutrition', symbol: 'VNG' },
  { name: 'Nordic Roast Co.', symbol: 'NRC' },
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'meta-ads',
    category: 'Paid Social Advertising',
    title: 'Facebook & Instagram Product Scaling',
    shortDesc: 'Stop burning budget on unoptimized ads. We deploy high-converting UGC creative funnels, Dynamic Product Ads, and Advantage+ Shopping setups that drive predictable orders.',
    description: 'We build end-to-end paid social growth systems specifically engineered for consumer products and e-commerce. From script-to-screen user-generated creative briefs and catalog segmentation to Meta Conversions API (CAPI) server tracking and aggressive bid scaling.',
    image: SOCIAL_AD_IMAGE,
    highlights: [
      'Advantage+ Shopping Campaigns (ASC) with custom creative exclusions',
      'Dynamic Product Ads (DPA) synced live with your catalog inventory',
      'High-velocity UGC & hook-rate creative testing pipeline',
      'Meta Conversions API (CAPI) setup with 9.2+ Event Quality Match score',
    ],
    metrics: [
      { label: 'Average ROAS Delivered', value: '3.8x' },
      { label: 'First-Order CAC Reduction', value: '-34%' },
      { label: 'Monthly Meta Spend Managed', value: '$450K+' },
    ],
    deliverables: [
      'Weekly refreshed hook and angle creative briefs',
      'Daily bid, budget, and audience scaling adjustments',
      'Full attribution and Cohort LTV tracking dashboard',
      'Direct Slack channel with your media buyer',
    ],
  },
  {
    id: 'seo-authority',
    category: 'Search Engine Optimization',
    title: 'Technical & Commercial Product SEO',
    shortDesc: 'Rank for high-intent transactional search queries where customers are holding credit cards, not just informational blog terms.',
    description: 'Organic search is your compounding growth engine. We restructure your store architecture, execute programmatic category SEO, fix crawl budget bottlenecks, and acquire authoritative digital PR backlinks that position your products at the top of Google.',
    image: SEO_IMAGE,
    highlights: [
      'Commercial keyword clustering mapped to high-intent product collections',
      'Schema.org product, review, and merchant rich snippet implementation',
      'Crawl depth minimization and faceted navigation canonicalization',
      'Editorial outreach and topically authoritative link acquisition',
    ],
    metrics: [
      { label: 'Organic Revenue Growth', value: '+185%' },
      { label: 'Page 1 Commercial Keywords', value: '2,400+' },
      { label: 'Zero-Click SERP Snippets', value: '340+' },
    ],
    deliverables: [
      'Comprehensive technical health audit & remediation roadmap',
      'On-page title, H1, meta, and collection content optimization',
      'Product structured data JSON-LD integration',
      'Monthly search performance & keyword rank tracking reports',
    ],
  },
  {
    id: 'website-boosting',
    category: 'Speed & Conversion Boosting',
    title: 'Sub-Second Store Boosting & Core Web Vitals',
    shortDesc: 'A 1-second delay in mobile page load cuts conversions by 20%. We shave 2–4 seconds off your load time and eliminate checkout friction.',
    description: 'Slow stores silently bleed ad dollars and get down-ranked by Google. We optimize your code, compress media assets, streamline Shopify/WordPress liquid bloat, and engineer an instantaneous mobile shopping experience that maximizes every paid and organic click.',
    image: HERO_IMAGE,
    highlights: [
      'Sub-second Largest Contentful Paint (LCP < 1.0s) on mobile 4G',
      'Interaction to Next Paint (INP) and Cumulative Layout Shift (CLS) fixes',
      'JavaScript and CSS bundle stripping without breaking tracking scripts',
      'Checkout and cart abandonment friction removal (CRO)',
    ],
    metrics: [
      { label: 'Average Load Time Drop', value: '-68%' },
      { label: 'Mobile Conversion Lift', value: '+28.4%' },
      { label: 'Google PageSpeed Score', value: '96/100' },
    ],
    deliverables: [
      'Pre-and-post Core Web Vitals benchmarking report',
      'Redundant third-party script deferral & critical path optimization',
      'Next-gen image delivery pipeline (AVIF/WebP + responsive srcset)',
      'Mobile checkout UX audit & one-click optimization checklist',
    ],
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'lumina-wellness',
    client: 'Lumina Wellness',
    industry: 'Consumer Wellness & Devices',
    challenge: 'Struggling with rising Meta ad costs and low product page conversion on mobile devices (average 3.8s load time). Customer acquisition cost had spiked to $62 against a $95 retail price.',
    strategy: 'Rebuilt Instagram Reels creative strategy with authentic UGC hooks, implemented Server-side Meta CAPI, and executed a complete Shopify theme speed boosting sprint reducing load to 0.78s.',
    results: [
      { metric: '4.2x ROAS', change: '+128%', context: 'Scaled Meta spend from $8k/mo to $65k/mo while maintaining high return' },
      { metric: '0.78s Load Time', change: '-74%', context: 'Mobile page load dropped from 3.8s to sub-second on LTE networks' },
      { metric: '$36.50 CAC', change: '-41%', context: 'Blended acquisition cost dropped while conversion rate jumped to 3.8%' },
    ],
    quote: {
      text: 'Our Meta campaigns were barely breaking even until Marc restructured our product funnels and boosted our store speed. Our revenue tripled in 4 months.',
      author: 'Elena Rostova',
      title: 'Founder & CEO',
      company: 'Lumina Wellness',
    },
    tags: ['Meta Ads Scaling', 'Speed Acceleration', 'Shopify Plus'],
  },
  {
    id: 'nordic-living',
    client: 'Nordic Essentials',
    industry: 'Modern Home & Lifestyle',
    challenge: 'Over-reliant on expensive paid ads with zero organic presence for their primary home accessory product line. Rank dropped on Google due to poor Core Web Vitals.',
    strategy: 'Engineered a programmatic collection SEO architecture targeting 120+ commercial search intents, paired with Dynamic Product Ads retargeting on Facebook and Instagram.',
    results: [
      { metric: '+210% Organic Traffic', change: '+210%', context: 'Secured top 3 positions for 42 high-intent product search terms' },
      { metric: '$240K Organic Revenue', change: '+180%', context: 'Monthly revenue generated strictly from organic non-branded search' },
      { metric: '98 Mobile Speed Score', change: '+52 pts', context: 'Google PageSpeed score upgraded from 46 to 98/100' },
    ],
    quote: {
      text: 'Having a marketer who actually understands both technical SEO and aggressive Facebook creative is rare. The results speak directly on our bottom line.',
      author: 'Soren Lindqvist',
      title: 'Head of Growth',
      company: 'Nordic Essentials',
    },
    tags: ['E-Commerce SEO', 'Dynamic Catalog Ads', 'Core Web Vitals'],
  },
  {
    id: 'swiftfit-gear',
    client: 'SwiftFit Apparel',
    industry: 'Performance Athleticwear',
    challenge: 'High ad traffic from Instagram stories was bouncing before product pages loaded. Mobile bounce rate exceeded 64% with an ad return hovering at 1.4x ROAS.',
    strategy: 'Stripped 14 unused Shopify apps, implemented lazy-loading and critical CSS, and redesigned the ad-to-landing-page scent match for Facebook and Instagram video ads.',
    results: [
      { metric: '3.6x ROAS', change: '+157%', context: 'Facebook & Instagram campaigns scaled from breakeven to top profit driver' },
      { metric: '-62% Bounce Rate', change: '-62%', context: 'Mobile visitors remained engaged and viewed 2.8x more product pages' },
      { metric: '+34% Checkout Rate', change: '+34%', context: 'Direct lift in completed mobile purchases within the first 30 days' },
    ],
    quote: {
      text: 'The website boosting alone unlocked tens of thousands in trapped revenue from our existing ad spend. Unbelievable precision.',
      author: 'Marcus Vance-Wu',
      title: 'Operations Director',
      company: 'SwiftFit Apparel',
    },
    tags: ['Speed Boosting', 'Instagram Reels Ads', 'Checkout Optimization'],
  },
];

export const PRICING_TIERS: PricingTier[] = [
  {
    id: 'meta-sprint',
    name: 'Paid Social Product Sprint',
    tagline: 'Scale Facebook & Instagram product sales with proven ROAS systems.',
    price: 1850,
    period: '/month',
    idealFor: 'Direct-to-consumer product brands spending $3k–$30k/mo on Meta.',
    features: [
      'Full Meta Ads account management (Facebook & Instagram)',
      'Custom Advantage+ Shopping & Retargeting campaign architecture',
      'Weekly UGC creative strategy briefs & hook scripting',
      'Meta Conversions API (CAPI) & Pixel tracking health audit',
      'Daily ROAS, bid, and budget optimization',
      'Live performance tracking dashboard + Bi-weekly video strategy calls',
    ],
    timeline: 'Campaigns live in 5 business days',
  },
  {
    id: 'full-growth',
    name: 'Full-Funnel Growth Partner',
    tagline: 'The complete trifecta: Paid Social, Organic Search SEO & Sub-Second Store Speed.',
    price: 2950,
    period: '/month',
    isPopular: true,
    idealFor: 'Brands that want sustainable, compounding dominance across both paid and organic channels.',
    features: [
      'Everything in Paid Social Product Sprint',
      'Full Technical & On-Page SEO optimization for product collections',
      'Complete Website Speed Boosting (Sub-second mobile LCP)',
      'Rich Schema.org Product structured data markup',
      'High-authority backlink building & digital PR outreach',
      'Conversion Rate Optimization (CRO) tests on checkout funnels',
      'Dedicated private Slack channel with direct same-day response',
    ],
    timeline: 'Immediate onboarding with dedicated 90-day growth roadmap',
  },
  {
    id: 'seo-speed',
    name: 'SEO & Website Speed Booster',
    tagline: 'Rank higher on Google and eliminate store lag that kills mobile sales.',
    price: 1650,
    period: '/month',
    idealFor: 'Stores with good existing brand recognition that need organic traffic and speed.',
    features: [
      'Complete Core Web Vitals speed optimization (Mobile LCP < 1.0s)',
      'Code stripping, asset compression & third-party script deferral',
      'Commercial keyword clustering & collection page restructuring',
      'Google Search Console indexing fix & crawl budget optimization',
      'Schema product markup for Google Merchant shopping listings',
      'Monthly technical health and rank progression reporting',
    ],
    timeline: 'Initial speed boost completed within 7 days',
  },
];

export const FAQS = [
  {
    question: 'How do you approach Facebook and Instagram ads differently from typical agencies?',
    answer: 'Most agencies dump budget into generic broad audiences and rely on automated settings without creative strategy. We treat creative as the true targeting lever. We test high-converting hooks, produce detailed UGC briefs, maintain tight catalog feeds, and enforce Meta CAPI server-side tracking so the algorithm actually receives pristine conversion data.',
  },
  {
    question: 'Why is website boosting and speed so critical for digital marketing?',
    answer: 'When you pay for ad clicks from Facebook or Instagram, up to 40% of mobile users will bounce before the page loads if it takes longer than 3 seconds. Speed boosting directly decreases your bounce rate, increases Google organic rankings, and boosts your conversion rate without spending a single dollar more on media.',
  },
  {
    question: 'How long does it take to see results from SEO vs Meta Ads?',
    answer: 'Meta Ads deliver sales data and revenue within 24 to 72 hours of launch. Technical SEO and website boosting provide an instant lift in crawl efficiency and store responsiveness within 7 days, with meaningful organic keyword rank gains and traffic compounding over 60 to 90 days.',
  },
  {
    question: 'What e-commerce platforms do you support?',
    answer: 'We specialize in Shopify, Shopify Plus, WooCommerce, Magento/Adobe Commerce, BigCommerce, and custom Headless (Next.js / Hydrogen / Nuxt) web applications.',
  },
  {
    question: 'Do you require long-term contracts?',
    answer: 'No. We operate on transparent month-to-month retainers. We earn your business every 30 days based on verifiable metrics and profit delivered.',
  },
];
