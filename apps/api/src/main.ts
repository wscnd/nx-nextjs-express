/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { urlencoded } from 'body-parser';
import * as cors from 'cors';
import * as express from 'express';
import { Request } from 'express-serve-static-core';
import * as morgan from 'morgan';

import { pokemon } from './data';

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send({ message: 'Welcome to api!' });
});

app.get('/pokemon', (req, res) => {
  res.send(pokemon);
});

app.get(
  '/search',
  (req: Request<unknown, unknown, unknown, { q: string }>, res) => {
    const query = (req.query.q || '') /** fallback to not using query */
      .toLowerCase();
    const search = pokemon.filter(({ name: { english } }) => {
      return english.toLowerCase().includes(query);
    });

    res.send(search);
  }
);

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log('port being used:', process.env.PORT);
  console.log(`api url: ${process.env.API}/`);
});
server.on('error', console.error);
