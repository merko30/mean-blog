import { DataSource } from 'typeorm';

import { User } from '../models/user';
import { Question } from '../models/question';
import { Vote } from '../models/vote';
import { Answer } from '../models/answer';

// TODO: move database credentials to env
const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 49153,
  username: 'postgres',
  password: 'postgrespw',
  database: 'angular',
  entities: [User, Question, Vote, Answer],
  synchronize: true,
  logging: false,
});

export default AppDataSource;
