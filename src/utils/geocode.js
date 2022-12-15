const request = require("request");

const geocode = (address, callback) => {
  const url =
    "http://api.positionstack.com/v1/forward?access_key=eaf76fa1b90176bbf3ba82a17e9172d8&query=" +
    encodeURIComponent(address);

  request({ url: url, json: true }, (error, response, body) => {
    if (error) {
      callback("Unable to connect to location services!");
    } else if (response.body.error) {
      callback("Unable to find location.");
    } else {
      callback(undefined, {
        latitude: body?.data[0]?.latitude,
        longitude: body?.data[0]?.longitude,
        location: body?.data[0]?.label,
      });
    }
  });
};

module.exports = geocode;
