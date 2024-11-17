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

app.addContentTypeParser('application/json', { parseAs: 'string' }, (req, body, done) => {
  try {
    const json = JSON.parse(body)
    done(null, json)
  } catch (err) {
    err.statusCode = 400
    done(err, undefined)
  }
})

// register plugins or middlewares
app.register(fastifyCors, {
  origin: '*',
  credentials: true
});
app.register(fastifyCookie);
app.register(fastifyHelmet);
app.register(fastifyCompress);
app.register(fastifyRateLimit, {
  max: 100,
  timeWindow: '1 min',
});

app.get('/', (request, reply) => {
  return { message: 'Hello from showmeapi!' };
});

// register routes endpoint
app.get('/checkhealth', (request, reply) => {
  return reply.statusCode;
});

app.register(quotesController);
app.register(poemsController);

export default app;
