import { eq } from 'drizzle-orm';
import { db } from './index.js';
import { notes } from './schema.js';
import { supabase } from '../lib/supabase.js';
export async function getAllNotes() {
  return await db.select().from(notes).orderBy(notes.createdAt);
}
export async function getPendingNotes() {
  return await db.select().from(notes).where(eq(notes.status, 'pending')).orderBy(notes.createdAt);
}
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
export async function approveNote(noteId) {
  return await db
    .update(notes)
    .set({
      status: 'approved',
      approvedAt: new Date(),
    })
    .where(eq(notes.id, noteId));
}
export async function rejectNote(noteId) {
  return await db.update(notes).set({ status: 'rejected' }).where(eq(notes.id, noteId));
}
export async function deleteNote(noteId) {
  return await db.delete(notes).where(eq(notes.id, noteId));
}
export async function createNote(noteData) {
  return await db.insert(notes).values(noteData).returning();
}
export async function getCurrentUser() {
  const { data, error } = await supabase.auth.getUser();
  if (error) throw error;
  return data.user;
}
export async function signInWithOtp(email, redirectTo) {
  const { error } = await supabase.auth.signInWithOtp({
    email,
    options: {
      emailRedirectTo: redirectTo,
    },
  });
  if (error) throw error;
}
