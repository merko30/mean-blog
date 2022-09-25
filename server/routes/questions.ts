import express from 'express';

const router = express.Router();

import { getQuestions } from '../controllers/questions';

router.get('/', getQuestions);

export default router;
