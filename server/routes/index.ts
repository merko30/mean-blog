import * as express from 'express';

const router = express.Router();

import users from './users';

router.use('/auth', users);

export default router;
