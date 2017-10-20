var express = require('express');
var router = express.Router();
const ZomatoCtrl = require('../models/zomato.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('zomato')
});

module.exports = router;
