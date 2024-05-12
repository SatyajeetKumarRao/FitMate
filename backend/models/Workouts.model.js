const mongoose = require("mongoose");

// Define Workout Schema
const workoutSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    date: { type: Date, default: Date.now },
    exercises: [
      {
        _id: false,
        exercise: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Exercise",
        },
        duration: Number,
      },
    ],
  },
  {
    versionKey: false,
  }
);

// Create Models

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = { Workout };
