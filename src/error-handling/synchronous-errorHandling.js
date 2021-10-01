/* 
  📛 Title: Error Handing / Synchronous
  💁‍♀️ Description: Error Handling in Express Application
  👤 Author: Md. Samiur Rahman (Mukul) 
  🕸️ Website: http://www.SamiurRahmanMukul.epizy.com
  📦 Github: http://www.github.com/SamiurRahmanMukul
  📧 Email: sr.mukul9090@gmail.com
  📅 Date: 01/10/2021 */

const express = require("express");
const app = express();
const port = 3000;

app("/", (req, res) => {
  // res.send("Hello world!");

  for (let i = 0; i <= 10; i++) {
    if (i === 5) {
      next("There was an error!");
    } else {
      res.write(A);
    }
  }

  res.end();
});

// ? 404 error handling
app.use((req, res, next) => {
  next("Requested url was not found!");
});

// ? invisible default error handling middleware
app.use((err, req, res, next) => {
  // handling error here
  // console.log(err);
  // res.send("There was an error!")

  if (err.message) {
    res.status(500).send(err.message);
  } else {
    res.status(500).send("There was an error!");
  }
});

// local server listening at 3000 port...
app.listen(port, (err) => {
  if (err) {
    console.log("Error: " + err);
  } else {
    console.log(`Express application successfully run at http://localhost:${port}`);
  }
});
