var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=635678a0ef749470ec7ead39c0428ced&units=imperial';


module.exports = {
  getTemp: function (cityNm) {
    //encode the city name
    var encodedcityNm = encodeURIComponent(cityNm);
    var requestURL = `${OPEN_WEATHER_MAP_URL}&q=${encodedcityNm}`;

    return axios.get(requestURL).then(function(resp) {      
      if (resp.data.cod && resp.data.message) {
        throw new Error(resp.data.message);
      } else {
        return resp.data.main.temp;
      }
    }, function(resp) {
      if (resp.response.data.message) {
        throw new Error(resp.response.data.message);
      } else {
        throw new Error("Something bad just happened!!!");
      }
    });
  }
}
