const express = require("express");
const publicRouter = express.Router();

const log = (req, res, next) => {
  console.log("I am logging something");
  next();
};

// ? called all router something
publicRouter.all("*", log);

// ? parameter routing
/* publicRouter.param("user", (req, res, next, id) => {
  req.user = id === "1" ? "Admin" : "Anonymous";
  next();
}); */

publicRouter.param((param, option) => (req, res, next, value) => {
  if (value === option) {
    next();
  } else {
    res.sendStatus(403);
  }
});

publicRouter.param("user", "12");

publicRouter.get("/:user", (req, res) => {
  res.send(`Hello ${req.user}`);
  res.end();
});

// ? route() ~ method
publicRouter
  .route("/user")
  .all((req, res, next) => {
    console.log("I am logging something");
    next();
  })
  .get((req, res) => {
    res.send("GET");
  })
  .post((req, res) => {
    res.send("POST");
  })
  .put((req, res) => {
    res.send("PUT");
  })
  .delete((req, res) => {
    res.send("DELETE");
  });

// ? use() ~ method
publicRouter.use((req, res, next) => {
  console.log("Logging");
  next();
});

publicRouter.get("/about", (req, res) => {
  res.send("about");
  res.end();
});

module.exports = publicRouter;
