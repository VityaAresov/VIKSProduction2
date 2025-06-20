import React from 'react';
import Link from 'next/link';
import services from '@/data/services';
import styles from './ServicesOverview.module.css';

export default function ServicesOverviewPage() {
  return (
    <div className={styles.pageContainer}>
      {/* Header Section */}
      <section className={styles.headerSection}>
        <div className={styles.headerContent}>
          <div className={styles.tagline}>Our Services</div>
          <h1 className={styles.title}>Professional Digital Services</h1>
          <p className={styles.description}>
            We offer comprehensive digital solutions to help your business grow and succeed in the modern marketplace.
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
              <div className={styles.serviceCardContent}>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceDescription}>{service.description}</p>
                <div className={styles.serviceFooter}>
                  <span className={styles.viewDetails}>View Details →</span>
                  <span className={styles.planCount}>
                    {service.pricingPlans.length} Plans Available
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}