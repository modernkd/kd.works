import { pgTable, serial, text, timestamp, varchar } from 'drizzle-orm/pg-core';

/**
 * Database schema definition for the notes table.
 * This table stores contact form submissions and their moderation status.
 */
export const notes = pgTable('notes', {
  /** Unique identifier for each note */
  id: serial('id').primaryKey(),
  /** Name of the person who submitted the note */
  name: varchar('name', { length: 255 }).notNull(),
  /** Email address of the submitter */
  email: varchar('email', { length: 255 }).notNull(),
  /** Title/subject of the note */
  title: varchar('title', { length: 255 }).notNull(),
  /** Main content/message of the note */
  message: text('message').notNull(),
  /** Moderation status: 'pending', 'approved', or 'rejected' */
  status: varchar('status', { length: 50 }).notNull().default('pending'),
  /** Timestamp when the note was created */
  createdAt: timestamp('created_at').defaultNow().notNull(),
  /** Timestamp when the note was approved (null if not approved) */
  approvedAt: timestamp('approved_at'),
});

/**
 * TypeScript type representing a complete note record from the database.
 * Includes all fields including auto-generated ones like id and timestamps.
 */
export type Note = typeof notes.$inferSelect;

/**
 * TypeScript type representing the data needed to create a new note.
 * Excludes auto-generated fields like id, createdAt, and approvedAt.
 */
export type NewNote = typeof notes.$inferInsert;
