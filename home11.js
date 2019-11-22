// 11. Stwórz aplikację która pobierze dane dotyczące pogody i wyświetl ją na konsoli.

const request = require("request");
request(
  "https://api.openweathermap.org/data/2.5/weather?APPID=0ed761300a2725ca778c07831ae64d6e&q=Bia%C5%82ystok",
  function(error, response, body) {
    const data = JSON.parse(body);
    console.log(data);
  }
);
