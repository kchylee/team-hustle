"use strict";
require('dotenv').config();

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {
  router.post("/addBook", (req, res) => {
    
  });
  return router;
}
