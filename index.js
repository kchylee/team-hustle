'use strict';

require('dotenv').config();

const express     = require('express');
const app = express();

const PORT        = process.env.PORT || 8080;
const ENV         = process.env.ENV || "development";

const knexConfig  = require("./knexfile");
const knex        = require("knex")(knexConfig[ENV]);
const knexLogger  = require('knex-logger');
// Log knex SQL queries to STDOUT as well
app.use(knexLogger(knex));

const bodyParser  = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

const morgan      = require('morgan');
app.use(morgan('dev'));


//Import routes here
let addBookRoute = require('./routes/addBook');
let indexRoute = require('./routes/index')

//Specify routes here
app.use('/', indexRoute());
app.use('/addBook', addBookRoute(knex));

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT} or http://127.0.0.1:${PORT}`);
});
