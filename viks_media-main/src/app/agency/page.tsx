"use client"; // <--- ADD THIS DIRECTIVE AT THE VERY TOP

import React, { useState } from 'react';
import styles from './AgencyPage.module.css'; // Your CSS Module

// SVG Icons
const CheckCircleIcon = () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.7088 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4905 2.02168 11.3363C2.16356 9.18203 2.99721 7.13214 4.39828 5.49883C5.79935 3.86553 7.69279 2.72636 9.79619 2.24223C11.8996 1.75809 14.1003 1.95185 16.07 2.79" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <polyline points="22,4 12,14.01 9,11.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const HeadsetIcon = () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 18V12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M21 19C21 20.1046 20.1046 21 19 21H18C16.8954 21 16 20.1046 16 19V16C16 14.8954 16.8954 14 18 14H21V19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3 19C3 20.1046 3.89543 21 5 21H6C7.10457 21 8 20.1046 8 19V16C8 14.8954 7.10457 14 6 14H3V19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const ClockIcon = () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
        <polyline points="12,6 12,12 16,14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const LinkedInIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8V8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="2" y="9" width="4" height="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const TwitterIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M23 3C22.0424 3.67548 20.9821 4.19211 19.86 4.53C19.2577 3.83751 18.4573 3.34669 17.567 3.12393C16.6767 2.90116 15.7395 2.95718 14.8821 3.28445C14.0247 3.61173 13.2884 4.19445 12.773 4.95371C12.2575 5.71297 11.9877 6.61435 12 7.53V8.53C10.2426 8.57557 8.50127 8.18581 6.93101 7.39624C5.36074 6.60667 4.01032 5.43666 3 4C3 4 -1 13 8 17C5.94053 18.398 3.48716 19.099 1 19C10 24 21 19 21 7.5C20.9991 7.22145 20.9723 6.94359 20.92 6.67C21.9406 5.66349 22.6608 4.39271 23 3V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const DribbbleIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
        <path d="M8.56 2.75C4.37 6.03 2 10.16 2 15.16C5.44 11.94 8.69 8.75 12 5.56" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M21.44 21.25C17.25 17.97 15 13.84 15 8.84C18.44 12.06 21.69 15.25 21.44 21.25Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7.5 21.25C11.69 17.97 14 13.84 14 8.84" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const ArrowLeftIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 12H5M12 5L5 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const ArrowRightIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 12H19M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

// --- SWIPER Imports ---
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import type SwiperCore from 'swiper';

// --- SWIPER Base CSS ---
import 'swiper/css';

// --- Placeholder Images ---
const placeholderImage1 = '/images/about-us/placeholder-image-1.png';
const placeholderImage2 = '/images/about-us/placeholder-image-2.png';
const teamMember1 = '/images//about-us/member-1.png';
const teamMember2 = '/images/about-us/member-2.png';
const teamMember3 = '/images/about-us/member-3.png';
const teamMember4 = '/images/about-us/member-4.png';

// --- Team Member Data Interface ---
interface TeamMember {
    id: number;
    name: string;
    title: string;
    description: string;
    image: string;
    socials: {
        linkedin?: string;
        twitter?: string;
        dribbble?: string;
        instagram?: string;
    };
}

// --- Team Member Data ---
const teamMembers: TeamMember[] = [
    {
        id: 1,
        name: "Viktor",
        title: "CEO & Founder",
        description: "Founder of VIKS  — a videographer and creative entrepreneur crafting modern marketing solutions for startups and businesses.",
        image: teamMember1,
        socials: { linkedin: "https://www.linkedin.com/in/viktor-soloviov/", twitter: "https://www.instagram.com/soloviov_vitya/", dribbble: "#" }
    },
    {
        id: 2,
        name: "Valeriy",
        title: "Marketing Team Leader",
        description: "A results-driven strategist who leads teams and crafts impactful marketing campaigns.",
        image: teamMember2,
        socials: { linkedin: "https://www.linkedin.com/in/valerii-dromov-a06945286/", twitter: "#", dribbble: "#" }
    },
    {
        id: 3,
        name: "Eva",
        title: "Lead Designer",
        description: "Focuses on creating compelling visual narratives and brand aesthetics.",
        image: teamMember3,
        socials: { linkedin: "#", twitter: "#", dribbble: "#" }
    },
    {
        id: 4,
        name: "Marden",
        title: "Videographer",
        description: "Transforms ideas into cinematic journeys — where every frame feels like it belongs on the big screen.",
        image: teamMember4,
        socials: { linkedin: "#", twitter: "#", dribbble: "#" }
    },
];


