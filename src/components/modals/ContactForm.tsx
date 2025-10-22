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

  const processQueuedSubmissions = useCallback(async () => {
    const queued = JSON.parse(localStorage.getItem(QUEUED_SUBMISSIONS_KEY) || '[]');
    if (queued.length === 0) return;

    if (onProcessQueued) {
      await onProcessQueued(queued);
      localStorage.setItem(QUEUED_SUBMISSIONS_KEY, JSON.stringify([]));
      alert(t('contactQueuedSentMessage'));
    }
  }, [t, onProcessQueued]);

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

  // Check Supabase connection on mount
  useEffect(() => {
    if (onProcessQueued) {
      // If we have a process callback, assume we're connected
      setIsSupabaseConnected(true);
      setConnectionChecked(true);
    }
  }, [onProcessQueued]);

  // Process queued submissions when coming online
  useEffect(() => {
    if (isOnline && isSupabaseConnected) {
      processQueuedSubmissions();
    }
  }, [isOnline, isSupabaseConnected, processQueuedSubmissions]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const submissionData = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      title: formData.title || 'No Title',
    };

    // If onSubmit prop is provided, use it instead of direct submission
    if (onSubmit) {
      onSubmit(submissionData);
      alert(t('contactSuccessMessage'));
      setFormData({ name: '', email: '', message: '', title: '' });
      setIsSubmitting(false);
      return;
    }

    // Queue for later when offline or server unavailable
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
