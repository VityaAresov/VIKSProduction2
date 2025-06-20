// src/data/services.ts

export interface Feature {
  title: string
  description: string
}

export interface PricingPlan {
  name: string
  price?: string
  features: string[]
  highlighted?: boolean
}

export interface Service {
  slug: string

  // Section 1 (Header)
  tagline: string
  title: string
  headerImg: string
  headerDescription: string

  // Section 2 (Layout)
  layoutImg: string
  layoutTitle: string
  layoutDescription: string
  layoutFeatures: Feature[]

  // Section 3 (Creative Direction)
  creativeImg: string
  creativeTitle: string
  creativeDescription: string
  creativeFeatures: Feature[]

  // Section 4 (Post Production)
  postProdImg: string
  postProdTitle: string
  postProdDescription: string
  postProdFeatures: Feature[]

  // Section 5 (Pricing)
  pricingTitle: string
  pricingPlans: PricingPlan[]
}

const services: Service[] = [
  {
    slug: 'video-production',
    tagline: 'Engage and Inspire your Audience',
    title: 'Video Production',
    headerImg: '/images/services/video-header.png',
    headerDescription:
      'End‑to‑end video production: from concept and scripting through shooting, editing, color grading and final delivery. We create compelling visual stories that captivate your audience and drive results.',
    layoutImg: '/images/services/video-layout.png',
    layoutTitle: 'Our Video Production Process',
    layoutDescription:
      'We handle every stage of your video project with professional crews and cutting‑edge equipment to deliver cinematic quality content.',
    layoutFeatures: [
      {
        title: 'Scriptwriting & Storyboarding',
        description:
          'We develop compelling scripts and visual plans to ensure clear execution and powerful storytelling.',
      },
      {
        title: 'On‑location & Studio Shoots',
        description:
          'Professional filming on location or in our studio with state-of-the-art equipment and experienced crews.',
      },
      {
        title: 'Editing & Motion Graphics',
        description:
          'Expert post-production including editing, motion graphics, and visual effects for dynamic results.',
      },
      {
        title: 'Sound Design & Music',
        description:
          'Professional audio production and licensed music to create immersive viewing experiences.',
      },
    ],
    creativeImg: '/images/services/video-creative.png',
    creativeTitle: 'Creative Direction',
    creativeDescription:
      'Our creative directors ensure every frame serves your marketing goals and brand message with strategic visual storytelling.',
    creativeFeatures: [
      {
        title: 'Concept Development',
        description: 'Strategic ideation and concept refinement before production begins.',
      },
      {
        title: 'Visual Storyboarding',
        description: 'Detailed visual planning of key scenes and camera movements.',
      },
      {
        title: 'Art Direction',
        description: 'Complete visual style control throughout the production process.',
      },
    ],
    postProdImg: '/images/services/video-postprod.png',
    postProdTitle: 'Post Production',
    postProdDescription:
      'Final refinement through editing, color grading, sound design and special effects to achieve the perfect result.',
    postProdFeatures: [
      {
        title: 'Professional Editing',
        description: 'Precise editing with attention to pacing, rhythm, and narrative flow.',
      },
      {
        title: 'Color Grading',
        description:
          'Professional color correction and grading for consistent visual style.',
      },
      {
        title: 'Sound Design',
        description: 'Creating atmospheric soundscapes and professional audio mixing.',
      },
    ],
    pricingTitle: 'Video Production Pricing',
    pricingPlans: [
      {
        name: 'Starter',
        price: '$1,500',
        features: [
          'Up to 5 hours of filming',
          '3 edited social media videos (Reels, Shorts, Stories)',
          'Basic editing (color, cut, captions)',
          'Platform-optimized delivery (9:16 / 1:1)',
        ],
      },
      {
        name: 'Professional',
        price: '$2,750',
        highlighted: true,
        features: [
          'Up to 15 hours of filming',
          '6 fully edited videos in various formats',
          'Concept support & storytelling guidance',
          'Branded visuals, social + ad-ready exports',
          'Motion graphics and transitions',
        ],
      },
      {
        name: 'Premium',
        price: '$4,500',
        features: [
          'Up to 30 hours of production',
          '10+ high‑production videos',
          'Motion graphics, subtitles, advanced editing',
          'Visual direction, brand pack integration',
          'Full usage rights and raw footage',
        ],
      },
      {
        name: 'Custom',
        features: [
          'Any number of hours (minimum 2 hours)',
          'Custom video count and formats',
          'Any level of post‑production complexity',
          'Multi-platform optimization',
          'Dedicated project manager',
        ],
      },
    ],
  },

  {
    slug: 'social-media-management',
    tagline: 'Turn Followers into Customers',
    title: 'Social Media Management',
    headerImg: '/images/services/smm-header.png',
    headerDescription: 
      'Complete social media management services that build engaged communities, drive traffic, and convert followers into loyal customers through strategic content and targeted campaigns.',
    layoutImg: '/images/services/smm-layout.png',
    layoutTitle: 'Our SMM Strategy',
    layoutDescription: 
      'We plan, create, launch and analyze comprehensive social media campaigns that align with your business goals and target audience.',
    layoutFeatures: [
      { 
        title: 'Content Strategy & Planning', 
        description: 'Strategic content calendars with engaging posts tailored to your audience and platform algorithms.' 
      },
      { 
        title: 'Visual Content Creation', 
        description: 'Eye-catching graphics, Reels, Stories, and carousel posts designed to maximize engagement.' 
      },
      { 
        title: 'Paid Social Campaigns', 
        description: 'Targeted advertising campaigns across platforms to reach your ideal customers and drive conversions.' 
      },
      { 
        title: 'Community Management', 
        description: 'Active engagement with your audience, responding to comments, messages, and building relationships.' 
      },
    ],
    creativeImg: '/images/services/smm-creative.png',
    creativeTitle: 'Creative Strategy',
    creativeDescription: 
      'Our creative team develops unique brand voices and visual identities that stand out in crowded social feeds and resonate with your target audience.',
    creativeFeatures: [
      { 
        title: 'Trend Research & Analysis', 
        description: 'Staying ahead of social media trends and incorporating them into your content strategy.' 
      },
      { 
        title: 'Brand Voice & Tone', 
        description: 'Developing consistent messaging that reflects your brand personality across all platforms.' 
      },
      { 
        title: 'Hashtag & SEO Strategy', 
        description: 'Research-driven hashtag strategies and social SEO optimization for maximum discoverability.' 
      },
    ],
    postProdImg: '/images/services/smm-analytics.png',
    postProdTitle: 'Analytics & Optimization',
    postProdDescription: 
      'Comprehensive tracking and analysis of your social media performance with actionable insights and continuous optimization.',
    postProdFeatures: [
      { 
        title: 'Performance Dashboards', 
        description: 'Real-time analytics dashboards showing key metrics, engagement rates, and ROI tracking.' 
      },
      { 
        title: 'A/B Testing', 
        description: 'Continuous testing of content types, posting times, and ad creatives for optimal performance.' 
      },
      { 
        title: 'Monthly Reports & Insights', 
        description: 'Detailed monthly reports with actionable insights and strategy recommendations.' 
      },
    ],
    pricingTitle: 'Social Media Management Pricing',
    pricingPlans: [
      { 
        name: 'Starter', 
        price: '$1,200/mo', 
        features: [
          '2 social media platforms',
          '12 posts per month',
          'Basic graphics and captions',
          'Monthly analytics report',
          'Community management (business hours)',
        ] 
      },
      { 
        name: 'Growth', 
        highlighted: true, 
        price: '$2,200/mo', 
        features: [
          '4 social media platforms',
          '20 posts per month',
          'Custom graphics and video content',
          'Stories and Reels creation',
          'Paid ad management ($500 ad spend included)',
          'Weekly analytics and optimization',
        ] 
      },
      { 
        name: 'Enterprise', 
        price: '$3,500/mo', 
        features: [
          'All major social platforms',
          '30+ posts per month',
          'Premium video and motion graphics',
          'Influencer collaboration management',
          'Advanced paid campaigns ($1000 ad spend included)',
          'Dedicated account manager',
          'Real-time analytics dashboard',
        ] 
      },
    ],
  },

  {
    slug: 'web-development',
    tagline: 'Build Your Digital Presence',
    title: 'Web Development',
    headerImg: '/images/services/webdev-header.png',
    headerDescription: 
      'Custom web development solutions that combine stunning design with powerful functionality. From landing pages to complex web applications, we build digital experiences that convert.',
    layoutImg: '/images/services/webdev-layout.png',
    layoutTitle: 'Development Process',
    layoutDescription: 
      'Our development process ensures your website is fast, secure, mobile-responsive, and optimized for search engines and conversions.',
    layoutFeatures: [
      { 
        title: 'Custom Design & UX', 
        description: 'Unique designs tailored to your brand with user experience optimization for maximum conversions.' 
      },
      { 
        title: 'Responsive Development', 
        description: 'Mobile-first development ensuring perfect functionality across all devices and screen sizes.' 
      },
      { 
        title: 'CMS Integration', 
        description: 'Easy-to-use content management systems that allow you to update your site independently.' 
      },
      { 
        title: 'Performance Optimization', 
        description: 'Speed optimization, SEO implementation, and technical performance enhancements.' 
      },
    ],
    creativeImg: '/images/services/webdev-creative.png',
    creativeTitle: 'Design & User Experience',
    creativeDescription: 
      'Our design team creates visually stunning and highly functional websites that reflect your brand and guide users toward your business goals.',
    creativeFeatures: [
      { 
        title: 'UI/UX Design', 
        description: 'User-centered design approach with wireframing, prototyping, and usability testing.' 
      },
      { 
        title: 'Brand Integration', 
        description: 'Seamless integration of your brand identity into every aspect of the website design.' 
      },
      { 
        title: 'Conversion Optimization', 
        description: 'Strategic placement of calls-to-action and conversion elements throughout the user journey.' 
      },
    ],
    postProdImg: '/images/services/webdev-maintenance.png',
    postProdTitle: 'Launch & Maintenance',
    postProdDescription: 
      'Comprehensive launch support and ongoing maintenance to ensure your website stays secure, updated, and performing at its best.',
    postProdFeatures: [
      { 
        title: 'Quality Assurance', 
        description: 'Thorough testing across browsers, devices, and performance metrics before launch.' 
      },
      { 
        title: 'SEO Setup', 
        description: 'Complete on-page SEO optimization, analytics setup, and search engine submission.' 
      },
      { 
        title: 'Ongoing Support', 
        description: 'Regular updates, security monitoring, and technical support to keep your site running smoothly.' 
      },
    ],
    pricingTitle: 'Web Development Pricing',
    pricingPlans: [
      { 
        name: 'Landing Page', 
        price: '$2,500', 
        features: [
          'Single page website',
          'Mobile responsive design',
          'Contact form integration',
          'Basic SEO optimization',
          '30 days of support',
        ] 
      },
      { 
        name: 'Business Website', 
        highlighted: true, 
        price: '$5,500', 
        features: [
          'Up to 10 pages',
          'Custom design and development',
          'CMS integration',
          'Advanced SEO setup',
          'Analytics and tracking',
          '90 days of support',
        ] 
      },
      { 
        name: 'E-commerce', 
        price: '$8,500', 
        features: [
          'Full e-commerce functionality',
          'Product catalog management',
          'Payment gateway integration',
          'Inventory management',
          'Advanced analytics',
          '6 months of support',
        ] 
      },
      { 
        name: 'Custom Application', 
        features: [
          'Custom functionality development',
          'Database design and integration',
          'User authentication systems',
          'API development and integration',
          'Scalable architecture',
          'Ongoing maintenance available',
        ] 
      },
    ],
  },
]

export default services