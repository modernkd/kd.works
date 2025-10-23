import { eq } from 'drizzle-orm';
import { db } from './index';
<<<<<<< Updated upstream
import { notes } from './schema';
=======
import { notes, NewNote } from './schema';
import { supabase } from '../lib/supabase';

/**
 * Retrieves all notes from the database, ordered by creation date.
 * @returns {Promise<Note[]>} Array of all notes
 */
export async function getAllNotes() {
  return await db.select().from(notes).orderBy(notes.createdAt);
}
>>>>>>> Stashed changes

/**
 * Retrieves all pending notes from the database, ordered by creation date.
 * @returns {Promise<Note[]>} Array of pending notes
 */
export async function getPendingNotes() {
  return await db.select().from(notes).where(eq(notes.status, 'pending')).orderBy(notes.createdAt);
}

/**
 * Retrieves all approved notes from the database with selected fields, ordered by creation date.
 * @returns {Promise<Pick<Note, 'id' | 'name' | 'title' | 'message' | 'createdAt'>[]>} Array of approved notes with limited fields
 */
export async function getApprovedNotes() {
  return await db
    .select({
      id: notes.id,
      name: notes.name,
      title: notes.title,
      message: notes.message,
      createdAt: notes.createdAt,
    })
    .from(notes)
    .where(eq(notes.status, 'approved'))
    .orderBy(notes.createdAt);
}

/**
 * Approves a note by updating its status to 'approved'.
 * @param {number} noteId - The ID of the note to approve
 * @returns {Promise} Database update result
 */
export async function approveNote(noteId: number) {
  return await db
    .update(notes)
    .set({
      status: 'approved',
      approvedAt: new Date(),
    })
    .where(eq(notes.id, noteId));
}

/**
 * Rejects a note by updating its status to 'rejected'.
 * @param {number} noteId - The ID of the note to reject
 * @returns {Promise} Database update result
 */
export async function rejectNote(noteId: number) {
  return await db.update(notes).set({ status: 'rejected' }).where(eq(notes.id, noteId));
}
<<<<<<< Updated upstream
=======

/**
 * Deletes a note from the database.
 * @param {number} noteId - The ID of the note to delete
 * @returns {Promise} Database delete result
 */
export async function deleteNote(noteId: number) {
  return await db.delete(notes).where(eq(notes.id, noteId));
}

/**
 * Creates a new note in the database.
 * @param {NewNote} noteData - The note data to insert
 * @returns {Promise<Note[]>} Array containing the created note
 */
export async function createNote(noteData: NewNote) {
  return await db.insert(notes).values(noteData).returning();
}

/**
 * Retrieves the current authenticated user from Supabase.
 * @returns {Promise<User | null>} The current user object or null if not authenticated
 * @throws {Error} If there's an error retrieving the user
 */
export async function getCurrentUser() {
  const { data, error } = await supabase.auth.getUser();
  if (error) throw error;
  return data.user;
}

/**
 * Sends a sign-in OTP (One-Time Password) to the specified email address.
 * @param {string} email - The email address to send the OTP to
 * @param {string} [redirectTo] - Optional redirect URL after successful authentication
 * @throws {Error} If there's an error sending the OTP
 */
export async function signInWithOtp(email: string, redirectTo?: string) {
  const { error } = await supabase.auth.signInWithOtp({
    email,
    options: {
      emailRedirectTo: redirectTo,
    },
  });
  if (error) throw error;
}
>>>>>>> Stashed changes
