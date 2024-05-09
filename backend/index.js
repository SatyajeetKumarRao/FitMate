require("dotenv").config();
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  try {
    res.status(200).json({ message: "Server Home Page" });
  } catch (error) {
    res.status(500).json({ message: `Some error occurred, Error : ${error}` });
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running at port ${process.env.PORT}`);
});

module.exports = app;
