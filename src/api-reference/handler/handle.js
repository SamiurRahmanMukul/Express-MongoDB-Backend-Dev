const handle = (req, res) => {
  console.log(req.app.locals.title);

  res.send("Home page with GET request");
  res.end();
};

module.exports = handle;
