var express = require('express');
var router = express.Router();
const ZomatoCtrl = require('../controllers/zomato.js')

/* GET home page. */
router.post('/', ZomatoCtrl.getNearbyRes);

module.exports = router;
