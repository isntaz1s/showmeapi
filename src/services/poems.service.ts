import { FastifyRequest, FastifyReply } from 'fastify';
import {
  insertOnePoem,
  selectPoemById,
  selectPoems,
  updateOnePoem,
  deleteOnePoem,
} from '~/repositories/poems.repository';

// getPoems handler
export const getPoems = async (
  request: FastifyRequest,
  reply: FastifyReply,
) => {
  try {
    const poems = await selectPoems();

    if (!poems || poems.length == 0) {
      return reply.status(400).send({
        code: 400,
        status: 'BAD_REQUEST',
        message: `There's no poems data!`,
      });
    }

    return reply.status(200).send({
      code: 200,
      status: 'OK',
      message: 'Get all poems is successfully',
      data: poems,
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
export const getPoemById = async (
  request: FastifyRequest,
  reply: FastifyReply,
) => {
  try {
    const { id } = request.params as { id: string };
    const poem = await selectPoemById(id);

    if (!poem || poem.length == 0) {
      return reply.status(404).send({
        code: 404,
        status: 'NOT_FOUND',
        message: `Poem with id: ${id} doesn't exists or found`,
      });
    }

    return reply.status(200).send({
      code: 200,
      status: 'OK',
      message: `Get poem with id: ${id} is successfully`,
      data: poem,
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
export const createPoem = async (
  request: FastifyRequest,
  reply: FastifyReply,
) => {
  try {
    const { body, author } = request.body as { body: string; author: string };
    await insertOnePoem({ body, author });

    return reply.status(201).send({
      code: 201,
      status: 'CREATED',
      message: 'Create new poem is successfully',
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
export const updatePoem = async (
  request: FastifyRequest,
  reply: FastifyReply,
) => {
  try {
    const { body, author } = request.body as { body: string; author: string };
    const { id } = request.params as { id: string };
    await updateOnePoem(id, { body, author });
    return reply.status(200).send({
      code: 200,
      status: 'OK',
      message: `Update poem with id: ${id} is successfully`,
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
export const deletePoem = async (
  request: FastifyRequest,
  reply: FastifyReply,
) => {
  try {
    const { id } = request.params as { id: string };
    await deleteOnePoem(id);

    return reply.status(200).send({
      code: 200,
      status: 'OK',
      message: `Delete poem with id: ${id} is successfully`,
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
