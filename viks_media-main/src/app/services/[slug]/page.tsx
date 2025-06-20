import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import services from '@/data/services';
import styles from './ServicePage.module.css';

interface ServicePageProps {
  params: {
    slug: string;
  };
}

// Service-specific content mapping
const serviceContent = {
  'video-production': {
    tagline: 'Video Production',
    title: 'Engage and Inspire your Audience',
    description: 'Video content is a powerful tool for capturing attention and conveying messages effectively. Our nationwide video production services range from concept development to final edits and post-production.',
    headerImage: '/images/services/placeholder-header.png',
    sections: [
      {
        title: 'Video Production',
        description: 'Video content is a powerful tool for capturing attention and conveying messages effectively. Our nationwide video production services range from concept development to final edits and post-production.',
        image: '/images/services/placeholder-layout.png',
        features: [
          { title: 'Promotional Videos', description: 'Lorem ipsum dolor sit amet consectetur. Mi sed vestibulum id quis donec sapien.' },
          { title: 'Explainer Videos', description: 'Lorem ipsum dolor sit amet consectetur. Mi sed vestibulum id quis donec sapien.' },
          { title: 'Client Testimonials', description: 'Lorem ipsum dolor sit amet consectetur. Mi sed vestibulum id quis donec sapien.' }
        ],
        imageFirst: false
      },
      {
        title: 'Creative Direction',
        description: 'We understand that great visuals require more than just technical skill; they need strategic vision. Our creative direction services ensure your photos and videos not only look amazing but also serve your broader marketing objectives.',
        image: '/images/services/placeholder-creative.png',
        features: [
          { title: 'Concept of Development', description: 'Lorem ipsum dolor sit amet consectetur. Mi sed vestibulum id quis donec sapien.' },
          { title: 'Storyboarding', description: 'Lorem ipsum dolor sit amet consectetur. Mi sed vestibulum id quis donec sapien.' },
          { title: 'Art Direction', description: 'Lorem ipsum dolor sit amet consectetur. Mi sed vestibulum id quis donec sapien.' }
        ],
        imageFirst: true
      },
      {
        title: 'Post Production',
        description: 'Photography and video post-production are essential for businesses to create effective and professional visual content that enhances brand perception and engagement. Polishing the content ensures that your message is clearly delivered.',
        image: '/images/services/placeholder-postprod.png',
        features: [
          { title: 'Editing', description: 'Lorem ipsum dolor sit amet consectetur. Mi sed vestibulum id quis donec sapien.' },
          { title: 'Color Grading', description: 'Lorem ipsum dolor sit amet consectetur. Mi sed vestibulum id quis donec sapien.' },
          { title: 'Sound Design', description: 'Lorem ipsum dolor sit amet consectetur. Mi sed vestibulum id quis donec sapien.' }
        ],
        imageFirst: false
      }
    ]
  },
  'social-media-management': {
    tagline: 'Social Media Management',
    title: 'Grow Your Social Presence',
    description: 'Complete social media management services to build your brand, engage your audience, and drive meaningful results across all major platforms.',
    headerImage: '/images/services/placeholder-header.png',
    sections: [
      {
        title: 'Content Strategy',
        description: 'We develop comprehensive content strategies that align with your brand voice and business objectives, ensuring consistent and engaging social media presence.',
        image: '/images/services/placeholder-layout.png',
        features: [
          { title: 'Content Planning', description: 'Strategic content calendars tailored to your audience and business goals.' },
          { title: 'Brand Voice Development', description: 'Consistent messaging that reflects your brand personality across platforms.' },
          { title: 'Audience Analysis', description: 'Deep insights into your target audience behavior and preferences.' }
        ],
        imageFirst: false
      },
      {
        title: 'Content Creation',
        description: 'Our creative team produces high-quality visual and written content that captures attention and drives engagement across all social media platforms.',
        image: '/images/services/placeholder-creative.png',
        features: [
          { title: 'Visual Design', description: 'Eye-catching graphics, photos, and videos optimized for each platform.' },
          { title: 'Copywriting', description: 'Compelling captions and copy that drive action and engagement.' },
          { title: 'Video Production', description: 'Short-form videos, stories, and reels that capture your audience.' }
        ],
        imageFirst: true
      },
      {
        title: 'Analytics & Optimization',
        description: 'We continuously monitor performance metrics and optimize your social media strategy to ensure maximum ROI and engagement growth.',
        image: '/images/services/placeholder-postprod.png',
        features: [
          { title: 'Performance Tracking', description: 'Detailed analytics and reporting on all key social media metrics.' },
          { title: 'A/B Testing', description: 'Continuous testing to optimize content performance and engagement.' },
          { title: 'Strategy Refinement', description: 'Regular strategy updates based on performance data and trends.' }
        ],
        imageFirst: false
      }
    ]
  },
  'web-development': {
    tagline: 'Web Development',
    title: 'Build Your Digital Foundation',
    description: 'Custom websites and web applications designed to deliver exceptional user experiences while driving business growth and conversions.',
    headerImage: '/images/services/placeholder-header.png',
    sections: [
      {
        title: 'Custom Web Development',
        description: 'We create custom websites and web applications tailored to your specific business needs, ensuring optimal performance and user experience.',
        image: '/images/services/placeholder-layout.png',
        features: [
          { title: 'Responsive Design', description: 'Websites that look and work perfectly on all devices and screen sizes.' },
          { title: 'Performance Optimization', description: 'Fast-loading websites optimized for speed and search engines.' },
          { title: 'Custom Functionality', description: 'Tailored features and integrations specific to your business needs.' }
        ],
        imageFirst: false
      },
      {
        title: 'E-commerce Solutions',
        description: 'Complete e-commerce platforms that drive sales and provide seamless shopping experiences for your customers.',
        image: '/images/services/placeholder-creative.png',
        features: [
          { title: 'Online Store Setup', description: 'Full e-commerce platform with product management and inventory tracking.' },
          { title: 'Payment Integration', description: 'Secure payment gateways and checkout processes for smooth transactions.' },
          { title: 'Order Management', description: 'Comprehensive order tracking and customer management systems.' }
        ],
        imageFirst: true
      },
      {
        title: 'Maintenance & Support',
        description: 'Ongoing website maintenance and support to ensure your site remains secure, updated, and performing at its best.',
        image: '/images/services/placeholder-postprod.png',
        features: [
          { title: 'Security Updates', description: 'Regular security patches and updates to protect your website.' },
          { title: 'Content Updates', description: 'Easy content management and regular updates to keep your site fresh.' },
          { title: 'Technical Support', description: '24/7 technical support to resolve any issues quickly and efficiently.' }
        ],
        imageFirst: false
      }
    ]
  }
};