const Page: React.FC = () => {
    // --- Swiper State ---
    const [swiperInstance, setSwiperInstance] = useState<SwiperCore | null>(null);

    // --- Swiper Handlers ---
    const handlePrev = () => {
        swiperInstance?.slidePrev();
    };

    const handleNext = () => {
        swiperInstance?.slideNext();
    };

    return (
        <div className={styles.pageContainer}>

            {/* --- Header Section --- */}
            <section className={styles.headerSection}>
                <div className={styles.headerImageContainer}>
                    {/* WARNING: Consider replacing <img> with Next.js <Image> for optimization */}
                    <img src={placeholderImage1} alt="Agency team working" className={styles.placeholderImage1} />
                </div>
                <div className={styles.headerContentContainer}>
                    <div className={styles.sectionTitle}>
                        <div className={styles.taglineWrapper}>
                            <span className={styles.tagline1}>Tagline</span>
                        </div>
                        <div className={styles.headerTextContent}>
                            <h1 className={styles.heading1}>Our Media Mission</h1>
                            <p className={styles.description1}>
                                Empowering communities through insightful media that informs, engages,
                                and inspires positive change.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Layout Section ('Who we are') --- */}
            <section className={styles.layoutSection}>
                <div className={styles.layoutContainer}>
                    <div className={styles.layoutContent}>
                        <div className={styles.sectionTitle}>
                            <div className={styles.taglineWrapper}>
                                <span className={styles.tagline2}>Our history</span>
                            </div>
                            <div className={styles.layoutTextContent}>
                                <h2 className={styles.heading2}>Who we are?</h2>
                                {/* ***** FIXED ESLINT ERRORS BELOW ***** */}
                                <p className={styles.text2}>
                                    VIKS Production is more than just production. It&apos;s a studio where your brand&apos;s
                                    visual language is created. We begin with social media management and
                                    understanding how people interact with content. Over five years of working with
                                    diverse companies, our founder noticed one common detail—businesses lack
                                    freshness.
                                    <br/><br/>
                                    Social media has become the mirror of the brand. It&apos;s the first point of contact,
                                    shaping how you&apos;re perceived. That&apos;s why we built a team that doesn&apos;t just &quot;make
                                    videos,&quot; but helps businesses look modern, confident, and vibrant.
                                    <br/><br/>
                                    VIKS Production is all about style, influence, and growth. We merge creativity with
                                    strategy to ensure your digital presence is powerful and recognizable.
                                </p>
                                {/* ***** END OF FIXES ***** */}
                            </div>
                        </div>
                    </div>
                    <div className={styles.layoutImageContainer}>
                        {/* WARNING: Consider replacing <img> with Next.js <Image> for optimization */}
                        <img src={placeholderImage2} alt="Filming setup" className={styles.placeholderImage2} />
                    </div>
                </div>
            </section>

            {/* --- Info Section (Quality, Care, Speed) --- */}
            <section className={styles.infoSection}>
                <div className={styles.infoContentContainer}>
                    <div className={styles.infoRow}>
                        {/* Column 1: Quality */}
                        <div className={styles.infoColumn}>
                            <div className={styles.infoItem}>
                                <div className={styles.infoIconWrapper}>
                                    <CheckCircleIcon />
                                </div>
                                <div className={styles.infoTextWrapper}>
                                    <h3 className={styles.infoHeading}>The Quality Of Our Work</h3>
                                    <p className={styles.infoText}>
                                        We offer some of the highest quality services, because our team employs only highly qualified workers.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Column 2: Customer Care */}
                        <div className={styles.infoColumn}>
                            <div className={styles.infoItem}>
                                <div className={styles.infoIconWrapper}>
                                    <HeadsetIcon />
                                </div>
                                <div className={styles.infoTextWrapper}>
                                    <h3 className={styles.infoHeading}>Customer Care</h3>
                                    <p className={styles.infoText}>
                                        We always strive tirelessly to improve our services to maximize the satisfaction of our clientele.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Column 3: Speed */}
                        <div className={styles.infoColumn}>
                            <div className={styles.infoItem}>
                                <div className={styles.infoIconWrapper}>
                                    <ClockIcon />
                                </div>
                                <div className={styles.infoTextWrapper}>
                                    <h3 className={styles.infoHeading}>Speed Of Service Provision</h3>
                                    <p className={styles.infoText}>
                                        We consistently strive to provide our customers with swift and efficient service, ensuring their needs are promptly addressed and met.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Team Slider Section (Now using Swiper) --- */}
            <section className={styles.teamSection}>
                {/* Section Title Area */}
                <div className={styles.teamHeader}>
                    <div className={styles.teamHeaderText}>
                        <div className={styles.teamTaglineWrapper}>
                            <span className={styles.teamTagline}>Meet</span>
                        </div>
                        <h3 className={styles.teamHeading}>Our Team</h3>
                    </div>
                    <p className={styles.teamDescription}>
                        We are a team of dedicated professionals united by a common goal to create stories that change lives. Our mission is to inspire and motivate people through carefully crafted narratives, each filled with passion, experience and creative energy.
                    </p>
                </div>

                {/* Swiper Slider Area */}
                <div className={styles.teamSliderContainer}>
                    <Swiper
                        modules={[Navigation]}
                        onSwiper={setSwiperInstance}
                        slidesPerView={'auto'}
                        spaceBetween={16} // Adjust space if needed
                        loop={true}
                        grabCursor={true}
                        centeredSlides={true} // Center the active slide
                        breakpoints={{
                            600: { spaceBetween: 16 },
                            960: { spaceBetween: 24 },
                            1280: { spaceBetween: 32 }
                        }}
                        className={styles.teamSwiperInstance}
                    >
                        {teamMembers.map((member) => (
                            <SwiperSlide key={member.id} className={styles.teamSwiperSlide}>
                                <div className={styles.teamCard}> {/* Apply scaling/opacity here */}
                                    {/* WARNING: Consider replacing <img> with Next.js <Image> for optimization */}
                                    <img src={member.image} alt={member.name} className={styles.teamCardImage} loading="lazy"/>
                                    <div className={styles.teamCardContent}>
                                        <div className={styles.teamCardInfo}>
                                            <div className={styles.teamCardTitleWrapper}>
                                                <h4 className={styles.teamCardName}>{member.name}</h4>
                                                <p className={styles.teamCardJobTitle}>{member.title}</p>
                                            </div>
                                            <div className={styles.teamCardSocialIcons}>
                                                {member.socials.linkedin && <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer"><LinkedInIcon /></a>}
                                                {member.socials.twitter && <a href={member.socials.twitter} target="_blank" rel="noopener noreferrer"><TwitterIcon /></a>}
                                                {member.socials.dribbble && <a href={member.socials.dribbble} target="_blank" rel="noopener noreferrer"><DribbbleIcon /></a>}
                                            </div>
                                        </div>
                                        <p className={styles.teamCardDescriptionText}>
                                            {member.description}
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* Custom Navigation Buttons */}
                {teamMembers.length > 1 && (
                    <div className={styles.teamNavButtons}>
                        <button
                            className={`${styles.teamNavButton} ${styles.teamNavButtonPrev}`}
                            aria-label="Previous member"
                            onClick={handlePrev}
                        >
                            <ArrowLeftIcon />
                        </button>
                        <button
                            className={`${styles.teamNavButton} ${styles.teamNavButtonNext}`}
                            aria-label="Next member"
                            onClick={handleNext}
                        >
                            <ArrowRightIcon />
                        </button>
                    </div>
                )}
            </section>
            {/* --- End Team Section --- */}


            {/* --- NEW CTA Section --- */}
            <section className={styles.ctaSection}>
                <div className={styles.ctaContainer}> {/* Corresponds to Frame 427320835 */}
                    {/* Inner wrapper for flex layout - corresponds to Frame 427321513 */}
                    <div className={styles.ctaContentWrapper}>
                        <h2 className={styles.ctaHeading}>
                            Ready to work with us ?
                        </h2>
                        {/* Corresponds to Frame 427320691 */}
                        <a href="#" className={styles.ctaButton}>
                            {/* Corresponds to Frame 8 */}
                            <span className={styles.ctaButtonText}>Get Started</span>
                            <ArrowRightIcon />
                        </a>
                    </div>
                </div>
            </section>
            {/* --- End NEW CTA Section --- */}


        </div>
    );
};

export default Page;
