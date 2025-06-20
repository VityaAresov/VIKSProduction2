// Simple services data structure
export interface PricingPlan {
  name: string
  price?: string
  features: string[]
  highlighted?: boolean
}

export interface Service {
  slug: string
  title: string
  description: string
  pricingPlans: PricingPlan[]
}

const services: Service[] = [
  {
    slug: 'video-production',
    title: 'Video Production',
    description: 'Professional video production services from concept to final delivery.',
    pricingPlans: [
      {
        name: 'Starter',
        price: '$1,500',
        features: [
          'Up to 5 hours of filming',
          '3 edited social media videos',
          'Basic editing and color correction',
          'Platform-optimized delivery'
        ]
      },
      {
        name: 'Professional',
        price: '$2,750',
        highlighted: true,
        features: [
          'Up to 15 hours of filming',
          '6 fully edited videos',
          'Concept support & storytelling',
          'Branded visuals and exports',
          'Motion graphics included'
        ]
      },
      {
        name: 'Premium',
        price: '$4,500',
        features: [
          'Up to 30 hours of production',
          '10+ high-production videos',
          'Advanced editing and effects',
          'Full usage rights',
          'Dedicated project manager'
        ]
      },
      {
        name: 'Custom',
        features: [
          'Flexible hours (minimum 2)',
          'Custom video formats',
          'Any level of post-production',
          'Multi-platform optimization',
          'Ongoing support available'
        ]
      }
    ]
  },
  {
    slug: 'social-media-management',
    title: 'Social Media Management',
    description: 'Complete social media management to grow your online presence.',
    pricingPlans: [
      {
        name: 'Starter',
        price: '$1,200/mo',
        features: [
          '2 social media platforms',
          '12 posts per month',
          'Basic graphics and captions',
          'Monthly analytics report',
          'Community management'
        ]
      },
      {
        name: 'Growth',
        price: '$2,200/mo',
        highlighted: true,
        features: [
          '4 social media platforms',
          '20 posts per month',
          'Custom graphics and videos',
          'Stories and Reels creation',
          'Paid ad management included',
          'Weekly optimization'
        ]
      },
      {
        name: 'Enterprise',
        price: '$3,500/mo',
        features: [
          'All major platforms',
          '30+ posts per month',
          'Premium video content',
          'Influencer collaborations',
          'Advanced campaigns',
          'Dedicated account manager'
        ]
      }
    ]
  },
  {
    slug: 'web-development',
    title: 'Web Development',
    description: 'Custom websites and web applications built for your business needs.',
    pricingPlans: [
      {
        name: 'Landing Page',
        price: '$2,500',
        features: [
          'Single page website',
          'Mobile responsive design',
          'Contact form integration',
          'Basic SEO optimization',
          '30 days of support'
        ]
      },
      {
        name: 'Business Website',
        price: '$5,500',
        highlighted: true,
        features: [
          'Up to 10 pages',
          'Custom design and development',
          'CMS integration',
          'Advanced SEO setup',
          'Analytics and tracking',
          '90 days of support'
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
          '6 months of support'
        ]
      },
      {
        name: 'Custom App',
        features: [
          'Custom functionality',
          'Database integration',
          'User authentication',
          'API development',
          'Scalable architecture',
          'Ongoing maintenance'
        ]
      }
    ]
  }
]

export default services