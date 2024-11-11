import { eq } from 'drizzle-orm';
import { db } from '~/drizzle/db';
import { InsertQuotes, quotesTable } from '~/drizzle/schema';

export const selectQuotes = async () => {
  const quotesPrepared = db
    .select()
    .from(quotesTable)
    .prepare('select_prepared');
  const quotes = await quotesPrepared.execute();
  return quotes;
};

export const selectQuoteById = async (id: string) => {
  const quotePrepared = db
    .select()
    .from(quotesTable)
    .where(eq(quotesTable.id, id))
    .prepare('select_prepared');
  const quote = await quotePrepared.execute();
  return quote;
};

export const insertOneQuote = async (value: InsertQuotes) => {
  const quotePrepared = db
    .insert(quotesTable)
    .values(value)
    .prepare('insert_prepared');
  const quote = await quotePrepared.execute();
  return quote;
};

export const updateOneQuote = async (id: string, value: InsertQuotes) => {
  const quotePrepared = db
    .update(quotesTable)
    .set(value)
    .where(eq(quotesTable.id, id))
    .prepare('update_prepared');
  const quote = await quotePrepared.execute();
  return quote;
};

export const deleteOneQuote = async (id: string) => {
  const quotePrepared = db
    .delete(quotesTable)
    .where(eq(quotesTable.id, id))
    .prepare('delete_prepared');
  const quote = await quotePrepared.execute();
  return quote;
};
