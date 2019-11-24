const request = require("request");
const argv = require("yargs").argv;
const city = argv.city;

const newAdress = `https://api.openweathermap.org/data/2.5/weather?APPID=0ed761300a2725ca778c07831ae64d6e&q=${city}`;

request(newAdress, function(error, response, body) {
  const data = JSON.parse(body);
  console.log(data);
});
