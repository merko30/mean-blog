import cors from 'cors';
import express from 'express';
import passport from 'passport';

import passportConfig from './passport';

export default (app: express.Express) => {
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(passport.initialize());
  passportConfig(passport);
};
