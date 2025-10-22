import { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';
import StickyNotes from './StickyNotes';
import type { QueuedSubmission } from '../../types';

interface Note {
  id: number;
  name: string;
  title: string;
  message: string;
  created_at: string;
  status: string;
}

interface StickyNotesWrapperProps {
  isDarkMode?: boolean;
  notes?: Note[];
  onNotesChange?: (notes: Note[]) => void;
  queuedSubmissions?: QueuedSubmission[];
}

export default function StickyNotesWrapper({
  isDarkMode = false,
  notes: initialNotes = [],
  queuedSubmissions = [],
}: StickyNotesWrapperProps) {
  const [notes, setNotes] = useState<Note[]>(initialNotes);

  // Combine database notes with queued submissions
  useEffect(() => {
    const loadNotes = async () => {
      try {
        const { data, error } = await supabase
          .from('notes')
          .select('id, name, title, message, created_at, status')
          .neq('status', 'rejected')
          .order('created_at', { ascending: false });

        if (error) {
          console.error('Failed to fetch notes:', error);
          return;
        }

        // Convert queued submissions to note format for optimistic display
        const queuedNotes: Note[] = queuedSubmissions.map((submission) => ({
          id: parseInt(submission.id) || -Date.now(), // Use negative ID for queued notes
          name: submission.data.name,
          title: submission.data.title,
          message: submission.data.message,
          created_at: new Date(submission.timestamp).toISOString(),
          status: 'pending', // Mark as pending since they're queued
        }));

        const allNotes = [...(data || []), ...queuedNotes];
        console.log('Combined notes for fridge:', allNotes);
        setNotes(allNotes);
      } catch (error) {
        console.error('Failed to fetch notes:', error);
      }
    };

    loadNotes();
  }, [queuedSubmissions]);

  return <StickyNotes isDarkMode={isDarkMode} notes={notes} setNotes={setNotes} />;
}
