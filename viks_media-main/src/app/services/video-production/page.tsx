'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './VideoProduction.module.css';

const VideoProductionPage: React.FC = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      quote: "VIKS transformed our brand story into a cinematic masterpiece. The video increased our conversion rate by 340% and became our most powerful marketing asset.",
      name: "Sarah Chen",
      title: "Marketing Director",
      company: "TechFlow Solutions",
      image: "/images/testimonials/sarah.jpg"
    },
    {
      quote: "The production quality exceeded our expectations. Every frame was crafted with precision, and the storytelling was absolutely compelling.",
      name: "Marcus Rodriguez",
      title: "CEO",
      company: "InnovateLab",
      image: "/images/testimonials/marcus.jpg"
    }
  ];

  const portfolioItems = [
    {
      id: 1,
      title: "DJ Anastasiia Live Set",
      thumbnail: "/images/cases/anastasiia.png",
      videoUrl: "https://www.youtube.com/watch?v=I1WzFnNTiMw",
      category: "Music Video"
    },
    {
      id: 2,
      title: "Gross Hunter Fashion Film",
      thumbnail: "/images/cases/grosshunter.png",
      videoUrl: "https://youtu.be/LOAreXKUSy4",
      category: "Fashion"
    },
    {
      id: 3,
      title: "NU BODY Commercial",
      thumbnail: "/images/cases/fashionads.png",
      videoUrl: "https://youtu.be/b9ifE-5Lmtc",
      category: "Commercial"
    },
    {
      id: 4,
      title: "TXC Cosmetics Brand Film",
      thumbnail: "/images/cases/xf1ads.png",
      videoUrl: "https://youtu.be/ZMn_VBZahIw",
      category: "Brand Film"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$1,500",
      features: [
        "Up to 5 hours of filming",
        "3 edited social media videos",
        "Basic editing and color correction",
        "Platform-optimized delivery (9:16 / 1:1)"
      ],
      highlighted: false
    },
    {
      name: "Professional",
      price: "$2,750",
      features: [
        "Up to 15 hours of filming",
        "6 fully edited videos in various formats",
        "Concept support & storytelling guidance",
        "Branded visuals, social + ad-ready exports"
      ],
      highlighted: true
    },
    {
      name: "Premium",
      price: "$4,500",
      features: [
        "Up to 30 hours of production",
        "10+ high-production videos",
        "Motion graphics, subtitles, advanced editing",
        "Visual direction, brand pack integration, full usage rights"
      ],
      highlighted: false
    },
    {
      name: "Custom",
      price: "Quote",
      features: [
        "Any number of hours (minimum 2)",
        "Any number of edited videos",
        "Any level of post-production",
        "Optimization for any platform"
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
              Turn Visions into Visuals That Captivate
            </h1>
            <p className={styles.heroSubtitle}>
              From concept to final cut, we create cinematic videos that don't just tell your story—they make your audience feel it.
            </p>
            <div className={styles.heroActions}>
              <Link href="/contact-us" className={styles.primaryCta}>
                Start Your Project
              </Link>
              <Link href="#portfolio" className={styles.secondaryCta}>
                See Our Work
              </Link>
            </div>
            <div className={styles.socialProof}>
              <span className={styles.proofText}>Trusted by</span>
              <div className={styles.clientLogos}>
                <span>TechFlow</span>
                <span>InnovateLab</span>
                <span>BrandCorp</span>
              </div>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <div className={styles.videoContainer}>
              <video 
                autoPlay 
                muted 
                loop 
                playsInline
                className={styles.heroVideo}
              >
                <source src="/videos/showreel.mp4" type="video/mp4" />
              </video>
              <div className={styles.videoOverlay}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className={styles.problemSection}>
        <div className={styles.container}>
          <div className={styles.problemContent}>
            <h2 className={styles.problemTitle}>
              Struggling to create videos that truly connect with your audience?
            </h2>
            <p className={styles.problemText}>
              Most businesses know video is powerful, but creating content that actually drives results requires more than just pointing a camera. You need cinematic storytelling, technical expertise, and a deep understanding of what makes viewers take action.
            </p>
            <div className={styles.solutionBox}>
              <h3 className={styles.solutionTitle}>We're your complete video production partner</h3>
              <p className={styles.solutionText}>
                From initial concept to final delivery, we handle every aspect of video production with the precision and creativity that transforms ideas into compelling visual stories.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className={styles.processSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>How We Bring Your Vision to Life</h2>
          <div className={styles.processSteps}>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>1</div>
              <div className={styles.stepIcon}>🎯</div>
              <h3 className={styles.stepTitle}>Discovery & Strategy</h3>
              <p className={styles.stepDescription}>
                We dive deep into your brand, audience, and goals to craft a video strategy that delivers results.
              </p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>2</div>
              <div className={styles.stepIcon}>🎬</div>
              <h3 className={styles.stepTitle}>Production & Filming</h3>
              <p className={styles.stepDescription}>
                Our team handles all aspects of filming with professional equipment and cinematic techniques.
              </p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>3</div>
              <div className={styles.stepIcon}>✨</div>
              <h3 className={styles.stepTitle}>Post-Production Magic</h3>
              <p className={styles.stepDescription}>
                We edit, color grade, and add motion graphics to create a polished final product.
              </p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>4</div>
              <div className={styles.stepIcon}>🚀</div>
              <h3 className={styles.stepTitle}>Delivery & Launch</h3>
              <p className={styles.stepDescription}>
                Receive your videos optimized for every platform and ready to drive engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features/Benefits */}
      <section className={styles.featuresSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Why Choose Our Video Production</h2>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🎥</div>
              <h3 className={styles.featureTitle}>4K Cinematic Quality</h3>
              <p className={styles.featureDescription}>
                Professional-grade equipment and techniques ensure every frame looks stunning and maintains the highest visual standards.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>📖</div>
              <h3 className={styles.featureTitle}>Compelling Storytelling</h3>
              <p className={styles.featureDescription}>
                We don't just capture footage—we craft narratives that emotionally connect with your audience and drive action.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>⚡</div>
              <h3 className={styles.featureTitle}>Full-Service Production</h3>
              <p className={styles.featureDescription}>
                From script development to final delivery, we handle every aspect so you can focus on your business.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>📱</div>
              <h3 className={styles.featureTitle}>Multi-Platform Optimization</h3>
              <p className={styles.featureDescription}>
                Videos delivered in formats optimized for social media, websites, and advertising platforms.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🎨</div>
              <h3 className={styles.featureTitle}>Creative Direction</h3>
              <p className={styles.featureDescription}>
                Our creative team ensures your videos align perfectly with your brand identity and marketing goals.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>⏱️</div>
              <h3 className={styles.featureTitle}>Fast Turnaround</h3>
              <p className={styles.featureDescription}>
                Efficient workflows and dedicated project management ensure your videos are delivered on time, every time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Showcase */}
      <section id="portfolio" className={styles.portfolioSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Our Video Portfolio</h2>
          <p className={styles.sectionSubtitle}>
            See how we've helped brands tell their stories through compelling video content
          </p>
          <div className={styles.portfolioGrid}>
            {portfolioItems.map((item) => (
              <div key={item.id} className={styles.portfolioItem}>
                <div className={styles.portfolioThumbnail}>
                  <img src={item.thumbnail} alt={item.title} />
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
          <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
          <div className={styles.faqGrid}>
            <div className={styles.faqItem}>
              <h3 className={styles.faqQuestion}>How long does video production take?</h3>
              <p className={styles.faqAnswer}>
                Timeline varies by project scope. Simple videos take 1-2 weeks, while complex productions may take 4-6 weeks. We'll provide a detailed timeline during our initial consultation.
              </p>
            </div>
            <div className={styles.faqItem}>
              <h3 className={styles.faqQuestion}>Do you provide scripts and concepts?</h3>
              <p className={styles.faqAnswer}>
                Yes! Our team includes experienced scriptwriters and creative directors who will develop compelling concepts tailored to your brand and objectives.
              </p>
            </div>
            <div className={styles.faqItem}>
              <h3 className={styles.faqQuestion}>What's included in post-production?</h3>
              <p className={styles.faqAnswer}>
                Post-production includes editing, color grading, audio mixing, motion graphics, and delivery in multiple formats optimized for your intended platforms.
              </p>
            </div>
            <div className={styles.faqItem}>
              <h3 className={styles.faqQuestion}>Can you work with our existing brand guidelines?</h3>
              <p className={styles.faqAnswer}>
                Absolutely. We ensure all video content aligns with your brand identity, using your colors, fonts, and style guidelines throughout the production.
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