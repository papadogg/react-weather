var axios = require('axios');

const OPEN_WEATHER_MAP_URL =" http://api.openweathermap.org/data/2.5/weather?units=metric&APPID=d356f450ecb710093e63ef2b42d59761"

module.exports = {
    getTemp(location) {
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
        
        return axios.get(requestUrl).then(function(res){
           
            if(res.data.cod && res.data.message){
                throw new Error("Error: Not found city");
            } else {
                return res.data.main.temp;
            }
        }, function(res){
            throw new Error("Error: Not found city");
        });
    }
}