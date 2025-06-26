'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './SocialMediaManagement.module.css';

// SVG Icon Components
const TargetIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
    <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="2"/>
    <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

const PaletteIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/>
    <circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/>
    <circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/>
    <circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/>
    <path d="M12 2C13.5 2 16.09 2.75 17.74 4.4C19.39 6.05 20.14 8.64 20.14 10.14C20.14 12.5 18.5 14.14 16.14 14.14C15.31 14.14 14.5 14.24 13.95 14.48C13.4 14.72 13 15.14 13 15.86V16.14C13 18.5 11.36 20.14 9 20.14C6.64 20.14 5 18.5 5 16.14C5 10.9 8.58 2 12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const RocketIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.5 16.5C-1.5 10.5 4 5 4 5S8.96 6.5 13 7.5L13.5 12L19 18.5L16.5 21L11 15.5L6.5 16L4.5 16.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 12L7 10L3 13L5 15L9 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const BarChartIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="12" y1="20" x2="12" y2="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <line x1="18" y1="20" x2="18" y2="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <line x1="6" y1="20" x2="6" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const TrendingUpIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <polyline points="23,6 13.5,15.5 8.5,10.5 1,18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <polyline points="17,6 23,6 23,12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const TheaterIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.5 8.5C9 8.5 10.5 7.5 10.5 6C10.5 4.5 9 3.5 7.5 3.5S4.5 4.5 4.5 6C4.5 7.5 6 8.5 7.5 8.5Z" stroke="currentColor" strokeWidth="2"/>
    <path d="M16.5 8.5C18 8.5 19.5 7.5 19.5 6C19.5 4.5 18 3.5 16.5 3.5S13.5 4.5 13.5 6C13.5 7.5 15 8.5 16.5 8.5Z" stroke="currentColor" strokeWidth="2"/>
    <path d="M2 20.5C2 16.36 5.36 13 9.5 13H14.5C18.64 13 22 16.36 22 20.5" stroke="currentColor" strokeWidth="2"/>
    <path d="M7.5 10.5L6.5 15.5L8.5 15.5L9.5 10.5" stroke="currentColor" strokeWidth="2"/>
    <path d="M16.5 10.5L17.5 15.5L15.5 15.5L14.5 10.5" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

const MessageCircleIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 11.5A8.38 8.38 0 0 1 14.5 20C13.25 20 12.04 19.75 11 19.26L7 21L8.74 17C6.97 15.49 6 13.39 6 11.5A8.5 8.5 0 0 1 14.5 3A8.38 8.38 0 0 1 21 11.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const SmartphoneIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
    <line x1="12" y1="18" x2="12.01" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const VideoIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <polygon points="23,6 13.5,15.5 8.5,10.5 1,18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M23 7L16 12L23 17V7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="1" y="5" width="15" height="14" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

