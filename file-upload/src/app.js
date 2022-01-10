const express = require("express");
const fileRouter = require("./routes/fileRouter");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/upload", express.static("./uploads"));

app.use("/", fileRouter);

app.listen(8000, () => {
  console.log("Server listing on port 8000");
});
