'use strict';

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {
  router.get('/books', (req, res, next) => {
    knex
      .select('*')
      .from('books')
      .then((result) => {
        // do something
      })
  })

  router.post('/books', (req, res) => {
    
  });

  return router;
}
