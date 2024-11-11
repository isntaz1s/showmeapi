import { z } from 'zod';

// create quote schema for request body
export const createQuoteSchema = z
  .object({
    body: z.string().min(16).max(100),
    author: z.string().includes('@').min(3).max(16),
  })
  .required();

// update quote schema for request body
export const updateQuoteSchema = z
  .object({
    body: z.string().min(16).max(100),
    author: z.string().includes('@').min(3).max(16),
  })
  .optional();
