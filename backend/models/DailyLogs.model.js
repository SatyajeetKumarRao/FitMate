const mongoose = require("mongoose");

// Define DailyLog Schema
const dailyLogSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    date: { type: String, default: new Date().toISOString().split("T")[0] },
    // weight: Number,
    meals: { type: mongoose.Schema.Types.ObjectId, ref: "Meal" },
    workouts: { type: mongoose.Schema.Types.ObjectId, ref: "Workout" },
    // caloriesRequired: Number,
    // caloriesBurned: Number,
    // caloriesConsumed: Number,
    // netCalories: Number,
  },
  {
    versionKey: false,
  }
);

// Create Models

const DailyLog = mongoose.model("DailyLog", dailyLogSchema);

module.exports = { DailyLog };
