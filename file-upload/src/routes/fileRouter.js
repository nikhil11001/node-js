const express = require("express");
const fileRouter = express.Router();
const fs = require("fs");
const multer = require("multer");

const upload = multer();

fileRouter.post("/upload", upload.single("file"), (req, res, err) => {
  console.log(err);
  console.log(req.file);
  fs.promises
    .writeFile(`./uploads/${req.file.originalname}`, req.file.buffer)
    .then(() => {
      res.send("File uploaded successfully.....!");
    })
    .catch((error) => {
      res.status(400).send("Error");
    });
});

module.exports = fileRouter;
