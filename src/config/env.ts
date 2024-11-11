import { config } from 'dotenv';
import type { Env } from '~/utils/types';

// init env path
config({ path: '.env' });

// assign env var and type
export const env: Env = {
  NODE_ENV: process.env.NODE_ENV!,
  HOST: process.env.HOST!,
  PORT: Number(process.env.PORT),
  DATABASE_URL: process.env.DATABASE_URL!,
  JWT_SECRET: process.env.JWT_SECRET!,
};
