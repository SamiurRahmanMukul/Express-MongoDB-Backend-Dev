const express = require("express");
const adminRouter = express.Router();

adminRouter.get("/", (req, res) => {
  res.send("Dashboard");
  res.end();
});

adminRouter.get("/login", (req, res) => {
  res.send("Login");
  res.end();
});

module.exports = adminRouter;
