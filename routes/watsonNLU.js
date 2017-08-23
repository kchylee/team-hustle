'use strict';
require('dotenv').config();

const express = require('express');
const router  = express.Router();

// Authentication to Natural Language Understanding API
const NaturalLanguageUnderstandingV1 = require('watson-developer-cloud/natural-language-understanding/v1.js');
const nlu = new NaturalLanguageUnderstandingV1({
  version_date: NaturalLanguageUnderstandingV1.VERSION_DATE_2017_02_27
});

// setup body-parser
const bodyParser = require('body-parser');
router.use(bodyParser.json());

module.exports = () => {
    router.post('/api/analyze', (req, res, next) => {
        if (process.env.SHOW_DUMMY_DATA) {
          res.json(require('./payload.json'));
        } else {
          nlu.analyze(req.body, (err, results) => {
              if (err) {
                return next(err);
              } else {
                res.json({ query: req.body.query, results });
              }
          });
        }
    });
    
    return router;
  }
