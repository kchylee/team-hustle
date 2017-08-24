'use strict';

const express = require('express');
const router  = express.Router();

// setup body-parser
const bodyParser = require('body-parser');
router.use(bodyParser.json());

module.exports = (knex) => {
  router.get('/frequency/:branch_id', (req, res, next) => {
    const branch_id = parseInt(req.params.branch_id, 10);

    knex()
      .select('categories.name as category', 'categories.id as category_id', 
              'branches.name as branch', 'branches.id as branch_id', 
              knex.raw('SUM(branch_book.frequency) as frequency'))
      .from('branches')
      .innerJoin('branch_book', 'branches.id', 'branch_book.branch_id')
      .innerJoin('books', 'books.id', 'branch_book.book_id')
      .innerJoin('book_category', 'book_category.book_id', 'branch_book.book_id')
      .innerJoin('categories', 'categories.id', 'book_category.category_id')
      .where(knex.raw('branches.id in (?)', [branch_id]))
      .groupBy('branches.id', 'categories.id')
      .orderBy('frequency', 'desc')
      .then((result) => {
        res.json(result);
      })
  })

  router.post('/frequency', (req, res) => {
    
  });

  return router;
}
