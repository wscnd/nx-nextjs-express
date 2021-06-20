/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
import { Request } from 'express-serve-static-core';

import { pokemon } from './data';

const app = express();

app.get('/api', (req, res) => {
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

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
