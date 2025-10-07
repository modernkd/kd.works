import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';
import styles from './ContactForm.module.css';

interface ContactFormProps {
  isVisible: boolean;
  onClose: () => void;
}

const QUEUED_SUBMISSIONS_KEY = 'queuedContactSubmissions';

export default function ContactForm({ isVisible, onClose }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    title: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const { t } = useTranslation();

  // Update online status
  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // Process queued submissions when coming online
  useEffect(() => {
    if (isOnline) {
      processQueuedSubmissions();
    }
  }, [isOnline]);

  const processQueuedSubmissions = async () => {
    const queued = JSON.parse(localStorage.getItem(QUEUED_SUBMISSIONS_KEY) || '[]');
    if (queued.length === 0) return;

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) return;

    const remaining = [];
    for (const submission of queued) {
      try {
        await emailjs.send(serviceId, templateId, submission, publicKey);
        // Success, don't add to remaining
      } catch (error) {
        console.error('Failed to send queued submission:', error);
        remaining.push(submission);
      }
    }

    localStorage.setItem(QUEUED_SUBMISSIONS_KEY, JSON.stringify(remaining));
    if (remaining.length === 0) {
      alert(t('contactQueuedSentMessage'));
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Check if we're on the client side and emailjs is available
    if (typeof window === 'undefined' || !emailjs) {
      alert(t('contactConfigErrorMessage'));
      setIsSubmitting(false);
      return;
    }

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      alert(t('contactConfigErrorMessage'));
      setIsSubmitting(false);
      return;
    }

    const submissionData = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      title: formData.title || 'No Title',
    };

    if (!isOnline) {
      // Queue for later
      const queued = JSON.parse(localStorage.getItem(QUEUED_SUBMISSIONS_KEY) || '[]');
      queued.push(submissionData);
      localStorage.setItem(QUEUED_SUBMISSIONS_KEY, JSON.stringify(queued));
      alert(t('contactQueuedMessage'));
      setFormData({ name: '', email: '', message: '', title: '' });
      setIsSubmitting(false);
      onClose();
      return;
    }

    try {
      await emailjs.send(serviceId, templateId, submissionData, publicKey);
      alert(t('contactSuccessMessage'));
    } catch (error) {
      console.error('Email send error:', error);
      alert(t('contactErrorMessage'));
    }

    setFormData({ name: '', email: '', message: '', title: '' });
    setIsSubmitting(false);
    onClose();
  };

  if (!isVisible) return null;

  const handleFormClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <aside className={styles.contactForm} onClick={handleFormClick}>
      <h3 className={styles.contactTitle}>{t('contactTitle')}</h3>
      <form onSubmit={handleSubmit} className={styles.contactFormElement}>
        <input
          type="text"
          name="name"
          placeholder={t('contactNamePlaceholder')}
          value={formData.name}
          onChange={handleInputChange}
          required
          className={styles.formInput}
        />
        <input
          name="title"
          placeholder={t('contactTitlePlaceholder')}
          value={formData.title}
          onChange={handleInputChange}
          required
          className={styles.formInput}
        />
        <input
          type="email"
          name="email"
          placeholder={t('contactEmailPlaceholder')}
          value={formData.email}
          onChange={handleInputChange}
          required
          className={styles.formInput}
        />
        <textarea
          name="message"
          placeholder={t('contactMessagePlaceholder')}
          value={formData.message}
          onChange={handleInputChange}
          required
          rows={4}
          className={styles.formTextarea}
        />
        <button type="submit" disabled={isSubmitting} className={styles.submitButton}>
          {isSubmitting ? t('contactSendingButton') : t('contactSendButton')}
        </button>
      </form>
    </aside>
  );
}
