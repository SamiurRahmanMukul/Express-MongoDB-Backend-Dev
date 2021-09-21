/**
 * *Request --> method / properties
 *  1. req.baseUrl
 *  2. req.originalUrl
 *  3. req.path
 *  4. req.hostname
 *  5. req.ip
 *  6. req.method
 *  7. req.protocol
 *  8. req.params
 *  9. req.query
 *  10. req.body
 *  11. req.cookies
 *  12. req.singedCookies
 *  13. req.secure
 *
 */

const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();
app.use(express.json());
app.use(cookieParser());

// ! create custom route
const adminRoute = express.Router();
adminRoute.get("/dashboard", (req, res) => {
  console.log(req.baseUrl);
  console.log(req.originalUrl);
  console.log(req.url);
  console.log(req.path);
  console.log(req.hostname);
  console.log(req.method);
  console.log(req.protocol);
  console.log(req.secure);
  console.log(req.route);

  // ! request method
  console.log(req.accepts("json"));
  console.log(req.get("accept"));
  console.log(req.param("name")); // ! express ignore this method - so not user

  res.send("We are in Admin Dashboard");
  res.end();
});

app.use("/admin", adminRoute);

app.get("/user/:id", (req, res) => {
  console.log(req.baseUrl);
  console.log(req.params);
  console.log(req.params.id);
  console.log(req.query);
  console.log(req.cookies);

  res.send("Hello World!");
  res.end();
});

app.post("/user", (req, res) => {
  console.log(req.body);

  res.send("user router with POST request");
  res.end();
});

app.listen(3000, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("server listen successfully on 3000 port...");
  }
});
