/* 
  π Title: Router
  πββοΈ Description: Router concepts with Express.Js
  π€ Author: Md. Samiur Rahman (Mukul) 
  πΈοΈ Website: http://www.SamiurRahmanMukul.epizy.com
  π¦ Github: http://www.github.com/SamiurRahmanMukul
  π§ Email: sr.mukul9090@gmail.com
  π Date: 30/09/2021 */

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
