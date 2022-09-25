import { config } from 'dotenv';
config();

import express from 'express';

import setMiddlewares from './config/middlewares';
import errorHandler from './utils/errorHandler';
import routes from './routes';
import AppDataSource from './config/database';

const app = express();

setMiddlewares(app);

app.use('/api', routes);

app.use(errorHandler);

const PORT = process.env['PORT'] || 3000;

AppDataSource.initialize().then(() => {
  app.listen(PORT, () => {
    console.log('Server started on port ' + PORT);
  });
});
