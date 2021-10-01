/* 
  📛 Title: Middleware
  💁‍♀️ Description: Express.Js concepts of Middleware
  👤 Author: Md. Samiur Rahman (Mukul) 
  🕸️ Website: http://www.SamiurRahmanMukul.epizy.com
  📦 Github: http://www.github.com/SamiurRahmanMukul
  📧 Email: sr.mukul9090@gmail.com
  📅 Date: 30/09/2021 */

/**
 * *Middleware --> functions thar heave access to `req` `res` object and `next` function
 *
 * Types Of Middleware:
 * 1. application level middleware
 * 2.router level middleware
 * 3. error-handling middleware
 * 4. built-in middleware
 * 5. third-party middleware
 *
 */

const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const port = 3000;

// third-party middleware
app.use(cookieParser());

const adminRouter = express.Router();
adminRouter.use(logger);

adminRouter.get("/dashboard", (req, res) => {
  res.send("Dashboard");
  res.end();
});

// make middleware
const myMiddleware = (req, res, next) => {
  console.log("I am logging");
  next();
};

const logger = (req, res, next) => {
  console.log(`${new Date(Date.now()).toString()} - ${req.method} - ${req.originalUrl} - ${req.protocol} - ${rew.ip}`);

  // next("text"); //  if next() add some text throw an error
  // next();

  throw new Error("This is an error");
};

const loggerWrapper = (options) => {
  (req, res, next) => {
    if (options.log) {
      console.log(`${new Date(Date.now()).toString()} - ${req.method} - ${req.originalUrl} - ${req.protocol} - ${rew.ip}`);

      next();
    } else {
      throw new Error("Failed to log");
    }
  };
};

adminRouter.use({ log: true });

app.use("/admin", adminRouter);

// called middleware
// app.use(myMiddleware);
app.use(logger);

// get route with ABOUT url
app.get("/about", (req, res) => {
  res.send("About");
  res.end();
});

// error handling middleware
const errorMiddleware = (err, req, res, next) => {
  console.log(err);
  res.status(500).send("There was a server side error!");
};

adminRouter.use(errorMiddleware);

// server listening on 3000 port...
app.listen(port, (err) => {
  if (err) {
    console.log("Error: " + err);
  } else {
    console.log(`Express app listening at http://localhost:${port}`);
  }
});
