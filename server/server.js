require("dotenv").config();
const express = require("express");

const app = express();
const PORT = process.env.PORT || 8000;

const db = require("./config/mongoose");

app.use(express.json());

app.use("/", require("./routes"));
app.listen(PORT, () => {
  console.log("Backend Server is running");
});
