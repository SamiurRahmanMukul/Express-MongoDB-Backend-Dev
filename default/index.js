const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("This is home page!");
});
app.post("/", (req, res) => {
  res.send("This is home page with post request!");
});

app.listen(3000, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("server listening successfully on port 3000...");
  }
});
