require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const ENV         = process.env.ENV || "development";
const knexConfig  = require("./knexfile");
const knex        = require("knex")(knexConfig[ENV]);

// Deployment tracking
require('cf-deployment-tracker-client').track();

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

// Bootstrap application settings
require('./config/express')(app);

//Import routes here
let addBookRoute = require('./routes/addBook');
let indexRoute = require('./routes/index');
let watsonNLURoute = require('./routes/watsonNLU');

//Specify routes here
app.use('/', indexRoute());
app.use('/addBook', addBookRoute(knex));
app.use('/watsonNLU', watsonNLURoute());

let port = process.env.PORT || process.env.VCAP_APP_PORT || 3000;

// error-handler settings
require('./config/error-handler')(app);

// Start the server
app.listen(port, () => {
  console.log('Server is running on http://localhost:3000 or http://127.0.0.1:3000');
});
