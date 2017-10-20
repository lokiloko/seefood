const model = require('../models/zomato.js')

class ZomatoCtrl {
  static getNearbyRes(req, res, next) {
    var obj = {
      latitude:req.body.latitude,
      longitude:req.body.longitude,
      cuisine:req.body.cuisine
    }
    model.getNearbyRes(obj).then((data)=>{
      res.json(data);
    })
  }
}

module.exports = ZomatoCtrl;
