const express = require('express');
const router = express.Router();

// MongoDB
// const MongoClient = require('mongodb').MongoClient;
// const assert = require('assert');

const Cloudant = require('@cloudant/cloudant');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Test Vote API calls!');
});

module.exports = router;
