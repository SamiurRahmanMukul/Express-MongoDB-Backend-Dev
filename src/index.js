const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("This is Home page with get request!");
  res.end();
});

app.post("/", (req, res) => {
  res.send("This is Home page with post request!");
  res.end();
});

// server listening on 3000 port...
app.listen(port, (err) => {
  if (err) {
    console.log("Error: " + err);
  } else {
    console.log(`Express app listening at http://localhost:${port}`);
  }
});
