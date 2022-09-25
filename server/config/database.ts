import { DataSource } from 'typeorm';

import { User } from '../models/user';
import { Question } from '../models/question';

// TODO: move database credentials to env
const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 49153,
  username: 'postgres',
  password: 'postgrespw',
  database: 'angular',
  entities: [User, Question],
  synchronize: true,
  logging: false,
});

export default AppDataSource;
