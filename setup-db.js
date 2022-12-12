/* eslint-disable no-console */
const pool = require('./lib/utils/pool');
const setup = requre('./data/setup');

setup(pool)
  .catch((err) => console.error(err))
  .finally(() => process.exit());
