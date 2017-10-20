const rp = require('request-promise');
const food2forkApiKey = '22b9b64b3d7288b98bdf7194369579f3';

class Model{
  static getRecipe(foodName ,page){

    let pageNum = page || 1;
    var options = {
        uri: 'https://community-food2fork.p.mashape.com/search',
        qs: {
          key:food2forkApiKey,
          q:foodName,
          page:pageNum
        },
        headers: {
            'X-Mashape-Key': '7VaCOmrLEGmshuGxFXwic6fjZg7op16wRA8jsn1DCWfvv0ZDX4',
            'Accept' : 'application/json'
        },
        json: true // Automatically parses the JSON string in the response
    };
    return rp(options)
  }

  static getInggridients(rId){
    var options = {
        uri: 'https://community-food2fork.p.mashape.com/get',
        qs: {
          key:food2forkApiKey,
          rId
        },
        headers: {
            'X-Mashape-Key': '7VaCOmrLEGmshuGxFXwic6fjZg7op16wRA8jsn1DCWfvv0ZDX4',
            'Accept' : 'application/json'
        },
        json: true // Automatically parses the JSON string in the response
    };
    return rp(options)
  }
}

module.exports = Model;
