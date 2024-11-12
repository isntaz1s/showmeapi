import fastify from 'fastify';
import fastifyCors from '@fastify/cors';
import fastifyCookie from '@fastify/cookie';
import fastifyHelmet from '@fastify/helmet';
import fastifyCompress from '@fastify/compress';
import fastifyRateLimit from '@fastify/rate-limit';
import { logger } from '~/config/logger';
import { quotesController } from '~/controllers/quotes.controller';
import { poemsController } from '~/controllers/poems.controller';

// assign fastify instance
const app = fastify({
  loggerInstance: logger,
});

// register plugins or middlewares
app.register(fastifyCors);
app.register(fastifyCookie);
app.register(fastifyHelmet);
app.register(fastifyCompress);
app.register(fastifyRateLimit, {
  max: 100,
  timeWindow: '1 min',
});

// register routes endpoint
app.get('/checkhealth', (request, reply) => {
  return reply.statusCode;
});

app.register(quotesController);
app.register(poemsController);

export default app;
