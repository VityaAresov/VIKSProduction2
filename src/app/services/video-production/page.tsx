@@ .. @@
       {/* FAQ */}
       <section className={styles.faqSection}>
         <div className={styles.container}>
-          <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
-          <div className={styles.faqGrid}>
-            <div className={styles.faqItem}>
-              <h3 className={styles.faqQuestion}>How long does video production take?</h3>
-              <p className={styles.faqAnswer}>
-                Timeline varies by project scope. Simple videos take 1-2 weeks, while complex productions may take 4-6 weeks. We'll provide a detailed timeline during our initial consultation.
-              </p>
-            </div>
-            <div className={styles.faqItem}>
-              <h3 className={styles.faqQuestion}>Do you provide scripts and concepts?</h3>
-              <p className={styles.faqAnswer}>
-                Yes! Our team includes experienced scriptwriters and creative directors who will develop compelling concepts tailored to your brand and objectives.
-              </p>
-            </div>
-            <div className={styles.faqItem}>
-              <h3 className={styles.faqQuestion}>What's included in post-production?</h3>
-              <p className={styles.faqAnswer}>
-                Post-production includes editing, color grading, audio mixing, motion graphics, and delivery in multiple formats optimized for your intended platforms.
-              </p>
-            </div>
-            <div className={styles.faqItem}>
-              <h3 className={styles.faqQuestion}>Can you work with our existing brand guidelines?</h3>
-              <p className={styles.faqAnswer}>
-                Absolutely. We ensure all video content aligns with your brand identity, using your colors, fonts, and style guidelines throughout the production.
-              </p>
-            </div>
+          <div className={styles.faqContentWrapper}>
+            <div className={styles.faqLeftColumn}>
+              <div className={styles.faqHeaderBlock}>
+                <h2 className={styles.faqTitle}>Video Production FAQs</h2>
+                <p className={styles.faqDescription}>
+                  Get answers to the most common questions about our video production services and process.
+                </p>
+              </div>
+              <div className={styles.faqMoreQuestionsBlock}>
+                <p className={styles.faqMoreQuestionsText}>Have more questions?</p>
+                <Link href="/contact-us" className={styles.faqContactButton}>
+                  <span>Contact Us</span>
+                </Link>
+              </div>
+            </div>
+            <div className={styles.faqRightColumn}>
+              <div className={styles.faqAccordionList}>
+                <div className={styles.faqItemWrapper}>
+                  <div className={styles.faqItemHeader}>
+                    <div className={styles.faqQuestionIcon}>
+                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
+                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
+                        <polyline points="12,6 12,12 16,14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
+                      </svg>
+                    </div>
+                    <h3 className={styles.faqQuestionText}>How long does video production take?</h3>
+                  </div>
+                  <div className={styles.faqAnswerContent}>
+                    Timeline varies by project scope. Simple videos take 1-2 weeks, while complex productions may take 4-6 weeks. We'll provide a detailed timeline during our initial consultation.
+                  </div>
+                </div>
+                <div className={styles.faqItemWrapper}>
+                  <div className={styles.faqItemHeader}>
+                    <div className={styles.faqQuestionIcon}>
+                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
+                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
+                      </svg>
+                    </div>
+                    <h3 className={styles.faqQuestionText}>Do you provide scripts and concepts?</h3>
+                  </div>
+                  <div className={styles.faqAnswerContent}>
+                    Yes! Our team includes experienced scriptwriters and creative directors who will develop compelling concepts tailored to your brand and objectives.
+                  </div>
+                </div>
+                <div className={styles.faqItemWrapper}>
+                  <div className={styles.faqItemHeader}>
+                    <div className={styles.faqQuestionIcon}>
+                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
+                        <path d="M3 18V12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
+                        <path d="M21 19C21 20.1046 20.1046 21 19 21H18C16.8954 21 16 20.1046 16 19V16C16 14.8954 16.8954 14 18 14H21V19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
+                        <path d="M3 19C3 20.1046 3.89543 21 5 21H6C7.10457 21 8 20.1046 8 19V16C8 14.8954 7.10457 14 6 14H3V19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
+                      </svg>
+                    </div>
+                    <h3 className={styles.faqQuestionText}>What's included in post-production?</h3>
+                  </div>
+                  <div className={styles.faqAnswerContent}>
+                    Post-production includes editing, color grading, audio mixing, motion graphics, and delivery in multiple formats optimized for your intended platforms.
+                  </div>
+                </div>
+                <div className={styles.faqItemWrapper}>
+                  <div className={styles.faqItemHeader}>
+                    <div className={styles.faqQuestionIcon}>
+                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
+                        <polyline points="23,6 13.5,15.5 8.5,10.5 1,18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
+                        <polyline points="17,6 23,6 23,12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
+                      </svg>
+                    </div>
+                    <h3 className={styles.faqQuestionText}>Can you work with our existing brand guidelines?</h3>
+                  </div>
+                  <div className={styles.faqAnswerContent}>
+                    Absolutely. We ensure all video content aligns with your brand identity, using your colors, fonts, and style guidelines throughout the production.
+                  </div>
+                </div>
+              </div>
+            </div>
           </div>
         </div>
       </section>