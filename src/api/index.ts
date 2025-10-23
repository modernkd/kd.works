import { Router } from 'express';
import notesRouter from './notes.js';
import authRouter from './auth.js';
import { errorHandler } from './middleware.js';

const router = Router();

/**
 * Main API router that mounts all API endpoints
 * Includes health check, 404 handling, and global error handling
 */

// Mount API routes
router.use('/notes', notesRouter);
router.use('/auth', authRouter);

/**
 * GET /api/health - Health check endpoint
 * Returns API status and basic information
 */
router.get('/health', (req, res) => {
  res.json({
    success: true,
    message: 'API is healthy',
    timestamp: new Date().toISOString(),
    version: '1.0.0',
  });
});

/**
 * 404 handler for API routes
 * Catches any unmatched API endpoints
 */
router.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    error: 'API endpoint not found',
  });
});

// Error handling middleware (must be last)
router.use(errorHandler);

export default router;
