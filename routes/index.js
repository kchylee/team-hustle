"use strict";
require('dotenv').config();

const express = require('express');
const router  = express.Router();

module.exports = () => {
  router.get("/", (req, res) => {
    res.send("This is a test home page to show that the Express server is working. The real home page will be served by React.");
  });
  
  return router;
}
