import { FastifyReply, FastifyRequest } from 'fastify';
import { ZodError, ZodSchema } from 'zod';

// handler for validate request body
export const validateSchema = async (schema: ZodSchema) => {
  return async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const schemaParsed = await schema.parse(request.body);
      return schemaParsed;
    } catch (error) {
      if (error instanceof ZodError) {
        reply.status(400).send({
          code: 400,
          status: 'BAD_REQUEST',
          message: 'Validation Error',
          errors: error.errors,
        });
      }
      reply.status(400).send({
        code: 400,
        status: 'BAD_REQUEST',
        message: `There's something error when validate schema`,
        errors: error,
      });
    }
  };
};
