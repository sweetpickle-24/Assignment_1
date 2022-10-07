/*
Assignment1 users.js
Author: Vladyslav Byelozerskykh	
ID: 301182353 
Date: 06/10/2022
 */

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Placeholder');
});

module.exports = router;
