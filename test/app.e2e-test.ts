import { FastifyInstance } from 'fastify';
import app from '~/app';

describe('Applcation', () => {
  let application: FastifyInstance;

  beforeEach(async () => {
    application = app as unknown as FastifyInstance;
    await application.ready();
  });

  describe('GET /checkhealth', () => {
    it('should return statusCode to equal 200', async () => {
      const result = await application.inject({
        url: '/checkhealth',
        method: 'GET',
      });
      expect(result.statusCode).toBe(200);
    });
  });
});
