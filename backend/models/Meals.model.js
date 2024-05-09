const mongoose = require("mongoose");

// Define Meal Schema
const mealSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  date: { type: Date, default: Date.now },
  foods: [{ type: mongoose.Schema.Types.ObjectId, ref: "Food" }],
  quantity: Number,
});

// Create Models

const Meal = mongoose.model("Meal", mealSchema);

module.exports = { Meal };
