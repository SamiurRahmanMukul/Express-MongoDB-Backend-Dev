/**
 * *Application - functions
 *  1. app.locals
 *  2. app.mountpath
 *  3. app.all
 *  4. app.disable
 *  5. app.param
 *  6. app.route
 *  7. app.engine
 *
 */

const express = require("express");
// const handle = require("./handler/handle");

const app = express();
const admin = express();
const port = 3000;

// ? 1.app.locals() - using set local variable & access any files in this project
app.locals.title = "My Application";

// ? 2.sub routing path & mountpath
app.use("/admin", admin);

admin.get("/dashboard", (req, res) => {
  console.log(admin.mountpath);

  res.send("Welcome to admin dashboard");
  res.end();
});

/* admin.on("mount", (parent) => {
  console.log("Admin Mounted");
  console.log(parent);
}); */

// ? 3.app.all() - method using request any method
app.all("/home", (req, res) => {
  res.send("This is Home page And Access ALL method");
  res.end();
});

// ? 4.app.disable() or app.disabled() and app.enable() or app.enabled() - method using enable / disable some settings
app.enable("case sensitive routing");
app.disable("case sensitive routing");

// ? 5.app.param() - method using request url data pass
app.param("id", (req, res, next, id) => {
  const user = {
    userId: id,
    name: "Samiur Rahman Mukul",
  };

  req.userDetails = user;
  next();
});

app.get("/user/:id", (req, res) => {
  console.log(req.userDetails);

  res.send("This is USER with GET request");
  res.end();
});

// ? 6.app.route() - method using single route access multiple method request
app
  .route("/about/mission")
  .get((req, res) => {
    // ! template engine render
    res.render("index");

    // res.send("This about/mission page with GET request");
    res.end();
  })
  .post((req, res) => {
    res.send("This about/mission page with POST request");
    res.end();
  })
  .put((req, res) => {
    res.send("This about/mission page with PUT request");
    res.end();
  });

// ? 7.app.engine() - method using set `template engine` by ejs
app.set("view engine", "ejs");

app.all("/template", () => {
  res.render("views");
});

app.all("/template/pages", () => {
  res.render("views/pages");
});

// get request
// app.get("/", handle);
app.get("/", (req, res) => {
  res.send("Home page with GET request");
  res.end();
});

// post request
app.post("/", (req, res) => {
  res.send("Home page with POST request");
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
