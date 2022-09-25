import { Request, Response, NextFunction } from 'express';
import { compare } from 'bcryptjs';

import createToken from '../utils/createToken';

import { User } from '../models/user';

import AppDataSource from '../config/database';

export const register = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const repository = AppDataSource.getRepository(User);

    const user = await repository.findOne({
      where: [{ email: req.body.email }, { username: req.body.username }],
    });
    console.log(user);
    if (user) {
      throw new Error('User already exists, check your email or username');
    }

    await repository.save(req.body);
    res.json({ ok: true });
  } catch (error) {
    next(error);
  }
};

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const repository = AppDataSource.getRepository(User);
  try {
    const user = await repository.findOne({
      where: [
        { username: req.body.usernameOrEmail },
        { email: req.body.usernameOrEmail },
      ],
    });
    if (user) {
      const validPassword = await compare(req.body.password, user.password);

      if (validPassword) {
        const token = createToken({ id: user.id });
        res.json({ token });
      } else {
        throw new Error('Wrong password');
      }
    } else {
      throw new Error('User not found');
    }
  } catch (error) {
    next(error);
  }
};

export const getUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const repository = AppDataSource.getRepository(User);
    const user = await repository.findOne({
      where: { id: req.user!.id },
      select: { password: false },
    });
    res.json({ user });
  } catch (error) {
    next(error);
  }
};
