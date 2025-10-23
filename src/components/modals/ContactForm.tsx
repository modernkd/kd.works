import { useState, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './ContactForm.module.css';

interface ContactFormProps {
  isVisible: boolean;
  onClose?: () => void;
  onSubmit?: (data: { name: string; email: string; title: string; message: string }) => void;
  onProcessQueued?: (
    submissions: Array<{ name: string; email: string; title: string; message: string }>
  ) => Promise<void>;
}

const QUEUED_SUBMISSIONS_KEY = 'queuedContactSubmissions';

export default function ContactForm({ isVisible, onClose = () => {}, onSubmit, onProcessQueued }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    title: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [isSupabaseConnected, setIsSupabaseConnected] = useState(true);
  const [connectionChecked, setConnectionChecked] = useState(false);
  const { t } = useTranslation();

  /**
   * Processes any queued contact form submissions stored in localStorage.
   * Attempts to send them when online and clears the queue on success.
   */
  const processQueuedSubmissions = useCallback(async () => {
    const queued = JSON.parse(localStorage.getItem(QUEUED_SUBMISSIONS_KEY) || '[]');
    if (queued.length === 0) return;

    if (onProcessQueued) {
      await onProcessQueued(queued);
      localStorage.setItem(QUEUED_SUBMISSIONS_KEY, JSON.stringify([]));
      alert(t('contactQueuedSentMessage'));
    }
  }, [t, onProcessQueued]);

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

  useEffect(() => {
    if (onProcessQueued) {
      setIsSupabaseConnected(true);
      setConnectionChecked(true);
    }
  }, [onProcessQueued]);

  useEffect(() => {
    if (isOnline && isSupabaseConnected) {
      processQueuedSubmissions();
    }
  }, [isOnline, isSupabaseConnected, processQueuedSubmissions]);

  /**
   * Updates form data when user types in input fields.
   * @param e - Change event from input or textarea
   */
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  /**
   * Handles form submission, either sending immediately or queuing for later.
   * @param e - Form submit event
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const submissionData = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      title: formData.title || 'No Title',
    };

    if (onSubmit) {
      onSubmit(submissionData);
      alert(t('contactSuccessMessage'));
      setFormData({ name: '', email: '', message: '', title: '' });
      setIsSubmitting(false);
      return;
    }

    if (!isOnline || !isSupabaseConnected) {
      const queued = JSON.parse(localStorage.getItem(QUEUED_SUBMISSIONS_KEY) || '[]');
      queued.push(submissionData);
      localStorage.setItem(QUEUED_SUBMISSIONS_KEY, JSON.stringify(queued));

      alert(t('contactQueuedMessage'));
      setFormData({ name: '', email: '', message: '', title: '' });
      onClose();
    } else {
      alert(t('contactErrorMessage'));
    }

    setIsSubmitting(false);
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
