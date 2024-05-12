const express = require("express");

const { Food } = require("../models/Foods.model");
const { authenticateUser } = require("../middleware/users.middleware");

const foodRouter = express.Router();

foodRouter.get("/search", authenticateUser, async (req, res) => {
  try {
    const { name } = req.query;

    const foodsData = await Food.find({ name: RegExp(name, "i") });

    return res.status(200).json({ data: foodsData });
  } catch (error) {
    console.log(error.message);
    return res.status(400).json({ error: true, message: error.message });
  }
});

module.exports = { foodRouter };
