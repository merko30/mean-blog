import express from 'express';

const router = express.Router();

import { getQuestions, createQuestion } from '../controllers/questions';

router.get('/', getQuestions);
router.post('/', createQuestion);

export default router;
