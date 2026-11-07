export interface ServiceItem {
  id: string;
  category: string;
  title: string;
  shortDesc: string;
  description: string;
  image: string;
  highlights: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  deliverables: string[];
}

export interface CaseStudy {
  id: string;
  client: string;
  industry: string;
  challenge: string;
  strategy: string;
  results: {
    metric: string;
    change: string;
    context: string;
  }[];
  quote: {
    text: string;
    author: string;
    title: string;
    company: string;
  };
  tags: string[];
}

export interface PricingTier {
  id: string;
  name: string;
  tagline: string;
  price: number;
  period: string;
  isPopular?: boolean;
  idealFor: string;
  features: string[];
  timeline: string;
}

export interface AuditResult {
  score: number;
  speedScore: number;
  seoScore: number;
  metaScore: number;
  lcp: string;
  fid: string;
  cls: string;
  insights: {
    category: 'speed' | 'seo' | 'meta';
    status: 'pass' | 'warning' | 'critical';
    title: string;
    detail: string;
    recommendation: string;
  }[];
}
