import { NewNote, Note } from '../db/schema';
import { supabase } from './supabase';

/**
 * Base URL for API endpoints
 */
const API_BASE_URL = '/api';

/**
 * Standard API response structure
 * @template T - The type of data returned on success
 */
interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

/**
 * User information structure
 */
interface User {
  id: string;
  email: string;
}

/**
 * Makes an API request to the specified endpoint
 * @template T - The expected response data type
 * @param endpoint - The API endpoint path
 * @param options - Fetch options including method, headers, body
 * @returns Promise resolving to ApiResponse
 */
async function apiRequest<T>(endpoint: string, options: RequestInit = {}): Promise<ApiResponse<T>> {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });

    let parsedData;
    let responseText;
    try {
      responseText = await response.text();

      parsedData = JSON.parse(responseText);
    } catch (parseError) {
      console.error('[API] Failed to parse JSON response:', parseError);
      console.error('[API] Response status:', response.status);
      console.error('[API] Response headers:', Object.fromEntries(response.headers.entries()));
      console.error('[API] Response body (first 500 chars):', responseText ? responseText.substring(0, 500) : 'N/A');
      throw new Error('Invalid JSON response from server');
    }

    if (!response.ok) {
      console.error('[API] Request failed with status:', response.status, parsedData);
      return {
        success: false,
        error: parsedData.error || `HTTP ${response.status}: ${response.statusText}`,
      };
    }

    return {
      success: true,
      data: parsedData as T,
    };
  } catch (error) {
    console.error('[API] Request failed:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Network error',
    };
  }
}

/**
 * Authentication API methods
 */
export const authApi = {
  /**
   * Signs in a user with email and redirect URL
   * @param email - User's email address
   * @param redirectTo - URL to redirect after sign in
   * @returns Promise resolving to API response with message
   */
  signIn: async (email: string, redirectTo: string): Promise<ApiResponse<{ message: string }>> => {
    return apiRequest('/auth/signin', {
      method: 'POST',
      body: JSON.stringify({ email, redirectTo }),
    });
  },

  /**
   * Gets the current authenticated user
   * @returns Promise resolving to API response with user data
   */
  getCurrentUser: async (): Promise<ApiResponse<{ user: User }>> => {
    return apiRequest('/auth/me');
  },

  /**
   * Signs out the current user
   * @returns Promise resolving to API response with message
   */
  signOut: async (): Promise<ApiResponse<{ message: string }>> => {
    return apiRequest('/auth/signout', {
      method: 'POST',
    });
  },

  /**
   * Verifies the current user's authentication
   * @returns Promise resolving to API response with user data
   */
  verify: async (): Promise<ApiResponse<{ user: User }>> => {
    return apiRequest('/auth/verify', {
      method: 'POST',
    });
  },
};
/**
 * Notes API methods for managing notes in the database
 */
export const notesApi = {
  /**
   * Creates a new note in the database
   * @param noteData - The note data to create
   * @returns Promise resolving to API response with created note and message
   */
  create: async (noteData: NewNote): Promise<ApiResponse<{ note: Note; message: string }>> => {
    try {
      const { data, error } = await supabase.from('notes').insert(noteData).select().single();

      if (error) {
        console.error('[Supabase] Create error:', error);
        return { success: false, error: error.message };
      }

      return {
        success: true,
        data: { note: data, message: 'Note submitted successfully and is pending approval' },
      };
    } catch (error) {
      console.error('[Supabase] Create failed:', error);
      return { success: false, error: error instanceof Error ? error.message : 'Network error' };
    }
  },

  /**
   * Retrieves all approved notes
   * @returns Promise resolving to API response with array of approved notes
   */
  getApproved: async (): Promise<ApiResponse<{ notes: Note[] }>> => {
    try {
      const { data, error } = await supabase
        .from('notes')
        .select('*')
        .eq('status', 'approved')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('[Supabase] Get approved error:', error);
        return { success: false, error: error.message };
      }

      return { success: true, data: { notes: data || [] } };
    } catch (error) {
      console.error('[Supabase] Get approved failed:', error);
      return { success: false, error: error instanceof Error ? error.message : 'Network error' };
    }
  },

  /**
   * Retrieves all pending notes
   * @returns Promise resolving to API response with array of pending notes
   */
  getPending: async (): Promise<ApiResponse<{ notes: Note[] }>> => {
    try {
      const { data, error } = await supabase
        .from('notes')
        .select('*')
        .eq('status', 'pending')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('[Supabase] Get pending error:', error);
        return { success: false, error: error.message };
      }

      return { success: true, data: { notes: data || [] } };
    } catch (error) {
      console.error('[Supabase] Get pending failed:', error);
      return { success: false, error: error instanceof Error ? error.message : 'Network error' };
    }
  },

  /**
   * Retrieves all notes regardless of status
   * @returns Promise resolving to API response with array of all notes
   */
  getAll: async (): Promise<ApiResponse<{ notes: Note[] }>> => {
    try {
      const { data, error } = await supabase.from('notes').select('*').order('created_at', { ascending: false });

      if (error) {
        console.error('[Supabase] Get all error:', error);
        return { success: false, error: error.message };
      }

      return { success: true, data: { notes: data || [] } };
    } catch (error) {
      console.error('[Supabase] Get all failed:', error);
      return { success: false, error: error instanceof Error ? error.message : 'Network error' };
    }
  },

  /**
   * Approves a pending note
   * @param noteId - The ID of the note to approve
   * @returns Promise resolving to API response with success message
   */
  approve: async (noteId: number): Promise<ApiResponse<{ message: string }>> => {
    try {
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

      return { success: true, data: { message: 'Note approved successfully' } };
    } catch (error) {
      console.error('[Supabase] Approve failed:', error);
      return { success: false, error: error instanceof Error ? error.message : 'Network error' };
    }
  },

  /**
   * Rejects a pending note
   * @param noteId - The ID of the note to reject
   * @returns Promise resolving to API response with success message
   */
  reject: async (noteId: number): Promise<ApiResponse<{ message: string }>> => {
    try {
      const { error } = await supabase.from('notes').update({ status: 'rejected' }).eq('id', noteId);

      if (error) {
        console.error('[Supabase] Reject error:', error);
        return { success: false, error: error.message };
      }

      return { success: true, data: { message: 'Note rejected successfully' } };
    } catch (error) {
      console.error('[Supabase] Reject failed:', error);
      return { success: false, error: error instanceof Error ? error.message : 'Network error' };
    }
  },

  /**
   * Deletes a note from the database
   * @param noteId - The ID of the note to delete
   * @returns Promise resolving to API response with success message
   */
  delete: async (noteId: number): Promise<ApiResponse<{ message: string }>> => {
    try {
      const { error } = await supabase.from('notes').delete().eq('id', noteId);

      if (error) {
        console.error('[Supabase] Delete error:', error);
        return { success: false, error: error.message };
      }

      return { success: true, data: { message: 'Note deleted successfully' } };
    } catch (error) {
      console.error('[Supabase] Delete failed:', error);
      return { success: false, error: error instanceof Error ? error.message : 'Network error' };
    }
  },
};

/**
 * Performs a health check on the API
 * @returns Promise resolving to API response with health status information
 */
export const healthCheck = async (): Promise<ApiResponse<{ message: string; timestamp: string; version: string }>> => {
  return apiRequest('/health');
};
