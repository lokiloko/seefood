var model = require('../models/watson.js')

class WatsonCtrl {
  static analyzeFood(req, res, next) {
    if (req.body.image_url) {
      if (req.body.image_url.indexOf('google') > -1) {
        res.status(500).send('Please provide valid URL.\n Image link from google is not accepted');
      } else {
        console.log(req.body.image_url)
        model.analyzeFoodUrl(req.body.image_url).then((data) => {
          res.send(data)
        }).catch((err) => {
          console.log(err)
          res.status(500).send('Something wrong with your link')
        })
      }
    } else {
      model.analyzeFood(req.file.path).then((data) => {
        res.send(data)
      }).catch((err) => {
        console.log(err)
        res.send(err)
      })
    }
  }
}

module.exports = WatsonCtrl;
