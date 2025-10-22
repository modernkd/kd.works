import { useState, useEffect, useCallback } from 'react';
import { supabase } from '../../lib/supabase';
import ContactForm from './ContactForm';

interface QueuedSubmission {
  id: string;
  data: {
    name: string;
    email: string;
    title: string;
    message: string;
  };
  timestamp: number;
}

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

  const processQueuedSubmissions = useCallback(
    async (submissions: Array<{ name: string; email: string; title: string; message: string }>) => {
      // Process queued submissions by attempting to submit to Supabase
      for (const submission of submissions) {
        try {
          const { error } = await supabase.from('notes').insert([submission]);

          if (!error) {
            // Success - remove from our queue if it exists there
            setQueuedSubmissions((prev) =>
              prev.filter((s) => s.data.name !== submission.name || s.data.email !== submission.email)
            );
            console.log('Processed queued submission:', submission);
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

  // Process queued submissions when online
  useEffect(() => {
    if (navigator.onLine && queuedSubmissions.length > 0) {
      processQueuedSubmissions(queuedSubmissions.map((s) => s.data));
    }
  }, [processQueuedSubmissions, queuedSubmissions]);

  // Handle online/offline events
  useEffect(() => {
    const handleOnline = () => {
      if (queuedSubmissions.length > 0) {
        processQueuedSubmissions(queuedSubmissions.map((s) => s.data));
      }
    };

    window.addEventListener('online', handleOnline);
    return () => window.removeEventListener('online', handleOnline);
  }, [processQueuedSubmissions, queuedSubmissions]);

  const handleFormSubmit = useCallback(
    (formData: { name: string; email: string; title: string; message: string }) => {
      const submission: QueuedSubmission = {
        id: Date.now().toString(),
        data: formData,
        timestamp: Date.now(),
      };

      setQueuedSubmissions((prev) => [...prev, submission]);
      onSubmissionQueued?.(submission);

      // Close form after submission
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
