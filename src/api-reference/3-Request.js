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
const handler = require("./handler/handler");
const app = express();
const port = 3000;

app.use(express.json());
app.use(cookieParser());

// ! create custom route
const adminRoute = express.Router();

adminRoute.get("/dashboard", (req, res) => {
  console.log("baseUrl: " + req.baseUrl);
  console.log("originalUrl: " + req.originalUrl);
  console.log("url: " + req.url);
  console.log("path: " + req.path);
  console.log("hostname: " + req.hostname);
  console.log("method: " + req.method);
  console.log("protocol: " + req.protocol);
  console.log("secure: " + req.secure);
  console.log("route: " + req.route);

  // ! request method
  console.log("Request Method / json: " + req.accepts("json"));
  console.log("Request Method / accept: " + req.get("accept"));
  console.log("Request Method / name: " + req.param("name")); // ! express ignore this method - so not user

  res.send("We are in Admin Dashboard");
  res.end();
});

app.use("/admin", adminRoute);

app.get("/user/:id", (req, res) => {
  console.log("baseUrl: " + req.baseUrl);
  console.log("params: " + req.params);
  console.log("params.id: " + req.params.id);
  console.log("query: " + req.query);
  console.log("cookies: " + req.cookies);

  res.send("Hello World!");
  res.end();
});

app.post("/user", (req, res) => {
  console.log("body: " + req.body);
  console.log("route: " + req.route);

  res.send("user router with POST request");
  res.end();
});

app.get('/handler/"id', handler);

app.all("/", (req, res) => {
  res.send("home url with all request");
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
