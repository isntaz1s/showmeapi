import { FastifyRequest, FastifyReply } from 'fastify';
import {
  insertOneQuote,
  selectQuoteById,
  selectQuotes,
  updateOneQuote,
  deleteOneQuote,
} from '~/repositories/quotes.repository';

// getQuotes handler
export const getQuotes = async (
  request: FastifyRequest,
  reply: FastifyReply,
) => {
  try {
    const quotes = await selectQuotes();

    if (!quotes || quotes.length == 0) {
      return reply.status(400).send({
        code: 400,
        status: 'BAD_REQUEST',
        message: `There's no quotes data!`,
      });
    }

    return reply.status(200).send({
      code: 200,
      status: 'OK',
      message: 'Get all quotes is successfully',
      data: quotes,
    });
  } catch (error) {
    reply.status(400).send({
      code: 400,
      status: 'BAD_REQUEST',
      message: `There's something error has been occured`,
      errors: error,
    });
  }
};

// getQuoteById handler
export const getQuoteById = async (
  request: FastifyRequest,
  reply: FastifyReply,
) => {
  try {
    const { id } = request.params as { id: string };
    const quote = await selectQuoteById(id);

    if (!quote || quote.length == 0) {
      return reply.status(404).send({
        code: 404,
        status: 'NOT_FOUND',
        message: `Quote with id: ${id} doesn't exists or found`,
      });
    }

    return reply.status(200).send({
      code: 200,
      status: 'OK',
      message: `Get quote with id: ${id} is successfully`,
      data: quote,
    });
  } catch (error) {
    reply.status(400).send({
      code: 400,
      status: 'BAD_REQUEST',
      message: `There's something error has been occured`,
      errors: error,
    });
  }
};

// createQuote handler
export const createQuote = async (
  request: FastifyRequest,
  reply: FastifyReply,
) => {
  try {
    const { body, author } = request.body as { body: string; author: string };
    await insertOneQuote({ body, author });

    return reply.status(201).send({
      code: 201,
      status: 'CREATED',
      message: 'Create new quote is successfully',
    });
  } catch (error) {
    reply.status(400).send({
      code: 400,
      status: 'BAD_REQUEST',
      message: `There's something error has been occured.`,
      errors: error,
    });
  }
};

// updateQuote handler
export const updateQuote = async (
  request: FastifyRequest,
  reply: FastifyReply,
) => {
  try {
    const { body, author } = request.body as { body: string; author: string };
    const { id } = request.params as { id: string };
    await updateOneQuote(id, { body, author });
    return reply.status(200).send({
      code: 200,
      status: 'OK',
      message: `Update quote with id: ${id} is successfully`,
    });
  } catch (error) {
    reply.status(400).send({
      code: 400,
      status: 'BAD_REQUEST',
      message: `There's something error has been occured`,
      errors: error,
    });
  }
};

// deleteQuote handler
export const deleteQuote = async (
  request: FastifyRequest,
  reply: FastifyReply,
) => {
  try {
    const { id } = request.params as { id: string };
    await deleteOneQuote(id);

    return reply.status(200).send({
      code: 200,
      status: 'OK',
      message: `Delete quote with id: ${id} is successfully`,
    });
  } catch (error) {
    reply.status(400).send({
      code: 400,
      status: 'BAD_REQUEST',
      message: `There's something error has been occured.`,
      errors: error,
    });
  }
};
