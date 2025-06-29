import React, {useState} from 'react';
import FaqItem from './FaqItem';
import styles from './FaqSection.module.css';
import Link from "next/link";

// SVG Icons
const CheckIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const HeadsetIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 18V12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M21 19C21 20.1046 20.1046 21 19 21H18C16.8954 21 16 20.1046 16 19V16C16 14.8954 16.8954 14 18 14H21V19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3 19C3 20.1046 3.89543 21 5 21H6C7.10457 21 8 20.1046 8 19V16C8 14.8954 7.10457 14 6 14H3V19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const ClockIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
        <polyline points="12,6 12,12 16,14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const TrendingUpIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <polyline points="23,6 13.5,15.5 8.5,10.5 1,18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <polyline points="17,6 23,6 23,12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

interface FaqData {
    id: string;
    question: string;
    answer: string;
    icon?: React.ComponentType;
}

const faqData: FaqData[] = [
    {
        id: 'q1',
        question: 'Why is digital marketing important for my business?',
        answer: 'Digital marketing allows businesses to reach and engage with a wider audience, generate leads, drive website traffic, and increase brand visibility. It provides measurable results, allows for targeted marketing efforts, and enables businesses to adapt and optimize their strategies based on data and insights.',
        icon: TrendingUpIcon,
    },
    {
        id: 'q2',
        question: 'Which industries does VIKS specialize in?',
        answer: 'Our core expertise lies in tech startups, SaaS, e‑commerce, corporate events and B2B services. We leverage industry insights to craft messaging and visuals that resonate with your target audience.',
        icon: CheckIcon,
    },
    {
        id: 'q3',
        question: 'How long does it take to see results from digital marketing efforts?',
        answer: 'The timeframe for seeing results varies depending on the strategies used, industry competition, budget, and specific goals. Some tactics like PPC can yield quick results, while SEO and content marketing typically require several months to show significant impact.',
        icon: ClockIcon,
    },
    {
        id: 'q4',
        question: 'How do you measure the success of digital marketing campaigns?',
        answer: 'Success is measured using various Key Performance Indicators (KPIs) relevant to the campaign goals, such as website traffic, conversion rates, lead generation, cost per acquisition (CPA), return on investment (ROI), engagement metrics (likes, shares, comments), and brand awareness.',
        icon: HeadsetIcon,
    },

];


const FaqSection: React.FC = () => {


    const [openItemId, setOpenItemId] = useState<string | null>(faqData.length > 0 ? faqData[0].id : null);


    const handleToggle = (id: string) => {
        setOpenItemId(prevId => (prevId === id ? null : id));
    };

    return (
        <section className={styles.faqSection}>
            <div className={styles.contentWrapper}>

                <div className={styles.leftColumn}>
                    <div className={styles.headerBlock}>
                        <h2 className={styles.title}>Digital Marketing FAQs</h2>
                        <p className={styles.description}>
                            As a leading digital marketing agency, we are dedicated to providing comprehensive
                            educational resources and answering frequently asked questions to help our clients.
                        </p>
                    </div>
                    <div className={styles.moreQuestionsBlock}>
                        <p className={styles.moreQuestionsText}>Have more questions?</p>
                        <Link href="/contact-us" className={styles.contactButton}>
                            <span>Contact Us</span>
                        </Link>
                    </div>
                </div>

                <div className={styles.rightColumn}>
                    <div className={styles.accordionList}>
                        {faqData.map((faq) => (
                            <FaqItem
                                key={faq.id}
                                id={faq.id}
                                question={faq.question}
                                answer={faq.answer}
                                isOpen={openItemId === faq.id}
                                onToggle={handleToggle}
                                icon={faq.icon}
                            />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default FaqSection;