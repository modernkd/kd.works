import { useState, useEffect } from 'react';
import { useApprovedNotes } from '../../hooks/useNotes';
import StickyNotes from './StickyNotes';
import type { QueuedSubmission } from '../../types';
import { NewNote, Note } from '../../db/schema';

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
  const { data: approvedNotes = [], isLoading, error } = useApprovedNotes();

  console.log('[StickyNotesWrapper] approvedNotes:', approvedNotes);
  console.log('[StickyNotesWrapper] isLoading:', isLoading);
  console.log('[StickyNotesWrapper] error:', error);
  console.log('[StickyNotesWrapper] queuedSubmissions:', queuedSubmissions);

  // Combine approved notes with queued submissions
  useEffect(() => {
    if (approvedNotes.length >= 0 || queuedSubmissions.length > 0) {
      // Convert approved notes to match the expected Note type
      const convertedNotes = approvedNotes.map((note) => ({
        ...note,
        createdAt: new Date(note.createdAt),
        approvedAt: note.approvedAt ? new Date(note.approvedAt) : null,
      }));

      // Convert queued submissions to note format for optimistic display
      const queuedNotes: NewNote[] = queuedSubmissions.map((submission) => ({
        id: parseInt(submission.id) || -Date.now(), // Use negative ID for queued notes
        email: submission.data.email,
        name: submission.data.name,
        title: submission.data.title,
        message: submission.data.message,
        status: 'pending', // Mark as pending since they're queued
      }));

      const allNotes = [...convertedNotes, ...queuedNotes];
      console.log('Combined notes for fridge:', allNotes);
      setNotes(allNotes as Note[]);
    }
  }, [approvedNotes, queuedSubmissions]);

  if (isLoading) {
    return <div>Loading notes...</div>;
  }

  if (error) {
    console.warn('Notes loading error (using mock data):', error.message);
    // Continue with mock data even if there's an error
  }

  return <StickyNotes isDarkMode={isDarkMode} notes={notes} setNotes={setNotes} />;
}
