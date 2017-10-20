var express = require('express');
var cors = require('cors')
var router = express.Router();
const WatsonCtrl = require('../controllers/watson.js')
var multer = require('multer')
var storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './resources/')
  },
  filename: function(req, file, cb) {
    var split = file.originalname.split('.');
    cb(null, split[0] + '-' + Date.now() + '.' + split[1])
  }
})
var upload = multer({
  storage: storage
})
/* GET home page. */
router.use(cors())
router.post('/', upload.single('image_files'), WatsonCtrl.analyzeFood)

module.exports = router;
