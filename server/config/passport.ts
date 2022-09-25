import { ExtractJwt, Strategy, StrategyOptions } from 'passport-jwt';
import { PassportStatic } from 'passport';

import { User } from '../models/user';

import AppDataSource from './database';

export default function (passport: PassportStatic) {
  const opts = {} as StrategyOptions;
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
  opts.secretOrKey = process.env['JWT_SECRET'];

  const repository = AppDataSource.getRepository(User);

  passport.use(
    new Strategy(opts, async function (jwt_payload, done) {
      try {
        const user = await repository.findOne({
          where: { id: jwt_payload.id },
        });
        if (user) {
          return done(null, user);
        }
      } catch (error) {
        if (error) {
          return done(error, false);
        }
      }
    })
  );
}
