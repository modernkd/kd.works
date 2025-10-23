// API client functions for making HTTP requests to the backend
// Note: This file is deprecated in favor of direct Supabase integration

import { NewNote, Note } from '../db/schema';
import { supabase } from './supabase';

const API_BASE_URL = '/api';

interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

interface User {
  id: string;
  email: string;
}

// Generic fetch wrapper with error handling
async function apiRequest<T>(endpoint: string, options: RequestInit = {}): Promise<ApiResponse<T>> {
  console.log(`[API] Making request to: ${API_BASE_URL}${endpoint}`);
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });

    console.log(`[API] Response status: ${response.status} ${response.statusText}`);

    let data;
    let text;
    try {
      text = await response.text();
      console.log(`[API] Response body:`, text.substring(0, 200));
      data = JSON.parse(text);
    } catch (parseError) {
      console.error('[API] Failed to parse JSON response:', parseError);
      console.error('[API] Response status:', response.status);
      console.error('[API] Response headers:', Object.fromEntries(response.headers.entries()));
      console.error('[API] Response body (first 500 chars):', text ? text.substring(0, 500) : 'N/A');
      throw new Error('Invalid JSON response from server');
    }

    if (!response.ok) {
      console.error('[API] Request failed with status:', response.status, data);
      return {
        success: false,
        error: data.error || `HTTP ${response.status}: ${response.statusText}`,
      };
    }

    console.log('[API] Request successful:', data);
    return {
      success: true,
      data: data as T,
    };
  } catch (error) {
    console.error('[API] Request failed:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Network error',
    };
  }
}

// Auth API functions
export const authApi = {
  // Send magic link for sign in
  signIn: async (email: string, redirectTo: string): Promise<ApiResponse<{ message: string }>> => {
    return apiRequest('/auth/signin', {
      method: 'POST',
      body: JSON.stringify({ email, redirectTo }),
    });
  },

  // Get current user
  getCurrentUser: async (): Promise<ApiResponse<{ user: User }>> => {
    return apiRequest('/auth/me');
  },

  // Sign out
  signOut: async (): Promise<ApiResponse<{ message: string }>> => {
    return apiRequest('/auth/signout', {
      method: 'POST',
    });
  },

  // Verify authentication
  verify: async (): Promise<ApiResponse<{ user: User }>> => {
    return apiRequest('/auth/verify', {
      method: 'POST',
    });
  },
};

// Direct Supabase integration for notes
export const notesApi = {
  // Create a new note
  create: async (noteData: NewNote): Promise<ApiResponse<{ note: Note; message: string }>> => {
    try {
      console.log('[Supabase] Creating note:', noteData);
      const { data, error } = await supabase.from('notes').insert(noteData).select().single();

      if (error) {
        console.error('[Supabase] Create error:', error);
        return { success: false, error: error.message };
      }

      console.log('[Supabase] Note created:', data);
      return {
        success: true,
        data: { note: data, message: 'Note submitted successfully and is pending approval' },
      };
    } catch (error) {
      console.error('[Supabase] Create failed:', error);
      return { success: false, error: error instanceof Error ? error.message : 'Network error' };
    }
  },

  // Get approved notes
  getApproved: async (): Promise<ApiResponse<{ notes: Note[] }>> => {
    try {
      console.log('[Supabase] Fetching approved notes');
      const { data, error } = await supabase
        .from('notes')
        .select('*')
        .eq('status', 'approved')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('[Supabase] Get approved error:', error);
        return { success: false, error: error.message };
      }

      console.log('[Supabase] Approved notes:', data);
      return { success: true, data: { notes: data || [] } };
    } catch (error) {
      console.error('[Supabase] Get approved failed:', error);
      return { success: false, error: error instanceof Error ? error.message : 'Network error' };
    }
  },

  // Get pending notes (admin only)
  getPending: async (): Promise<ApiResponse<{ notes: Note[] }>> => {
    try {
      console.log('[Supabase] Fetching pending notes');
      const { data, error } = await supabase
        .from('notes')
        .select('*')
        .eq('status', 'pending')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('[Supabase] Get pending error:', error);
        return { success: false, error: error.message };
      }

      console.log('[Supabase] Pending notes:', data);
      return { success: true, data: { notes: data || [] } };
    } catch (error) {
      console.error('[Supabase] Get pending failed:', error);
      return { success: false, error: error instanceof Error ? error.message : 'Network error' };
    }
  },

  // Get all notes (admin only - combines pending and approved)
  getAll: async (): Promise<ApiResponse<{ notes: Note[] }>> => {
    try {
      console.log('[Supabase] Fetching all notes');
      const { data, error } = await supabase.from('notes').select('*').order('created_at', { ascending: false });

      if (error) {
        console.error('[Supabase] Get all error:', error);
        return { success: false, error: error.message };
      }

      console.log('[Supabase] All notes:', data);
      return { success: true, data: { notes: data || [] } };
    } catch (error) {
      console.error('[Supabase] Get all failed:', error);
      return { success: false, error: error instanceof Error ? error.message : 'Network error' };
    }
  },

  // Approve a note (admin only)
  approve: async (noteId: number): Promise<ApiResponse<{ message: string }>> => {
    try {
      console.log('[Supabase] Approving note:', noteId);
      const { error } = await supabase
        .from('notes')
        .update({
          status: 'approved',
          approved_at: new Date().toISOString(),
        })
        .eq('id', noteId);

      if (error) {
        console.error('[Supabase] Approve error:', error);
        return { success: false, error: error.message };
      }

      console.log('[Supabase] Note approved:', noteId);
      return { success: true, data: { message: 'Note approved successfully' } };
    } catch (error) {
      console.error('[Supabase] Approve failed:', error);
      return { success: false, error: error instanceof Error ? error.message : 'Network error' };
    }
  },

  // Reject a note (admin only)
  reject: async (noteId: number): Promise<ApiResponse<{ message: string }>> => {
    try {
      console.log('[Supabase] Rejecting note:', noteId);
      const { error } = await supabase.from('notes').update({ status: 'rejected' }).eq('id', noteId);

      if (error) {
        console.error('[Supabase] Reject error:', error);
        return { success: false, error: error.message };
      }

      console.log('[Supabase] Note rejected:', noteId);
      return { success: true, data: { message: 'Note rejected successfully' } };
    } catch (error) {
      console.error('[Supabase] Reject failed:', error);
      return { success: false, error: error instanceof Error ? error.message : 'Network error' };
    }
  },

  // Delete a note (admin only)
  delete: async (noteId: number): Promise<ApiResponse<{ message: string }>> => {
    try {
      console.log('[Supabase] Deleting note:', noteId);
      const { error } = await supabase.from('notes').delete().eq('id', noteId);

      if (error) {
        console.error('[Supabase] Delete error:', error);
        return { success: false, error: error.message };
      }

      console.log('[Supabase] Note deleted:', noteId);
      return { success: true, data: { message: 'Note deleted successfully' } };
    } catch (error) {
      console.error('[Supabase] Delete failed:', error);
      return { success: false, error: error instanceof Error ? error.message : 'Network error' };
    }
  },
};

// Health check
export const healthCheck = async (): Promise<ApiResponse<{ message: string; timestamp: string; version: string }>> => {
  return apiRequest('/health');
};
