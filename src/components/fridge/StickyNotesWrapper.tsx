import { useState, useEffect, useCallback } from 'react';
import { supabase } from '../../lib/supabase';
import StickyNotes from './StickyNotes';

interface Note {
  id: number;
  name: string;
  title: string;
  message: string;
  created_at: string;
}

interface StickyNotesWrapperProps {
  isDarkMode?: boolean;
  notes?: Note[];
  onNotesChange?: (notes: Note[]) => void;
}

export default function StickyNotesWrapper({
  isDarkMode = false,
  notes: initialNotes = [],
  onNotesChange,
}: StickyNotesWrapperProps) {
  const [notes, setNotes] = useState<Note[]>(initialNotes);

  // Update notes when props change (only if different)
  useEffect(() => {
    if (JSON.stringify(initialNotes) !== JSON.stringify(notes)) {
      setNotes(initialNotes);
    }
  }, [initialNotes, notes]);

  // Notify parent of changes
  useEffect(() => {
    onNotesChange?.(notes);
  }, [notes, onNotesChange]);

  const fetchNotes = useCallback(async (): Promise<Note[]> => {
    try {
      const { data, error } = await supabase
        .from('notes')
        .select('id, name, title, message, created_at')
        .eq('status', 'approved')
        .order('created_at');

      if (error) {
        console.error('Failed to fetch notes:', error);
        return [];
      }

      return data || [];
    } catch (error) {
      console.error('Failed to fetch notes:', error);
      return [];
    }
  }, []);

  return <StickyNotes isDarkMode={isDarkMode} notes={notes} setNotes={setNotes} onFetchNotes={fetchNotes} />;
}
