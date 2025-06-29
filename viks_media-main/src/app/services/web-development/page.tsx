'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './WebDevelopment.module.css';

const WebDevelopmentPage: React.FC = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeWebsite, setActiveWebsite] = useState(0);

  const testimonials = [
    {
      quote: "Our new website increased conversions by 280% and cut our bounce rate in half. The site loads incredibly fast and looks amazing on every device.",
      name: "Michael Chen",
      title: "CEO",
      company: "TechStart Solutions",
      image: "/images/testimonials/michael.jpg"
    },
    {
      quote: "VIKS delivered exactly what we needed—a beautiful, fast website that actually drives business results. Our online sales have tripled since launch.",
      name: "Sarah Johnson",
      title: "Marketing Director",
      company: "EcoCommerce",
      image: "/images/testimonials/sarah-j.jpg"
    }
  ];

  const portfolioWebsites = [
    {
      id: 1,
      title: "TechStart Solutions",
      category: "SaaS Platform",
      image: "/images/cases/website11.png",
      url: "https://techstart-demo.com",
      description: "Modern SaaS landing page with conversion optimization"
    },
    {
      id: 2,
      title: "EcoCommerce Store",
      category: "E-commerce",
      image: "/images/cases/website1.png",
      url: "https://ecocommerce-demo.com",
      description: "Full-featured e-commerce platform with custom checkout"
    },
    {
      id: 3,
      title: "Creative Agency Portfolio",
      category: "Portfolio",
      image: "/images/portfolio/agency-site.jpg",
      url: "https://creative-demo.com",
      description: "Interactive portfolio showcasing creative work"
    },
    {
      id: 4,
      title: "FinTech Dashboard",
      category: "Web App",
      image: "/images/portfolio/fintech-app.jpg",
      url: "https://fintech-demo.com",
      description: "Complex financial dashboard with real-time data"
    }
  ];

  const pricingPlans = [
    {
      name: "Landing Page",
      price: "$2,500",
      features: [
        "Single page website",
        "Mobile responsive design",
        "Contact form integration",
        "Basic SEO optimization",
        "30 days of support"
      ],
      highlighted: false
    },
    {
      name: "Business Website",
      price: "$5,500",
      features: [
        "Up to 10 pages",
        "Custom design and development",
        "CMS integration",
        "Advanced SEO setup",
        "Analytics and tracking",
        "90 days of support"
      ],
      highlighted: true
    },
    {
      name: "E-commerce",
      price: "$8,500",
      features: [
        "Full e-commerce functionality",
        "Product catalog management",
        "Payment gateway integration",
        "Inventory management",
        "Advanced analytics",
        "6 months of support"
      ],
      highlighted: false
    },
    {
      name: "Custom App",
      price: "Quote",
      features: [
        "Custom functionality",
        "Database integration",
        "User authentication",
        "API development",
        "Scalable architecture",
        "Ongoing maintenance"
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
              Websites That Don't Just Look Good, They Perform
            </h1>
            <p className={styles.heroSubtitle}>
              We build lightning-fast, conversion-optimized websites that turn visitors into customers and help your business grow online.
            </p>
            <div className={styles.heroActions}>
              <Link href="/contact-us" className={styles.primaryCta}>
                Get a Free Quote
              </Link>
              <Link href="#portfolio" className={styles.secondaryCta}>
                View Our Work
              </Link>
            </div>
            <div className={styles.socialProof}>
              <span className={styles.proofText}>Trusted by</span>
              <div className={styles.clientLogos}>
                <span>TechStart</span>
                <span>EcoCommerce</span>
                <span>FinTech Pro</span>
              </div>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <div className={styles.websiteCarousel}>
              <div className={styles.carouselContainer}>
                {portfolioWebsites.map((website, index) => (
                  <div 
                    key={website.id}
                    className={`${styles.websiteSlide} ${index === activeWebsite ? styles.active : ''}`}
                  >
                    <div className={styles.browserFrame}>
                      <div className={styles.browserHeader}>
                        <div className={styles.browserDots}>
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                        <div className={styles.addressBar}>{website.url}</div>
                      </div>
                      <div className={styles.websitePreview}>
                        <img src={website.image} alt={website.title} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className={styles.carouselDots}>
                {portfolioWebsites.map((_, index) => (
                  <button
                    key={index}
                    className={`${styles.carouselDot} ${index === activeWebsite ? styles.activeDot : ''}`}
                    onClick={() => setActiveWebsite(index)}
                  />
                ))}
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
              Is your website driving customers away instead of bringing them in?
            </h2>
            <p className={styles.problemText}>
              Slow loading times, poor mobile experience, and confusing navigation are costing you customers every day. In today's digital world, your website is often the first impression potential customers have of your business.
            </p>
            <div className={styles.solutionBox}>
              <h3 className={styles.solutionTitle}>We create websites that work as hard as you do</h3>
              <p className={styles.solutionText}>
                Our websites are built for speed, optimized for conversions, and designed to provide an exceptional user experience across all devices. Every element is strategically placed to guide visitors toward taking action.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className={styles.processSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Our Web Development Process</h2>
          <div className={styles.processSteps}>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>1</div>
              <div className={styles.stepIcon}>🎯</div>
              <h3 className={styles.stepTitle}>Discovery & Planning</h3>
              <p className={styles.stepDescription}>
                We analyze your business goals, target audience, and competitors to create a strategic development plan.
              </p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>2</div>
              <div className={styles.stepIcon}>🎨</div>
              <h3 className={styles.stepTitle}>Design & Prototyping</h3>
              <p className={styles.stepDescription}>
                Our designers create beautiful, user-friendly interfaces that align with your brand and business objectives.
              </p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>3</div>
              <div className={styles.stepIcon}>⚡</div>
              <h3 className={styles.stepTitle}>Development & Testing</h3>
              <p className={styles.stepDescription}>
                We build your website using modern technologies, ensuring it's fast, secure, and fully responsive.
              </p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>4</div>
              <div className={styles.stepIcon}>🚀</div>
              <h3 className={styles.stepTitle}>Launch & Optimization</h3>
              <p className={styles.stepDescription}>
                We launch your site and continuously monitor performance, making optimizations for better results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features/Benefits */}
      <section className={styles.featuresSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Why Choose Our Web Development</h2>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>📱</div>
              <h3 className={styles.featureTitle}>Responsive Design for All Devices</h3>
              <p className={styles.featureDescription}>
                Your website will look and function perfectly on smartphones, tablets, and desktops, ensuring no customer is left behind.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>⚡</div>
              <h3 className={styles.featureTitle}>Blazing-Fast Load Speeds</h3>
              <p className={styles.featureDescription}>
                Optimized code and modern technologies ensure your site loads in under 3 seconds, keeping visitors engaged.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🔍</div>
              <h3 className={styles.featureTitle}>SEO-Optimized Foundation</h3>
              <p className={styles.featureDescription}>
                Built with search engines in mind, helping your website rank higher and attract more organic traffic.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🛡️</div>
              <h3 className={styles.featureTitle}>Security & Reliability</h3>
              <p className={styles.featureDescription}>
                Advanced security measures and reliable hosting ensure your website is always safe and accessible.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>📊</div>
              <h3 className={styles.featureTitle}>Analytics & Tracking</h3>
              <p className={styles.featureDescription}>
                Comprehensive analytics setup to track visitor behavior and measure your website's performance.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🔧</div>
              <h3 className={styles.featureTitle}>Easy-to-Manage CMS</h3>
              <p className={styles.featureDescription}>
                User-friendly content management system that lets you update your website without technical knowledge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Showcase */}
      <section id="portfolio" className={styles.portfolioSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Our Web Development Portfolio</h2>
          <p className={styles.sectionSubtitle}>
            Explore websites we've built that drive real business results
          </p>
          <div className={styles.portfolioGrid}>
            {portfolioWebsites.map((website) => (
              <div key={website.id} className={styles.portfolioItem}>
                <div className={styles.portfolioImage}>
                  <img src={website.image} alt={website.title} />
                  <div className={styles.portfolioOverlay}>
                    <a 
                      href={website.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={styles.viewSiteButton}
                    >
                      View Live Site
                    </a>
                  </div>
                </div>
                <div className={styles.portfolioInfo}>
                  <span className={styles.portfolioCategory}>{website.category}</span>
                  <h3 className={styles.portfolioTitle}>{website.title}</h3>
                  <p className={styles.portfolioDescription}>{website.description}</p>
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
          <h2 className={styles.sectionTitle}>Web Development Packages</h2>
          <p className={styles.sectionSubtitle}>
            From simple landing pages to complex web applications, we have a solution for every need
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
              <h3 className={styles.faqQuestion}>How long does it take to build a website?</h3>
              <p className={styles.faqAnswer}>
                Timeline depends on complexity. Simple websites take 2-4 weeks, while complex e-commerce or custom applications may take 8-12 weeks. We'll provide a detailed timeline during our consultation.
              </p>
            </div>
            <div className={styles.faqItem}>
              <h3 className={styles.faqQuestion}>Will my website be mobile-friendly?</h3>
              <p className={styles.faqAnswer}>
                Absolutely. All our websites are built with a mobile-first approach, ensuring they look and function perfectly on all devices, from smartphones to desktop computers.
              </p>
            </div>
            <div className={styles.faqItem}>
              <h3 className={styles.faqQuestion}>Do you provide ongoing support?</h3>
              <p className={styles.faqAnswer}>
                Yes, we offer various support packages including security updates, content updates, performance monitoring, and technical support to keep your website running smoothly.
              </p>
            </div>
            <div className={styles.faqItem}>
              <h3 className={styles.faqQuestion}>Can I update the website myself?</h3>
              <p className={styles.faqAnswer}>
                Yes, we build websites with user-friendly content management systems that allow you to easily update text, images, and other content without any technical knowledge.
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
              Ready to Build a Website That Drives Results?
            </h2>
            <p className={styles.finalCtaText}>
              Let's create a website that not only looks amazing but also helps your business grow and succeed online.
            </p>
            <div className={styles.finalCtaActions}>
              <Link href="/contact-us" className={styles.finalCtaPrimary}>
                Get Your Free Quote Today
              </Link>
              <Link href="/cases" className={styles.finalCtaSecondary}>
                View More Projects
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebDevelopmentPage;