import * as pg from 'drizzle-orm/pg-core';
import { timestamps } from '~/drizzle/helpers/columns.helper';

const poemsTable = pg.pgTable('poems', {
  id: pg.uuid().defaultRandom(),
  body: pg.text().notNull(),
  author: pg.varchar().notNull(),
  ...timestamps
});

export type SelectPoems = typeof poemsTable.$inferSelect;
export type InsertPoems = typeof poemsTable.$inferInsert;
