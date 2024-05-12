const express = require("express");

const { authenticateUser } = require("../middleware/users.middleware");

const foodRouter = express.Router();

const todayDate = () => {
  new Date().toISOString().split("T")[0];
};

foodRouter.get("/search", (req, res) => {
  try {
  } catch (error) {}
});
