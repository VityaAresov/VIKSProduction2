// vercel: // ContactForm.tsx
// Добавлена директива "use client" для Next.js App Router
// Добавлено поле "Phone Number"

"use client";

import React, {useState} from 'react';
import styles from './ContactForm.module.css';

// SVG Icons
const PhoneIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7293C21.7209 20.9845 21.5573 21.2136 21.3521 21.4019C21.1468 21.5901 20.9046 21.7335 20.6407 21.8227C20.3769 21.9119 20.0974 21.9451 19.82 21.92C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77382 17.3147 6.72533 15.2662 5.18999 12.85C3.49997 10.2412 2.44824 7.27099 2.11999 4.18C2.095 3.90347 2.12787 3.62476 2.21649 3.36162C2.30512 3.09849 2.44756 2.85669 2.63476 2.65162C2.82196 2.44655 3.0498 2.28271 3.30379 2.17052C3.55777 2.05833 3.83233 2.00026 4.10999 2H7.10999C7.59531 1.99522 8.06579 2.16708 8.43376 2.48353C8.80173 2.79999 9.04207 3.23945 9.10999 3.72C9.23662 4.68007 9.47144 5.62273 9.80999 6.53C9.94454 6.88792 9.97366 7.27691 9.8939 7.65088C9.81415 8.02485 9.62886 8.36811 9.35999 8.64L8.08999 9.91C9.51355 12.4135 11.5865 14.4864 14.09 15.91L15.36 14.64C15.6319 14.3711 15.9751 14.1858 16.3491 14.1061C16.7231 14.0263 17.1121 14.0555 17.47 14.19C18.3773 14.5286 19.3199 14.7634 20.28 14.89C20.7658 14.9585 21.2094 15.2032 21.5265 15.5775C21.8437 15.9518 22.0122 16.4296 22 16.92Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const EnvelopeIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

interface FormData {
    firstName: string;
    lastName: string;
    companyEmail: string;
    phoneNumber: string;
    mediaBudget: string;
    message: string;
}

