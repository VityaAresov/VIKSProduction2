@@ .. @@
 interface FaqItemProps {
     id: string;
     question: string;
     answer: string;
     isOpen: boolean;
     onToggle: (id: string) => void;
+    icon?: React.ComponentType;
 }
 
-const FaqItem: React.FC<FaqItemProps> = ({ id, question, answer, isOpen, onToggle }) => {
+const FaqItem: React.FC<FaqItemProps> = ({ id, question, answer, isOpen, onToggle, icon: Icon }) => {
 
     const MinusIcon = () => (
         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
         </svg>
     );
 
     const PlusIcon = () => (
         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
         </svg>
     );
 
     return (
         <div className={`${styles.faqItem} ${isOpen ? styles.open : ''}`}>
             <div className={styles.faqHeader} onClick={() => onToggle(id)} aria-expanded={isOpen} aria-controls={`faq-answer-${id}`} role="button" tabIndex={0} onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onToggle(id)}>
+                {Icon && (
+                    <div className={styles.faqQuestionIcon}>
+                        <Icon />
+                    </div>
+                )}
                 <h3 className={styles.faqQuestion}>{question}</h3>
                 <div className={styles.faqIcon}>
                     {isOpen ? <MinusIcon /> : <PlusIcon />}
                 </div>
             </div>
             <div className={`${styles.faqAnswerContainer} ${isOpen ? styles.open : ''}`}>
                 <div id={`faq-answer-${id}`} className={styles.faqAnswerContent}>
                     {answer}
                 </div>
             </div>
         </div>
     );
 };
 
 export default FaqItem;