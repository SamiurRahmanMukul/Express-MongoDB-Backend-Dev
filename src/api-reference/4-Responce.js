/**
 * *Response - method / properties
 *  ! properties
 *  1. res.app // ? reference to the app instance
 *  2. res.headerSent // ? boolean if the app sent HTTP headers for the response
 *  3. res.locals // ? local variable scoped to the Response
 
 *  ! method
 *  4. res.cookie() // ? set's cookie name to value
 *  5. res.clearCookie() // ? clear cookie by name
 *  6. res.end() // ? ends the Response process
 *  7. res.send() // ? sends the HTTP response
 *  8. res.json() // ? sends JSON response
 *  9. res.status() // ? set's the HTTP status for the Response
 *  10. res.sendStatus() // ? set's the response HTTP status code
 *  11. res.render() // ? renders a view
 *  12. res.format() // ? performs content-negotiation on the Accept HTTP header on Request object
 *  13. res.location() // ? set's the Response Location HTTP header
 *  14. res.redirect() // ? redirects to the URL derived from the specified path
 *  15. res.get() // ? returns the HTTP Response header
 *  16. res.set() // ? set's Response's HTTP header to a value
 *
 */

const express = require("express");
const app = express();
const port = 3000;

// template engine
app.set("view engine", "ejs");

// ? 2. property / headersSent
// ? 3. property / locals
// get request with ABOUT url
app.get("/about", (req, res) => {
  res.render("/pages/about", {
    name: "Samiur Rahman Mukul",
  });
  res.end();

  // headersSent
  console.log(res.headersSent);
});

// !response method
app.get("/method", (req, res) => {
  // res.send("About");
  // res.json({ name: "Samiur Rahman Mukul" });
  // res.status(200);
  // res.sendStatus(400);
  /* res.format({
    "text/plain": () => {
      res.send("Hi");
    },
    "text/html": () => {
      res.render("pages/about", {
        name: "Samiur Rahman Mukul",
      });
    },
    "application/json": () => {
      res.json({ message: "About" });
    },
    default: () => {
      res.status(406).send("Not applicable");
    },
  }); */
  // res.cookie("name", "New Cookie");
  res.redirect("/test");
  res.set("Title", "Learn Express.Js");
  console.log(res.get("Platform"));
  res.end();
});

// test route
app.get("/test", (req, res) => {
  res.send("Hello world");
  res.end;
});

// get request with HOME url
app.get("/", (req, res) => {
  res.send("home url with get request");
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