const SocialMediaManagementPage: React.FC = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      quote: "Our social media engagement increased by 450% in just 3 months. VIKS doesn't just post content—they create conversations that convert into customers.",
      name: "Jennifer Walsh",
      title: "Marketing Director",
      company: "GrowthTech",
      image: "/images/testimonials/jennifer.jpg"
    },
    {
      quote: "Finally, a team that understands our brand voice. Our follower growth has been consistent, and more importantly, they're the right followers who actually buy from us.",
      name: "David Kim",
      title: "Founder",
      company: "EcoLiving Co",
      image: "/images/testimonials/david.jpg"
    }
  ];

  const caseStudies = [
    {
      id: 1,
      title: "TechFlow Solutions",
      beforeMetric: "1.2K followers",
      afterMetric: "15.8K followers",
      growth: "+1,217%",
      timeframe: "6 months",
      image: "/images/cases/techflow-social.jpg"
    },
    {
      id: 2,
      title: "EcoLiving Co",
      beforeMetric: "2.1% engagement",
      afterMetric: "8.7% engagement",
      growth: "+314%",
      timeframe: "4 months",
      image: "/images/cases/ecoliving-social.jpg"
    },
    {
      id: 3,
      title: "FitnessPro",
      beforeMetric: "$2.1K monthly revenue",
      afterMetric: "$18.5K monthly revenue",
      growth: "+781%",
      timeframe: "8 months",
      image: "/images/cases/fitnesspro-social.jpg"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$1,200/mo",
      features: [
        "2 social media platforms",
        "12 posts per month",
        "Basic graphics and captions",
        "Monthly analytics report",
        "Community management"
      ],
      highlighted: false
    },
    {
      name: "Growth",
      price: "$2,200/mo",
      features: [
        "4 social media platforms",
        "20 posts per month",
        "Custom graphics and videos",
        "Stories and Reels creation",
        "Paid ad management included",
        "Weekly optimization"
      ],
      highlighted: true
    },
    {
      name: "Enterprise",
      price: "$3,500/mo",
      features: [
        "All major platforms",
        "30+ posts per month",
        "Premium video content",
        "Influencer collaborations",
        "Advanced campaigns",
        "Dedicated account manager"
      ],
      highlighted: false
    }
  ];

  return (
    <div className={styles.pageContainer}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>
              Your Brand's Voice, Amplified Across Social Media
            </h1>
            <p className={styles.heroSubtitle}>
              We don't just manage your social media—we transform it into a powerful growth engine that builds communities and drives real business results.
            </p>
            <div className={styles.heroActions}>
              <Link href="/contact-us" className={styles.primaryCta}>
                Get a Free Strategy Session
              </Link>
              <Link href="#case-studies" className={styles.secondaryCta}>
                See Our Results
              </Link>
            </div>
            <div className={styles.socialProof}>
              <span className={styles.proofText}>Trusted by</span>
              <div className={styles.clientLogos}>
                <span>TechFlow</span>
                <span>EcoLiving</span>
                <span>FitnessPro</span>
              </div>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <div className={styles.dashboardContainer}>
              <div className={styles.dashboardMockup}>
                <div className={styles.dashboardHeader}>
                  <div className={styles.dashboardTitle}>Social Media Dashboard</div>
                  <div className={styles.dashboardMetrics}>
                    <div className={styles.metric}>
                      <span className={styles.metricValue}>+450%</span>
                      <span className={styles.metricLabel}>Engagement</span>
                    </div>
                    <div className={styles.metric}>
                      <span className={styles.metricValue}>+1,217%</span>
                      <span className={styles.metricLabel}>Followers</span>
                    </div>
                  </div>
                </div>
                <div className={styles.dashboardChart}>
                  <div className={styles.chartBars}>
                    <div className={styles.chartBar} style={{height: '20%'}}></div>
                    <div className={styles.chartBar} style={{height: '35%'}}></div>
                    <div className={styles.chartBar} style={{height: '60%'}}></div>
                    <div className={styles.chartBar} style={{height: '85%'}}></div>
                    <div className={styles.chartBar} style={{height: '100%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className={styles.problemSection}>
        <div className={styles.container}>
          <div className={styles.problemContent}>
            <h2 className={styles.problemTitle}>
              Tired of posting into the void with zero engagement?
            </h2>
            <p className={styles.problemText}>
              Most businesses struggle with social media because they treat it like a billboard instead of a conversation. Random posting, inconsistent messaging, and no real strategy leads to wasted time and missed opportunities.
            </p>
            <div className={styles.solutionBox}>
              <h3 className={styles.solutionTitle}>We turn your social media into a customer magnet</h3>
              <p className={styles.solutionText}>
                Our data-driven approach combines compelling content creation with strategic community building to transform your social presence into a powerful business growth tool.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className={styles.processSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Our Social Media Growth Process</h2>
          <div className={styles.processSteps}>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>1</div>
              <div className={styles.stepIcon}><TargetIcon /></div>
              <h3 className={styles.stepTitle}>Audience Research & Strategy</h3>
              <p className={styles.stepDescription}>
                We analyze your target audience, competitors, and industry trends to create a winning social media strategy.
              </p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>2</div>
              <div className={styles.stepIcon}><PaletteIcon /></div>
              <h3 className={styles.stepTitle}>Content Creation & Planning</h3>
              <p className={styles.stepDescription}>
                Our creative team produces engaging content that aligns with your brand and resonates with your audience.
              </p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>3</div>
              <div className={styles.stepIcon}><RocketIcon /></div>
              <h3 className={styles.stepTitle}>Publishing & Community Management</h3>
              <p className={styles.stepDescription}>
                We handle posting, respond to comments, and actively engage with your community to build relationships.
              </p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>4</div>
              <div className={styles.stepIcon}><BarChartIcon /></div>
              <h3 className={styles.stepTitle}>Analytics & Optimization</h3>
              <p className={styles.stepDescription}>
                We track performance, analyze data, and continuously optimize your strategy for maximum growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features/Benefits */}
      <section className={styles.featuresSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Why Our Social Media Management Works</h2>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}><TrendingUpIcon /></div>
              <h3 className={styles.featureTitle}>Data-Driven Strategy</h3>
              <p className={styles.featureDescription}>
                Every post, campaign, and decision is backed by real data and analytics to ensure maximum ROI and growth.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}><TheaterIcon /></div>
              <h3 className={styles.featureTitle}>Consistent Brand Voice</h3>
              <p className={styles.featureDescription}>
                We develop and maintain a unique brand voice that resonates with your audience across all platforms.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}><MessageCircleIcon /></div>
              <h3 className={styles.featureTitle}>Active Community Engagement</h3>
              <p className={styles.featureDescription}>
                We don't just post and ghost—we actively engage with your community to build lasting relationships.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}><SmartphoneIcon /></div>
              <h3 className={styles.featureTitle}>Multi-Platform Expertise</h3>
              <p className={styles.featureDescription}>
                From Instagram to LinkedIn, we know what works on each platform and optimize content accordingly.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}><VideoIcon /></div>
              <h3 className={styles.featureTitle}>Video Content Creation</h3>
              <p className={styles.featureDescription}>
                Engaging video content including Reels, Stories, and TikToks that capture attention and drive engagement.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}><BarChartIcon /></div>
              <h3 className={styles.featureTitle}>Monthly Performance Reports</h3>
              <p className={styles.featureDescription}>
                Detailed analytics and insights showing exactly how your social media is contributing to business growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="case-studies" className={styles.caseStudiesSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Real Results for Real Businesses</h2>
          <p className={styles.sectionSubtitle}>
            See how we've transformed social media presence into measurable business growth
          </p>
          <div className={styles.caseStudiesGrid}>
            {caseStudies.map((study) => (
              <div key={study.id} className={styles.caseStudyCard}>
                <div className={styles.caseStudyImage}>
                  <img src={study.image} alt={study.title} />
                </div>
                <div className={styles.caseStudyContent}>
                  <h3 className={styles.caseStudyTitle}>{study.title}</h3>
                  <div className={styles.caseStudyMetrics}>
                    <div className={styles.beforeAfter}>
                      <div className={styles.metricGroup}>
                        <span className={styles.metricLabel}>Before</span>
                        <span className={styles.metricValue}>{study.beforeMetric}</span>
                      </div>
                      <div className={styles.arrow}>→</div>
                      <div className={styles.metricGroup}>
                        <span className={styles.metricLabel}>After</span>
                        <span className={styles.metricValue}>{study.afterMetric}</span>
                      </div>
                    </div>
                    <div className={styles.growthBadge}>
                      <span className={styles.growthValue}>{study.growth}</span>
                      <span className={styles.timeframe}>in {study.timeframe}</span>
                    </div>
                  </div>
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
          <h2 className={styles.sectionTitle}>Social Media Management Packages</h2>
          <p className={styles.sectionSubtitle}>
            Choose the package that fits your business needs and growth goals
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
                <h2 className={styles.faqTitle}>Social Media Management FAQs</h2>
                <p className={styles.faqDescription}>
                  Get answers to the most common questions about our social media management services and strategies.
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
                        <path d="M3 18V12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M21 19C21 20.1046 20.1046 21 19 21H18C16.8954 21 16 20.1046 16 19V16C16 14.8954 16.8954 14 18 14H21V19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M3 19C3 20.1046 3.89543 21 5 21H6C7.10457 21 8 20.1046 8 19V16C8 14.8954 7.10457 14 6 14H3V19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h3 className={styles.faqQuestionText}>Which social media platforms do you manage?</h3>
                  </div>
                  <div className={styles.faqAnswerContent}>
                    We manage all major platforms including Instagram, Facebook, LinkedIn, TikTok, Twitter, and YouTube. We'll recommend the best platforms based on your target audience and business goals.
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
                    <h3 className={styles.faqQuestionText}>How do you measure success?</h3>
                  </div>
                  <div className={styles.faqAnswerContent}>
                    We track key metrics like engagement rate, follower growth, reach, website traffic, and most importantly, conversions and ROI. You'll receive detailed monthly reports showing your progress.
                  </div>
                </div>
                <div className={styles.faqItemWrapper}>
                  <div className={styles.faqItemHeader}>
                    <div className={styles.faqQuestionIcon}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h3 className={styles.faqQuestionText}>Do you create all the content?</h3>
                  </div>
                  <div className={styles.faqAnswerContent}>
                    Yes, our creative team handles all content creation including graphics, videos, captions, and hashtag research. We work with you to ensure everything aligns with your brand voice and goals.
                  </div>
                </div>
                <div className={styles.faqItemWrapper}>
                  <div className={styles.faqItemHeader}>
                    <div className={styles.faqQuestionIcon}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                        <polyline points="12,6 12,12 16,14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h3 className={styles.faqQuestionText}>How quickly will I see results?</h3>
                  </div>
                  <div className={styles.faqAnswerContent}>
                    While organic growth takes time, most clients see improved engagement within the first month. Significant follower growth and business impact typically occur within 3-6 months of consistent strategy execution.
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
              Ready to Transform Your Social Media Presence?
            </h2>
            <p className={styles.finalCtaText}>
              Let's create a social media strategy that turns followers into customers and builds a thriving community around your brand.
            </p>
            <div className={styles.finalCtaActions}>
              <Link href="/contact-us" className={styles.finalCtaPrimary}>
                Get Your Free Strategy Session
              </Link>
              <Link href="/cases" className={styles.finalCtaSecondary}>
                View More Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SocialMediaManagementPage;
