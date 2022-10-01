import express from 'express';
import passport from 'passport';

const router = express.Router();

import { getQuestions, createQuestion } from '../controllers/questions';

router.get('/', getQuestions);
router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  createQuestion
);

export default router;
