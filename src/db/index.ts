import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

/**
 * Database connection string retrieved from environment variables.
 * This should point to a PostgreSQL database.
 */
const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error('DATABASE_URL environment variable is required');
}

/**
 * PostgreSQL client instance configured without prepared statements.
 * Prepared statements are disabled to avoid issues with connection pooling.
 */
const client = postgres(connectionString, { prepare: false });

/**
 * Drizzle ORM database instance configured with the PostgreSQL client.
 * This provides a type-safe interface for database operations.
 */
export const db = drizzle(client);
