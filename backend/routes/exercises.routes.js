const express = require("express");

const { authenticateUser } = require("../middleware/users.middleware");
const { Exercise } = require("../models/Exercises.model");

const exerciseRouter = express.Router();

exerciseRouter.get("/search", authenticateUser, async (req, res) => {
  try {
    const { name } = req.query;
    console.log(name);

    const exerciseData = await Exercise.find({ name: RegExp(name, "i") });

    return res.status(200).json({ data: exerciseData });
  } catch (error) {
    console.log(error.message);
    return res.status(400).json({ error: true, message: error.message });
  }
});

module.exports = { exerciseRouter };
