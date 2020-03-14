const express = require("express");

const app = express();

const port = 1234;
app.get("/", (req, res) => {
  res.json({
    msg: "hi i am sunny"
  });
});
app.listen(port, (req, res) => {
  console.log("server start on ", port);
});
