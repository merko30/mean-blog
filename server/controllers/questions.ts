import { NextFunction, Request, Response } from 'express';
import AppDataSource from '../config/database';
import { Question } from '../models/question';

export const getQuestions = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const repository = AppDataSource.getRepository(Question);

    const questions = await repository.find({ relations: { author: true } });

    res.json({ questions });
  } catch (error) {
    next(error);
  }
};

export const createQuestion = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const repository = AppDataSource.getRepository(Question);

    const question = await repository.save({
      ...req.body,
      authorId: req.user.id,
    });

    res.json({ question });
  } catch (error) {
    next(error);
  }
};
