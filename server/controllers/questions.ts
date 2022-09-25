import { NextFunction, Request, Response } from 'express';
import AppDataSource from '../config/database';
import { Question } from '../models/question';

export const getQuestions = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const repository = AppDataSource.getRepository(Question);

  const questions = await repository.find();

  res.json({ questions });
};
