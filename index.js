'use strict';

require('dotenv').config();

const express     = require('express');
const app = express();

const ENV         = process.env.ENV || "development";

const knexConfig  = require("./knexfile");
const knex        = require("knex")(knexConfig[ENV]);
const knexLogger  = require('knex-logger');
// Log knex SQL queries to STDOUT as well
app.use(knexLogger(knex));

// Deployment tracking
require('cf-deployment-tracker-client').track();

// Bootstrap application settings
require('./config/express')(app);

const bodyParser  = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

const morgan      = require('morgan');
app.use(morgan('dev'));

//Import routes here
let booksRoute = require('./routes/books');
let indexRoute = require('./routes/index');
let watsonNLURoute = require('./routes/watsonNLU');

//Specify routes here
app.use('/', indexRoute());
app.use('/books', booksRoute(knex));
app.use('/watsonNLU', watsonNLURoute());

let PORT = process.env.PORT || process.env.VCAP_APP_PORT || 3001;

// error-handler settings
require('./config/error-handler')(app);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT} or http://127.0.0.1:${PORT}`);
});
