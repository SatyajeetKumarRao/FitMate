const express = require("express");

const { authenticateUser } = require("../middleware/users.middleware");
const { Food } = require("../models/Foods.model");

const foodRouter = express.Router();

const todayDate = () => {
  new Date().toISOString().split("T")[0];
};

foodRouter.get("/search", async (req, res) => {
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
