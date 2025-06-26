                <div className={styles.playOverlay}>
                    <a 
                      href={item.videoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={styles.playButton}
                    >
                      ▶
                    </a>
                  </div>
                </div>
                <div className={styles.portfolioInfo}>
                  <span className={styles.portfolioCategory}>{item.category}</span>
                  <h3 className={styles.portfolioTitle}>{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className={styles.testimonialsSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>What Our Clients Say</h2>
          <div className={styles.testimonialSlider}>
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className={`${styles.testimonial} ${index === activeTestimonial ? styles.active : ''}`}
              >
                <blockquote className={styles.testimonialQuote}>
                  "{testimonial.quote}"
                </blockquote>
                <div className={styles.testimonialAuthor}>
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className={styles.authorImage}
                  />
                  <div className={styles.authorInfo}>
                    <div className={styles.authorName}>{testimonial.name}</div>
                    <div className={styles.authorTitle}>{testimonial.title}, {testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.testimonialDots}>
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`${styles.dot} ${index === activeTestimonial ? styles.activeDot : ''}`}
                onClick={() => setActiveTestimonial(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className={styles.pricingSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Video Production Packages</h2>
          <p className={styles.sectionSubtitle}>
            Choose the package that fits your needs, or let's create a custom solution
          </p>
          <div className={styles.pricingGrid}>
            {pricingPlans.map((plan, index) => (
              <div 
                key={index}
                className={`${styles.pricingCard} ${plan.highlighted ? styles.highlighted : ''}`}
              >
                {plan.highlighted && <div className={styles.popularBadge}>Most Popular</div>}
                <h3 className={styles.planName}>{plan.name}</h3>
                <div className={styles.planPrice}>{plan.price}</div>
                <ul className={styles.planFeatures}>
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className={styles.planFeature}>
                      <span className={styles.checkmark}>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href="/contact-us" className={styles.planCta}>
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.faqSection}>
        <div className={styles.container}>
          <div className={styles.faqContentWrapper}>
            <div className={styles.faqLeftColumn}>
              <div className={styles.faqHeaderBlock}>
                <h2 className={styles.faqTitle}>Video Production FAQs</h2>
                <p className={styles.faqDescription}>
                  Get answers to the most common questions about our video production services and process.
                </p>
              </div>
              <div className={styles.faqMoreQuestionsBlock}>
                <p className={styles.faqMoreQuestionsText}>Have more questions?</p>
                <Link href="/contact-us" className={styles.faqContactButton}>
                  <span>Contact Us</span>
                </Link>
              </div>
            </div>
            <div className={styles.faqRightColumn}>
              <div className={styles.faqAccordionList}>
                <div className={styles.faqItemWrapper}>
                  <div className={styles.faqItemHeader}>
                    <div className={styles.faqQuestionIcon}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                        <polyline points="12,6 12,12 16,14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h3 className={styles.faqQuestionText}>How long does video production take?</h3>
                  </div>
                  <div className={styles.faqAnswerContent}>
                    Timeline varies by project scope. Simple videos take 1-2 weeks, while complex productions may take 4-6 weeks. We'll provide a detailed timeline during our initial consultation.
                  </div>
                </div>
                <div className={styles.faqItemWrapper}>
                  <div className={styles.faqItemHeader}>
                    <div className={styles.faqQuestionIcon}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h3 className={styles.faqQuestionText}>Do you provide scripts and concepts?</h3>
                  </div>
                  <div className={styles.faqAnswerContent}>
                    Yes! Our team includes experienced scriptwriters and creative directors who will develop compelling concepts tailored to your brand and objectives.
                  </div>
                </div>
                <div className={styles.faqItemWrapper}>
                  <div className={styles.faqItemHeader}>
                    <div className={styles.faqQuestionIcon}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 18V12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M21 19C21 20.1046 20.1046 21 19 21H18C16.8954 21 16 20.1046 16 19V16C16 14.8954 16.8954 14 18 14H21V19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M3 19C3 20.1046 3.89543 21 5 21H6C7.10457 21 8 20.1046 8 19V16C8 14.8954 7.10457 14 6 14H3V19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h3 className={styles.faqQuestionText}>What's included in post-production?</h3>
                  </div>
                  <div className={styles.faqAnswerContent}>
                    Post-production includes editing, color grading, audio mixing, motion graphics, and delivery in multiple formats optimized for your intended platforms.
                  </div>
                </div>
                <div className={styles.faqItemWrapper}>
                  <div className={styles.faqItemHeader}>
                    <div className={styles.faqQuestionIcon}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <polyline points="23,6 13.5,15.5 8.5,10.5 1,18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <polyline points="17,6 23,6 23,12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h3 className={styles.faqQuestionText}>Can you work with our existing brand guidelines?</h3>
                  </div>
                  <div className={styles.faqAnswerContent}>
                    Absolutely. We ensure all video content aligns with your brand identity, using your colors, fonts, and style guidelines throughout the production.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className={styles.finalCtaSection}>
        <div className={styles.container}>
          <div className={styles.finalCtaContent}>
            <h2 className={styles.finalCtaTitle}>
              Ready to Create Videos That Convert?
            </h2>
            <p className={styles.finalCtaText}>
              Let's discuss your project and create a video strategy that drives real results for your business.
            </p>
            <div className={styles.finalCtaActions}>
              <Link href="/contact-us" className={styles.finalCtaPrimary}>
                Start Your Project Today
              </Link>
              <Link href="/cases" className={styles.finalCtaSecondary}>
                View More Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VideoProductionPage;
