import * as jwt from 'jsonwebtoken';

export default (user: { id: number }) => {
  return jwt.sign({ id: user.id }, process.env['JWT_SECRET'] || 'test', {
    expiresIn: '1d',
  });
};
