import express from 'express';
import passport from 'passport';

const router = express.Router();

import { register, login, getUser } from '../controllers/users';

router.post('/register', register);
router.post('/login', login);
router.get('/user', passport.authenticate('jwt', { session: false }), getUser);

export default router;
