/* 
  📛 Title: Router
  💁‍♀️ Description: Router concepts with Express.Js
  👤 Author: Md. Samiur Rahman (Mukul) 
  🕸️ Website: http://www.SamiurRahmanMukul.epizy.com
  📦 Github: http://www.github.com/SamiurRahmanMukul
  📧 Email: sr.mukul9090@gmail.com
  📅 Date: 30/09/2021 */

const express = require("express");
const adminRouter = require("./router/adminRouter");
const publicRouter = require("./router/publicRouter");
const app = express();
const port = 3000;

app.use("/", publicRouter);
app.use("/admin", adminRouter);

// local server listening on 3000 prot...
app.listen(port, (err) => {
  if (err) {
    console.log("Error: " + err);
  } else {
    console.log(`Express application listening on http://localhost:${port}`);
  }
});
