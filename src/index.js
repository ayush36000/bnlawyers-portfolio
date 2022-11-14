const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.sendFile("./index.html", { root: __dirname });
});

app.post("/email/send", (req, res) => {
  res.send("Sorry! This feature is under maintenance.");
});

app.listen(8000);
