require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const ENV         = process.env.ENV || "development";
const knexConfig  = require("./knexfile");
const knex        = require("knex")(knexConfig[ENV]);
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

//Import routes here
let addBookRoute = require('./routes/addBook');
let indexRoute = require('./routes/index')

//Specify routes here
app.use('/', indexRoute());
app.use('/addBook', addBookRoute(knex));

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000 or http://127.0.0.1:3000');
});
