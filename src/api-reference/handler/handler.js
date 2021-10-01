const handler = (req, res) => {
  console.log(req.app.get("view engine"));
  console.log(req.accepts("json")); // accepts = Yes or No

  res.send("Handler / Hello World");
  res.end();
};

module.exports = handler;
