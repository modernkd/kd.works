import { getCurrentUser } from '../db/auth.js';

/**
 * Middleware to require authentication for protected routes.
 * Checks if a user is currently authenticated and attaches user info to request.
 * @param {import('express').Request} req - Express request object
 * @param {import('express').Response} res - Express response object
 * @param {import('express').NextFunction} next - Express next middleware function
 */
export const requireAuth = async (req, res, next) => {
  try {
    const user = await getCurrentUser();
    if (!user) {
      return res.status(401).json({ error: 'Authentication required' });
    }
    req.user = user;
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
 * @param {import('express').Request} req - Express request object containing note data in body
 * @param {import('express').Response} res - Express response object
 * @param {import('express').NextFunction} next - Express next middleware function
 */
export const validateNoteData = (req, res, next) => {
  const { name, email, title, message } = req.body;
  console.log('Validation input:', {
    name,
    email,
    title,
    message: message === null || message === void 0 ? void 0 : message.substring(0, 100),
  });
  if (!name || typeof name !== 'string' || name.trim().length === 0) {
    console.log('Validation failed: name invalid');
    return res.status(400).json({ error: 'Name is required and must be a non-empty string' });
  }
  if (!email || typeof email !== 'string') {
    console.log('Validation failed: email not string or missing');
    return res.status(400).json({ error: 'Valid email is required' });
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isEmailValid = emailRegex.test(email);
  console.log('Email validation:', { email, isEmailValid, regex: emailRegex.toString() });
  if (!isEmailValid) {
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
/**
 * Rate limiting middleware to prevent abuse by limiting requests per client IP.
 * Uses an in-memory store to track request counts within a time window.
 * @param {number} maxRequests - Maximum number of requests allowed per time window (default: 10)
 * @param {number} windowMs - Time window in milliseconds (default: 15 minutes)
 * @returns {Function} Express middleware function
 */
const requestCounts = new Map();
export const rateLimit = (maxRequests = 10, windowMs = 15 * 60 * 1000) => {
  return (req, res, next) => {
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
 * @param {Error} err - The error object
 * @param {import('express').Request} req - Express request object
 * @param {import('express').Response} res - Express response object
 */
export const errorHandler = (err, req, res) => {
  console.error('API Error:', err);
  res.status(500).json({ error: 'Internal server error' });
};
