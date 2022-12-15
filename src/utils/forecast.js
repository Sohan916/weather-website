const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=7a0a3e6a01fddde387bd941863ede973&query=" +
    latitude +
    "," +
    longitude;

  request({ url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect.", undefined);
    } else if (response.body.error) {
      callback("Unable to find location.");
    } else {
      callback(
        undefined,
        response.body.current.weather_descriptions[0] +
          ". It is currently " +
          response.body.current.temperature +
          " degrees out. It feels like " +
          response.body.current.feelslike +
          " degrees out.Precipitation is " +
          response.body.current.precip +
          "."
      );
    }
  });
};
module.exports = forecast;
