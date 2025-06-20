import React from 'react';
import Link from 'next/link';
import styles from './ServicesOverview.module.css';

const services = [
  {
    slug: 'video-production',
    title: 'Video Production',
    description: 'Turn visions into visuals that captivate and convert your audience.',
    icon: '🎬'
  },
  {
    slug: 'social-media-management', 
    title: 'Social Media Management',
    description: 'Your brand\'s voice, amplified across social media platforms.',
    icon: '📱'
  },
  {
    slug: 'web-development',
    title: 'Web Development', 
    description: 'Websites that don\'t just look good, they perform and convert.',
    icon: '💻'
  }
];

export default function ServicesOverviewPage() {
  return (
    <div className={styles.pageContainer}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Professional Digital Services That Drive Results
          </h1>
          <p className={styles.heroDescription}>
            We create compelling digital experiences that help your business grow, engage audiences, and achieve measurable success.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className={styles.servicesSection}>
        <div className={styles.servicesGrid}>
          {services.map((service) => (
            <Link 
              key={service.slug} 
              href={`/services/${service.slug}`}
              className={styles.serviceCard}
            >
              <div className={styles.serviceIcon}>{service.icon}</div>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>
              <div className={styles.serviceFooter}>
                <span className={styles.viewDetails}>Learn More →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}