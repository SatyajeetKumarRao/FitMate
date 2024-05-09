const mongoose = require("mongoose");

// Define Exercise Schema
const exerciseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: {
    type: String,
    enum: [
      "Cardio",
      "Strength",
      "Flexibility",
      "Dance",
      "Yoga",
      "Cycling",
      "Walking",
      "Running",
      "Stretching",
    ],
    required: true,
  },
  caloriesBurnedPerMinute: Number,
});

// Create Models

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = { Exercise };
