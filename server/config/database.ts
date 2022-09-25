import { DataSource } from 'typeorm';

import { User } from '../models/user';

const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 49153,
  username: 'postgres',
  password: 'postgrespw',
  database: 'angular',
  entities: [User],
  synchronize: true,
  logging: false,
});

export default AppDataSource;
