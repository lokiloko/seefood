var foods = require('./foods.json')
function isFood(class_hierarchy) {
  if (class_hierarchy.hasOwnProperty('type_hierarchy')){
    foods.forEach(food=>{
      if(class_hierarchy.type_hierarchy.indexOf(food.name) > -1){
        return true;
      }
    })
    return true;
  }
  return false
}

// data[i].type_hierarchy.indexOf('/food/nutrition/') > -1 || data[i].type_hierarchy.indexOf('/food/food product/') > -1 || data[i].type_hierarchy.indexOf('/food/beverage/') > -1 || data[i].type_hierarchy.indexOf('/food/water/') > -1) ){
module.exports = isFood;
