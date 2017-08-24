"use strict";

const express  = require('express');
const router = express.Router();

module.exports = (knex) => {
  // get branch info
  router.get('/', (req, res, next) => {
    knex
      .select('*')
      .from('branches')
      .then((result) => {
        res.json(result);
      })
  });

  // get branch data
  router.get('/:id', (req, res, next) => {
    let branchId = req.params.id;
    
    // PSEUDO CODE: [Louis' sql logic goes here]
    // query branches based on id param and query for books associated with said branch; populate page with categories based on frequency

    // knex
    //   .select('*')
    //   .from('branch_book')
    //   .where('id', '=', branchId)
    //   .then((result) => {
    //   })

    // test response
    res.send('success');
        
  })

  return router;
}
