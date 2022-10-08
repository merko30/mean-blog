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

    const createdAnswer = await repository.save({
      ...req.body,
      questionId: req.params.id,
      authorId: req.user.id,
    });

    const answer = await repository.findOne({
      where: { id: createdAnswer.id },
      relations: { author: true },
    });

    res.json({ answer });
  } catch (error) {
    next(error);
  }
};
