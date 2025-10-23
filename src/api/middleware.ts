import { Request, Response, NextFunction } from 'express';
import { getCurrentUser } from '../db/auth.js';

interface AuthenticatedRequest extends Request {
  user: {
    id: string;
    email?: string;
    // Add other user fields as needed
  };
}

// Authentication middleware
export const requireAuth = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await getCurrentUser();
    if (!user) {
      return res.status(401).json({ error: 'Authentication required' });
    }
    (req as AuthenticatedRequest).user = user;
    next();
  } catch (error) {
    console.error('Authentication error:', error);
    res.status(401).json({ error: 'Authentication failed' });
  }
};

// Validation middleware for notes
export const validateNoteData = (req: Request, res: Response, next: NextFunction) => {
  const { name, email, title, message } = req.body;

  console.log('Validation input:', { name, email, title, message: message?.substring(0, 100) });

  if (!name || typeof name !== 'string' || name.trim().length === 0) {
    console.log('Validation failed: name invalid');
    return res.status(400).json({ error: 'Name is required and must be a non-empty string' });
  }

  if (!email || typeof email !== 'string') {
    console.log('Validation failed: email not string or missing');
    return res.status(400).json({ error: 'Valid email is required' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const emailValid = emailRegex.test(email);
  console.log('Email validation:', { email, emailValid, regex: emailRegex.toString() });

  if (!emailValid) {
    console.log('Validation failed: email regex failed');
    return res.status(400).json({ error: 'Valid email is required' });
  }

  if (!title || typeof title !== 'string' || title.trim().length === 0) {
    console.log('Validation failed: title invalid');
    return res.status(400).json({ error: 'Title is required and must be a non-empty string' });
  }

  if (!message || typeof message !== 'string' || message.trim().length === 0) {
    console.log('Validation failed: message invalid');
    return res.status(400).json({ error: 'Message is required and must be a non-empty string' });
  }

  // Sanitize input
  req.body.name = name.trim();
  req.body.email = email.trim();
  req.body.title = title.trim();
  req.body.message = message.trim();

  console.log('Validation passed');
  next();
};

// Rate limiting middleware (basic implementation)
const requestCounts = new Map<string, { count: number; resetTime: number }>();

export const rateLimit = (maxRequests: number = 10, windowMs: number = 15 * 60 * 1000) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const clientIP = req.ip || req.connection.remoteAddress || 'unknown';
    const now = Date.now();
    const windowStart = now - windowMs;

    const clientData = requestCounts.get(clientIP);

    if (!clientData || clientData.resetTime < windowStart) {
      requestCounts.set(clientIP, { count: 1, resetTime: now + windowMs });
      return next();
    }

    if (clientData.count >= maxRequests) {
      return res.status(429).json({ error: 'Too many requests, please try again later' });
    }

    clientData.count++;
    next();
  };
};

// Error handling middleware
export const errorHandler = (err: Error, req: Request, res: Response) => {
  console.error('API Error:', err);
  res.status(500).json({ error: 'Internal server error' });
};
