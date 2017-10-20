var watson = require('watson-developer-cloud');
const isFood = require('../helpers/isFood')
const download = require('image-downloader')
const fs = require('fs')

class Watson {
  static analyzeFoodUrl(image_url) {
    var promise = new Promise((resolve, reject) => {
      var options = {
        url: image_url,
        dest: './resources/photo.jpg' // Save to /path/to/dest/photo.jpg
      }
      download.image(options)
        .then(({
          filename,
          image
        }) => {
          var visual_recognition = watson.visual_recognition({
            api_key: '30427f6a69322d2f378dcb3e64299b9c610fde8b',
            version: 'v3',
            version_date: '2016-05-20'
          });
          var params = {
            images_file: fs.createReadStream(filename)
          };
          visual_recognition.classify(params, function(err, response) {
            if (err)
              reject(err)
            else {
              console.log(JSON.stringify(response, null, 2));
              var data = olahData(response.images[0].classifiers[0].classes);
              resolve(data)
            }
          })
        }).catch((err) => {
          reject(err)
        })
    })
    return promise
  }

  static analyzeFood(filename) {
    return new Promise((resolve, reject) => {
      var visual_recognition = watson.visual_recognition({
        api_key: '30427f6a69322d2f378dcb3e64299b9c610fde8b',
        version: 'v3',
        version_date: '2016-05-20'
      });
      var params = {
        images_file: fs.createReadStream(filename)
      };

      visual_recognition.classify(params, function(err, response) {
        if (err)
          reject(err)
        else {
          console.log(JSON.stringify(response, null, 2));
          var data = olahData(response.images[0].classifiers[0].classes);
          resolve(data)
        }
      });
    })
  }
}

function olahData(data) {
  for (var i = 0; i < data.length; i++) {
    if (isFood(data[i])) {
      return data[i];
    }
  }
}
module.exports = Watson;
