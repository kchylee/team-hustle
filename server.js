// temporary server to set up database
'use strict';

require('dotenv').config();

const express     = require('express');
const app         = express();

const PORT        = process.env.PORT || 8080;
const ENV         = process.env.ENV || 'development';

const knexConfig  = require('./knexfile');
const knex        = require('knex')(knexConfig[ENV]);
const knexLogger  = require('knex-logger');

const morgan      = require('morgan');

app.use(morgan('dev'));

// Log knex SQL queries to STDOUT as well
app.use(knexLogger(knex));


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
