import { FastifyInstance } from 'fastify';
import { validateSchema } from '~/middlewares/validateSchema';
import { createQuoteSchema, updateQuoteSchema } from '~/schemas/quotes.schema';
import {
  createQuote,
  deleteQuote,
  getQuoteById,
  getQuotes,
  updateQuote,
} from '~/services/quotes.service';

export const quotesController = async (app: FastifyInstance) => {
  app.get('/api/quotes', getQuotes);
  app.get('/api/quotes/:id', getQuoteById);
  app.post(
    '/api/quotes',
    {
      preHandler: await validateSchema(createQuoteSchema),
    },
    createQuote,
  );
  app.patch(
    '/api/quotes/:id',
    {
      preHandler: await validateSchema(updateQuoteSchema),
    },
    updateQuote,
  );
  app.delete('/api/quotes/:id', deleteQuote);
};
