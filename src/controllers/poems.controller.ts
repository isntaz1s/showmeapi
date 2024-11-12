import { FastifyInstance } from 'fastify';
import { validateSchema } from '~/middlewares/validateSchema';
import { createPoemSchema, updatePoemSchema } from '~/schemas/poems.schema';
import {
  createPoem,
  deletePoem,
  getPoemById,
  getPoems,
  updatePoem,
} from '~/services/poems.service';

export const poemsController = async (app: FastifyInstance) => {
  app.get('/api/poems', getPoems);
  app.get('/api/poems/:id', getPoemById);
  app.post(
    '/api/poems',
    {
      preHandler: await validateSchema(createPoemSchema),
    },
    createPoem,
  );
  app.patch(
    '/api/poems/:id',
    {
      preHandler: await validateSchema(updatePoemSchema),
    },
    updatePoem,
  );
  app.delete('/api/poems/:id', deletePoem);
};