const ContactForm: React.FC = () => {
    // Состояние для данных формы - ДОБАВЛЕНО поле phoneNumber
    const [formData, setFormData] = useState<FormData>({
        firstName: '',
        lastName: '',
        companyEmail: '',
        phoneNumber: '', // <<<--- ДОБАВЛЕНО ЗДЕСЬ
        mediaBudget: '',
        message: '',
    });

    // Состояние для процесса отправки и результата
    const [isSubmitting, setIsSubmitting] = useState(false);
    // Сообщения об успехе/ошибке по умолчанию на английском
    const [submitStatus, setSubmitStatus] = useState<{ success: boolean | null; message: string }>({
        success: null,
        message: '',
    });

    // Обработчик изменения полей ввода
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    // Обработчик отправки формы
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Предотвращаем стандартную отправку формы
        setIsSubmitting(true); // Устанавливаем флаг отправки
        setSubmitStatus({success: null, message: ''}); // Сбрасываем статус

        const backendUrl = '/api/send-telegram'; // Относительный путь к Vercel функции

        try {
            // Отправляем POST-запрос на бэкенд
            const response = await fetch(backendUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json', // Указываем, что отправляем JSON
                },
                body: JSON.stringify(formData), // Преобразуем данные формы в JSON-строку
            });

            // Пытаемся распарсить ответ от сервера как JSON
            const result = await response.json();

            // Проверяем статус ответа и поле 'success' в JSON
            if (response.ok && result.success) {
                // Используем сообщение от сервера или стандартное английское
                setSubmitStatus({success: true, message: result.message || 'Message sent successfully!'});
                // Очищаем форму в случае успеха - ДОБАВЛЕНО обнуление phoneNumber
                setFormData({
                    firstName: '',
                    lastName: '',
                    companyEmail: '',
                    phoneNumber: '', // <<<--- ДОБАВЛЕНО ЗДЕСЬ
                    mediaBudget: '',
                    message: '',
                });
            } else {
                // Используем сообщение от сервера или стандартное английское
                throw new Error(result.message || 'Server processing error.');
            }
        } catch (error) {
            // Обрабатываем ошибки сети или ошибки парсинга JSON
            console.error('Form submission error:', error); // Лог ошибки на английском для консоли
            const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred while sending. Please try again.';
            // Улучшенная обработка ошибки парсинга JSON (сообщения на английском)
            if (errorMessage.toLowerCase().includes('failed to fetch') || errorMessage.toLowerCase().includes('networkerror')) {
                setSubmitStatus({
                    success: false,
                    message: 'Network error. Could not contact server.'
                });
            } else if (errorMessage.includes('Unexpected token') || errorMessage.includes('Unexpected end of JSON input') || errorMessage.toLowerCase().includes('json.parse')) {
                setSubmitStatus({
                    success: false,
                    message: 'Server response error. Check Vercel function logs.'
                });
            } else {
                setSubmitStatus({ success: false, message: errorMessage });
            }
        } finally {
            // В любом случае убираем флаг отправки
            setIsSubmitting(false);
        }
    };

    // Разметка JSX для формы и контактной информации (текст на английском)
    return (
        <div className={styles.pageContainer}>
            <div className={styles.gridContainer}>
                {/* Левая колонка */}
                <div className={styles.leftColumn}>
                    {/* ... (existing left column content) ... */}
                    <h1 className={styles.heading}>
                        Ready to work with <br/> VIKS Agency?
                    </h1>
                    <p className={styles.paragraph}>
                        We seek lasting relationships to help our clients unlock rapid growth at efficient economics.
                        Tell us where you are and where you want to be. </p>
                    <div className={styles.contactInfo}>
                        <p className={styles.contactLine}>
                            <PhoneIcon />
                            <span><strong>Call Us:</strong> +1 (954) 774-5305</span>
                        </p>
                        <p className={styles.contactLine}>
                            <EnvelopeIcon />
                            <span><strong>Write To Us:</strong> info@viksproduction.com</span>
                        </p>
                    </div>
                </div>

                {/* Правая колонка (Форма) */}
                <div className={styles.rightColumn}>
                    <form className={styles.form} onSubmit={handleSubmit}>
                        {/* Поля формы (метки на английском) */}
                        <div className={styles.formRow}>
                            {/* ... (First Name and Last Name fields) ... */}
                            <div className={styles.formGroup}>
                                <label htmlFor="firstName" className={styles.label}>FIRST NAME</label>
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    className={styles.input}
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    required // Обязательное поле
                                    aria-required="true"
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="lastName" className={styles.label}>LAST NAME</label>
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    className={styles.input}
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    // Не обязательное поле
                                />
                            </div>
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="companyEmail" className={styles.label}>COMPANY EMAIL</label>
                            <input
                                type="email"
                                id="companyEmail"
                                name="companyEmail"
                                className={styles.input}
                                value={formData.companyEmail}
                                onChange={handleChange}
                                required // Обязательное поле
                                aria-required="true"
                            />
                        </div>

                        {/* --- НОВОЕ ПОЛЕ ДЛЯ НОМЕРА ТЕЛЕФОНА --- */}
                        <div className={styles.formGroup}>
                            <label htmlFor="phoneNumber" className={styles.label}>PHONE NUMBER</label>
                            <input
                                type="tel" // Используем type="tel" для семантики
                                id="phoneNumber"
                                name="phoneNumber" // Должно совпадать с ключом в state
                                className={styles.input}
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                // Сделайте поле обязательным, если нужно, добавив required и aria-required="true"
                                // required
                                // aria-required="true"
                            />
                        </div>
                        {/* --- КОНЕЦ НОВОГО ПОЛЯ --- */}

                        <div className={styles.formGroup}>
                            <label htmlFor="mediaBudget" className={styles.label}>MONTHLY MEDIA BUDGET</label>
                            <select
                                id="mediaBudget"
                                name="mediaBudget"
                                className={styles.select}
                                value={formData.mediaBudget}
                                onChange={handleChange}
                                // Не обязательное поле
                            >
                                <option value="">Please Select</option>
                                <option value="$1000 - $5000">$1000 - $5000</option>
                                <option value="$5000 - $20000">$5000 - $20000</option>
                                <option value="$20000 - $50000">$20000 - $50000</option>
                                <option value="$50000+">$50000+</option>
                            </select>
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="message" className={styles.label}>YOUR MESSAGE</label>
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                className={styles.textarea}
                                value={formData.message}
                                onChange={handleChange}
                                required // Обязательное поле
                                aria-required="true"
                            ></textarea>
                        </div>

                        <div className="formGroup checkboxGroup">
                         <label className="checkboxLabel">
                         <input type="checkbox" name="sms_consent" required />
                          I agree to receive SMS updates and notifications from Viks Production. Message and data rates may apply.
                         </label>
                        </div>

                        <div className={styles.recaptchaNotice}>
                            {/* ... (reCAPTCHA notice) ... */}
                            This site is protected by reCAPTCHA and the Google <a href="privacy">Privacy Policy</a> and <a
                            href="terms">Terms of Service</a> apply.
                        </div>

                        {/* Отображение статуса отправки (сообщения на английском) */}
                        {submitStatus.message && (
                            <p role="alert" // Добавляем роль для доступности
                               style={{
                                   color: submitStatus.success === true ? 'green' : (submitStatus.success === false ? 'red' : 'black'),
                                   marginTop: '1rem',
                                   textAlign: 'center', // Выравнивание по центру
                                   fontSize: '0.9rem',
                                   fontWeight: 'bold' // Делаем текст жирным для лучшей читаемости
                               }}>
                                {submitStatus.message}
                            </p>
                        )}

                        {/* Кнопка отправки (текст на английском) */}
                        <button
                            type="submit"
                            className={styles.submitButton}
                            disabled={isSubmitting} // Кнопка неактивна во время отправки
                            aria-busy={isSubmitting} // Атрибут доступности для состояния загрузки
                        >
                            {isSubmitting ? 'Submitting...' : 'SUBMIT YOUR MESSAGE'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