export default function ServicePage({ params }: ServicePageProps) {
  const service = services.find(s => s.slug === params.slug);
  const content = serviceContent[params.slug as keyof typeof serviceContent];

  if (!service || !content) {
    notFound();
  }

  return (
    <div className={styles.pageContainer}>
      {/* Header Section */}
      <section className={styles.headerSection}>
        <div className={styles.headerContentContainer}>
          <div className={styles.taglineWrapper}>
            <p className={styles.tagline}>{content.tagline}</p>
          </div>
          <div className={styles.headerTextContent}>
            <h1 className={styles.heading1}>{content.title}</h1>
            <p className={styles.description1}>{content.description}</p>
          </div>
        </div>
        <div className={styles.headerImageContainer}>
          <Image
            src={content.headerImage}
            alt={`${content.title} header visual`}
            width={591}
            height={388}
            className={styles.headerImage}
            priority
          />
        </div>
      </section>

      {/* Dynamic Sections */}
      {content.sections.map((section, index) => (
        <section 
          key={index} 
          className={index === 1 ? styles.creativeDirectionSection : styles.layoutSection}
        >
          <div className={styles.layoutContainer}>
            {/* Content */}
            <div className={`${styles.layoutContent} ${section.imageFirst ? styles.orderSecond : styles.orderFirst}`}>
              <div className={styles.layoutIntroBlock}>
                <h2 className={styles.heading2}>{section.title}</h2>
                <p className={styles.description2}>{section.description}</p>
              </div>
              <p className={styles.keyFeaturesTitle}>Key Features:</p>
              <div className={styles.featuresList}>
                {section.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className={styles.featureItem}>
                    <p className={styles.featureTitle}>• {feature.title}</p>
                    <p className={styles.featureDescription}>{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Image */}
            <div className={`${styles.layoutImageContainer} ${section.imageFirst ? styles.orderFirst : styles.orderSecond}`}>
              <Image
                src={section.image}
                alt={`${section.title} illustration`}
                width={600}
                height={606}
                className={styles.layoutImage}
              />
            </div>
          </div>
        </section>
      ))}

      {/* Pricing Section */}
      <section className={styles.pricingSection}>
        <div className={styles.pricingContainer}>
          <h2 className={styles.pricingTitle}>
            Prices for our {service.title.toLowerCase()} services
          </h2>
          
          <div className={styles.pricingCardsContainer}>
            {service.pricingPlans.map((plan, index) => (
              <div 
                key={index} 
                className={`${styles.priceCard} ${plan.highlighted ? styles.highlightedCard : ''}`}
              >
                <h3 className={styles.planName}>{plan.name}</h3>
                {plan.price && <p className={styles.planPrice}>{plan.price}</p>}
                <ul className={styles.planFeatures}>
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className={styles.planFeatureItem}>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className={styles.ctaContainer}>
            <p className={styles.ctaText}>Ready to work with us?</p>
            <a href="/contact-us" className={styles.ctaButton}>
              Get Started
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

// Generate static params for all services
export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

// Generate metadata for each service
export async function generateMetadata({ params }: ServicePageProps) {
  const service = services.find(s => s.slug === params.slug);
  
  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }

  return {
    title: `${service.title} - VIKS Production`,
    description: service.description,
  };
}