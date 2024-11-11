import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import { env } from '~/config/env';
import * as schema from '~/drizzle/schema';

// init neon instance
const sql = neon(env.DATABASE_URL);

// init drizzle client and schemas
export const db = drizzle({ client: sql, schema });
