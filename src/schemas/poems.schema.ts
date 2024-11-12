import { z } from 'zod';

// create poem schema for request body
export const createPoemSchema = z
  .object({
    body: z.string().min(16).max(255),
    author: z.string().includes('@').min(3).max(100),
  })
  .required();

// update poem schema for request body
export const updatePoemSchema = z
  .object({
    body: z.string().min(16).max(255),
    author: z.string().includes('@').min(3).max(100),
  })
  .optional();
