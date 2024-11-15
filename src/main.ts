import app from '~/app';
import { env } from './config/env';
import { FastifyRequest, FastifyReply } from 'fastify';

// initialize main application
export default async (request: FastifyRequest, reply: FastifyReply) => {
  await app.ready();
  app.server.emit('request', request, reply);
  app.listen({ port: env.PORT }, (err) => {
    if (err) {
      app.log.info(`Server could not listening, because ${err}`);
    }
  });
  return app;
}
