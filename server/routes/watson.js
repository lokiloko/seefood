var express = require('express');
var router = express.Router();
const WatsonCtrl = require('../models/watson.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('watson')
});

module.exports = router;
