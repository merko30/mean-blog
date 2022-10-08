import express from 'express';
import passport from 'passport';

const router = express.Router();

import { createAnswer } from '../controllers/answers';

import {
  getQuestions,
  getQuestion,
  createQuestion,
} from '../controllers/questions';

router.get('/', getQuestions);
router.get('/:id', getQuestion);
router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  createQuestion
);
router.post(
  '/:id/answers',
  passport.authenticate('jwt', { session: false }),
  createAnswer
);

export default router;
