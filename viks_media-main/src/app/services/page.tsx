// Services overview page
'use client'

import Link from 'next/link'
import services from '@/data/services'
import styles from './ServicesPage.module.css'

export default function ServicesPage() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.header}>
        <h1 className={styles.title}>Our Services</h1>
        <p className={styles.description}>
          Professional digital services to help your business grow and succeed online.
        </p>
      </div>

      <div className={styles.servicesGrid}>
        {services.map((service) => (
          <Link 
            key={service.slug} 
            href={`/services/${service.slug}`}
            className={styles.serviceCard}
          >
            <h2 className={styles.serviceTitle}>{service.title}</h2>
            <p className={styles.serviceDescription}>{service.description}</p>
            <div className={styles.serviceFooter}>
              <span className={styles.viewPricing}>View Pricing →</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}