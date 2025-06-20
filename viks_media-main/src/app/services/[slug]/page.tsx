// Individual service page
import { notFound } from 'next/navigation'
import services from '@/data/services'
import styles from './ServicePage.module.css'

export const generateStaticParams = () =>
  services.map((s) => ({ slug: s.slug }))

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug)
  
  if (!service) {
    return notFound()
  }

  return (
    <div className={styles.pageContainer}>
      {/* Header */}
      <div className={styles.header}>
        <h1 className={styles.title}>{service.title}</h1>
        <p className={styles.description}>{service.description}</p>
      </div>

      {/* Pricing Section */}
      <div className={styles.pricingSection}>
        <h2 className={styles.pricingTitle}>Choose Your Plan</h2>
        
        <div className={styles.pricingGrid}>
          {service.pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`${styles.priceCard} ${plan.highlighted ? styles.highlighted : ''}`}
            >
              <div className={styles.cardHeader}>
                <h3 className={styles.planName}>{plan.name}</h3>
                {plan.price && (
                  <div className={styles.planPrice}>{plan.price}</div>
                )}
              </div>
              
              <ul className={styles.featuresList}>
                {plan.features.map((feature, i) => (
                  <li key={i} className={styles.feature}>
                    <span className={styles.checkmark}>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <a href="/contact-us" className={styles.ctaButton}>
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}