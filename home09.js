const os = require("os");
const user = os.userInfo();

// setTimeout(() => {
//   console.log("hello", user.username);
// }, 5000);

function hello() {
  console.log("Hello", user.username);
}

setTimeout(hello, 5000);
