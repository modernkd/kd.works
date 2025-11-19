import { Request, Response, NextFunction } from 'express';
import { getCurrentUser } from '../db/auth.js';

/**
 * Extended Request interface that includes authenticated user information
 */
interface AuthenticatedRequest extends Request {
  user: {
    id: string;
    email?: string;
  };
}

/**
 * Middleware to require authentication for protected routes.
 * Checks if a user is currently authenticated and attaches user info to request.
 * @param req - Express request object
 * @param res - Express response object
 * @param next - Express next middleware function
 */
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

/**
 * Middleware to validate note data for creation requests.
 * Ensures all required fields are present and properly formatted.
 * Sanitizes input by trimming whitespace.
 * @param req - Express request object containing note data in body
 * @param res - Express response object
 * @param next - Express next middleware function
 */
export const validateNoteData = (req: Request, res: Response, next: NextFunction) => {
  const { name, email, title, message } = req.body;

  if (!name || typeof name !== 'string' || name.trim().length === 0) {
    return res.status(400).json({ error: 'Name is required and must be a non-empty string' });
  }

  if (!email || typeof email !== 'string') {
    return res.status(400).json({ error: 'Valid email is required' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isEmailValid = emailRegex.test(email);

  if (!isEmailValid) {
    return res.status(400).json({ error: 'Valid email is required' });
  }

  if (!title || typeof title !== 'string' || title.trim().length === 0) {
    return res.status(400).json({ error: 'Title is required and must be a non-empty string' });
  }

  if (!message || typeof message !== 'string' || message.trim().length === 0) {
    return res.status(400).json({ error: 'Message is required and must be a non-empty string' });
  }

  req.body.name = name.trim();
  req.body.email = email.trim();
  req.body.title = title.trim();
  req.body.message = message.trim();

  next();
};

/**
 * In-memory storage for rate limiting data keyed by client IP
 */
const requestCounts = new Map<string, { count: number; resetTime: number }>();

/**
 * Rate limiting middleware to prevent abuse by limiting requests per client IP.
 * Uses an in-memory store to track request counts within a time window.
 * @param maxRequests - Maximum number of requests allowed per time window (default: 10)
 * @param windowMs - Time window in milliseconds (default: 15 minutes)
 * @returns Express middleware function
 */
export const rateLimit = (maxRequests: number = 10, windowMs: number = 15 * 60 * 1000) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const clientIP = req.ip || req.connection.remoteAddress || 'unknown';
    const currentTime = Date.now();
    const windowStart = currentTime - windowMs;

    const clientData = requestCounts.get(clientIP);

    if (!clientData || clientData.resetTime < windowStart) {
      requestCounts.set(clientIP, { count: 1, resetTime: currentTime + windowMs });
      return next();
    }

    if (clientData.count >= maxRequests) {
      return res.status(429).json({ error: 'Too many requests, please try again later' });
    }

    clientData.count++;
    next();
  };
};

/**
 * Global error handling middleware for API routes.
 * Logs errors and returns a generic error response to prevent information leakage.
 * @param err - The error object
 * @param req - Express request object
 * @param res - Express response object
 */
export const errorHandler = (err: Error, req: Request, res: Response) => {
  console.error('API Error:', err);
  res.status(500).json({ error: 'Internal server error' });
};
