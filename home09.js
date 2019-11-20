// 09. Stworzyć aplikację, która wyświetli na ekranie przywitanie użytkownika aktualnie zalogowanego na komputerze po 5 sekundach od uruchomienia aplikacji.

const os = require("os");
const user = os.userInfo();

// setTimeout(() => {
//   console.log("hello", user.username);
// }, 5000);

function hello() {
  console.log("Hello", user.username);
}

setTimeout(hello, 5000);
