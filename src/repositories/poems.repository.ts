import { eq } from 'drizzle-orm';
import { db } from '~/drizzle/db';
import { InsertPoems, poemsTable } from '~/drizzle/schema';

export const selectPoems = async () => {
  const poemsPrepared = db
    .select()
    .from(poemsTable)
    .prepare('select_prepared');
  const poems = await poemsPrepared.execute();
  return poems;
};

export const selectPoemById = async (id: string) => {
  const poemPrepared = db
    .select()
    .from(poemsTable)
    .where(eq(poemsTable.id, id))
    .prepare('select_prepared');
  const poem = await poemPrepared.execute();
  return poem;
};

export const insertOnePoem = async (value: InsertPoems) => {
  const poemPrepared = db
    .insert(poemsTable)
    .values(value)
    .prepare('insert_prepared');
  const poem = await poemPrepared.execute();
  return poem;
};

export const updateOnePoem = async (id: string, value: InsertPoems) => {
  const poemPrepared = db
    .update(poemsTable)
    .set(value)
    .where(eq(poemsTable.id, id))
    .prepare('update_prepared');
  const poem = await poemPrepared.execute();
  return poem;
};

export const deleteOnePoem = async (id: string) => {
  const poemPrepared = db
    .delete(poemsTable)
    .where(eq(poemsTable.id, id))
    .prepare('delete_prepared');
  const poem = await poemPrepared.execute();
  return poem;
};
