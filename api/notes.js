import { Router } from 'express';
import { createNote, getApprovedNotes, getPendingNotes, approveNote, rejectNote, deleteNote } from '../db/auth.js';
import { validateNoteData, requireAuth, rateLimit } from './middleware.js';

const router = Router();

/**
 * POST /api/notes - Create a new note (public endpoint with rate limiting)
 * Rate limited to 5 requests per 15 minutes per IP
 * Requires valid note data (name, email, title, message)
 */
router.post('/', rateLimit(5, 15 * 60 * 1000), validateNoteData, async (req, res) => {
  try {
    const { name, email, title, message } = req.body;
    const newNote = await createNote({
      name,
      email,
      title,
      message,
      status: 'pending',
    });
    res.status(201).json({
      success: true,
      note: newNote[0],
      message: 'Note submitted successfully and is pending approval',
    });
  } catch (error) {
    console.error('Error creating note:', error);
    res.status(500).json({ error: 'Failed to create note' });
  }
});
/**
 * GET /api/notes/approved - Get all approved notes (public endpoint)
 * Returns notes that have been approved by administrators
 */
router.get('/approved', async (req, res) => {
  try {
    const approvedNotes = await getApprovedNotes();
    res.json({
      success: true,
      notes: approvedNotes,
    });
  } catch (error) {
    console.error('Error fetching approved notes:', error);
    res.status(500).json({ error: 'Failed to fetch notes' });
  }
});
/**
 * GET /api/notes/pending - Get all pending notes (admin only)
 * Requires authentication. Returns notes awaiting approval
 */
router.get('/pending', requireAuth, async (req, res) => {
  try {
    const pendingNotes = await getPendingNotes();
    res.json({
      success: true,
      notes: pendingNotes,
    });
  } catch (error) {
    console.error('Error fetching pending notes:', error);
    res.status(500).json({ error: 'Failed to fetch pending notes' });
  }
});
/**
 * PUT /api/notes/:id/approve - Approve a note (admin only)
 * Requires authentication. Changes note status from pending to approved
 */
router.put('/:id/approve', requireAuth, async (req, res) => {
  try {
    const noteId = parseInt(req.params.id);
    if (isNaN(noteId)) {
      return res.status(400).json({ error: 'Invalid note ID' });
    }
    await approveNote(noteId);
    res.json({
      success: true,
      message: 'Note approved successfully',
    });
  } catch (error) {
    console.error('Error approving note:', error);
    res.status(500).json({ error: 'Failed to approve note' });
  }
});
/**
 * PUT /api/notes/:id/reject - Reject a note (admin only)
 * Requires authentication. Changes note status from pending to rejected
 */
router.put('/:id/reject', requireAuth, async (req, res) => {
  try {
    const noteId = parseInt(req.params.id);
    if (isNaN(noteId)) {
      return res.status(400).json({ error: 'Invalid note ID' });
    }
    await rejectNote(noteId);
    res.json({
      success: true,
      message: 'Note rejected successfully',
    });
  } catch (error) {
    console.error('Error rejecting note:', error);
    res.status(500).json({ error: 'Failed to reject note' });
  }
});
/**
 * DELETE /api/notes/:id - Delete a note (admin only)
 * Requires authentication. Permanently removes a note from the database
 */
router.delete('/:id', requireAuth, async (req, res) => {
  try {
    const noteId = parseInt(req.params.id);
    if (isNaN(noteId)) {
      return res.status(400).json({ error: 'Invalid note ID' });
    }
    await deleteNote(noteId);
    res.json({
      success: true,
      message: 'Note deleted successfully',
    });
  } catch (error) {
    console.error('Error deleting note:', error);
    res.status(500).json({ error: 'Failed to delete note' });
  }
});
export default router;
