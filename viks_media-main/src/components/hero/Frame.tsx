'use client';

import React, {JSX} from "react";
import styles from "./Frame.module.css";

// SVG Arrow Icon
const ArrowRightIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 12H19M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);


export const Frame = (): JSX.Element => {
    return (

        <div className={styles.frame}>
            <div className={styles.divWrapper}> {}
                <h1 className={styles.textWrapper}> {}
                    Create bold content that moves brands forward
                </h1>
            </div>

            <p className={styles.description}> {}
                We’re a creative content agency combining video production, AI-powered storytelling, 
marketing, and web development to help startups and businesses grow smarter and faster.
            </p>

            <div className={styles.actionsWrapper}>
                <a href="/contact-us" className={styles.scheduleButton}>
                    <div className={styles.scheduleButtonContent}>
                        <div className={styles.scheduleButtonText}>Schedule Call</div>
                    </div>
                    <ArrowRightIcon />
                </a>
                <a href="/cases" className={styles.caseStudyLink}> {}
                    View Case Study
                </a>
            </div>
        </div>
    );
};


