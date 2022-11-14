let express = require("express");
let server = express();

server.get("/", (req, res) => {
  res.sendFile("./index.html", { root: __dirname });
});

server.post("/email/send", (req, res) => {
  res.send("Sorry! This feature is currently under maintenance.");
});

server.listen(8000); //3 - listen for any incoming requests

console.log("Node.js web server at port 8000 is running..");
