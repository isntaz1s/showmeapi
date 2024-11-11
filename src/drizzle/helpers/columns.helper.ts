import { timestamp } from 'drizzle-orm/pg-core';

// column timestamps helper
export const timestamps = {
  updated_at: timestamp().$onUpdate(() => new Date()),
  created_at: timestamp().defaultNow().notNull(),
};
