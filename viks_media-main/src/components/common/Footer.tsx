import React from 'react';

import styles from './Footer.module.css'; 

// SVG Icons
const FacebookIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const TwitterIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M23 3C22.0424 3.67548 20.9821 4.19211 19.86 4.53C19.2577 3.83751 18.4573 3.34669 17.567 3.12393C16.6767 2.90116 15.7395 2.95718 14.8821 3.28445C14.0247 3.61173 13.2884 4.19445 12.773 4.95371C12.2575 5.71297 11.9877 6.61435 12 7.53V8.53C10.2426 8.57557 8.50127 8.18581 6.93101 7.39624C5.36074 6.60667 4.01032 5.43666 3 4C3 4 -1 13 8 17C5.94053 18.398 3.48716 19.099 1 19C10 24 21 19 21 7.5C20.9991 7.22145 20.9723 6.94359 20.92 6.67C21.9406 5.66349 22.6608 4.39271 23 3V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const LinkedInIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8V8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="2" y="9" width="4" height="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const InstagramIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" strokeWidth="2"/>
        <path d="M16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.799C15.2063 14.5458 14.5931 15.1514 13.8416 15.5297C13.0901 15.9079 12.2384 16.0396 11.4078 15.9059C10.5771 15.7723 9.80976 15.3801 9.21484 14.7852C8.61992 14.1902 8.22773 13.4229 8.09407 12.5922C7.9604 11.7615 8.09207 10.9099 8.47033 10.1584C8.84859 9.40685 9.45419 8.79374 10.201 8.40624C10.9478 8.01874 11.7978 7.87658 12.63 8C13.4789 8.12588 14.2649 8.52146 14.8717 9.1283C15.4785 9.73515 15.8741 10.5211 16 11.37Z" stroke="currentColor" strokeWidth="2"/>
        <path d="M17.5 6.5H17.51" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const PhoneIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7293C21.7209 20.9845 21.5573 21.2136 21.3521 21.4019C21.1468 21.5901 20.9046 21.7335 20.6407 21.8227C20.3769 21.9119 20.0974 21.9451 19.82 21.92C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77382 17.3147 6.72533 15.2662 5.18999 12.85C3.49997 10.2412 2.44824 7.27099 2.11999 4.18C2.095 3.90347 2.12787 3.62476 2.21649 3.36162C2.30512 3.09849 2.44756 2.85669 2.63476 2.65162C2.82196 2.44655 3.0498 2.28271 3.30379 2.17052C3.55777 2.05833 3.83233 2.00026 4.10999 2H7.10999C7.59531 1.99522 8.06579 2.16708 8.43376 2.48353C8.80173 2.79999 9.04207 3.23945 9.10999 3.72C9.23662 4.68007 9.47144 5.62273 9.80999 6.53C9.94454 6.88792 9.97366 7.27691 9.8939 7.65088C9.81415 8.02485 9.62886 8.36811 9.35999 8.64L8.08999 9.91C9.51355 12.4135 11.5865 14.4864 14.09 15.91L15.36 14.64C15.6319 14.3711 15.9751 14.1858 16.3491 14.1061C16.7231 14.0263 17.1121 14.0555 17.47 14.19C18.3773 14.5286 19.3199 14.7634 20.28 14.89C20.7658 14.9585 21.2094 15.2032 21.5265 15.5775C21.8437 15.9518 22.0122 16.4296 22 16.92Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const MailIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const MapPinIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

interface FooterLinkItem {
    id: string;
    href: string;
    text: string;
}

interface SocialLinkItem {
    id: string;
    href: string;
    label: string; 
    icon: React.ElementType; 
}

interface ContactDetailItem {
    id: string;
    href?: string; 
    text: string;
    icon: React.ElementType;
}


const logoUrl = '/images/logo.png'; 
const description = 'We offers a comprehensive suite of digital marketing services that cover all aspects of our online presence. From SEO and social media marketing to content creation and PPC advertising, they have the expertise and resources to handle our diverse marketing needs.';

const socialLinksData: SocialLinkItem[] = [
    { id: 'fb', href: 'https://www.facebook.com/61571812801984', label: 'Facebook', icon: FacebookIcon },
    { id: 'tw', href: '#', label: 'Twitter', icon: TwitterIcon },
    { id: 'li', href: 'https://linkedin.com/company/viks-production-ai/', label: 'LinkedIn', icon: LinkedInIcon },
    { id: 'in', href: 'https://www.instagram.com/viks_production/', label: 'Instagram', icon: InstagramIcon },
];

const navigationLinks: FooterLinkItem[] = [
    { id: 'nav1', href: '/', text: 'Home' },
    { id: 'nav2', href: '/agency', text: 'Agency' },
    { id: 'nav3', href: '/services', text: 'Services' },
    { id: 'nav4', href: '/', text: 'News' },
    { id: 'nav5', href: '/cases', text: 'Cases' },
];

const licenceLinks: FooterLinkItem[] = [
    { id: 'lic1', href: '/privacy', text: 'Privacy Policy' },
    { id: 'lic2', href: '/terms', text: 'Terms of Service ' },
    
];

const contactDetails: ContactDetailItem[] = [
    { id: 'con1', href: 'tel:+19547745305', text: '(954) 774-5305', icon: PhoneIcon },
    { id: 'con2', href: 'mailto:info@viksproduction.com', text: 'info@viksproduction.com', icon: MailIcon },
    { id: 'con3', text: 'San Jose, Bay Area, California, US', icon: MapPinIcon },
];



const Footer: React.FC = () => {
    return (
        <footer className={styles.footerSection}>
            <div className={styles.container}>
                <div className={styles.footerContent}>

                    
                    <div className={styles.leftColumn}>
                        <img src={logoUrl} alt="Company Logo" className={styles.logo} />
                        <p className={styles.description}>{description}</p>
                        <div className={styles.socialLinks}>
                            {socialLinksData.map((link) => (
                                <a
                                    key={link.id}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={link.label}
                                    className={styles.socialLink}
                                >
                                    <link.icon /> 
                                </a>
                            ))}
                        </div>
                    </div>

                    
                    <div className={styles.rightColumns}>

                        
                        <div className={styles.linkList}>
                            <h4 className={styles.listTitle}>Navigation</h4>
                            <ul>
                                {navigationLinks.map((link) => (
                                    <li key={link.id}>
                                        <a href={link.href} className={styles.footerLink}>{link.text}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        
                        <div className={styles.linkList}>
                            <h4 className={styles.listTitle}>Licence</h4>
                            <ul>
                                {licenceLinks.map((link) => (
                                    <li key={link.id}>
                                        <a href={link.href} className={styles.footerLink}>{link.text}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        
                        <div className={styles.contactList}>
                            <h4 className={styles.listTitle}>Contact</h4>
                            <ul>
                                {contactDetails.map((detail) => (
                                    <li key={detail.id} className={styles.contactItem}>
                                        <detail.icon className={styles.contactIcon} />
                                        {detail.href ? (
                                            <a href={detail.href} className={styles.contactLink}>{detail.text}</a>
                                        ) : (
                                            <span>{detail.text}</span>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </div>

                <div className={styles.footerBottom}>
                    <p>&copy; {new Date().getFullYear()} VIKS Production. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
