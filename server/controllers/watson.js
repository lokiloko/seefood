var model = require('../models/watson.js')

class WatsonCtrl {
  static analyzeFood(req, res, next) {
    if(req.body.image_url){
      console.log(req.body.image_url)
      model.analyzeFoodUrl(req.body.image_url).then((data)=>{
        res.send(data)
      }).catch((err)=>{
        console.log(err)
        res.send(err)
      })
    }
    else{
      model.analyzeFood(req.file.path).then((data)=>{
        res.send(data)
      }).catch((err)=>{
        console.log(err)
        res.send(err)
      })
    }
  }
}

module.exports = WatsonCtrl;
