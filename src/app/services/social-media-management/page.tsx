@@ .. @@
       {/* FAQ */}
       <section className={styles.faqSection}>
         <div className={styles.container}>
-          <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
-          <div className={styles.faqGrid}>
-            <div className={styles.faqItem}>
-              <h3 className={styles.faqQuestion}>Which social media platforms do you manage?</h3>
-              <p className={styles.faqAnswer}>
-                We manage all major platforms including Instagram, Facebook, LinkedIn, TikTok, Twitter, and YouTube. We'll recommend the best platforms based on your target audience and business goals.
-              </p>
-            </div>
-            <div className={styles.faqItem}>
-              <h3 className={styles.faqQuestion}>How do you measure success?</h3>
-              <p className={styles.faqAnswer}>
-                We track key metrics like engagement rate, follower growth, reach, website traffic, and most importantly, conversions and ROI. You'll receive detailed monthly reports showing your progress.
-              </p>
-            </div>
-            <div className={styles.faqItem}>
-              <h3 className={styles.faqQuestion}>Do you create all the content?</h3>
-              <p className={styles.faqAnswer}>
-                Yes, our creative team handles all content creation including graphics, videos, captions, and hashtag research. We work with you to ensure everything aligns with your brand voice and goals.
-              </p>
-            </div>
-            <div className={styles.faqItem}>
-              <h3 className={styles.faqQuestion}>How quickly will I see results?</h3>
-              <p className={styles.faqAnswer}>
-                While organic growth takes time, most clients see improved engagement within the first month. Significant follower growth and business impact typically occur within 3-6 months of consistent strategy execution.
-              </p>
-            </div>
+          <div className={styles.faqContentWrapper}>
+            <div className={styles.faqLeftColumn}>
+              <div className={styles.faqHeaderBlock}>
+                <h2 className={styles.faqTitle}>Social Media Management FAQs</h2>
+                <p className={styles.faqDescription}>
+                  Get answers to the most common questions about our social media management services and strategies.
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
+                        <path d="M3 18V12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
+                        <path d="M21 19C21 20.1046 20.1046 21 19 21H18C16.8954 21 16 20.1046 16 19V16C16 14.8954 16.8954 14 18 14H21V19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
+                        <path d="M3 19C3 20.1046 3.89543 21 5 21H6C7.10457 21 8 20.1046 8 19V16C8 14.8954 7.10457 14 6 14H3V19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
+                      </svg>
+                    </div>
+                    <h3 className={styles.faqQuestionText}>Which social media platforms do you manage?</h3>
+                  </div>
+                  <div className={styles.faqAnswerContent}>
+                    We manage all major platforms including Instagram, Facebook, LinkedIn, TikTok, Twitter, and YouTube. We'll recommend the best platforms based on your target audience and business goals.
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
+                    <h3 className={styles.faqQuestionText}>How do you measure success?</h3>
+                  </div>
+                  <div className={styles.faqAnswerContent}>
+                    We track key metrics like engagement rate, follower growth, reach, website traffic, and most importantly, conversions and ROI. You'll receive detailed monthly reports showing your progress.
+                  </div>
+                </div>
+                <div className={styles.faqItemWrapper}>
+                  <div className={styles.faqItemHeader}>
+                    <div className={styles.faqQuestionIcon}>
+                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
+                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
+                      </svg>
+                    </div>
+                    <h3 className={styles.faqQuestionText}>Do you create all the content?</h3>
+                  </div>
+                  <div className={styles.faqAnswerContent}>
+                    Yes, our creative team handles all content creation including graphics, videos, captions, and hashtag research. We work with you to ensure everything aligns with your brand voice and goals.
+                  </div>
+                </div>
+                <div className={styles.faqItemWrapper}>
+                  <div className={styles.faqItemHeader}>
+                    <div className={styles.faqQuestionIcon}>
+                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
+                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
+                        <polyline points="12,6 12,12 16,14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
+                      </svg>
+                    </div>
+                    <h3 className={styles.faqQuestionText}>How quickly will I see results?</h3>
+                  </div>
+                  <div className={styles.faqAnswerContent}>
+                    While organic growth takes time, most clients see improved engagement within the first month. Significant follower growth and business impact typically occur within 3-6 months of consistent strategy execution.
+                  </div>
+                </div>
+              </div>
+            </div>
           </div>
         </div>
       </section>