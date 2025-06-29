// src/components/common/Header.tsx
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import services from '@/data/services';
import Image from 'next/image';

import AnimatedMenuIcon from './AnimatedMenuIcon';
import MobileMenu from './MobileMenu';
import styles from './Header.module.css';

// SVG Arrow Icon
const ChevronDownIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <polyline points="6,9 12,15 18,9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen(prev => !prev);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <header className={styles.header}>
      {/* Left Section: Logo and Desktop Navigation */}
      <div className={styles.leftSection}>
        <div className={styles.logoWrapper}>
          <Link href="/">
            <Image
              className={styles.logoImage}
              src="/images/logo.png"
              alt="VIKS Logo"
              width={72}
              height={50}
              priority
            />
          </Link>
        </div>

        <nav className={styles.nav}>
          <Link href="/" className={styles.navItem}>
            <span className={styles.navItemText}>Home</span>
          </Link>
          <Link href="/agency" className={styles.navItem}>
            <span className={styles.navItemText}>Agency</span>
          </Link>

          {/* Services dropdown */}
          <div className={styles.servicesDropdown}>
            <button type="button" className={styles.navItem}>
              <span className={styles.navItemText}>Services</span>
              <ChevronDownIcon />
            </button>
            <ul className={styles.dropdownMenu}>
              {services.map(s => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className={styles.dropdownItem}>
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <Link href="/news" className={styles.navItem}>
            <span className={styles.navItemText}>News</span>
          </Link>
          <Link href="/cases" className={styles.navItem}>
            <span className={styles.navItemText}>Cases</span>
          </Link>
        </nav>
      </div>

      {/* Right Section: Desktop "Contact Us" Button */}
      <div className={styles.getStartedWrapper}>
        <Link href="/contact-us" className={styles.getStartedLink}>
          <span className={styles.getStartedText}>Contact Us</span>
        </Link>
      </div>

      {/* Mobile Menu Toggle Button */}
      <div className={styles.mobileNavToggle}>
        <button
          type="button"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          <AnimatedMenuIcon isOpen={isMobileMenuOpen} />
        </button>
      </div>

      {/* Mobile Menu Component */}
      <MobileMenu toggleMenu={toggleMobileMenu} isOpen={isMobileMenuOpen} />
    </header>
  );
};

export default Header;