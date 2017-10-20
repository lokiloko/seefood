var express = require('express');
var router = express.Router();
const RecipeCtrl = require('../models/recipe.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('recipe')
});

module.exports = router;
