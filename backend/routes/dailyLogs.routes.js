const express = require("express");

const { authenticateUser } = require("../middleware/users.middleware");

const dailyLogRouter = express.Router();

dailyLogRouter.get("/", authenticateUser, async (req, res) => {
  try {
    return res.status(200).json({ data: foodsData });
  } catch (error) {
    console.log(error.message);
    return res.status(400).json({ error: true, message: error.message });
  }
});

module.exports = { dailyLogRouter };
