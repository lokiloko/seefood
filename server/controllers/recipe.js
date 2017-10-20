const Recipe = require('../models/recipe');
let result = {data:{}}

class RecipeCtrl {
  static getListRecipeByName(req, res){
    let ctrlArgs = [req.params.foodname]
    if (req.params.page) ctrlArgs.push(req.params.page)
    Recipe.getRecipe(...ctrlArgs).then(data=>{
      result.message = 'berhasil';
      result.data = data.recipes;
      res.send(result) ;
    }).catch(err=>{
      console.log(err);
      result.message = 'gagal';
      res.send(result)
    })
  }
}

module.exports = RecipeCtrl;
