import { defineConfig } from 'drizzle-kit';
import { env } from '~/config/env';

export default defineConfig({
  dialect: 'postgresql',
  schema: './src/drizzle/schema',
  out: './src/drizzle/migrations',
  dbCredentials: {
    url: env.DATABASE_URL,
  },
  strict: true,
  verbose: true,
});
