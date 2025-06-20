import React from 'react';
import { notFound } from 'next/navigation';
import services from '@/data/services';
import styles from './ServicePage.module.css';

interface ServicePageProps {
  params: {
    slug: string;
  };
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = services.find(s => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  return (
    <div className={styles.pageContainer}>
      {/* Header Section */}
      <section className={styles.headerSection}>
        <div className={styles.headerContent}>
          <div className={styles.tagline}>Service</div>
          <h1 className={styles.title}>{service.title}</h1>
          <p className={styles.description}>{service.description}</p>
        </div>
      </section>

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