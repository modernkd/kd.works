import { Router, Request, Response } from 'express';
import { signInWithOtp, getCurrentUser } from '../db/auth.js';
import { rateLimit } from './middleware.js';

const router = Router();

// POST /api/auth/signin - Send magic link for authentication
router.post('/signin', rateLimit(3, 15 * 60 * 1000), async (req: Request, res: Response) => {
  try {
    const { email, redirectTo } = req.body;

    if (!email || typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ error: 'Valid email is required' });
    }

    await signInWithOtp(email, redirectTo);

    res.json({
      success: true,
      message: 'Magic link sent to your email',
    });
  } catch (error) {
    console.error('Error sending magic link:', error);
    res.status(500).json({ error: 'Failed to send magic link' });
  }
});

// GET /api/auth/me - Get current user information
router.get('/me', async (req: Request, res: Response) => {
  try {
    const user = await getCurrentUser();

    if (!user) {
      return res.status(401).json({ error: 'Not authenticated' });
    }

    res.json({
      success: true,
      user: {
        id: user.id,
        email: user.email,
        // Add other user fields as needed
      },
    });
  } catch (error) {
    console.error('Error fetching current user:', error);
    res.status(500).json({ error: 'Failed to fetch user information' });
  }
});

// POST /api/auth/signout - Sign out current user
router.post('/signout', async (req: Request, res: Response) => {
  try {
    // Note: Supabase handles signout on the client side
    // This endpoint is for consistency and potential server-side cleanup
    res.json({
      success: true,
      message: 'Signed out successfully',
    });
  } catch (error) {
    console.error('Error signing out:', error);
    res.status(500).json({ error: 'Failed to sign out' });
  }
});

// POST /api/auth/verify - Verify authentication token (optional endpoint for custom verification)
router.post('/verify', async (req: Request, res: Response) => {
  try {
    const user = await getCurrentUser();

    if (!user) {
      return res.status(401).json({
        success: false,
        error: 'Invalid or expired token',
      });
    }

    res.json({
      success: true,
      user: {
        id: user.id,
        email: user.email,
      },
    });
  } catch (error) {
    console.error('Error verifying token:', error);
    res.status(500).json({
      success: false,
      error: 'Token verification failed',
    });
  }
});

export default router;
