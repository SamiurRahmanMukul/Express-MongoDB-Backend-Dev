/* 
  📛 Title: Error Handling / Asynchronous
  💁‍♀️ Description: Error Handing in Express Application
  👤 Author: Md. Samiur Rahman (Mukul) 
  🕸️ Website: http://www.SamiurRahmanMukul.epizy.com
  📦 Github: http://www.github.com/SamiurRahmanMukul
  📧 Email: sr.mukul9090@gmail.com
  📅 Date: 01/10/2021 */

const e = require("express");
const express = require("express");
const fs = require("fs");
const app = express();
const port = 3000;

app.get("/", [
  (req, res, next) => {
    fs.readFile("/file-does-not-exist", (err, data) => {
      if (err) {
        next(err);
      } else {
        res.send(data);
      }
    });
    res.end();
  },
]);

// error handing self define function
app.get("/home", (req, res, next) => {
  setTimeout(function () {
    try {
      console.log(A);
    } catch (err) {
      next(err);
    }
  });
});

app.use((req, res, next) => {
  console.log("I an not called!");
  next();
});

// local server listening at 3000 port...
app.listen(port, (err) => {
  if (err) {
    console.log("Error: " + err);
  } else {
    console.log(`Express application successfully run at http://localhost:${port}`);
  }
});
