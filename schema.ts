import { integer, pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core'

export const usersTable = pgTable('users', {
  id: serial('id').primaryKey(),
  username: text('username').notNull(),
  password: integer('password').notNull(),
  gender: text('gender').notNull().unique(),
})

export type InsertUser = typeof usersTable.$inferInsert
export type SelectUser = typeof usersTable.$inferSelect
