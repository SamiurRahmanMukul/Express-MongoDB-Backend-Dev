/* 
  📛 Title: File Upload
  💁‍♀️ Description: File upload in Express application with multer
  👤 Author: Md. Samiur Rahman (Mukul) 
  🕸️ Website: http://www.SamiurRahmanMukul.epizy.com
  📦 Github: http://www.github.com/SamiurRahmanMukul
  📧 Email: sr.mukul9090@gmail.com
  📅 Date: 01/10/2021 */

const express = require("express");
const multer = require("multer");
const path = require("path");
const app = express();
const port = 3000;

// file upload folder
const UPLOAD_FOLDER = "./uploads";

// define the storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, UPLOAD_FOLDER);
  },
  filename: (req, file, cb) => {
    // Important File.pdf => important-file-24555555524.pdf
    const fileExt = path.extname(file.originalname);
    const fileName = file.originalname.replace(fileExt, "").toLowerCase().split(" ").join("-") + "-" + Date.now();
    cb(null, fileName + fileExt);
  },
});

// prepare the final multer upload object
var upload = multer({
  // dest: UPLOAD_FOLDER,
  storage: storage,
  limits: {
    fieldSize: 1000000, // 1MB
  },
  fileFilter: (req, file, cb) => {
    // console.log(file);
    // console.log(req.file);

    if (file.mimetype === "image/png" || file.mimetype === "image/jpg" || file.mimetype === "image/jpeg") {
      cb(null, true);
    } else {
      cb(new Error("Only .jpg, .jpeg & .png format allowed!"));
    }

    /* if (file.fieldname === "avatar" && file.fieldname === "gallery") {
      if (file.mimetype === "image/png" || file.mimetype === "image/jpg" || file.mimetype === "image/jpeg") {
        cb(null, true);
      } else {
        cb(new Error("Only .jpg, .jpeg & .png format allowed!"));
      }
    } else if (file.fieldname === "doc") {
      if (file.mimetype === "application/pdf") {
        cb(null, true);
      } else {
        cb(new Error("Only .pdf format allowed!"));
      }
    } else {
      cb(new Error("There was an unknown error!"));
    } */
  },
});

// application route
// ? single file upload
/* app.post("/", upload.single("avatar"), (req, res) => {
  res.send("Hello world!");
}); */

// ? multiple file upload
/* app.post("/", upload.array("avatar", 3), (req, res) => {
  res.send("Hello world!");
}); */

// ? multiple fields file upload
app.post(
  "/",
  upload.fields([
    { name: "avatar", maxCount: 1 },
    // { name: "gallery", maxCount: 2 },
    // { name: "doc", maxCount: 1 },
  ]),
  (req, res) => {
    res.send("Hello world!");
  }
);

// default error handler
app.use((err, req, res, next) => {
  if (err) {
    res.status(500).send(err.message);
  } else {
    res.send("Success");
  }
});

// local server listening at 3000 port...
app.listen(port, (err) => {
  if (err) {
    console.log("Error: " + err);
  } else {
    console.log(`Express application successfully run at http://localhost:${port}`);
  }
});
