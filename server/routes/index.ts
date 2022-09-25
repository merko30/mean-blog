import * as express from 'express';

const router = express.Router();

import users from './users';
import questions from './questions';

router.use('/auth', users);
router.use('/questions', questions);

export default router;
