var express = require('express');
var router = express.Router();
const RecipeCtrl = require('../controllers/recipe.js')

/* GET home page. */
router.get('/:foodname', function(req, res, next) {
  console.log('AHLOOOOOOOOOOOOSAJDLKJSAKNDMALSDKNSKFJASFLBSADAKJSAKFB')
  RecipeCtrl.getListRecipeByName(req, res)
  //res.send('recipe')
});

router.get('/:foodname/:page', function(req, res, next){
  RecipeCtrl.getListRecipeByName(req, res)
})

module.exports = router;
