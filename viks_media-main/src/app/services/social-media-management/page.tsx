'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './SocialMediaManagement.module.css';

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
              <div className={styles.stepIcon}>🎯</div>
              <h3 className={styles.stepTitle}>Audience Research & Strategy</h3>
              <p className={styles.stepDescription}>
                We analyze your target audience, competitors, and industry trends to create a winning social media strategy.
              </p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>2</div>
              <div className={styles.stepIcon}>🎨</div>
              <h3 className={styles.stepTitle}>Content Creation & Planning</h3>
              <p className={styles.stepDescription}>
                Our creative team produces engaging content that aligns with your brand and resonates with your audience.
              </p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>3</div>
              <div className={styles.stepIcon}>🚀</div>
              <h3 className={styles.stepTitle}>Publishing & Community Management</h3>
              <p className={styles.stepDescription}>
                We handle posting, respond to comments, and actively engage with your community to build relationships.
              </p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>4</div>
              <div className={styles.stepIcon}>📊</div>
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
              <div className={styles.featureIcon}>📈</div>
              <h3 className={styles.featureTitle}>Data-Driven Strategy</h3>
              <p className={styles.featureDescription}>
                Every post, campaign, and decision is backed by real data and analytics to ensure maximum ROI and growth.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🎭</div>
              <h3 className={styles.featureTitle}>Consistent Brand Voice</h3>
              <p className={styles.featureDescription}>
                We develop and maintain a unique brand voice that resonates with your audience across all platforms.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>💬</div>
              <h3 className={styles.featureTitle}>Active Community Engagement</h3>
              <p className={styles.featureDescription}>
                We don't just post and ghost—we actively engage with your community to build lasting relationships.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>📱</div>
              <h3 className={styles.featureTitle}>Multi-Platform Expertise</h3>
              <p className={styles.featureDescription}>
                From Instagram to LinkedIn, we know what works on each platform and optimize content accordingly.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🎬</div>
              <h3 className={styles.featureTitle}>Video Content Creation</h3>
              <p className={styles.featureDescription}>
                Engaging video content including Reels, Stories, and TikToks that capture attention and drive engagement.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>📊</div>
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
          <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
          <div className={styles.faqGrid}>
            <div className={styles.faqItem}>
              <h3 className={styles.faqQuestion}>Which social media platforms do you manage?</h3>
              <p className={styles.faqAnswer}>
                We manage all major platforms including Instagram, Facebook, LinkedIn, TikTok, Twitter, and YouTube. We'll recommend the best platforms based on your target audience and business goals.
              </p>
            </div>
            <div className={styles.faqItem}>
              <h3 className={styles.faqQuestion}>How do you measure success?</h3>
              <p className={styles.faqAnswer}>
                We track key metrics like engagement rate, follower growth, reach, website traffic, and most importantly, conversions and ROI. You'll receive detailed monthly reports showing your progress.
              </p>
            </div>
            <div className={styles.faqItem}>
              <h3 className={styles.faqQuestion}>Do you create all the content?</h3>
              <p className={styles.faqAnswer}>
                Yes, our creative team handles all content creation including graphics, videos, captions, and hashtag research. We work with you to ensure everything aligns with your brand voice and goals.
              </p>
            </div>
            <div className={styles.faqItem}>
              <h3 className={styles.faqQuestion}>How quickly will I see results?</h3>
              <p className={styles.faqAnswer}>
                While organic growth takes time, most clients see improved engagement within the first month. Significant follower growth and business impact typically occur within 3-6 months of consistent strategy execution.
              </p>
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