const request = require("request");
const argv = require("yargs").argv;
const id = argv.id;

const newAdress = `https://jsonplaceholder.typicode.com/users/${id}`;

request(newAdress, function(error, response, body) {
  if (!error && response.statusCode == 200) {
    const data = JSON.parse(body);
    console.log(data.name);
    const lng = data.address.geo.lng;
    const lat = data.address.geo.lat;
    const weatherAdress = `https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&lat=${lat}&lon=${lng}`;
    request(weatherAdress, function(error, response, body) {
      if (!error && response.statusCode == 200) {
        const weatherData = JSON.parse(body);
        console.log(weatherData.weather);
      } else {
        console.log("Weather not available");
      }
    });
  } else {
    console.log("User not found");
  }
});
