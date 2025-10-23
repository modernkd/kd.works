import { useState, useEffect, useCallback } from 'react';
import { supabase } from '../../lib/supabase';
import ContactForm from './ContactForm';

import type { QueuedSubmission } from '../../types';

export interface ContactFormWrapperProps {
  isVisible?: boolean;
  onClose?: () => void;
  initialQueuedSubmissions?: QueuedSubmission[];
  onSubmissionQueued?: (submission: QueuedSubmission) => void;
}

export default function ContactFormWrapper({
  isVisible = false,
  onClose,
  initialQueuedSubmissions = [],
  onSubmissionQueued,
}: ContactFormWrapperProps) {
  const [queuedSubmissions, setQueuedSubmissions] = useState<QueuedSubmission[]>(initialQueuedSubmissions);

  /**
   * Processes queued submissions by attempting to insert them into Supabase.
   * Removes successfully processed submissions from the queue.
   * @param submissions - Array of submission data to process
   */
  const processQueuedSubmissions = useCallback(
    async (submissions: Array<{ name: string; email: string; title: string; message: string }>) => {
      for (const submission of submissions) {
        try {
          const { error } = await supabase.from('notes').insert([submission]);

          if (!error) {
            setQueuedSubmissions((prev) =>
              prev.filter((s) => s.data.name !== submission.name || s.data.email !== submission.email)
            );
          } else {
            console.error('Failed to process queued submission:', error);
          }
        } catch (error) {
          console.error('Failed to process queued submission:', error);
        }
      }
    },
    []
  );

  useEffect(() => {
    if (navigator.onLine && queuedSubmissions.length > 0) {
      processQueuedSubmissions(queuedSubmissions.map((s) => s.data));
    }
  }, [processQueuedSubmissions, queuedSubmissions]);

  useEffect(() => {
    const handleOnline = () => {
      if (queuedSubmissions.length > 0) {
        processQueuedSubmissions(queuedSubmissions.map((s) => s.data));
      }
    };

    window.addEventListener('online', handleOnline);
    return () => window.removeEventListener('online', handleOnline);
  }, [processQueuedSubmissions, queuedSubmissions]);

  /**
   * Handles form submission by creating a queued submission and closing the form.
   * @param formData - The form data from the contact form
   */
  const handleFormSubmit = useCallback(
    (formData: { name: string; email: string; title: string; message: string }) => {
      const submission: QueuedSubmission = {
        id: Date.now().toString(),
        data: formData,
        timestamp: Date.now(),
      };

      setQueuedSubmissions((prev) => [...prev, submission]);
      onSubmissionQueued?.(submission);

      onClose?.();
    },
    [onSubmissionQueued, onClose]
  );

  return (
    <ContactForm
      isVisible={isVisible}
      onClose={onClose}
      onSubmit={handleFormSubmit}
      onProcessQueued={processQueuedSubmissions}
    />
  );
}
