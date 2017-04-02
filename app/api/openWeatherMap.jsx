var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=04dacd5554c17ca4179b294651c3e53e&units=metric';

// api key = 04dacd5554c17ca4179b294651c3e53e

module.exports = {

  // this component returns a function named getTemp
  getTemp: function(location){

    // make our location string ready to be used in form of a URl
    var encodedLocation = encodeURIComponent(location);

    // the URL that will be requested from open weather map
    // these are called QUESRRY STRINGS
    var requestURL=`${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    //make request as simply as evident
    // takes a URL and goes to fetch it
    return axios.get(requestURL).then(
        function(res){
          //debugger;
          if(res.data.cod && res.data.message){ // this means there was some kind of error
            throw new Error(res.data.message)
          } else {
            return res.data.main.temp;
          }
        }, function(res){
          throw new Error(res.data.message);
        });
  }
}
