import * as pg from 'drizzle-orm/pg-core';
import { timestamps } from '~/drizzle/helpers/columns.helper';

// quotes table
export const quotesTable = pg.pgTable('quotes', {
  id: pg.uuid().defaultRandom(),
  body: pg.text().notNull(),
  author: pg.varchar().notNull(),
  ...timestamps,
});

// infer typeof quotes table
export type SelectQuotes = typeof quotesTable.$inferSelect;
export type InsertQuotes = typeof quotesTable.$inferInsert;
