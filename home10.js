const os = require("os");
const user = os.userInfo();
const fs = require("fs");

function hello() {
  console.log("Hello", user.username);
  fs.writeFileSync("hello.txt", "Hello" + " " + user.username);
}

setTimeout(hello, 5000);
