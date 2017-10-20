const zomato = require('zomato');

class Zomato {
  static getNearbyRes(data) {
    var promise = new Promise((resolve, reject)=>{
      var client = zomato.createClient({
        userKey: '84d8f2403a8b42aabf435da2bc80cada', //as obtained from [Zomato API](https://developers.zomato.com/apis)
      });
      client.getGeocode({
        lat: data.latitude, //latitude
        lon: data.longitude //longitude
      }, function(err, result) {
        if (!err) {
          var dataRes = JSON.parse(result)
          var restaurant = olahData(dataRes.nearby_restaurants, data.cuisine);
          console.log(restaurant);
          resolve(restaurant)
        } else {
          console.log(err);
          reject(err)
        }
      });
    })
    return promise
  }
}

function olahData(data, cuisine) {
  var restaurant =[]
  data.forEach(d =>{
    if(d.restaurant.cuisines.toLowerCase().indexOf(cuisine) > -1){
      restaurant.push(d.restaurant.name);
    }
  })
  return restaurant
}

module.exports = Zomato;
