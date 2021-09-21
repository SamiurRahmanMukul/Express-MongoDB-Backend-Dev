/**
 * *express() - 7 function
 *  1. express.json([optional])
 *  2. express.raw([optional])
 *  3. express.router([optional])
 *  4. express.static([optional])
 *  5. express.text([optional])
 *  6. express.urlencoded([optional])
 *
 */

const express = require("express");

const app = express();

// TODO: express function using and body send different type data
// app.use(express.json()); // ? 1.get header/body `JSON Formatted` data
// app.use(express.raw()); // ? 2.get header/body `String/Stream Formatted` data
// app.use(express.text()); // ? 3.get header/body `text/plain Formatted` data
// app.use(express.urlencoded()); // ? 5.get header/body `urlencoded Formatted` data

// ? 4.express.static([optional]) - using some `files/assets` public access
app.use(
  express.static(`${__dirname}/public/`, {
    index: "home.html",
  })
);

// ? 3.express.Router() - using makes multiple router
const router = express.Router({
  caseSensitive: true,
});
app.use(router);

app.get("/", (req, res) => {
  console.log(req.body);
  // console.log(req.body.name);
  // console.log(req.body.toString());
  // console.log(typeof req.body);

  res.send("This is Home url with get request!");
  res.end();
});
app.post("/", (req, res) => {
  res.send("This is Home url with post request!");
  res.end();
});

// server listing with 3000 port...
app.listen(3000, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("server listening successfully on 3000 port...");
  }
});
