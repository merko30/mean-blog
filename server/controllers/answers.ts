import { NextFunction, Request, Response } from 'express';

import AppDataSource from '../config/database';

import { Answer } from '../models/answer';

export const createAnswer = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const repository = AppDataSource.getRepository(Answer);

    const answer = await repository.save({
      ...req.body,
      questionId: req.params.id,
      authorId: req.user.id,
    });

    console.log({ answer });

    res.json({ answer });
  } catch (error) {
    next(error);
  }
};
