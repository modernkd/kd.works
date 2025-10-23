import express from 'express';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config({ path: '.env.local' });

// Set DATABASE_URL if not set
process.env.DATABASE_URL = process.env.DATABASE_URL || 'postgresql://postgres:password@localhost:5432/kdworks';

const app = express();
const port = 3001;

// Middleware
app.use(express.json());

// Mock API responses for testing
app.get('/api/notes/approved', (req, res) => {
  res.json({
    success: true,
    notes: [
      {
        id: 1,
        name: 'Test User',
        email: 'test@example.com',
        title: 'Test Note',
        message: 'This is a test approved note',
        status: 'approved',
        createdAt: new Date().toISOString(),
        approvedAt: new Date().toISOString(),
      },
    ],
  });
});

app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    message: 'API is healthy',
    timestamp: new Date().toISOString(),
    version: '1.0.0',
  });
});

app.listen(port, () => {
  console.log(`API server running on http://localhost:${port}`);
});
