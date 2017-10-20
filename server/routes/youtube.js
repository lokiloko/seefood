var express = require('express');
var router = express.Router();
const YoutubeCtrl = require('../models/youtube.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('youtube')
});

module.exports = router;
