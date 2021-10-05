/* 
  📛 Title: Mongoose TODO App
  💁‍♀️ Description: Express.Js & Mongoose.Js CURD Operations
  👤 Author: Md. Samiur Rahman (Mukul) 
  🕸️ Website: http://www.SamiurRahmanMukul.epizy.com
  📦 Github: http://www.github.com/SamiurRahmanMukul
  📧 Email: sr.mukul9090@gmail.com
  📅 Date: 03/10/2021 */

const express = require("express");
const mongoose = require("mongoose");
const todoHandler = require("./routeHandler/todoHandler");

const port = 3000;

// express app initialization
const app = express();
app.use(express.json());

// database connection with mongoose
mongoose
  .connect("mongodb://localhost/todos", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connection successful!"))
  .catch((err) => console.log(err));

// application routes
app.use("/todo", todoHandler);

// default error handler
function errorHandler(err, req, res, next) {
  if (res.headersSent) {
    return next(err);
  }
  res.status(500).json({ error: err });
}

// todos application run at 3000 port...
app.listen(port, (err) => {
  if (err) {
    console.log("Error: " + err);
  } else {
    console.log(`Todo app listing at http://localhost:${port}`);
  }
});
