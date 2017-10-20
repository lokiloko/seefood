var express = require('express');
var router = express.Router();
const FacebookCtrl = require('../models/facebook.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('facebook')
});

module.exports = router;
