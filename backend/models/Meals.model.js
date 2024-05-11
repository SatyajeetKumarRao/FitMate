const mongoose = require("mongoose");

// Define Meal Schema
const mealSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    date: { type: String, default: new Date().toISOString().split("T")[0] },
    foods: [
      {
        _id: false,
        food: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Food",
        },
        quantity: Number,
      },
    ],
  },
  {
    versionKey: false,
  }
);

// Create Models

const Meal = mongoose.model("Meal", mealSchema);

module.exports = { Meal };
